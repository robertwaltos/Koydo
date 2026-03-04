import type { LearningModule } from "@/lib/modules/types";

export const Economics201Module: LearningModule = {
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
  "version": "2.0.0",
  "learningObjectives": [
    "Measure economic output using GDP and its components",
    "Analyze the causes and costs of inflation and unemployment",
    "Explain the business cycle: expansion, peak, recession, trough",
    "Describe how central banks use monetary policy to stabilize economies",
    "Evaluate fiscal policy tools: government spending and taxation",
    "Interpret the aggregate demand / aggregate supply model",
    "Assess the trade-offs between inflation and unemployment (Phillips curve)"
  ],
  "lessons": [
    {
      "id": "economics-201-l01",
      "title": "Measuring the Economy: GDP",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define GDP as the total market value of all final goods and services produced",
        "Distinguish between nominal and real GDP",
        "Identify the four components of GDP: C + I + G + NX"
      ],
      "chunks": [
        {
          "id": "economics-201-l01-c1",
          "title": "What Is GDP?",
          "content": "Gross Domestic Product, often referred to as GDP, is a crucial economic indicator that reflects the total market value of all final goods and services produced within a country over a specific period, such as a year or a quarter. This measurement is essential because it provides a comprehensive overview of a nation's economic activity and health. The term 'final' is important; it means we only include goods and services that are ready for consumers to use. For example, we do not count intermediate goods, like flour used to make bread, because that would lead to double counting. Instead, we focus on the finished products that people buy and use. GDP can be calculated in three different ways: first, by examining what people spend, known as expenditure; second, by looking at what individuals earn, referred to as income; and third, by analyzing what businesses produce, called production. Remarkably, all three methods will yield the same GDP figure, which helps economists and policymakers understand how well the economy is performing and where improvements might be needed.\nContext recap: Gross Domestic Product, often referred to as GDP, is a crucial economic indicator that reflects the total market value of all final goods and services produced within a country over a specific period, such as a year or a quarter. This measurement is essential because it provides a comprehensive overview of a nation's economic activity and health. The term 'final' is important; it means we only include goods and services that are ready for consumers to use. For example, we do not count intermediate goods, like flour used to make bread, because that would lead to double counting."
        },
        {
          "id": "economics-201-l01-c2",
          "title": "Components of GDP",
          "content": "To understand how we measure the economy, we use a formula known as GDP, which stands for Gross Domestic Product. The equation is written as GDP = C + I + G + NX. Let's break down what each letter means. 'C' represents Consumption. This is the total amount of money that households spend on goods and services, and it accounts for about 70% of the GDP in the United States. This includes everything from groceries and clothing to entertainment and healthcare. Next, we have 'I' for Investment. This refers to the money that businesses spend on things like new equipment, buildings, and changes in their inventory. It's important because it shows how much businesses are investing in future growth. The letter 'G' stands for Government spending. This includes all the purchases made by federal, state, and local governments, such as infrastructure projects and public services. However, it does not include transfer payments like Social Security, which are payments made to individuals without any goods or services being exchanged. Finally, 'NX' stands for Net Exports, which is calculated by subtracting imports from exports. If a country imports more than it exports, the Net Exports value will be negative, indicating a trade deficit. Understanding these components helps us see how different parts of the economy contribute to the overall GDP, giving us a clearer picture of economic health.\nContext recap: To understand how we measure the economy, we use a formula known as GDP, which stands for Gross Domestic Product. The equation is written as GDP = C + I + G + NX. Let's break down what each letter means. 'C' represents Consumption.\nWhy this matters: Components of GDP helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints.\nGuided check: Ask yourself, \"What is the claim?\", \"Which evidence is strongest?\", and \"What would change my conclusion?\" Use the terms exports, stands, services, components, economy, letter, money, spend while answering to reinforce vocabulary and precision."
        },
        {
          "id": "economics-201-l01-c3",
          "title": "Nominal vs. Real GDP",
          "content": "Nominal GDP is a way to measure the economy using current prices. This means that if prices go up, nominal GDP can also go up, even if the actual amount of goods and services produced hasn’t changed. This can be misleading because it might look like the economy is growing when it’s really just inflation affecting prices. To get a clearer picture of how the economy is really doing, we use Real GDP. Real GDP takes into account inflation by using the prices from a specific base year. This adjustment allows us to see the true growth of the economy over time, without the confusion of rising prices. Additionally, we have a tool called the GDP deflator, which is calculated by dividing nominal GDP by real GDP and then multiplying by 100. This helps us understand the overall price level in the economy. When we want to compare how the economy is performing from one year to another, it’s very important to use Real GDP. This way, we can be sure we are looking at real growth and not just changes in prices.\nContext recap: Nominal GDP is a way to measure the economy using current prices. This means that if prices go up, nominal GDP can also go up, even if the actual amount of goods and services produced hasn’t changed. This can be misleading because it might look like the economy is growing when it’s really just inflation affecting prices. To get a clearer picture of how the economy is really doing, we use Real GDP.\nWhy this matters: Nominal vs. Real GDP helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "economics-201-l01-f1",
          "front": "GDP",
          "back": "Total market value of all final goods and services produced within a country in a given period"
        },
        {
          "id": "economics-201-l01-f2",
          "front": "GDP formula",
          "back": "C + I + G + NX (Consumption + Investment + Government spending + Net exports)"
        },
        {
          "id": "economics-201-l01-f3",
          "front": "Real vs. nominal GDP",
          "back": "Real GDP adjusts for inflation (constant prices); nominal uses current prices — real gives true growth"
        },
        {
          "id": "economics-201-l01-f4",
          "front": "GDP deflator",
          "back": "(Nominal GDP / Real GDP) × 100 — measures the overall price level in the economy"
        }
      ],
      "learningAids": [
        {
          "id": "economics-201-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "economics-201-l02",
      "title": "Inflation and Unemployment",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Define inflation and calculate it using CPI",
        "Distinguish between frictional, structural, and cyclical unemployment",
        "Explain the natural rate of unemployment"
      ],
      "chunks": [
        {
          "id": "economics-201-l02-c1",
          "title": "Measuring Inflation",
          "content": "Inflation is an important economic concept that describes a sustained increase in the general price level of goods and services within an economy. This means that over time, the amount of money needed to purchase everyday items tends to rise. One of the primary tools used to measure inflation is the Consumer Price Index, or CPI. The CPI tracks the cost of a specific set of goods and services, known as a basket of goods, over time. To find out how much inflation has occurred, we can use a simple formula: (CPI this year - CPI last year) / CPI last year × 100. This calculation gives us the inflation rate as a percentage. Generally, a moderate inflation rate, which falls between 2% and 3%, is seen as normal and can even be beneficial for the economy, as it encourages spending and investment. However, when inflation becomes extreme, such as in cases of hyperinflation where prices increase by more than 50% each month, it can have devastating effects on people's purchasing power and savings. Conversely, deflation, which is when prices fall, can also be problematic. It may lead consumers to delay purchases, hoping for even lower prices in the future, which can slow down economic growth. Understanding these concepts is crucial for making informed financial decisions and recognizing the health of an economy.\nContext recap: Inflation is an important economic concept that describes a sustained increase in the general price level of goods and services within an economy. This means that over time, the amount of money needed to purchase everyday items tends to rise. One of the primary tools used to measure inflation is the Consumer Price Index, or CPI. The CPI tracks the cost of a specific set of goods and services, known as a basket of goods, over time.\nWhy this matters: Measuring Inflation helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "economics-201-l02-c2",
          "title": "Types of Unemployment",
          "content": "In any economy, there are different types of unemployment that can affect individuals and the job market. One type is called frictional unemployment. This occurs when people are temporarily between jobs or are just starting their careers. It is usually a voluntary choice and tends to be short-term, as individuals look for new opportunities that better fit their skills or interests. Another type is structural unemployment, which happens when there is a mismatch between the skills that workers have and the skills that employers need. For example, if factory workers lose their jobs because machines and automation can do their tasks more efficiently, they may struggle to find new jobs that match their abilities. Lastly, we have cyclical unemployment, which is related to the overall health of the economy. This type occurs during economic downturns, such as recessions, when businesses may not need as many workers and the demand for labor decreases. It's important to note that even in a strong economy, there will always be some level of unemployment, known as the natural rate of unemployment. This includes both frictional and structural unemployment and typically ranges from 4% to 5%. Understanding these types of unemployment helps us grasp how the job market functions and the challenges that workers may face.\nContext recap: In any economy, there are different types of unemployment that can affect individuals and the job market. One type is called frictional unemployment. This occurs when people are temporarily between jobs or are just starting their careers. It is usually a voluntary choice and tends to be short-term, as individuals look for new opportunities that better fit their skills or interests.\nWhy this matters: Types of Unemployment helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "economics-201-l02-c3",
          "title": "Costs of Inflation and Unemployment",
          "content": "Inflation can significantly impact the economy in several ways. One of the main effects is that it decreases the purchasing power of money. This means that people can buy less with the same amount of money, which can be especially tough for those who are saving for the future or living on fixed incomes, like retirees. When prices rise, it can create uncertainty for businesses as they try to plan for what will happen next, making it harder for them to make decisions about investments and hiring. Additionally, inflation can distort price signals, which are important for consumers to make informed choices about what to buy. On the flip side, unemployment is another serious issue. It represents a loss of human potential, as people who are not working are not contributing to the economy. This can lead to a decrease in the overall GDP, which is a measure of a country's economic health. Moreover, being unemployed for a long time can lead to personal hardships and can even erode a person's skills, making it more challenging for them to find work later on. The Phillips curve is a concept that shows the relationship between inflation and unemployment. It suggests that in the short term, there is a trade-off: when unemployment is low, inflation tends to be higher, and when unemployment is high, inflation tends to be lower. Policymakers need to find a careful balance between these two factors to keep the economy healthy and thriving.\nContext recap: Inflation can significantly impact the economy in several ways. One of the main effects is that it decreases the purchasing power of money. This means that people can buy less with the same amount of money, which can be especially tough for those who are saving for the future or living on fixed incomes, like retirees. When prices rise, it can create uncertainty for businesses as they try to plan for what will happen next, making it harder for them to make decisions about investments and hiring.\nWhy this matters: Costs of Inflation and Unemployment helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-201-l02-a1",
          "title": "Sort into Categories",
          "type": "sorting_buckets",
          "buckets": [
            "Frictional Unemployment",
            "Structural Unemployment",
            "Cyclical Unemployment"
          ],
          "items": [
            {
              "text": "Recent graduate searching for first job",
              "bucket": "Frictional Unemployment"
            },
            {
              "text": "Coal miner whose mine closed due to shift to renewables",
              "bucket": "Structural Unemployment"
            },
            {
              "text": "Restaurant worker laid off during recession",
              "bucket": "Cyclical Unemployment"
            },
            {
              "text": "Worker who quit to find a better-paying position",
              "bucket": "Frictional Unemployment"
            },
            {
              "text": "Assembly line worker replaced by robots",
              "bucket": "Structural Unemployment"
            },
            {
              "text": "Construction workers idle during housing market crash",
              "bucket": "Cyclical Unemployment"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-201-l02-f1",
          "front": "Consumer Price Index (CPI)",
          "back": "Measures the average change in prices paid by consumers for a basket of goods and services over time"
        },
        {
          "id": "economics-201-l02-f2",
          "front": "Natural rate of unemployment",
          "back": "Frictional + structural unemployment — the rate that exists in a healthy economy (typically 4-5%)"
        },
        {
          "id": "economics-201-l02-f3",
          "front": "Phillips curve",
          "back": "Shows the short-run inverse relationship between inflation and unemployment — lower unemployment → higher inflation"
        },
        {
          "id": "economics-201-l02-f4",
          "front": "Hyperinflation",
          "back": "Extremely rapid inflation (>50% per month) that destroys a currency's purchasing power — e.g., Zimbabwe 2008, Weimar Germany 1923"
        }
      ],
      "learningAids": [
        {
          "id": "economics-201-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "economics-201-l03",
      "title": "GDP & Inflation Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of GDP, inflation, and unemployment"
      ],
      "questions": [
        {
          "id": "economics-201-l03-q1",
          "text": "Which component is typically the largest share of US GDP?",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Government spending (G)"
            },
            {
              "id": "b",
              "text": "Net exports (NX)"
            },
            {
              "id": "c",
              "text": "Consumption (C)"
            },
            {
              "id": "d",
              "text": "Investment (I)"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Consumer spending accounts for roughly 70% of US GDP."
        },
        {
          "id": "economics-201-l03-q2",
          "text": "A coal miner who loses their job because the economy shifts to solar energy is experiencing:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Frictional unemployment"
            },
            {
              "id": "b",
              "text": "Cyclical unemployment"
            },
            {
              "id": "c",
              "text": "Structural unemployment"
            },
            {
              "id": "d",
              "text": "Seasonal unemployment"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Structural unemployment occurs when workers' skills no longer match available jobs due to economic changes."
        },
        {
          "id": "economics-201-l03-q3",
          "text": "Real GDP differs from nominal GDP because real GDP:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Includes only services, not goods"
            },
            {
              "id": "b",
              "text": "Adjusts for inflation using constant prices"
            },
            {
              "id": "c",
              "text": "Excludes government spending"
            },
            {
              "id": "d",
              "text": "Measures only domestic production"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Real GDP removes the effect of price changes, showing true changes in output."
        },
        {
          "id": "economics-201-l03-q4",
          "text": "The Phillips curve suggests that in the short run:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Inflation and unemployment move in the same direction"
            },
            {
              "id": "b",
              "text": "There is no relationship between inflation and unemployment"
            },
            {
              "id": "c",
              "text": "Lower unemployment comes with higher inflation"
            },
            {
              "id": "d",
              "text": "GDP and unemployment are positively correlated"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The Phillips curve shows an inverse relationship: reducing unemployment tends to push inflation higher."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      },
      "learningAids": [
        {
          "id": "economics-201-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "economics-201-l04",
      "title": "Monetary Policy and Central Banking",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Explain the role of a central bank (e.g., the Federal Reserve)",
        "Describe the three main tools of monetary policy",
        "Analyze how interest rate changes affect the economy"
      ],
      "chunks": [
        {
          "id": "economics-201-l04-c1",
          "title": "The Central Bank",
          "content": "The central bank is a very important institution in a country's economy. In the United States, this institution is called the Federal Reserve, while in Europe, it is known as the European Central Bank (ECB). The central bank has the responsibility of managing the money supply, which is the total amount of money available in the economy, and setting interest rates, which are the costs of borrowing money. The central bank has several key goals that it aims to achieve. One of these goals is price stability, which means keeping inflation low. Inflation is when prices for goods and services rise, and if it gets too high, it can hurt people's ability to buy what they need. Another goal is to achieve maximum employment, which means helping as many people as possible find jobs. Additionally, the central bank aims to maintain moderate long-term interest rates, which helps ensure that borrowing remains affordable for individuals and businesses. An important aspect of the central bank is its independence from political influences. This independence is crucial because it allows the central bank to make difficult decisions that might not be popular, such as increasing interest rates during times of economic growth to prevent the economy from overheating. By doing so, the central bank helps to create a stable economic environment for everyone.\nContext recap: The central bank is a very important institution in a country's economy. In the United States, this institution is called the Federal Reserve, while in Europe, it is known as the European Central Bank (ECB). The central bank has the responsibility of managing the money supply, which is the total amount of money available in the economy, and setting interest rates, which are the costs of borrowing money. The central bank has several key goals that it aims to achieve.\nWhy this matters: The Central Bank helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "economics-201-l04-c2",
          "title": "Tools of Monetary Policy",
          "content": "The central bank plays a crucial role in managing the economy, and it does this using three main tools. The first tool is called open market operations. This means that the central bank buys and sells government bonds. When the central bank buys bonds, it puts more money into the economy, which is referred to as expansionary policy. This can help stimulate economic growth. On the other hand, when the central bank sells bonds, it takes money out of circulation, which is known as contractionary policy. This can help cool down an overheating economy.\nThe second tool is the federal funds rate. This is the interest rate that banks charge each other for overnight loans. The central bank sets a target for this rate to influence how much banks are willing to lend to each other. By adjusting the federal funds rate, the central bank can either encourage more borrowing and spending or slow it down, depending on what the economy needs.\nLastly, we have reserve requirements. These are rules that determine what percentage of deposits banks must keep in reserve and not lend out. When the central bank lowers these requirements, it allows banks to lend more money. This can lead to increased spending and investment in the economy, which helps it grow. Understanding these tools is essential for grasping how monetary policy works and its impact on our daily lives.\nContext recap: The central bank plays a crucial role in managing the economy, and it does this using three main tools. The first tool is called open market operations. This means that the central bank buys and sells government bonds. When the central bank buys bonds, it puts more money into the economy, which is referred to as expansionary policy.\nWhy this matters: Tools of Monetary Policy helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "economics-201-l04-c3",
          "title": "How Interest Rates Move the Economy",
          "content": "When the Federal Reserve, often called the Fed, decides to lower interest rates, it makes it easier for both businesses and consumers to borrow money. This means that businesses can take out loans to invest in new projects, hire more workers, or expand their operations. At the same time, consumers may feel more comfortable using credit to make purchases, such as buying a new car or home. As a result, this increase in spending and investment boosts overall demand in the economy. When demand rises, it can lead to an increase in the Gross Domestic Product (GDP), which is a measure of all the goods and services produced in the country. Additionally, as businesses grow and hire more people, unemployment tends to decrease. However, it is important to be cautious because if the economy gets too stimulated, it can lead to inflation, where prices for goods and services rise too quickly. On the other hand, when the Fed raises interest rates, borrowing becomes more expensive. This can slow down spending and investment, which may help to reduce inflation but can also lead to higher unemployment. Finding the right balance between stimulating the economy and controlling inflation is a crucial part of what monetary policy aims to achieve.\nContext recap: When the Federal Reserve, often called the Fed, decides to lower interest rates, it makes it easier for both businesses and consumers to borrow money. This means that businesses can take out loans to invest in new projects, hire more workers, or expand their operations. At the same time, consumers may feel more comfortable using credit to make purchases, such as buying a new car or home. As a result, this increase in spending and investment boosts overall demand in the economy.\nWhy this matters: How Interest Rates Move the Economy helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "economics-201-l04-f1",
          "front": "Federal Reserve (Fed)",
          "back": "The US central bank — manages money supply, sets interest rates, and acts as lender of last resort"
        },
        {
          "id": "economics-201-l04-f2",
          "front": "Open market operations",
          "back": "The Fed buying/selling government bonds to expand or contract the money supply"
        },
        {
          "id": "economics-201-l04-f3",
          "front": "Federal funds rate",
          "back": "The interest rate banks charge each other for overnight loans — the Fed's primary policy rate"
        },
        {
          "id": "economics-201-l04-f4",
          "front": "Expansionary monetary policy",
          "back": "Lowering interest rates / buying bonds to stimulate spending, investment, and economic growth"
        }
      ],
      "learningAids": [
        {
          "id": "economics-201-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "economics-201-l05",
      "title": "Fiscal Policy",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Define fiscal policy as government spending and taxation decisions",
        "Distinguish between discretionary and automatic fiscal stabilizers",
        "Analyze the multiplier effect and crowding out"
      ],
      "chunks": [
        {
          "id": "economics-201-l05-c1",
          "title": "Government Spending and Taxes",
          "content": "Fiscal policy is an important tool that governments use to help manage the economy. It involves two main actions: spending and taxation. When the government decides to use expansionary fiscal policy, it means they are either increasing their spending on public services and projects or reducing taxes for individuals and businesses. This approach is often taken during tough economic times, such as recessions, when people may not have enough money to spend. By boosting demand through these measures, the government aims to encourage economic growth and help people get back on their feet.\nOn the other hand, contractionary fiscal policy is used when the economy is growing too quickly, which can lead to inflation. In this case, the government might cut back on its spending or raise taxes to help slow down the economy. This helps to stabilize prices and maintain a healthy economic balance.\nIt's important to note that fiscal policy is different from monetary policy, which is controlled by the central bank. Fiscal policy is set by elected officials, which can make it more complicated to implement quickly because it often requires political agreement and discussion. Understanding these concepts is crucial for recognizing how government actions can impact our daily lives and the overall economy.\nContext recap: Fiscal policy is an important tool that governments use to help manage the economy. It involves two main actions: spending and taxation. When the government decides to use expansionary fiscal policy, it means they are either increasing their spending on public services and projects or reducing taxes for individuals and businesses. This approach is often taken during tough economic times, such as recessions, when people may not have enough money to spend.\nWhy this matters: Government Spending and Taxes helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "economics-201-l05-c2",
          "title": "The Multiplier Effect",
          "content": "The multiplier effect is an important concept in understanding how government spending influences the economy. When the government decides to spend one dollar, that dollar doesn't just disappear; instead, it becomes income for someone. This person might use that income to buy goods or services, which then provides income to another individual or business. This process continues, creating a chain reaction of spending and income generation throughout the economy.\nTo quantify this effect, we can use a formula known as the spending multiplier, which is expressed as: 1 / (1 - MPC). Here, MPC stands for the marginal propensity to consume, which is the fraction of additional income that a household is likely to spend on consumption rather than save. For instance, if the MPC is 0.8, this means that for every additional dollar earned, 80 cents will be spent. In this case, the spending multiplier would be 5. This implies that if the government increases its spending by $100 billion, it could potentially lead to an increase in the Gross Domestic Product (GDP) of $500 billion.\nHowever, it’s important to note that in real-world scenarios, the actual multiplier effect is often smaller than theoretical calculations suggest. This reduction can be attributed to several factors, including taxes that reduce disposable income, imports that leak spending out of the domestic economy, and monetary policy responses that can influence interest rates and investment. Understanding these dynamics helps us appreciate the complexities of fiscal policy and its impact on economic growth.\nContext recap: The multiplier effect is an important concept in understanding how government spending influences the economy. When the government decides to spend one dollar, that dollar doesn't just disappear; instead, it becomes income for someone. This person might use that income to buy goods or services, which then provides income to another individual or business. This process continues, creating a chain reaction of spending and income generation throughout the economy.\nWhy this matters: The Multiplier Effect helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "economics-201-l05-c3",
          "title": "Automatic Stabilizers and Crowding Out",
          "content": "Automatic stabilizers are important programs that help our economy stay balanced during different economic situations. These programs automatically change based on how the economy is doing, without needing new laws to be passed. For example, unemployment insurance provides financial support to people who lose their jobs, progressive income taxes adjust how much people pay based on their income, and food assistance programs help those in need access necessary nutrition. During tough times, like a recession, these programs expand to provide more help, and when the economy is doing well, they contract to reduce spending.\nOn the other hand, crowding out is a concept that describes a potential problem when the government borrows a lot of money. When the government borrows heavily, it can lead to higher interest rates. This means that it becomes more expensive for businesses and individuals to borrow money. As a result, private investment may decrease because people and companies might decide not to take out loans due to the higher costs. This competition for funds can lessen the positive impact that government spending might have on the economy, which is known as fiscal stimulus. Understanding these concepts helps us see how government actions can influence economic growth and stability.\nContext recap: Automatic stabilizers are important programs that help our economy stay balanced during different economic situations. These programs automatically change based on how the economy is doing, without needing new laws to be passed. For example, unemployment insurance provides financial support to people who lose their jobs, progressive income taxes adjust how much people pay based on their income, and food assistance programs help those in need access necessary nutrition. During tough times, like a recession, these programs expand to provide more help, and when the economy is doing well, they contract to reduce spending.\nWhy this matters: Automatic Stabilizers and Crowding Out helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-201-l05-a1",
          "title": "Match the Pairs",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "Expansionary fiscal policy",
              "right": "Increase spending or cut taxes to boost demand"
            },
            {
              "left": "Contractionary fiscal policy",
              "right": "Cut spending or raise taxes to cool the economy"
            },
            {
              "left": "Automatic stabilizer",
              "right": "Unemployment insurance — expands in recessions without legislation"
            },
            {
              "left": "Spending multiplier",
              "right": "1 / (1 - MPC) — amplifies the initial spending impact"
            },
            {
              "left": "Crowding out",
              "right": "Government borrowing raises rates, reducing private investment"
            },
            {
              "left": "MPC (Marginal Propensity to Consume)",
              "right": "The fraction of additional income that is spent rather than saved"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-201-l05-f1",
          "front": "Fiscal policy",
          "back": "Government use of spending and taxation to influence aggregate demand and economic performance"
        },
        {
          "id": "economics-201-l05-f2",
          "front": "Spending multiplier",
          "back": "1 / (1 - MPC) — each dollar of government spending generates more than $1 in total GDP"
        },
        {
          "id": "economics-201-l05-f3",
          "front": "Crowding out",
          "back": "Government borrowing raises interest rates, potentially reducing private investment and offsetting fiscal stimulus"
        },
        {
          "id": "economics-201-l05-f4",
          "front": "Automatic stabilizers",
          "back": "Built-in fiscal mechanisms (unemployment insurance, progressive taxes) that smooth the business cycle without legislation"
        }
      ],
      "learningAids": [
        {
          "id": "economics-201-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "economics-201-l06",
      "title": "Policy Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of monetary and fiscal policy"
      ],
      "questions": [
        {
          "id": "economics-201-l06-q1",
          "text": "When the Fed buys government bonds, it is conducting:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Contractionary monetary policy"
            },
            {
              "id": "b",
              "text": "Expansionary monetary policy"
            },
            {
              "id": "c",
              "text": "Fiscal policy"
            },
            {
              "id": "d",
              "text": "Trade policy"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Buying bonds injects money into the economy, lowering interest rates and stimulating spending."
        },
        {
          "id": "economics-201-l06-q2",
          "text": "If MPC = 0.75, the spending multiplier is:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "0.75"
            },
            {
              "id": "b",
              "text": "1.33"
            },
            {
              "id": "c",
              "text": "3"
            },
            {
              "id": "d",
              "text": "4"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Multiplier = 1/(1 - 0.75) = 1/0.25 = 4."
        },
        {
          "id": "economics-201-l06-q3",
          "text": "Which is an example of an automatic stabilizer?",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A new infrastructure bill"
            },
            {
              "id": "b",
              "text": "Unemployment insurance payments"
            },
            {
              "id": "c",
              "text": "A central bank rate cut"
            },
            {
              "id": "d",
              "text": "A trade agreement"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Unemployment insurance automatically expands during recessions without new legislation."
        },
        {
          "id": "economics-201-l06-q4",
          "text": "Crowding out occurs when government borrowing:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Lowers interest rates"
            },
            {
              "id": "b",
              "text": "Increases private investment"
            },
            {
              "id": "c",
              "text": "Raises interest rates, reducing private investment"
            },
            {
              "id": "d",
              "text": "Eliminates unemployment"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Heavy government borrowing competes with private borrowers for funds, pushing rates up."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      },
      "learningAids": [
        {
          "id": "economics-201-l06-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "economics-201-l07",
      "title": "Aggregate Demand and Aggregate Supply",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Draw and interpret the AD/AS model",
        "Explain demand-pull and cost-push inflation",
        "Analyze how shocks shift AD and AS curves"
      ],
      "chunks": [
        {
          "id": "economics-201-l07-c1",
          "title": "The AD/AS Framework",
          "content": "The Aggregate Demand and Aggregate Supply (AD/AS) model is an important tool that helps us understand how the entire economy works, and it can be illustrated on a single graph. In this model, aggregate demand (AD) is shown as a downward-sloping line. This means that when prices go down, consumers are able to buy more goods and services because they have more purchasing power. On the other hand, aggregate supply (AS) is represented in two different ways. The short-run aggregate supply curve is upward-sloping, which indicates that when prices increase, producers are motivated to produce more goods to take advantage of the higher prices. This is because higher prices can lead to higher profits for businesses. In contrast, the long-run aggregate supply curve is vertical at the level of potential GDP. This vertical line shows that, in the long run, the total output of the economy is determined by the resources available and the technology used, rather than by the price level. The point where the aggregate demand and aggregate supply curves meet is called equilibrium. This equilibrium point is crucial because it helps us understand both the overall price level in the economy and the real GDP, which is the total value of all goods and services produced. By studying the AD/AS model, we can gain insights into how different factors influence the economy and how policymakers can respond to changes in economic conditions.\nContext recap: The Aggregate Demand and Aggregate Supply (AD/AS) model is an important tool that helps us understand how the entire economy works, and it can be illustrated on a single graph. In this model, aggregate demand (AD) is shown as a downward-sloping line. This means that when prices go down, consumers are able to buy more goods and services because they have more purchasing power. On the other hand, aggregate supply (AS) is represented in two different ways.\nWhy this matters: The AD/AS Framework helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "economics-201-l07-c2",
          "title": "Demand-Pull vs. Cost-Push Inflation",
          "content": "Inflation is a term that describes the general increase in prices of goods and services in an economy. It can happen in two primary ways: demand-pull inflation and cost-push inflation. Let's break these down. Demand-pull inflation occurs when there is too much money circulating in the economy, which leads to people wanting to buy more goods than what is available. This situation causes the aggregate demand curve to shift to the right, moving beyond what the economy can produce. This can happen for several reasons, such as when consumers spend a lot of money, when the government introduces policies that make borrowing easier, or when there is a significant increase in government spending to stimulate the economy. On the flip side, we have cost-push inflation. This type of inflation happens when the costs of producing goods rise, which forces the aggregate supply curve to shift to the left. This can be caused by unexpected events, like a sudden increase in oil prices, higher wages for workers, or disruptions in supply chains that make it harder to get materials. When both prices are rising and the economy is producing less, we face a situation called stagflation. This is particularly tough for policymakers to manage. A well-known example of stagflation occurred during the oil crisis of the 1970s, which shows how these two types of inflation can significantly affect the economy and people's lives.\nContext recap: Inflation is a term that describes the general increase in prices of goods and services in an economy. It can happen in two primary ways: demand-pull inflation and cost-push inflation. Let's break these down. Demand-pull inflation occurs when there is too much money circulating in the economy, which leads to people wanting to buy more goods than what is available.\nWhy this matters: Demand-Pull vs. Cost-Push Inflation helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "economics-201-l07-c3",
          "title": "Shocks and Policy Responses",
          "content": "Economic shocks can have a big impact on how our economy functions, and it's important for policymakers to respond thoughtfully to these changes. For example, when there is a positive demand shock, like a surge in technology innovation, the aggregate demand curve shifts to the right. This means that more goods and services are being demanded, which can lead to an increase in both the Gross Domestic Product (GDP) and prices. In these situations, the Federal Reserve, which is responsible for managing the country's money supply and interest rates, might choose to raise interest rates. This is done to prevent the economy from growing too quickly, which can cause inflation to rise too high. On the flip side, a negative supply shock, such as a pandemic, can shift the aggregate supply curve to the left. This shift results in a decrease in GDP and an increase in prices, a situation known as stagflation, where the economy is not growing but prices are still rising. Responding to these economic shocks can be quite challenging. For instance, if policymakers try to stimulate demand to boost output, it might lead to even higher inflation. Conversely, if they focus on fighting inflation by tightening monetary policy, it could worsen the recession. This balancing act is often referred to as a policymaker's nightmare, as they work hard to keep the economy stable and healthy for everyone.\nContext recap: Economic shocks can have a big impact on how our economy functions, and it's important for policymakers to respond thoughtfully to these changes. For example, when there is a positive demand shock, like a surge in technology innovation, the aggregate demand curve shifts to the right. This means that more goods and services are being demanded, which can lead to an increase in both the Gross Domestic Product (GDP) and prices. In these situations, the Federal Reserve, which is responsible for managing the country's money supply and interest rates, might choose to raise interest rates.\nWhy this matters: Shocks and Policy Responses helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "economics-201-l07-f1",
          "front": "Aggregate demand (AD)",
          "back": "Total spending in the economy at each price level — slopes downward (lower prices → more spending)"
        },
        {
          "id": "economics-201-l07-f2",
          "front": "Long-run aggregate supply (LRAS)",
          "back": "Vertical at potential GDP — in the long run, output depends on resources and technology, not prices"
        },
        {
          "id": "economics-201-l07-f3",
          "front": "Demand-pull inflation",
          "back": "Inflation caused by excessive aggregate demand — 'too much money chasing too few goods'"
        },
        {
          "id": "economics-201-l07-f4",
          "front": "Stagflation",
          "back": "Simultaneous stagnation (falling output) and inflation — caused by negative supply shocks"
        }
      ],
      "learningAids": [
        {
          "id": "economics-201-l07-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "economics-201-l08",
      "title": "International Trade and Exchange Rates",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Explain comparative advantage as the basis for trade",
        "Analyze how exchange rates are determined in currency markets",
        "Evaluate the effects of tariffs and trade agreements"
      ],
      "chunks": [
        {
          "id": "economics-201-l08-c1",
          "title": "Why Countries Trade",
          "content": "Countries engage in trade primarily because of a concept known as comparative advantage. This principle suggests that nations can benefit by specializing in the production of goods and services where they have the lowest opportunity cost. In simpler terms, this means that countries should focus on making things they can produce most efficiently and then trade for other goods that they do not produce as well. Even if one country is more efficient at producing all goods, which is referred to as having an absolute advantage, both countries can still gain from focusing on their strengths and trading with each other. For instance, the United States imports clothing from Bangladesh while exporting software. This happens because Bangladesh is better at producing clothing, while the U.S. excels in software development. By specializing in what they do best and trading, countries can achieve a more efficient use of their resources, leading to greater economic benefits for everyone involved. This interconnectedness through trade helps improve the standard of living and fosters economic growth globally.\nContext recap: Countries engage in trade primarily because of a concept known as comparative advantage. This principle suggests that nations can benefit by specializing in the production of goods and services where they have the lowest opportunity cost. In simpler terms, this means that countries should focus on making things they can produce most efficiently and then trade for other goods that they do not produce as well. Even if one country is more efficient at producing all goods, which is referred to as having an absolute advantage, both countries can still gain from focusing on their strengths and trading with each other."
        },
        {
          "id": "economics-201-l08-c2",
          "title": "Exchange Rates",
          "content": "An exchange rate is like the price tag on money from different countries. It tells us how much one currency is worth when we want to trade it for another currency. In a floating exchange rate system, the value of each currency changes based on how much people want to buy or sell it. When more people want to buy a certain currency, that currency becomes stronger, which we call appreciation. This means that if you are buying things from other countries (imports), they become cheaper for you. However, if you are selling things to other countries (exports), they become more expensive for buyers in those countries. On the other hand, if there is too much of a currency available and not enough people want it, that currency becomes weaker, or depreciates. This situation makes exports cheaper, which can help a country sell more goods abroad, but it also makes imports more expensive, which can hurt consumers. To help keep things stable, central banks, which are like the financial guardians of a country, sometimes step in to manage exchange rates. They do this to prevent big swings in currency values that could disrupt the economy and make it harder for people and businesses to plan their finances.\nContext recap: An exchange rate is like the price tag on money from different countries. It tells us how much one currency is worth when we want to trade it for another currency. In a floating exchange rate system, the value of each currency changes based on how much people want to buy or sell it. When more people want to buy a certain currency, that currency becomes stronger, which we call appreciation.\nWhy this matters: Exchange Rates helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "economics-201-l08-c3",
          "title": "Tariffs, Quotas, and Free Trade",
          "content": "Tariffs and quotas are important tools that governments use to help protect their own industries from competition coming from other countries. A tariff is a type of tax that is added to imported goods, which means that these goods can become more expensive for people who want to buy them. For example, if a country imposes a tariff on imported cars, those cars might cost more than cars made in the country itself. Quotas, on the other hand, are limits on how many of a certain product can be brought into a country. While these measures can help local businesses by giving them a better chance to compete, they can also lead to higher prices for consumers and may reduce the overall economic well-being of the country. Supporters of these protective measures argue that they are necessary for helping new industries grow, keeping the country safe, and preventing unfair competition from abroad. However, critics of tariffs and quotas point out that they can lead to higher prices for everyday items, provoke other countries to retaliate with their own tariffs, and make the market less efficient. Free trade agreements, such as NAFTA/USMCA and the EU single market, work to lower these barriers to trade, which can help increase the overall economy (GDP). However, it is important to note that while these agreements can create more opportunities, they can also lead to job losses in certain industries as companies adjust to the new competitive landscape.\nContext recap: Tariffs and quotas are important tools that governments use to help protect their own industries from competition coming from other countries. A tariff is a type of tax that is added to imported goods, which means that these goods can become more expensive for people who want to buy them. For example, if a country imposes a tariff on imported cars, those cars might cost more than cars made in the country itself. Quotas, on the other hand, are limits on how many of a certain product can be brought into a country.\nWhy this matters: Tariffs, Quotas, and Free Trade helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-201-l08-a1",
          "title": "Match the Pairs",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "Comparative advantage",
              "right": "Produce goods where your opportunity cost is lowest"
            },
            {
              "left": "Tariff",
              "right": "A tax on imported goods — raises prices for consumers"
            },
            {
              "left": "Currency appreciation",
              "right": "Currency strengthens — imports cheaper, exports more expensive"
            },
            {
              "left": "Currency depreciation",
              "right": "Currency weakens — exports cheaper, imports more expensive"
            },
            {
              "left": "Trade deficit",
              "right": "Imports exceed exports — NX is negative"
            },
            {
              "left": "Free trade agreement",
              "right": "Reduces trade barriers between member countries"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-201-l08-f1",
          "front": "Comparative advantage",
          "back": "A country should specialize in goods where it has the lowest opportunity cost — the basis for mutually beneficial trade"
        },
        {
          "id": "economics-201-l08-f2",
          "front": "Exchange rate",
          "back": "The price of one currency in terms of another — determined by supply and demand in foreign exchange markets"
        },
        {
          "id": "economics-201-l08-f3",
          "front": "Tariff",
          "back": "A tax on imported goods — protects domestic producers but raises prices for consumers and reduces total welfare"
        },
        {
          "id": "economics-201-l08-f4",
          "front": "Trade deficit",
          "back": "When a country's imports exceed its exports — not necessarily bad, but can indicate structural economic issues"
        }
      ],
      "learningAids": [
        {
          "id": "economics-201-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "economics-201-l09",
      "title": "AD/AS & Trade Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of AD/AS model and international trade"
      ],
      "questions": [
        {
          "id": "economics-201-l09-q1",
          "text": "Cost-push inflation is caused by:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Excessive consumer spending"
            },
            {
              "id": "b",
              "text": "Rising production costs shifting AS left"
            },
            {
              "id": "c",
              "text": "Central bank printing money"
            },
            {
              "id": "d",
              "text": "Government tax cuts"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Cost-push inflation occurs when supply-side shocks (oil prices, wages) increase production costs."
        },
        {
          "id": "economics-201-l09-q2",
          "text": "If the US dollar appreciates, US exports become:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Cheaper for foreign buyers"
            },
            {
              "id": "b",
              "text": "More expensive for foreign buyers"
            },
            {
              "id": "c",
              "text": "Unaffected"
            },
            {
              "id": "d",
              "text": "Illegal"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A stronger dollar means foreign buyers need more of their currency to buy US goods."
        },
        {
          "id": "economics-201-l09-q3",
          "text": "Stagflation is particularly difficult for policymakers because:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Both GDP and prices are falling"
            },
            {
              "id": "b",
              "text": "Stimulating demand worsens inflation; fighting inflation worsens recession"
            },
            {
              "id": "c",
              "text": "Unemployment is at the natural rate"
            },
            {
              "id": "d",
              "text": "There is no theory to explain it"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Stagflation creates a dilemma: policies that help one problem worsen the other."
        },
        {
          "id": "economics-201-l09-q4",
          "text": "Tariffs primarily benefit:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Consumers who buy the imported good"
            },
            {
              "id": "b",
              "text": "Domestic producers competing with imports"
            },
            {
              "id": "c",
              "text": "Foreign exporters"
            },
            {
              "id": "d",
              "text": "All parties equally"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Tariffs protect domestic producers by making imported alternatives more expensive."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "economics-201-l10",
      "title": "Mastery Quiz: Macroeconomics",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Synthesize all macroeconomics concepts"
      ],
      "questions": [
        {
          "id": "economics-201-l10-q1",
          "text": "During a recession, the appropriate monetary policy response is to:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Raise interest rates"
            },
            {
              "id": "b",
              "text": "Lower interest rates"
            },
            {
              "id": "c",
              "text": "Increase reserve requirements"
            },
            {
              "id": "d",
              "text": "Sell government bonds"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Lower rates encourage borrowing and spending, stimulating aggregate demand."
        },
        {
          "id": "economics-201-l10-q2",
          "text": "The long-run aggregate supply curve is vertical because:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Prices are fixed in the long run"
            },
            {
              "id": "b",
              "text": "Output depends on resources and technology, not the price level"
            },
            {
              "id": "c",
              "text": "Government always intervenes"
            },
            {
              "id": "d",
              "text": "There is no inflation in the long run"
            }
          ],
          "correctOptionId": "b",
          "explanation": "In the long run, an economy produces at its potential output regardless of the price level."
        },
        {
          "id": "economics-201-l10-q3",
          "text": "A country with a comparative advantage in software should:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Produce software and everything else domestically"
            },
            {
              "id": "b",
              "text": "Import software and export raw materials"
            },
            {
              "id": "c",
              "text": "Specialize in software and trade for other goods"
            },
            {
              "id": "d",
              "text": "Avoid international trade"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Comparative advantage means specializing where your opportunity cost is lowest, then trading."
        },
        {
          "id": "economics-201-l10-q4",
          "text": "Transfer payments (like Social Security) are NOT included in the G component of GDP because:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "They are too small to matter"
            },
            {
              "id": "b",
              "text": "They redistribute income but don't directly purchase goods or services"
            },
            {
              "id": "c",
              "text": "They are paid by the private sector"
            },
            {
              "id": "d",
              "text": "They are counted in the C component instead"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Transfer payments shift money between people but don't represent government purchases of output."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 1,
          "analyze": 1
        }
      }
    },
    {
      "id": "economics-201-l11",
      "title": "Money, Banking, and Financial Markets",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Explain the money creation process through fractional reserve banking",
        "Describe how financial markets channel savings to investment",
        "Analyze the causes and effects of financial crises"
      ],
      "chunks": [
        {
          "id": "economics-201-l11-c1",
          "title": "How Banks Create Money",
          "content": "Banks are essential institutions in our economy, and one of their most important roles is the creation of money. This fascinating process happens through a system called fractional reserve banking. In simple terms, this means that banks are only required to keep a small portion of the money that people deposit with them as reserves. The rest of the money can be lent out to individuals and businesses. For example, if the reserve requirement is 10%, this means that for every $1,000 deposited, the bank must keep $100 in reserve but can lend out $900.\nWhen the $900 is lent out and then deposited in another bank, that bank can also lend out a portion of it. This cycle continues, allowing money to circulate and multiply throughout the economy. This phenomenon is known as the money multiplier effect. To illustrate, if we start with a single $1,000 deposit, it can lead to the creation of up to $10,000 in total money supply as it gets lent out and re-deposited multiple times. This process not only helps individuals access funds for various needs but also stimulates economic growth by making more money available for spending and investment. Understanding how banks create money is crucial for grasping the broader concepts of macroeconomics and financial markets.\nContext recap: Banks are essential institutions in our economy, and one of their most important roles is the creation of money. This fascinating process happens through a system called fractional reserve banking. In simple terms, this means that banks are only required to keep a small portion of the money that people deposit with them as reserves. The rest of the money can be lent out to individuals and businesses.\nWhy this matters: How Banks Create Money helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "economics-201-l11-c2",
          "title": "Financial Markets",
          "content": "Financial markets are essential systems that connect people who have extra money, known as savers, with those who need money, called borrowers. Savers might be individuals or institutions that want to invest their surplus funds, while borrowers could be governments or businesses looking for financial support to grow or fund projects. In these markets, bonds play a crucial role; they allow governments and corporations to borrow money by issuing IOUs, which are promises to pay back the borrowed amount with interest over time. On the other hand, stock markets provide a platform for companies to raise money by selling shares, which represent ownership in the company. This process not only helps businesses grow but also allows investors to potentially earn returns on their investments. Interest rates are a key factor in this entire system; they indicate the cost of borrowing money. When interest rates are set, they help manage the flow of trillions of dollars between savers and investors, ensuring that funds are used effectively. Efficient financial markets are important because they ensure that capital is allocated to its highest-value uses, directing resources toward projects and investments that will benefit the economy the most and contribute to overall growth and stability.\nContext recap: Financial markets are essential systems that connect people who have extra money, known as savers, with those who need money, called borrowers. Savers might be individuals or institutions that want to invest their surplus funds, while borrowers could be governments or businesses looking for financial support to grow or fund projects. In these markets, bonds play a crucial role; they allow governments and corporations to borrow money by issuing IOUs, which are promises to pay back the borrowed amount with interest over time. On the other hand, stock markets provide a platform for companies to raise money by selling shares, which represent ownership in the company.\nWhy this matters: Financial Markets helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "economics-201-l11-c3",
          "title": "Financial Crises",
          "content": "Financial crises can happen when people suddenly lose trust in the financial system. A significant example of this is the financial crisis of 2008. This crisis began when banks started giving out risky mortgage loans, which they then combined into complicated financial products called securities. When housing prices began to drop, these securities lost their value, causing many banks to fail. As a result, credit became hard to obtain, leading to a serious recession that impacted countless individuals and families. The important lesson we can learn from this crisis is the critical role of financial regulation. Regulations such as capital requirements, which ensure banks have enough money to cover their risks, stress tests that evaluate how banks would perform in tough economic conditions, and consumer protection laws that safeguard individuals from unfair practices are all vital. These measures help prevent banks from taking excessive risks and ensure that the financial system remains stable and trustworthy for everyone.\nContext recap: Financial crises can happen when people suddenly lose trust in the financial system. A significant example of this is the financial crisis of 2008. This crisis began when banks started giving out risky mortgage loans, which they then combined into complicated financial products called securities. When housing prices began to drop, these securities lost their value, causing many banks to fail.\nWhy this matters: Financial Crises helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-201-l11-a1",
          "title": "Match the Pairs",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "Fractional reserve banking",
              "right": "Banks keep a fraction of deposits and lend the rest"
            },
            {
              "left": "Money multiplier",
              "right": "1 / reserve ratio — amplifies initial deposits into larger money supply"
            },
            {
              "left": "Bond market",
              "right": "Where governments and firms borrow by issuing debt IOUs"
            },
            {
              "left": "Stock market",
              "right": "Where firms raise equity capital by selling ownership shares"
            },
            {
              "left": "2008 financial crisis",
              "right": "Risky mortgages, complex securities, bank failures, credit freeze"
            },
            {
              "left": "Moral hazard",
              "right": "Taking excessive risk because someone else bears the cost (e.g., bailouts)"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-201-l11-f1",
          "front": "Fractional reserve banking",
          "back": "Banks hold only a fraction of deposits as reserves and lend the rest — this process creates new money"
        },
        {
          "id": "economics-201-l11-f2",
          "front": "Money multiplier",
          "back": "1 / reserve ratio — the maximum amount of money the banking system can create from initial deposits"
        },
        {
          "id": "economics-201-l11-f3",
          "front": "Moral hazard",
          "back": "When one party takes risks because another party bears the consequences — e.g., banks expecting government bailouts"
        }
      ]
    },
    {
      "id": "economics-201-l12",
      "title": "Mastery Retest",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate comprehensive macroeconomics mastery"
      ],
      "questions": [
        {
          "id": "economics-201-l12-q1",
          "text": "The money multiplier with a 20% reserve requirement is:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "2"
            },
            {
              "id": "b",
              "text": "5"
            },
            {
              "id": "c",
              "text": "10"
            },
            {
              "id": "d",
              "text": "20"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Money multiplier = 1 / 0.20 = 5."
        },
        {
          "id": "economics-201-l12-q2",
          "text": "Demand-pull inflation is caused by:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rising production costs"
            },
            {
              "id": "b",
              "text": "Supply chain disruptions"
            },
            {
              "id": "c",
              "text": "Excessive aggregate demand beyond capacity"
            },
            {
              "id": "d",
              "text": "Currency appreciation"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Too much spending relative to the economy's capacity drives prices up."
        },
        {
          "id": "economics-201-l12-q3",
          "text": "Automatic stabilizers differ from discretionary fiscal policy because they:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Require new legislation each time"
            },
            {
              "id": "b",
              "text": "Activate automatically without new policy action"
            },
            {
              "id": "c",
              "text": "Only work during expansions"
            },
            {
              "id": "d",
              "text": "Are controlled by the central bank"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Programs like unemployment insurance automatically expand during downturns without new laws."
        },
        {
          "id": "economics-201-l12-q4",
          "text": "Moral hazard in banking refers to:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Banks refusing to lend"
            },
            {
              "id": "b",
              "text": "Banks taking excessive risks because they expect to be bailed out"
            },
            {
              "id": "c",
              "text": "Consumers saving too much"
            },
            {
              "id": "d",
              "text": "The government printing too much money"
            }
          ],
          "correctOptionId": "b",
          "explanation": "When banks believe the government will rescue them, they have less incentive to manage risk carefully."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 1,
          "analyze": 1
        }
      }
    },
    {
      "id": "economics-201-l13",
      "title": "Economic Growth and Development",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Identify the sources of long-run economic growth",
        "Explain the role of institutions, human capital, and technology",
        "Distinguish between economic growth and economic development"
      ],
      "chunks": [
        {
          "id": "economics-201-l13-c1",
          "title": "Sources of Growth",
          "content": "Long-term economic growth is influenced by several important factors that work together to enhance a country's economy. The first factor is physical capital accumulation. This means increasing the amount of machines, buildings, and infrastructure, such as roads and bridges, that are necessary for production. When a country invests in these physical assets, it can produce more goods and services efficiently.\nThe second factor is human capital, which refers to the education, skills, and overall health of the workforce. A well-educated and skilled workforce is more productive and can adapt to new technologies and methods of production, leading to greater economic output.\nThe third factor is technological progress. Innovations and advancements in technology allow us to create more products and services using the same amount of resources. For example, new software can streamline processes, making production faster and cheaper.\nFinally, the quality of institutions plays a crucial role in economic growth. This includes having a strong rule of law, protecting property rights, minimizing corruption, and ensuring stable governance. These institutional factors create an environment where businesses can thrive. Among all these factors, technological advancements are particularly significant because they can lead to sustained and unlimited growth over time, driving economies forward into the future.\nContext recap: Long-term economic growth is influenced by several important factors that work together to enhance a country's economy. The first factor is physical capital accumulation. This means increasing the amount of machines, buildings, and infrastructure, such as roads and bridges, that are necessary for production. When a country invests in these physical assets, it can produce more goods and services efficiently.\nWhy this matters: Sources of Growth helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "economics-201-l13-c2",
          "title": "Growth vs. Development",
          "content": "Economic growth and economic development are two important ideas in understanding how countries improve their economies and the lives of their citizens. Economic growth specifically refers to an increase in GDP per capita, which is a way to measure how much money, on average, each person in a country is making. This number can tell us if the economy is getting bigger. However, economic development is a much broader concept. It includes not just how much money people are making, but also how their lives are improving in various ways. This can mean reducing poverty, providing better health care, enhancing education opportunities, and building better infrastructure, like roads and schools.\nInterestingly, a country can have economic growth without real development. For example, some oil-rich countries may have a high GDP, but they can also have significant inequality, meaning that not everyone benefits equally from the wealth. On the other hand, a country can focus on improving health and education and achieve development even if it doesn't see rapid economic growth. To help measure how well a country is doing in terms of development, we use the Human Development Index (HDI). This index looks at important factors like income, life expectancy, and education levels to give us a clearer picture of how people are really living in that country.\nContext recap: Economic growth and economic development are two important ideas in understanding how countries improve their economies and the lives of their citizens. Economic growth specifically refers to an increase in GDP per capita, which is a way to measure how much money, on average, each person in a country is making. This number can tell us if the economy is getting bigger. However, economic development is a much broader concept.\nWhy this matters: Growth vs. Development helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "economics-201-l13-c3",
          "title": "Why Some Countries Are Rich and Others Poor",
          "content": "The differences in living standards between countries can be quite striking. For instance, the average income, measured as GDP per capita, in wealthier nations can be 50 to 100 times higher than that of the poorest countries. This significant gap can be attributed to several important factors. First, geography plays a vital role; countries with abundant natural resources and favorable climates often have better economic opportunities. Second, the quality of institutions is crucial. Institutions include the protection of property rights and the enforcement of the rule of law. When these institutions are stable and effective, they encourage investment and innovation, which are essential for economic growth. Additionally, cultural attitudes, such as how societies view work and saving, can impact economic performance. Historical factors, including the effects of colonialism and the timing of the industrial revolution, also shape economic conditions. Finally, government policies related to trade and education are significant as they determine how open a country is to global markets and how well it invests in its people. Among all these factors, strong institutions are often seen as the most important because they create a supportive environment for economic development and prosperity.\nContext recap: The differences in living standards between countries can be quite striking. For instance, the average income, measured as GDP per capita, in wealthier nations can be 50 to 100 times higher than that of the poorest countries. This significant gap can be attributed to several important factors. First, geography plays a vital role; countries with abundant natural resources and favorable climates often have better economic opportunities.\nWhy this matters: Why Some Countries Are Rich and Others Poor helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "economics-201-l13-f1",
          "front": "Economic growth",
          "back": "An increase in real GDP per capita over time — more output per person"
        },
        {
          "id": "economics-201-l13-f2",
          "front": "Human capital",
          "back": "The skills, knowledge, and health of the workforce — a key driver of productivity and growth"
        },
        {
          "id": "economics-201-l13-f3",
          "front": "Human Development Index (HDI)",
          "back": "Measures development using income, life expectancy, and education — broader than GDP alone"
        }
      ]
    },
    {
      "id": "economics-201-l14",
      "title": "Coaching Clinic: Macro Mistakes",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Identify common macro misconceptions",
        "Distinguish correlation from causation in economic data",
        "Apply economic reasoning to current events"
      ],
      "chunks": [
        {
          "id": "economics-201-l14-c1",
          "title": "Common Macro Mistakes",
          "content": "Let's explore some common mistakes people make when thinking about macroeconomics, which is the study of the economy as a whole.\n**Mistake 1: Thinking that government debt is the same as household debt.** It's important to understand that governments operate differently than families. While families need to pay off their debts, governments have the ability to print money and collect taxes. Instead of focusing on paying off debt completely, governments aim to keep their debt manageable in relation to the size of the economy, known as the debt-to-GDP ratio.\n**Mistake 2: Believing that trade deficits are a sign of economic failure.** A trade deficit occurs when a country imports more goods than it exports. While it may sound negative, it can also mean that consumers are enjoying a wider variety of products. This situation can be beneficial as it reflects a strong demand for goods and services.\n**Mistake 3: Assuming that inflation is always harmful.** Inflation, which is the rate at which prices rise, can actually be a sign of a healthy economy when it is moderate, like around 2%. This level of inflation helps prevent deflation, which can be damaging, and allows central banks to lower interest rates when necessary. Understanding these nuances helps us make better economic decisions.\nContext recap: Let's explore some common mistakes people make when thinking about macroeconomics, which is the study of the economy as a whole. **Mistake 1: Thinking that government debt is the same as household debt.** It's important to understand that governments operate differently than families. While families need to pay off their debts, governments have the ability to print money and collect taxes. Instead of focusing on paying off debt completely, governments aim to keep their debt manageable in relation to the size of the economy, known as the debt-to-GDP ratio.\nWhy this matters: Common Macro Mistakes helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "economics-201-l14-c2",
          "title": "Correlation vs. Causation",
          "content": "In the field of economics, we frequently encounter data that reveals connections between various events or trends. However, it is vital to understand the difference between correlation and causation. **What does this mean?** Correlation refers to a situation where two things occur simultaneously, but it does not imply that one thing causes the other. For instance, during the summer months, both ice cream sales and drowning incidents tend to rise. This does not mean that purchasing ice cream leads to drowning; rather, both are influenced by the warm weather that encourages people to swim and enjoy ice cream treats.\nSimilarly, when we observe stock markets increasing alongside a rise in consumer confidence, we must exercise caution. Just because these two trends happen at the same time does not mean that one is responsible for the other. To gain a clearer understanding of the relationship, we should ask ourselves several important questions: Is there a logical explanation for this connection? Could there be another factor that affects both variables? Would conducting an experiment help us clarify the nature of the relationship?\nBeing skeptical and asking these questions is crucial for effectively analyzing economic policies. It allows us to avoid jumping to conclusions based on potentially misleading data and ensures that our interpretations are grounded in sound reasoning.\nContext recap: In the field of economics, we frequently encounter data that reveals connections between various events or trends. However, it is vital to understand the difference between correlation and causation. **What does this mean?** Correlation refers to a situation where two things occur simultaneously, but it does not imply that one thing causes the other. For instance, during the summer months, both ice cream sales and drowning incidents tend to rise.\nWhy this matters: Correlation vs. Causation helps learners in Business connect ideas from Macroeconomics and Policy to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-201-l14-a1",
          "title": "Sort into Categories",
          "type": "sorting_buckets",
          "buckets": [
            "True Statement",
            "Common Misconception"
          ],
          "items": [
            {
              "text": "Government debt works exactly like household debt",
              "bucket": "Common Misconception"
            },
            {
              "text": "Trade deficits always mean an economy is failing",
              "bucket": "Common Misconception"
            },
            {
              "text": "Moderate inflation (2%) is generally healthy for an economy",
              "bucket": "True Statement"
            },
            {
              "text": "The money multiplier amplifies initial deposits",
              "bucket": "True Statement"
            },
            {
              "text": "Printing more money always causes hyperinflation",
              "bucket": "Common Misconception"
            },
            {
              "text": "Institutional quality is a key driver of economic growth",
              "bucket": "True Statement"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-201-l14-f1",
          "front": "Correlation vs. causation",
          "back": "Two variables moving together doesn't prove one causes the other — always look for mechanisms and confounding factors"
        },
        {
          "id": "economics-201-l14-f2",
          "front": "Debt-to-GDP ratio",
          "back": "Government debt as a share of GDP — a better measure of debt sustainability than the absolute debt amount"
        }
      ]
    },
    {
      "id": "economics-201-l15",
      "title": "Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate comprehensive mastery of macroeconomics"
      ],
      "questions": [
        {
          "id": "economics-201-l15-q1",
          "text": "Which factor is considered the most important for long-run growth?",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Natural resources"
            },
            {
              "id": "b",
              "text": "Government spending"
            },
            {
              "id": "c",
              "text": "Technological progress"
            },
            {
              "id": "d",
              "text": "Low interest rates"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Technology is the only source of unlimited, sustained growth — it lets us do more with the same resources."
        },
        {
          "id": "economics-201-l15-q2",
          "text": "The aggregate demand curve slopes downward because at lower prices:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Firms produce less"
            },
            {
              "id": "b",
              "text": "Consumers and businesses can buy more with their money"
            },
            {
              "id": "c",
              "text": "Interest rates rise"
            },
            {
              "id": "d",
              "text": "Imports increase"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Lower prices increase the real value of money, boosting purchasing power and spending."
        },
        {
          "id": "economics-201-l15-q3",
          "text": "The 2008 financial crisis was primarily triggered by:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Hyperinflation in the US"
            },
            {
              "id": "b",
              "text": "A collapse in the housing market and risky mortgage-backed securities"
            },
            {
              "id": "c",
              "text": "A sudden oil price spike"
            },
            {
              "id": "d",
              "text": "Government default on debt"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Risky subprime mortgages were packaged into securities that collapsed when housing prices fell."
        },
        {
          "id": "economics-201-l15-q4",
          "text": "HDI measures economic development using:",
          "skillId": "economics-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "GDP, trade balance, and inflation"
            },
            {
              "id": "b",
              "text": "Income, life expectancy, and education"
            },
            {
              "id": "c",
              "text": "Stock market performance and unemployment"
            },
            {
              "id": "d",
              "text": "Government spending and tax revenue"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Human Development Index uses income per capita, life expectancy, and education years."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 1,
          "analyze": 1
        }
      }
    }
  ]
};
