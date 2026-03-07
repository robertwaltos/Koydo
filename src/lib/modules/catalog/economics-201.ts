import type { LearningModule } from "@/lib/modules/types";

export const economics_201_Module: LearningModule = {
  "id": "economics-201",
  "title": "Macroeconomics and Policy",
  "description": "Explore how entire economies work — GDP, inflation, unemployment, monetary and fiscal policy. Understand the forces that drive recessions, recoveries, and long-run growth.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mba",
    "economics"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "learningObjectives": [
    "Measure economic output using Gross Domestic Product (GDP) and its components.",
    "Analyze the causes and costs of inflation and unemployment.",
    "Explain the phases of the business cycle: expansion, peak, recession, and trough.",
    "Describe how banks create money and the role of financial markets.",
    "Explain how central banks use monetary policy to manage the economy.",
    "Evaluate the tools of fiscal policy, including government spending and taxation.",
    "Utilize the Aggregate Demand/Aggregate Supply (AD/AS) model to analyze economic shocks.",
    "Identify the key drivers of long-run economic growth.",
    "Explain the principles of international trade and the function of exchange rates."
  ],
  "lessons": [
    {
      "id": "economics-201-l01",
      "title": "Measuring the Economy: GDP",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define GDP as the total market value of all final goods and services produced.",
        "Distinguish between nominal and real GDP.",
        "Identify the four components of GDP: C + I + G + NX."
      ],
      "chunks": [
        {
          "id": "economics-201-l01-c1",
          "title": "What Is GDP?",
          "content": "Gross Domestic Product (GDP) is a foundational economic indicator representing the total market value of all final goods and services produced within a country's borders over a specific period, typically a quarter or a year. It provides a comprehensive snapshot of a nation's economic activity and health. The term 'final' is critical; it excludes intermediate goods (like flour used in bread) to prevent double-counting, focusing instead on products sold to the end user. Economists calculate GDP using three approaches—expenditure, income, and production—which, in theory, all yield the same result, offering a robust measure of economic performance."
        },
        {
          "id": "economics-201-l01-c2",
          "title": "The Components of GDP",
          "content": "The expenditure approach to calculating GDP is summarized by the equation: GDP = C + I + G + NX. 'C' stands for Consumption, which encompasses all spending by households on goods and services and is the largest component in most economies. 'I' represents Investment, which includes business spending on capital equipment, structures, and changes in inventory, as well as household purchases of new housing. 'G' is Government Spending on goods and services, such as infrastructure and defense, but excludes transfer payments like Social Security. Finally, 'NX' denotes Net Exports, calculated as total exports minus total imports. A negative NX value indicates a trade deficit. Analyzing these components provides insight into the drivers of economic activity."
        },
        {
          "id": "economics-201-l01-c3",
          "title": "Nominal vs. Real GDP",
          "content": "Nominal GDP measures economic output using current market prices, meaning it can increase due to either a rise in production or a rise in prices (inflation). This can be misleading when assessing true economic growth. To isolate changes in output, economists use Real GDP, which is adjusted for inflation by valuing production at constant prices from a designated base year. The ratio of Nominal GDP to Real GDP (multiplied by 100) yields the GDP Deflator, a broad measure of the price level. For accurate year-over-year comparisons of economic performance, Real GDP is the superior metric as it reflects genuine changes in the volume of goods and services produced."
        }
      ],
      "flashcards": [
        {
          "id": "economics-201-l01-f1",
          "front": "Gross Domestic Product (GDP)",
          "back": "The total market value of all final goods and services produced within a country in a given period."
        },
        {
          "id": "economics-201-l01-f2",
          "front": "GDP Expenditure Formula",
          "back": "C + I + G + NX (Consumption + Investment + Government Spending + Net Exports)"
        },
        {
          "id": "economics-201-l01-f3",
          "front": "Real vs. Nominal GDP",
          "back": "Real GDP is adjusted for inflation (uses constant prices), while Nominal GDP uses current prices. Real GDP reflects true output growth."
        }
      ],
      "learningAids": [
        {
          "id": "economics-201-l01-a1",
          "type": "image",
          "title": "GDP Components Chart",
          "content": "A pie chart visualizing the relative shares of Consumption (C), Investment (I), Government Spending (G), and Net Exports (NX) in a recent year for the US economy."
        }
      ]
    },
    {
      "id": "economics-201-l02",
      "title": "Inflation and Unemployment",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Define inflation and calculate it using the Consumer Price Index (CPI).",
        "Distinguish between frictional, structural, and cyclical unemployment.",
        "Explain the concept of the natural rate of unemployment."
      ],
      "chunks": [
        {
          "id": "economics-201-l02-c1",
          "title": "Measuring Inflation with CPI",
          "content": "Inflation is a sustained increase in the general price level of goods and services in an economy, eroding the purchasing power of currency. The most common measure of inflation is the Consumer Price Index (CPI), which tracks the average change in prices paid by urban consumers for a representative basket of goods and services. The inflation rate is calculated as the percentage change in the CPI from one period to the next. While high inflation can be destabilizing, most economists consider a moderate rate (around 2%) to be a sign of a healthy, growing economy. Conversely, deflation—a sustained decrease in the price level—can be harmful by discouraging spending and increasing the real burden of debt."
        },
        {
          "id": "economics-201-l02-c2",
          "title": "Types of Unemployment",
          "content": "Unemployment is categorized into three main types. Frictional unemployment occurs when workers are temporarily between jobs or searching for their first one; it is a natural part of a dynamic labor market. Structural unemployment arises from a mismatch between the skills workers possess and the skills employers demand, often due to technological shifts or changes in industry structure. Cyclical unemployment is tied to the business cycle, rising during economic downturns (recessions) and falling during expansions. The sum of frictional and structural unemployment constitutes the natural rate of unemployment, the baseline level that persists even in a healthy economy."
        },
        {
          "id": "economics-201-l02-c3",
          "title": "The Costs of Economic Instability",
          "content": "Both high inflation and high unemployment impose significant costs on society. Unanticipated inflation arbitrarily redistributes wealth, harms those on fixed incomes, and creates uncertainty that can deter investment. Unemployment represents a loss of potential output for the economy (a lower GDP) and causes financial and psychological hardship for individuals. The Phillips Curve illustrates a short-run trade-off between inflation and unemployment: policies designed to lower unemployment tend to increase inflation, and vice versa. This presents a key challenge for policymakers aiming to achieve the dual mandate of price stability and maximum employment."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-201-l02-a1",
          "title": "Categorize Unemployment Scenarios",
          "type": "sorting_buckets",
          "buckets": [
            "Frictional Unemployment",
            "Structural Unemployment",
            "Cyclical Unemployment"
          ],
          "items": [
            {
              "text": "A recent college graduate is searching for their first engineering job.",
              "bucket": "Frictional Unemployment"
            },
            {
              "text": "A factory worker is laid off after their job is replaced by an automated system.",
              "bucket": "Structural Unemployment"
            },
            {
              "text": "A construction worker loses their job during a major housing market downturn.",
              "bucket": "Cyclical Unemployment"
            },
            {
              "text": "An accountant quits their job to move to a new city and look for a similar position.",
              "bucket": "Frictional Unemployment"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-201-l02-f1",
          "front": "Consumer Price Index (CPI)",
          "back": "A measure of the average change over time in the prices paid by urban consumers for a market basket of consumer goods and services."
        },
        {
          "id": "economics-201-l02-f2",
          "front": "Natural Rate of Unemployment",
          "back": "The rate of unemployment that exists in a healthy, growing economy, comprising frictional and structural unemployment (typically 4-5%)."
        },
        {
          "id": "economics-201-l02-f3",
          "front": "Phillips Curve",
          "back": "A model showing the short-run inverse relationship between inflation and unemployment."
        }
      ]
    },
    {
      "id": "economics-201-l03",
      "title": "The Business Cycle",
      "type": "video",
      "duration": 9,
      "objectives": [
        "Identify the four phases of the business cycle.",
        "Describe the behavior of GDP, unemployment, and inflation during each phase.",
        "Define recession and expansion."
      ],
      "chunks": [
        {
          "id": "economics-201-l03-c1",
          "title": "Phases of the Business Cycle",
          "content": "Economies do not grow at a steady rate; instead, they experience fluctuations known as the business cycle. This cycle consists of four distinct phases. The expansion is a period of economic growth, where real GDP is rising. The peak marks the high point of the expansion, after which growth begins to slow. A recession (or contraction) is a period of significant decline in economic activity, officially defined in many countries as two consecutive quarters of falling real GDP. The trough is the lowest point of the recession, after which the economy begins to recover and a new expansion phase starts."
        },
        {
          "id": "economics-201-l03-c2",
          "title": "Economic Indicators Across the Cycle",
          "content": "Key economic indicators behave predictably across the business cycle. During an expansion, real GDP increases, the unemployment rate falls as firms hire more workers, and inflation tends to rise as demand for goods and services grows. Conversely, during a recession, real GDP falls, the unemployment rate rises as businesses lay off workers, and inflationary pressures typically ease. Understanding these patterns helps economists and policymakers diagnose the current state of the economy and anticipate future trends."
        }
      ],
      "flashcards": [
        {
          "id": "economics-201-l03-f1",
          "front": "Business Cycle",
          "back": "The recurring, but irregular, pattern of upswings (expansions) and downswings (recessions) in overall economic activity."
        },
        {
          "id": "economics-201-l03-f2",
          "front": "Recession",
          "back": "A period of declining real GDP and rising unemployment. Often defined as two consecutive quarters of negative GDP growth."
        },
        {
          "id": "economics-201-l03-f3",
          "front": "Expansion",
          "back": "A period of rising real GDP and falling unemployment, representing economic growth."
        }
      ],
      "learningAids": [
        {
          "id": "economics-201-l03-a1",
          "type": "image",
          "title": "The Business Cycle Diagram",
          "content": "A classic wave-like graph showing the four phases (Expansion, Peak, Recession, Trough) plotted against time, with a trend line indicating long-run growth."
        }
      ]
    },
    {
      "id": "economics-201-l04",
      "title": "Checkpoint: Economic Indicators",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of GDP, inflation, unemployment, and the business cycle."
      ],
      "questions": [
        {
          "id": "economics-201-l04-q1",
          "text": "If nominal GDP grew by 5% and inflation was 3%, what was the approximate growth rate of real GDP?",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "8%"
            },
            {
              "id": "b",
              "text": "5%"
            },
            {
              "id": "c",
              "text": "2%"
            },
            {
              "id": "d",
              "text": "-2%"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Real GDP growth is approximately Nominal GDP growth minus the inflation rate (5% - 3% = 2%)."
        },
        {
          "id": "economics-201-l04-q2",
          "text": "During the expansion phase of the business cycle, what is typically happening to unemployment and inflation?",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Unemployment is rising, inflation is falling."
            },
            {
              "id": "b",
              "text": "Unemployment is falling, inflation is rising."
            },
            {
              "id": "c",
              "text": "Both are rising."
            },
            {
              "id": "d",
              "text": "Both are falling."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Economic growth during an expansion leads to more hiring (lower unemployment) and stronger demand (higher inflation)."
        },
        {
          "id": "economics-201-l04-q3",
          "text": "A software engineer who leaves her job in San Francisco to find a similar, higher-paying job in Austin is an example of:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Structural unemployment"
            },
            {
              "id": "b",
              "text": "Cyclical unemployment"
            },
            {
              "id": "c",
              "text": "Frictional unemployment"
            },
            {
              "id": "d",
              "text": "Seasonal unemployment"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Frictional unemployment involves people who are temporarily between jobs by choice, searching for a better fit."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 3,
        "bloomProfile": {
          "remember": 0,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "economics-201-l05",
      "title": "Money, Banking, and Financial Markets",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Explain the money creation process through fractional reserve banking.",
        "Describe how financial markets channel savings to investment.",
        "Analyze the causes and effects of financial crises."
      ],
      "chunks": [
        {
          "id": "economics-201-l05-c1",
          "title": "How Banks Create Money",
          "content": "The process of money creation begins with fractional reserve banking. This system requires banks to hold only a fraction of their deposits as reserves and allows them to lend out the remainder. When a bank makes a loan, it creates a new deposit, effectively creating new money. This new deposit can then be lent out again by the next bank, continuing the cycle. This process is governed by the money multiplier, calculated as 1 divided by the reserve ratio. For example, with a 10% reserve ratio, an initial deposit of $1,000 can theoretically support up to $10,000 in total money supply. This mechanism is fundamental to how the central bank's policies influence the overall economy."
        },
        {
          "id": "economics-201-l05-c2",
          "title": "The Role of Financial Markets",
          "content": "Financial markets are the nexus where savers (households, firms with surplus funds) and borrowers (firms needing capital, governments) connect. Key markets include the bond market, where entities borrow by issuing debt (IOUs), and the stock market, where corporations raise capital by selling ownership shares (equity). These markets facilitate the efficient allocation of capital, channeling funds from those who have it to those who can use it most productively for investment. Interest rates act as the price in these markets, balancing the supply of loanable funds from savers with the demand for funds from borrowers."
        },
        {
          "id": "economics-201-l05-c3",
          "title": "Understanding Financial Crises",
          "content": "Financial crises often arise from a collapse of confidence in the financial system, triggered by events like asset bubbles bursting or widespread loan defaults. The 2008 Global Financial Crisis, for instance, stemmed from the collapse of a housing bubble fueled by risky subprime mortgage lending. These loans were packaged into complex securities that spread risk throughout the global system. When defaults surged, major financial institutions faced insolvency, leading to a credit freeze and a severe global recession. Such crises highlight the importance of financial regulation, including capital requirements, stress tests, and consumer protection, to mitigate systemic risk and prevent excessive risk-taking by institutions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-201-l05-a1",
          "title": "Financial Concepts Match",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "Fractional Reserve Banking",
              "right": "System where banks hold a portion of deposits and lend the rest."
            },
            {
              "left": "Money Multiplier",
              "right": "The formula 1 / Reserve Ratio, showing deposit expansion potential."
            },
            {
              "left": "Bond Market",
              "right": "Market for buying and selling debt securities."
            },
            {
              "left": "Stock Market",
              "right": "Market for buying and selling ownership shares in corporations."
            },
            {
              "left": "Systemic Risk",
              "right": "The risk of collapse of an entire financial system or market."
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-201-l05-f1",
          "front": "Money Multiplier",
          "back": "The amount of money the banking system generates with each dollar of reserves. Formula: 1 / Reserve Ratio."
        },
        {
          "id": "economics-201-l05-f2",
          "front": "Financial Intermediary",
          "back": "An institution (like a bank) that stands between savers and borrowers, helping to channel funds between them."
        },
        {
          "id": "economics-201-l05-f3",
          "front": "Moral Hazard",
          "back": "A situation where one party gets involved in a risky event knowing that it is protected against the risk and the other party will incur the cost."
        }
      ]
    },
    {
      "id": "economics-201-l06",
      "title": "Monetary Policy and the Central Bank",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Explain the role and structure of a central bank, like the U.S. Federal Reserve.",
        "Describe the primary tools of monetary policy.",
        "Analyze how changes in interest rates affect aggregate demand."
      ],
      "chunks": [
        {
          "id": "economics-201-l06-c1",
          "title": "The Role of the Central Bank",
          "content": "A central bank is a pivotal institution responsible for overseeing a nation's monetary system. In the United States, this is the Federal Reserve (the Fed). Its primary mandates are to maintain price stability (control inflation) and foster maximum sustainable employment. Central banks also regulate commercial banks and act as a 'lender of last resort' to prevent financial panics. Crucially, they are typically designed to be independent of political pressure, allowing them to make economically sound but potentially unpopular decisions, such as raising interest rates to combat inflation."
        },
        {
          "id": "economics-201-l06-c2",
          "title": "The Tools of Monetary Policy",
          "content": "Central banks use several tools to influence the money supply and credit conditions. The most important is open market operations: buying government bonds to increase the money supply and lower interest rates (expansionary policy), or selling bonds to decrease the money supply and raise rates (contractionary policy). Another tool is the discount rate, the interest rate at which banks can borrow directly from the central bank. Finally, reserve requirements dictate the minimum fraction of deposits that banks must hold in reserve. Changes to these tools ripple through the banking system to affect the overall economy."
        },
        {
          "id": "economics-201-l06-c3",
          "title": "The Transmission Mechanism",
          "content": "How does monetary policy affect the economy? When the central bank lowers interest rates, it reduces the cost of borrowing for both consumers and businesses. This encourages spending on durable goods (like cars and homes) and stimulates business investment in new capital. This increase in consumption and investment boosts aggregate demand, leading to higher real GDP and lower unemployment. Conversely, raising interest rates makes borrowing more expensive, which dampens spending and investment, reduces aggregate demand, and helps to control inflation."
        }
      ],
      "flashcards": [
        {
          "id": "economics-201-l06-f1",
          "front": "Federal Reserve (The Fed)",
          "back": "The central bank of the United States, responsible for conducting monetary policy and ensuring financial stability."
        },
        {
          "id": "economics-201-l06-f2",
          "front": "Open Market Operations",
          "back": "The buying and selling of government securities by the central bank to alter the supply of money."
        },
        {
          "id": "economics-201-l06-f3",
          "front": "Expansionary Monetary Policy",
          "back": "Actions taken by a central bank to increase the money supply and stimulate economic activity, typically by lowering interest rates."
        },
        {
          "id": "economics-201-l06-f4",
          "front": "Contractionary Monetary Policy",
          "back": "Actions taken by a central bank to decrease the money supply and slow down the economy, typically by raising interest rates to fight inflation."
        }
      ],
      "learningAids": [
        {
          "id": "economics-201-l06-a1",
          "type": "image",
          "title": "Monetary Policy Flowchart",
          "content": "A flowchart showing the transmission mechanism: Fed lowers rates -> borrowing becomes cheaper -> investment and consumption increase -> aggregate demand shifts right -> GDP rises."
        }
      ]
    },
    {
      "id": "economics-201-l07",
      "title": "Fiscal Policy",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Define fiscal policy as government spending and taxation decisions.",
        "Distinguish between discretionary fiscal policy and automatic stabilizers.",
        "Analyze the concepts of the multiplier effect and crowding out."
      ],
      "chunks": [
        {
          "id": "economics-201-l07-c1",
          "title": "The Levers of Government: Spending and Taxes",
          "content": "Fiscal policy refers to the use of government spending and taxation to influence the economy. It is distinct from monetary policy, as it is conducted by the legislative and executive branches of government. Expansionary fiscal policy, designed to combat a recession, involves increasing government spending or cutting taxes to boost aggregate demand. Contractionary fiscal policy, used to fight inflation, involves decreasing government spending or raising taxes to reduce aggregate demand. The implementation of fiscal policy is often subject to political processes and time lags."
        },
        {
          "id": "economics-201-l07-c2",
          "title": "The Multiplier Effect",
          "content": "An initial change in government spending can have a magnified impact on aggregate demand due to the multiplier effect. When the government spends a dollar, it becomes income for someone, who then spends a portion of it. That spending becomes income for another person, and so on. The size of this effect is determined by the marginal propensity to consume (MPC), the fraction of extra income that households spend. The spending multiplier is calculated as 1 / (1 - MPC). A higher MPC leads to a larger multiplier, amplifying the impact of the initial fiscal stimulus."
        },
        {
          "id": "economics-201-l07-c3",
          "title": "Automatic Stabilizers and Crowding Out",
          "content": "Some fiscal policies work automatically. Automatic stabilizers are programs that automatically provide expansionary stimulus during a recession and contractionary restraint during an expansion, without any new legislative action. Examples include the progressive income tax system and unemployment insurance benefits. A potential limitation of expansionary fiscal policy is the crowding-out effect. When the government borrows heavily to finance spending, it can increase the demand for loanable funds, driving up interest rates. Higher interest rates can, in turn, reduce private investment, partially offsetting the initial stimulus."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-201-l07-a1",
          "title": "Policy Identification",
          "type": "sorting_buckets",
          "buckets": [
            "Expansionary Fiscal Policy",
            "Contractionary Fiscal Policy",
            "Automatic Stabilizer"
          ],
          "items": [
            {
              "text": "Congress passes a bill to cut income taxes during a recession.",
              "bucket": "Expansionary Fiscal Policy"
            },
            {
              "text": "Government spending on unemployment benefits rises as the economy weakens.",
              "bucket": "Automatic Stabilizer"
            },
            {
              "text": "The government raises taxes to combat high inflation.",
              "bucket": "Contractionary Fiscal Policy"
            },
            {
              "text": "A new infrastructure spending program is launched to create jobs.",
              "bucket": "Expansionary Fiscal Policy"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-201-l07-f1",
          "front": "Fiscal Policy",
          "back": "The use of government revenue collection (taxation) and expenditure (spending) to influence a country's economy."
        },
        {
          "id": "economics-201-l07-f2",
          "front": "Spending Multiplier",
          "back": "The ratio of the change in aggregate demand to an initial change in government spending. Formula: 1 / (1 - MPC)."
        },
        {
          "id": "economics-201-l07-f3",
          "front": "Crowding Out",
          "back": "A phenomenon where increased government borrowing leads to higher interest rates, which in turn reduces private investment spending."
        },
        {
          "id": "economics-201-l07-f4",
          "front": "Automatic Stabilizers",
          "back": "Government spending and taxation rules that cause fiscal policy to be automatically expansionary when the economy contracts and contractionary when it expands."
        }
      ]
    },
    {
      "id": "economics-201-l08",
      "title": "Checkpoint: Policy Levers",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of money creation, monetary policy, and fiscal policy."
      ],
      "questions": [
        {
          "id": "economics-201-l08-q1",
          "text": "To combat a recession, the Federal Reserve would most likely:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Sell government bonds and raise the discount rate."
            },
            {
              "id": "b",
              "text": "Buy government bonds and lower the federal funds rate target."
            },
            {
              "id": "c",
              "text": "Increase reserve requirements."
            },
            {
              "id": "d",
              "text": "Advise Congress to raise taxes."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Buying bonds (open market operations) and lowering interest rates are the primary tools of expansionary monetary policy used to stimulate the economy."
        },
        {
          "id": "economics-201-l08-q2",
          "text": "If the marginal propensity to consume (MPC) is 0.8, what is the government spending multiplier?",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "1.25"
            },
            {
              "id": "b",
              "text": "0.8"
            },
            {
              "id": "c",
              "text": "4"
            },
            {
              "id": "d",
              "text": "5"
            }
          ],
          "correctOptionId": "d",
          "explanation": "The multiplier is calculated as 1 / (1 - MPC). So, 1 / (1 - 0.8) = 1 / 0.2 = 5."
        },
        {
          "id": "economics-201-l08-q3",
          "text": "Which of the following is an example of contractionary fiscal policy?",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Decreasing income taxes."
            },
            {
              "id": "b",
              "text": "Increasing government spending on defense."
            },
            {
              "id": "c",
              "text": "Decreasing government spending on infrastructure."
            },
            {
              "id": "d",
              "text": "The central bank selling bonds."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Contractionary fiscal policy aims to reduce aggregate demand to fight inflation, which can be achieved by cutting government spending."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 3,
        "bloomProfile": {
          "remember": 0,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "economics-201-l09",
      "title": "Aggregate Demand and Aggregate Supply",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Draw and interpret the AD/AS model.",
        "Explain the difference between demand-pull and cost-push inflation.",
        "Analyze how economic shocks and policy responses shift the AD and AS curves."
      ],
      "chunks": [
        {
          "id": "economics-201-l09-c1",
          "title": "The AD/AS Framework",
          "content": "The Aggregate Demand/Aggregate Supply (AD/AS) model is the workhorse of macroeconomics, illustrating the determination of the overall price level and real GDP. The Aggregate Demand (AD) curve slopes downward, showing that a lower price level increases the quantity of goods and services demanded. The Short-Run Aggregate Supply (SRAS) curve slopes upward, as higher prices incentivize firms to produce more. The Long-Run Aggregate Supply (LRAS) curve is vertical at the economy's potential output, indicating that in the long run, output is determined by factors of production (labor, capital, technology), not the price level. The intersection of AD and SRAS determines the short-run equilibrium."
        },
        {
          "id": "economics-201-l09-c2",
          "title": "Demand-Pull vs. Cost-Push Inflation",
          "content": "The AD/AS model helps distinguish between two types of inflation. Demand-pull inflation occurs when the AD curve shifts to the right (due to increased spending), pulling the price level up. This is often described as 'too much money chasing too few goods' and is associated with an expanding economy. Cost-push inflation is caused by a leftward shift in the SRAS curve, resulting from an increase in the costs of production (like a surge in oil prices). This scenario, known as stagflation, is particularly problematic as it combines rising prices with falling output and rising unemployment."
        },
        {
          "id": "economics-201-l09-c3",
          "title": "Shocks and Policy Responses",
          "content": "Economic shocks are unexpected events that shift either the AD or AS curve. A positive demand shock (e.g., a stock market boom) shifts AD right, increasing GDP and prices. Policymakers might respond with contractionary policy to cool the economy. A negative supply shock (e.g., a natural disaster) shifts SRAS left, causing stagflation. This creates a policy dilemma: using expansionary policy to boost output would worsen inflation, while using contractionary policy to fight inflation would deepen the recession. The AD/AS model is essential for visualizing these shocks and the trade-offs involved in policy responses."
        }
      ],
      "flashcards": [
        {
          "id": "economics-201-l09-f1",
          "front": "Aggregate Demand (AD)",
          "back": "A curve showing the total quantity of goods and services that households, firms, the government, and customers abroad want to buy at each price level."
        },
        {
          "id": "economics-201-l09-f2",
          "front": "Long-Run Aggregate Supply (LRAS)",
          "back": "A vertical curve at the economy's potential output, showing that in the long run, output is determined by resources and technology, not prices."
        },
        {
          "id": "economics-201-l09-f3",
          "front": "Stagflation",
          "back": "A period of falling output (stagnation) and rising prices (inflation), caused by a negative supply shock that shifts the SRAS curve left."
        }
      ],
      "learningAids": [
        {
          "id": "economics-201-l09-a1",
          "type": "image",
          "title": "AD/AS Graph",
          "content": "A standard AD/AS graph showing the downward-sloping AD curve, upward-sloping SRAS curve, and vertical LRAS curve, with axes for Price Level and Real GDP."
        }
      ]
    },
    {
      "id": "economics-201-l10",
      "title": "Economic Growth and Development",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Identify the sources of long-run economic growth.",
        "Explain the role of institutions, human capital, and technology.",
        "Distinguish between economic growth and economic development."
      ],
      "chunks": [
        {
          "id": "economics-201-l10-c1",
          "title": "The Sources of Long-Run Growth",
          "content": "Long-run economic growth, represented by a rightward shift of the LRAS curve, is the key to rising living standards. It is driven by increases in productivity—the ability to produce more output per worker. The primary determinants of productivity are physical capital (tools, machinery, infrastructure), human capital (the knowledge and skills of the workforce acquired through education and training), and technological knowledge (society's understanding of the best ways to produce goods and services). While accumulating capital is important, sustained growth is ultimately driven by technological progress."
        },
        {
          "id": "economics-201-l10-c2",
          "title": "The Importance of Institutions",
          "content": "For the factors of production to be used effectively, a country needs strong institutions. These include the rule of law, protection of property rights, political stability, and free and open markets. Sound institutions create an environment that encourages saving, investment, and innovation. Without secure property rights, for example, entrepreneurs have little incentive to invest in new businesses. Many economists argue that the quality of institutions is the most fundamental determinant of why some countries are rich and others are poor."
        },
        {
          "id": "economics-201-l10-c3",
          "title": "Growth vs. Development",
          "content": "Economic growth refers to a sustained increase in real GDP per capita. It is a quantitative measure of a country's output. Economic development is a broader, more qualitative concept that encompasses improvements in the overall quality of life. This includes not only rising incomes but also reductions in poverty, improvements in health and education, and greater individual freedoms. While growth is often a necessary condition for development, it is not sufficient. The Human Development Index (HDI) is a composite statistic that measures development by combining data on income, life expectancy, and education levels."
        }
      ],
      "flashcards": [
        {
          "id": "economics-201-l10-f1",
          "front": "Productivity",
          "back": "The quantity of goods and services produced from each unit of labor input. The primary driver of long-run economic growth."
        },
        {
          "id": "economics-201-l10-f2",
          "front": "Human Capital",
          "back": "The knowledge and skills that workers acquire through education, training, and experience."
        },
        {
          "id": "economics-201-l10-f3",
          "front": "Human Development Index (HDI)",
          "back": "A composite statistic of life expectancy, education, and per capita income indicators, used to rank countries into tiers of human development."
        }
      ]
    },
    {
      "id": "economics-201-l11",
      "title": "International Trade and Exchange Rates",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Explain comparative advantage as the basis for trade.",
        "Analyze how exchange rates are determined in currency markets.",
        "Evaluate the effects of tariffs and other trade barriers."
      ],
      "chunks": [
        {
          "id": "economics-201-l11-c1",
          "title": "The Principle of Comparative Advantage",
          "content": "The foundation of international trade is the principle of comparative advantage. A country has a comparative advantage in producing a good if it can do so at a lower opportunity cost than other countries. Even if one nation has an absolute advantage (can produce all goods more efficiently), both countries can still gain from trade by specializing in the production of goods for which they have a comparative advantage and trading for others. This specialization increases total world production, allowing all participating countries to consume beyond their individual production possibilities."
        },
        {
          "id": "economics-201-l11-c2",
          "title": "Exchange Rates",
          "content": "The exchange rate is the price of one currency in terms of another. In a system of floating exchange rates, this price is determined by supply and demand in the foreign exchange market. When a currency appreciates (strengthens), it buys more of a foreign currency, making imports cheaper but exports more expensive for foreigners. When a currency depreciates (weakens), it buys less of a foreign currency, making imports more expensive but exports cheaper. Exchange rate fluctuations have a significant impact on a country's net exports and, therefore, its aggregate demand."
        },
        {
          "id": "economics-201-l11-c3",
          "title": "Trade Policy: Tariffs and Quotas",
          "content": "Despite the gains from trade, many countries employ protectionist policies. A tariff is a tax on imported goods, while a quota is a limit on the quantity of a good that can be imported. These policies are designed to protect domestic industries from foreign competition. While they may benefit the protected domestic producers and their workers, they harm domestic consumers by raising prices and reducing choice. Economists generally agree that tariffs and quotas reduce overall economic welfare by preventing countries from fully realizing the gains from comparative advantage."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-201-l11-a1",
          "title": "Trade Concepts Match",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "Comparative Advantage",
              "right": "Ability to produce a good at a lower opportunity cost than another producer."
            },
            {
              "left": "Tariff",
              "right": "A tax imposed on an imported good."
            },
            {
              "left": "Currency Appreciation",
              "right": "An increase in the value of a currency, making imports cheaper."
            },
            {
              "left": "Currency Depreciation",
              "right": "A decrease in the value of a currency, making exports cheaper."
            },
            {
              "left": "Trade Deficit",
              "right": "Situation where a country's imports exceed its exports."
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-201-l11-f1",
          "front": "Comparative Advantage",
          "back": "The ability to produce a good at a lower opportunity cost than another producer. This is the basis for gains from trade."
        },
        {
          "id": "economics-201-l11-f2",
          "front": "Exchange Rate",
          "back": "The rate at which one country's currency can be traded for another country's currency."
        },
        {
          "id": "economics-201-l11-f3",
          "front": "Protectionism",
          "back": "The theory or practice of shielding a country's domestic industries from foreign competition by taxing imports (tariffs) or limiting quantities (quotas)."
        }
      ]
    },
    {
      "id": "economics-201-l12",
      "title": "Checkpoint: Models and Global Economy",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of the AD/AS model, economic growth, and international trade."
      ],
      "questions": [
        {
          "id": "economics-201-l12-q1",
          "text": "An increase in the world price of oil would cause which shift in the AD/AS model?",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "AD shifts right"
            },
            {
              "id": "b",
              "text": "AD shifts left"
            },
            {
              "id": "c",
              "text": "SRAS shifts right"
            },
            {
              "id": "d",
              "text": "SRAS shifts left"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Oil is a key input for many industries. A higher price increases production costs, causing a negative supply shock that shifts the SRAS curve to the left."
        },
        {
          "id": "economics-201-l12-q2",
          "text": "Which of the following is most crucial for sustained long-run economic growth per capita?",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A rising population"
            },
            {
              "id": "b",
              "text": "Continuous technological progress"
            },
            {
              "id": "c",
              "text": "Accumulation of more physical capital"
            },
            {
              "id": "d",
              "text": "Expansionary monetary policy"
            }
          ],
          "correctOptionId": "b",
          "explanation": "While capital accumulation is important, technological progress is the only factor that can overcome diminishing returns and generate sustained growth in living standards over the long run."
        },
        {
          "id": "economics-201-l12-q3",
          "text": "If the U.S. dollar depreciates relative to the euro, what is the likely impact on trade?",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "U.S. exports to Europe will decrease."
            },
            {
              "id": "b",
              "text": "U.S. imports from Europe will increase."
            },
            {
              "id": "c",
              "text": "U.S. exports to Europe will increase."
            },
            {
              "id": "d",
              "text": "There will be no impact on trade."
            }
          ],
          "correctOptionId": "c",
          "explanation": "A weaker dollar makes U.S. goods cheaper for Europeans to buy, which will increase demand for U.S. exports."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 3,
        "bloomProfile": {
          "remember": 0,
          "understand": 3,
          "apply": 0
        }
      }
    },
    {
      "id": "economics-201-l13",
      "title": "Applying Macroeconomics: Common Pitfalls",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Identify common misconceptions in macroeconomics.",
        "Distinguish between correlation and causation in economic data.",
        "Apply economic reasoning to analyze current events."
      ],
      "chunks": [
        {
          "id": "economics-201-l13-c1",
          "title": "Debunking Common Myths",
          "content": "Several common beliefs about the economy are oversimplified or incorrect. For example, government debt is not analogous to household debt; governments can tax, print money, and roll over debt indefinitely. The key metric is the debt-to-GDP ratio, not the absolute value. Similarly, a trade deficit is not inherently 'bad'; it reflects a capital account surplus and means a country is consuming more than it produces, often financed by foreign investment. Finally, moderate, predictable inflation (around 2%) is generally considered healthy for an economy, as it encourages spending and gives the central bank room to maneuver."
        },
        {
          "id": "economics-201-l13-c2",
          "title": "Correlation vs. Causation",
          "content": "A critical skill in economic analysis is distinguishing correlation from causation. Two variables may move together (correlation), but this does not prove that one causes the other. For example, ice cream sales and crime rates are positively correlated, but the cause is a third variable: hot weather. When analyzing economic data, always question the underlying mechanism. Is there a plausible theory for why A causes B? Could a third factor, C, be causing both? Rigorous economic analysis uses models and statistical techniques to move beyond simple correlation and identify causal relationships, which is essential for effective policymaking."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-201-l13-a1",
          "title": "Fact or Fallacy?",
          "type": "sorting_buckets",
          "buckets": [
            "Sound Economic Reasoning",
            "Common Misconception"
          ],
          "items": [
            {
              "text": "A country's government should run its budget like a household, aiming to eliminate all debt.",
              "bucket": "Common Misconception"
            },
            {
              "text": "A trade deficit means a country is losing in international trade.",
              "bucket": "Common Misconception"
            },
            {
              "text": "A stable, low rate of inflation is generally preferable to zero inflation or deflation.",
              "bucket": "Sound Economic Reasoning"
            },
            {
              "text": "Productivity growth is the ultimate source of rising living standards.",
              "bucket": "Sound Economic Reasoning"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-201-l13-f1",
          "front": "Correlation vs. Causation",
          "back": "Correlation indicates that two variables move together, but does not imply that one causes the other. Causation requires a demonstrable mechanism."
        },
        {
          "id": "economics-201-l13-f2",
          "front": "Debt-to-GDP Ratio",
          "back": "A measure of a country's government debt as a percentage of its Gross Domestic Product. A key indicator of debt sustainability."
        }
      ]
    },
    {
      "id": "economics-201-l14",
      "title": "Final Mastery Exam",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Synthesize and apply core concepts from the entire macroeconomics module."
      ],
      "questions": [
        {
          "id": "economics-201-l14-q1",
          "text": "If an economy is experiencing high inflation and low unemployment, what combination of policies would be most appropriate to restore stability?",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Expansionary fiscal policy and expansionary monetary policy."
            },
            {
              "id": "b",
              "text": "Contractionary fiscal policy and contractionary monetary policy."
            },
            {
              "id": "c",
              "text": "Expansionary fiscal policy and contractionary monetary policy."
            },
            {
              "id": "d",
              "text": "Contractionary fiscal policy and expansionary monetary policy."
            }
          ],
          "correctOptionId": "b",
          "explanation": "To combat high inflation, policymakers need to reduce aggregate demand. This is achieved by raising taxes/cutting spending (contractionary fiscal) and raising interest rates (contractionary monetary)."
        },
        {
          "id": "economics-201-l14-q2",
          "text": "The long-run vertical aggregate supply curve implies that:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Monetary and fiscal policy have no effect on the economy."
            },
            {
              "id": "b",
              "text": "In the long run, changes in aggregate demand only affect the price level, not output."
            },
            {
              "id": "c",
              "text": "The economy can never deviate from its potential output."
            },
            {
              "id": "d",
              "text": "Prices are fixed in the long run."
            }
          ],
          "correctOptionId": "b",
          "explanation": "In the long run, the economy's output is determined by its resources and technology (potential output). Therefore, shifts in AD will only change prices, not the level of real GDP."
        },
        {
          "id": "economics-201-l14-q3",
          "text": "A country that specializes in producing goods for which it has a comparative advantage and then trades with other nations will experience:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A lower overall level of consumption."
            },
            {
              "id": "b",
              "text": "An ability to consume at a point outside its production possibilities frontier."
            },
            {
              "id": "c",
              "text": "Higher unemployment due to foreign competition."
            },
            {
              "id": "d",
              "text": "A guaranteed trade surplus."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The primary gain from trade is that it allows a country's consumption possibilities to exceed its production possibilities through specialization and exchange."
        },
        {
          "id": "economics-201-l14-q4",
          "text": "Transfer payments like Social Security are not included in the government spending (G) component of GDP because:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "They are paid to individuals, not firms."
            },
            {
              "id": "b",
              "text": "They are not a payment for a currently produced good or service."
            },
            {
              "id": "c",
              "text": "They are too difficult to measure accurately."
            },
            {
              "id": "d",
              "text": "They are counted as part of consumption (C) instead."
            }
          ],
          "correctOptionId": "b",
          "explanation": "GDP measures current production. Transfer payments redistribute existing income but do not represent a government purchase of a new good or service, so they are excluded from G."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 0,
          "understand": 1,
          "apply": 1,
          "analyze": 2
        }
      }
    }
  ]
};
