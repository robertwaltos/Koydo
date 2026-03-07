import type { LearningModule } from "@/lib/modules/types";

export const business_analytics_201_Module: LearningModule = {
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
  "version": "1.1.0",
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
      "title": "Foundations: Sampling & Confidence Intervals",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Compare probability and non-probability sampling methods",
        "Design survey questions that minimize bias",
        "Construct and interpret confidence intervals for means and proportions"
      ],
      "chunks": [
        {
          "id": "business-analytics-201-l01-c1",
          "title": "Sampling Methods",
          "content": "Effective research requires a sampling method that yields trustworthy results. Probability sampling ensures every member of a population has a known, non-zero chance of selection. Simple random sampling chooses individuals entirely by chance, minimizing bias. Stratified sampling divides the population into subgroups (strata) and samples from each, ensuring representation of key segments. In contrast, non-probability methods like convenience or quota sampling are often faster and cheaper but do not allow for statistical inference about the population, as the sample may not be representative. Business decisions based on biased samples can lead to flawed strategies."
        },
        {
          "id": "business-analytics-201-l01-c2",
          "title": "Designing Effective Surveys",
          "content": "The quality of survey data depends on question design. Questions must be clear, concise, and neutral. Avoid leading questions (e.g., 'Don't you agree our service is excellent?') that suggest a desired answer, and double-barreled questions that ask two things at once ('How satisfied are you with our price and quality?'). Using established scales like a Likert scale (e.g., 1-5 rating) or Net Promoter Score ensures response consistency and comparability. Before a full launch, pilot testing the survey with a small group is critical to identify confusing wording or design flaws, thereby improving the quality of the final data."
        },
        {
          "id": "business-analytics-201-l01-c3",
          "title": "Confidence Intervals",
          "content": "A confidence interval provides a range of plausible values for a population parameter, such as a mean or proportion. For example, a 95% confidence interval for average customer spend of [$47, $53] means we are 95% confident the true population average lies within this range. The interval's width reflects our precision: a narrower interval implies a more precise estimate. This width is determined by the confidence level, sample size, and data variability. Larger samples typically produce narrower, more precise intervals. Confidence intervals are often more informative than a simple hypothesis test because they quantify both the estimated effect and the uncertainty around it."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-201-l01-f1",
          "front": "Stratified sampling",
          "back": "A probability sampling method where the population is divided into homogeneous subgroups (strata) and random samples are drawn from each. This ensures representation of all key segments."
        },
        {
          "id": "business-analytics-201-l01-f2",
          "front": "Leading question",
          "back": "A survey question worded to suggest a desired answer or contain biased phrasing. It undermines data validity by influencing respondent answers."
        },
        {
          "id": "business-analytics-201-l01-f3",
          "front": "95% confidence interval",
          "back": "A range of values within which we are 95% confident the true population parameter lies. A narrower interval indicates greater precision."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-201-l01-a1",
          "type": "image",
          "title": "Population vs. Sample",
          "content": "A diagram illustrating the concept of drawing a sample from a larger population. A confidence interval is shown around the sample mean, representing the range of plausible values for the true population mean."
        }
      ]
    },
    {
      "id": "business-analytics-201-l02",
      "title": "Hypothesis Testing & Practical Significance",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Formulate null and alternative hypotheses for business questions",
        "Interpret p-values and significance levels in a business context",
        "Distinguish between statistical significance and practical significance"
      ],
      "chunks": [
        {
          "id": "business-analytics-201-l02-c1",
          "title": "Formulating Hypotheses",
          "content": "Hypothesis testing provides a structured framework for making decisions under uncertainty. The process begins by stating two competing hypotheses: the null hypothesis (H₀) and the alternative hypothesis (H₁). The null hypothesis represents the status quo or a default assumption of no effect, such as 'The new ad campaign has no effect on sales.' The alternative hypothesis represents the claim we wish to test, such as 'The new ad campaign increases sales.' The goal of the test is to determine if there is enough statistical evidence in the data to reject the null hypothesis in favor of the alternative."
        },
        {
          "id": "business-analytics-201-l02-c2",
          "title": "P-Values and Statistical Significance",
          "content": "The p-value is the probability of observing our data, or something more extreme, if the null hypothesis were true. A small p-value indicates that our observed data is unlikely under the null hypothesis. Before the test, we set a significance level (alpha, α), typically 0.05, which is the threshold for our decision. If the p-value is less than α, we reject the null hypothesis and declare the result 'statistically significant.' It is crucial to understand that a p-value is not the probability that the null hypothesis is true; it is a measure of evidence against it."
        },
        {
          "id": "business-analytics-201-l02-c3",
          "title": "Practical vs. Statistical Significance",
          "content": "A statistically significant result is not always practically significant. Statistical significance simply means an effect is unlikely to be due to random chance. Practical significance, or managerial importance, addresses whether the effect is large enough to be meaningful in a real-world context. For example, a new website design might increase the average time on page by 0.1 seconds with a p-value of 0.001. While statistically significant, this tiny improvement may not justify the cost of implementation. Decision-makers must always evaluate both the statistical evidence and the magnitude of the effect to make sound business judgments."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-201-l02-f1",
          "front": "Null hypothesis (H₀)",
          "back": "The default assumption representing the status quo, typically stating there is no effect, no difference, or no relationship. We seek evidence to reject it."
        },
        {
          "id": "business-analytics-201-l02-f2",
          "front": "P-value",
          "back": "The probability of observing the data (or more extreme results) if the null hypothesis is true. A small p-value (e.g., < 0.05) provides evidence against H₀."
        },
        {
          "id": "business-analytics-201-l02-f3",
          "front": "Practical significance",
          "back": "The real-world importance or magnitude of an effect. A finding can be statistically significant but too small to be practically meaningful for business decisions."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-201-l02-a1",
          "type": "image",
          "title": "Hypothesis Test Visualization",
          "content": "A diagram of a normal distribution showing the critical value for α = 0.05, the rejection region, and an example test statistic with its corresponding p-value."
        }
      ]
    },
    {
      "id": "business-analytics-201-l03",
      "title": "Comparing Multiple Groups with ANOVA",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Explain the purpose of Analysis of Variance (ANOVA)",
        "Apply one-way ANOVA to compare means across multiple groups",
        "Identify when post-hoc tests are needed after ANOVA"
      ],
      "chunks": [
        {
          "id": "business-analytics-201-l03-c1",
          "title": "Introduction to ANOVA",
          "content": "Analysis of Variance (ANOVA) is a statistical test used to determine whether there are any statistically significant differences between the means of three or more independent groups. Using multiple t-tests to compare every pair of groups would inflate the overall probability of a Type I error (a false positive). ANOVA avoids this by simultaneously analyzing the variation between group means and the variation within each group. This allows for a single test to assess if any group mean is different from the others."
        },
        {
          "id": "business-analytics-201-l03-c2",
          "title": "Interpreting ANOVA Results",
          "content": "The core of ANOVA is the F-statistic, which is a ratio of the variance between the groups to the variance within the groups. A large F-statistic suggests that the variation between the groups is greater than what would be expected by chance alone. If the F-statistic is large enough to produce a p-value below our significance level (α), we reject the null hypothesis. This leads to the conclusion that at least one group mean is significantly different from the others, though it does not specify which one."
        },
        {
          "id": "business-analytics-201-l03-c3",
          "title": "Post-Hoc Testing",
          "content": "A significant ANOVA result is a global finding: it tells us that a difference exists somewhere among the groups, but not where. To identify which specific pairs of groups are different, we must perform post-hoc tests. Common methods include Tukey's HSD (Honestly Significant Difference), Bonferroni correction, and Scheffé's method. These tests conduct pairwise comparisons while controlling the family-wise error rate. Skipping post-hoc analysis after a significant ANOVA leaves the interpretation incomplete and can lead to misleading conclusions."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-201-l03-f1",
          "front": "ANOVA (Analysis of Variance)",
          "back": "A statistical test used to compare the means of three or more groups to see if at least one is different. It avoids the inflated error rate of running multiple t-tests."
        },
        {
          "id": "business-analytics-201-l03-f2",
          "front": "F-statistic",
          "back": "The test statistic used in ANOVA, calculated as the ratio of variance between groups to variance within groups. A large F-statistic suggests a significant difference between group means."
        },
        {
          "id": "business-analytics-201-l03-f3",
          "front": "Post-hoc test (e.g., Tukey's HSD)",
          "back": "A follow-up test performed after a significant ANOVA result to determine which specific group means differ from each other."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-201-l03-a1",
          "type": "image",
          "title": "ANOVA Concept",
          "content": "A visual comparison of two scenarios. Scenario A shows three group distributions with large overlap (low F-statistic). Scenario B shows three group distributions with minimal overlap (high F-statistic), illustrating a significant difference."
        }
      ]
    },
    {
      "id": "business-analytics-201-l04",
      "title": "Checkpoint: Statistical Inference",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "business-analytics-201-l04-q1",
          "text": "To ensure a survey on employee satisfaction represents all departments (Sales, Engineering, HR), which sampling method is most appropriate?",
          "options": [
            {
              "id": "a",
              "text": "Convenience sampling"
            },
            {
              "id": "b",
              "text": "Simple random sampling"
            },
            {
              "id": "c",
              "text": "Stratified sampling"
            },
            {
              "id": "d",
              "text": "Snowball sampling"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Stratified sampling is ideal because it divides the population into subgroups (strata, in this case departments) and samples from each, guaranteeing representation from all key segments."
        },
        {
          "id": "business-analytics-201-l04-q2",
          "text": "A 95% confidence interval for the average time spent on a webpage is [55 seconds, 65 seconds]. What is the correct interpretation?",
          "options": [
            {
              "id": "a",
              "text": "95% of users spend between 55 and 65 seconds on the page."
            },
            {
              "id": "b",
              "text": "We are 95% confident that the true average time spent by all users is between 55 and 65 seconds."
            },
            {
              "id": "c",
              "text": "There is a 95% probability that the true average is exactly 60 seconds."
            },
            {
              "id": "d",
              "text": "If we repeat the study, there is a 95% chance the new sample average will be in this range."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A confidence interval provides a range of plausible values for the population parameter (the true average), not a range for individual data points or a probability for a single value."
        },
        {
          "id": "business-analytics-201-l04-q3",
          "text": "A new marketing campaign increases sales by 0.5% (p = 0.01). The campaign costs $500,000. The decision of whether to continue it depends on:",
          "options": [
            {
              "id": "a",
              "text": "Only the p-value, since it is significant."
            },
            {
              "id": "b",
              "text": "The Type I error rate."
            },
            {
              "id": "c",
              "text": "Practical significance: whether the 0.5% sales lift generates enough profit to justify the cost."
            },
            {
              "id": "d",
              "text": "The sample size of the study."
            }
          ],
          "correctOptionId": "c",
          "explanation": "The result is statistically significant, but the key business question is one of practical significance. The financial return from the small sales increase must be weighed against the campaign's cost."
        },
        {
          "id": "business-analytics-201-l04-q4",
          "text": "An ANOVA test comparing customer satisfaction across four store locations yields p = 0.008. What can you conclude?",
          "options": [
            {
              "id": "a",
              "text": "All four stores have different average satisfaction scores."
            },
            {
              "id": "b",
              "text": "At least one store's average satisfaction score is different from the others."
            },
            {
              "id": "c",
              "text": "The test is invalid and a t-test should have been used."
            },
            {
              "id": "d",
              "text": "The difference is not practically significant."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A significant ANOVA result indicates that there is a difference somewhere among the group means, but it does not specify how many or which groups differ. Post-hoc tests are needed for that."
        }
      ]
    },
    {
      "id": "business-analytics-201-l05",
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
          "id": "business-analytics-201-l05-c1",
          "title": "Simple Linear Regression",
          "content": "Simple linear regression models the relationship between one independent variable (X) and one dependent variable (Y) using a straight line: Y = β₀ + β₁X + ε. The coefficient β₁ (slope) represents the average change in Y for a one-unit increase in X. For example, in a model of sales (Y) versus advertising spend (X), the slope indicates the average increase in sales for each additional dollar spent on ads. The intercept (β₀) is the predicted value of Y when X is zero. This tool allows businesses to quantify relationships and make predictions."
        },
        {
          "id": "business-analytics-201-l05-c2",
          "title": "Multiple Regression",
          "content": "Multiple regression extends this concept to model a dependent variable (Y) using several independent variables (X₁, X₂, etc.). The equation is Y = β₀ + β₁X₁ + β₂X₂ + ... + ε. Each coefficient (e.g., β₁) represents the effect of its corresponding variable on Y while holding all other variables in the model constant. This allows for a more nuanced analysis, such as isolating the impact of price on sales while controlling for advertising and seasonality. A key challenge is multicollinearity, where independent variables are highly correlated, which can make individual coefficient estimates unstable and difficult to interpret."
        },
        {
          "id": "business-analytics-201-l05-c3",
          "title": "Assessing Model Fit",
          "content": "Evaluating a regression model is crucial. R-squared (R²) measures the proportion of variance in the dependent variable that is explained by the model; a value of 0.75 means the model explains 75% of the variance. However, R² always increases with more predictors, so adjusted R-squared is preferred for comparing models, as it penalizes for complexity. Additionally, residual analysis—examining the differences between actual and predicted values—is essential. A good model's residuals should be randomly scattered around zero. Patterns, like a curve or a funnel shape, suggest problems like non-linearity or non-constant variance (heteroscedasticity)."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-201-l05-f1",
          "front": "Slope (β₁) in simple regression",
          "back": "The average change in the dependent variable (Y) for a one-unit increase in the independent variable (X). It measures the strength and direction of the linear relationship."
        },
        {
          "id": "business-analytics-201-l05-f2",
          "front": "Multicollinearity",
          "back": "A condition in multiple regression where two or more independent variables are highly correlated. It makes individual coefficient estimates unstable and hard to interpret."
        },
        {
          "id": "business-analytics-201-l05-f3",
          "front": "Adjusted R-squared",
          "back": "A modified version of R-squared that accounts for the number of predictors in a model. It is used to compare the fit of models with different numbers of variables."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-201-l05-a1",
          "type": "image",
          "title": "Regression and Residuals",
          "content": "A scatter plot of data points with a fitted regression line. Arrows indicate the residuals—the vertical distances from each point to the line—visualizing the model's errors."
        }
      ]
    },
    {
      "id": "business-analytics-201-l06",
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
          "id": "business-analytics-201-l06-c1",
          "title": "Correlation Is Not Causation",
          "content": "Correlation measures the degree to which two variables move in relation to each other. However, a strong correlation does not imply that one variable causes the other. For example, ice cream sales and drowning incidents are positively correlated. The cause is not ice cream, but a confounding variable: hot weather, which increases both activities. In business, a company might observe that higher employee training budgets correlate with higher profits. This could be because profitable companies can afford more training (reverse causation), not that training directly causes the profit increase."
        },
        {
          "id": "business-analytics-201-l06-c2",
          "title": "Sources of Spurious Correlation",
          "content": "A spurious correlation is an apparent but false relationship, often caused by a third factor. Key sources include confounding variables (an unobserved factor influencing both variables), reverse causation (the presumed effect is actually the cause), and selection bias (the data sample is not representative of the population). Omitted variable bias in a regression model can also create spurious relationships by attributing the effect of a missing variable to the ones included in the model. Critical thinking is required to question observed relationships and consider alternative explanations."
        },
        {
          "id": "business-analytics-201-l06-c3",
          "title": "Establishing Causation",
          "content": "To establish a causal relationship, three criteria must be met: correlation (the variables must be related), temporal precedence (the cause must precede the effect), and elimination of confounders (no plausible alternative explanations). The gold standard for establishing causation is the randomized controlled experiment (e.g., an A/B test), where random assignment of subjects to treatment and control groups helps eliminate confounding factors. When experiments are not feasible, quasi-experimental methods like difference-in-differences can provide stronger evidence for causality than simple observational data."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-201-l06-f1",
          "front": "Confounding variable",
          "back": "A third, unobserved variable that is related to both the independent and dependent variables, creating a misleading appearance of a direct causal relationship."
        },
        {
          "id": "business-analytics-201-l06-f2",
          "front": "Three conditions for causation",
          "back": "1. Correlation (variables co-vary), 2. Temporal Precedence (cause occurs before effect), and 3. Elimination of Confounders (no alternative explanations)."
        },
        {
          "id": "business-analytics-201-l06-f3",
          "front": "Randomized Controlled Experiment (A/B Test)",
          "back": "An experimental design where subjects are randomly assigned to groups. It is the most reliable method for establishing causation because randomization minimizes the effect of confounding variables."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-201-l06-a1",
          "type": "practice",
          "title": "Identify the Flaw",
          "content": "A series of scenarios are presented (e.g., 'Cities with more churches have more crime'). The user must identify the likely logical fallacy, such as a confounding variable (population size)."
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
          "explanation": "The result is statistically significant (p < 0.05), but the effect is small (0.2% to 3.1% increase). Practical significance asks whether this effect is large enough to justify the cost — a statistically real but tiny improvement may not warrant a $2M investment."
        },
        {
          "id": "business-analytics-201-l07-q2",
          "text": "In a multiple regression model predicting sales, the coefficient for advertising spend is β₁ = 2.5. What is the correct interpretation?",
          "options": [
            {
              "id": "a",
              "text": "For every $1 increase in advertising spend, sales increase by $2.50 on average, holding other variables constant."
            },
            {
              "id": "b",
              "text": "Advertising and sales have a correlation of 2.5."
            },
            {
              "id": "c",
              "text": "2.5% of sales variance is explained by advertising."
            },
            {
              "id": "d",
              "text": "The model is 2.5 times better than a model with no variables."
            }
          ],
          "correctOptionId": "a",
          "explanation": "A regression coefficient represents the expected change in the dependent variable for a one-unit increase in its corresponding independent variable, holding all other predictors in the model constant."
        },
        {
          "id": "business-analytics-201-l07-q3",
          "text": "An ANOVA test comparing customer satisfaction across five stores yields p = 0.002. What is the correct next step?",
          "options": [
            {
              "id": "a",
              "text": "Conclude all stores differ from each other."
            },
            {
              "id": "b",
              "text": "Run post-hoc tests to identify which specific stores differ."
            },
            {
              "id": "c",
              "text": "Increase the sample size and retest."
            },
            {
              "id": "d",
              "text": "Switch to a chi-square test."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A significant ANOVA result indicates that at least one pair of means is different, but it does not specify which pairs. Post-hoc tests (like Tukey's HSD) are required to perform these pairwise comparisons."
        },
        {
          "id": "business-analytics-201-l07-q4",
          "text": "A confidence interval for average order value is [$82, $94]. If you collected a much larger sample, the interval would most likely:",
          "options": [
            {
              "id": "a",
              "text": "Shift to higher values."
            },
            {
              "id": "b",
              "text": "Become wider."
            },
            {
              "id": "c",
              "text": "Become narrower."
            },
            {
              "id": "d",
              "text": "Stay exactly the same."
            }
          ],
          "correctOptionId": "c",
          "explanation": "A larger sample size reduces the standard error of the mean, which in turn makes the confidence interval narrower, providing a more precise estimate of the true population mean."
        }
      ]
    }
  ]
};
