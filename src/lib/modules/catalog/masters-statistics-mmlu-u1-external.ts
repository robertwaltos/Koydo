import type { LearningModule } from "@/lib/modules/types";

export const MastersStatisticsMmluU1ExternalModule: LearningModule = {
  "id": "masters-statistics-mmlu-u1-external",
  "title": "Statistics (Undergraduate Level)",
  "description": "Statistics curriculum from 1 open-source datasets. MMLU (cais/mmlu).",
  "subject": "Science",
  "lessons": [
    {
      "id": "masters-statistics-mmlu-u1-external-l01",
      "title": "Statistics — Quiz 1",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-7bb9d535e2c24d69",
          "text": "The weight of an aspirin tablet is 300 milligrams according to the bottle label. An FDA investigator weighs a simple random sample of seven tablets, obtains weights of 299, 300, 305, 302, 299, 301, and 303, and runs a hypothesis test of the manufacturer's claim. Which of the following gives the P-value of this test?",
          "options": [
            {
              "id": "opt-A",
              "text": "P(t > 1.54) with df = 6"
            },
            {
              "id": "opt-B",
              "text": "2P(t > 1.54) with df = 6"
            },
            {
              "id": "opt-C",
              "text": "P(t > 1.54) with df = 7"
            },
            {
              "id": "opt-D",
              "text": "2P(t > 1.54) with df = 7"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-f19d358244d43186",
          "text": "The waiting times for a new roller coaster ride are normally distributed with a mean of 35 minutes and a standard deviation of 10 minutes. If there are 150,000 riders the first summer, which of the following is the shortest time interval associated with 100,000 riders?",
          "options": [
            {
              "id": "opt-A",
              "text": "0 to 31.7 minutes"
            },
            {
              "id": "opt-B",
              "text": "31.7 to 39.3 minutes"
            },
            {
              "id": "opt-C",
              "text": "25.3 to 44.7 minutes"
            },
            {
              "id": "opt-D",
              "text": "25.3 to 35 minutes"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-a3204dc94a758692",
          "text": "All of the following statements are true for all discrete random variables except for which one?",
          "options": [
            {
              "id": "opt-A",
              "text": "The possible outcomes must all be numerical."
            },
            {
              "id": "opt-B",
              "text": "The possible outcomes must be mutually exclusive."
            },
            {
              "id": "opt-C",
              "text": "The mean (expected value) always equals the sum of the products obtained by multiplying each value by its corresponding probability."
            },
            {
              "id": "opt-D",
              "text": "Approximately 95% of the outcomes will be within two standard deviations of the mean."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-007c4fc7c260c2c1",
          "text": "Which of the following is a true statement about hypothesis testing?",
          "options": [
            {
              "id": "opt-A",
              "text": "If there is sufficient evidence to reject a null hypothesis at the 10% level, then there is sufficient evidence to reject it at the 5% level."
            },
            {
              "id": "opt-B",
              "text": "Whether to use a one- or a two-sided test is typically decided after the data are gathered."
            },
            {
              "id": "opt-C",
              "text": "If a hypothesis test is conducted at the 1% level, there is a 1% chance of rejecting the null hypothesis."
            },
            {
              "id": "opt-D",
              "text": "The power of a test concerns its ability to detect an alternative hypothesis."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-8cb3cae3c8345658",
          "text": "An outlier is an observation that",
          "options": [
            {
              "id": "opt-A",
              "text": "is seen more frequently than the other observations in the data set"
            },
            {
              "id": "opt-B",
              "text": "is seen less frequently than the other observations in the data set"
            },
            {
              "id": "opt-C",
              "text": "is always smaller than the other observations in the data set"
            },
            {
              "id": "opt-D",
              "text": "is significantly different from the other observations in the data set"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-f7ddd906ab8bf376",
          "text": "The principal of a school is interested in estimating the average income per family of her students. She selects a random sample of students and collects information about their family income. A 95 percent confidence interval computed from this data for the mean income per family is ($35,095, $45,005). Which of the following provides the best interpretation of this confidence interval?",
          "options": [
            {
              "id": "opt-A",
              "text": "95 percent of the students in her school are from families whose income is between $35,095 and $45,005."
            },
            {
              "id": "opt-B",
              "text": "There is a 95% probability that the families of all the students in this school have an income of between $35,095 and $45,005."
            },
            {
              "id": "opt-C",
              "text": "If we were to take another sample of the same size and compute a 95 percent confidence interval, we would have a 95% chance of getting the interval ($35,095, $45,005)."
            },
            {
              "id": "opt-D",
              "text": "There is a 95% probability that the mean income per family in the school is between $35,095 and $45,005."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-aaaace4face18a02",
          "text": "Researchers are conducting an experiment using a significance level of 0.05. The null hypothesis is, in fact, false. If they modify their experiment to use twice as many experimental units for each treatment, which of the following would be true?",
          "options": [
            {
              "id": "opt-A",
              "text": "The probability of a Type I error and the probability of a Type II error would both decrease."
            },
            {
              "id": "opt-B",
              "text": "The probability of a Type I error and the power would both increase."
            },
            {
              "id": "opt-C",
              "text": "The probability of a Type II error and the power would both increase."
            },
            {
              "id": "opt-D",
              "text": "The probability of a Type I error would stay the same and the power would increase."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-f9a1ef9bc3c56569",
          "text": "The mean height of adult men is 70 inches, with a standard deviation of four inches. The mean height of adult women is 66 inches, with a standard deviation of three inches. Between a man with a height of 74 inches and a woman with a height of 70 inches, who is more unusually tall within his or her respective sex?",
          "options": [
            {
              "id": "opt-A",
              "text": "It cannot be determined, because the mean heights for the two groups are different."
            },
            {
              "id": "opt-B",
              "text": "It cannot be determined, because the standard deviations of the heights for the two groups are different."
            },
            {
              "id": "opt-C",
              "text": "The man, because he is 74 inches tall and the woman is only 70 inches tall."
            },
            {
              "id": "opt-D",
              "text": "The woman, because her height is 1.33 standard deviations above the mean height of all women, whereas the man’s height is only one standard deviation above the mean height of all men."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-7c3d73615ff624ed",
          "text": "Which of the following is not true about t-distributions?",
          "options": [
            {
              "id": "opt-A",
              "text": "There are different t-distributions for different values of df (degrees of freedom)."
            },
            {
              "id": "opt-B",
              "text": "t-distributions are bell-shaped and symmetric."
            },
            {
              "id": "opt-C",
              "text": "t-distributions always have mean 0 and standard deviation 1."
            },
            {
              "id": "opt-D",
              "text": "t-distributions are more spread out than the normal distribution."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-b6703975a0ad1199",
          "text": "To study the effect of alcohol on reaction time, subjects were randomly selected and given three beers to consume. Their reaction time to a simple stimulus was measured before and after drinking the alcohol. Which of the following is a correct statement?",
          "options": [
            {
              "id": "opt-A",
              "text": "This study was an observational study."
            },
            {
              "id": "opt-B",
              "text": "Lack of blocking makes this a poorly designed study."
            },
            {
              "id": "opt-C",
              "text": "The placebo effect is irrelevant in this type of study."
            },
            {
              "id": "opt-D",
              "text": "This study was an experiment in which the subjects were used as their own controls."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-807bb510ca0c7f5e",
          "text": "Which of these statements correctly explains bias?",
          "options": [
            {
              "id": "opt-A",
              "text": "It describes a process that creates estimates that are too high on average or too low on average."
            },
            {
              "id": "opt-B",
              "text": "It describes a process that results in a sample that does not represent the population."
            },
            {
              "id": "opt-C",
              "text": "It describes a lack of randomization in the sampling process."
            },
            {
              "id": "opt-D",
              "text": "It describes a sample that is not representative of the population."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-b5e3b80fd9916466",
          "text": "A company that produces facial tissues continually monitors tissue strength. If the mean strength from sample data drops below a specified level, the production process is halted and the machinery inspected. Which of the following would result from a Type I error?",
          "options": [
            {
              "id": "opt-A",
              "text": "Halting the production process when sufficient customer complaints are received."
            },
            {
              "id": "opt-B",
              "text": "Halting the production process when the tissue strength is below specifications."
            },
            {
              "id": "opt-C",
              "text": "Halting the production process when the tissue strength is within specifications."
            },
            {
              "id": "opt-D",
              "text": "Allowing the production process to continue when the tissue strength is below specifications."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-9771801635beb750",
          "text": "The longevity of people living in a certain locality has a standard deviation of 14 years. What is the mean longevity if 30% of the people live longer than 75 years? Assume a normal distribution for life spans.",
          "options": [
            {
              "id": "opt-A",
              "text": "75 - 0.30(14)"
            },
            {
              "id": "opt-B",
              "text": "75 + 0.30(14)"
            },
            {
              "id": "opt-C",
              "text": "75 - 0.4756(14)"
            },
            {
              "id": "opt-D",
              "text": "75 - 0.5244(14)"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-6036f58aa8379209",
          "text": "Changing from a 90% confidence interval estimate for a population proportion to a 99% confidence interval estimate, with all other things being equal,",
          "options": [
            {
              "id": "opt-A",
              "text": "increases the interval size by 9%."
            },
            {
              "id": "opt-B",
              "text": "decreases the interval size by 9%."
            },
            {
              "id": "opt-C",
              "text": "increases the interval size by 57%."
            },
            {
              "id": "opt-D",
              "text": "decreases the interval size by 57%."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-79156d21800b8087",
          "text": "Which of the following is a binomial random variable?",
          "options": [
            {
              "id": "opt-A",
              "text": "The number of tosses before a \"5\" appears when tossing a fair die."
            },
            {
              "id": "opt-B",
              "text": "The number of points a hockey team receives in 10 games, where two points are awarded for wins, one point for ties, and no points for losses."
            },
            {
              "id": "opt-C",
              "text": "The number of hearts out of five cards randomly drawn from a deck of 52 cards, without replacement."
            },
            {
              "id": "opt-D",
              "text": "The number of motorists not wearing seat belts in a random sample of five drivers."
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    },
    {
      "id": "masters-statistics-mmlu-u1-external-l02",
      "title": "Statistics — Quiz 2",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-26ba65048edb48d6",
          "text": "If all the other variables remain constant, which of the following will increase the power of a hypothesis test? I.Increasing the sample size. II.Increasing the significance level. III.Increasing the probability of a Type II error.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "III only"
            },
            {
              "id": "opt-D",
              "text": "I and II"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-9304a8e53338a763",
          "text": "Which of the following statements is (are) true? I. In order to use a χ2 procedure, the expected value for each cell of a one- or two-way table must be at least 5. II. In order to use χ2 procedures, you must have at least 2 degrees of freedom. III. In a 4 × 2 two-way table, the number of degrees of freedom is 3.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "I and III only"
            },
            {
              "id": "opt-C",
              "text": "I and II only"
            },
            {
              "id": "opt-D",
              "text": "III only"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-554f5cfbfb37d099",
          "text": "Suppose two events, E and F, have nonzero probabilities p and q, respectively. Which of the following is impossible?",
          "options": [
            {
              "id": "opt-A",
              "text": "p + q > 1"
            },
            {
              "id": "opt-B",
              "text": "p - q < 0"
            },
            {
              "id": "opt-C",
              "text": "p /q > 1"
            },
            {
              "id": "opt-D",
              "text": "E and F are both independent and mutually exclusive."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-b91256170dc0d45d",
          "text": "The probability that there will be an accident on Highway 48 each day depends on the weather. If the weather is dry that day, there is a 0.2% chance of an accident on Highway 48; if the weather is wet that day, there is a 1.0% chance of an accident. Today, the weather station announced that there is a 20% chance of the weather being wet. What is the probability that there will be an accident on Highway 48 today?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.0004"
            },
            {
              "id": "opt-B",
              "text": "0.0016"
            },
            {
              "id": "opt-C",
              "text": "0.002"
            },
            {
              "id": "opt-D",
              "text": "0.0036"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-06931ba7bed45eb9",
          "text": "The binomial distribution is an appropriate model for which of the following?",
          "options": [
            {
              "id": "opt-A",
              "text": "The number of minutes in an hour for which the Dow-Jones average is above its beginning average for the day."
            },
            {
              "id": "opt-B",
              "text": "The number of cities among the 10 largest in New York State for which the weather is cloudy for most of a given day."
            },
            {
              "id": "opt-C",
              "text": "The number of drivers wearing seat belts if 10 consecutive drivers are stopped at a police roadblock."
            },
            {
              "id": "opt-D",
              "text": "None of the above."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-9b4d7d8972437cd3",
          "text": "Data were collected on two variables X and Y and a least squares regression line was fitted to the data. The estimated equation for this data is y = –2.29 + 1.70x. One point has x = 5, y = 6. What is the residual for this point?",
          "options": [
            {
              "id": "opt-A",
              "text": "7.91"
            },
            {
              "id": "opt-B",
              "text": "6.21"
            },
            {
              "id": "opt-C",
              "text": "0.21"
            },
            {
              "id": "opt-D",
              "text": "–0.21"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-8bc09f3ba803352c",
          "text": "Which of these explains why t should be used instead of z for inference procedures for means.",
          "options": [
            {
              "id": "opt-A",
              "text": "The Central Limit Theorem applies to proportions but not means."
            },
            {
              "id": "opt-B",
              "text": "We use z for proportions because proportions are approximately normal. Means are not."
            },
            {
              "id": "opt-C",
              "text": "We use z for proportions because the sampling distribution of sample proportions is approximately normal, but that is not the case for the sampling distribution of sample means."
            },
            {
              "id": "opt-D",
              "text": "When using the sample standard deviation to estimate the population standard deviation, more variability is introduced into the sampling distribution of the statistic."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-61f745001f272e19",
          "text": "Which of the following is least likely to reduce bias in a sample survey?",
          "options": [
            {
              "id": "opt-A",
              "text": "Following up with those who did not respond to the survey the first time"
            },
            {
              "id": "opt-B",
              "text": "Asking questions in a neutral manner to avoid influencing the responses"
            },
            {
              "id": "opt-C",
              "text": "Using stratified random sampling rather than simple random sampling"
            },
            {
              "id": "opt-D",
              "text": "Selecting samples randomly"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-e98acfb6d84394a2",
          "text": "For their first exam, students in an AP Statistics class studied an average of 4 hours with a standard deviation of 1 hour. Almost everyone did poorly on the exam, and so for the second exam every student studied 10 hours. What is the correlation between the numbers of hours students studied for each exam?",
          "options": [
            {
              "id": "opt-A",
              "text": "-1"
            },
            {
              "id": "opt-B",
              "text": "0"
            },
            {
              "id": "opt-C",
              "text": "0.4"
            },
            {
              "id": "opt-D",
              "text": "1"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-52098fcfba208911",
          "text": "The appraised values of houses in a city have a mean of $125,000 with a standard deviation of $23,000. Because of a new teachers' contract, the school district needs an extra 10% in funds compared to the previous year. To raise this additional money, the city instructs the assessment office to raise all appraised house values by $5,000. What will be the new standard deviation of the appraised values of houses in the city?",
          "options": [
            {
              "id": "opt-A",
              "text": "$23,000"
            },
            {
              "id": "opt-B",
              "text": "$25,300"
            },
            {
              "id": "opt-C",
              "text": "$28,000"
            },
            {
              "id": "opt-D",
              "text": "$30,300"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-046e3a9facc1dc93",
          "text": "A large company has offices in two locations, one in New Jersey and one in Utah. The mean salary of office assistants in the New Jersey office is $28,500. The mean salary of office assistants in the Utah office is $22,500. The New Jersey office has 128 office assistants and the Utah office has 32 office assistants. What is the mean salary paid to the office assistants in this company?",
          "options": [
            {
              "id": "opt-A",
              "text": "$22,500"
            },
            {
              "id": "opt-B",
              "text": "$23,700"
            },
            {
              "id": "opt-C",
              "text": "$25,500"
            },
            {
              "id": "opt-D",
              "text": "$27,300"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-0847cd5d0cf01613",
          "text": "Which of the following is a false statement about simple random samples?",
          "options": [
            {
              "id": "opt-A",
              "text": "A sample must be reasonably large to be properly considered a simple random sample."
            },
            {
              "id": "opt-B",
              "text": "Inspection of a sample will give no indication of whether or not it is a simple random sample."
            },
            {
              "id": "opt-C",
              "text": "Attributes of a simple random sample may be very different from attributes of the population."
            },
            {
              "id": "opt-D",
              "text": "Every element of the population has an equal chance of being picked."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-19a3a74a3796deec",
          "text": "A telephone executive instructs an associate to contact 104 customers using their service to obtain their opinions in regard to an idea for a new pricing package. The associate notes the number of customers whose names begin with A and uses a random number table to pick four of these names. She then proceeds to use the same procedure for each letter of the alphabet and combines the 4 × 26 = 104 results into a group to be contacted. Which of the following is a correct conclusion?",
          "options": [
            {
              "id": "opt-A",
              "text": "Her procedure makes use of chance."
            },
            {
              "id": "opt-B",
              "text": "Her procedure results in a simple random sample."
            },
            {
              "id": "opt-C",
              "text": "Each customer has an equal probability of being included in the survey."
            },
            {
              "id": "opt-D",
              "text": "Her procedure introduces bias through sampling error."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-1084735aceb9ecd0",
          "text": "A company has a choice of three investment schemes. Option I gives a sure $25,000 return on investment. Option II gives a 50% chance of returning $50,000 and a 50% chance of returning $10,000. Option III gives a 5% chance of returning $100,000 and a 95% chance of returning nothing. Which option should the company choose?",
          "options": [
            {
              "id": "opt-A",
              "text": "Option II if it wants to maximize expected return"
            },
            {
              "id": "opt-B",
              "text": "Option I if it needs at least $20,000 to pay off an overdue loan"
            },
            {
              "id": "opt-C",
              "text": "Option III if it needs at least $80,000 to pay off an overdue loan"
            },
            {
              "id": "opt-D",
              "text": "All of the above answers are correct."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-ab63af225d85f9e5",
          "text": "A one-sided test of a hypothesis about a population mean, based on a sample of size 14, yields a P-value of 0.075. Which of the following best describes the range of tvalues that would have given this P-value?",
          "options": [
            {
              "id": "opt-A",
              "text": "1.345 < t< 1.761"
            },
            {
              "id": "opt-B",
              "text": "1.356 < t< 1.782"
            },
            {
              "id": "opt-C",
              "text": "1.771 < t< 2.160"
            },
            {
              "id": "opt-D",
              "text": "1.350 < t< 1.771"
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    },
    {
      "id": "masters-statistics-mmlu-u1-external-l03",
      "title": "Statistics — Quiz 3",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-f448ce920d6144bd",
          "text": "The president of an online music streaming service whose customers pay a fee wants to gather additional information about customers who have joined in the past 12 months. The company plans to send out an e-mail survey to a sample of current customers with a link that gives participants a month of streaming service for free once the survey has been completed. They know that musical tastes vary by geographical region. Which of the following sample plans would produce the most representative sample of its customers?",
          "options": [
            {
              "id": "opt-A",
              "text": "Choose all of the customers who joined in the last month."
            },
            {
              "id": "opt-B",
              "text": "Make a list of all the customers who joined in the last 12 months and choose a random sample of customers on this list."
            },
            {
              "id": "opt-C",
              "text": "From the list of all customers who joined in the last 12 months, classify customers by the state in which they live, then choose 10 customers from each state."
            },
            {
              "id": "opt-D",
              "text": "From the list of all customers who joined in the last 12 months, classify customers by the state in which they live, then choose 3% of the customers from each state."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-2aafc3ca8a22ed09",
          "text": "You need to construct a 94% confidence interval for a population proportion. What is the upper critical value of z to be used in constructing this interval?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.9699"
            },
            {
              "id": "opt-B",
              "text": "1.96"
            },
            {
              "id": "opt-C",
              "text": "1.555"
            },
            {
              "id": "opt-D",
              "text": "1.88"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-8d33815bfc145c48",
          "text": "A local school has seven math teachers and seven English teachers. When comparing their mean salaries, which of the following is most appropriate?",
          "options": [
            {
              "id": "opt-A",
              "text": "A two-sample z-test of population means"
            },
            {
              "id": "opt-B",
              "text": "A two-sample t-test of population means"
            },
            {
              "id": "opt-C",
              "text": "A one-sample z-test on a set of differences"
            },
            {
              "id": "opt-D",
              "text": "None of the above are appropriate."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-b6a0167b2008c8c9",
          "text": "A small kiosk at the Atlanta airport carries souvenirs in the price range of $3.99 to $29.99, with a mean price of $14.75. The airport authorities decide to increase the rent charged for a kiosk by 5 percent. To make up for the increased rent, the kiosk owner decides to increase the prices of all items by 50 cents. As a result, which of the following will happen?",
          "options": [
            {
              "id": "opt-A",
              "text": "The mean price and the range of prices will increase by 50 cents."
            },
            {
              "id": "opt-B",
              "text": "The mean price will remain the same, but the range of prices will increase by 50 cents."
            },
            {
              "id": "opt-C",
              "text": "The mean price and the standard deviation of prices will increase by 50 cents."
            },
            {
              "id": "opt-D",
              "text": "The mean price will increase by 50 cents, but the standard deviation of prices will remain the same."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-9094e97d06496edf",
          "text": "The director of a local food bank asks for data on all donations given during the month of November. Of the 100 checks received, the average donation is $155 with a standard deviation of $32. Which of the following is the most appropriate statement?",
          "options": [
            {
              "id": "opt-A",
              "text": "This November, the average donation is $155."
            },
            {
              "id": "opt-B",
              "text": "50% of all donations this November are more than $155."
            },
            {
              "id": "opt-C",
              "text": "We are 95% confident that the average donation in November is between about $91 and $219."
            },
            {
              "id": "opt-D",
              "text": "We are 95% confident that the average donation in November is between about $149 and $161."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-c8280e3b52fb178a",
          "text": "Which of the following describe/s the central limit theorem? I. The mean of the sampling distribution of x-is the same as the mean of the population. II. The standard deviation of the sampling distribution of x-is the same as the standard deviation of x- divided by the square root of the sample size. III. If the sample size is large, the shape of the sampling distribution of x- is approximately normal.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "I & II only"
            },
            {
              "id": "opt-C",
              "text": "II only"
            },
            {
              "id": "opt-D",
              "text": "III only"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-47c949f5ee21fb76",
          "text": "A large city was interested in annexing part of the surrounding county. In a survey conducted by the local newspaper, 58 percent of respondents said they were against the annexation. During the actual vote, not all eligible voters voted, but 56 percent of the respondents voted against the annexation. Which of the following best describes the difference in the percentages obtained from the newspaper poll and the vote itself?",
          "options": [
            {
              "id": "opt-A",
              "text": "It is an example of nonresponse bias, the systematic tendency of individuals with particular characteristics to refuse to answer a survey question."
            },
            {
              "id": "opt-B",
              "text": "It is the systematic difference between a statistic and parameter caused by the nonrandom selection of surveyed persons."
            },
            {
              "id": "opt-C",
              "text": "It is the difference between the same statistics computed from two different samples."
            },
            {
              "id": "opt-D",
              "text": "It is the difference between the statistic and the truth due to use of a random sample."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-3bb2861dc9b2c1f4",
          "text": "After receiving several complaints from his customers about the store being closed on Sundays, a storekeeper decided to conduct a survey. He randomly selected 100 female customers and 120 male customers, and asked them, \"Are you interested in shopping at this store on Sundays?\" He counted the number of customers answering \"yes\" and constructed a 95 percent confidence interval for the difference by subtracting the proportions of female from the proportion of male customers in favor of shopping on Sundays. The resulting interval was (–0.23, –0.18). Which of the following is a correct interpretation of the interval?",
          "options": [
            {
              "id": "opt-A",
              "text": "We are 95 percent confident that the proportion of women interested in shopping on Sundays exceeds the proportion of men interested in shopping on Sundays."
            },
            {
              "id": "opt-B",
              "text": "We are 95 percent confident that the proportion of men interested in shopping on Sundays exceeds the proportion of women interested in shopping on Sundays."
            },
            {
              "id": "opt-C",
              "text": "We are 95 percent confident that the proportion of women interested in shopping on Sundays is equal to the proportion of men interested in shopping on Sundays."
            },
            {
              "id": "opt-D",
              "text": "Because the interval contains negative values, it is invalid and should not be interpreted."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-3f9ddedb3840387c",
          "text": "Which of the following is the primary difference between an experiment and an observational study?",
          "options": [
            {
              "id": "opt-A",
              "text": "Experiments are only conducted on human subjects; observational studies can be conducted on nonhuman subjects."
            },
            {
              "id": "opt-B",
              "text": "In an experiment, the researcher manipulates some variable to observe its effect on a response variable; in an observational study, he or she simply observes and records the observations."
            },
            {
              "id": "opt-C",
              "text": "Experiments must use randomized treatment and control groups; observational studies also use treatment and control groups, but they do not need to be randomized."
            },
            {
              "id": "opt-D",
              "text": "Experiments must be double-blind; observational studies do not need to be."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-6d5f3a778f66c61d",
          "text": "Random variable X is normally distributed, with a mean of 25 and a standard deviation of 4. Which of the following is the approximate interquartile range for this distribution?",
          "options": [
            {
              "id": "opt-A",
              "text": "25.00 – 22.30 = 2.70"
            },
            {
              "id": "opt-B",
              "text": "27.70 – 22.30 = 5.40"
            },
            {
              "id": "opt-C",
              "text": "27.70 ÷ 22.30 = 1.24"
            },
            {
              "id": "opt-D",
              "text": "2.00(4.00) = 8.00"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-3b5a619f5d60a0f7",
          "text": "Which of the following statements about any two events A and B is true?",
          "options": [
            {
              "id": "opt-A",
              "text": "P(A ∪ B) implies events A and B are independent."
            },
            {
              "id": "opt-B",
              "text": "P(A ∪ B) = 1 implies events A and B are mutually exclusive."
            },
            {
              "id": "opt-C",
              "text": "P(A ∩ B) = 0 implies events A and B are independent."
            },
            {
              "id": "opt-D",
              "text": "P(A ∩ B) = 0 implies events A and B are mutually exclusive."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-4b64ca7e37a21c2b",
          "text": "A company has 400 employees. Their mean income is $20,500, and the standard deviation of their incomes is $3,750. The distribution of incomes is normally distributed. How many of the 400 employees do you expect to have an income of between $13,000 and $28,000?",
          "options": [
            {
              "id": "opt-A",
              "text": "50"
            },
            {
              "id": "opt-B",
              "text": "100"
            },
            {
              "id": "opt-C",
              "text": "200"
            },
            {
              "id": "opt-D",
              "text": "390"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-9345fbcef44eed23",
          "text": "As reported on CNN, in a May 1999 national poll 43% of high school students expressed fear about going to school. Which of the following best describes what is meant by the poll having a margin of error of 5%?",
          "options": [
            {
              "id": "opt-A",
              "text": "It is likely that the true proportion of high school students afraid to go to school is between 38% and 48%."
            },
            {
              "id": "opt-B",
              "text": "Five percent of the students refused to participate in the poll."
            },
            {
              "id": "opt-C",
              "text": "Between 38% and 48% of those surveyed expressed fear about going to school."
            },
            {
              "id": "opt-D",
              "text": "There is a 0.05 probability that the 43% result is in error."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-4471abc424143d2f",
          "text": "Suppose you wish to compare the AP Statistics exam results for the male and female students taking AP Statistics at your high school. Which is the most appropriate technique for gathering the needed data?",
          "options": [
            {
              "id": "opt-A",
              "text": "Census"
            },
            {
              "id": "opt-B",
              "text": "Sample survey"
            },
            {
              "id": "opt-C",
              "text": "Experiment"
            },
            {
              "id": "opt-D",
              "text": "Observational study"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-c3b4642c921bb3e2",
          "text": "In one study half of a class were instructed to watch exactly 1 hour of television per day, the other half were told to watch 5 hours per day, and then their class grades were compared. In a second study students in a class responded to a questionnaire asking about their television usage and their class grades.",
          "options": [
            {
              "id": "opt-A",
              "text": "The first study was an experiment without a control group, while the second was an observational study."
            },
            {
              "id": "opt-B",
              "text": "The first study was an observational study, while the second was a controlled experiment."
            },
            {
              "id": "opt-C",
              "text": "Both studies were controlled experiments."
            },
            {
              "id": "opt-D",
              "text": "Both studies were observational studies."
            }
          ],
          "correctOptionId": "opt-A"
        }
      ]
    },
    {
      "id": "masters-statistics-mmlu-u1-external-l04",
      "title": "Statistics — Quiz 4",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-ea946aefdab11cdb",
          "text": "In a high school of 1650 students, 132 have personal investments in the stock market. To estimate the total stock investment by students in this school, two plans are proposed. Plan I would sample 30 students at random, find a confidence interval estimate of their average investment, and then multiply both ends of this interval by 1650 to get an interval estimate of the total investment. Plan II would sample 30 students at random from among the 132 who have investments in the market, find a confidence interval estimate of their average investment, and then multiply both ends of this interval by 132 to get an interval estimate of the total investment. Which is the better plan for estimating the total stock market investment by students in this school?",
          "options": [
            {
              "id": "opt-A",
              "text": "Plan I"
            },
            {
              "id": "opt-B",
              "text": "Plan II"
            },
            {
              "id": "opt-C",
              "text": "Both plans use random samples and so will produce equivalent results."
            },
            {
              "id": "opt-D",
              "text": "Neither plan will give an accurate estimate."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-45f54269968fb039",
          "text": "Sampling error occurs",
          "options": [
            {
              "id": "opt-A",
              "text": "when interviewers make mistakes resulting in bias."
            },
            {
              "id": "opt-B",
              "text": "because a sample statistic is used to estimate a population parameter."
            },
            {
              "id": "opt-C",
              "text": "when interviewers use judgment instead of random choice in picking the sample."
            },
            {
              "id": "opt-D",
              "text": "when samples are too small."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-a8097bee0dff773f",
          "text": "The regression analysis of question 20 indicated that \"R-sq = 98.1%.\" Which of the following is (are) true? I. There is a strong positive linear relationship between the explanatory and response variables. II. There is a strong negative linear relationship between the explanatory and response variables. III. About 98% of the variation in the response variable can be explained by the regression on the explanatory variable.",
          "options": [
            {
              "id": "opt-A",
              "text": "I and III only"
            },
            {
              "id": "opt-B",
              "text": "I or II only"
            },
            {
              "id": "opt-C",
              "text": "I or II (but not both) and III"
            },
            {
              "id": "opt-D",
              "text": "II and III only"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-86b2a9586a402b2b",
          "text": "In a clinic, 50 patients with sleep disorders are randomly assigned to one of two different groups. Patients in one group are given medication before bedtime. Patients in the other group are given blindfolds and played soft music at bedtime. Each patient is attached to a machine that records breathing patterns. From the patterns, it is possible to determine if the patient is awake or asleep. The data will be used to decide which method is more effective in helping patients with sleep disorders. Which of the following statements is correct in the context of this experiment?",
          "options": [
            {
              "id": "opt-A",
              "text": "It is not possible for this experiment to be single-blind or double-blind, because human subjects are involved."
            },
            {
              "id": "opt-B",
              "text": "This is only a single-blind experiment because the experimenters did not include a control group that received neither medication nor a blindfold and soft music."
            },
            {
              "id": "opt-C",
              "text": "This is only a single-blind experiment because patients will know which treatment they are receiving, although the examining doctor might not."
            },
            {
              "id": "opt-D",
              "text": "This is a double-blind experiment because the experimenters could prevent both groups of patients from knowing what sort of treatment the other group is receiving."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-1f99849821cdbe55",
          "text": "A study was conducted to test a new style of keyboard in preventing repetitive stress disorders. Volunteers who have had problems with such injuries were randomly assigned to use either a traditional keyboard or the new design. A significance test was conducted with the alternative hypothesis that a smaller proportion of those using the new keyboard will suffer injuries than those using the traditional keyboard. The resulting P-value was 0.07. Which is a correct interpretation of this P-value?",
          "options": [
            {
              "id": "opt-A",
              "text": "The null hypothesis should be rejected."
            },
            {
              "id": "opt-B",
              "text": "The null hypothesis should be accepted."
            },
            {
              "id": "opt-C",
              "text": "There is a 7% chance that the null hypothesis is correct."
            },
            {
              "id": "opt-D",
              "text": "There is a 7% chance of getting a difference between the two groups at least as large as the observed difference if the new keyboard is really no better at preventing injuries."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-1f53ef6d3e867363",
          "text": "A college admissions officer is interested in comparing the SAT math scores of high school applicants who have and have not taken AP Statistics. She randomly pulls the files of five applicants who took AP Statistics and five applicants who did not, and proceeds to run a t-test to compare the mean SAT math scores of the two groups. Which of the following is a necessary assumption?",
          "options": [
            {
              "id": "opt-A",
              "text": "The population variances from each group are known."
            },
            {
              "id": "opt-B",
              "text": "The population variances from each group are unknown."
            },
            {
              "id": "opt-C",
              "text": "The population variances from the two groups are equal."
            },
            {
              "id": "opt-D",
              "text": "The population of SAT scores from each group is normally distributed."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-f0924b3ba60fffd3",
          "text": "Given that P(E) = 0.32, P(F) = 0.15, and P(E ∩ F) = 0.048, which of the following is a correct conclusion?",
          "options": [
            {
              "id": "opt-A",
              "text": "The events E and F are both independent and mutually exclusive."
            },
            {
              "id": "opt-B",
              "text": "The events E and F are neither independent nor mutually exclusive."
            },
            {
              "id": "opt-C",
              "text": "The events E and F are mutually exclusive but not independent."
            },
            {
              "id": "opt-D",
              "text": "The events E and F are independent but not mutually exclusive."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-0a51c2c1b03cf18d",
          "text": "A medical research team tests for tumor reduction in a sample of patients using three different dosages of an experimental cancer drug. Which of the following is true?",
          "options": [
            {
              "id": "opt-A",
              "text": "There are three explanatory variables and one response variable."
            },
            {
              "id": "opt-B",
              "text": "There is one explanatory variable with three levels of response."
            },
            {
              "id": "opt-C",
              "text": "Tumor reduction is the only explanatory variable, but there are three response variables corresponding to the different dosages."
            },
            {
              "id": "opt-D",
              "text": "There are three levels of a single explanatory variable."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-94c86b7c6d3967eb",
          "text": "A department store at a large mall claims that over 60 percent of the mall’s visitors shop at that store. Let p = the proportion of the mall’s visitors who shop at the store. Which of the following pairs of hypotheses should be used to support this claim?",
          "options": [
            {
              "id": "opt-A",
              "text": "H0: p ≤ 0.60 and Ha: p > 0.60"
            },
            {
              "id": "opt-B",
              "text": "H0: p = 0.60 and Ha: p 0.60"
            },
            {
              "id": "opt-C",
              "text": "H0: p = 0.60 and Ha: p < 0.60"
            },
            {
              "id": "opt-D",
              "text": "H0: p > 0.60 and Ha: p 0.60"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-c2e9cc74ef8675a2",
          "text": "Which of the following can affect the value of the correlation r?",
          "options": [
            {
              "id": "opt-A",
              "text": "A change in measurement units"
            },
            {
              "id": "opt-B",
              "text": "A change in which variable is called x and which is called y"
            },
            {
              "id": "opt-C",
              "text": "Adding the same constant to all values of the x-variable"
            },
            {
              "id": "opt-D",
              "text": "None of the above can affect the r value."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-e604347e02c86f49",
          "text": "In general, how does tripling the sample size change the confidence interval size?",
          "options": [
            {
              "id": "opt-A",
              "text": "It triples the interval size."
            },
            {
              "id": "opt-B",
              "text": "It divides the interval size by 3."
            },
            {
              "id": "opt-C",
              "text": "It multiples the interval size by 1.732."
            },
            {
              "id": "opt-D",
              "text": "It divides the interval size by 1.732."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-ed7f9363be0cb718",
          "text": "Suppose the correlation between two variables is r = 0.19. What is the new correlation if 0.23 is added to all values of the x-variable, every value of the y-variable is doubled, and the two variables are interchanged?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.19"
            },
            {
              "id": "opt-B",
              "text": "0.42"
            },
            {
              "id": "opt-C",
              "text": "0.84"
            },
            {
              "id": "opt-D",
              "text": "-0.19"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-44edb06e4a832165",
          "text": "Students in AP Statistics class were timed in seconds while solving a series of mathematical brainteasers. One student's time had a standardized score of z = 2.40. If the times are all changed to minutes, what will then be the student's standardized score?",
          "options": [
            {
              "id": "opt-A",
              "text": "z = 0.04"
            },
            {
              "id": "opt-B",
              "text": "z = 0.4"
            },
            {
              "id": "opt-C",
              "text": "z = 1.80"
            },
            {
              "id": "opt-D",
              "text": "z = 2.40"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-36c50525a95bd3ab",
          "text": "An experiment was designed to test the effects of three different types of paint on the durability of wooden toys. Because boys and girls tend to play differently with toys, a randomly selected group of children was divided into two groups by sex. Which of the following statements about this experiment is true?",
          "options": [
            {
              "id": "opt-A",
              "text": "There are three types of paint and two sex groups, giving a total of six treatment combinations in this experiment."
            },
            {
              "id": "opt-B",
              "text": "Type of paint is a blocking factor."
            },
            {
              "id": "opt-C",
              "text": "Sex is a blocking factor."
            },
            {
              "id": "opt-D",
              "text": "This is a completely randomized design."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-2f5cefbae5987222",
          "text": "Suppose there is a correlation of r = 0.9 between number of hours per day students study and GPAs. Which of the following is a reasonable conclusion?",
          "options": [
            {
              "id": "opt-A",
              "text": "90% of students who study receive high grades."
            },
            {
              "id": "opt-B",
              "text": "90% of students who receive high grades study a lot."
            },
            {
              "id": "opt-C",
              "text": "90% of the variation in GPAs can be explained by variation in number of study hours per day."
            },
            {
              "id": "opt-D",
              "text": "81% of the variation in GPAs can be explained by variation in number of study hours per day."
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    },
    {
      "id": "masters-statistics-mmlu-u1-external-l05",
      "title": "Statistics — Quiz 5",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-67e6bb9b296c0239",
          "text": "Estrella wants to become a paramedic and takes a screening exam. Scores on the exam have been approximately normally distributed over the years it has been given. The exam is normed with a mean of 80 and a standard deviation of 9. Only those who score in the top 15% on the test are invited back for further evaluation. Estrella received a 90 on the test. What was her percentile rank on the test, and did she qualify for further evaluation?",
          "options": [
            {
              "id": "opt-A",
              "text": "13.35; she didn't qualify."
            },
            {
              "id": "opt-B",
              "text": "54.38; she didn't qualify."
            },
            {
              "id": "opt-C",
              "text": "86.65; she qualified."
            },
            {
              "id": "opt-D",
              "text": "84.38; she didn't qualify."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-ea36f83b775422d3",
          "text": "To test whether extensive exercise lowers the resting heart rate, a study is performed by randomly selecting half of a group of volunteers to exercise 1 hour each morning, while the rest are instructed to perform no exercise. Is this study an experiment or an observational study?",
          "options": [
            {
              "id": "opt-A",
              "text": "An experiment with a control group and blinding"
            },
            {
              "id": "opt-B",
              "text": "An experiment with blocking"
            },
            {
              "id": "opt-C",
              "text": "An observational study with comparison and randomization"
            },
            {
              "id": "opt-D",
              "text": "None of the above"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-5e39f50a3fc2cf20",
          "text": "Both over-the-counter niacin and the prescription drug Lipitor are known to lower blood cholesterol levels. In one double-blind study Lipitor outperformed niacin. The 95% confidence interval estimate of the difference in mean cholesterol level lowering was (18, 41). Which of the following is a reasonable conclusion?",
          "options": [
            {
              "id": "opt-A",
              "text": "Niacin lowers cholesterol an average of 18 points, while Lipitor lowers cholesterol an average of 41 points."
            },
            {
              "id": "opt-B",
              "text": "There is a 0.95 probability that Lipitor will outperform niacin in lowering the cholesterol level of any given individual."
            },
            {
              "id": "opt-C",
              "text": "There is a 0.95 probability that Lipitor will outperform niacin by at least 23 points in lowering the cholesterol level of any given individual."
            },
            {
              "id": "opt-D",
              "text": "None of the above."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-914f535e64b35737",
          "text": "Fifty oranges of one variety were selected at random and weighed. A 95 percent confidence interval computed from the sample weights to estimate the mean weight of oranges of this variety is (7.58, 8.72) ounces. Which of the following statements is true with respect to the confidence level used?",
          "options": [
            {
              "id": "opt-A",
              "text": "In repeated samplings of the same size, 95 percent of the intervals constructed will contain the true mean weight of the oranges of this variety."
            },
            {
              "id": "opt-B",
              "text": "In repeated samplings of the same size, 95 percent of the intervals constructed will contain the sampled mean weight of the oranges."
            },
            {
              "id": "opt-C",
              "text": "Ninety-five percent of the oranges in this sample weigh between 7.58 and 8.72 ounces."
            },
            {
              "id": "opt-D",
              "text": "Ninety-five percent of the oranges of this variety weigh between 7.58 and 8.72 ounces."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-45339de908511f3e",
          "text": "There are two games involving flipping a fair coin. In the first game you win a prize if you can throw between 45% and 55% heads. In the second game you win if you can throw more than 80% heads. For each game would you rather flip the coin 30 times or 300 times?",
          "options": [
            {
              "id": "opt-A",
              "text": "30 times for each game"
            },
            {
              "id": "opt-B",
              "text": "300 times for each game"
            },
            {
              "id": "opt-C",
              "text": "30 times for the first game and 300 times for the second"
            },
            {
              "id": "opt-D",
              "text": "300 times for the first game and 30 times for the second"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-a87058a6b11609ce",
          "text": "A company is interested in comparing the mean sales revenue per salesperson at two different locations. The manager takes a random sample of 10 salespeople from each location independently and records the sales revenue generated by each person during the last four weeks. He decides to use a t-test to compare the mean sales revenue at the two locations. Which of the following assumptions is necessary for the validity of the t-test?",
          "options": [
            {
              "id": "opt-A",
              "text": "The population standard deviations at both locations are equal."
            },
            {
              "id": "opt-B",
              "text": "The population standard deviations at both locations are not equal."
            },
            {
              "id": "opt-C",
              "text": "The population standard deviations at both locations are known."
            },
            {
              "id": "opt-D",
              "text": "The population of the sales records at each location is normally distributed."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-d070101bd8413329",
          "text": "Suppose you did 10 independent tests of the form H0: μ = 25 versus Ha: μ < 25, each at the α = 0.05 significance level. What is the probability of committing a Type I error and incorrectly rejecting a true H0 with at least one of the 10 tests?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.05"
            },
            {
              "id": "opt-B",
              "text": "0.40"
            },
            {
              "id": "opt-C",
              "text": "0.50"
            },
            {
              "id": "opt-D",
              "text": "0.60"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-adcdf3c2d5feda50",
          "text": "Suppose that 60% of a particular electronic part last over 3 years, while 70% last less than 6 years. Assuming a normal distribution, what are the mean and standard deviation with regard to length of life of these parts?",
          "options": [
            {
              "id": "opt-A",
              "text": "μ = 3.677, σ = 3.561"
            },
            {
              "id": "opt-B",
              "text": "μ = 3.977, σ = 3.861"
            },
            {
              "id": "opt-C",
              "text": "μ = 4.177, σ = 3.561"
            },
            {
              "id": "opt-D",
              "text": "μ = 4.377, σ = 3.261"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-55c75a95c27663f8",
          "text": "A psychologist believes that positive rewards for proper behavior are more effective than punishment for bad behavior in promoting good behavior in children. A scale of \"proper behavior\" is developed. μ1= the \"proper behavior\" rating for children receiving positive rewards, and μ2= the \"proper behavior\" rating for children receiving punishment. If H0: μ1− μ2= 0, which of the following is the proper statement of HA?",
          "options": [
            {
              "id": "opt-A",
              "text": "HA: μ1− μ2> 0"
            },
            {
              "id": "opt-B",
              "text": "HA: μ1− μ2< 0"
            },
            {
              "id": "opt-C",
              "text": "HA: μ1− μ2≠ 0"
            },
            {
              "id": "opt-D",
              "text": "Any of the above is an acceptable alternative to the given null."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-4d0127cd54c157e8",
          "text": "A confidence interval estimate is determined from the monthly grocery expenditures in a random sample of n families. Which of the following will result in a smaller margin of error? I. A smaller confidence level. II. A smaller sample standard deviation. III. A smaller sample size",
          "options": [
            {
              "id": "opt-A",
              "text": "II only"
            },
            {
              "id": "opt-B",
              "text": "I and II"
            },
            {
              "id": "opt-C",
              "text": "I and III"
            },
            {
              "id": "opt-D",
              "text": "II and III"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-1d49d85ef2860cd0",
          "text": "Which of the following is not important in the design of experiments?",
          "options": [
            {
              "id": "opt-A",
              "text": "Control of confounding variables"
            },
            {
              "id": "opt-B",
              "text": "Randomization in assigning subjects to different treatments"
            },
            {
              "id": "opt-C",
              "text": "Use of a confounding variable to control the placebo effect"
            },
            {
              "id": "opt-D",
              "text": "Replication of the experiment using sufficient numbers of subjects"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-dabc178303b52cd5",
          "text": "Which of the following is a correct statement?",
          "options": [
            {
              "id": "opt-A",
              "text": "The probability of a Type II error does not depend on the probability of a Type I error."
            },
            {
              "id": "opt-B",
              "text": "In conducting a hypothesis test, it is possible to simultaneously make both a Type I and a Type II error."
            },
            {
              "id": "opt-C",
              "text": "A Type II error will result if one incorrectly assumes the data are normally distributed."
            },
            {
              "id": "opt-D",
              "text": "When you choose a significance level α, you're setting the probability of a Type I error to exactly α."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-86f995289d9c3640",
          "text": "Define a new measurement as the difference between the 60th and 40th percentile scores in a population. This measurement will give information concerning",
          "options": [
            {
              "id": "opt-A",
              "text": "central tendency."
            },
            {
              "id": "opt-B",
              "text": "variability."
            },
            {
              "id": "opt-C",
              "text": "symmetry."
            },
            {
              "id": "opt-D",
              "text": "skewness."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-766a9acfac115835",
          "text": "Which of the following is notrequired in a binomial setting?",
          "options": [
            {
              "id": "opt-A",
              "text": "Each trial is considered either a success or a failure."
            },
            {
              "id": "opt-B",
              "text": "Each trial is independent."
            },
            {
              "id": "opt-C",
              "text": "The value of the random variable of interest is the number of trials until the first success occurs."
            },
            {
              "id": "opt-D",
              "text": "There is a fixed number of trials."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-c34c8aeda5c4c2af",
          "text": "A publisher used standard boxes for shipping books. The mean weight of books packed per box is 25 pounds, with a standard deviation of two pounds. The mean weight of the boxes is one pound, with a standard deviation of 0.15 pounds. The mean weight of the packing material used per box is two pounds, with a standard deviation of 0.25 pounds. What is the standard deviation of the weights of the packed boxes?",
          "options": [
            {
              "id": "opt-A",
              "text": "28.000 pounds"
            },
            {
              "id": "opt-B",
              "text": "5.290 pounds"
            },
            {
              "id": "opt-C",
              "text": "4.085 pounds"
            },
            {
              "id": "opt-D",
              "text": "2.021 pounds"
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    },
    {
      "id": "masters-statistics-mmlu-u1-external-l06",
      "title": "Statistics — Quiz 6",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-7e922175a92fe5c5",
          "text": "A group of scientists wanted to estimate the proportion of geese returning to the same site for the next breeding season. Suppose they decided to increase the sample size from 200 to 2,000. How will this affect the distribution of the sample proportion?",
          "options": [
            {
              "id": "opt-A",
              "text": "The distribution of the sample proportion will be more spread out."
            },
            {
              "id": "opt-B",
              "text": "The distribution of the sample proportion will be less spread out."
            },
            {
              "id": "opt-C",
              "text": "The spread of the distribution of the sample proportion will remain unaffected."
            },
            {
              "id": "opt-D",
              "text": "The distribution of the sample proportion will more closely resemble the binomial distribution."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-37db24b27979cc6b",
          "text": "A telephone survey of 400 registered voters showed that 256 had not yet made up their minds 1 month before the election. How sure can we be that between 60% and 68% of the electorate were still undecided at that time?",
          "options": [
            {
              "id": "opt-A",
              "text": "2.4%"
            },
            {
              "id": "opt-B",
              "text": "8.0%"
            },
            {
              "id": "opt-C",
              "text": "64.0%"
            },
            {
              "id": "opt-D",
              "text": "90.4%"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-ecf5d5466ecc7fe5",
          "text": "Players in the National Football League weigh, on average, about 248 pounds with a standard deviation of about 47 pounds. If four players are to be selected at random, the expected value of the random variable W, the total combined weight of the four players, is 992 pounds. The standard deviation of Wis approximately",
          "options": [
            {
              "id": "opt-A",
              "text": "47 pounds"
            },
            {
              "id": "opt-B",
              "text": "67 pounds"
            },
            {
              "id": "opt-C",
              "text": "94 pounds"
            },
            {
              "id": "opt-D",
              "text": "141 pounds"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-5136b68acded3b71",
          "text": "\"A hypothesis test yields a P-value of 0.20.\" Which of the following best describes what is meant by this statement?",
          "options": [
            {
              "id": "opt-A",
              "text": "The probability of getting a finding at least as extreme as that obtained by chance alone if the null hypothesis is true is 0.20."
            },
            {
              "id": "opt-B",
              "text": "The probability of getting a finding as extreme as that obtained by chance alone from repeated random sampling is 0.20."
            },
            {
              "id": "opt-C",
              "text": "The probability is 0.20 that our finding is significant."
            },
            {
              "id": "opt-D",
              "text": "The probability of getting this finding is 0.20."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-09c2dd34208053b6",
          "text": "Which of the following is not true with regard to contingency tables for chi-square tests for independence?",
          "options": [
            {
              "id": "opt-A",
              "text": "The categories are not numerical for either variable."
            },
            {
              "id": "opt-B",
              "text": "Observed frequencies should be whole numbers."
            },
            {
              "id": "opt-C",
              "text": "Expected frequencies should be whole numbers."
            },
            {
              "id": "opt-D",
              "text": "Expected frequencies in each cell should be at least 5, and to achieve this, one sometimes combines categories for one or the other or both of the variables."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-b18d277d6988b196",
          "text": "The observed times (in minutes) it takes a runner to complete a marathon are normally distributed. The z-score for his running time this week is –2. Which one of the following statements is a correct interpretation of his z-score?",
          "options": [
            {
              "id": "opt-A",
              "text": "This week his time was two minutes lower than his time last week."
            },
            {
              "id": "opt-B",
              "text": "This week his time was two minutes lower than his best time ever."
            },
            {
              "id": "opt-C",
              "text": "This week his time was two minutes lower than his average time."
            },
            {
              "id": "opt-D",
              "text": "This week his time was two standard deviations lower than his average time."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-16779558b10540d4",
          "text": "The mean Law School Aptitude Test (LSAT) score for applicants to a particular law school is 650 with a standard deviation of 45. Suppose that only applicants with scores above 700 are considered. What percentage of the applicants considered have scores below 740? (Assume the scores are normally distributed.)",
          "options": [
            {
              "id": "opt-A",
              "text": "13.3%"
            },
            {
              "id": "opt-B",
              "text": "17.1%"
            },
            {
              "id": "opt-C",
              "text": "82.9%"
            },
            {
              "id": "opt-D",
              "text": "86.7%"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-d5dfe158f0a7e6a5",
          "text": "On the same test, Mary and Pam scored at the 64th and 56th percentiles, respectively. Which of the following is a true statement?",
          "options": [
            {
              "id": "opt-A",
              "text": "Mary scored eight more points than Pam."
            },
            {
              "id": "opt-B",
              "text": "Mary's score is 8% higher than Pam's."
            },
            {
              "id": "opt-C",
              "text": "Eight percent of those who took the test scored between Pam and Mary."
            },
            {
              "id": "opt-D",
              "text": "Thirty-six people scored higher than both Mary and Pam."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-5ce277132752a2f8",
          "text": "A study looked at medical records of about 23,000 patients, mostly in Asia. They found that patients who drank at least three cups of green tea per day had a much lower incidence of depression. In an American newspaper article about this study, which of the following statements should not be made?",
          "options": [
            {
              "id": "opt-A",
              "text": "It is possible that people who drink green tea also tend to have healthier lifestyles than those who don't."
            },
            {
              "id": "opt-B",
              "text": "It is possible that people who drink green tea also tend to have a more positive outlook on life than those who don't."
            },
            {
              "id": "opt-C",
              "text": "Because this is observational data, the association between drinking green tea and a lower incidence of depression is not an indication of a causal relationship."
            },
            {
              "id": "opt-D",
              "text": "People who want to avoid depression should consider drinking green tea on a daily basis."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-92ff75a16f21dde9",
          "text": "A researcher planning a survey of school principals in a particular state has lists of the school principals employed in each of the 125 school districts. The procedure is to obtain a random sample of principals from each of the districts rather than grouping all the lists together and obtaining a sample from the entire group. Which of the following is a correct conclusion?",
          "options": [
            {
              "id": "opt-A",
              "text": "This is a simple random sample obtained in an easier and less costly manner than procedures involving sampling from the entire population of principals."
            },
            {
              "id": "opt-B",
              "text": "This is a cluster sample in which the population was divided into heterogeneous groups called clusters."
            },
            {
              "id": "opt-C",
              "text": "This is an example of systematic sampling, which gives a reasonable sample as long as the original order of the list is not related to the variables under consideration."
            },
            {
              "id": "opt-D",
              "text": "This is a stratified sample, which may give comparative information that a simple random sample wouldn't give."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-b26c44e097cee8bb",
          "text": "In an experiment, the control group should receive",
          "options": [
            {
              "id": "opt-A",
              "text": "treatment opposite that given the experimental group."
            },
            {
              "id": "opt-B",
              "text": "the same treatment given the experimental group without knowing they are receiving the treatment."
            },
            {
              "id": "opt-C",
              "text": "a procedure identical to that given the experimental group except for receiving the treatment under examination."
            },
            {
              "id": "opt-D",
              "text": "a procedure identical to that given the experimental group except for a random decision on receiving the treatment under examination."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-9b375fe40dac0029",
          "text": "Tina’s science fair project was to estimate the mean amount of chemicals in her city’s water supply. At first, she had decided to use a random sample of 15 observations. But her teacher asked her to take 35 observations. The mean and standard deviation from 35 observations turned out to be approximately the same as those from 15 observations. Is there any advantage in using 35 observations instead of 15 observations?",
          "options": [
            {
              "id": "opt-A",
              "text": "There is no advantage. Because the mean and the standard deviation are about the same, the confidence interval computed using 35 observations should be approximately the same as that computed using 15 observations."
            },
            {
              "id": "opt-B",
              "text": "There is no advantage. In fact, the 20 extra observations will increase the likelihood of error."
            },
            {
              "id": "opt-C",
              "text": "There is no advantage. Because she took 35 observations instead of 15 observations, the confidence interval using 35 observations will be wider than that using 15 observations."
            },
            {
              "id": "opt-D",
              "text": "There is some advantage. Because she took 35 observations instead of 15 observations, the confidence interval using 35 observations will be narrower than that using 15 observations."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-21fb8744581be231",
          "text": "The total cholesterol level in a large population of people is strongly skewed right with a mean of 210 mg/dL and a standard deviation of 15 mg/dL. If random samples of size 16 are repeatedly drawn from this population, which of the following appropriately describes the sampling distribution of these sample means?",
          "options": [
            {
              "id": "opt-A",
              "text": "The shape is unknown with a mean of 210 and a standard deviation of 15."
            },
            {
              "id": "opt-B",
              "text": "The shape is somewhat skewed right with a mean of 210 and a standard deviation of 3.75."
            },
            {
              "id": "opt-C",
              "text": "The shape is approximately normal with a mean of 210 and a standard deviation of 15."
            },
            {
              "id": "opt-D",
              "text": "The shape is approximately normal with a mean of 210 and a standard deviation of 3.75."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-bcdeb97f7678bf9a",
          "text": "An experiment is conducted in which the response variable is the average gain in participants' performance in the long jump. A two-sample t-test with a 5% level of significance will be used to analyze the results. If all else is kept the same, which of the following descriptions of a possible change in procedure is true?",
          "options": [
            {
              "id": "opt-A",
              "text": "Change from equal size treatment groups to very different size treatment groups would increase the power of the test."
            },
            {
              "id": "opt-B",
              "text": "Change from a 5% significance level to a 1% significance level would increase the power of the test."
            },
            {
              "id": "opt-C",
              "text": "Taking more careful measurements to reduce variability in the response would increase the power of the test."
            },
            {
              "id": "opt-D",
              "text": "Increasing the sample size would reduce the probability of a Type I error."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-4381c744561614e3",
          "text": "An assembly line machine is supposed to turn out ball bearings with a diameter of 1.25 centimeters. Each morning the first 30 bearings produced are pulled and measured. If their mean diameter is under 1.23 centimeters or over 1.27 centimeters, the machinery is stopped and an engineer is called to make adjustments before production is resumed. The quality control procedure may be viewed as a hypothesis test with the null hypothesis H0: μ = 1.25 and the alternative hypothesis Ha: μ ≠ 1.25. The engineer is asked to make adjustments when the null hypothesis is rejected. In test terminology, what would a Type II error result in?",
          "options": [
            {
              "id": "opt-A",
              "text": "A warranted halt in production to adjust the machinery"
            },
            {
              "id": "opt-B",
              "text": "An unnecessary stoppage of the production process"
            },
            {
              "id": "opt-C",
              "text": "Continued production of wrong size ball bearings"
            },
            {
              "id": "opt-D",
              "text": "Continued production of proper size ball bearings"
            }
          ],
          "correctOptionId": "opt-C"
        }
      ]
    },
    {
      "id": "masters-statistics-mmlu-u1-external-l07",
      "title": "Statistics — Quiz 7",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-3ed593f418d3cb0f",
          "text": "We are interested in the proportion p of people who are unemployed in a large city. Eight percent of a simple random sample of 500 people are unemployed. What is the midpoint for a 95% confidence interval estimate of p?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.012"
            },
            {
              "id": "opt-B",
              "text": "0.025"
            },
            {
              "id": "opt-C",
              "text": "0.475"
            },
            {
              "id": "opt-D",
              "text": "None of the above."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-61be58e5be6b501a",
          "text": "An insurance company wishes to study the number of years drivers in a large city go between automobile accidents. They plan to obtain and analyze the data from a sample of drivers. Which of the following is a true statement?",
          "options": [
            {
              "id": "opt-A",
              "text": "A reasonable time-and-cost-saving procedure would be to use systematic sampling on an available list of all AAA (Automobile Association of America) members in the city."
            },
            {
              "id": "opt-B",
              "text": "A reasonable time-and-cost-saving procedure would be to randomly choose families and include all drivers in each of these families in the sample."
            },
            {
              "id": "opt-C",
              "text": "To determine the mean number of years between accidents, randomness in choosing a sample of drivers is not important as long as the sample size is very large."
            },
            {
              "id": "opt-D",
              "text": "None of the above are true statements."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-1326d7d438d43ae3",
          "text": "Which of the following is the central limit theorem?",
          "options": [
            {
              "id": "opt-A",
              "text": "No matter how the population is distributed, as the sample size increases, the mean of the sample means becomes closer to the mean of the population."
            },
            {
              "id": "opt-B",
              "text": "No matter how the population is distributed, as the sample size increases, the standard deviation of the sample means becomes closer to the standard deviation of the population divided by the square root of the sample size."
            },
            {
              "id": "opt-C",
              "text": "If the population is normally distributed, then as the sample size increases, the sampling distribution of the sample mean becomes closer to a normal distribution."
            },
            {
              "id": "opt-D",
              "text": "The central limit theorem refers to something else."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-adb20a7727c161d2",
          "text": "A manufacturer of ready-bake cake mixes is interested in designing an experiment to test the effects of four different temperature levels (300, 325, 350, and 375F), two different types of pans (glass and metal), and three different types of ovens (gas, electric, and microwave) on the texture of its cakes, in all combinations. Which of the following below is the best description of the design of the necessary experiment?",
          "options": [
            {
              "id": "opt-A",
              "text": "A completely randomized design with nine treatment groups"
            },
            {
              "id": "opt-B",
              "text": "A completely randomized design with 24 treatment groups"
            },
            {
              "id": "opt-C",
              "text": "A randomized block design, blocked on temperature, with six treatment groups"
            },
            {
              "id": "opt-D",
              "text": "A randomized block design, blocked on type of pan, with 12 treatment groups"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-af1b24e666151c7d",
          "text": "A study is made to determine whether more hours of academic studying leads to higher point scoring by basketball players. In surveying 50 basketball players, it is noted that the 25 who claim to study the most hours have a higher point average than the 25 who study less. Based on this study, the coach begins requiring the players to spend more time studying. Which of the following is a correct statement?",
          "options": [
            {
              "id": "opt-A",
              "text": "While this study may have its faults, it still does prove causation."
            },
            {
              "id": "opt-B",
              "text": "There could well be a confounding variable responsible for the seeming relationship."
            },
            {
              "id": "opt-C",
              "text": "While this is a controlled experiment, the conclusion of the coach is not justified."
            },
            {
              "id": "opt-D",
              "text": "To get the athletes to study more, it would be more meaningful to have them put in more practice time on the court to boost their point averages, as higher point averages seem to be associated with more study time."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-8ebef4725a957b06",
          "text": "Biologists around the world have increased efforts at conservation. Monitoring wildlife populations is important so that appropriate management efforts can be implemented, but such monitoring is often difficult. One study found a cheap and easy way to estimate the number of nesting sites of terns (a type of seabird) by monitoring the number of calls heard per minute. More calls happen when there are more birds, as one would expect. In fact, it turned out that the number of calls explained 71% of the variation in the abundance of nests between breeding sites. Which of the following statements is correct about the correlation between the number of calls and the abundance of nests?",
          "options": [
            {
              "id": "opt-A",
              "text": "The correlation coefficient is -0.71."
            },
            {
              "id": "opt-B",
              "text": "The correlation coefficient is 0.71."
            },
            {
              "id": "opt-C",
              "text": "The correlation coefficient is -0.84."
            },
            {
              "id": "opt-D",
              "text": "The correlation coefficient is 0.84."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-ac4c82929c2cb049",
          "text": "A company has 1000 employees evenly distributed throughout five assembly plants. A sample of 30 employees is to be chosen as follows. Each of the five managers will be asked to place the 200 time cards of their respective employees in a bag, shake them up, and randomly draw out six names. The six names from each plant will be put together to make up the sample. Will this method result in a simple random sample of the 1000 employees?",
          "options": [
            {
              "id": "opt-A",
              "text": "Yes, because every employee has the same chance of being selected."
            },
            {
              "id": "opt-B",
              "text": "Yes, because every plant is equally represented."
            },
            {
              "id": "opt-C",
              "text": "Yes, because this is an example of stratified sampling, which is a special case of simple random sampling."
            },
            {
              "id": "opt-D",
              "text": "No, because not every group of 30 employees has the same chance of being selected."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-d0ffe6aeac500f4d",
          "text": "A doctor hopes that a new surgery technique will shorten the recovery time compared to the standard technique. To test this, he designed an experiment in which patients who required this type of surgery were randomly assigned to the standard technique or the new technique. Then the mean recovery time for each treatment group was compared. Assuming conditions for inference were met, which analysis should be used?",
          "options": [
            {
              "id": "opt-A",
              "text": "A t-test for a mean."
            },
            {
              "id": "opt-B",
              "text": "A t-test for a difference in means."
            },
            {
              "id": "opt-C",
              "text": "A z-test for a mean."
            },
            {
              "id": "opt-D",
              "text": "A z-test for a difference in means."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-45737b00f77db293",
          "text": "A researcher plans a study to examine long-term confidence in the U.S. economy among the adult population. She obtains a simple random sample of 30 adults as they leave a Wall Street office building one weekday afternoon. All but two of the adults agree to participate in the survey. Which of the following conclusions is correct?",
          "options": [
            {
              "id": "opt-A",
              "text": "Proper use of chance as evidenced by the simple random sample makes this a well-designed survey."
            },
            {
              "id": "opt-B",
              "text": "The high response rate makes this a well-designed survey."
            },
            {
              "id": "opt-C",
              "text": "Selection bias makes this a poorly designed survey."
            },
            {
              "id": "opt-D",
              "text": "A voluntary response study like this gives too much emphasis to persons with strong opinions."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-c208054efa5916ac",
          "text": "To study the effect of music on piecework output at a clothing manufacturer, two experimental treatments are planned: day-long classical music for one group versus day-long light rock music for another. Which one of the following groups would serve best as a control for this study?",
          "options": [
            {
              "id": "opt-A",
              "text": "A third group for which no music is played"
            },
            {
              "id": "opt-B",
              "text": "A third group that randomly hears either classical or light rock music each day"
            },
            {
              "id": "opt-C",
              "text": "A third group that hears day-long R & B music"
            },
            {
              "id": "opt-D",
              "text": "A third group that hears classical music every morning and light rock every afternoon"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-88542b596f80dbb0",
          "text": "During the years 1886 through 2000 there were an average of 8.7 tropical cyclones per year, of which an average of 5.1 became hurricanes. Assuming that the probability of any cyclone becoming a hurricane is independent of what happens to any other cyclone, if there are five cyclones in one year, what is the probability that at least three become hurricanes?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.313"
            },
            {
              "id": "opt-B",
              "text": "0.345"
            },
            {
              "id": "opt-C",
              "text": "0.586"
            },
            {
              "id": "opt-D",
              "text": "0.658"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-6ffda9119f744747",
          "text": "A chi-squared test of independence is to be performed on a 3 × 4 contingency table. How many degrees of freedom does this test have?",
          "options": [
            {
              "id": "opt-A",
              "text": "6"
            },
            {
              "id": "opt-B",
              "text": "8"
            },
            {
              "id": "opt-C",
              "text": "10"
            },
            {
              "id": "opt-D",
              "text": "11"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-3f4fad7deb34ae14",
          "text": "At a large hospital, the durations of emergency room visits, from check-in to discharge, are approximately normally distributed with a mean of 167 minutes and a standard deviation of 76 minutes. Which interval, to the nearest minute, contains the middle 80% of durations?",
          "options": [
            {
              "id": "opt-A",
              "text": "15 minutes to 319 minutes"
            },
            {
              "id": "opt-B",
              "text": "53 minutes to 281 minutes"
            },
            {
              "id": "opt-C",
              "text": "70 minutes to 264 minutes"
            },
            {
              "id": "opt-D",
              "text": "91 minutes to 243 minutes"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-e60100babf133c4b",
          "text": "The relation between studying time (in hours) and grade on a final exam (0-100) in a random sample of students in math class was found to be Grade = 50.25 + 10.2 (h) How will a student’s grade be affected if she studies for two hours?",
          "options": [
            {
              "id": "opt-A",
              "text": "Her grade will go up by 40.05 points."
            },
            {
              "id": "opt-B",
              "text": "Her grade will go up by 20.4 points."
            },
            {
              "id": "opt-C",
              "text": "Her grade will remain unchanged."
            },
            {
              "id": "opt-D",
              "text": "Her grade will down by 10.2 points."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-ef4072f4cb7b9125",
          "text": "A producer of skin care products has created a new formula for its cream to cure acne. To compare the effectiveness of the new cream to that of the old cream, it conducted a double-blind randomized experiment. Volunteers with acne tried the old formula on one side of their face and the new formula on the other, and which side got which formula was determined randomly. The response variable was the difference in the number of pimples (old formula - new formula). Which is the correct significance test to perform?",
          "options": [
            {
              "id": "opt-A",
              "text": "A two-proportion z-test"
            },
            {
              "id": "opt-B",
              "text": "A two-sample t-test"
            },
            {
              "id": "opt-C",
              "text": "A matched pairs t-test"
            },
            {
              "id": "opt-D",
              "text": "A chi-square test of independence"
            }
          ],
          "correctOptionId": "opt-C"
        }
      ]
    },
    {
      "id": "masters-statistics-mmlu-u1-external-l08",
      "title": "Statistics — Quiz 8",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-6b84a11bbeb7dbdf",
          "text": "A pharmaceutical company wants to test a new cholesterol-reducing drug against the previous drug. It does not anticipate much association between cholesterol level and gender, but it does anticipate an association between cholesterol level and the amount of exercise a person gets. For a randomized block design, it should:",
          "options": [
            {
              "id": "opt-A",
              "text": "Block on gender because it is not associated with cholesterol level."
            },
            {
              "id": "opt-B",
              "text": "Block on gender because males and females are different."
            },
            {
              "id": "opt-C",
              "text": "Block on the type of drug because it may be associated with cholesterol level."
            },
            {
              "id": "opt-D",
              "text": "Block on exercise level because it is associated with cholesterol level."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-8341231fad83e8c3",
          "text": "An experiment is to be conducted to determine whether taking fish oil capsules or garlic capsules has more of an effect on cholesterol levels. In past studies it was noted that daily exercise intensity (low, moderate, high) is associated with cholesterol level, but average sleep length (< 5, 5 - 8, > 8 hours) is not associated with cholesterol level. This experiment should be done",
          "options": [
            {
              "id": "opt-A",
              "text": "by blocking on exercise intensity"
            },
            {
              "id": "opt-B",
              "text": "by blocking on sleep length"
            },
            {
              "id": "opt-C",
              "text": "by blocking on cholesterol level"
            },
            {
              "id": "opt-D",
              "text": "by blocking on capsule type"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-9abcf68863de44f9",
          "text": "A test for heartworm in dogs shows a positive result in 96% of dogs that actually have heartworm, and shows a negative result in 98% of dogs with no heartworm. If heartworm actually occurs in 10% of dogs, what is the probability that a randomly selected dog that tested positive for heartworm actually has heartworm?",
          "options": [
            {
              "id": "opt-A",
              "text": "11%"
            },
            {
              "id": "opt-B",
              "text": "18%"
            },
            {
              "id": "opt-C",
              "text": "84%"
            },
            {
              "id": "opt-D",
              "text": "88%"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-56c799d8a4bed39c",
          "text": "Suppose X and Y are random variables with μx = 32, σx = 5, μy = 44, and σy = 12. Given that X and Y are independent, what are the mean and standard deviation of the random variable X + Y?",
          "options": [
            {
              "id": "opt-A",
              "text": "μx+y = 76, σx+y = 8.5"
            },
            {
              "id": "opt-B",
              "text": "μx+y = 76, σx+y = 13"
            },
            {
              "id": "opt-C",
              "text": "μx+y = 76, σx+y = 17"
            },
            {
              "id": "opt-D",
              "text": "μx+y = 38, σx+y = 17"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-7e06b054461728a9",
          "text": "A high school sent a survey to a randomly selected sample of 75 of last year's graduating class. 27 of those selected did not return the survey. The best plan of action would be to:",
          "options": [
            {
              "id": "opt-A",
              "text": "Use the surveys that were returned and change the sample size to 48 for the analysis."
            },
            {
              "id": "opt-B",
              "text": "Use the surveys that were returned and leave the sample size at 75 for the analysis."
            },
            {
              "id": "opt-C",
              "text": "Randomly select 27 additional class members and send the survey to them."
            },
            {
              "id": "opt-D",
              "text": "Follow up with those that did not return the survey to encourage them to respond."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-6a14d9b5976ebd03",
          "text": "Mr. Bee's statistics class had a standard deviation of 11.2 on a standardized test, while Mr. Em's class had a standard deviation of 5.6 on the same test. Which of the following is the most reasonable conclusion concerning the two classes' performance on the test?",
          "options": [
            {
              "id": "opt-A",
              "text": "Mr. Bee's class is less heterogeneous than Mr. Em's."
            },
            {
              "id": "opt-B",
              "text": "Mr. Em's class is more homogeneous than Mr. Bee's."
            },
            {
              "id": "opt-C",
              "text": "Mr. Bee's class performed twice as well as Mr. Em's."
            },
            {
              "id": "opt-D",
              "text": "Mr. Em's class did not do as well as Mr. Bee's."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-19fac0fd36ad2651",
          "text": "When a patient complains to the doctor about a certain set of symptoms, the doctor diagnoses the patient with Condition A 15% of the time. If a patient with these symptoms is diagnosed with Condition A, he or she is diagnosed with Condition B 70% of the time. A patient with these symptoms that is not diagnosed with Condition A is diagnosed with Condition B 10% of the time. What is the probability that a patient with this set of symptoms will be diagnosed with at least one of these conditions?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.235"
            },
            {
              "id": "opt-B",
              "text": "0.25"
            },
            {
              "id": "opt-C",
              "text": "0.765"
            },
            {
              "id": "opt-D",
              "text": "0.85"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-37ad3f76e9ddcbb8",
          "text": "A simple random sample is defined by",
          "options": [
            {
              "id": "opt-A",
              "text": "the method of selection."
            },
            {
              "id": "opt-B",
              "text": "examination of the outcome."
            },
            {
              "id": "opt-C",
              "text": "both of the above."
            },
            {
              "id": "opt-D",
              "text": "how representative the sample is of the population."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-80dff553f1cc9f19",
          "text": "In one study on the effect that eating meat products has on weight level, an SRS of 500 subjects who admitted to eating meat at least once a day had their weights compared with those of an independent SRS of 500 people who claimed to be vegetarians. In a second study, an SRS of 500 subjects were served at least one meat meal per day for 6 months, while an independent SRS of 500 others were chosen to receive a strictly vegetarian diet for 6 months, with weights compared after 6 months.",
          "options": [
            {
              "id": "opt-A",
              "text": "The first study is a controlled experiment, while the second is an observational study."
            },
            {
              "id": "opt-B",
              "text": "The first study is an observational study, while the second is a controlled experiment."
            },
            {
              "id": "opt-C",
              "text": "Both studies are controlled experiments."
            },
            {
              "id": "opt-D",
              "text": "Both studies are observational studies."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-1180cd9c55dd5523",
          "text": "Which of these is a correct description of the term?",
          "options": [
            {
              "id": "opt-A",
              "text": "A factor is a response variable."
            },
            {
              "id": "opt-B",
              "text": "Replication means the experiment should be repeated several times."
            },
            {
              "id": "opt-C",
              "text": "Levels are the same as treatments."
            },
            {
              "id": "opt-D",
              "text": "Experimental units are the same as subjects."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-408f746ef7d5da3b",
          "text": "In the jury pool available for this week, 30 percent of potential jurors are women. A particular trial requires that, out of a jury of 12, at least three are women. If a jury of 12 is to be selected at random from the pool, what is the probability it meets the requirements of this trial?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.168"
            },
            {
              "id": "opt-B",
              "text": "0.843"
            },
            {
              "id": "opt-C",
              "text": "0.915"
            },
            {
              "id": "opt-D",
              "text": "The answer cannot be determined without knowing the size of the jury pool."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-acf871d4f788b72f",
          "text": "An employment placement agency specializes in placing workers in jobs suited for them. From past experience, the agency knows that 20% of all the workers it places will no longer be at the position in which they were placed after one year; however, only 5% of those remaining after the first year leave during the next year. At the start of a year an employer hires 100 workers using this agency, then at the start of the next year the employer hires 100 more. How many of these 200 workers are expected to be on the job at the end of the second year?",
          "options": [
            {
              "id": "opt-A",
              "text": "140"
            },
            {
              "id": "opt-B",
              "text": "144"
            },
            {
              "id": "opt-C",
              "text": "152"
            },
            {
              "id": "opt-D",
              "text": "156"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-a34b05074a1222e5",
          "text": "A newspaper reporter examined police reports of accidents during the past 12 months to collect data about the speed of a car and its stopping distance. The reporter then constructed a scatterplot and computed a correlation coefficient to show the relation between a car’s speed and its stopping distance. This is an example of",
          "options": [
            {
              "id": "opt-A",
              "text": "a double-blind study"
            },
            {
              "id": "opt-B",
              "text": "a single-blind study"
            },
            {
              "id": "opt-C",
              "text": "a study involving no blinding at all"
            },
            {
              "id": "opt-D",
              "text": "an observational study"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-b8898f3bc942fb27",
          "text": "In which of the following situations is a binomial model not an appropriate model to describe the outcome?",
          "options": [
            {
              "id": "opt-A",
              "text": "The number of heads in three tosses of a coin"
            },
            {
              "id": "opt-B",
              "text": "The number of rainy days in a given week"
            },
            {
              "id": "opt-C",
              "text": "The number of girls in a family of five children"
            },
            {
              "id": "opt-D",
              "text": "The number of students present in a class of 22"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-ae6b309e7318f149",
          "text": "Two possible wordings for a questionnaire on a proposed school budget increase are as follows:",
          "options": [
            {
              "id": "opt-A",
              "text": "The first showed 58% and the second 13% because of the lack of randomization as evidenced by the wording of the questions."
            },
            {
              "id": "opt-B",
              "text": "The first showed 13% and the second 58% because of a placebo effect due to the wording of the questions."
            },
            {
              "id": "opt-C",
              "text": "The first showed 58% and the second 13% because of the lack of a control group."
            },
            {
              "id": "opt-D",
              "text": "The first showed 58% and the second 13% because of response bias due to the wording of the questions."
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    },
    {
      "id": "masters-statistics-mmlu-u1-external-l09",
      "title": "Statistics — Quiz 9",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-fe2c7cf6cdcc9fa9",
          "text": "Company I manufactures demolition fuses that burn an average of 50 minutes with a standard deviation of 10 minutes, while company II advertises fuses that burn an average of 55 minutes with a standard deviation of 5 minutes. Which company's fuse is more likely to last at least 1 hour? Assume normal distributions of fuse times.",
          "options": [
            {
              "id": "opt-A",
              "text": "Company I's, because of its greater standard deviation"
            },
            {
              "id": "opt-B",
              "text": "Company II's, because of its greater mean"
            },
            {
              "id": "opt-C",
              "text": "For both companies, the probability that a fuse will last at least 1 hour is 0.159"
            },
            {
              "id": "opt-D",
              "text": "For both companies, the probability that a fuse will last at least 1 hour is 0.841"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-49f3e70f278f6cfb",
          "text": "In a random sample of Toyota car owners, 83 out of 112 said they were satisfied with the Toyota front-wheel drive, while in a similar survey of Subaru owners, 76 out of 81 said they were satisfied with the Subaru four-wheel drive. A 90% confidence interval estimate for the difference in proportions between Toyota and Subaru car owners who are satisfied with their drive systems is reported to be -0.197 ± 0.081. Which is a proper conclusion?",
          "options": [
            {
              "id": "opt-A",
              "text": "The interval is invalid because probabilities cannot be negative."
            },
            {
              "id": "opt-B",
              "text": "The interval is invalid because it does not contain zero."
            },
            {
              "id": "opt-C",
              "text": "Subaru owners are approximately 19.7% more satisfied with their drive systems than are Toyota owners."
            },
            {
              "id": "opt-D",
              "text": "We are 90% confident that the difference in proportions between Toyota and Subaru car owners who are satisfied with their drive systems is between -0.278 and -0.116."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-621ce91b9c29a521",
          "text": "Which of the following statements about the correlation coefficient is true?",
          "options": [
            {
              "id": "opt-A",
              "text": "The correlation coefficient and the slope of the regression line may have opposite signs."
            },
            {
              "id": "opt-B",
              "text": "A correlation of 1 indicates a perfect cause-and-effect relationship between the variables."
            },
            {
              "id": "opt-C",
              "text": "Correlations of +0.87 and -0.87 indicate the same degree of clustering around the regression line."
            },
            {
              "id": "opt-D",
              "text": "Correlation applies equally well to quantitative and categorical data."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-213836b96b3a8688",
          "text": "A school board of a large school district is proposing a new dress code for students. Some students feel that this dress code unfairly targets female students. To see if there is a difference between boys and girls in their opposition to the new dress code, they conduct a poll of 60 randomly selected male and 70 randomly selected female high school students in the district. They find that 66 females oppose the dress code and 50 males oppose the dress code. Which of the following explains why a two-proportion z-test is not appropriate?",
          "options": [
            {
              "id": "opt-A",
              "text": "The sample sizes are different."
            },
            {
              "id": "opt-B",
              "text": "The sample sizes are too large."
            },
            {
              "id": "opt-C",
              "text": "The number of successes and the number of failures for the two groups are not all large enough."
            },
            {
              "id": "opt-D",
              "text": "The shapes of the population distributions are not known."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-04399058f8739914",
          "text": "A soft drink dispenser can be adjusted to deliver any fixed number of ounces. If the machine is operating with a standard deviation in delivery equal to 0.3 ounce, what should be the mean setting so that a 12-ounce cup will overflow less than 1% of the time? Assume a normal distribution for ounces delivered.",
          "options": [
            {
              "id": "opt-A",
              "text": "12 - 0.99(0.3) ounces"
            },
            {
              "id": "opt-B",
              "text": "12 - 2.326(0.3) ounces"
            },
            {
              "id": "opt-C",
              "text": "12 - 2.576(0.3) ounces"
            },
            {
              "id": "opt-D",
              "text": "12 + 2.326(0.3) ounces"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-53520a45e1a3b8a5",
          "text": "The average number of calories in Yum-Yum Good candy bars is 210, with a standard deviation of 10. If the number of calories per candy bar is normally distributed, what percent of candy bars contain more than 225 calories?",
          "options": [
            {
              "id": "opt-A",
              "text": "66.80%"
            },
            {
              "id": "opt-B",
              "text": "47.70%"
            },
            {
              "id": "opt-C",
              "text": "43.30%"
            },
            {
              "id": "opt-D",
              "text": "6.68%"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-f00c30559c5fcead",
          "text": "The mean daily demand for bread at a popular bakery is 2,500 loaves, with a standard deviation of 225 loaves. Every morning the bakery bakes 3,000 loaves. What is the probability that today it will run out of bread? Assume that the mean daily demand for bread at this bakery is normally distributed.",
          "options": [
            {
              "id": "opt-A",
              "text": "0.8333"
            },
            {
              "id": "opt-B",
              "text": "0.1667"
            },
            {
              "id": "opt-C",
              "text": "0.9869"
            },
            {
              "id": "opt-D",
              "text": "0.0132"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-069fee72137332f0",
          "text": "Two dice are rolled simultaneously. If both dice show 6, then the player wins $20; otherwise the player loses the game. It costs $2.00 to play the game. What is the expected gain or loss per game?",
          "options": [
            {
              "id": "opt-A",
              "text": "The player will gain about $0.55."
            },
            {
              "id": "opt-B",
              "text": "The player will gain about $1.44."
            },
            {
              "id": "opt-C",
              "text": "The player will lose about $0.55."
            },
            {
              "id": "opt-D",
              "text": "The player will lose about $1.44."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-949d83b13e9c3014",
          "text": "Suppose you toss a fair die three times and it comes up an even number each time. Which of the following is a true statement?",
          "options": [
            {
              "id": "opt-A",
              "text": "By the law of large numbers, the next toss is more likely to be an odd number than another even number."
            },
            {
              "id": "opt-B",
              "text": "Based on the properties of conditional probability the next toss is more likely to be an even number given that three in a row have been even."
            },
            {
              "id": "opt-C",
              "text": "Dice actually do have memories, and thus the number that comes up on the next toss will be influenced by the previous tosses."
            },
            {
              "id": "opt-D",
              "text": "The probability that the next toss will again be even is 0.5."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-e8b97c0ea485f789",
          "text": "Taxicabs in a metropolitan area are driven an average of 75,000 miles per year with a standard deviation of 12,000 miles. What is the probability that a randomly selected cab has been driven less than 100,000 miles if it is known that it has been driven over 80,000 miles? Assume a normal distribution of miles per year among cabs.",
          "options": [
            {
              "id": "opt-A",
              "text": "0.06"
            },
            {
              "id": "opt-B",
              "text": "0.34"
            },
            {
              "id": "opt-C",
              "text": "0.66"
            },
            {
              "id": "opt-D",
              "text": "0.94"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-12f8f292a8bdfb44",
          "text": "The registrar’s office at a university has noticed that a large number of students fail to report a change of address. The registrar decides to take a random sample of 150 students from the current directory of students and determine the number of students with the correct addresses on record. He then uses this information to construct a 95 percent confidence interval. Which of the following statements must be true?",
          "options": [
            {
              "id": "opt-A",
              "text": "The true proportion of students at this university with the correct address on record is within the confidence interval constructed."
            },
            {
              "id": "opt-B",
              "text": "Ninety-five percent of students at this university have the correct address on record."
            },
            {
              "id": "opt-C",
              "text": "The true proportion of students at this university with the correct addresses on record is within the confidence interval 95 percent of the time."
            },
            {
              "id": "opt-D",
              "text": "The sample proportion of students at this university with the correct address on record is within the confidence interval."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-72ae0515c7978b1e",
          "text": "A botanist is interested in testing H0: μ = 3.5 cm versus Ha: μ > 3.5, where μ = the mean petal length of one variety of flowers. A random sample of 50 petals gives significant results at a 5 percent level of significance. Which of the following statements about the confidence interval to estimate the mean petal length is true?",
          "options": [
            {
              "id": "opt-A",
              "text": "The specified mean length of 3.5 cm is within a 90 percent confidence interval."
            },
            {
              "id": "opt-B",
              "text": "The specified mean length of 3.5 cm is not within a 90 percent confidence interval."
            },
            {
              "id": "opt-C",
              "text": "The specified mean length of 3.5 cm is below the lower limit of a 90 percent confidence interval."
            },
            {
              "id": "opt-D",
              "text": "The specified mean length of 3.5 cm is below the lower limit of a 95 percent confidence interval."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-233ae376b862a210",
          "text": "A dentist has noticed that about two children in every seven whom he sees professionally develop cavities before they turn 10 years old. Last week he examined the teeth of five unrelated children younger than 10. Let X be the number of children who develop cavities before turning 10. Which of the following gives the probability that at least one will develop a cavity before turning 10?",
          "options": [
            {
              "id": "opt-A",
              "text": "P(X = 2, 3, 4, 5, 6, 7)"
            },
            {
              "id": "opt-B",
              "text": "P(X = 2 out of 7)"
            },
            {
              "id": "opt-C",
              "text": "P(X = 1)"
            },
            {
              "id": "opt-D",
              "text": "1 – P(X = 0)"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-f03c9f3cdce72b97",
          "text": "Which of the following is NOT true of the χ2 probability distribution function?",
          "options": [
            {
              "id": "opt-A",
              "text": "The area under the χ2 curve is 1."
            },
            {
              "id": "opt-B",
              "text": "χ2 is defined only for nonnegative values of the variable."
            },
            {
              "id": "opt-C",
              "text": "For small degrees of freedom, the curve displays strong right-skewness."
            },
            {
              "id": "opt-D",
              "text": "For the same α, as the number of degrees of freedom increases, the critical value for the rejection region decreases."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-6017b5152e2bbd6f",
          "text": "The relation between the selling price of a car (in $1,000) and its age (in years) is estimated from a random sample of cars of a specific model. The relation is given by the following formula: Selling price = 15.9 – 0.983 (age) Which of the following can we conclude from this equation?",
          "options": [
            {
              "id": "opt-A",
              "text": "For every year the car gets older, the selling price goes down by approximately 9.83 percent."
            },
            {
              "id": "opt-B",
              "text": "A new car costs on the average $9,830."
            },
            {
              "id": "opt-C",
              "text": "For every year the car gets older, the selling price drops by approximately $1,590."
            },
            {
              "id": "opt-D",
              "text": "For every year the car gets older, the selling price drops by approximately $983."
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    },
    {
      "id": "masters-statistics-mmlu-u1-external-l10",
      "title": "Statistics — Quiz 10",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-35cfd0d4588703d2",
          "text": "Consider a hypothesis test with H0 : μ = 70 and Ha : μ < 70. Which of the following choices of significance level and sample size results in the greatest power of the test when μ = 65?",
          "options": [
            {
              "id": "opt-A",
              "text": "α = 0.05, n = 15"
            },
            {
              "id": "opt-B",
              "text": "α = 0.01, n = 15"
            },
            {
              "id": "opt-C",
              "text": "α = 0.05, n = 30"
            },
            {
              "id": "opt-D",
              "text": "α = 0.01, n = 30"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-583f0be12128e698",
          "text": "A farmer who raises hens for egg production wants his eggs to have a mean mass of 56 grams. He is considering the purchase of a different type of hen, so he took a random sample of 18 eggs laid by this type of hen. The distribution of the masses is symmetric and mound-shaped with a mean of 54.1 grams and no outliers. The farmer conducted a t-test to see if there is evidence that the eggs from these hens have a mean mass that is different from 56 g and got a test statistic of t= -1.973. If he uses a 5% significance level, which is the correct conclusion and reason?",
          "options": [
            {
              "id": "opt-A",
              "text": "Because tis more extreme than ±1.96, he should reject the null hypothesis. He has convincing evidence at the 5% significance level that the mean mass of eggs from these hens is different from 56 grams."
            },
            {
              "id": "opt-B",
              "text": "Because tis less extreme than the critical value of t for 17 degrees of freedom, he should not reject the null hypothesis. He does not have convincing evidence at the 5% significance level that the mean mass of eggs from these hens is different from 56 grams."
            },
            {
              "id": "opt-C",
              "text": "Because tis less extreme than the critical value of t for 18 degrees of freedom, he should not reject the null hypothesis. He does not have convincing evidence at the 5% significance level that the mean mass of eggs from these hens is different from 56 grams."
            },
            {
              "id": "opt-D",
              "text": "Because tis more extreme than the critical value of t for 18 degrees of freedom, he should reject the null hypothesis. He has convincing evidence at the 5% significance level that the mean mass of eggs from these hens is different from 56 grams."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-f4ba9999d0f453d5",
          "text": "A school committee member is lobbying for an increase in the gasoline tax to support the county school system. The local newspaper conducted a survey of county residents to assess their support for such an increase. What is the population of interest here?",
          "options": [
            {
              "id": "opt-A",
              "text": "All school-aged children"
            },
            {
              "id": "opt-B",
              "text": "All county residents"
            },
            {
              "id": "opt-C",
              "text": "All county residents with school-aged children"
            },
            {
              "id": "opt-D",
              "text": "All county residents with children in the county school system"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-34ffac83c9c68d6e",
          "text": "To survey the opinions of the students at your high school, a researcher plans to select every twenty-fifth student entering the school in the morning. Assuming there are no absences, will this result in a simple random sample of students attending your school?",
          "options": [
            {
              "id": "opt-A",
              "text": "Yes, because every student has the same chance of being selected."
            },
            {
              "id": "opt-B",
              "text": "Yes, but only if there is a single entrance to the school."
            },
            {
              "id": "opt-C",
              "text": "Yes, because the 24 out of every 25 students who are not selected will form a control group."
            },
            {
              "id": "opt-D",
              "text": "No, because not every sample of the intended size has an equal chance of being selected."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-a7db267a9fad36f4",
          "text": "Which of the following is a true statement?",
          "options": [
            {
              "id": "opt-A",
              "text": "While properly designed experiments can strongly suggest cause-and-effect relationships, a complete census is the only way of establishing such a relationship."
            },
            {
              "id": "opt-B",
              "text": "If properly designed, observational studies can establish cause-and-effect relationships just as strongly as properly designed experiments."
            },
            {
              "id": "opt-C",
              "text": "Controlled experiments are often undertaken later to establish cause-and-effect relationships first suggested by observational studies."
            },
            {
              "id": "opt-D",
              "text": "A useful approach to overcome bias in observational studies is to increase the sample size."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-dfc1ed16a3395082",
          "text": "An automobile service station performs oil changes and tire replacements, as well as other services. Sixty percent of its customers request an oil change, 30 percent request tire replacements, and 10 percent request both. A customer requests an oil change. What is the probability this customer does not request tire replacements?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.42"
            },
            {
              "id": "opt-B",
              "text": "0.5"
            },
            {
              "id": "opt-C",
              "text": "0.7"
            },
            {
              "id": "opt-D",
              "text": "0.833"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-254cf2729004ced8",
          "text": "A kidney dialysis center periodically checks a sample of its equipment and performs a major recalibration if readings are sufficiently off target. Similarly, a fabric factory periodically checks the sizes of towels coming off an assembly line and halts production if measurements are sufficiently off target. In both situations, we have the null hypothesis that the equipment is performing satisfactorily. For each situation, which is the more serious concern, a Type I or Type II error?",
          "options": [
            {
              "id": "opt-A",
              "text": "Dialysis center: Type I error, towel manufacturer: Type I error"
            },
            {
              "id": "opt-B",
              "text": "Dialysis center: Type I error, towel manufacturer: Type II error"
            },
            {
              "id": "opt-C",
              "text": "Dialysis center: Type II error, towel manufacturer: Type I error"
            },
            {
              "id": "opt-D",
              "text": "Dialysis center: Type II error, towel manufacturer: Type II error"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-92b1d11ad4e1ed37",
          "text": "A company with offices in five different countries is interested in estimating the proportion of its employees in favor of banning smoking on the office premises. It is known that the views of people from different countries on issues like smoking tend to vary due to the influence of different local social structures. Which of the following is an appropriate sampling technique to use in this situation, and why?",
          "options": [
            {
              "id": "opt-A",
              "text": "Stratified sample, because the population is divided into five strata—namely, five offices in five different countries"
            },
            {
              "id": "opt-B",
              "text": "Cluster sample, because the population is divided into five clusters—namely, five offices in five different countries"
            },
            {
              "id": "opt-C",
              "text": "Simple random sample, because this is the simplest sampling method"
            },
            {
              "id": "opt-D",
              "text": "Simple random sample, because this is the only method that gives unbiased results"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-b95325362482c4d0",
          "text": "Semir rolls a six-sided die every morning to determine what he will have for breakfast. If he rolls a 1 or 2, he takes time to cook himself a big breakfast. If he rolls a 3 or larger he grabs a quick lighter breakfast. When he cooks himself a big breakfast, there is a 15% chance he will be late for school. If he has a lighter breakfast, there is a 6% chance he will be late for school. What is the probability Semir will be on time for school any given day?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.09"
            },
            {
              "id": "opt-B",
              "text": "0.21"
            },
            {
              "id": "opt-C",
              "text": "0.8"
            },
            {
              "id": "opt-D",
              "text": "0.91"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-75e8b56e3ededd5e",
          "text": "A teacher's union and a school district are negotiating salaries for the coming year. The teachers want more money, and the district, claiming, as always, budget constraints, wants to pay as little as possible. The district, like most, has a large number of moderately paid teachers and a few highly paid administrators. The salaries of all teachers and administrators are included in trying to figure out, on average, how much the professional staff currently earn. Which of the following would the teachers' union be most likely to quote during negotiations?",
          "options": [
            {
              "id": "opt-A",
              "text": "The mean of all the salaries."
            },
            {
              "id": "opt-B",
              "text": "The mode of all the salaries."
            },
            {
              "id": "opt-C",
              "text": "The standard deviation of all the salaries."
            },
            {
              "id": "opt-D",
              "text": "The median of all the salaries."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-b3d5f767437531e0",
          "text": "The Hardcore Construction Company has two offices, one in Atlanta and one in New Orleans. Fifteen engineers work in the Atlanta office, and 14 engineers work in the New Orleans office. The business manager decided to use a 2-sample t-test to compare the mean salaries of engineers in the two offices. Because there were only 15 engineers in one office and 14 engineers in the other, he used the salaries of all the engineers in the computation. Is the 2-sample t-test an appropriate inferential technique in this situation?",
          "options": [
            {
              "id": "opt-A",
              "text": "Yes, because he is comparing the means of two small groups."
            },
            {
              "id": "opt-B",
              "text": "Yes. Both Atlanta and New Orleans are large cities, so the salaries are comparable."
            },
            {
              "id": "opt-C",
              "text": "Yes. Because Atlanta and New Orleans are about 500 miles apart, the two groups of engineers can be assumed to be independent."
            },
            {
              "id": "opt-D",
              "text": "No, because the entire population information was used from both offices. Because no samples were taken, a t-test should not be used."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-f2627be5588b7a49",
          "text": "For the regression line, which of the following statements about residuals is true?",
          "options": [
            {
              "id": "opt-A",
              "text": "Influential scores have large residuals."
            },
            {
              "id": "opt-B",
              "text": "If the linear model is good, the number of positive residuals will be the same as the number of negative residuals."
            },
            {
              "id": "opt-C",
              "text": "The mean of the residuals is always zero."
            },
            {
              "id": "opt-D",
              "text": "If the correlation is 0, there will be a distinct pattern in the residual plot."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-5a490527c8f51f61",
          "text": "A reading specialist in a large public school system believes that the more time students spend reading, the better they will do in school. She plans a middle school experiment in which an SRS of 30 eighth graders will be assigned four extra hours of reading per week, an SRS of 30 seventh graders will be assigned two extra hours of reading per week, and an SRS of 30 sixth graders with no extra assigned reading will be a control group. After one school year, the mean GPAs from each group will be compared. Is this a good experimental design?",
          "options": [
            {
              "id": "opt-A",
              "text": "Yes."
            },
            {
              "id": "opt-B",
              "text": "No, because while this design may point out an association between reading and GPA, it cannot establish a cause-and-effect relationship."
            },
            {
              "id": "opt-C",
              "text": "No, because without blinding, there is a strong chance of a placebo effect."
            },
            {
              "id": "opt-D",
              "text": "No, because grade level is a lurking variable which may well be confounded with the variables under consideration."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-a87c63733b29d7e2",
          "text": "What is a sampling distribution?",
          "options": [
            {
              "id": "opt-A",
              "text": "A distribution of all the statistics that can be found in a given sample"
            },
            {
              "id": "opt-B",
              "text": "A histogram, or other such visual representation, showing the distribution of a sample"
            },
            {
              "id": "opt-C",
              "text": "A normal distribution of some statistic"
            },
            {
              "id": "opt-D",
              "text": "A distribution of all the values taken by a statistic from all possible samples of a given size"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-ddabc7437235d489",
          "text": "A farmer wants to know whether a new fertilizer has increased the mean weight of his apples. With the old fertilizer, the mean weight was 4.0 ounces per apple. The farmer decides to test H0: μ = 4.0 ounces versus Ha : μ > 4.0 ounces, at a 5 percent level of significance, where μ = the mean weight of apples using the new fertilizer. The weights of apples are approximately normally distributed. The farmer takes a random sample of 16 apples and computes a mean of 4.3 ounces and a standard deviation of 0.6 ounces. Which of the following gives the p-value for this test?",
          "options": [
            {
              "id": "opt-A",
              "text": "P(Z > 2)"
            },
            {
              "id": "opt-B",
              "text": "P(Z < 2)"
            },
            {
              "id": "opt-C",
              "text": "P(t > 2) with 15 degrees of freedom"
            },
            {
              "id": "opt-D",
              "text": "P(t < 2) with 15 degrees of freedom"
            }
          ],
          "correctOptionId": "opt-C"
        }
      ]
    },
    {
      "id": "masters-statistics-mmlu-u1-external-l11",
      "title": "Statistics — Quiz 11",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-475eac198c02ef25",
          "text": "In a study on the effect of music on worker productivity, employees were told that a different genre of background music would be played each day and the corresponding production outputs noted. Every change in music resulted in an increase in production. This is an example of",
          "options": [
            {
              "id": "opt-A",
              "text": "the effect of a treatment unit."
            },
            {
              "id": "opt-B",
              "text": "the placebo effect."
            },
            {
              "id": "opt-C",
              "text": "the control group effect."
            },
            {
              "id": "opt-D",
              "text": "sampling error."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-ed02b64edae28b32",
          "text": "In a clinical trial, 30 sickle cell anemia patients are randomly assigned to two groups. One group receives the currently marketed medicine, and the other group receives an experimental medicine. Each week, patients report to the clinic where blood tests are conducted. The lab technician is unaware of the kind of medicine the patient is taking. This design can be described as",
          "options": [
            {
              "id": "opt-A",
              "text": "a completely randomized design, with the currently marketed medicine and the experimental medicine as two treatments"
            },
            {
              "id": "opt-B",
              "text": "a matched-pairs design, with the currently marketed medicine and the experimental medicine forming a pair"
            },
            {
              "id": "opt-C",
              "text": "a randomized block design, with the currently marketed medicine and the experimental medicine as two blocks"
            },
            {
              "id": "opt-D",
              "text": "a randomized block design, with the currently marketed medicine and the experimental medicine as two treatments"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-c8078ca13f9d47e6",
          "text": "Suppose that the weights of trucks traveling on the interstate highway system are normally distributed. If 70% of the trucks weigh more than 12,000 pounds and 80% weigh more than 10,000 pounds, what are the mean and standard deviation for the weights of trucks traveling on the interstate system?",
          "options": [
            {
              "id": "opt-A",
              "text": "μ = 14,900; σ = 6100"
            },
            {
              "id": "opt-B",
              "text": "μ = 15,100; σ = 6200"
            },
            {
              "id": "opt-C",
              "text": "μ = 15,300; σ = 6300"
            },
            {
              "id": "opt-D",
              "text": "μ = 15,500; σ = 6400"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-36d83e102db0a40c",
          "text": "An insurance agent is successful in selling a life insurance policy to 20 percent of the customers he contacts. He decides to construct a simulation to estimate the mean number of customers he needs to contact before being able to sell a policy. Which of the following schemes should he use to do the simulation?",
          "options": [
            {
              "id": "opt-A",
              "text": "Assign numbers 0, 1 to successfully selling a policy to a customer and numbers 2, 3, 4, 5, 6, 7, 8, 9 to failing to sell a policy to a customer."
            },
            {
              "id": "opt-B",
              "text": "Assign numbers 0, 1 to successfully selling a policy to a customer and numbers 2, 3, 4 to failing to sell a policy to a customer."
            },
            {
              "id": "opt-C",
              "text": "Assign number 0 to successfully selling a policy to a customer and number 1 to failing to sell a policy to a customer."
            },
            {
              "id": "opt-D",
              "text": "Assign numbers 0, 1, 2, 3, 4 to successfully selling a policy to a customer and numbers 5, 6, 7, 8, 9 to failing to sell a policy to a customer."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-74eb60f86d0c6e24",
          "text": "The midterm scores for a statistics course were approximately normally distributed with a mean of 52 points and a standard deviation of 4 points. The final exam scores were approximately normally distributed with a mean of 112 points and a standard deviation of 10 points. One student had a score of 58 points on the midterm. If she had the same standardized score (z-score) on the final exam, what must her score have been?",
          "options": [
            {
              "id": "opt-A",
              "text": "15 points"
            },
            {
              "id": "opt-B",
              "text": "58 points"
            },
            {
              "id": "opt-C",
              "text": "118 points"
            },
            {
              "id": "opt-D",
              "text": "127 points"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-b9c98ac223245a5a",
          "text": "The sampling distribution of the sample mean is close to the normal distribution",
          "options": [
            {
              "id": "opt-A",
              "text": "only if both the original population has a normal distribution and n is large."
            },
            {
              "id": "opt-B",
              "text": "if the standard deviation of the original population is known."
            },
            {
              "id": "opt-C",
              "text": "if n is large, no matter what the distribution of the original population."
            },
            {
              "id": "opt-D",
              "text": "no matter what the value of n or what the distribution of the original population."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-3ccdab189b2dc463",
          "text": "Suppose H0: p = 0.6, and the power of the test for Ha: p = 0.7 is 0.8. Which of the following is a valid conclusion?",
          "options": [
            {
              "id": "opt-A",
              "text": "The probability of committing a Type I error is 0.1."
            },
            {
              "id": "opt-B",
              "text": "If Ha is true, the probability of failing to reject H0 is 0.2."
            },
            {
              "id": "opt-C",
              "text": "The probability of committing a Type II error is 0.3."
            },
            {
              "id": "opt-D",
              "text": "All of the above are valid conclusions."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-cf2202ff3801f2c7",
          "text": "In one metropolitan region, technical writers have an annual salary that is approximately normally distributed with a mean of $55,800. The first quartile of salaries is $48,815. What is the standard deviation?",
          "options": [
            {
              "id": "opt-A",
              "text": "$6,984"
            },
            {
              "id": "opt-B",
              "text": "$10,356"
            },
            {
              "id": "opt-C",
              "text": "$10,476"
            },
            {
              "id": "opt-D",
              "text": "$13,968"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-e194841a81140ab5",
          "text": "The amount of rainfall per month in a certain city is approximately normally distributed, with a mean of six inches and a standard deviation of 1.6 inches. Which of the following is the highest amount of rainfall, in inches, this city could have this month for the month to be among the 10percent driest months the city has seen?",
          "options": [
            {
              "id": "opt-A",
              "text": "8.05"
            },
            {
              "id": "opt-B",
              "text": "7.6"
            },
            {
              "id": "opt-C",
              "text": "3.95"
            },
            {
              "id": "opt-D",
              "text": "3.37"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-8ca2f7b919cc6309",
          "text": "Which of the following is most useful in establishing cause-and-effect relationships?",
          "options": [
            {
              "id": "opt-A",
              "text": "A complete census"
            },
            {
              "id": "opt-B",
              "text": "A least squares regression line showing high correlation"
            },
            {
              "id": "opt-C",
              "text": "A simple random sample (SRS)"
            },
            {
              "id": "opt-D",
              "text": "An experiment"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-29f75b7156357ca0",
          "text": "A sports talk show asks people to call in and give their opinion of the officiating in the local basketball team's most recent loss. What will most likely be the typical reaction?",
          "options": [
            {
              "id": "opt-A",
              "text": "They will most likely feel that the officiating could have been better, but that it was the team's poor play, not the officiating, that was primarily responsible for the loss."
            },
            {
              "id": "opt-B",
              "text": "They would most likely call for the team to get some new players to replace the current ones."
            },
            {
              "id": "opt-C",
              "text": "The team probably wouldn't have lost if the officials had been doing their job."
            },
            {
              "id": "opt-D",
              "text": "Because the team had been foul-plagued all year, the callers would most likely support the officials."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-b2df47a9dd419093",
          "text": "Alfred and Ben don't know each other but are each considering asking the lovely Charlene to the school prom. The probability that at least one of them will ask her is 0.72. The probability that they both ask her is 0.18. The probability that Alfred asks her is 0.6. What is the probability that Ben asks Charlene to the prom?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.78"
            },
            {
              "id": "opt-B",
              "text": "0.3"
            },
            {
              "id": "opt-C",
              "text": "0.24"
            },
            {
              "id": "opt-D",
              "text": "0.48"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-0c32a2d126ed64c0",
          "text": "A random sample of 25 men and a separate random sample of 25 women are selected to answer questions about attitudes toward abortion. The answers were categorized as \"pro-life\" or \"pro-choice.\" Which of the following is the proper null hypothesis for this situation?",
          "options": [
            {
              "id": "opt-A",
              "text": "The variables \"gender\" and \"attitude toward abortion\" are related."
            },
            {
              "id": "opt-B",
              "text": "The proportion of \"pro-life\" men is the same as the proportion of \"pro-life\" women."
            },
            {
              "id": "opt-C",
              "text": "The proportion of \"pro-life\" men is related to the proportion of \"pro-life\" women."
            },
            {
              "id": "opt-D",
              "text": "The proportion of \"pro-choice\" men is the same as the proportion of \"pro-life\" women."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-92608bc278442d8c",
          "text": "A 2008 survey of 500 households concluded that 82% of the population uses grocery coupons. Which of the following best describes what is meant by the poll having a margin of error of 3%?",
          "options": [
            {
              "id": "opt-A",
              "text": "Three percent of those surveyed refused to participate in the poll."
            },
            {
              "id": "opt-B",
              "text": "It would not be unexpected for 3% of the population to begin using coupons or stop using coupons."
            },
            {
              "id": "opt-C",
              "text": "Between 395 and 425 of the 500 households surveyed responded that they used grocery coupons."
            },
            {
              "id": "opt-D",
              "text": "It is likely that between 79% and 85% of the population use grocery coupons."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-64cfd3437ef726ea",
          "text": "A hypothesis test is set up so that P(rejecting H0 when H0 is true) = 0.05 and P(failing to reject H0 when H0 is false) = 0.26. What is the power of the test?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.26"
            },
            {
              "id": "opt-B",
              "text": "0.05"
            },
            {
              "id": "opt-C",
              "text": "0.95"
            },
            {
              "id": "opt-D",
              "text": "0.74"
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    },
    {
      "id": "masters-statistics-mmlu-u1-external-l12",
      "title": "Statistics — Quiz 12",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-c0a39602b3822787",
          "text": "For a class project, Charlotte recorded the heights of all 28 students in her class and calculated several statistics. She then realized she made an error recording the height of the tallest person in the class. She correctly had him listed as the tallest, but needed to add two inches to his recorded height to correct it. Which of these measures of spread must remain unchanged?",
          "options": [
            {
              "id": "opt-A",
              "text": "Mean absolute deviation"
            },
            {
              "id": "opt-B",
              "text": "Standard deviation"
            },
            {
              "id": "opt-C",
              "text": "Variance"
            },
            {
              "id": "opt-D",
              "text": "Interquartile range"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-5173a54c833f25e8",
          "text": "The main purpose of blocking in an experiment is to:",
          "options": [
            {
              "id": "opt-A",
              "text": "reduce bias."
            },
            {
              "id": "opt-B",
              "text": "reduce confounding."
            },
            {
              "id": "opt-C",
              "text": "reduce variation within treatments."
            },
            {
              "id": "opt-D",
              "text": "reduce variation between treatments."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-07b6e05403a293a9",
          "text": "A manufacturer of motor oil is interested in testing the effects of a newly developed additive on the lifespan of an engine. Twenty-five different engine types are selected at random and each one is tested using oil with the additive and oil without the additive. What type of analysis will yield the most useful information?",
          "options": [
            {
              "id": "opt-A",
              "text": "Matched pairs comparison of population proportions"
            },
            {
              "id": "opt-B",
              "text": "Matched pairs comparison of population means"
            },
            {
              "id": "opt-C",
              "text": "Independent samples comparison of population proportions"
            },
            {
              "id": "opt-D",
              "text": "Independent samples comparison of population means"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-e05f37709ee9b64a",
          "text": "To determine the average cost of running for a congressional seat, a simple random sample of 50 politicians is chosen and the politicians' records examined. The cost figures show a mean of $125,000 with a standard deviation of $32,000. Which of the following is the best interpretation of a 90% confidence interval estimate for the average cost of running for office?",
          "options": [
            {
              "id": "opt-A",
              "text": "90% of politicians running for a congressional seat spend between $117,500 and $132,500."
            },
            {
              "id": "opt-B",
              "text": "90% of politicians running for a congressional seat spend a mean dollar amount that is between $117,500 and $132,500."
            },
            {
              "id": "opt-C",
              "text": "We are 90% confident that politicians running for a congressional seat spend between $117,500 and $132,500."
            },
            {
              "id": "opt-D",
              "text": "We are 90% confident that politicians running for a congressional seat spend a mean dollar amount between $117,500 and $132,500."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-65d11252383d2b9f",
          "text": "A filling machine puts an average of four ounces of coffee in jars, with a standard deviation of 0.25 ounces. Forty jars filled by this machine are selected at random. What is the probability that the mean amount per jar filled in the sampled jars is less than 3.9 ounces?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.0057"
            },
            {
              "id": "opt-B",
              "text": "0.0225"
            },
            {
              "id": "opt-C",
              "text": "0.025"
            },
            {
              "id": "opt-D",
              "text": "0.05"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-416bb8906474b473",
          "text": "A town has one high school, which buses students from urban, suburban, and rural communities. Which of the following samples is recommended in studying attitudes toward tracking of students in honors, regular, and below-grade classes?",
          "options": [
            {
              "id": "opt-A",
              "text": "Convenience sample"
            },
            {
              "id": "opt-B",
              "text": "Simple random sample (SRS)"
            },
            {
              "id": "opt-C",
              "text": "Stratified sample"
            },
            {
              "id": "opt-D",
              "text": "Systematic sample"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-fd34590827a86ace",
          "text": "A shipment of resistors have an average resistance of 200 ohms with a standard deviation of 5 ohms, and the resistances are normally distributed. Suppose a randomly chosen resistor has a resistance under 194 ohms. What is the probability that its resistance is greater than 188 ohms?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.07"
            },
            {
              "id": "opt-B",
              "text": "0.12"
            },
            {
              "id": "opt-C",
              "text": "0.50"
            },
            {
              "id": "opt-D",
              "text": "0.93"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-ba3b9d2e1659194e",
          "text": "A major polling organization wants to predict the outcome of an upcoming national election (in terms of the proportion of voters who will vote for each candidate). They intend to use a 95% confidence interval with margin of error of no more than 2.5%. What is the minimum sample size needed to accomplish this goal?",
          "options": [
            {
              "id": "opt-A",
              "text": "1536"
            },
            {
              "id": "opt-B",
              "text": "39"
            },
            {
              "id": "opt-C",
              "text": "1537"
            },
            {
              "id": "opt-D",
              "text": "40"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-a6e8b9dad0beb3b8",
          "text": "Given that the sample has a standard deviation of zero, which of the following is a true statement?",
          "options": [
            {
              "id": "opt-A",
              "text": "The standard deviation of the population is also zero."
            },
            {
              "id": "opt-B",
              "text": "The sample mean and sample median are equal."
            },
            {
              "id": "opt-C",
              "text": "The sample may have outliers."
            },
            {
              "id": "opt-D",
              "text": "The population has a symmetric distribution."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-bc5ef0c93f760e45",
          "text": "The number of customers served per day by a large department store is normally distributed, with a mean of 3,250 customers and a standard deviation of 320. Find the range of customers served on the middle 50 percent of days.",
          "options": [
            {
              "id": "opt-A",
              "text": "(3,034, 3,466)"
            },
            {
              "id": "opt-B",
              "text": "(2,930, 3,570)"
            },
            {
              "id": "opt-C",
              "text": "(2,610, 3,890)"
            },
            {
              "id": "opt-D",
              "text": "(2,450, 4,050)"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-d2318ea78281372e",
          "text": "Suppose that 54% of the graduates from your high school go on to 4-year colleges, 20% go on to 2-year colleges, 19% find employment, and the remaining 7% search for a job. If a randomly selected student is not going on to a 2-year college, what is the probability she will be going on to a 4-year college?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.460"
            },
            {
              "id": "opt-B",
              "text": "0.540"
            },
            {
              "id": "opt-C",
              "text": "0.630"
            },
            {
              "id": "opt-D",
              "text": "0.675"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-0e60cc10090c49d3",
          "text": "The Department of Health plans to test the lead level in a specific park. Because a high lead level is harmful to children, the park will be closed if the lead level exceeds the allowed limit. The department randomly selects several locations in the park, gets soil samples from those locations, and tests the samples for their lead levels. Which of the following decisions would result from the type I error?",
          "options": [
            {
              "id": "opt-A",
              "text": "Closing the park when the lead levels are within the allowed limit"
            },
            {
              "id": "opt-B",
              "text": "Keeping the park open when the lead levels are in excess of the allowed limit"
            },
            {
              "id": "opt-C",
              "text": "Closing the park when the lead levels are in excess of the allowed limit"
            },
            {
              "id": "opt-D",
              "text": "Keeping the park open when the lead levels are within the allowed limit"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-eec4cfbdafabb4ee",
          "text": "For a class project, a student wants to see if boys and girls at their large high school differ in the number of contacts they have stored in their phone. The student conducts a survey of 50 randomly sampled boys and 40 randomly selected girls, and asks them to report the number of contacts. Which of the following is true about this situation?",
          "options": [
            {
              "id": "opt-A",
              "text": "Because the population standard deviations are not known and conditions are met, the student shoulduse a two-sample t-test."
            },
            {
              "id": "opt-B",
              "text": "Because the sample sizes are different, the student should notuse a two-sample t-test."
            },
            {
              "id": "opt-C",
              "text": "Because the sample sizes are both greater than 30, the student should notuse a two-sample t-test."
            },
            {
              "id": "opt-D",
              "text": "Because the shape of the population distribution is not known, the student should notuse a two-sample t-test."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-c7426687f53311f3",
          "text": "The probability is 0.2 that a value selected at random from a normal distribution with mean 600 and standard deviation 15 will be above what number?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.84"
            },
            {
              "id": "opt-B",
              "text": "603.8"
            },
            {
              "id": "opt-C",
              "text": "612.6"
            },
            {
              "id": "opt-D",
              "text": "587.4"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-5461dd7174d21339",
          "text": "In a group of 10 scores, the largest score is increased by 40 points. What will happen to the mean?",
          "options": [
            {
              "id": "opt-A",
              "text": "It will remain the same."
            },
            {
              "id": "opt-B",
              "text": "It will increase by 4 points."
            },
            {
              "id": "opt-C",
              "text": "It will increase by 10 points."
            },
            {
              "id": "opt-D",
              "text": "It will increase by 40 points."
            }
          ],
          "correctOptionId": "opt-B"
        }
      ]
    },
    {
      "id": "masters-statistics-mmlu-u1-external-l13",
      "title": "Statistics — Quiz 13",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-3df35ce56536d85c",
          "text": "The distribution of salaries of a county school system with 4,752 employees is known to be right skewed, with the superintendent’s salary an outlier on the higher side. A random sample of 20 employees was taken and their salaries recorded. A 95 percent t-confidence interval for the mean salary of the county school system employees is ($15,360, $32,470). The t-confidence interval is not appropriate in this situation because",
          "options": [
            {
              "id": "opt-A",
              "text": "the sample size is too small compared to the number of employees in the system to give a fair representation"
            },
            {
              "id": "opt-B",
              "text": "the skewed salary distribution tells us that assumption of normality of the sampled population will not be satisfied"
            },
            {
              "id": "opt-C",
              "text": "the population standard deviation of the salaries of employees of this county school system is not known"
            },
            {
              "id": "opt-D",
              "text": "the teacher salaries are not negotiable, but the superintendent’s salary is negotiable, so the superintendent’s salary should be excluded from the population sampled"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-1432c95f3f0f021e",
          "text": "Assume that the masses of chicken eggs are normally distributed with a mean of 45 g and a standard deviation of 4 g. What mass of egg would be the 25th percentile of the masses of all the eggs?",
          "options": [
            {
              "id": "opt-A",
              "text": "42.2 g"
            },
            {
              "id": "opt-B",
              "text": "42.3 g"
            },
            {
              "id": "opt-C",
              "text": "42.4 g"
            },
            {
              "id": "opt-D",
              "text": "42.5 g"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-6193d610929653ab",
          "text": "A recent poll reported that 43% of Americans approve of the job the president is doing, with a margin of sampling error of ±3.2% at a 95% level of confidence. Which of these correctly interprets that margin of error?",
          "options": [
            {
              "id": "opt-A",
              "text": "There is a 3.2% percent chance that the proportion of all Americans who approve of the job the president is doing is not 43%."
            },
            {
              "id": "opt-B",
              "text": "There is a 95% chance that the proportion of all Americans who approve of the job the president is doing is 43%."
            },
            {
              "id": "opt-C",
              "text": "About 95% of polls conducted in this way will find that between 39.8% and 46.2% of those sampled approve of the job the president is doing."
            },
            {
              "id": "opt-D",
              "text": "About 95% of polls conducted in this way will give a sample proportion within 3.2 percentage points of the actual proportion of all Americans who approve of the job the president is doing."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-cea3c0d6d73efe11",
          "text": "What is the probability of a Type II error when a hypothesis test is being conducted at the 10% significance level (α = 0.10)?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.05"
            },
            {
              "id": "opt-B",
              "text": "0.10"
            },
            {
              "id": "opt-C",
              "text": "0.90"
            },
            {
              "id": "opt-D",
              "text": "There is insufficient information to answer this question."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-2c23a9994d636efb",
          "text": "In comparing the life expectancies of two models of refrigerators, the average years before complete breakdown of 10 model A refrigerators is compared with that of 15 model B refrigerators. The 90% confidence interval estimate of the difference is (6, 12). Which of the following is the most reasonable conclusion?",
          "options": [
            {
              "id": "opt-A",
              "text": "The mean life expectancy of one model is twice that of the other."
            },
            {
              "id": "opt-B",
              "text": "The mean life expectancy of one model is 6 years, while the mean life expectancy of the other is 12 years."
            },
            {
              "id": "opt-C",
              "text": "The probability that the life expectancies are different is 0.90."
            },
            {
              "id": "opt-D",
              "text": "We should be 90% confident that the difference in life expectancies is between 6 and 12 years."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-2c25d76f4de7d432",
          "text": "A medicine is known to produce side effects in one in five patients taking it. Suppose a doctor prescribes the medicine to four unrelated patients. What is the probability that none of the patients will develop side effects?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.8"
            },
            {
              "id": "opt-B",
              "text": "0.4096"
            },
            {
              "id": "opt-C",
              "text": "0.25"
            },
            {
              "id": "opt-D",
              "text": "0.2"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-2abc82a8af7786bc",
          "text": "Which of the following is notan advantage of stratified random sampling over simple random sampling?",
          "options": [
            {
              "id": "opt-A",
              "text": "When done correctly, a stratified random sample is less biased than a simple random sample."
            },
            {
              "id": "opt-B",
              "text": "When done correctly, a stratified random sampling process has less variability from sample to sample than a simple random sample."
            },
            {
              "id": "opt-C",
              "text": "When done correctly, a stratified random sample can provide, with a smaller sample size, an estimate that is just as reliable as that of a simple random sample with a larger sample size."
            },
            {
              "id": "opt-D",
              "text": "A stratified random sample provides information about each stratum in the population as well as an estimate for the population as a whole, and a simple random sample does not."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-fbda4cbc8e12eed4",
          "text": "In the casino game of roulette, there are 38 slots for a ball to drop into when it is rolled around the rim of a revolving wheel: 18 red, 18 black, and 2 green. What is the probability that the first time a ball drops into the red slot is on the 8th trial (in other words, suppose you are betting on red every time-what is the probability of losing 7 straight times before you win the first time)?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.0278"
            },
            {
              "id": "opt-B",
              "text": "0.0112"
            },
            {
              "id": "opt-C",
              "text": "0.0053"
            },
            {
              "id": "opt-D",
              "text": "0.0101"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-d2327bac4e39b653",
          "text": "A talk show host recently reported that in response to his on-air question, 82% of the more than 2500 e-mail messages received through his publicized address supported the death penalty for anyone convicted of selling drugs to children. What does this show?",
          "options": [
            {
              "id": "opt-A",
              "text": "The survey is meaningless because of voluntary response bias."
            },
            {
              "id": "opt-B",
              "text": "No meaningful conclusion is possible without knowing something more about the characteristics of his listeners."
            },
            {
              "id": "opt-C",
              "text": "The survey would have been more meaningful if he had picked a random sample of the 2500 listeners who responded."
            },
            {
              "id": "opt-D",
              "text": "The survey would have been more meaningful if he had used a control group."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-70a532b6c63be5ac",
          "text": "To determine the average number of children living in single-family homes, a researcher picks a simple random sample of 50 such homes. However, even after one follow-up visit the interviewer is unable to make contact with anyone in 8 of these homes. Concerned about nonresponse bias, the researcher picks another simple random sample and instructs the interviewer to keep trying until contact is made with someone in a total of 50 homes. The average number of children is determined to be 1.73. Is this estimate probably too low or too high?",
          "options": [
            {
              "id": "opt-A",
              "text": "Too low, because of undercoverage bias."
            },
            {
              "id": "opt-B",
              "text": "Too low, because convenience samples overestimate average results."
            },
            {
              "id": "opt-C",
              "text": "Too high, because of undercoverage bias."
            },
            {
              "id": "opt-D",
              "text": "Too high, because convenience samples overestimate average results."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-a39afcd45ab1cbf9",
          "text": "If all the values of a data set are the same, all of the following must equal zero except for which one?",
          "options": [
            {
              "id": "opt-A",
              "text": "Mean"
            },
            {
              "id": "opt-B",
              "text": "Standard deviation"
            },
            {
              "id": "opt-C",
              "text": "Variance"
            },
            {
              "id": "opt-D",
              "text": "Range"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-fd124517da9a95c1",
          "text": "A university sent out a survey to a random sample of 120 recent graduates to see how those graduates feel about the education they received. Thirty-two of the graduates did not respond to the survey. Which of these would be the best way to proceed?",
          "options": [
            {
              "id": "opt-A",
              "text": "Use the 88 who did respond, using 88 as the sample size in the analysis."
            },
            {
              "id": "opt-B",
              "text": "Use the 88 who did respond, using 120 as the sample size in the analysis."
            },
            {
              "id": "opt-C",
              "text": "Attempt to contact the 32 who did not respond and get the information from them."
            },
            {
              "id": "opt-D",
              "text": "Select 32 more graduates at random and use them to replace the nonresponders."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-2ba2927f5a1cabab",
          "text": "Given the probabilities P(A) = 0.3 and P(B) = 0.2, what is the probability of the union P(A ∪ B) if A and B are mutually exclusive? If A and B are independent? If B is a subset of A?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.44, 0.5, 0.2"
            },
            {
              "id": "opt-B",
              "text": ".44, 0.5, 0.3"
            },
            {
              "id": "opt-C",
              "text": ".5, 0.44, 0.2"
            },
            {
              "id": "opt-D",
              "text": ".5, 0.44, 0.3"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-e27f9d9d89933585",
          "text": "Which of the following is true about any discrete probability distribution of a random variable X?",
          "options": [
            {
              "id": "opt-A",
              "text": "The expected value of X = np."
            },
            {
              "id": "opt-B",
              "text": "The sum of all possible values of X is equal to one."
            },
            {
              "id": "opt-C",
              "text": "The probabilities of all possible values of X must add up to one."
            },
            {
              "id": "opt-D",
              "text": "The probability distribution is bell-shaped and symmetric."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-ea5b3fde0559ea9f",
          "text": "Which among the following would result in the narrowest confidence interval?",
          "options": [
            {
              "id": "opt-A",
              "text": "Small sample size and 95% confidence"
            },
            {
              "id": "opt-B",
              "text": "Small sample size and 99% confidence"
            },
            {
              "id": "opt-C",
              "text": "Large sample size and 95% confidence"
            },
            {
              "id": "opt-D",
              "text": "Large sample size and 99% confidence"
            }
          ],
          "correctOptionId": "opt-C"
        }
      ]
    },
    {
      "id": "masters-statistics-mmlu-u1-external-l14",
      "title": "Statistics — Quiz 14",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-14d8416e8bc010be",
          "text": "The correlation between height in inches and weight in pounds for a particular class is 0.65. If the heights are converted from inches to centimeters, what will the correlation be? (1 in. = 2.54 cm)",
          "options": [
            {
              "id": "opt-A",
              "text": "-0.65"
            },
            {
              "id": "opt-B",
              "text": "-0.26"
            },
            {
              "id": "opt-C",
              "text": "0.1"
            },
            {
              "id": "opt-D",
              "text": "0.65"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-550d24ed6621653c",
          "text": "The number of days it takes to build a new house has a variance of 386. A sample of 40 new homes shows an average building time of 83 days. With what confidence can we assert that the average building time for a new house is between 80 and 90 days?",
          "options": [
            {
              "id": "opt-A",
              "text": "15.4%"
            },
            {
              "id": "opt-B",
              "text": "17.8%"
            },
            {
              "id": "opt-C",
              "text": "20.0%"
            },
            {
              "id": "opt-D",
              "text": "82.1%"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-64b3b5a9de378f7d",
          "text": "A significance test of the hypothesis H0: p= 0.3 against the alternative HA: p> 0.3 found a value of = 0.35 for a random sample of size 95. What is the P-value of this test?",
          "options": [
            {
              "id": "opt-A",
              "text": "1.06"
            },
            {
              "id": "opt-B",
              "text": "0.1446"
            },
            {
              "id": "opt-C",
              "text": "0.2275"
            },
            {
              "id": "opt-D",
              "text": "0.8554"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-40eb5030ff01608c",
          "text": "Two events A and B each have a nonzero probability. If A and B are independent, which of the following statements is true?",
          "options": [
            {
              "id": "opt-A",
              "text": "P(A and B) = P(A) · P(B)"
            },
            {
              "id": "opt-B",
              "text": "A and B may or may not be mutually exclusive."
            },
            {
              "id": "opt-C",
              "text": "A and B must be mutually exclusive."
            },
            {
              "id": "opt-D",
              "text": "P(A| B) = P(B| A)"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-db9cf493da5ec9fe",
          "text": "A teacher believes that giving her students a practice quiz every week will motivate them to study harder, leading to a greater overall understanding of the course material. She tries this technique for a year, and everyone in the class achieves a grade of at least C. Is this an experiment or an observational study?",
          "options": [
            {
              "id": "opt-A",
              "text": "An experiment, but with no reasonable conclusion possible about cause and effect"
            },
            {
              "id": "opt-B",
              "text": "An experiment, thus making cause and effect a reasonable conclusion"
            },
            {
              "id": "opt-C",
              "text": "An observational study, because there was no use of a control group"
            },
            {
              "id": "opt-D",
              "text": "An observational study, but a poorly designed one because randomization was not used"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-9e061f9dc8830a20",
          "text": "Which of these is the best description of a P-value?",
          "options": [
            {
              "id": "opt-A",
              "text": "The probability of making a Type I error."
            },
            {
              "id": "opt-B",
              "text": "The probability of making a Type II error."
            },
            {
              "id": "opt-C",
              "text": "The probability of rejecting the null hypothesis if it is, in fact, false."
            },
            {
              "id": "opt-D",
              "text": "The probability of getting a test statistic at least as extreme as the observed test statistic, if the null hypothesis is true."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-d6500f262f9756a5",
          "text": "The financial aid office at a state university conducts a study to determine the total student costs per semester. All students are charged $4500 for tuition. The mean cost for books is $350 with a standard deviation of $65. The mean outlay for room and board is $2800 with a standard deviation of $380. The mean personal expenditure is $675 with a standard deviation of $125. Assuming independence among categories, what is the standard deviation of the total student costs?",
          "options": [
            {
              "id": "opt-A",
              "text": "$24"
            },
            {
              "id": "opt-B",
              "text": "$91"
            },
            {
              "id": "opt-C",
              "text": "$190"
            },
            {
              "id": "opt-D",
              "text": "$405"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-a49f3aeb7ae43ce0",
          "text": "Self-efficacy (the belief that one has control over one's situation) as it related to job satisfaction was studied. When a group of teachers rated their ability to control their situation and their satisfaction with their job, the two variables had a correlation of 0.30. Which statement follows from this correlation?",
          "options": [
            {
              "id": "opt-A",
              "text": "If you want teachers to be happy with their job, give them more control over their situation."
            },
            {
              "id": "opt-B",
              "text": "If you want teachers to take more control over their situation, make them happier at their jobs."
            },
            {
              "id": "opt-C",
              "text": "Teachers in the study who were more satisfied with their job were less confident in their ability to control their situation."
            },
            {
              "id": "opt-D",
              "text": "9% of the variability in job satisfaction can be explained by the linear model with self-efficacy as a predictor."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-421602b3c7bafdb8",
          "text": "Suppose X and Y are random variables with E(X) = 312, var(X) = 6, E(X) = 307, and var(Y) = 8. What are the expected value and variance of the random variable X + Y?",
          "options": [
            {
              "id": "opt-A",
              "text": "E(X + Y) = 619, var(X + Y) = 7"
            },
            {
              "id": "opt-B",
              "text": "E(X + Y) = 619, var(X + Y) = 10"
            },
            {
              "id": "opt-C",
              "text": "E(X + Y) = 619, var(X + Y) = 14"
            },
            {
              "id": "opt-D",
              "text": "There is insufficient information to answer this question."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-d8e15c890df627d5",
          "text": "Consider the two sets X = {10, 30, 45, 50, 55, 70, 90} and Y = {10, 30, 35, 50, 65, 70, 90}. Which of the following is false?",
          "options": [
            {
              "id": "opt-A",
              "text": "The sets have identical medians."
            },
            {
              "id": "opt-B",
              "text": "The sets have identical means."
            },
            {
              "id": "opt-C",
              "text": "The sets have identical ranges."
            },
            {
              "id": "opt-D",
              "text": "None of the above are false."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-cf7749a900c0b10e",
          "text": "A researcher is hoping to find a predictive linear relationship between the explanatory and response variables in her study. Accordingly, as part of her analysis she plans to generate a 95% confidence interval for the slope of the regression line for the two variables. The interval is determined to be (0.45, 0.80). Which of the following is (are) true? (Assume conditions for inference are met.) I. She has good evidence of a linear relationship between the variables. II. It is likely that there is a non-zero correlation (r) between the two variables. III. It is likely that the true slope of the regression line is 0.",
          "options": [
            {
              "id": "opt-A",
              "text": "I and II only"
            },
            {
              "id": "opt-B",
              "text": "I and III only"
            },
            {
              "id": "opt-C",
              "text": "II and III only"
            },
            {
              "id": "opt-D",
              "text": "I only"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-396fba696d3b2947",
          "text": "A student organization at a university is interested in estimating the proportion of students in favor of showing movies biweekly instead of monthly. How many students should be sampled to get a 90 percent confidence interval with a width of at most 0.08?",
          "options": [
            {
              "id": "opt-A",
              "text": "27"
            },
            {
              "id": "opt-B",
              "text": "64"
            },
            {
              "id": "opt-C",
              "text": "106"
            },
            {
              "id": "opt-D",
              "text": "423"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-831333dd7cb1703a",
          "text": "A correlation of 0.6 indicates that the percentage of variation in y that is explained by the variation in x is how many times the percentage indicated by a correlation of 0.3?",
          "options": [
            {
              "id": "opt-A",
              "text": "2"
            },
            {
              "id": "opt-B",
              "text": "3"
            },
            {
              "id": "opt-C",
              "text": "4"
            },
            {
              "id": "opt-D",
              "text": "6"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-4052e962904f611c",
          "text": "For which of the following is it appropriate to use a census?",
          "options": [
            {
              "id": "opt-A",
              "text": "A 95% confidence interval of mean height of teachers in a small town."
            },
            {
              "id": "opt-B",
              "text": "A 95% confidence interval of the proportion of students in a small town who are taking some AP class."
            },
            {
              "id": "opt-C",
              "text": "A two-tailed hypothesis test where the null hypothesis was that the mean expenditure on entertainment by male students at a high school is the same as that of female students."
            },
            {
              "id": "opt-D",
              "text": "None of the above."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-4d17a7319bcf43b3",
          "text": "Which of the following is the best description of the power of a significance test?",
          "options": [
            {
              "id": "opt-A",
              "text": "The probability that the null hypothesis is true."
            },
            {
              "id": "opt-B",
              "text": "The probability of getting a Type I error."
            },
            {
              "id": "opt-C",
              "text": "The probability of getting a Type II error."
            },
            {
              "id": "opt-D",
              "text": "The probability of rejecting the null hypothesis if it is, in fact, false."
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    },
    {
      "id": "masters-statistics-mmlu-u1-external-l15",
      "title": "Statistics — Quiz 15",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-fe2307259f3f5bc2",
          "text": "A drug company will conduct a randomized controlled study on the effectiveness of a new heart disease medication called Heartaid. Heartaid is more expensive than the currently used medication. The analysis will include a significance test with H0: Heartaid and the current medication are equally effective at preventing heart disease and HA: Heartaid is more effective than the current medication at preventing heart disease. Which of these would be a potential consequence of a Type II error?",
          "options": [
            {
              "id": "opt-A",
              "text": "Patients will spend more money on Heartaid, even though it is actually not any more effective than the current medication."
            },
            {
              "id": "opt-B",
              "text": "Doctors will begin to prescribe Heartaid to patients, even though it is actually not any more effective than the current medication."
            },
            {
              "id": "opt-C",
              "text": "Patients will continue to use the current medication, even though Heartaid is actually more effective."
            },
            {
              "id": "opt-D",
              "text": "Researchers will calculate the wrong P-value, making their advice to doctors invalid."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-57b4767a2821f945",
          "text": "Two classes take the same exam. Suppose a certain score is at the 40th percentile for the first class and at the 80th percentile for the second class. Which of the following is the most reasonable conclusion?",
          "options": [
            {
              "id": "opt-A",
              "text": "Students in the first class generally scored higher than students in the second class."
            },
            {
              "id": "opt-B",
              "text": "Students in the second class generally scored higher than students in the first class."
            },
            {
              "id": "opt-C",
              "text": "A score at the 20th percentile for the first class is at the 40th percentile for the second class."
            },
            {
              "id": "opt-D",
              "text": "A score at the 50th percentile for the first class is at the 90th percentile for the second class."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-84afe1c4858a5037",
          "text": "The mean thrust of a certain model jet engine is 9500 pounds. Concerned that a production process change might have lowered the thrust, an inspector tests a sample of units, calculating a mean of 9350 pounds with a z-score of -2.46 and a P-value of 0.0069. Which of the following is the most reasonable conclusion?",
          "options": [
            {
              "id": "opt-A",
              "text": "99.31% of the engines produced under the new process will have a thrust under 9350 pounds."
            },
            {
              "id": "opt-B",
              "text": "99.31% of the engines produced under the new process will have a thrust under 9500 pounds."
            },
            {
              "id": "opt-C",
              "text": "0.69% of the time an engine produced under the new process will have a thrust over 9500 pounds."
            },
            {
              "id": "opt-D",
              "text": "There is evidence to conclude that the new process is producing engines with a mean thrust under 9500 pounds."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-5633fb54c2797939",
          "text": "When the point (15,2) is included, the slope of regression line (y= a+ bx) is b= -0.54. The correlation is r= -0.82. When the point is removed, the new slope is -1.04 and the new correlation coefficient is -0.95. What name is given to a point whose removal has this kind of effect on statistical calculations?",
          "options": [
            {
              "id": "opt-A",
              "text": "Outlier"
            },
            {
              "id": "opt-B",
              "text": "Statistically significant point"
            },
            {
              "id": "opt-C",
              "text": "Point of discontinuity"
            },
            {
              "id": "opt-D",
              "text": "Influential point"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-c9c0f91ba9e2ecbf",
          "text": "What are the mean and standard deviation of a binomial experiment that occurs with probability of success 0.76 and is repeated 150 times?",
          "options": [
            {
              "id": "opt-A",
              "text": "114, 27.35"
            },
            {
              "id": "opt-B",
              "text": "100.5, 5.23"
            },
            {
              "id": "opt-C",
              "text": "114, 5.23"
            },
            {
              "id": "opt-D",
              "text": "The mean is 114, but there is not enough information given to determine the standard deviation."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-d2405adbd065dc10",
          "text": "Random samples of size n are drawn from a population. The mean of each sample is calculated, and the standard deviation of this set of sample means is found. Then the procedure is repeated, this time with samples of size 4n. How does the standard deviation of the second group compare with the standard deviation of the first group?",
          "options": [
            {
              "id": "opt-A",
              "text": "It will be the same."
            },
            {
              "id": "opt-B",
              "text": "It will be twice as large."
            },
            {
              "id": "opt-C",
              "text": "It will be four times as large."
            },
            {
              "id": "opt-D",
              "text": "It will be half as large."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-d3295a2e7b33c472",
          "text": "In sample surveys, what is meant by bias?",
          "options": [
            {
              "id": "opt-A",
              "text": "A systematic error in a sampling method that leads to an unrepresentative sample."
            },
            {
              "id": "opt-B",
              "text": "Prejudice, as in ethnic and gender-related studies."
            },
            {
              "id": "opt-C",
              "text": "Natural variability seen between samples."
            },
            {
              "id": "opt-D",
              "text": "Tendency for some distributions to be skewed."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-862cc7ffdebeb91e",
          "text": "Which of the following are examples of continuous data? I. The speed your car goes II. The number of outcomes of a binomial experiment III. The average temperature in San Francisco IV. The wingspan of a bird V. The jersey numbers of a football team",
          "options": [
            {
              "id": "opt-A",
              "text": "I, III, and IV only"
            },
            {
              "id": "opt-B",
              "text": "II and V only"
            },
            {
              "id": "opt-C",
              "text": "I, III, and V only"
            },
            {
              "id": "opt-D",
              "text": "II, III, and IV only"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-7757e9abdb62f6be",
          "text": "A local library has a scanner to detect library materials that have not been checked out. Each item has a chip somewhere inside. Upon checkout, the chip is deactivated so the scanner will not set off the alarm. The scanner has a 98% chance of detecting an active chip (meaning the material has not been checked out) and setting off the alarm. The scanner also has a 3% chance of sounding the alarm when someone passes through without an active chip. It is estimated that 0.5% of library customers actually try to leave the library with an active chip. What is the probability that, if the alarm sounds, the patron leaving the library has an item with an active chip?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.0049"
            },
            {
              "id": "opt-B",
              "text": "0.0348"
            },
            {
              "id": "opt-C",
              "text": "0.141"
            },
            {
              "id": "opt-D",
              "text": "0.97"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-84e8505acdb657b3",
          "text": "A skeptic decides to conduct an experiment in ESP in which a blindfolded subject calls out the color of a card dealt from a regular deck of cards (half the cards are red; the other half, black). One hundred cards are dealt from a well-shuffled pack, with each card being replaced after a deal. Using a 5 percent level of significance, what is the lowest number of cards that the subject needs to call out correctly in order to show that he is doing better than he would if he were simply guessing?",
          "options": [
            {
              "id": "opt-A",
              "text": "51"
            },
            {
              "id": "opt-B",
              "text": "59"
            },
            {
              "id": "opt-C",
              "text": "75"
            },
            {
              "id": "opt-D",
              "text": "95"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-6b9336edd7dbd221",
          "text": "A survey was conducted to determine the percentage of parents who would support raising the legal driving age to 18. The results were stated as 67% with a margin of error of ±3%. What is meant by ±3%?",
          "options": [
            {
              "id": "opt-A",
              "text": "Three percent of the population were not surveyed."
            },
            {
              "id": "opt-B",
              "text": "In the sample, the percentage of parents who would support raising the driving age is between 64% and 70%."
            },
            {
              "id": "opt-C",
              "text": "The percentage of the entire population of parents who would support raising the driving age is between 64% and 70%."
            },
            {
              "id": "opt-D",
              "text": "It is unlikely that the given sample proportion result could be obtained unless the true percentage was between 64% and 70%."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-061654677d6fdc6a",
          "text": "In basketball, an offensive rebound occurs when a player shoots and misses, and a player from the same team recovers the ball. For the 176 players on the roster for one season of professional men's basketball, the third quartile for the total number of offensive rebounds for one season was 143. If five players are selected at random (with replacement) from that season, what is the approximate probability that at least three of them had more than 143 rebounds that season?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.0127"
            },
            {
              "id": "opt-B",
              "text": "0.0879"
            },
            {
              "id": "opt-C",
              "text": "0.1035"
            },
            {
              "id": "opt-D",
              "text": "0.8965"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-1663bb40c99d4568",
          "text": "For which of these is a binomial probability model most reasonable?",
          "options": [
            {
              "id": "opt-A",
              "text": "The number of times, out of 10 attempts, that a particular child can throw a ball into a basket from six feet away"
            },
            {
              "id": "opt-B",
              "text": "The colors of the cars in the parking lot of a particular grocery store on a randomly selected Sunday"
            },
            {
              "id": "opt-C",
              "text": "The number of times that a randomly selected resident of California has visited a museum in the last 12 months"
            },
            {
              "id": "opt-D",
              "text": "The number of cards drawn from a well-shuffled deck until all four aces are found"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-e27b0b0282de5014",
          "text": "According to the central limit theorem, the sample mean X is approximately normally distributed",
          "options": [
            {
              "id": "opt-A",
              "text": "for a large sample, regardless of the distribution of random variable X"
            },
            {
              "id": "opt-B",
              "text": "for a large sample, provided the random variable X is normally distributed"
            },
            {
              "id": "opt-C",
              "text": "regardless of the sample size"
            },
            {
              "id": "opt-D",
              "text": "for a small sample, regardless of the distribution of random variable X"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-32d465a41ca83151",
          "text": "Jonathan obtained a score of 80 on a statistics exam, placing him at the 90th percentile. Suppose five points are added to everyone's score. Jonathan's new score will be at the",
          "options": [
            {
              "id": "opt-A",
              "text": "80th percentile."
            },
            {
              "id": "opt-B",
              "text": "85th percentile."
            },
            {
              "id": "opt-C",
              "text": "90th percentile."
            },
            {
              "id": "opt-D",
              "text": "95th percentile."
            }
          ],
          "correctOptionId": "opt-C"
        }
      ]
    },
    {
      "id": "masters-statistics-mmlu-u1-external-l16",
      "title": "Statistics — Quiz 16",
      "type": "quiz",
      "duration": 22,
      "questions": [
        {
          "id": "mmlu-719b84517a1b4dc7",
          "text": "For which of the following purposes would it be most unreasonable to use a census?",
          "options": [
            {
              "id": "opt-A",
              "text": "To determine the proportion of students with a learning disability in a small rural area high school"
            },
            {
              "id": "opt-B",
              "text": "To determine the proportion of red snappers with a high mercury level in the Gulf of Mexico"
            },
            {
              "id": "opt-C",
              "text": "To determine the difference between the proportion of engineering professors and the proportion of business professors in favor of the new teaching initiative at a large university"
            },
            {
              "id": "opt-D",
              "text": "To determine the mean wage earned by construction workers in a small town"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-68b7f52b9c0bbe97",
          "text": "A random sample of families was taken in order to estimate the relation between fertility and level of education (measured in number of years). A confidence interval needs to be constructed for the slope of the regression line. The social worker in charge of the project is debating whether to use a 90 percent or a 95 percent confidence interval. Which of the following statements about the length of these intervals is true?",
          "options": [
            {
              "id": "opt-A",
              "text": "The 95 percent confidence interval will be wider than the 90 percent confidence interval."
            },
            {
              "id": "opt-B",
              "text": "The 95 percent confidence interval will be narrower than the 90 percent confidence interval."
            },
            {
              "id": "opt-C",
              "text": "Both intervals will be of the same length, because they are computed from the same sample."
            },
            {
              "id": "opt-D",
              "text": "The length of the confidence interval will depend on the sample size, not on the confidence level."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-edb312f7fdc8f88b",
          "text": "A particular crop of one variety of onion has weights that are approximately normally distributed with mean 9.8 oz. and standard deviation 2.1 oz. How does an onion in the 28th percentile for weight compare to the mean?",
          "options": [
            {
              "id": "opt-A",
              "text": "1.22 ounces below the mean"
            },
            {
              "id": "opt-B",
              "text": "0.59 ounces below the mean"
            },
            {
              "id": "opt-C",
              "text": "0.59 ounces above the mean"
            },
            {
              "id": "opt-D",
              "text": "1.22 ounces above the mean"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-ccc3757fa9f65d83",
          "text": "A set consists of four numbers. The largest value is 200, and the range is 50. Which of the following statements is true?",
          "options": [
            {
              "id": "opt-A",
              "text": "The mean is less than 185."
            },
            {
              "id": "opt-B",
              "text": "The mean is greater than 165."
            },
            {
              "id": "opt-C",
              "text": "The median is less than 195."
            },
            {
              "id": "opt-D",
              "text": "The median is the mean of the second and third numbers if the set is arranged in ascending order."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-735762d53b686407",
          "text": "The number of leasable square feet of office space available in a city on any given day has a normal distribution with mean 640,000 square feet and standard deviation 18,000 square feet. What is the interquartile range for this distribution?",
          "options": [
            {
              "id": "opt-A",
              "text": "652,000 - 628,000"
            },
            {
              "id": "opt-B",
              "text": "658,000 - 622,000"
            },
            {
              "id": "opt-C",
              "text": "667,000 - 613,000"
            },
            {
              "id": "opt-D",
              "text": "676,000 - 604,000"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-27956b5ed65e3a68",
          "text": "A sample of size 35 is to be drawn from a large population. The sampling technique is such that every possible sample of size 35 that could be drawn from the population is equally likely. What name is given to this type of sample?",
          "options": [
            {
              "id": "opt-A",
              "text": "Systematic sample"
            },
            {
              "id": "opt-B",
              "text": "Cluster sample"
            },
            {
              "id": "opt-C",
              "text": "Voluntary response sample"
            },
            {
              "id": "opt-D",
              "text": "Simple random sample"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-578d56cb11034a70",
          "text": "In the correlation coefficient r = 0.78, what percentage of variation in y is explained by the linear regression model?",
          "options": [
            {
              "id": "opt-A",
              "text": "22%"
            },
            {
              "id": "opt-B",
              "text": "39%"
            },
            {
              "id": "opt-C",
              "text": "44%"
            },
            {
              "id": "opt-D",
              "text": "61%"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-09860c0cb7a31488",
          "text": "To conduct a survey of which long distance carriers are used in a particular locality, a researcher opens a telephone book to a random page, closes his eyes, puts his finger down on the page, and then calls the next 75 names. Which of the following is a correct statement?",
          "options": [
            {
              "id": "opt-A",
              "text": "The procedure results in a simple random sample."
            },
            {
              "id": "opt-B",
              "text": "While the survey design does incorporate chance, the procedure could easily result in selection bias."
            },
            {
              "id": "opt-C",
              "text": "This is an example of cluster sampling with 26 clusters."
            },
            {
              "id": "opt-D",
              "text": "This is an example of stratified sampling with 26 strata."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-42c805e7f3834899",
          "text": "The distribution of weights of 16-ounce bags of a particular brand of potato chips is approximately normal with a standard deviation of 0.28 ounce. How does the weight of a bag at the 40th percentile compare with the mean weight?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.40 ounce above the mean"
            },
            {
              "id": "opt-B",
              "text": "0.25 ounce above the mean"
            },
            {
              "id": "opt-C",
              "text": "0.07 ounce above the mean"
            },
            {
              "id": "opt-D",
              "text": "0.07 ounce below the mean"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-8eaf4b8369be563a",
          "text": "Suppose 4% of the population have a certain disease. A laboratory blood test gives a positive reading for 95% of people who have the disease and for 5% of people who do not have the disease. If a person tests positive, what is the probability the person has the disease?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.038"
            },
            {
              "id": "opt-B",
              "text": "0.086"
            },
            {
              "id": "opt-C",
              "text": "0.442"
            },
            {
              "id": "opt-D",
              "text": "0.558"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-77126943ead90179",
          "text": "Two variables, xand y, seem to be exponentially related. The natural logarithm of each yvalue is taken and the least-squares regression line of ln(y) on xis determined to be ln(y) = 3.2 + 0.42x. What is the predicted value of ywhen x= 7?",
          "options": [
            {
              "id": "opt-A",
              "text": "464.05"
            },
            {
              "id": "opt-B",
              "text": "1380384.27"
            },
            {
              "id": "opt-C",
              "text": "521.35"
            },
            {
              "id": "opt-D",
              "text": "6.14"
            }
          ],
          "correctOptionId": "opt-A"
        }
      ]
    }
  ],
  "tags": [
    "external-ai",
    "curriculum-import",
    "masters",
    "statistics-mmlu",
    "mmlu"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "external-1.0",
  "difficultyBand": "intermediate",
  "gradeBand": "college",
  "learningObjectives": [
    "Master key concepts in statistics",
    "Apply analytical reasoning to statistics problems",
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
      "questions": 236,
      "flashcards": 0,
      "chunks": 0
    },
    "importedAt": "2026-03-03T05:42:54.862Z",
    "totalLessons": 16,
    "overflow": 0
  },
  "metadata": {
    "generatedBy": "ingest-universal-curriculum.mjs",
    "importDate": "2026-03-03T05:42:54.862Z"
  }
};
