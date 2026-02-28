import type { LearningModule } from "@/lib/modules/types";

export const BusinessAnalytics201Module: LearningModule = {
  id: "business-analytics-201",
  title: "Statistical Methods for Business",
  description:
    "Master the statistical techniques that power rigorous business analysis. From hypothesis testing and regression to ANOVA and survey design, learn to draw reliable conclusions from data and distinguish real effects from random noise.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "analytics"],
  minAge: 18,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  difficultyBand: "intermediate",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Formulate and test business hypotheses using statistical methods",
    "Build and interpret simple and multiple regression models",
    "Distinguish correlation from causation in business data",
    "Design effective sampling strategies and surveys",
    "Construct and interpret confidence intervals",
    "Apply ANOVA to compare performance across groups",
    "Evaluate practical significance alongside statistical significance"
  ],
  lessons: [
    {
      id: "business-analytics-201-l01",
      title: "Hypothesis Testing for Business Decisions",
      type: "video",
      duration: 13,
      objectives: [
        "Formulate null and alternative hypotheses for business questions",
        "Explain p-values and significance levels in business terms",
        "Distinguish between Type I and Type II errors"
      ],
      chunks: [
        {
          id: "business-analytics-201-l01-c1",
          title: "Setting Up Hypotheses",
          content:
            "Hypothesis testing is a structured method for making decisions under uncertainty. The null hypothesis (H₀) represents the status quo — 'the new pricing strategy has no effect on sales.' The alternative hypothesis (H₁) is what you are trying to prove — 'the new pricing strategy increases sales.' The test examines whether observed data provides enough evidence to reject H₀. In business, framing the right hypothesis is often more important than the math."
        },
        {
          id: "business-analytics-201-l01-c2",
          title: "P-Values and Significance Levels",
          content:
            "The p-value measures how likely the observed result (or something more extreme) would be if the null hypothesis were true. A small p-value (typically below 0.05) suggests the data is inconsistent with H₀. The significance level (α) is the threshold you set before testing — commonly 0.05, meaning you accept a 5% chance of falsely rejecting H₀. The p-value is not the probability that H₀ is true; it is the probability of the data given H₀."
        },
        {
          id: "business-analytics-201-l01-c3",
          title: "Type I and Type II Errors",
          content:
            "A Type I error (false positive) occurs when you reject H₀ even though it is true — concluding a campaign works when it does not. A Type II error (false negative) means failing to reject H₀ when it is actually false — missing a real effect. In business, the costs differ: a Type I error might waste budget on a useless campaign, while a Type II error might cause you to abandon a winning strategy. Balancing these risks is a strategic choice."
        }
      ],
      flashcards: [
        { id: "business-analytics-201-l01-f1", front: "Null hypothesis (H₀)", back: "The default assumption representing the status quo — typically states there is no effect, no difference, or no relationship" },
        { id: "business-analytics-201-l01-f2", front: "P-value", back: "The probability of observing the data (or more extreme) if the null hypothesis is true — small values suggest evidence against H₀, but it is NOT the probability H₀ is true" },
        { id: "business-analytics-201-l01-f3", front: "Type I vs. Type II error", back: "Type I (false positive): rejecting H₀ when it is true. Type II (false negative): failing to reject H₀ when it is false. Business context determines which is costlier." }
      ]
    },
    {
      id: "business-analytics-201-l02",
      title: "Regression Analysis",
      type: "video",
      duration: 14,
      objectives: [
        "Build and interpret a simple linear regression model",
        "Extend to multiple regression with several predictors",
        "Assess model fit using R-squared and residual analysis"
      ],
      chunks: [
        {
          id: "business-analytics-201-l02-c1",
          title: "Simple Linear Regression",
          content:
            "Simple linear regression models the relationship between one independent variable (X) and one dependent variable (Y) as a straight line: Y = β₀ + β₁X + ε. The slope (β₁) tells you how much Y changes for a one-unit increase in X. The intercept (β₀) is the predicted Y when X is zero. For example, regressing advertising spend on sales revenue reveals how much additional revenue each dollar of advertising generates on average."
        },
        {
          id: "business-analytics-201-l02-c2",
          title: "Multiple Regression",
          content:
            "Multiple regression includes several independent variables: Y = β₀ + β₁X₁ + β₂X₂ + ... + ε. This allows you to isolate the effect of each variable while controlling for others. For instance, modeling sales as a function of price, advertising, and seasonality simultaneously reveals each factor's unique contribution. Multicollinearity — when predictors are highly correlated with each other — can make individual coefficients unreliable."
        },
        {
          id: "business-analytics-201-l02-c3",
          title: "Assessing Model Fit",
          content:
            "R-squared measures the proportion of variance in Y explained by the model (0 to 1). An R² of 0.75 means the model explains 75% of variation. However, R² always increases with more predictors, so adjusted R² penalizes for complexity. Residual analysis — plotting the differences between actual and predicted values — reveals whether assumptions are violated: patterns in residuals indicate missing variables, nonlinearity, or heteroscedasticity."
        }
      ],
      flashcards: [
        { id: "business-analytics-201-l02-f1", front: "Slope (β₁) in simple regression", back: "The change in the dependent variable Y for a one-unit increase in the independent variable X — measures the strength and direction of the linear relationship" },
        { id: "business-analytics-201-l02-f2", front: "Multicollinearity", back: "When independent variables in a multiple regression are highly correlated with each other — makes individual coefficient estimates unstable and hard to interpret" },
        { id: "business-analytics-201-l02-f3", front: "R-squared (R²)", back: "The proportion of variance in the dependent variable explained by the model — ranges from 0 to 1, but use adjusted R² when comparing models with different numbers of predictors" }
      ]
    },
    {
      id: "business-analytics-201-l03",
      title: "Correlation vs. Causation",
      type: "interactive",
      duration: 12,
      objectives: [
        "Distinguish correlation from causation with business examples",
        "Identify common sources of spurious correlations",
        "Explain what is needed to establish causal claims"
      ],
      chunks: [
        {
          id: "business-analytics-201-l03-c1",
          title: "Correlation Is Not Causation",
          content:
            "Correlation measures the strength and direction of a linear relationship between two variables (-1 to +1). However, correlation alone never proves causation. Ice cream sales and drowning deaths are positively correlated — not because ice cream causes drowning, but because both increase in summer (a confounding variable). In business, observing that companies with more training spend have higher profits does not prove training causes profits — larger, more profitable firms may simply spend more."
        },
        {
          id: "business-analytics-201-l03-c2",
          title: "Sources of Spurious Correlation",
          content:
            "Spurious correlations arise from confounding variables (a third factor drives both), reverse causation (the effect causes the supposed cause), and selection bias (the sample is not representative). Omitted variable bias occurs when a regression leaves out an important factor, making included variables appear to have effects they do not truly have. Always ask: 'Is there a plausible mechanism, and have we controlled for alternative explanations?'"
        },
        {
          id: "business-analytics-201-l03-c3",
          title: "Establishing Causation",
          content:
            "Causal claims require three conditions: (1) Correlation — X and Y move together. (2) Temporal precedence — X occurs before Y. (3) No confounding — alternative explanations are ruled out. Randomized controlled experiments (like A/B tests) are the gold standard because random assignment eliminates confounders. When experiments are impossible, quasi-experimental methods like difference-in-differences or instrumental variables can strengthen causal inference."
        }
      ],
      flashcards: [
        { id: "business-analytics-201-l03-f1", front: "Confounding variable", back: "A third variable that is related to both the independent and dependent variables, creating a misleading appearance of a direct relationship between them" },
        { id: "business-analytics-201-l03-f2", front: "Three conditions for causation", back: "Correlation (X and Y co-occur), temporal precedence (X happens before Y), and elimination of confounders (no alternative explanations)" },
        { id: "business-analytics-201-l03-f3", front: "Why randomized experiments establish causation", back: "Random assignment ensures that treatment and control groups are equivalent on all factors — any difference in outcomes must be caused by the treatment, not confounders" }
      ]
    },
    {
      id: "business-analytics-201-l04",
      title: "Sampling and Survey Design",
      type: "video",
      duration: 12,
      objectives: [
        "Compare probability and non-probability sampling methods",
        "Design survey questions that minimize bias",
        "Calculate the sample size needed for a given margin of error"
      ],
      chunks: [
        {
          id: "business-analytics-201-l04-c1",
          title: "Sampling Methods",
          content:
            "Probability sampling gives every population member a known chance of selection. Simple random sampling selects randomly from the full population. Stratified sampling divides the population into subgroups (strata) and samples from each. Cluster sampling selects entire groups (clusters) randomly. Non-probability methods — convenience, snowball, quota — are cheaper but cannot guarantee representativeness. Business decisions based on biased samples lead to flawed strategies."
        },
        {
          id: "business-analytics-201-l04-c2",
          title: "Designing Effective Surveys",
          content:
            "Good survey questions are clear, concise, and unbiased. Avoid leading questions ('Don't you agree that our service is excellent?'), double-barreled questions ('How satisfied are you with our price and quality?'), and loaded language. Use established scales (Likert 1-5, Net Promoter Score) for consistency. Question order matters — general questions before specific ones. Always pilot test with a small group to catch confusing wording before full deployment."
        },
        {
          id: "business-analytics-201-l04-c3",
          title: "Sample Size Determination",
          content:
            "Sample size affects the precision of your estimates. The formula depends on desired confidence level, acceptable margin of error, and population variability. For proportions: n = (Z² × p × (1-p)) / E², where Z is the Z-score for your confidence level, p is estimated proportion, and E is margin of error. A 95% confidence level with ±3% margin requires roughly 1,068 respondents. Larger samples give more precision but cost more — the business tradeoff is precision versus budget."
        }
      ],
      flashcards: [
        { id: "business-analytics-201-l04-f1", front: "Stratified sampling", back: "Dividing the population into homogeneous subgroups (strata) and sampling from each — ensures representation of all important segments" },
        { id: "business-analytics-201-l04-f2", front: "Leading question (survey bias)", back: "A question worded to suggest a desired answer — e.g., 'Don't you agree our service is excellent?' — biases responses and undermines data quality" },
        { id: "business-analytics-201-l04-f3", front: "Sample size tradeoff", back: "Larger samples give more precise estimates (smaller margin of error) but cost more — sample size must balance statistical precision against budget constraints" }
      ]
    },
    {
      id: "business-analytics-201-l05",
      title: "Checkpoint: Statistical Methods",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "business-analytics-201-l05-q1",
          text: "A marketing team tests whether a new email subject line increases open rates. They find p = 0.03. At α = 0.05, what should they conclude?",
          options: [
            { id: "a", text: "There is a 3% chance the new subject line works" },
            { id: "b", text: "Reject H₀ — the data provides sufficient evidence that the new subject line affects open rates" },
            { id: "c", text: "Fail to reject H₀ — the result is not significant" },
            { id: "d", text: "The new subject line increases open rates by 3%" }
          ],
          correctOptionId: "b",
          explanation: "Since p = 0.03 is less than α = 0.05, we reject the null hypothesis. The p-value is not the probability the subject line works, nor does it indicate the effect size."
        },
        {
          id: "business-analytics-201-l05-q2",
          text: "In a multiple regression, R² = 0.82. What does this mean?",
          options: [
            { id: "a", text: "The model explains 82% of the variance in the dependent variable" },
            { id: "b", text: "The correlation between X and Y is 0.82" },
            { id: "c", text: "82% of predictions will be exactly correct" },
            { id: "d", text: "The model has an 82% chance of being valid" }
          ],
          correctOptionId: "a",
          explanation: "R² represents the proportion of variance in the dependent variable that the model explains. It does not mean 82% of predictions are exact or that the correlation is 0.82."
        },
        {
          id: "business-analytics-201-l05-q3",
          text: "A study finds that cities with more police officers have more crime. A researcher concludes that hiring police causes crime. What error is this?",
          options: [
            { id: "a", text: "Type I error" },
            { id: "b", text: "Confusing correlation with causation — likely reverse causation" },
            { id: "c", text: "Sampling bias" },
            { id: "d", text: "Multicollinearity" }
          ],
          correctOptionId: "b",
          explanation: "This is reverse causation — cities hire more police because they have more crime, not the other way around. Confusing correlation with causation leads to incorrect causal claims."
        },
        {
          id: "business-analytics-201-l05-q4",
          text: "Which sampling method divides the population into subgroups and samples from each?",
          options: [
            { id: "a", text: "Simple random sampling" },
            { id: "b", text: "Convenience sampling" },
            { id: "c", text: "Stratified sampling" },
            { id: "d", text: "Cluster sampling" }
          ],
          correctOptionId: "c",
          explanation: "Stratified sampling divides the population into homogeneous strata and samples from each. Cluster sampling selects entire groups, and simple random gives everyone equal chance without subgrouping."
        }
      ]
    },
    {
      id: "business-analytics-201-l06",
      title: "Confidence Intervals & ANOVA",
      type: "interactive",
      duration: 14,
      objectives: [
        "Construct and interpret confidence intervals for means and proportions",
        "Apply one-way ANOVA to compare means across multiple groups",
        "Identify when post-hoc tests are needed after ANOVA"
      ],
      chunks: [
        {
          id: "business-analytics-201-l06-c1",
          title: "Confidence Intervals",
          content:
            "A 95% confidence interval provides a range of plausible values for a population parameter. If the interval for average customer spend is [$47, $53], we are 95% confident the true population mean falls within this range. The interval width depends on sample size and variability — larger samples yield narrower intervals. Confidence intervals are more informative than p-values alone because they show both the estimated effect and its precision."
        },
        {
          id: "business-analytics-201-l06-c2",
          title: "One-Way ANOVA",
          content:
            "Analysis of Variance (ANOVA) tests whether the means of three or more groups differ significantly. Instead of running multiple t-tests (which inflates Type I error), ANOVA uses the F-statistic to compare between-group variability to within-group variability. If F is large enough (p < α), at least one group mean is significantly different. Example: comparing average customer satisfaction scores across four regional offices."
        },
        {
          id: "business-analytics-201-l06-c3",
          title: "Post-Hoc Testing",
          content:
            "A significant ANOVA result tells you that group means differ, but not which specific pairs differ. Post-hoc tests — Tukey's HSD, Bonferroni correction, Scheffé's method — perform pairwise comparisons while controlling the overall error rate. Tukey's HSD is the most common choice when comparing all pairs. Without post-hoc analysis, a significant ANOVA gives you an incomplete picture for decision-making."
        }
      ],
      flashcards: [
        { id: "business-analytics-201-l06-f1", front: "95% confidence interval", back: "A range of values within which we are 95% confident the true population parameter lies — wider intervals indicate less precision, narrower intervals indicate more" },
        { id: "business-analytics-201-l06-f2", front: "ANOVA (Analysis of Variance)", back: "Statistical test comparing means across three or more groups using the F-statistic — avoids the inflated error rate of running multiple t-tests" },
        { id: "business-analytics-201-l06-f3", front: "Tukey's HSD (post-hoc test)", back: "A pairwise comparison method used after a significant ANOVA to determine which specific group means differ — controls the family-wise error rate" }
      ]
    },
    {
      id: "business-analytics-201-l07",
      title: "Final Assessment: Statistical Methods for Business",
      type: "quiz",
      duration: 15,
      questions: [
        {
          id: "business-analytics-201-l07-q1",
          text: "A company finds that its new training program increases productivity with p = 0.04 and a 95% CI of [0.2%, 3.1%]. The CEO asks if this is worth the $2 million investment. What concept should guide this decision?",
          options: [
            { id: "a", text: "Statistical power" },
            { id: "b", text: "Practical significance vs. statistical significance" },
            { id: "c", text: "Type II error rate" },
            { id: "d", text: "Adjusted R-squared" }
          ],
          correctOptionId: "b",
          explanation: "The result is statistically significant (p < 0.05), but the effect is small (0.2% to 3.1% increase). Practical significance asks whether this effect is large enough to justify the cost — a statistically real but tiny improvement may not warrant $2M."
        },
        {
          id: "business-analytics-201-l07-q2",
          text: "In a regression model, the coefficient for advertising spend is β₁ = 2.5. What is the interpretation?",
          options: [
            { id: "a", text: "For every $1 increase in advertising spend, sales increase by $2.50 on average, holding other variables constant" },
            { id: "b", text: "Advertising and sales have a 2.5 correlation" },
            { id: "c", text: "2.5% of sales variance is explained by advertising" },
            { id: "d", text: "The model is 2.5 times better than the null model" }
          ],
          correctOptionId: "a",
          explanation: "A regression coefficient represents the expected change in Y for a one-unit increase in X, holding other predictors constant. It is not a correlation or R² value."
        },
        {
          id: "business-analytics-201-l07-q3",
          text: "An ANOVA test comparing customer satisfaction across five stores yields p = 0.002. What is the correct next step?",
          options: [
            { id: "a", text: "Conclude all stores differ from each other" },
            { id: "b", text: "Run post-hoc tests to identify which specific stores differ" },
            { id: "c", text: "Increase the sample size and retest" },
            { id: "d", text: "Switch to a chi-square test" }
          ],
          correctOptionId: "b",
          explanation: "A significant ANOVA tells you at least one pair of means differs, but not which ones. Post-hoc tests (like Tukey's HSD) identify the specific pairs that differ."
        },
        {
          id: "business-analytics-201-l07-q4",
          text: "A confidence interval for average order value is [$82, $94]. If you collected a larger sample, the interval would most likely:",
          options: [
            { id: "a", text: "Shift to higher values" },
            { id: "b", text: "Become wider" },
            { id: "c", text: "Become narrower" },
            { id: "d", text: "Stay exactly the same" }
          ],
          correctOptionId: "c",
          explanation: "Larger samples reduce the standard error, which narrows the confidence interval — providing a more precise estimate of the population mean."
        }
      ]
    }
  ],
};
