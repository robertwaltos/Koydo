import type { LearningModule } from "@/lib/modules/types";

export const FinancialLiteracy101Module: LearningModule = {
  "id": "financial-literacy-101",
  "title": "Financial Literacy Basics",
  "description": "Master the foundations of personal finance — from distinguishing needs and wants to understanding compound interest, budgeting, earning, smart spending, and credit. Build the money skills that last a lifetime.",
  "subject": "Financial Literacy",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "enriched-from-epub"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "3.0.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Distinguish between needs and wants and explain opportunity cost",
    "Identify different ways people earn income and differentiate gross pay from net pay",
    "Create a simple budget using the 50/30/20 rule",
    "Calculate compound interest and apply the Rule of 72",
    "Compare prices using unit cost and explain why comparison shopping matters",
    "Define credit score, APR, and describe how responsible credit use is built"
  ],
  "lessons": [
    {
      "id": "financial-literacy-101-l01",
      "title": "Needs vs. Wants",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Classify everyday purchases as needs or wants",
        "Explain opportunity cost with a concrete example",
        "Describe the 24-hour rule for avoiding impulse purchases"
      ],
      "chunks": [
        {
          "id": "financial-literacy-101-l01-c1",
          "title": "Needs and Wants",
          "content": "A need is something you must have to survive and stay healthy — food, shelter, clothing, and healthcare are all needs. A want is something you would like to have but can live without — toys, video games, brand-name sneakers, and concert tickets are wants. The key test: 'Could I survive and stay healthy without this?' If yes, it is a want. Understanding this difference is the first step to making smart money decisions, because needs should always be funded before wants."
        },
        {
          "id": "financial-literacy-101-l01-c2",
          "title": "Opportunity Cost",
          "content": "Every time you choose to spend money on one thing, you give up the chance to spend it on something else. This trade-off is called opportunity cost. For example, if you have $20 and you buy a toy, the opportunity cost is the book (or anything else) you could have bought with that same $20. Opportunity cost is not just about money — it applies to time too. An hour spent playing video games is an hour you cannot spend reading or earning money. Smart spenders think about what they are giving up before they buy."
        },
        {
          "id": "financial-literacy-101-l01-c3",
          "title": "The 24-Hour Rule",
          "content": "Impulse buying is purchasing something on the spot without thinking it through. The 24-hour rule is a simple strategy to fight impulse buying: when you see something you want, wait 24 hours before buying it. If you still want it the next day and can afford it after covering your needs, go ahead. Many people find that after waiting, they no longer want the item — saving themselves money. This rule is especially powerful for online shopping, where one-click purchases make impulse buying dangerously easy."
        }
      ],
      "flashcards": [
        {
          "id": "financial-literacy-101-l01-f1",
          "front": "Need",
          "back": "Something you must have to survive and stay healthy, such as food, shelter, clothing, and healthcare."
        },
        {
          "id": "financial-literacy-101-l01-f2",
          "front": "Want",
          "back": "Something you would like to have but can live without, such as toys, video games, or brand-name sneakers."
        },
        {
          "id": "financial-literacy-101-l01-f3",
          "front": "Opportunity Cost",
          "back": "The value of the next best alternative you give up when you make a choice. Spending $20 on a toy means giving up the $20 book you could have bought."
        },
        {
          "id": "financial-literacy-101-l01-f4",
          "front": "24-Hour Rule",
          "back": "Wait 24 hours before buying something you want. If you still want it and can afford it after covering needs, go ahead. Fights impulse buying."
        },
        {
          "id": "financial-literacy-101-l01-f5",
          "front": "Risk-Return Trade-Off (Bernstein)",
          "back": "Higher expected returns require accepting higher uncertainty. Safe investments like Treasury bills offer lower returns; stocks offer higher returns as compensation for enduring volatility — the equity risk premium."
        },
        {
          "id": "financial-literacy-101-l01-f6",
          "front": "Opportunity Cost of College Choice (Debt-Free U)",
          "back": "Choosing an expensive college over an affordable one has massive opportunity costs: student loan debt means years of payments instead of saving and investing. The school's prestige often matters less than graduating debt-free."
        }
      ],
      "learningAids": [
        {
          "id": "financial-literacy-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "financial-literacy-101-l02",
      "title": "Earning Money",
      "type": "video",
      "duration": 10,
      "objectives": [
        "List four common ways people earn income",
        "Explain the difference between gross pay and net pay",
        "Calculate profit from a simple business scenario"
      ],
      "chunks": [
        {
          "id": "financial-literacy-101-l02-c1",
          "title": "How People Earn Money",
          "content": "There are many ways people earn income. A salary is a fixed amount paid per year, usually split into monthly or biweekly paychecks — a teacher earning $50,000 per year receives about $4,167 per month. Hourly wages pay based on hours worked — a lifeguard earning $12 per hour who works 20 hours earns $240 that week. An allowance is money given regularly by parents, often in exchange for chores. Entrepreneurship means starting your own business to earn money, like mowing lawns, selling crafts, or tutoring classmates."
        },
        {
          "id": "financial-literacy-101-l02-c2",
          "title": "Gross Pay vs. Net Pay",
          "content": "Gross pay is the total amount you earn before anything is taken out. Net pay (also called take-home pay) is what you actually receive after deductions. The biggest deduction is taxes — money the government collects to pay for schools, roads, hospitals, and public services. A simple rule of thumb: if you earn $100, about $20 goes to taxes, so your net pay is roughly $80. Other deductions can include health insurance and retirement savings. Always base your budget on net pay, not gross pay, because net pay is the money you actually have to spend."
        },
        {
          "id": "financial-literacy-101-l02-c3",
          "title": "Lemonade Stand Economics",
          "content": "Running even a simple business teaches the formula: Revenue - Costs = Profit. Suppose you run a lemonade stand. You spend $10 on lemons, sugar, and cups (these are your costs). You sell 40 cups at $1 each, earning $40 in revenue. Your profit is $40 - $10 = $30. But what if it rains and you only sell 5 cups? Revenue is $5, costs are still $10, so your profit is $5 - $10 = -$5 — a loss. This shows that running a business involves risk, and entrepreneurs must plan for unexpected outcomes."
        }
      ],
      "flashcards": [
        {
          "id": "financial-literacy-101-l02-f1",
          "front": "Income",
          "back": "Money received in exchange for work, selling goods, or from other sources like allowances or investments."
        },
        {
          "id": "financial-literacy-101-l02-f2",
          "front": "Gross Pay",
          "back": "The total amount you earn before taxes and other deductions are taken out."
        },
        {
          "id": "financial-literacy-101-l02-f3",
          "front": "Net Pay",
          "back": "The amount of money you actually take home after taxes and deductions are subtracted from your gross pay. Also called take-home pay."
        },
        {
          "id": "financial-literacy-101-l02-f4",
          "front": "Entrepreneur",
          "back": "A person who starts and runs their own business to earn money. Takes risks but can earn profits."
        },
        {
          "id": "financial-literacy-101-l02-f5",
          "front": "Revenue",
          "back": "The total money earned from selling goods or services, before subtracting costs. Revenue - Costs = Profit."
        }
      ],
      "learningAids": [
        {
          "id": "financial-literacy-101-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "financial-literacy-101-l03",
      "title": "Budgeting Basics",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Explain the 50/30/20 budgeting rule",
        "Track spending by category for one week",
        "Build a simple monthly budget from a worked example"
      ],
      "chunks": [
        {
          "id": "financial-literacy-101-l03-c1",
          "title": "The 50/30/20 Rule",
          "content": "The 50/30/20 rule is one of the simplest budgeting frameworks. It says to divide your after-tax income (net pay) into three buckets: 50% goes to needs — rent, groceries, utilities, transportation, and insurance. 30% goes to wants — dining out, entertainment, hobbies, and subscriptions. 20% goes to savings — emergency fund, future goals, and investments. For example, if your monthly net income is $1,000, you would spend up to $500 on needs, $300 on wants, and save at least $200. The beauty of this rule is its simplicity — it works whether you earn $200 or $2,000 a month."
        },
        {
          "id": "financial-literacy-101-l03-c2",
          "title": "Tracking Your Spending",
          "content": "Before you can budget well, you need to know where your money actually goes. Try this: for one full week, write down every single purchase — even small ones like a $1.50 snack or a $0.99 app. At the end of the week, sort each purchase into three categories: Need, Want, or Saving. Most people are surprised by how much they spend on small wants that add up. A $3 snack every school day is $15 per week, $60 per month, and $720 per year. Tracking makes invisible spending visible, and visible spending is easier to control."
        },
        {
          "id": "financial-literacy-101-l03-c3",
          "title": "Building a Simple Budget",
          "content": "Let us build a budget together. Suppose you receive a $200 monthly allowance. Using the 50/30/20 rule: $100 (50%) goes to needs — school lunch and supplies. $60 (30%) goes to wants — movies, games, treats with friends. $40 (20%) goes to savings — a savings account for a bigger goal. Now track your actual spending for a month. If you spent $110 on needs, you overspent by $10. You can fix this by bringing lunch from home twice a week to save about $12. A budget is not a punishment — it is a plan that puts you in control of your money instead of wondering where it went."
        }
      ],
      "flashcards": [
        {
          "id": "financial-literacy-101-l03-f1",
          "front": "Budget",
          "back": "A plan for how you will spend and save your money over a set period of time, usually one month."
        },
        {
          "id": "financial-literacy-101-l03-f2",
          "front": "Fixed Expense",
          "back": "A cost that stays the same amount every month, such as rent, a phone bill, or a streaming subscription."
        },
        {
          "id": "financial-literacy-101-l03-f3",
          "front": "Variable Expense",
          "back": "A cost that changes from month to month, such as groceries, electricity, or entertainment spending."
        }
      ],
      "learningAids": [
        {
          "id": "financial-literacy-101-l03-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "financial-literacy-101-interactive-lab",
      "title": "Financial Literacy Basics Practice Lab",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Summarize the key idea from Financial Literacy Basics in one concise statement.",
          "Apply that idea to one realistic Financial Literacy scenario and justify your choice.",
          "Reflect on one mistake to avoid in your next attempt."
        ]
      },
      "interactiveActivities": [
        {
          "id": "financial-literacy-101-interactive-lab-act1",
          "type": "scenario_practice",
          "title": "Guided Scenario Drill",
          "description": "Work through a realistic prompt, explain your reasoning, and compare your answer with a model approach."
        }
      ],
      "learningAids": [
        {
          "id": "financial-literacy-101-interactive-lab-a1",
          "type": "practice",
          "title": "Practice Playbook",
          "content": "Use Explain -> Apply -> Reflect to complete this Financial Literacy practice lab with clear reasoning."
        }
      ]
    },
    {
      "id": "financial-literacy-101-l04",
      "title": "Money Basics Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of needs vs. wants, earning, and budgeting"
      ],
      "questions": [
        {
          "id": "financial-literacy-101-l04-q1",
          "text": "You earn $50 mowing lawns. After tax, you keep about $40. The $10 difference is called:",
          "skillId": "financial-literacy-101-skill-earning",
          "options": [
            {
              "id": "a",
              "text": "Taxes"
            },
            {
              "id": "b",
              "text": "Profit"
            },
            {
              "id": "c",
              "text": "Interest"
            },
            {
              "id": "d",
              "text": "Savings"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Taxes are amounts the government deducts from your earnings to fund public services like schools, roads, and hospitals. The difference between gross pay ($50) and net pay ($40) is the tax withheld."
        },
        {
          "id": "financial-literacy-101-l04-q2",
          "text": "Which of the following is a NEED, not a want?",
          "skillId": "financial-literacy-101-skill-needs-wants",
          "options": [
            {
              "id": "a",
              "text": "A warm winter coat"
            },
            {
              "id": "b",
              "text": "The latest video game"
            },
            {
              "id": "c",
              "text": "Brand-name sneakers"
            },
            {
              "id": "d",
              "text": "A movie ticket"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A warm winter coat is a need because clothing that protects you from dangerous cold is essential for survival and health. Video games, brand-name sneakers, and movie tickets are all wants — nice to have but not necessary to stay alive and healthy."
        },
        {
          "id": "financial-literacy-101-l04-q3",
          "text": "The 50/30/20 rule says what percentage of your income should go to savings?",
          "skillId": "financial-literacy-101-skill-budgeting",
          "options": [
            {
              "id": "a",
              "text": "20%"
            },
            {
              "id": "b",
              "text": "50%"
            },
            {
              "id": "c",
              "text": "30%"
            },
            {
              "id": "d",
              "text": "10%"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 50/30/20 rule allocates 50% to needs, 30% to wants, and 20% to savings. Saving at least 20% of your income helps build an emergency fund and work toward future financial goals."
        },
        {
          "id": "financial-literacy-101-l04-q4",
          "text": "You want to buy a $15 toy but you also need a $15 notebook for school. The notebook you give up to buy the toy is called:",
          "skillId": "financial-literacy-101-skill-needs-wants",
          "options": [
            {
              "id": "a",
              "text": "Opportunity cost"
            },
            {
              "id": "b",
              "text": "Profit"
            },
            {
              "id": "c",
              "text": "Interest"
            },
            {
              "id": "d",
              "text": "Budget"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Opportunity cost is the value of the next best alternative you give up. By buying the toy, you give up the notebook — that’s your opportunity cost."
        },
        {
          "id": "financial-literacy-101-l04-q5",
          "text": "Revenue minus costs equals:",
          "skillId": "financial-literacy-101-skill-earning",
          "options": [
            {
              "id": "a",
              "text": "Profit"
            },
            {
              "id": "b",
              "text": "Taxes"
            },
            {
              "id": "c",
              "text": "Savings"
            },
            {
              "id": "d",
              "text": "Interest"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Profit = Revenue - Costs. If you earn $40 selling lemonade and spent $10 on supplies, your profit is $30."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 3,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 1
        }
      }
    },
    {
      "id": "financial-literacy-101-l05",
      "title": "Saving & Compound Interest",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Explain the 'pay yourself first' savings strategy",
        "Calculate compound interest over multiple years",
        "Use the Rule of 72 to estimate how long it takes money to double"
      ],
      "chunks": [
        {
          "id": "financial-literacy-101-l05-c1",
          "title": "Pay Yourself First",
          "content": "Most people plan to save whatever is left after spending, but there is rarely anything left. The 'pay yourself first' strategy flips this: as soon as you receive money, move your savings portion out before you spend anything. If you get a $100 allowance, immediately put $20 into savings, then budget the remaining $80 for needs and wants. This works because money you cannot see is money you will not miss. Many banks let you set up automatic transfers so saving happens without you even thinking about it. The habit of paying yourself first is the single most powerful wealth-building behavior."
        },
        {
          "id": "financial-literacy-101-l05-c2",
          "title": "Compound Interest Explained",
          "content": "Compound interest is interest earned on both your original deposit and on the interest you have already earned — you earn interest on your interest. Here is how it works: deposit $100 in a savings account that pays 5% annual interest. After Year 1, you earn $5 in interest, giving you $105. After Year 2, you earn 5% on $105 (not just the original $100), which is $5.25, giving you $110.25. After Year 3, you earn 5% on $110.25 = $5.51, giving you $115.76. Notice how the interest amount grows each year — $5.00, then $5.25, then $5.51 — even though you never added more money. Over decades, this snowball effect becomes enormous. Albert Einstein reportedly called compound interest the 'eighth wonder of the world.'"
        },
        {
          "id": "financial-literacy-101-l05-c3",
          "title": "The Rule of 72",
          "content": "The Rule of 72 is a quick shortcut to estimate how many years it takes for your money to double at a given interest rate. Simply divide 72 by the annual interest rate. At 6% interest: 72 ÷ 6 = 12 years to double. At 8% interest: 72 ÷ 8 = 9 years to double. At 3% interest: 72 ÷ 3 = 24 years to double. This rule also works in reverse to show the danger of debt — a credit card charging 18% interest will double what you owe in just 72 ÷ 18 = 4 years if you never pay it down. The Rule of 72 makes the power (and danger) of compounding easy to see at a glance."
        },
        {
          "id": "financial-literacy-101-l05-c4",
          "title": "Evidence-Based Investing: The Four Pillars",
          "content": "William Bernstein's 'Four Pillars of Investing' teaches that smart investing rests on four foundations: Theory (risk and return are inseparable — higher returns require accepting uncertainty), History (speculative manias and crashes are recurring, not anomalies), Psychology (cognitive biases like loss aversion and overconfidence systematically hurt returns), and Business (the financial industry is structured to transfer wealth from clients to itself through fees). The practical takeaway for young savers: invest in low-cost index funds that track the entire market, diversify across asset classes, and let compound interest work over decades. A 2% annual management fee may sound small, but over 30 years it consumes roughly 45% of your potential wealth compared to a 0.05% index fund."
        }
      ],
      "flashcards": [
        {
          "id": "financial-literacy-101-l05-f1",
          "front": "Compound Interest",
          "back": "Interest calculated on both the initial principal and the accumulated interest from previous periods. Your money grows faster over time because you earn interest on your interest."
        },
        {
          "id": "financial-literacy-101-l05-f2",
          "front": "Rule of 72",
          "back": "A quick formula to estimate how many years it takes money to double: divide 72 by the annual interest rate. At 6% interest, money doubles in about 72 ÷ 6 = 12 years."
        },
        {
          "id": "financial-literacy-101-l05-f3",
          "front": "Simple vs. Compound Interest",
          "back": "Simple interest is calculated only on the original principal (e.g., $100 × 5% = $5 every year). Compound interest is calculated on the principal plus all previously earned interest, so the amount grows faster each year."
        },
        {
          "id": "financial-literacy-101-l05-f4",
          "front": "Pay Yourself First",
          "back": "A savings strategy where you set aside savings immediately when you receive money, before spending on anything else."
        },
        {
          "id": "financial-literacy-101-l05-f5",
          "front": "Savings Account",
          "back": "A bank account that earns interest on your deposited money. Your money grows over time while staying safe."
        },
        {
          "id": "financial-literacy-101-l05-f6",
          "front": "Index Fund (Bernstein)",
          "back": "A fund that holds every stock in a market — eliminates the risk of picking individual losers while capturing overall market growth. Low fees (0.05%) vs. active funds (1–2%) make an enormous difference over decades."
        },
        {
          "id": "financial-literacy-101-l05-f7",
          "front": "Equity Risk Premium",
          "back": "The extra return stocks provide over safe investments like Treasury bills. It is compensation for enduring scary declines — stocks lost 89% from 1929–1932, but patient investors recovered and grew wealth over decades."
        },
        {
          "id": "financial-literacy-101-l05-f8",
          "front": "Diversification (Bernstein)",
          "back": "Spreading money across different types of investments (stocks, bonds, international) so that when one falls, others may rise. The only genuine 'free lunch' in investing — lowers risk without lowering expected returns."
        }
      ]
    },
    {
      "id": "financial-literacy-101-l06",
      "title": "Smart Spending & Credit",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Compare products using unit price to find the best deal",
        "Explain how credit cards work including APR and minimum payments",
        "Describe what a credit score is and how it is built"
      ],
      "chunks": [
        {
          "id": "financial-literacy-101-l06-c1",
          "title": "Comparison Shopping and Unit Price",
          "content": "Smart shoppers do not just look at the sticker price — they calculate the unit price to compare value. Unit price is the cost per single unit of measurement (per ounce, per count, per pound). Example: Store A sells 12 oz of cereal for $3.00 (unit price: $3.00 ÷ 12 = $0.25 per oz). Store B sells 20 oz of the same cereal for $5.00 (unit price: $5.00 ÷ 20 = $0.25 per oz). In this case, the unit price is the same, so buy whichever size is more convenient. But if Store B charged $4.00 for 20 oz, the unit price drops to $0.20 per oz — making it the better deal. Always check at least three stores or options before making a purchase, and watch for sales that genuinely lower the unit price versus sales that just look like a deal."
        },
        {
          "id": "financial-literacy-101-l06-c2",
          "title": "Credit Basics",
          "content": "Credit means borrowing money now and promising to pay it back later, usually with interest. A credit card lets you buy things immediately, but if you do not pay the full balance by the due date, the card company charges interest called APR (Annual Percentage Rate), which typically ranges from 15% to 25%. Here is the minimum payment trap: if you owe $1,000 at 20% APR and only make the minimum payment (usually about $25), it will take you over 5 years to pay off and you will pay more than $500 in interest alone — so the $1,000 purchase actually costs you over $1,500. The golden rule of credit cards: pay your full balance every month to avoid interest charges entirely."
        },
        {
          "id": "financial-literacy-101-l06-c3",
          "title": "Credit Score",
          "content": "A credit score is a number between 300 and 850 that represents how trustworthy you are as a borrower. Lenders use it to decide whether to lend you money and what interest rate to charge. A higher score (700+) means lower interest rates and better loan terms. A lower score (below 600) means higher rates or being denied credit altogether. Your credit score is built by five main factors: paying bills on time (35%), keeping credit card balances low (30%), length of credit history (15%), mix of credit types (10%), and new credit applications (10%). The most important thing you can do is pay every bill on time, every single month — payment history is the largest factor in your score."
        },
        {
          "id": "financial-literacy-101-l06-c4",
          "title": "Student Loans: The Hidden Cost of College Debt",
          "content": "Zac Bissonnette's 'Debt-Free U' warns that student loans combined with stagnant wages create a dangerous financial cocktail for graduates. Many students borrow tens of thousands of dollars without understanding that this debt cannot typically be discharged in bankruptcy and follows them for decades. Bissonnette argues that where you go to college often matters far less than whether you graduate debt-free. The smartest strategy: choose an affordable school, work part-time, apply for every grant and scholarship, and treat college like an investment with a calculable return. Before borrowing, use the Rule of 72: at 6% interest, student loan debt doubles in 12 years. A $40,000 loan becomes $80,000 if payments are deferred — money that could have been compounding in your favor instead of against you."
        }
      ],
      "flashcards": [
        {
          "id": "financial-literacy-101-l06-f1",
          "front": "Unit Price",
          "back": "The cost per single unit of measurement (per ounce, per item, per pound). Used to compare the true value of different product sizes or brands. Calculated by dividing total price by quantity."
        },
        {
          "id": "financial-literacy-101-l06-f2",
          "front": "Credit Score",
          "back": "A number between 300 and 850 that measures your reliability as a borrower. Higher scores (700+) get better interest rates. Built mainly by paying bills on time and keeping credit card balances low."
        },
        {
          "id": "financial-literacy-101-l06-f3",
          "front": "APR (Annual Percentage Rate)",
          "back": "The yearly interest rate charged on borrowed money, such as a credit card balance or loan. Credit cards typically charge 15%–25% APR on unpaid balances."
        },
        {
          "id": "financial-literacy-101-l06-f4",
          "front": "Minimum Payment Trap",
          "back": "Paying only the minimum on a credit card means you’ll pay mostly interest. A $1,000 balance at 20% APR with minimum payments takes 5+ years and costs over $500 in interest."
        },
        {
          "id": "financial-literacy-101-l06-f5",
          "front": "Debt",
          "back": "Money that you owe to someone else. Debt grows when you don’t pay it off because interest accumulates over time."
        },
        {
          "id": "financial-literacy-101-l06-f6",
          "front": "Student Loan Danger (Debt-Free U)",
          "back": "Student loans typically cannot be discharged in bankruptcy and follow you for decades. At 6% interest, a $40,000 loan doubles to $80,000 in 12 years if deferred — always calculate the true cost before borrowing."
        },
        {
          "id": "financial-literacy-101-l06-f7",
          "front": "Hidden Cost of Investment Fees (Bernstein)",
          "back": "A 2% annual fee seems small but over 30 years consumes ~45% of your potential wealth due to compounding. Choose low-cost index funds (0.05%) and be skeptical of any financial product too complex to explain in one sentence."
        }
      ]
    },
    {
      "id": "financial-literacy-101-l07",
      "title": "Financial Literacy Final Assessment",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate mastery of saving, compound interest, credit, and smart spending"
      ],
      "questions": [
        {
          "id": "financial-literacy-101-l07-q1",
          "text": "Using the Rule of 72, approximately how many years will it take to double your money at 8% annual interest?",
          "skillId": "financial-literacy-101-skill-compound-interest",
          "options": [
            {
              "id": "a",
              "text": "9 years"
            },
            {
              "id": "b",
              "text": "8 years"
            },
            {
              "id": "c",
              "text": "72 years"
            },
            {
              "id": "d",
              "text": "12 years"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Rule of 72 says divide 72 by the interest rate: 72 ÷ 8 = 9 years. This is an approximation — the actual time is about 9.01 years, so the rule is remarkably accurate."
        },
        {
          "id": "financial-literacy-101-l07-q2",
          "text": "You deposit $200 in a savings account earning 10% compound interest annually. How much will you have after 2 years?",
          "skillId": "financial-literacy-101-skill-compound-interest",
          "options": [
            {
              "id": "a",
              "text": "$242"
            },
            {
              "id": "b",
              "text": "$240"
            },
            {
              "id": "c",
              "text": "$220"
            },
            {
              "id": "d",
              "text": "$400"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Year 1: $200 × 1.10 = $220. Year 2: $220 × 1.10 = $242. With compound interest you earn $20 in Year 1 and $22 in Year 2 (interest on interest), totaling $242. Simple interest would have given only $240 ($20 each year)."
        },
        {
          "id": "financial-literacy-101-l07-q3",
          "text": "Which behavior has the BIGGEST positive impact on your credit score?",
          "skillId": "financial-literacy-101-skill-credit",
          "options": [
            {
              "id": "a",
              "text": "Paying every bill on time, every month"
            },
            {
              "id": "b",
              "text": "Applying for many credit cards at once"
            },
            {
              "id": "c",
              "text": "Only making minimum payments"
            },
            {
              "id": "d",
              "text": "Closing your oldest credit card"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Payment history accounts for 35% of your credit score — the single largest factor. Paying on time every month builds a strong credit record. Applying for many cards hurts your score, minimum payments lead to debt accumulation, and closing old cards shortens your credit history."
        },
        {
          "id": "financial-literacy-101-l07-q4",
          "text": "Store A sells 10 oz of juice for $2.50 and Store B sells 20 oz for $4.00. Which store has the better deal?",
          "skillId": "financial-literacy-101-skill-credit",
          "options": [
            {
              "id": "a",
              "text": "Store B ($0.20/oz vs $0.25/oz)"
            },
            {
              "id": "b",
              "text": "Store A ($0.25/oz vs $0.20/oz)"
            },
            {
              "id": "c",
              "text": "They are the same price"
            },
            {
              "id": "d",
              "text": "Cannot determine"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Unit price: Store A = $2.50 ÷ 10 = $0.25/oz. Store B = $4.00 ÷ 20 = $0.20/oz. Store B has the lower unit price, so it’s the better deal."
        },
        {
          "id": "financial-literacy-101-l07-q5",
          "text": "What is the “pay yourself first” strategy?",
          "skillId": "financial-literacy-101-skill-compound-interest",
          "options": [
            {
              "id": "a",
              "text": "Set aside savings immediately when you receive money, before spending"
            },
            {
              "id": "b",
              "text": "Spend on wants first, then save whatever is left"
            },
            {
              "id": "c",
              "text": "Only buy things for yourself"
            },
            {
              "id": "d",
              "text": "Never share money with anyone"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Pay yourself first means moving savings out before spending anything. This ensures you always save, rather than hoping money is left over at the end of the month."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 3,
        "bloomProfile": {
          "understand": 1,
          "apply": 2
        }
      }
    }
  ]
};
