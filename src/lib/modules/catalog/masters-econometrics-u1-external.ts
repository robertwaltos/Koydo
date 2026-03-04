import type { LearningModule } from "@/lib/modules/types";

export const MastersEconometricsU1ExternalModule: LearningModule = {
  "id": "masters-econometrics-u1-external",
  "title": "Econometrics (Master's Level)",
  "description": "Econometrics curriculum from 1 open-source datasets. MMLU (cais/mmlu).",
  "subject": "Science",
  "lessons": [
    {
      "id": "masters-econometrics-u1-external-l01",
      "title": "Econometrics — Quiz 1",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-a229bd2414e5c805",
          "text": "Which one of the following is the most appropriate definition of a 99% confidence interval?",
          "options": [
            {
              "id": "opt-A",
              "text": "99% of the time in repeated samples, the interval would contain the true value of the parameter"
            },
            {
              "id": "opt-B",
              "text": "99% of the time in repeated samples, the interval would contain the estimated value of the parameter"
            },
            {
              "id": "opt-C",
              "text": "99% of the time in repeated samples, the null hypothesis will be rejected"
            },
            {
              "id": "opt-D",
              "text": "99% of the time in repeated samples, the null hypothesis will not be rejected when it was false"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-63104fec8e11568f",
          "text": "What is the main difference between the Dickey Fuller (DF) and Phillips-Perron (PP) approaches to unit root testing?",
          "options": [
            {
              "id": "opt-A",
              "text": "ADF is a single equation approach to unit root testing while PP is a systems approach"
            },
            {
              "id": "opt-B",
              "text": "PP tests reverse the DF null and alternative hypotheses so that there is stationarity under the null hypothesis of the PP test"
            },
            {
              "id": "opt-C",
              "text": "The PP test incorporates an automatic correction for autocorrelated residuals in the test regression"
            },
            {
              "id": "opt-D",
              "text": "PP tests have good power in small samples whereas DF tests do not."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-f770a51b608eda34",
          "text": "If there were a leverage effect in practice, what would be the shape of the news impact curve for as model that accounted for that leverage?",
          "options": [
            {
              "id": "opt-A",
              "text": "It would rise more quickly for negative disturbances than for positive ones of the same magnitude"
            },
            {
              "id": "opt-B",
              "text": "It would be symmetrical about zero"
            },
            {
              "id": "opt-C",
              "text": "It would rise less quickly for negative disturbances than for positive ones of the same magnitude"
            },
            {
              "id": "opt-D",
              "text": "It would be zero for all positive disturbances"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-aca27495708b5329",
          "text": "Which of the following statements is false concerning the linear probability model?",
          "options": [
            {
              "id": "opt-A",
              "text": "There is nothing in the model to ensure that the estimated probabilities lie between zero and one"
            },
            {
              "id": "opt-B",
              "text": "Even if the probabilities are truncated at zero and one, there will probably be many observations for which the probability is either exactly zero or exactly one"
            },
            {
              "id": "opt-C",
              "text": "The error terms will be heteroscedastic and not normally distributed"
            },
            {
              "id": "opt-D",
              "text": "The model is much harder to estimate than a standard regression model with a continuous dependent variable"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-c666333c5148f826",
          "text": "Which of the following statements concerning the regression population and sample is FALSE?",
          "options": [
            {
              "id": "opt-A",
              "text": "The population is the total collection of all items of interest"
            },
            {
              "id": "opt-B",
              "text": "The population can be infinite"
            },
            {
              "id": "opt-C",
              "text": "In theory, the sample could be larger than the population"
            },
            {
              "id": "opt-D",
              "text": "A random sample is one where each individual item from the population is equally likely to be drawn."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-88384aa597afb6ed",
          "text": "Which of the following statements is INCORRECT concerning a comparison of the Box-Pierce Q and the Ljung-Box Q* statistics for linear dependence in time series?",
          "options": [
            {
              "id": "opt-A",
              "text": "Asymptotically, the values of the two test statistics will be equal"
            },
            {
              "id": "opt-B",
              "text": "The Q test has better small-sample properties than the Q*"
            },
            {
              "id": "opt-C",
              "text": "The Q test is sometimes over-sized for small samples"
            },
            {
              "id": "opt-D",
              "text": "As the sample size tends towards infinity, both tests will show a tendency to always reject the null hypothesis of zero autocorrelation coefficients."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-8f358a477b7852f2",
          "text": "A parsimonious model is one that",
          "options": [
            {
              "id": "opt-A",
              "text": "Includes too many variables"
            },
            {
              "id": "opt-B",
              "text": "Includes as few variables as possible to explain the data"
            },
            {
              "id": "opt-C",
              "text": "Is a well-specified model"
            },
            {
              "id": "opt-D",
              "text": "Is a mis-specified model"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-631944af21afba46",
          "text": "Which of the following is NOT a feature of continuously compounded returns (i.e. log-returns)?",
          "options": [
            {
              "id": "opt-A",
              "text": "They can be interpreted as continuously compounded changes in the prices"
            },
            {
              "id": "opt-B",
              "text": "They can be added over time to give returns for longer time periods"
            },
            {
              "id": "opt-C",
              "text": "They can be added across a portfolio of assets to give portfolio returns"
            },
            {
              "id": "opt-D",
              "text": "They are usually fat-tailed"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-2f116002d59e3833",
          "text": "Which of the following features of financial asset return time-series could be captured using a standard GARCH(1,1) model?\n\ni) Fat tails in the return distribution\n\n\nii) Leverage effects\n\n\niii) Volatility clustering\n\n\niv) Volatility affecting returns",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-e9cf0754baa7fb9c",
          "text": "Consider the estimation of a GARCH-M model. If the data employed were a time-series of daily corporate bond percentage returns, which of the following would you expect the value of the GARCH-in-mean parameter estimate to be?",
          "options": [
            {
              "id": "opt-A",
              "text": "Less than -1"
            },
            {
              "id": "opt-B",
              "text": "Between -1 and 0"
            },
            {
              "id": "opt-C",
              "text": "Between 0 and 1"
            },
            {
              "id": "opt-D",
              "text": "Bigger than 1"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-1acfe69faa6de8b7",
          "text": "Under which of the following situations would bootstrapping be preferred to pure simulation?\n\ni) If it is desired that the distributional properties of the data in the experiment\n\nare the same as those of some actual data\n\n\nii) If it is desired that the distributional properties of the data in the experiment\n\nare known exactly\n\n\niii) If the distributional properties of the actual data are unknown\n\n\niv) If the sample of actual data available is very small",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iv) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-febe07abae9c14b3",
          "text": "Which of the following may be consequences of one or more of the CLRM assumptions being violated?\n\ni) The coefficient estimates are not optimal\n\n\nii) The standard error estimates are not optimal\n\n\niii) The distributions assumed for the test statistics are inappropriate\n\n\niv) Conclusions regarding the strength of relationships between the dependent\n\nand independent variables may be invalid.",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-1d5d2e7e33578283",
          "text": "Which of the following statements is true concerning forecasting in econometrics?",
          "options": [
            {
              "id": "opt-A",
              "text": "Forecasts can only be made for time-series data"
            },
            {
              "id": "opt-B",
              "text": "Mis-specified models are certain to produce inaccurate forecasts"
            },
            {
              "id": "opt-C",
              "text": "Structural forecasts are simpler to produce than those from time series models"
            },
            {
              "id": "opt-D",
              "text": "In-sample forecasting ability is a poor test of model adequacy"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-0300e7825d19cf9d",
          "text": "The pacf is necessary for distinguishing between",
          "options": [
            {
              "id": "opt-A",
              "text": "An AR and an MA model"
            },
            {
              "id": "opt-B",
              "text": "An AR and an ARMA model"
            },
            {
              "id": "opt-C",
              "text": "An MA and an ARMA model"
            },
            {
              "id": "opt-D",
              "text": "Different models from within the ARMA family"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-4d633a71e77f59e9",
          "text": "Negative residual autocorrelation is indicated by which one of the following?",
          "options": [
            {
              "id": "opt-A",
              "text": "A cyclical pattern in the residuals"
            },
            {
              "id": "opt-B",
              "text": "An alternating pattern in the residuals"
            },
            {
              "id": "opt-C",
              "text": "A complete randomness in the residuals"
            },
            {
              "id": "opt-D",
              "text": "Residuals that are all close to zero"
            }
          ],
          "correctOptionId": "opt-B"
        }
      ]
    },
    {
      "id": "masters-econometrics-u1-external-l02",
      "title": "Econometrics — Quiz 2",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-cdec65b131b4153c",
          "text": "Which of the following statements are true concerning a comparison between ARCH(q) and GARCH(1,1) models?\n\ni) The ARCH(q) model is likely to be the more parsimonious\n\n\nii) The ARCH(q) model is the more likely to violate non-negativity constraints\n\n\niii) The ARCH(q) model can allow for an infinite number of previous lags of squared\n\nreturns to affect the current conditional variance\n\n\niv) The GARCH(1,1) model will usually be sufficient to capture all of the dependence\n\nin the conditional variance",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-3cb4ebf5e9dd8586",
          "text": "Which of the following statements are true concerning a triangular or recursive system?\n\ni) The parameters can be validly estimated using separate applications of OLS to\n\neach equation\n\n\nii) The independent variables may be correlated with the error terms in other\n\nequations\n\n\niii) An application of 2SLS would lead to unbiased but inefficient parameter estimates\n\n\niv) The independent variables may be correlated with the error terms in the equations\n\nin which they appear as independent variables",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-77ddf9c42ab0e6b6",
          "text": "Which one of the following statements best describes the algebraic representation of the fitted regression line?",
          "options": [
            {
              "id": "opt-A",
              "text": "\\hat{y}_t = \\hat{\\alpha} + \\hat{\\beta}x_t + \\hat{u}_t"
            },
            {
              "id": "opt-B",
              "text": "\\hat{y}_t = \\hat{\\alpha} + \\hat{\\beta}x_t"
            },
            {
              "id": "opt-C",
              "text": "\\hat{y}_t = \\hat{\\alpha} + \\hat{\\beta}x_t + u_t"
            },
            {
              "id": "opt-D",
              "text": "y_t = \\hat{\\alpha} + \\hat{\\beta}x_t + \\hat{u}_t"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-eb3b03b8529ee331",
          "text": "What are the dimensions of $\\hat{u}^t \\hat{u}?",
          "options": [
            {
              "id": "opt-A",
              "text": "T x k"
            },
            {
              "id": "opt-B",
              "text": "T x 1"
            },
            {
              "id": "opt-C",
              "text": "k x 1"
            },
            {
              "id": "opt-D",
              "text": "1 x 1"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-53822127d8be97d9",
          "text": "The characteristic roots of the MA process\n\n$y_t = -3u_{t-1} + u_{t-2} + u_t$\n\nare",
          "options": [
            {
              "id": "opt-A",
              "text": "1 and 2"
            },
            {
              "id": "opt-B",
              "text": "1 and 0.5"
            },
            {
              "id": "opt-C",
              "text": "2 and -0.5"
            },
            {
              "id": "opt-D",
              "text": "1 and -3"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-2785e57c9c2ee9bc",
          "text": "Which of the following is an equivalent expression for saying that the explanatory variable is \"non-stochastic\"?",
          "options": [
            {
              "id": "opt-A",
              "text": "The explanatory variable is partly random"
            },
            {
              "id": "opt-B",
              "text": "The explanatory variable is fixed in repeated samples"
            },
            {
              "id": "opt-C",
              "text": "The explanatory variable is correlated with the errors"
            },
            {
              "id": "opt-D",
              "text": "The explanatory variable always has a value of one"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-5b6976674285e5e0",
          "text": "Suppose that the Durbin Watson test is applied to a regression containing two explanatory variables plus a constant with 50 data points. The test statistic takes a value of 1.53. What is the appropriate conclusion?",
          "options": [
            {
              "id": "opt-A",
              "text": "Residuals appear to be positively autocorrelated"
            },
            {
              "id": "opt-B",
              "text": "Residuals appear to be negatively autocorrelated"
            },
            {
              "id": "opt-C",
              "text": "Residuals appear not to be autocorrelated"
            },
            {
              "id": "opt-D",
              "text": "The test result is inconclusive"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-5a218171cd36019e",
          "text": "If OLS is used in the presence of autocorrelation, which of the following will be likely consequences?\n\ni) Coefficient estimates may be misleading\n\n\nii) Hypothesis tests could reach the wrong conclusions\n\n\niii) Forecasts made from the model could be biased\n\n\niv) Standard errors may inappropriate",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-493d4f5d25d1c163",
          "text": "What will be the properties of the OLS estimator in the presence of multicollinearity?",
          "options": [
            {
              "id": "opt-A",
              "text": "It will be consistent, unbiased and efficient"
            },
            {
              "id": "opt-B",
              "text": "It will be consistent and unbiased but not efficient"
            },
            {
              "id": "opt-C",
              "text": "It will be consistent but not unbiased"
            },
            {
              "id": "opt-D",
              "text": "It will not be consistent"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-f41d697df0f4b6b1",
          "text": "Which one of the following would NOT be a consequence of using non-stationary data in levels form?",
          "options": [
            {
              "id": "opt-A",
              "text": "The regression $R^2$ may be spuriously high"
            },
            {
              "id": "opt-B",
              "text": "Test statistics may not follow standard distributions"
            },
            {
              "id": "opt-C",
              "text": "Statistical inferences may be invalid"
            },
            {
              "id": "opt-D",
              "text": "Parameter estimates may be biased"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-456c63a247542695",
          "text": "If a series, y, follows a random walk, what is the optimal one-step ahead forecast of y?",
          "options": [
            {
              "id": "opt-A",
              "text": "The current value of y"
            },
            {
              "id": "opt-B",
              "text": "Zero"
            },
            {
              "id": "opt-C",
              "text": "One"
            },
            {
              "id": "opt-D",
              "text": "The average value of y over the in-sample period"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-5f3d43c3456418fb",
          "text": "The order condition is",
          "options": [
            {
              "id": "opt-A",
              "text": "A necessary and sufficient condition for identification"
            },
            {
              "id": "opt-B",
              "text": "A necessary but not sufficient condition for identification"
            },
            {
              "id": "opt-C",
              "text": "A sufficient but not necessary condition for identification"
            },
            {
              "id": "opt-D",
              "text": "A condition that is nether necessary nor sufficient for identification"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-2039b02961771667",
          "text": "If an estimator is said to have minimum variance, which of the following statements is NOT implied?",
          "options": [
            {
              "id": "opt-A",
              "text": "The probability that the estimate is a long way away from its true value is minimised"
            },
            {
              "id": "opt-B",
              "text": "The estimator is efficient"
            },
            {
              "id": "opt-C",
              "text": "Such an estimator would be termed \"best\""
            },
            {
              "id": "opt-D",
              "text": "Such an estimator will always be unbiased"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-20d40b616d33b4db",
          "text": "Which of the following are disadvantages of the Dickey-Fuller / Engle-Granger approach to testing for cointegration and modelling cointegrating relationships?\n\ni) Only one cointegrating relationship can be estimated\n\nii) Particularly for small samples. There is a high chance of the tests suggestingthat variables are not cointegrated when they are\n\niii) It is not possible to make inferences on the cointegrating regression\n\niv) The procedure forces the researcher to specify which is the dependent variable and which are the independent variables.",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-9cdc764e1ac8691f",
          "text": "Which of the following statements is true concerning the population regression function (PRF) and sample regression function (SRF)?",
          "options": [
            {
              "id": "opt-A",
              "text": "The PRF is the estimated model"
            },
            {
              "id": "opt-B",
              "text": "The PRF is used to infer likely values of the SRF"
            },
            {
              "id": "opt-C",
              "text": "Whether the model is good can be determined by comparing the SRF and the PRF"
            },
            {
              "id": "opt-D",
              "text": "The PRF is a description of the process thought to be generating the data."
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    },
    {
      "id": "masters-econometrics-u1-external-l03",
      "title": "Econometrics — Quiz 3",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-378e5bb9b93a92c5",
          "text": "Which one of the following is a disadvantage of the general to specific or \"LSE\" (\"Hendry\") approach to building econometric models, relative to the specific to general approach?",
          "options": [
            {
              "id": "opt-A",
              "text": "Some variables may be excluded at the first stage leading to coefficient biases"
            },
            {
              "id": "opt-B",
              "text": "The final model may lack theoretical interpretation"
            },
            {
              "id": "opt-C",
              "text": "The final model may be statistically inadequate"
            },
            {
              "id": "opt-D",
              "text": "If the initial model is mis-specified, all subsequent steps will be invalid."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-84d3a47b954d47f9",
          "text": "Which of the following statements are true concerning maximum likelihood (ML) estimation in the context of GARCH models?\n\ni) Maximum likelihood estimation selects the parameter values that maximise the\n\nprobability that we would have actually observed the values of the series y that we\n\nactually did.\n\n\nii) GARCH models can only be estimated by ML and not by OLS\n\n\niii) For estimation of a standard linear model (with no GARCH), the OLS and ML\n\nestimates for the slope and intercept parameters will be identical but the estimator\n\nfor the variance of the disturbances is slightly different\n\n\niv) Most computer packages use numerical procedures to estimate GARCH models\n\nrather than a set of analytical formulae",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-0d9067e2b092fb71",
          "text": "Including relevant lagged values of the dependent variable on the right hand side of a regression equation could lead to which one of the following?",
          "options": [
            {
              "id": "opt-A",
              "text": "Biased but consistent coefficient estimates"
            },
            {
              "id": "opt-B",
              "text": "Biased and inconsistent coefficient estimates"
            },
            {
              "id": "opt-C",
              "text": "Unbiased but inconsistent coefficient estimates"
            },
            {
              "id": "opt-D",
              "text": "Unbiased and consistent but inefficient coefficient estimates."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-6198fde3a86e195c",
          "text": "Which one of the following factors is likely to lead to a relatively high degree of out-of-sample forecast accuracy?",
          "options": [
            {
              "id": "opt-A",
              "text": "A model that is based on financial theory"
            },
            {
              "id": "opt-B",
              "text": "A model that contains many variables"
            },
            {
              "id": "opt-C",
              "text": "A model whose dependent variable has recently exhibited a structural change"
            },
            {
              "id": "opt-D",
              "text": "A model that is entirely statistical in nature with no room for judgmental modification of forecasts"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-462321aa515eec02",
          "text": "Which of the following are plausible approaches to dealing with residual autocorrelation?\n\ni) Take logarithms of each of the variables\n\nii) Add lagged values of the variables to the regression equation\n\niii) Use dummy variables to remove outlying observations\n\niv) Try a model in first differenced form rather than in levels.",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-6184c47d51da320a",
          "text": "For an autoregressive process to be considered stationary",
          "options": [
            {
              "id": "opt-A",
              "text": "The roots of the characteristic equation must all lie inside the unit circle"
            },
            {
              "id": "opt-B",
              "text": "The roots of the characteristic equation must all lie on the unit circle"
            },
            {
              "id": "opt-C",
              "text": "The roots of the characteristic equation must all lie outside the unit circle"
            },
            {
              "id": "opt-D",
              "text": "The roots of the characteristic equation must all be less than one in absolute value"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-5a09f0cb414db242",
          "text": "Which of the following statements are true concerning information criteria?\n\n(i) Adjusted R-squared is an information criterion\n\n(ii) If the residual sum of squares falls when an additional term is added, the value of the information criterion will fall\n\n(iii) Akaike's information criterion always leads to model orders that are at least as large as those of Schwarz's information criterion\n\n(iv) Akaike's information criterion is consistent",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-7b83992f4308e05a",
          "text": "The \"within transform\" involves",
          "options": [
            {
              "id": "opt-A",
              "text": "Taking the average values of the variables"
            },
            {
              "id": "opt-B",
              "text": "Subtracting the mean of each entity away from each observation on that entity"
            },
            {
              "id": "opt-C",
              "text": "Estimating a panel data model using least squares dummy variables"
            },
            {
              "id": "opt-D",
              "text": "Using both time dummies and cross-sectional dummies in a fixed effects panel model"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-66277f4ebe02f532",
          "text": "The purpose of \"augmenting\" the Dickey-Fuller test regression is to",
          "options": [
            {
              "id": "opt-A",
              "text": "Ensure that there is no heteroscedasticity in the test regression residuals."
            },
            {
              "id": "opt-B",
              "text": "Ensure that the test regression residuals are normally distributed"
            },
            {
              "id": "opt-C",
              "text": "Ensure that there is no autocorrelation in the test regression residuals"
            },
            {
              "id": "opt-D",
              "text": "Ensure that all of the non-stationarity is taken into account."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-7af96da8c0b03a5a",
          "text": "If a series, y, follows a random walk with drift b, what is the optimal one-step ahead forecast of the change in y?",
          "options": [
            {
              "id": "opt-A",
              "text": "The current value of y"
            },
            {
              "id": "opt-B",
              "text": "Zero"
            },
            {
              "id": "opt-C",
              "text": "One"
            },
            {
              "id": "opt-D",
              "text": "The average value of the change in y over the in-sample period"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-38da454769514d29",
          "text": "Which of the following are plausible approaches to dealing with a model that exhibits heteroscedasticity?\n\ni) Take logarithms of each of the variables\n\nii) Use suitably modified standard errors\n\niii) Use a generalised least squares procedure\n\niv) Add lagged values of the variables to the regression equation.",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-79dadcf9e389996b",
          "text": "Which of the following statements are true concerning the standardised residuals (residuals divided by their respective conditional standard deviations) from an estimated GARCH model?\n\ni) They are assumed to be normally distributed\n\n\nii) Their squares will be related to their lagged squared values if the GARCH model is\n\nappropriate\n\n\niii) In practice, they are likely to have fat tails\n\n\niv) If the GARCH model is adequate, the standardised residuals and the raw residuals\n\nwill be identical",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-742ddabfa27e22d5",
          "text": "Which one of the following statements is true concerning VARs?",
          "options": [
            {
              "id": "opt-A",
              "text": "The coefficient estimates have intuitive theoretical interpretations"
            },
            {
              "id": "opt-B",
              "text": "The coefficient estimates usually have the same sign for all of the lags of a given variable in a given equation"
            },
            {
              "id": "opt-C",
              "text": "VARs often produce better forecasts than simultaneous equation structural models"
            },
            {
              "id": "opt-D",
              "text": "All of the components of a VAR must be stationary before it can be used for forecasting"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-a51466df446598bf",
          "text": "Which of the following statements is INCORRECT concerning the classical hypothesis testing framework?",
          "options": [
            {
              "id": "opt-A",
              "text": "If the null hypothesis is rejected, the alternative is accepted"
            },
            {
              "id": "opt-B",
              "text": "The null hypothesis is the statement being tested while the alternative encompasses the remaining outcomes of interest"
            },
            {
              "id": "opt-C",
              "text": "The test of significance and confidence interval approaches will always give the same conclusions"
            },
            {
              "id": "opt-D",
              "text": "Hypothesis tests are used to make inferences about the population parameters."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-25d2b3aeb89b2daf",
          "text": "An ARMA(p,q) (p, q are integers bigger than zero) model will have",
          "options": [
            {
              "id": "opt-A",
              "text": "An acf and pacf that both decline geometrically"
            },
            {
              "id": "opt-B",
              "text": "An acf that declines geometrically and a pacf that is zero after p lags"
            },
            {
              "id": "opt-C",
              "text": "An acf that declines geometrically and a pacf that is zero after q lags"
            },
            {
              "id": "opt-D",
              "text": "An acf that is zero after p lags and a pacf that is zero after q lags"
            }
          ],
          "correctOptionId": "opt-A"
        }
      ]
    },
    {
      "id": "masters-econometrics-u1-external-l04",
      "title": "Econometrics — Quiz 4",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-057b632436d59305",
          "text": "Suppose that the following regression is estimated using 27 quarterly observations:\n\n$y_t = \\beta_1 + \\beta_2 x_2 + \\beta_3 x_{3t} + u_t$\n\nWhat is the appropriate critical value for a 2-sided 5% size of test of $H_0: \\beta_3 = 1$?",
          "options": [
            {
              "id": "opt-A",
              "text": "1.64"
            },
            {
              "id": "opt-B",
              "text": "1.71"
            },
            {
              "id": "opt-C",
              "text": "2.06"
            },
            {
              "id": "opt-D",
              "text": "1.96"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-5d2fc63f9f2d33b0",
          "text": "Suppose that two researchers, using the same 3 variables and the same 250 observations on each variable, estimate a VAR. One estimates a VAR(6), while the other estimates a VAR(4). The determinants of the variance-covariance matrices of the residuals for each VAR are 0.0036 and 0.0049 respectively. What is the values of the test statistic for performing a test of whether the VAR(6) can be restricted to a VAR(4)?",
          "options": [
            {
              "id": "opt-A",
              "text": "77.07"
            },
            {
              "id": "opt-B",
              "text": "0.31"
            },
            {
              "id": "opt-C",
              "text": "0.33"
            },
            {
              "id": "opt-D",
              "text": "4.87"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-fe167bb3c508d2bb",
          "text": "Which of the following is a DISADVANTAGE of using pure time-series models (relative to structural models)?",
          "options": [
            {
              "id": "opt-A",
              "text": "They are not theoretically motivated"
            },
            {
              "id": "opt-B",
              "text": "They cannot produce forecasts easily"
            },
            {
              "id": "opt-C",
              "text": "They cannot be used for very high frequency data"
            },
            {
              "id": "opt-D",
              "text": "It is difficult to determine the appropriate explanatory variables for use in pure time-series models"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-3b43e168938dbfa1",
          "text": "Which of the following are alternative names for the dependent variable (usually denoted by y) in linear regression analysis?\n\n(i) The regressand\n\n(ii) The regressor\n\n(iii) The explained variable\n\n(iv) The explanatory variable",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-32b6cd8d0aa6f7f2",
          "text": "Which of the following are advantages of the VAR approach to modelling the relationship between variables relative to the estimation of full structural models?\n\ni) VARs receive strong motivation from financial and economic theory\n\n\nii) VARs in their reduced forms can be used easily to produce time-series forecasts\n\n\niii) VAR models are typically highly parsimonious\n\n\niv) OLS can be applied separately to each equation in a reduced form VAR",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-a4bf3bee357d444a",
          "text": "Which of the following statements is TRUE concerning the standard regression model?",
          "options": [
            {
              "id": "opt-A",
              "text": "y has a probability distribution"
            },
            {
              "id": "opt-B",
              "text": "x has a probability distribution"
            },
            {
              "id": "opt-C",
              "text": "The disturbance term is assumed to be correlated with x"
            },
            {
              "id": "opt-D",
              "text": "For an adequate model, the residual (u-hat) will be zero for all sample data points"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-d1c63be268917217",
          "text": "Consider the following model for $y_t$:\n\n$y_t = \\mu + \\lambda t + u_t$\n\nWhich one of the following most accurately describes the process for $y_t$?",
          "options": [
            {
              "id": "opt-A",
              "text": "A unit root process"
            },
            {
              "id": "opt-B",
              "text": "A stationary process"
            },
            {
              "id": "opt-C",
              "text": "A deterministic trend process"
            },
            {
              "id": "opt-D",
              "text": "A random walk with drift"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-b6ad4036f8b15673",
          "text": "Which of the following is correct concerning logit and probit models?",
          "options": [
            {
              "id": "opt-A",
              "text": "They use a different method of transforming the model so that the probabilities lie between zero and one"
            },
            {
              "id": "opt-B",
              "text": "The logit model can result in too many observations falling at exactly zero or exactly one"
            },
            {
              "id": "opt-C",
              "text": "For the logit model, the marginal effect of a change in one of the explanatory variables is simply the estimate of the parameter attached to that variable, whereas this is not the case for the probit model"
            },
            {
              "id": "opt-D",
              "text": "The probit model is based on a cumulative logistic function"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-4c6263f60cfedf3b",
          "text": "What is the most important disadvantage of the diagonal VECH approach to building multivariate GARCH models that is overcome by the BEKK formulation?",
          "options": [
            {
              "id": "opt-A",
              "text": "The diagonal VECH model is hard to interpret intuitively"
            },
            {
              "id": "opt-B",
              "text": "The diagonal VECH model contains too many parameters"
            },
            {
              "id": "opt-C",
              "text": "The diagonal VECH model does not ensure a positive-definite variance-covariance matrix"
            },
            {
              "id": "opt-D",
              "text": "The BEKK model reduces the dimensionality problem that arises when a number of series are modelled together."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-6813d5746e396791",
          "text": "If a relevant variable is omitted from a regression equation, the consequences would be that:\n\ni) The standard errors would be biased\n\n\nii) If the excluded variable is uncorrelated with all of the included variables, all of\n\nthe slope coefficients will be inconsistent.\n\n\niii) If the excluded variable is uncorrelated with all of the included variables, the\n\nintercept coefficient will be inconsistent.\n\n\niv) If the excluded variable is uncorrelated with all of the included variables, all of\n\nthe slope and intercept coefficients will be consistent and unbiased but inefficient.",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-8813b0856be055ef",
          "text": "Which of the following are alternative names for the independent variable (usually denoted by x) in linear regression analysis?\n\n(i) The regressor\n\n(ii) The regressand\n\n(iii) The causal variable\n\n(iv) The effect variable",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-3780c13cfcbea9c0",
          "text": "Consider the OLS estimator for the standard error of the slope coefficient. Which of the following statement(s) is (are) true?\n\n(i) The standard error will be positively related to the residual variance\n\n(ii) The standard error will be negatively related to the dispersion of the observations on the explanatory variable about their mean value\n\n(iii) The standard error will be negatively related to the sample size\n\n(iv) The standard error gives a measure of the precision of the coefficient estimate.",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-7ebdac43f041feaa",
          "text": "What is the meaning of the term \"heteroscedasticity\"?",
          "options": [
            {
              "id": "opt-A",
              "text": "The variance of the errors is not constant"
            },
            {
              "id": "opt-B",
              "text": "The variance of the dependent variable is not constant"
            },
            {
              "id": "opt-C",
              "text": "The errors are not linearly independent of one another"
            },
            {
              "id": "opt-D",
              "text": "The errors have non-zero mean"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-1287ea4308e2193c",
          "text": "If a Durbin Watson statistic takes a value close to zero, what will be the value of the first order autocorrelation coefficient?",
          "options": [
            {
              "id": "opt-A",
              "text": "Close to zero"
            },
            {
              "id": "opt-B",
              "text": "Close to plus one"
            },
            {
              "id": "opt-C",
              "text": "Close to minus one"
            },
            {
              "id": "opt-D",
              "text": "Close to either minus one or plus one"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-2f961d2645fc3546",
          "text": "Under the null hypothesis of a Bera-Jarque test, the distribution has",
          "options": [
            {
              "id": "opt-A",
              "text": "Zero skewness and zero kurtosis"
            },
            {
              "id": "opt-B",
              "text": "Zero skewness and a kurtosis of three"
            },
            {
              "id": "opt-C",
              "text": "Skewness of one and zero kurtosis"
            },
            {
              "id": "opt-D",
              "text": "Skewness of one and kurtosis of three."
            }
          ],
          "correctOptionId": "opt-B"
        }
      ]
    },
    {
      "id": "masters-econometrics-u1-external-l05",
      "title": "Econometrics — Quiz 5",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-022b7a21ed0c02f6",
          "text": "If an estimator is said to be consistent, it is implied that",
          "options": [
            {
              "id": "opt-A",
              "text": "On average, the estimated coefficient values will equal the true values"
            },
            {
              "id": "opt-B",
              "text": "The OLS estimator is unbiased and no other unbiased estimator has a smaller variance"
            },
            {
              "id": "opt-C",
              "text": "The estimates will converge upon the true values as the sample size increases"
            },
            {
              "id": "opt-D",
              "text": "The coefficient estimates will be as close to their true values as possible for small and large samples."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-7a04e36393d96976",
          "text": "Which of the following is a typical characteristic of financial asset return time-series?",
          "options": [
            {
              "id": "opt-A",
              "text": "Their distributions are thin-tailed"
            },
            {
              "id": "opt-B",
              "text": "They are not weakly stationary"
            },
            {
              "id": "opt-C",
              "text": "They are highly autocorrelated"
            },
            {
              "id": "opt-D",
              "text": "They have no trend"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-4c8451a73f029daa",
          "text": "Which of the following assumptions are required to show the consistency, unbiasedness and efficiency of the OLS estimator?\n\ni) $E(u_t) = 0$\n\n\nii) $\\text{Var}(u_t) = \\sigma^2$\n\n\niii) $\\text{Cov}(u_t, u_{t-j}) = 0 \\forall j$\n\n\niv) $u_t \\sim N(0, \\sigma^2)$",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-dc30093b5c23a2f5",
          "text": "Which of the following is a disadvantage of the fixed effects approach to estimating a panel model?",
          "options": [
            {
              "id": "opt-A",
              "text": "The model is likely to be technical to estimate"
            },
            {
              "id": "opt-B",
              "text": "The approach may not be valid if the composite error term is correlated with one or more of the explanatory variables"
            },
            {
              "id": "opt-C",
              "text": "The number of parameters to estimate may be large, resulting in a loss of degrees of freedom"
            },
            {
              "id": "opt-D",
              "text": "The fixed effects approach can only capture cross-sectional heterogeneity and not temporal variation in the dependent variable."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-7eb215e9ab6c282e",
          "text": "Consider an identical situation to that of question 21, except that now a 2-sided alternative is used. What would now be the appropriate conclusion?",
          "options": [
            {
              "id": "opt-A",
              "text": "H0 is rejected"
            },
            {
              "id": "opt-B",
              "text": "H0 is not rejected"
            },
            {
              "id": "opt-C",
              "text": "H1 is rejected"
            },
            {
              "id": "opt-D",
              "text": "There is insufficient information given in the question to reach a conclusion"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-3605fd21b702770c",
          "text": "The price of a house is best described as what type of number?",
          "options": [
            {
              "id": "opt-A",
              "text": "Discrete"
            },
            {
              "id": "opt-B",
              "text": "Cardinal"
            },
            {
              "id": "opt-C",
              "text": "Ordinal"
            },
            {
              "id": "opt-D",
              "text": "Nominal"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-19663ff1dd65376f",
          "text": "If a Johansen \"trace\" test for a null hypothesis of 2 cointegrating vectors is applied to a system containing 4 variables is conducted, which eigenvalues would be used in the test?",
          "options": [
            {
              "id": "opt-A",
              "text": "All of them"
            },
            {
              "id": "opt-B",
              "text": "The largest 2"
            },
            {
              "id": "opt-C",
              "text": "The smallest 2"
            },
            {
              "id": "opt-D",
              "text": "The second largest"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-8150ac418ef8b11f",
          "text": "Which of the following statements is true concerning variance decomposition analysis of VARs?\n\ni) Variance decompositions measure the impact of a unit shock to each of the variables on the VAR\n\nii) Variance decompositions can be thought of as measuring the proportion of the forecast error variance that is attributable to each variable\n\niii) The ordering of the variables is important for calculating impulse responses but not variance decompositions\n\niv) It is usual that most of the forecast error variance for a given variable is attributable to shocks to that variable",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-a32b06d6a4d85918",
          "text": "Suppose that we have estimated a GARCH model for daily equity returns, and we are interested in producing a 10-day forecast of the volatility (measured by the standard deviation of returns) for use in a value at risk model. How could such a forecast most validly be calculated?",
          "options": [
            {
              "id": "opt-A",
              "text": "Produce 1, 2, 3, ..., 10 step ahead conditional variance forecasts and add them up"
            },
            {
              "id": "opt-B",
              "text": "Produce 1, 2, 3, ..., 10 step ahead conditional variance forecasts and add them up and take the square root"
            },
            {
              "id": "opt-C",
              "text": "Produce 1, 2, 3, ..., 10 step ahead conditional variance forecasts, take the square roots of each one and add them up"
            },
            {
              "id": "opt-D",
              "text": "Produce a 1-step ahead conditional variance forecast, take its square root and multiply it by the square root of 10"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-05505ba183f76404",
          "text": "Suppose that the value of $R^2$ for an estimated regression model is exactly zero. Which of the following are true?\n\ni) All coefficient estimates on the slopes will be zero\n\nii) The fitted line will be horizontal with respect to all of the explanatory variables\n\niii) The regression line has not explained any of the variability of y about its mean value\n\niv) The intercept coefficient estimate must be zero.",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-93774554ecb09b65",
          "text": "A white noise process will have\n\n(i) A zero mean\n\n(ii) A constant variance\n\n(iii) Autocovariances that are constant\n\n(iv) Autocovariances that are zero except at lag zero",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-3a63070e23e36cea",
          "text": "Which of the following statements are true concerning the Box-Jenkins approach to diagnostic testing for ARMA models?\n\n(i) The tests will show whether the identified model is either too large or too small\n\n(ii) The tests involve checking the model residuals for autocorrelation, heteroscedasticity, and non-normality\n\n(iii) If the model suggested at the identification stage is appropriate, the acf and pacf for the residuals should show no additional structure\n\n(iv) If the model suggested at the identification stage is appropriate, the coefficients on the additional variables under the overfitting approach will be statistically insignificant",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-34d8ce52b7ad3e63",
          "text": "Which one of the following would be a plausible response to a finding of residual non-normality?",
          "options": [
            {
              "id": "opt-A",
              "text": "Use a logarithmic functional form instead of a linear one"
            },
            {
              "id": "opt-B",
              "text": "Add lags of the variables on the right hand side of the regression model"
            },
            {
              "id": "opt-C",
              "text": "Estimate the model in first differenced form"
            },
            {
              "id": "opt-D",
              "text": "Remove any large outliers from the data."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-24f31886f259d97f",
          "text": "The fixed effects panel model is also sometimes known as",
          "options": [
            {
              "id": "opt-A",
              "text": "A seemingly unrelated regression model"
            },
            {
              "id": "opt-B",
              "text": "The least squares dummy variables approach"
            },
            {
              "id": "opt-C",
              "text": "The random effects model"
            },
            {
              "id": "opt-D",
              "text": "Heteroscedasticity and autocorrelation consistent"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-1f554a89bf4cc05c",
          "text": "Which of the following statements is TRUE concerning OLS estimation?",
          "options": [
            {
              "id": "opt-A",
              "text": "OLS minimises the sum of the vertical distances from the points to the line"
            },
            {
              "id": "opt-B",
              "text": "OLS minimises the sum of the squares of the vertical distances from the points to the line"
            },
            {
              "id": "opt-C",
              "text": "OLS minimises the sum of the horizontal distances from the points to the line"
            },
            {
              "id": "opt-D",
              "text": "OLS minimises the sum of the squares of the horizontal distances from the points to the line."
            }
          ],
          "correctOptionId": "opt-B"
        }
      ]
    },
    {
      "id": "masters-econometrics-u1-external-l06",
      "title": "Econometrics — Quiz 6",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-e9ecdb048dd51195",
          "text": "If the standard tools for time-series analysis, such as estimation of the acf, pacf and spectral analysis, find no evidence of structure in the data, this implies that the data are which of the following?",
          "options": [
            {
              "id": "opt-A",
              "text": "Normally distributed"
            },
            {
              "id": "opt-B",
              "text": "Uncorrelated"
            },
            {
              "id": "opt-C",
              "text": "Independent"
            },
            {
              "id": "opt-D",
              "text": "Fat-tailed"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-7c017af81c77a1f3",
          "text": "If two variables, $x_t$ and $y_t$ are said to be cointegrated, which of the following statements are true?\n\ni) $x_t$ and $y_t$ must both be stationary\n\n\nii) Only one linear combination of $x_t$ and $y_t$ will be stationary\n\n\niii) The cointegrating equation for $x_t$ and $y_t$ describes the short-run relationship\n\nbetween the two series\n\n\niv) The residuals of a regression of $y_t$ on $x_t$ must be stationary",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-af21c387697090fb",
          "text": "A dependent variable whose values are not observable outside a certain range but where the corresponding values of the independent variables are still available would be most accurately described as what kind of variable?",
          "options": [
            {
              "id": "opt-A",
              "text": "Censored"
            },
            {
              "id": "opt-B",
              "text": "Truncated"
            },
            {
              "id": "opt-C",
              "text": "Multinomial variable"
            },
            {
              "id": "opt-D",
              "text": "Discrete choice"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-8af2713114b83396",
          "text": "A Hausman test would be used for",
          "options": [
            {
              "id": "opt-A",
              "text": "Determining whether an equation that is part of a simultaneous system is identified"
            },
            {
              "id": "opt-B",
              "text": "Determining whether a simultaneous framework is needed for a particular variable"
            },
            {
              "id": "opt-C",
              "text": "Determining whether 2SLS or ILS is optimal"
            },
            {
              "id": "opt-D",
              "text": "Determining whether the structural form equations can be obtained via substitution from the reduced forms"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-b728a5e94ca4fdda",
          "text": "Under the matrix notation for the classical linear regression model, $y = X \\beta + u$, what are the dimensions of $u$?",
          "options": [
            {
              "id": "opt-A",
              "text": "T x k"
            },
            {
              "id": "opt-B",
              "text": "T x 1"
            },
            {
              "id": "opt-C",
              "text": "k x 1"
            },
            {
              "id": "opt-D",
              "text": "1 x 1"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-e0425d71d4fac40e",
          "text": "How many parameters will be required to be estimated in total for all equations of a standard form, unrestricted, tri-variate VAR(4), ignoring the intercepts?",
          "options": [
            {
              "id": "opt-A",
              "text": "12"
            },
            {
              "id": "opt-B",
              "text": "4"
            },
            {
              "id": "opt-C",
              "text": "3"
            },
            {
              "id": "opt-D",
              "text": "36"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-1a160fa47cbc78f0",
          "text": "A researcher tests for structural stability in the following regression model:\n\n$y_t = \\beta_1 + \\beta_2 x_{2t} + \\beta_3 x_{3t} + u_t$\n\nThe total sample of 200 observations is split exactly in half for the sub-sample regressions. Which would be the unrestricted residual sum of squares?",
          "options": [
            {
              "id": "opt-A",
              "text": "The RSS for the whole sample"
            },
            {
              "id": "opt-B",
              "text": "The RSS for the first sub-sample"
            },
            {
              "id": "opt-C",
              "text": "The RSS for the second sub-sample"
            },
            {
              "id": "opt-D",
              "text": "The sum of the RSS for the first and second sub-samples"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-83f854f6cad419f5",
          "text": "Suppose that we are interested in testing the null hypothesis that a GARCH(2,2) model can be restricted to a process with a constant conditional variance using the likelihood ratio test approach. Which of the following statements are true?",
          "options": [
            {
              "id": "opt-A",
              "text": "The test statistic will follow a chi-squared distribution with 2 degrees of freedom under the null hypothesis"
            },
            {
              "id": "opt-B",
              "text": "The value of the log-likelihood function will almost always be bigger for the restricted model than for the unrestricted model"
            },
            {
              "id": "opt-C",
              "text": "If the relevant values of the log-likelihood functions are -112.3 and -118.4, the value of the test statistic is 12.2"
            },
            {
              "id": "opt-D",
              "text": "The likelihood ratio test compares the slopes of the log-likelihood function at the maximum and at the restricted parameter value."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-fe72fbe42f60f68a",
          "text": "Which one of the following is NOT a plausible remedy for near multicollinearity?",
          "options": [
            {
              "id": "opt-A",
              "text": "Use principal components analysis"
            },
            {
              "id": "opt-B",
              "text": "Drop one of the collinear variables"
            },
            {
              "id": "opt-C",
              "text": "Use a longer run of data"
            },
            {
              "id": "opt-D",
              "text": "Take logarithms of each of the variables"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-ec0abc71bf11a065",
          "text": "Consider the following AR(2) process:\n\nyt = 1.5 yt-1 - 0.5 yt-2 + ut\n\nThis is a",
          "options": [
            {
              "id": "opt-A",
              "text": "Stationary process"
            },
            {
              "id": "opt-B",
              "text": "Unit root process"
            },
            {
              "id": "opt-C",
              "text": "Explosive process"
            },
            {
              "id": "opt-D",
              "text": "Stationary and unit root process"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-5df2fc847c06ab6a",
          "text": "Which of the following could be used as a test for autocorrelation up to third order?",
          "options": [
            {
              "id": "opt-A",
              "text": "The Durbin Watson test"
            },
            {
              "id": "opt-B",
              "text": "White's test"
            },
            {
              "id": "opt-C",
              "text": "The RESET test"
            },
            {
              "id": "opt-D",
              "text": "The Breusch-Godfrey test"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-4e4bbc0b74abb21b",
          "text": "The residual from a standard regression model is defined as",
          "options": [
            {
              "id": "opt-A",
              "text": "The difference between the actual value, y, and the mean, y-bar"
            },
            {
              "id": "opt-B",
              "text": "The difference between the fitted value, y-hat, and the mean, y-bar"
            },
            {
              "id": "opt-C",
              "text": "The difference between the actual value, y, and the fitted value, y-hat"
            },
            {
              "id": "opt-D",
              "text": "The square of the difference between the fitted value, y-hat, and the mean, y-bar"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-d66110461cb55d0f",
          "text": "If OLS is applied separately to each equation that is part of a simultaneous system, the resulting estimates will be",
          "options": [
            {
              "id": "opt-A",
              "text": "Unbiased and consistent"
            },
            {
              "id": "opt-B",
              "text": "Biased but consistent"
            },
            {
              "id": "opt-C",
              "text": "Biased and inconsistent"
            },
            {
              "id": "opt-D",
              "text": "It is impossible to apply OLS to equations that are part of a simultaneous system"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-73e39cccb6fc8ded",
          "text": "Which one of the following is NOT an example of mis-specification of functional form?",
          "options": [
            {
              "id": "opt-A",
              "text": "Using a linear specification when y scales as a function of the squares of x"
            },
            {
              "id": "opt-B",
              "text": "Using a linear specification when a double-logarithmic model would be more appropriate"
            },
            {
              "id": "opt-C",
              "text": "Modelling y as a function of x when in fact it scales as a function of 1/x"
            },
            {
              "id": "opt-D",
              "text": "Excluding a relevant variable from a linear regression model"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-e7daa1bd8f45017b",
          "text": "Suppose that we wished to evaluate the factors that affected the probability that an investor would choose an equity fund rather than a bond fund or a cash investment. Which class of model would be most appropriate?",
          "options": [
            {
              "id": "opt-A",
              "text": "A logit model"
            },
            {
              "id": "opt-B",
              "text": "A multinomial logit"
            },
            {
              "id": "opt-C",
              "text": "A tobit model"
            },
            {
              "id": "opt-D",
              "text": "An ordered logit model"
            }
          ],
          "correctOptionId": "opt-B"
        }
      ]
    },
    {
      "id": "masters-econometrics-u1-external-l07",
      "title": "Econometrics — Quiz 7",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-c56baa9b3e191a8e",
          "text": "Which of the following statements will be true if the number of replications used in a Monte Carlo study is small?\n\ni) The statistic of interest may be estimated imprecisely\n\n\nii) The results may be affected by unrepresentative combinations of random draws\n\n\niii) The standard errors on the estimated quantities may be unacceptably large\n\n\niv) Variance reduction techniques can be used to reduce the standard errors",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iv) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-7ee5a3b8e6efa6d1",
          "text": "Which of the following is a disadvantage of the random effects approach to estimating a panel model?",
          "options": [
            {
              "id": "opt-A",
              "text": "The approach may not be valid if the composite error term is correlated with one or more of the explanatory variables"
            },
            {
              "id": "opt-B",
              "text": "The number of parameters to estimate may be large, resulting in a loss of degrees of freedom"
            },
            {
              "id": "opt-C",
              "text": "The random effects approach can only capture cross-sectional heterogeneity and not temporal variation in the dependent variable."
            },
            {
              "id": "opt-D",
              "text": "All of (a) to (c) are potential disadvantages of the random effects approach."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-1de8c539355e6dd8",
          "text": "Which of the following could result in autocorrelated residuals?\n\ni) Slowness of response of the dependent variable to changes in the values of the independent variables\n\nii) Over-reactions of the dependent variable to changes in the independent variables\n\niii) Omission of relevant explanatory variables that are autocorrelated\n\niv) Outliers in the data",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-eb052fd23751b35a",
          "text": "Which of the following statements are true concerning the acf and pacf?\n\n(i) The acf and pacf are often hard to interpret in practice\n\n(ii) The acf and pacf can be difficult to calculate for some data sets\n\n(iii) Information criteria represent an alternative approach to model order determination\n\n(iv) If applied correctly, the acf and pacf will always deliver unique model selections",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-2b373f28916f6cf4",
          "text": "Which of the following conditions are necessary for a series to be classifiable as a weakly stationary process?\n\n(i) It must have a constant mean\n\n(ii) It must have a constant variance\n\n(iii) It must have constant autocovariances for given lags\n\n(iv) It must have a constant probability distribution",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-6a6c292cde86648b",
          "text": "Consider the following equation and determine the class of model that it best represents\n\n$y_{it} = \\alpha + \\beta_{it} + \\mu_i + \\nu_{it}$",
          "options": [
            {
              "id": "opt-A",
              "text": "An entity fixed effects model"
            },
            {
              "id": "opt-B",
              "text": "A time fixed effects model"
            },
            {
              "id": "opt-C",
              "text": "A random effects model"
            },
            {
              "id": "opt-D",
              "text": "A pure time series model"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-1580c254c0b38210",
          "text": "Note that statistical tables are not necessary to answer this question. For a sample of 1000 observations, the Dickey-Fuller test statistic values are",
          "options": [
            {
              "id": "opt-A",
              "text": "More negative than (i.e. bigger in absolute value than) those in the left hand tail of a normal distribution"
            },
            {
              "id": "opt-B",
              "text": "Less negative than (i.e. smaller in absolute value than) those in the left hand tail of a normal distribution"
            },
            {
              "id": "opt-C",
              "text": "Obtained from an analytical formula for the density of the Dickey-Fuller distribution"
            },
            {
              "id": "opt-D",
              "text": "More negative (i.e. bigger in absolute value) for a 10% size of test than a 5% test."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-fdd30af9108ec594",
          "text": "Suppose that a hypothesis test is conducted using a 5% significance level. Which of the following statements are correct?\n\n(i) The significance level is equal to the size of the test\n\n(ii) The significance level is equal to the power of the test\n\n(iii) 2.5% of the total distribution will be in each tail rejection region for a 2-sided test\n\n(iv) 5% of the total distribution will be in each tail rejection region for a 2-sided test.",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-8d97397e1c520a76",
          "text": "Which one of the following criticisms of the Dickey-Fuller/Engle-Granger approach to dealing with cointegrated variables is overcome by the Engle-Yoo (EY) procedure?",
          "options": [
            {
              "id": "opt-A",
              "text": "In the context of small samples, Dickey Fuller tests are prone to conclude that there is a unit root in a series when there is not"
            },
            {
              "id": "opt-B",
              "text": "The Engle-Granger (EG) approach can only detect up to one cointegrating relationship even though there could be more than one"
            },
            {
              "id": "opt-C",
              "text": "The variables are treated asymmetrically in the cointegrating tests"
            },
            {
              "id": "opt-D",
              "text": "It is not possible to perform tests about the cointegrating relationship"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-cfddb0192382d37b",
          "text": "Consider a series that follows an MA(1) with zero mean and a moving average coefficient of 0.4. What is the value of the autocovariance at lag 1?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.4"
            },
            {
              "id": "opt-B",
              "text": "1"
            },
            {
              "id": "opt-C",
              "text": "0.34"
            },
            {
              "id": "opt-D",
              "text": "It is not possible to determine the value of the autocovariances without knowing the disturbance variance."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-30bae35b49027a44",
          "text": "Which of the following estimation techniques are available for the estimation of over-identified systems of simultaneous equations?\n\ni) OLS\n\nii) ILS\n\niii) 2SLS\n\niv) IV",
          "options": [
            {
              "id": "opt-A",
              "text": "(iii) only"
            },
            {
              "id": "opt-B",
              "text": "(iii) and (iv) only"
            },
            {
              "id": "opt-C",
              "text": "(ii), (iii), and (iv) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii) and (iv)"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-48647f75ceb705bf",
          "text": "Which one of the following statements best describes a Type II error?",
          "options": [
            {
              "id": "opt-A",
              "text": "It is the probability of incorrectly rejecting the null hypothesis"
            },
            {
              "id": "opt-B",
              "text": "It is equivalent to the power of the test"
            },
            {
              "id": "opt-C",
              "text": "It is equivalent to the size of the test"
            },
            {
              "id": "opt-D",
              "text": "It is the probability of failing to reject a null hypothesis that was wrong"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-617b705e89a3c740",
          "text": "Which one of the following would be the most appropriate as a 95% (two-sided) confidence interval for the intercept term of the model given in question 21?",
          "options": [
            {
              "id": "opt-A",
              "text": "(-4.79,2.19)"
            },
            {
              "id": "opt-B",
              "text": "(-4.16,4.16)"
            },
            {
              "id": "opt-C",
              "text": "(-1.98,1.98)"
            },
            {
              "id": "opt-D",
              "text": "(-5.46,2.86)"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-c25dbbf1bfdc173e",
          "text": "Which of the following are characteristics of a stationary process?\n\ni) It crosses its mean value frequently\n\n\nii) It has constant mean and variance\n\n\niii) It contains no trend component\n\n\niv) It will be stationary in first difference form",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-86b8c1844d8fd274",
          "text": "Consider again the VAR model of equation 16. Which of the following conditions must hold for it to be said that there is bi-directional feedback?",
          "options": [
            {
              "id": "opt-A",
              "text": "The b and d coefficients significant and the a and c coefficients insignificant"
            },
            {
              "id": "opt-B",
              "text": "The a and c coefficients significant and the b and d coefficients insignificant"
            },
            {
              "id": "opt-C",
              "text": "The a and c coefficients significant"
            },
            {
              "id": "opt-D",
              "text": "The b and d coefficients significant"
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    },
    {
      "id": "masters-econometrics-u1-external-l08",
      "title": "Econometrics — Quiz 8",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-9c342c0c8e7740f6",
          "text": "Consider the following sample autocorrelation estimates obtained using 250 data points:\n\n1) Lag 1 2 3\n\n2) Coefficient 0.2 -0.15 -0.1\n\n3) Assuming that the coefficients are approximately normally distributed, which of the coefficients are statistically significant at the 5% level?",
          "options": [
            {
              "id": "opt-A",
              "text": "1 only"
            },
            {
              "id": "opt-B",
              "text": "1 and 2 only"
            },
            {
              "id": "opt-C",
              "text": "1, 2 and 3 only"
            },
            {
              "id": "opt-D",
              "text": "It is not possible to determine the statistical significance since no standard errors have been given"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-5d9be9bc06f7ebd4",
          "text": "Which one of the following is examined by looking at a goodness of fit statistic?",
          "options": [
            {
              "id": "opt-A",
              "text": "How well the population regression function fits the data"
            },
            {
              "id": "opt-B",
              "text": "How well the sample regression function fits the population regression function"
            },
            {
              "id": "opt-C",
              "text": "How well the sample regression function fits the data"
            },
            {
              "id": "opt-D",
              "text": "How well the population regression function fits the sample regression function."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-5b5103b264a77259",
          "text": "Which of the following statements are correct concerning the use of antithetic variates as part of a Monte Carlo experiment?\n\ni) Antithetic variates work by reducing the number of replications required to cover the whole probability space\n\nii) Antithetic variates involve employing a similar variable to that used in the simulation, but whose properties are known analytically\n\niii) Antithetic variates involve using the negative of each of the random draws and repeating the experiment using those values as the draws\n\niv) Antithetic variates involve taking one over each of the random draws and repeating the experiment using those values as the draws",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iv) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-8e81a9739b0d5df9",
          "text": "Which one of the following statements is true concerning alternative forecast accuracy measures?",
          "options": [
            {
              "id": "opt-A",
              "text": "Mean squared error is usually highly correlated with trading rule profitability"
            },
            {
              "id": "opt-B",
              "text": "Mean absolute error provides a quadratic loss function"
            },
            {
              "id": "opt-C",
              "text": "Mean absolute percentage error is a useful measure for evaluating asset return forecasts"
            },
            {
              "id": "opt-D",
              "text": "Mean squared error penalises large forecast errors disproportionately more than small forecast errors"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-a2b01793ebd12afa",
          "text": "Which of the following criticisms of standard (\"plain vanilla\") GARCH models can be overcome by EGARCH models?\n\ni) Estimated coefficient values from GARCH models may be negative\n\nii) GARCH models cannot account for leverage effects\n\niii) The responsiveness of future volatility to positive and negative shocks is symmetric under a GARCH formulation\n\niv) GARCH models cannot allow for a feedback from the volatility to the returns",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-3c9c22c2dc10765b",
          "text": "Suppose that 100 separate firms were tested to determine how many of them \"beat the market\" using a Jensen-type regression, and it is found that 3 fund managers significantly do so. Does this suggest prima facie evidence for stock market inefficiency?",
          "options": [
            {
              "id": "opt-A",
              "text": "Yes"
            },
            {
              "id": "opt-B",
              "text": "No"
            },
            {
              "id": "opt-C",
              "text": "In order to answer this question, you would need to test every fund manager trading in that market"
            },
            {
              "id": "opt-D",
              "text": "There is insufficient information given in the question to draw a conclusion about market efficiency."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-af67ed216b06c409",
          "text": "Which of the following are advantages of the use of panel data over pure cross-sectional or pure time-series modelling?\n\n(i) The use of panel data can increase the number of degrees of freedom and therefore the power of tests\n\n(ii) The use of panel data allows the average value of the dependent variable to vary either cross-sectionally or over time or both\n\n(iii) The use of panel data enables the researcher allows the estimated relationship between the independent and dependent variables to vary either cross-sectionally or over time or both",
          "options": [
            {
              "id": "opt-A",
              "text": "(i) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (ii) only"
            },
            {
              "id": "opt-C",
              "text": "(ii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), and (iii)"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-d2aecc14ec1ba0c5",
          "text": "If the Engle-Granger test is applied to the residuals of a potentially cointegrating regression, what would be the interpretation of the null hypothesis?",
          "options": [
            {
              "id": "opt-A",
              "text": "The variables are cointegrated"
            },
            {
              "id": "opt-B",
              "text": "The variables are not cointegrated"
            },
            {
              "id": "opt-C",
              "text": "Both variables are stationary"
            },
            {
              "id": "opt-D",
              "text": "Both variables are non-stationary"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-7254359ea4eacb5b",
          "text": "Which of the following statements are true concerning the autocorrelation function (acf) and partial autocorrelation function (pacf)?\n\ni) The acf and pacf will always be identical at lag one whatever the model\n\nii) The pacf for an MA(q) model will in general be non-zero beyond lag q\n\niii) The pacf for an AR(p) model will be zero beyond lag p\n\niv) The acf and pacf will be the same at lag two for an MA(1) model",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-cf152e85c7ea4931",
          "text": "Suppose that a test that the true value of the intercept coefficient is zero results in non-rejection. What would be the appropriate conclusion?",
          "options": [
            {
              "id": "opt-A",
              "text": "Drop the intercept and re-run the regression"
            },
            {
              "id": "opt-B",
              "text": "Retain the intercept"
            },
            {
              "id": "opt-C",
              "text": "Re-compute the test statistic"
            },
            {
              "id": "opt-D",
              "text": "The regression line is running exactly through the origin"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-b7f8dde854130636",
          "text": "In order to determine whether to use a fixed effects or random effects model, a researcher conducts a Hausman test. Which of the following statements is false?",
          "options": [
            {
              "id": "opt-A",
              "text": "For random effects models, the use of OLS would result in consistent but inefficient parameter estimation"
            },
            {
              "id": "opt-B",
              "text": "If the Hausman test is not satisfied, the random effects model is more appropriate."
            },
            {
              "id": "opt-C",
              "text": "Random effects estimation involves the construction of \"quasi-demeaned\" data"
            },
            {
              "id": "opt-D",
              "text": "Random effects estimation will not be appropriate if the composite error term is correlated with one or more of the explanatory variables in the model"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-1a9361034c048acd",
          "text": "Suppose that observations are available on the monthly bond prices of 100 companies for 5 years. What type of data are these?",
          "options": [
            {
              "id": "opt-A",
              "text": "Cross-sectional"
            },
            {
              "id": "opt-B",
              "text": "Time-series"
            },
            {
              "id": "opt-C",
              "text": "Panel"
            },
            {
              "id": "opt-D",
              "text": "Qualitative"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-2729f7f49fba3ffc",
          "text": "An \"ex ante\" forecasting model is one which",
          "options": [
            {
              "id": "opt-A",
              "text": "Includes only contemporaneous values of variables on the RHS"
            },
            {
              "id": "opt-B",
              "text": "Includes only contemporaneous and previous values of variables on the RHS"
            },
            {
              "id": "opt-C",
              "text": "Includes only previous values of variables on the RHS"
            },
            {
              "id": "opt-D",
              "text": "Includes only contemporaneous values of exogenous variables on the RHS"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-c9fdc6297ab611d6",
          "text": "If a researcher uses daily data to examine a particular problem and creates a variable that assigns a numerical value of 1 to Monday observations, what term would best describe this type of number?",
          "options": [
            {
              "id": "opt-A",
              "text": "Continuous"
            },
            {
              "id": "opt-B",
              "text": "Cardinal"
            },
            {
              "id": "opt-C",
              "text": "Ordinal"
            },
            {
              "id": "opt-D",
              "text": "Nominal"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-4dd589467c6249d9",
          "text": "Consider the following MA(3) process\n\nyt = μ + Εt + θ1Εt-1 + θ2Εt-2 + θ3Εt-3 , where σt is a zero mean white noise process with variance σ2.\n\nWhich of the following statements are true?\n\ni) The process yt has zero mean\n\nii) The autocorrelation function will have a zero value at lag 5\n\niii) The process yt has variance σ2\n\niv) The autocorrelation function will have a value of one at lag 0",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-A"
        }
      ]
    },
    {
      "id": "masters-econometrics-u1-external-l09",
      "title": "Econometrics — Quiz 9",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "mmlu-bbfcc4421cb6b013",
          "text": "A leptokurtic distribution is one which",
          "options": [
            {
              "id": "opt-A",
              "text": "Has fatter tails and a smaller mean than a normal distribution with the same mean and variance"
            },
            {
              "id": "opt-B",
              "text": "Has fatter tails and is more peaked at the mean than a normal distribution with the same mean and variance"
            },
            {
              "id": "opt-C",
              "text": "Has thinner tails and is more peaked at the mean than a normal distribution with the same mean and variance"
            },
            {
              "id": "opt-D",
              "text": "Has thinner tails than a normal distribution and is skewed."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-4ad07259430adeac",
          "text": "Near multicollinearity occurs when",
          "options": [
            {
              "id": "opt-A",
              "text": "Two or more explanatory variables are perfectly correlated with one another"
            },
            {
              "id": "opt-B",
              "text": "The explanatory variables are highly correlated with the error term"
            },
            {
              "id": "opt-C",
              "text": "The explanatory variables are highly correlated with the dependent variable"
            },
            {
              "id": "opt-D",
              "text": "Two or more explanatory variables are highly correlated with one another"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-ff7513d100a4fc79",
          "text": "Consider the following time series model applied to daily data:\n\n\n\nwhere rt are the returns, and D1, D2, D3 and D4 are dummy variables. D1 = 1 on Monday and zero otherwise; D2 = 1 on Tuesday and zero otherwise, ..., D4 = 1 on Thursday and zero otherwise. What is the interpretation of the parameter estimate for the intercept?",
          "options": [
            {
              "id": "opt-A",
              "text": "It is the average return on Friday"
            },
            {
              "id": "opt-B",
              "text": "It is the average return on Monday"
            },
            {
              "id": "opt-C",
              "text": "It is the Friday deviation from the mean return for the week"
            },
            {
              "id": "opt-D",
              "text": "It is the Monday deviation from the mean return for the week."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-53854d8799f447d5",
          "text": "Which of the following statements are true concerning the class of ARIMA(p,d,q) models?\n\n(i) The \"I\" stands for independent\n\n(ii) An ARIMA(p,1,q) model estimated on a series of logs of prices is equivalent to an ARIMA(p,0,q) model estimated on a set of continuously compounded returns\n\n(iii) It is plausible for financial time series that the optimal value of d could be 2 or 3.\n\n(iv) The estimation of ARIMA models is incompatible with the notion of cointegration",
          "options": [
            {
              "id": "opt-A",
              "text": "(ii) and (iv) only"
            },
            {
              "id": "opt-B",
              "text": "(i) and (iii) only"
            },
            {
              "id": "opt-C",
              "text": "(i), (ii), and (iii) only"
            },
            {
              "id": "opt-D",
              "text": "(i), (ii), (iii), and (iv)"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-0d85b5cbd8eb3f24",
          "text": "If the residuals from a regression estimated using a small sample of data are not normally distributed, which one of the following consequences may arise?",
          "options": [
            {
              "id": "opt-A",
              "text": "The coefficient estimates will be unbiased but inconsistent"
            },
            {
              "id": "opt-B",
              "text": "The coefficient estimates will be biased but consistent"
            },
            {
              "id": "opt-C",
              "text": "The coefficient estimates will be biased and inconsistent"
            },
            {
              "id": "opt-D",
              "text": "Test statistics concerning the parameters will not follow their assumed distributions."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-16ce3749174a0b15",
          "text": "If a threshold autoregressive (TAR) model is termed a \"SETAR\", what must be true about it?",
          "options": [
            {
              "id": "opt-A",
              "text": "It must follow a Markov process"
            },
            {
              "id": "opt-B",
              "text": "The model must contain only two regimes"
            },
            {
              "id": "opt-C",
              "text": "The state-determining variable must be the variable being modelled"
            },
            {
              "id": "opt-D",
              "text": "The number of lagged variables on the RHS of the equations for each regime must be the same"
            }
          ],
          "correctOptionId": "opt-C"
        }
      ]
    }
  ],
  "tags": [
    "external-ai",
    "curriculum-import",
    "masters",
    "econometrics",
    "mmlu"
  ],
  "minAge": 21,
  "maxAge": 99,
  "version": "external-1.0",
  "difficultyBand": "advanced",
  "gradeBand": "graduate",
  "learningObjectives": [
    "Master key concepts in econometrics",
    "Apply analytical reasoning to econometrics problems",
    "Demonstrate proficiency through assessments and case analysis"
  ],
  "external": {
    "sources": [
      "mmlu"
    ],
    "licenses": [
      "MIT"
    ],
    "attributions": [
      "MMLU (cais/mmlu)"
    ],
    "itemCounts": {
      "questions": 126,
      "flashcards": 0,
      "chunks": 0
    },
    "importedAt": "2026-03-03T05:42:54.859Z",
    "totalLessons": 9,
    "overflow": 0
  },
  "metadata": {
    "generatedBy": "ingest-universal-curriculum.mjs",
    "importDate": "2026-03-03T05:42:54.859Z"
  }
};
