import type { LearningModule } from "@/lib/modules/types";

export const financial_literacy_101_Module: LearningModule = {
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
  "version": "1.1.0",
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
          "content": "Understanding the difference between needs and wants is a key money skill. A need is something you must have to live and be healthy, like food, a safe place to live, basic clothes, and healthcare. A want is something you'd like to have but don't need to survive, like a new toy, a video game, or a ticket to a concert. To decide if something is a need or a want, ask yourself: 'Could I live and be healthy without this?' If the answer is yes, it's a want. Knowing the difference helps you spend money on your needs first, which is the first step to making smart financial choices.",
          "visualPrompt": "A split-screen image. Left side labeled 'NEEDS' shows icons for a house, an apple, and a coat. Right side labeled 'WANTS' shows icons for a video game controller, a movie ticket, and a fancy skateboard."
        },
        {
          "id": "financial-literacy-101-l01-c2",
          "title": "Opportunity Cost",
          "content": "Every time you choose to spend money, you give up the chance to spend it on something else. This is called opportunity cost. For example, if you have $20 and you buy a new video game, the opportunity cost is the book or movie ticket you could have bought instead. You chose the game, so you missed the opportunity to have the book. Opportunity cost isn't just about money; it's also about time. If you spend an hour playing games, the opportunity cost is the hour you could have spent reading, doing homework, or earning money. Thinking about opportunity cost helps you make better choices with your money and time.",
          "visualPrompt": "An animation of a person at a crossroads. One path leads to a video game, the other to a book. As they walk towards the game, the path to the book fades away, with the text 'Opportunity Cost' appearing."
        },
        {
          "id": "financial-literacy-101-l01-c3",
          "title": "The 24-Hour Rule",
          "content": "Have you ever bought something on the spot without thinking, and later wished you hadn't? That's called impulse buying. A great way to avoid this is the 24-hour rule. When you see something you want, wait 24 hours before buying it. This pause gives you time to think: 'Do I really need this? Can I afford it after my needs are covered?' Often, after a day, the urge to buy it fades away, and you save money. This rule is especially useful for online shopping, where it's easy to just click 'buy.' Pausing for a day helps you make smarter spending decisions and avoid buyer's remorse.",
          "visualPrompt": "A character sees a cool toy in a store window. A thought bubble shows them buying it instantly. Then, a calendar icon appears and flips a page to '24 Hours Later'. The character now shrugs, no longer interested in the toy, and walks away with money still in their pocket."
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
          "back": "A strategy to wait 24 hours before buying something you want. It helps you avoid making impulsive purchases you might regret."
        },
        {
          "id": "financial-literacy-101-l01-f5",
          "front": "Impulse Buying",
          "back": "Buying something without planning or thinking about it beforehand. The 24-hour rule helps prevent this."
        },
        {
          "id": "financial-literacy-101-l01-f6",
          "front": "Risk-Return Trade-Off (Bernstein)",
          "back": "Higher expected returns require accepting higher uncertainty. Safe investments like Treasury bills offer lower returns; stocks offer higher returns as compensation for enduring volatility — the equity risk premium."
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
          "content": "People earn money in different ways. One way is a salary, which is a fixed amount of money paid regularly, like every month. Another way is an hourly wage, where you get paid for each hour you work. Some kids get an allowance, which is a set amount of money from parents, often for doing chores. You can also be an entrepreneur and start your own business, like a lemonade stand or a dog-walking service. Understanding these methods can help you think about how you might want to earn money one day.",
          "visualPrompt": "Four panels showing different ways to earn money: 1) A teacher in a classroom with a calendar showing 'Pay Day'. 2) A lifeguard pointing to a clock. 3) A child doing chores with a piggy bank. 4) A child selling lemonade at a stand."
        },
        {
          "id": "financial-literacy-101-l02-c2",
          "title": "Gross Pay vs. Net Pay",
          "content": "When you get a paycheck, you'll see two numbers: gross pay and net pay. Gross pay is the total amount of money you earned before anything is taken out. But you don't get to keep all of it. Deductions, like taxes, are taken out to pay for things everyone uses, like schools and roads. What's left after all deductions is your net pay, or 'take-home pay.' This is the actual amount of money you have to spend and save. When you make a budget, always use your net pay, because that's the money you really have.",
          "visualPrompt": "An animation of a large treasure chest labeled 'Gross Pay'. A government hand reaches in and takes out a few coins for 'Taxes'. The remaining coins are moved to a smaller chest labeled 'Net Pay'."
        },
        {
          "id": "financial-literacy-101-l02-c3",
          "title": "Lemonade Stand Economics",
          "content": "Let's imagine you start a lemonade stand. First, you spend $10 on lemons, sugar, and cups. This is your cost. You sell 40 cups of lemonade for $1 each, earning $40. This is your revenue. To find your profit, you subtract your costs from your revenue: $40 (revenue) - $10 (costs) = $30 (profit). But what if it rains and you only sell 5 cups? Your revenue is only $5. Now, your calculation is $5 (revenue) - $10 (costs) = -$5. This is a loss. Running a business involves risk, but it's a great way to learn about earning and managing money.",
          "visualPrompt": "A simple animated equation: A pile of money ($40) from a lemonade stand, minus a smaller pile for supplies ($10), equals a happy pile of profit ($30). Then, show a rainy scene where the revenue pile is tiny ($5), leading to a sad-faced -$5 result."
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
          "front": "Profit",
          "back": "The money left over after subtracting business costs from revenue. Formula: Revenue - Costs = Profit."
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
          "content": "The 50/30/20 rule is a simple way to budget your money. It suggests dividing your net pay (your take-home money) into three buckets. 50% goes to Needs: things you must have, like housing, food, and transportation. 30% goes to Wants: fun things you enjoy but don't need, like movies, games, and eating out. The final 20% goes to Savings & Debt Repayment: this is for your future goals and paying off any money you owe. For example, if your take-home pay is $100, you'd plan to spend $50 on needs, $30 on wants, and save $20. This rule helps you cover your bills, have fun, and build for the future.",
          "visualPrompt": "A pie chart divided into three sections: a large 50% slice labeled 'NEEDS' with icons of a house and food, a 30% slice labeled 'WANTS' with icons of a game controller and popcorn, and a 20% slice labeled 'SAVINGS' with a piggy bank icon."
        },
        {
          "id": "financial-literacy-101-l03-c2",
          "title": "Tracking Your Spending",
          "content": "To make a good budget, you first need to know where your money is going. Try tracking every single thing you buy for one week, no matter how small. Write down that $2 snack or that $1 app. At the end of the week, sort your purchases into Needs and Wants. You might be surprised! A $3 snack every school day adds up to $15 a week, or over $60 a month. Tracking your spending makes your habits visible. Once you see where your money goes, you can decide if you want to make changes to save more.",
          "visualPrompt": "A person writing in a notebook. As they write 'coffee, snack, bus fare,' animated coins fly out of their wallet and land in different jars labeled 'Needs' and 'Wants'. The 'Wants' jar fills up surprisingly fast."
        },
        {
          "id": "financial-literacy-101-l03-c3",
          "title": "Building a Simple Budget",
          "content": "Let's build a budget. Imagine you get a $200 monthly allowance. Using the 50/30/20 rule: you'd budget $100 (50%) for Needs like school lunches and supplies, $60 (30%) for Wants like movies and games, and $40 (20%) for Savings. Now, track your spending for a month. What if you find you spent $110 on needs? You're $10 over budget. To fix this, you could pack a lunch from home twice a week to save that $10. A budget isn't about restriction; it's a plan that puts you in control of your money, helping you reach your goals.",
          "visualPrompt": "A simple dashboard with three gauges: Needs (pointer at $110 in the red), Wants (pointer at $60 in the green), and Savings (pointer at $40 in the green). An arrow shows moving $10 from the 'Needs' category back into the green zone."
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
          "explanation": "Taxes are amounts the government deducts from your earnings to fund public services like schools and roads. The difference between gross pay ($50) and net pay ($40) is the tax withheld."
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
          "explanation": "A warm winter coat is a need because clothing that protects you from dangerous cold is essential for survival and health. Video games, brand-name sneakers, and movie tickets are all wants."
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
          "explanation": "Opportunity cost is the value of the next best alternative you give up. By choosing to buy the toy, you give up the opportunity to buy the notebook."
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
          "content": "A powerful savings habit is to 'pay yourself first.' Instead of saving what's left after spending, you do the opposite. As soon as you get paid, move a set amount of money into your savings account *before* you spend on anything else. For example, if you get $50, immediately put $10 into savings. Then you can budget the remaining $40. This makes saving a priority, not an afterthought. You can even set up an automatic transfer at your bank to do this for you. Paying yourself first is one of the most effective ways to build savings over time.",
          "visualPrompt": "An animation showing a paycheck arriving. The first action is a hand taking 20% of the money and putting it into a piggy bank labeled 'Future Me'. The remaining money is then used for bills and fun."
        },
        {
          "id": "financial-literacy-101-l05-c2",
          "title": "Compound Interest Explained",
          "content": "Compound interest is like magic for your money. Here's how it works: you earn interest on the money you save. But then, you start earning interest on your interest! Imagine you save $100 with 5% interest. After year one, you have $105. In year two, you earn 5% on the whole $105, not just the original $100. So you earn $5.25, bringing your total to $110.25. The amount you earn grows a little more each year. It's like a snowball rolling downhill—it starts small but gets bigger and bigger, faster and faster. The earlier you start saving, the more time your money has to grow.",
          "visualPrompt": "An animation of a single coin being planted in the ground. It sprouts into a small money tree. The tree drops a few more coins, which also sprout into smaller trees, creating a growing forest of money trees."
        },
        {
          "id": "financial-literacy-101-l05-c3",
          "title": "The Rule of 72",
          "content": "The Rule of 72 is a quick math trick to estimate how long it will take for your money to double with compound interest. Just divide 72 by your interest rate. For example, if your savings account earns 6% interest, it will take about 12 years for your money to double (72 ÷ 6 = 12). If the rate is 8%, it will take about 9 years (72 ÷ 8 = 9). This rule also shows the danger of debt. If a credit card has an 18% interest rate, the amount you owe can double in just 4 years (72 ÷ 18 = 4). It's a simple tool to understand the power of saving and the risk of borrowing.",
          "visualPrompt": "A simple calculator interface. A user types '72 ÷ 8 ='. The answer '9 Years to Double!' appears with a graphic of one money bag turning into two."
        },
        {
          "id": "financial-literacy-101-l05-c4",
          "title": "Evidence-Based Investing: The Four Pillars",
          "content": "Investing expert William Bernstein suggests four 'pillars' for smart investing. 1. Theory: To get higher returns, you must accept higher risk. 2. History: The stock market has big ups and downs; this is normal. Learning from the past helps us prepare. 3. Psychology: Our own emotions, like fear or overconfidence, can lead to bad money decisions. Be aware of your feelings. 4. Business: The investing industry has high fees that can eat up your earnings. For most young investors, a simple, low-cost index fund is a great choice. Spreading your money across different investments (diversification) and keeping fees low are key to building wealth over the long term.",
          "visualPrompt": "Four ancient-style pillars, each with a label and an icon: 'Theory' (a scale balancing risk and reward), 'History' (a timeline with peaks and valleys), 'Psychology' (a brain with emotion icons), and 'Business' (a piggy bank protected from a 'Fee Monster')."
        }
      ],
      "flashcards": [
        {
          "id": "financial-literacy-101-l05-f1",
          "front": "Compound Interest",
          "back": "Interest calculated on both the initial principal and the accumulated interest from previous periods. Your money grows faster because you earn interest on your interest."
        },
        {
          "id": "financial-literacy-101-l05-f2",
          "front": "Rule of 72",
          "back": "A quick formula to estimate how many years it takes money to double: divide 72 by the annual interest rate. At 6% interest, money doubles in about 72 ÷ 6 = 12 years."
        },
        {
          "id": "financial-literacy-101-l05-f3",
          "front": "Simple vs. Compound Interest",
          "back": "Simple interest is calculated only on the original principal ($100 × 5% = $5 every year). Compound interest is calculated on the principal plus all previously earned interest, so it grows faster."
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
          "back": "A fund that holds every stock in a market — eliminates the risk of picking individual losers while capturing overall market growth. Low fees make a huge difference over decades."
        },
        {
          "id": "financial-literacy-101-l05-f7",
          "front": "Diversification (Bernstein)",
          "back": "Spreading money across different types of investments (stocks, bonds, international) so that when one falls, others may rise. It lowers risk without lowering expected returns."
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
          "content": "Smart shoppers compare prices to get the best deal, and a great tool for this is the unit price. The unit price tells you the cost per unit, like per ounce or per pound. Imagine a 12-ounce box of cereal costs $3.00. The unit price is $3.00 ÷ 12 ounces = $0.25 per ounce. A bigger 20-ounce box costs $4.00. Its unit price is $4.00 ÷ 20 ounces = $0.20 per ounce. The bigger box is the better deal because you pay less for each ounce of cereal. Always check the unit price—it's often on the shelf tag at the grocery store. Bigger isn't always cheaper!",
          "visualPrompt": "Two boxes of cereal on a store shelf, one small and one large. A magnifying glass zooms in on the shelf tag for each. The small box tag shows '$0.25/oz'. The large box tag shows '$0.20/oz' with a green checkmark next to it."
        },
        {
          "id": "financial-literacy-101-l06-c2",
          "title": "Credit Basics",
          "content": "Credit is borrowing money that you promise to pay back later. A credit card is a common way to use credit. When you use it, you're taking out a small loan. If you don't pay the full amount back by the due date, you'll be charged interest. This is called the APR (Annual Percentage Rate), and it can be high. For example, if you have a $1,000 balance with a 20% APR and only make the minimum payment each month, it could take over five years to pay it off, and you'd pay hundreds of dollars in extra interest. The best rule for credit cards is to pay the full balance every month to avoid interest charges completely.",
          "visualPrompt": "An animation of a person swiping a credit card to buy a $1000 TV. A calendar flips through months, and a small 'Interest Monster' keeps adding money to the price tag, making it grow from $1000 to $1500+ over time."
        },
        {
          "id": "financial-literacy-101-l06-c3",
          "title": "Credit Score",
          "content": "A credit score is a number from 300 to 850 that acts like a financial report card. Lenders use it to decide if you're a reliable borrower. A high score (700+) shows you manage debt well, which can help you get approved for loans with lower interest rates. A low score (below 600) can make it hard to borrow money. Your score is built on a few key factors, but the most important one is your payment history—paying all your bills on time, every time. The second biggest factor is keeping your credit card balances low. Building a good credit score is a key part of a healthy financial life.",
          "visualPrompt": "A character with a report card. The main grade is a big number '780' with a smiley face, labeled 'Credit Score'. The subjects listed are 'On-Time Payments: A+', 'Low Balances: A', and 'Credit History Length: B+'."
        },
        {
          "id": "financial-literacy-101-l06-c4",
          "title": "Student Loans: The Hidden Cost of College Debt",
          "content": "Student loans can help pay for college, but it's important to understand the risks. This debt can follow you for decades and usually can't be erased. Author Zac Bissonnette argues that graduating with little to no debt is often more important than which college you attend. To avoid large debts, consider more affordable schools, work part-time, and apply for every scholarship and grant you can find. Remember the Rule of 72: at a 6% interest rate, a $40,000 loan can double to $80,000 in just 12 years if you delay payments. Think of college as an investment that should pay off, not leave you with a mountain of debt.",
          "visualPrompt": "A split screen. On the left, a happy graduate with a diploma and no chains. On the right, a sad graduate with a diploma but weighed down by a heavy ball and chain labeled 'Student Debt'."
        }
      ],
      "flashcards": [
        {
          "id": "financial-literacy-101-l06-f1",
          "front": "Unit Price",
          "back": "The cost per single unit of measurement (per ounce, per item). Used to compare the true value of different product sizes. Calculated by dividing total price by quantity."
        },
        {
          "id": "financial-literacy-101-l06-f2",
          "front": "Credit Score",
          "back": "A number between 300 and 850 that measures your reliability as a borrower. Higher scores (700+) get better interest rates. Built mainly by paying bills on time."
        },
        {
          "id": "financial-literacy-101-l06-f3",
          "front": "APR (Annual Percentage Rate)",
          "back": "The yearly interest rate charged on borrowed money, such as a credit card balance. Credit cards typically charge 15%–25% APR on unpaid balances."
        },
        {
          "id": "financial-literacy-101-l06-f4",
          "front": "Minimum Payment Trap",
          "back": "Paying only the minimum on a credit card means you’ll pay mostly interest. A $1,000 balance at 20% APR with minimum payments can take 5+ years and cost over $500 in interest."
        },
        {
          "id": "financial-literacy-101-l06-f5",
          "front": "Debt",
          "back": "Money that you owe to someone else. Debt grows when you don’t pay it off because interest accumulates over time."
        },
        {
          "id": "financial-literacy-101-l06-f6",
          "front": "Student Loan Danger (Debt-Free U)",
          "back": "Student loans typically cannot be discharged in bankruptcy. At 6% interest, a $40,000 loan doubles to $80,000 in 12 years if deferred — always calculate the true cost before borrowing."
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
          "explanation": "The Rule of 72 says to divide 72 by the interest rate: 72 ÷ 8 = 9 years. This is a quick way to estimate the power of compound interest."
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
          "explanation": "Year 1: $200 × 1.10 = $220. Year 2: $220 × 1.10 = $242. With compound interest you earn $20 in Year 1 and $22 in Year 2 (interest on your interest), totaling $242."
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
          "explanation": "Payment history is the single largest factor in your credit score (35%). Paying on time, every time, is the best way to build a strong credit record."
        },
        {
          "id": "financial-literacy-101-l07-q4",
          "text": "Store A sells 10 oz of juice for $2.50 and Store B sells 20 oz for $4.00. Which store has the better deal?",
          "skillId": "financial-literacy-101-skill-spending",
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
          "explanation": "To find the best deal, calculate the unit price. Store A: $2.50 ÷ 10 oz = $0.25/oz. Store B: $4.00 ÷ 20 oz = $0.20/oz. Store B has the lower unit price, so it’s the better deal."
        },
        {
          "id": "financial-literacy-101-l07-q5",
          "text": "What is the “pay yourself first” strategy?",
          "skillId": "financial-literacy-101-skill-saving",
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
          "explanation": "Pay yourself first means treating savings as a priority. You move money to your savings account before you budget for other expenses, ensuring you always save."
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
