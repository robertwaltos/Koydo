import type { LearningModule } from "@/lib/modules/types";

export const BusinessAnalytics201Module: LearningModule = {
  "id": "business-analytics-201",
  "title": "Statistical Methods for Business",
  "description": "Master the statistical techniques that power rigorous business analysis. From hypothesis testing and regression to ANOVA and survey design, learn to draw reliable conclusions from data and distinguish real effects from random noise.",
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
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Formulate and test business hypotheses using statistical methods",
    "Build and interpret simple and multiple regression models",
    "Distinguish correlation from causation in business data",
    "Design effective sampling strategies and surveys",
    "Construct and interpret confidence intervals",
    "Apply ANOVA to compare performance across groups",
    "Evaluate practical significance alongside statistical significance"
  ],
  "lessons": [
    {
      "id": "business-analytics-201-l01",
      "title": "Hypothesis Testing for Business Decisions",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Formulate null and alternative hypotheses for business questions",
        "Explain p-values and significance levels in business terms",
        "Distinguish between Type I and Type II errors"
      ],
      "chunks": [
        {
          "id": "business-analytics-201-l01-c1",
          "title": "Setting Up Hypotheses",
          "content": "Hypothesis testing is a structured and systematic method that helps us make informed decisions when we are faced with uncertainty about outcomes. This process begins with the formulation of two key statements: the null hypothesis (H₀) and the alternative hypothesis (H₁). The null hypothesis represents the current situation or belief that we are testing. For instance, we might state, 'The new pricing strategy does not have any effect on sales.' This means we assume that the current pricing strategy is effective as it is. On the other hand, the alternative hypothesis is what we are trying to prove or explore further. In this example, it would be stated as, 'The new pricing strategy increases sales.' Our main objective in conducting the test is to analyze the data we have collected to determine if there is sufficient evidence to reject the null hypothesis. This is a critical step because, in the realm of business, framing the right hypothesis is often more important than the mathematical calculations involved in the testing process. A well-defined hypothesis can guide our analysis and help us make better decisions based on the evidence we gather from our data."
        },
        {
          "id": "business-analytics-201-l01-c2",
          "title": "P-Values and Significance Levels",
          "content": "The p-value is an essential concept in the world of hypothesis testing, which is a method used to make decisions based on data. It helps us evaluate how strong our results are. Specifically, the p-value tells us how likely it is to observe the results we have obtained (or even more extreme results) if the null hypothesis were actually true. The null hypothesis is a statement that there is no effect or no difference, and it serves as a starting point for our testing. When we calculate a p-value, a small number—typically below 0.05—suggests that our data does not align well with the null hypothesis. This can lead us to think that we have enough evidence to reject the null hypothesis and consider an alternative explanation. Before we conduct our test, we also set a significance level, often denoted as alpha (α), which is usually set at 0.05. This significance level indicates that we are willing to accept a 5% chance of making an error by incorrectly rejecting the null hypothesis when it is actually true. It is crucial to understand that the p-value does not provide the probability that the null hypothesis is true; rather, it gives us the probability of observing our data, assuming that the null hypothesis holds true. This distinction is important for making informed decisions based on statistical analysis."
        },
        {
          "id": "business-analytics-201-l01-c3",
          "title": "Type I and Type II Errors",
          "content": "In the world of hypothesis testing, it's crucial to understand two specific types of errors that can impact business decisions: Type I errors and Type II errors. A Type I error, often referred to as a false positive, occurs when we mistakenly reject the null hypothesis (H₀) even though it is true. For example, imagine we conduct a marketing campaign and conclude that it is successful based on our analysis, but in reality, it is not effective. This misjudgment can lead to unnecessary spending on a campaign that does not yield any real benefits. On the flip side, we have the Type II error, also known as a false negative. This error happens when we fail to reject the null hypothesis when it is actually false. In simpler terms, we might miss out on recognizing a successful strategy because we did not see the evidence that supports its effectiveness. The implications of these errors in a business setting can be significant. A Type I error could waste valuable resources on a campaign that doesn't work, while a Type II error might cause us to abandon a strategy that could have been profitable. Therefore, it is essential for businesses to carefully weigh the risks associated with both types of errors. Striking a balance between these risks is not just a statistical consideration; it is a vital strategic decision that can influence the overall success of a business."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-201-l01-f1",
          "front": "Null hypothesis (H₀)",
          "back": "The default assumption representing the status quo — typically states there is no effect, no difference, or no relationship"
        },
        {
          "id": "business-analytics-201-l01-f2",
          "front": "P-value",
          "back": "The probability of observing the data (or more extreme) if the null hypothesis is true — small values suggest evidence against H₀, but it is NOT the probability H₀ is true"
        },
        {
          "id": "business-analytics-201-l01-f3",
          "front": "Type I vs. Type II error",
          "back": "Type I (false positive): rejecting H₀ when it is true. Type II (false negative): failing to reject H₀ when it is false. Business context determines which is costlier."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-201-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "business-analytics-201-l02",
      "title": "Regression Analysis",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Build and interpret a simple linear regression model",
        "Extend to multiple regression with several predictors",
        "Assess model fit using R-squared and residual analysis"
      ],
      "chunks": [
        {
          "id": "business-analytics-201-l02-c1",
          "title": "Simple Linear Regression",
          "content": "Simple linear regression is a powerful statistical tool that helps us understand how two variables are related. In this method, we focus on one independent variable, which we can think of as the cause or input (let's call it X), and one dependent variable, which is the effect or output (we'll call it Y). The relationship between these two variables is represented by a straight line, and we can express this relationship using a specific equation: Y = β₀ + β₁X + ε. In this equation, β₁ is known as the slope, and it tells us how much the dependent variable Y will change when the independent variable X increases by one unit. For instance, if we look at how advertising spending (X) affects sales revenue (Y), the slope will show us the average increase in sales revenue for each additional dollar spent on advertising. On the other hand, β₀ is called the intercept, and it represents the predicted value of Y when X is zero. This means that if no money is spent on advertising, β₀ gives us an estimate of what the sales revenue would be. By using simple linear regression, businesses can gain valuable insights into their marketing strategies and make more informed decisions about how to allocate their resources effectively. This method not only helps in understanding past performance but also aids in predicting future outcomes based on different spending levels, making it an essential tool for any business looking to optimize its operations and maximize profits."
        },
        {
          "id": "business-analytics-201-l02-c2",
          "title": "Multiple Regression",
          "content": "Multiple regression is a powerful statistical technique that builds on the concept of simple linear regression. It allows us to examine how multiple independent variables can influence a single dependent variable. The formula for multiple regression is expressed as Y = β₀ + β₁X₁ + β₂X₂ + ... + ε. In this equation, Y represents the dependent variable we are trying to predict, while X₁, X₂, and so on are the independent variables that may affect Y. Each independent variable has its own coefficient, denoted by β₁, β₂, etc., which indicates the strength and direction of its relationship with the dependent variable.\nFor example, if we want to analyze how sales are affected by price, advertising efforts, and seasonal trends, multiple regression allows us to see how each of these factors contributes to sales while accounting for the influence of the others. This way, we can better understand which factors are most significant.\nHowever, it is important to be aware of a phenomenon called multicollinearity. This occurs when two or more independent variables are highly correlated with each other, which can lead to unreliable estimates of their individual effects. Therefore, careful consideration and analysis are necessary to ensure accurate results in our regression models."
        },
        {
          "id": "business-analytics-201-l02-c3",
          "title": "Assessing Model Fit",
          "content": "Understanding how well our regression model fits the data is really important for evaluating its effectiveness. One of the key measures we use is called R-squared. This statistic tells us what portion of the variation in our dependent variable, often represented as Y, is explained by our model. R-squared values can range from 0 to 1. For instance, if we have an R-squared value of 0.75, it means that our model is able to explain 75% of the variation in Y. However, we need to be careful because R-squared will always increase when we add more predictors to our model, even if those predictors don’t actually improve the model’s performance. To address this, we use a modified version called adjusted R-squared, which takes into account the number of predictors and penalizes the model for being overly complex. Furthermore, we can perform a residual analysis, which involves plotting the differences between the actual values and the values predicted by our model. This analysis helps us spot any patterns that might suggest our model is not fulfilling its assumptions. For example, if we see certain patterns in the residuals, it could mean that we are missing important variables, that the relationship is not linear, or that there are issues with the variance of the data. By carefully assessing these aspects, we can improve our model and make better predictions."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-201-l02-f1",
          "front": "Slope (β₁) in simple regression",
          "back": "The change in the dependent variable Y for a one-unit increase in the independent variable X — measures the strength and direction of the linear relationship"
        },
        {
          "id": "business-analytics-201-l02-f2",
          "front": "Multicollinearity",
          "back": "When independent variables in a multiple regression are highly correlated with each other — makes individual coefficient estimates unstable and hard to interpret"
        },
        {
          "id": "business-analytics-201-l02-f3",
          "front": "R-squared (R²)",
          "back": "The proportion of variance in the dependent variable explained by the model — ranges from 0 to 1, but use adjusted R² when comparing models with different numbers of predictors"
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-201-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "business-analytics-201-l03",
      "title": "Correlation vs. Causation",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Distinguish correlation from causation with business examples",
        "Identify common sources of spurious correlations",
        "Explain what is needed to establish causal claims"
      ],
      "chunks": [
        {
          "id": "business-analytics-201-l03-c1",
          "title": "Correlation Is Not Causation",
          "content": "Understanding the difference between correlation and causation is crucial for anyone working with data, especially in business. Correlation is a statistical measure that indicates the strength and direction of a linear relationship between two variables. This relationship is quantified on a scale from -1 to +1, where -1 indicates a perfect negative correlation, 0 indicates no correlation, and +1 indicates a perfect positive correlation. However, it is important to remember that correlation does not imply causation. This means that just because two variables are correlated, it does not mean that one variable causes the other to change.\nFor instance, consider the relationship between ice cream sales and drowning incidents. During the summer months, both ice cream sales and drowning incidents tend to increase, which creates a positive correlation. However, this does not mean that buying ice cream leads to drowning. Instead, the warmer weather is a confounding variable that influences both factors.\nIn the business world, we might notice that companies that invest more in employee training often report higher profits. While this observation suggests a correlation, it does not prove that increased training directly causes higher profits. It is possible that larger, more successful companies simply have more resources to allocate towards training, which could explain the correlation without implying a direct cause-and-effect relationship. Understanding these nuances helps in making informed decisions based on data analysis."
        },
        {
          "id": "business-analytics-201-l03-c2",
          "title": "Sources of Spurious Correlation",
          "content": "Spurious correlations can be misleading because they make it seem like two variables are related when they might not be. This can happen for several reasons. One reason is confounding variables, which are outside factors that influence both variables, creating a false impression of a relationship. Another reason is reverse causation, where it looks like one variable causes another, but in reality, it is the second variable that is influencing the first. Additionally, selection bias can occur when the sample used in a study does not accurately represent the larger population, leading to incorrect conclusions. There is also a concept called omitted variable bias, which happens when important factors are left out of a regression analysis. This can make it seem like the included variables have effects that they really do not. To ensure that we are interpreting data correctly, it is essential to ask ourselves if there is a reasonable explanation for the relationship we see and if we have considered other possible explanations. By doing this, we can better understand the true nature of the data we are analyzing and avoid falling into the trap of spurious correlations."
        },
        {
          "id": "business-analytics-201-l03-c3",
          "title": "Establishing Causation",
          "content": "To determine if one variable causes changes in another, researchers must satisfy three important conditions. First, there must be a correlation, which means that when one variable (let's call it X) changes, the other variable (Y) also changes in a consistent way. Second, we need to establish temporal precedence, which means that X must occur before Y. This helps us understand the direction of the relationship. Lastly, we must ensure that there are no confounding factors, which are alternative explanations that could account for the observed relationship between X and Y.\nThe best way to establish causation is through randomized controlled experiments, such as A/B tests. In these experiments, participants are randomly assigned to different groups, which helps to eliminate any confounding factors that might skew the results. However, sometimes it is not possible to conduct these types of experiments. In such cases, researchers can use quasi-experimental methods, like difference-in-differences or instrumental variables, to provide stronger evidence for causal relationships. These methods help to approximate the conditions of a controlled experiment, allowing researchers to draw more reliable conclusions about causation."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-201-l03-f1",
          "front": "Confounding variable",
          "back": "A third variable that is related to both the independent and dependent variables, creating a misleading appearance of a direct relationship between them"
        },
        {
          "id": "business-analytics-201-l03-f2",
          "front": "Three conditions for causation",
          "back": "Correlation (X and Y co-occur), temporal precedence (X happens before Y), and elimination of confounders (no alternative explanations)"
        },
        {
          "id": "business-analytics-201-l03-f3",
          "front": "Why randomized experiments establish causation",
          "back": "Random assignment ensures that treatment and control groups are equivalent on all factors — any difference in outcomes must be caused by the treatment, not confounders"
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "business-analytics-201-l04",
      "title": "Sampling and Survey Design",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Compare probability and non-probability sampling methods",
        "Design survey questions that minimize bias",
        "Calculate the sample size needed for a given margin of error"
      ],
      "chunks": [
        {
          "id": "business-analytics-201-l04-c1",
          "title": "Sampling Methods",
          "content": "When we conduct research, it's really important to choose the right sampling method to get trustworthy results. Probability sampling is a technique that ensures every member of the population has a known chance of being selected. One popular method is called simple random sampling. In this method, individuals are chosen completely at random from the entire population, which helps to avoid bias. Another useful approach is stratified sampling. This method involves dividing the population into smaller groups, known as strata, and then taking samples from each of these groups. This way, we can ensure that different segments of the population are represented. There's also cluster sampling, where entire groups, or clusters, are selected randomly. On the flip side, we have non-probability sampling methods. These include convenience sampling, snowball sampling, and quota sampling. While these methods are often cheaper and easier to implement, they do not guarantee that the sample will accurately reflect the entire population. If businesses make decisions based on biased samples, it can lead to poor strategies and negative outcomes. Therefore, understanding these sampling methods is essential for making informed business decisions."
        },
        {
          "id": "business-analytics-201-l04-c2",
          "title": "Designing Effective Surveys",
          "content": "Designing effective surveys is a crucial step in collecting accurate and meaningful information. To create good survey questions, they should be clear, concise, and free from any bias. This means avoiding leading questions, which suggest a particular answer, like asking, 'Don't you agree that our service is excellent?' Such questions can influence the respondent's answer. It's also important to steer clear of double-barreled questions, which ask about two different things at once, such as 'How satisfied are you with our price and quality?' These can confuse respondents and lead to unclear results.\nUsing established scales, like the Likert scale (which ranges from 1 to 5) or the Net Promoter Score, can help ensure that responses are consistent and easier to analyze. Additionally, the order in which questions are presented can significantly impact the quality of the responses. Starting with general questions and gradually moving to more specific ones can help respondents feel more comfortable and provide more thoughtful answers.\nBefore you launch your survey to a larger audience, it's a good idea to pilot test it with a small group. This allows you to catch any confusing wording or potential issues, ensuring that your survey is as effective as possible when it reaches a wider audience. By following these guidelines, you can design surveys that yield valuable insights and help you make informed decisions."
        },
        {
          "id": "business-analytics-201-l04-c3",
          "title": "Sample Size Determination",
          "content": "When you're designing a survey, one of the most important steps is figuring out how many people you need to include in your sample. This is called determining the sample size, and it plays a crucial role in how accurate your results will be. The sample size you choose will depend on a few key factors: the level of confidence you want in your results, how much error you are willing to accept, and how much variation exists in the population you are studying.\nTo calculate the sample size for estimating proportions, you can use a specific formula: n = (Z² × p × (1-p)) / E². In this formula, 'n' represents the sample size, 'Z' is the Z-score that corresponds to your desired confidence level, 'p' is the estimated proportion of the population that has the characteristic you are measuring, and 'E' is the margin of error you are willing to accept.\nFor instance, if you want to be 95% confident in your results and are okay with a margin of error of ±3%, you would need about 1,068 people to respond to your survey. It's important to remember that while larger samples can lead to more accurate results, they also cost more money. Therefore, businesses need to carefully consider the balance between achieving precise results and staying within their budget. This decision-making process is a key part of effective survey design and can significantly impact the quality of the data you collect."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-201-l04-f1",
          "front": "Stratified sampling",
          "back": "Dividing the population into homogeneous subgroups (strata) and sampling from each — ensures representation of all important segments"
        },
        {
          "id": "business-analytics-201-l04-f2",
          "front": "Leading question (survey bias)",
          "back": "A question worded to suggest a desired answer — e.g., 'Don't you agree our service is excellent?' — biases responses and undermines data quality"
        },
        {
          "id": "business-analytics-201-l04-f3",
          "front": "Sample size tradeoff",
          "back": "Larger samples give more precise estimates (smaller margin of error) but cost more — sample size must balance statistical precision against budget constraints"
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-201-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "business-analytics-201-l05",
      "title": "Checkpoint: Statistical Methods",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "business-analytics-201-l05-q1",
          "text": "A marketing team tests whether a new email subject line increases open rates. They find p = 0.03. At α = 0.05, what should they conclude?",
          "options": [
            {
              "id": "a",
              "text": "There is a 3% chance the new subject line works"
            },
            {
              "id": "b",
              "text": "Reject H₀ — the data provides sufficient evidence that the new subject line affects open rates"
            },
            {
              "id": "c",
              "text": "Fail to reject H₀ — the result is not significant"
            },
            {
              "id": "d",
              "text": "The new subject line increases open rates by 3%"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Since p = 0.03 is less than α = 0.05, we reject the null hypothesis. The p-value is not the probability the subject line works, nor does it indicate the effect size."
        },
        {
          "id": "business-analytics-201-l05-q2",
          "text": "In a multiple regression, R² = 0.82. What does this mean?",
          "options": [
            {
              "id": "a",
              "text": "The model explains 82% of the variance in the dependent variable"
            },
            {
              "id": "b",
              "text": "The correlation between X and Y is 0.82"
            },
            {
              "id": "c",
              "text": "82% of predictions will be exactly correct"
            },
            {
              "id": "d",
              "text": "The model has an 82% chance of being valid"
            }
          ],
          "correctOptionId": "a",
          "explanation": "R² represents the proportion of variance in the dependent variable that the model explains. It does not mean 82% of predictions are exact or that the correlation is 0.82."
        },
        {
          "id": "business-analytics-201-l05-q3",
          "text": "A study finds that cities with more police officers have more crime. A researcher concludes that hiring police causes crime. What error is this?",
          "options": [
            {
              "id": "a",
              "text": "Type I error"
            },
            {
              "id": "b",
              "text": "Confusing correlation with causation — likely reverse causation"
            },
            {
              "id": "c",
              "text": "Sampling bias"
            },
            {
              "id": "d",
              "text": "Multicollinearity"
            }
          ],
          "correctOptionId": "b",
          "explanation": "This is reverse causation — cities hire more police because they have more crime, not the other way around. Confusing correlation with causation leads to incorrect causal claims."
        },
        {
          "id": "business-analytics-201-l05-q4",
          "text": "Which sampling method divides the population into subgroups and samples from each?",
          "options": [
            {
              "id": "a",
              "text": "Simple random sampling"
            },
            {
              "id": "b",
              "text": "Convenience sampling"
            },
            {
              "id": "c",
              "text": "Stratified sampling"
            },
            {
              "id": "d",
              "text": "Cluster sampling"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Stratified sampling divides the population into homogeneous strata and samples from each. Cluster sampling selects entire groups, and simple random gives everyone equal chance without subgrouping."
        }
      ]
    },
    {
      "id": "business-analytics-201-l06",
      "title": "Confidence Intervals & ANOVA",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Construct and interpret confidence intervals for means and proportions",
        "Apply one-way ANOVA to compare means across multiple groups",
        "Identify when post-hoc tests are needed after ANOVA"
      ],
      "chunks": [
        {
          "id": "business-analytics-201-l06-c1",
          "title": "Confidence Intervals",
          "content": "A 95% confidence interval is a valuable tool that helps us understand a range of values that we believe could accurately represent a specific characteristic of a larger group, which we call a population. For instance, if we calculate that the average amount customers spend is between $47 and $53, we can confidently say that we are 95% sure the true average spending of all customers falls somewhere within that range. This means that if we were to take many different samples of customers, 95% of the time, the average we calculate would fall within this interval. The width of this interval can vary depending on two main factors: the number of people we surveyed and how much their spending habits differ from one another. Generally, when we survey a larger group of people, the confidence interval becomes narrower, which indicates that we can make more precise estimates about the average spending. Confidence intervals are especially useful because they provide more detailed information than just p-values; they show not only the estimated effect but also how reliable that estimate is. This additional context helps businesses make better decisions based on the data they collect, ensuring they understand not just what the average is, but how much confidence they can have in that average being accurate."
        },
        {
          "id": "business-analytics-201-l06-c2",
          "title": "One-Way ANOVA",
          "content": "One-Way ANOVA, which stands for Analysis of Variance, is a powerful statistical tool that helps us understand if there are meaningful differences between the average values of three or more groups. Instead of performing multiple t-tests, which can increase the risk of making errors in our conclusions, we use ANOVA to streamline the process. It employs a calculation known as the F-statistic, which allows us to assess the variation between the group averages compared to the variation within each group. If the F-statistic reaches a sufficiently high value, and the result is statistically significant—indicated by a p-value that is less than a set threshold—we can confidently say that at least one group's average is different from the others. For example, we might apply One-Way ANOVA to analyze customer satisfaction scores collected from four different regional offices. By doing this, we can identify whether there are any significant differences in how satisfied customers are based on their location, which can help businesses make informed decisions to improve their services."
        },
        {
          "id": "business-analytics-201-l06-c3",
          "title": "Post-Hoc Testing",
          "content": "When we conduct an ANOVA test and find a significant result, it tells us that there are differences among the averages of different groups. However, it does not specify which particular groups are different from one another. To identify these specific differences, we use what are known as post-hoc tests. These tests include methods like Tukey's HSD, Bonferroni correction, and Scheffé's method. Each of these methods allows us to compare pairs of groups while also managing the overall risk of making an error in our conclusions. Among these, Tukey's HSD is one of the most commonly used methods for comparing all possible pairs of groups. If we skip the post-hoc analysis after finding a significant ANOVA result, we would only have a limited understanding of our data. This could lead to incomplete or even misleading conclusions, which can affect our decision-making process. Therefore, it is crucial to perform post-hoc tests to gain a clearer and more accurate picture of the differences between groups, ensuring that our decisions are based on comprehensive and reliable information."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-201-l06-f1",
          "front": "95% confidence interval",
          "back": "A range of values within which we are 95% confident the true population parameter lies — wider intervals indicate less precision, narrower intervals indicate more"
        },
        {
          "id": "business-analytics-201-l06-f2",
          "front": "ANOVA (Analysis of Variance)",
          "back": "Statistical test comparing means across three or more groups using the F-statistic — avoids the inflated error rate of running multiple t-tests"
        },
        {
          "id": "business-analytics-201-l06-f3",
          "front": "Tukey's HSD (post-hoc test)",
          "back": "A pairwise comparison method used after a significant ANOVA to determine which specific group means differ — controls the family-wise error rate"
        }
      ]
    },
    {
      "id": "business-analytics-201-l07",
      "title": "Final Assessment: Statistical Methods for Business",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "business-analytics-201-l07-q1",
          "text": "A company finds that its new training program increases productivity with p = 0.04 and a 95% CI of [0.2%, 3.1%]. The CEO asks if this is worth the $2 million investment. What concept should guide this decision?",
          "options": [
            {
              "id": "a",
              "text": "Statistical power"
            },
            {
              "id": "b",
              "text": "Practical significance vs. statistical significance"
            },
            {
              "id": "c",
              "text": "Type II error rate"
            },
            {
              "id": "d",
              "text": "Adjusted R-squared"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The result is statistically significant (p < 0.05), but the effect is small (0.2% to 3.1% increase). Practical significance asks whether this effect is large enough to justify the cost — a statistically real but tiny improvement may not warrant $2M."
        },
        {
          "id": "business-analytics-201-l07-q2",
          "text": "In a regression model, the coefficient for advertising spend is β₁ = 2.5. What is the interpretation?",
          "options": [
            {
              "id": "a",
              "text": "For every $1 increase in advertising spend, sales increase by $2.50 on average, holding other variables constant"
            },
            {
              "id": "b",
              "text": "Advertising and sales have a 2.5 correlation"
            },
            {
              "id": "c",
              "text": "2.5% of sales variance is explained by advertising"
            },
            {
              "id": "d",
              "text": "The model is 2.5 times better than the null model"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A regression coefficient represents the expected change in Y for a one-unit increase in X, holding other predictors constant. It is not a correlation or R² value."
        },
        {
          "id": "business-analytics-201-l07-q3",
          "text": "An ANOVA test comparing customer satisfaction across five stores yields p = 0.002. What is the correct next step?",
          "options": [
            {
              "id": "a",
              "text": "Conclude all stores differ from each other"
            },
            {
              "id": "b",
              "text": "Run post-hoc tests to identify which specific stores differ"
            },
            {
              "id": "c",
              "text": "Increase the sample size and retest"
            },
            {
              "id": "d",
              "text": "Switch to a chi-square test"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A significant ANOVA tells you at least one pair of means differs, but not which ones. Post-hoc tests (like Tukey's HSD) identify the specific pairs that differ."
        },
        {
          "id": "business-analytics-201-l07-q4",
          "text": "A confidence interval for average order value is [$82, $94]. If you collected a larger sample, the interval would most likely:",
          "options": [
            {
              "id": "a",
              "text": "Shift to higher values"
            },
            {
              "id": "b",
              "text": "Become wider"
            },
            {
              "id": "c",
              "text": "Become narrower"
            },
            {
              "id": "d",
              "text": "Stay exactly the same"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Larger samples reduce the standard error, which narrows the confidence interval — providing a more precise estimate of the population mean."
        }
      ]
    }
  ]
};
