import type { LearningModule } from "@/lib/modules/types";

export const AccountingFinance101Module: LearningModule = {
  id: "accounting-finance-101",
  title: "Accounting & Finance Fundamentals",
  description:
    "Master the language of business. Learn the accounting equation, double-entry bookkeeping, financial statements, the time value of money, financial ratios, and budgeting — the essential toolkit for understanding any organization's financial health.",
  subject: "Accounting and Finance",
  tags: ["curriculum", "interactive", "business", "finance"],
  minAge: 14,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es"],
  learningObjectives: [
    "Apply the accounting equation (Assets = Liabilities + Equity) to classify transactions",
    "Record business transactions using double-entry bookkeeping with debits and credits",
    "Read and interpret the three core financial statements (income statement, balance sheet, cash flow)",
    "Calculate present and future value using the time value of money",
    "Analyze business performance using key financial ratios",
    "Create basic budgets and forecasts for business planning"
  ],
  lessons: [
    /* ── L01  The Accounting Equation  (video) ── */
    {
      id: "accounting-finance-101-l01",
      title: "The Accounting Equation",
      type: "video",
      duration: 12,
      chunks: [
        { id: "accounting-finance-101-l01-c1", title: "Assets = Liabilities + Equity", content: "The accounting equation is the foundation of all accounting: Assets = Liabilities + Equity. Assets are what a business OWNS (cash, equipment, inventory, buildings). Liabilities are what it OWES (loans, accounts payable, mortgages). Equity is the owner's claim — what's left after subtracting liabilities from assets. If a company has $500,000 in assets and $200,000 in liabilities, the owner's equity is $300,000." },
        { id: "accounting-finance-101-l01-c2", title: "How Transactions Affect the Equation", content: "Every transaction affects at least two sides of the equation — it must ALWAYS balance. Example 1: You invest $10,000 to start a business → Cash (asset) +$10,000, Owner's Equity +$10,000. Example 2: You buy equipment for $3,000 cash → Equipment (asset) +$3,000, Cash (asset) -$3,000. Example 3: You take a $5,000 bank loan → Cash (asset) +$5,000, Bank Loan (liability) +$5,000. The equation always balances." },
        { id: "accounting-finance-101-l01-c3", title: "Types of Accounts", content: "Asset accounts include: Cash, Accounts Receivable (money customers owe you), Inventory, Equipment, and Buildings. Liability accounts include: Accounts Payable (money you owe suppliers), Notes Payable (loans), and Unearned Revenue (payments received before delivering goods/services). Equity accounts include: Owner's Capital, Retained Earnings (accumulated profits), and Drawing (owner withdrawals). Revenue increases equity; expenses decrease it." }
      ],
      flashcards: [
        { id: "accounting-finance-101-l01-f1", front: "The fundamental accounting equation", back: "Assets = Liabilities + Equity" },
        { id: "accounting-finance-101-l01-f2", front: "Money that customers owe the business", back: "Accounts Receivable (asset)" },
        { id: "accounting-finance-101-l01-f3", front: "Money the business owes to suppliers", back: "Accounts Payable (liability)" },
        { id: "accounting-finance-101-l01-f4", front: "What remains after subtracting liabilities from assets", back: "Owner's Equity" }
      ],
      questions: [
        { id: "accounting-finance-101-l01-q1", text: "If a company has $100,000 in assets and $60,000 in liabilities, what is the owner's equity?", options: [{ id: "a", text: "$40,000" }, { id: "b", text: "$160,000" }, { id: "c", text: "$60,000" }, { id: "d", text: "$100,000" }], correctOptionId: "a", explanation: "Equity = Assets - Liabilities = $100,000 - $60,000 = $40,000!" },
        { id: "accounting-finance-101-l01-q2", text: "Accounts Receivable is classified as", options: [{ id: "a", text: "An asset" }, { id: "b", text: "A liability" }, { id: "c", text: "Equity" }, { id: "d", text: "An expense" }], correctOptionId: "a", explanation: "Accounts Receivable is money owed TO the business — it's something the business owns (an asset)!" },
        { id: "accounting-finance-101-l01-q3", text: "A business takes a $5,000 bank loan. Which accounts are affected?", options: [{ id: "a", text: "Cash (asset) increases, Bank Loan (liability) increases" }, { id: "b", text: "Cash (asset) increases, Equity increases" }, { id: "c", text: "Cash (asset) decreases, Liability decreases" }, { id: "d", text: "Equipment increases, Cash decreases" }], correctOptionId: "a", explanation: "You receive cash (asset up) and owe money to the bank (liability up). The equation stays balanced!" }
      ],
      activities: [{ id: "accounting-finance-101-l01-act1", type: "sorting_buckets", title: "Account classification", description: "Sort these accounts into Assets, Liabilities, or Equity: Cash, Bank Loan, Owner's Capital, Equipment, Accounts Payable, Inventory, Retained Earnings, Accounts Receivable." }]
    },

    /* ── L02  Double-Entry Bookkeeping  (video) ── */
    {
      id: "accounting-finance-101-l02",
      title: "Double-Entry Bookkeeping",
      type: "video",
      duration: 13,
      chunks: [
        { id: "accounting-finance-101-l02-c1", title: "Debits and Credits", content: "Double-entry bookkeeping means every transaction is recorded with at least one debit and one credit — debits must always equal credits. Think of it as two sides of every story. Debits (left side) increase assets and expenses. Credits (right side) increase liabilities, equity, and revenue. This isn't about 'adding' or 'subtracting' — debit and credit are simply labels for left and right. The system was invented by Luca Pacioli in 1494 and is still used worldwide." },
        { id: "accounting-finance-101-l02-c2", title: "Journal Entries", content: "A journal entry records one transaction. Example: A business buys $2,000 of inventory with cash → Debit Inventory $2,000 (asset increases), Credit Cash $2,000 (asset decreases). Another example: A customer pays $500 for services → Debit Cash $500 (asset increases), Credit Service Revenue $500 (revenue increases). Always list the debit first, then indent the credit. Date every entry." },
        { id: "accounting-finance-101-l02-c3", title: "The General Ledger and Trial Balance", content: "The general ledger is the master record — every account has its own page showing all debits and credits. After posting journal entries to the ledger, you create a trial balance: a list of all accounts with their debit or credit balances. If total debits equal total credits, your books are balanced. If not, there's an error somewhere. The trial balance is the first step toward creating financial statements." }
      ],
      flashcards: [
        { id: "accounting-finance-101-l02-f1", front: "The rule that every transaction must have equal debits and credits", back: "Double-entry bookkeeping" },
        { id: "accounting-finance-101-l02-f2", front: "The side that increases assets and expenses", back: "Debit (left side)" },
        { id: "accounting-finance-101-l02-f3", front: "The side that increases liabilities, equity, and revenue", back: "Credit (right side)" },
        { id: "accounting-finance-101-l02-f4", front: "A list of all accounts with their balances to verify debits equal credits", back: "Trial balance" }
      ],
      questions: [
        { id: "accounting-finance-101-l02-q1", text: "In double-entry bookkeeping, debits must always equal", options: [{ id: "a", text: "Credits" }, { id: "b", text: "Assets" }, { id: "c", text: "Revenue" }, { id: "d", text: "Expenses" }], correctOptionId: "a", explanation: "The fundamental rule: total debits = total credits for every transaction!" },
        { id: "accounting-finance-101-l02-q2", text: "To increase an asset, you record a", options: [{ id: "a", text: "Debit" }, { id: "b", text: "Credit" }, { id: "c", text: "Trial balance" }, { id: "d", text: "Closing entry" }], correctOptionId: "a", explanation: "Assets increase with debits (left side) and decrease with credits (right side)!" },
        { id: "accounting-finance-101-l02-q3", text: "The general ledger is", options: [{ id: "a", text: "The master record of all accounts and their transactions" }, { id: "b", text: "A single journal entry" }, { id: "c", text: "The company's bank account" }, { id: "d", text: "The owner's personal budget" }], correctOptionId: "a", explanation: "The ledger collects all journal entries organized by account!" }
      ],
      activities: [{ id: "accounting-finance-101-l02-act1", type: "matching_pairs", title: "Debit or credit?", description: "Match: Increase Cash → Debit, Increase Revenue → Credit, Increase Accounts Payable → Credit, Increase Expenses → Debit, Increase Owner's Equity → Credit, Increase Equipment → Debit." }]
    },

    /* ── L03  Financial Statements  (video) ── */
    {
      id: "accounting-finance-101-l03",
      title: "Financial Statements",
      type: "video",
      duration: 14,
      chunks: [
        { id: "accounting-finance-101-l03-c1", title: "The Income Statement", content: "The income statement (P&L — Profit and Loss) shows revenue minus expenses over a period (month, quarter, year). Revenue - Cost of Goods Sold = Gross Profit. Gross Profit - Operating Expenses (rent, salaries, utilities) = Operating Income. Operating Income - Taxes = Net Income. Example: A bakery earns $50,000 revenue, spends $20,000 on ingredients (COGS), $15,000 on rent/wages → Gross Profit $30,000, Operating Income $15,000." },
        { id: "accounting-finance-101-l03-c2", title: "The Balance Sheet", content: "The balance sheet shows what a company owns, owes, and is worth at a SPECIFIC moment in time (a snapshot). It follows the accounting equation: Assets = Liabilities + Equity. Current assets (cash, inventory) are listed before long-term assets (buildings, equipment). Current liabilities (accounts payable) come before long-term liabilities (mortgages). If you subtract liabilities from assets, you get the company's book value — its net worth on paper." },
        { id: "accounting-finance-101-l03-c3", title: "The Cash Flow Statement", content: "The cash flow statement tracks cash coming in and going out. It has three sections: Operating (cash from core business — sales, paying suppliers), Investing (buying/selling equipment, property), and Financing (loans, issuing stock, paying dividends). A company can be profitable on the income statement but still run out of cash — that's why cash flow matters. 'Cash is king' is the most important lesson in finance." }
      ],
      flashcards: [
        { id: "accounting-finance-101-l03-f1", front: "Financial statement showing revenue minus expenses over a period", back: "Income Statement (P&L)" },
        { id: "accounting-finance-101-l03-f2", front: "Financial statement showing assets, liabilities, and equity at one point in time", back: "Balance Sheet" },
        { id: "accounting-finance-101-l03-f3", front: "Revenue minus Cost of Goods Sold", back: "Gross Profit" },
        { id: "accounting-finance-101-l03-f4", front: "Statement tracking cash inflows and outflows in three categories", back: "Cash Flow Statement" }
      ],
      questions: [
        { id: "accounting-finance-101-l03-q1", text: "A bakery earns $50,000 and spends $20,000 on ingredients. What is the gross profit?", options: [{ id: "a", text: "$30,000" }, { id: "b", text: "$50,000" }, { id: "c", text: "$70,000" }, { id: "d", text: "$20,000" }], correctOptionId: "a", explanation: "Gross Profit = Revenue - COGS = $50,000 - $20,000 = $30,000!" },
        { id: "accounting-finance-101-l03-q2", text: "The balance sheet is best described as", options: [{ id: "a", text: "A snapshot of what a company owns and owes at one moment" }, { id: "b", text: "A record of sales over a year" }, { id: "c", text: "A list of employees" }, { id: "d", text: "A budget for next quarter" }], correctOptionId: "a", explanation: "The balance sheet captures a single point in time — a financial photograph!" },
        { id: "accounting-finance-101-l03-q3", text: "The three sections of the cash flow statement are", options: [{ id: "a", text: "Operating, Investing, and Financing" }, { id: "b", text: "Revenue, Expenses, and Profit" }, { id: "c", text: "Assets, Liabilities, and Equity" }, { id: "d", text: "Debits, Credits, and Balances" }], correctOptionId: "a", explanation: "Operating (core business), Investing (long-term assets), Financing (debt and equity)!" }
      ],
      activities: [{ id: "accounting-finance-101-l03-act1", type: "sorting_buckets", title: "Financial statement sort", description: "Sort items into the correct statement: Income Statement (Revenue, COGS, Net Income), Balance Sheet (Cash, Equipment, Accounts Payable), Cash Flow (Operating cash, Equipment purchase, Loan received)." }]
    },

    /* ── L04  Accounting Checkpoint  (quiz) ── */
    {
      id: "accounting-finance-101-l04",
      title: "Accounting Checkpoint",
      type: "quiz",
      duration: 8,
      questions: [
        { id: "accounting-finance-101-l04-q1", text: "In the accounting equation, if assets are $200,000 and equity is $120,000, what are the liabilities?", options: [{ id: "a", text: "$80,000" }, { id: "b", text: "$320,000" }, { id: "c", text: "$200,000" }, { id: "d", text: "$120,000" }], correctOptionId: "a", explanation: "A = L + E → $200,000 = L + $120,000 → L = $80,000!" },
        { id: "accounting-finance-101-l04-q2", text: "To increase revenue, you record a", options: [{ id: "a", text: "Credit" }, { id: "b", text: "Debit" }, { id: "c", text: "Withdrawal" }, { id: "d", text: "Trial balance" }], correctOptionId: "a", explanation: "Revenue increases with credits (right side) — same as liabilities and equity!" },
        { id: "accounting-finance-101-l04-q3", text: "Net Income is calculated by subtracting", options: [{ id: "a", text: "All expenses (including taxes) from revenue" }, { id: "b", text: "Assets from liabilities" }, { id: "c", text: "Debits from credits" }, { id: "d", text: "Cash from equity" }], correctOptionId: "a", explanation: "Net Income = Revenue - All Expenses - Taxes. It's the bottom line!" }
      ],
      flashcards: [
        { id: "accounting-finance-101-l04-f1", front: "Father of double-entry bookkeeping (1494)", back: "Luca Pacioli" },
        { id: "accounting-finance-101-l04-f2", front: "Most important finance rule", back: "'Cash is king' — profitability without cash flow leads to failure" },
        { id: "accounting-finance-101-l04-f3", front: "What a debit increases", back: "Assets and expenses" },
        { id: "accounting-finance-101-l04-f4", front: "What a credit increases", back: "Liabilities, equity, and revenue" }
      ]
    },

    /* ── L05  Time Value of Money  (video) ── */
    {
      id: "accounting-finance-101-l05",
      title: "Time Value of Money",
      type: "video",
      duration: 13,
      chunks: [
        { id: "accounting-finance-101-l05-c1", title: "Why a Dollar Today Is Worth More", content: "A dollar today is worth more than a dollar tomorrow — this is the time value of money (TVM). Why? Because you can invest that dollar and earn interest. If you invest $100 at 5% annual interest, after one year you have $105. After two years: $110.25 (you earned interest on your interest). This principle drives all of finance: loans, investments, retirement planning, and business valuations." },
        { id: "accounting-finance-101-l05-c2", title: "Future Value and Compound Interest", content: "Future Value (FV) is what your money will be worth later. Formula: FV = PV × (1 + r)^n, where PV is present value, r is the interest rate, and n is the number of periods. Example: Invest $1,000 at 6% for 10 years → FV = $1,000 × (1.06)^10 = $1,790.85. The Rule of 72: divide 72 by the interest rate to estimate years to double. 72 ÷ 6 = 12 years to double." },
        { id: "accounting-finance-101-l05-c3", title: "Present Value and Discounting", content: "Present Value (PV) works backwards — what is a future payment worth today? Formula: PV = FV ÷ (1 + r)^n. Example: Someone promises to pay you $10,000 in 5 years. At a 8% discount rate: PV = $10,000 ÷ (1.08)^5 = $6,805.83. This means you'd need to invest $6,805.83 today at 8% to have $10,000 in 5 years. Discounting is how businesses evaluate whether an investment is worthwhile." }
      ],
      flashcards: [
        { id: "accounting-finance-101-l05-f1", front: "The principle that money available now is worth more than the same amount later", back: "Time Value of Money (TVM)" },
        { id: "accounting-finance-101-l05-f2", front: "Formula: FV = PV × (1 + r)^n", back: "Future Value — what your investment will be worth in the future" },
        { id: "accounting-finance-101-l05-f3", front: "Divide 72 by the interest rate to estimate years to double your money", back: "Rule of 72" },
        { id: "accounting-finance-101-l05-f4", front: "The process of finding what a future cash flow is worth today", back: "Discounting (Present Value calculation)" }
      ],
      questions: [
        { id: "accounting-finance-101-l05-q1", text: "Using the Rule of 72, how long to double money at 9% interest?", options: [{ id: "a", text: "8 years" }, { id: "b", text: "9 years" }, { id: "c", text: "72 years" }, { id: "d", text: "12 years" }], correctOptionId: "a", explanation: "72 ÷ 9 = 8 years to double your investment!" },
        { id: "accounting-finance-101-l05-q2", text: "In the Future Value formula FV = PV × (1 + r)^n, what does 'n' represent?", options: [{ id: "a", text: "The number of time periods (years)" }, { id: "b", text: "The interest rate" }, { id: "c", text: "The initial investment" }, { id: "d", text: "The future amount" }], correctOptionId: "a", explanation: "n = number of compounding periods, usually years!" },
        { id: "accounting-finance-101-l05-q3", text: "Present value answers the question:", options: [{ id: "a", text: "What is a future payment worth in today's dollars?" }, { id: "b", text: "How much will I have in 10 years?" }, { id: "c", text: "What is my current bank balance?" }, { id: "d", text: "How much tax do I owe?" }], correctOptionId: "a", explanation: "Present value discounts future cash flows back to today's value!" }
      ],
      activities: [{ id: "accounting-finance-101-l05-act1", type: "simulation", title: "Compound interest calculator", description: "Calculate: If you invest $500 at 7% annual compound interest, what will it be worth in 5 years? Use FV = 500 × (1.07)^5. Then use the Rule of 72 to estimate when it will double." }]
    },

    /* ── L06  Financial Ratios  (video) ── */
    {
      id: "accounting-finance-101-l06",
      title: "Financial Ratios",
      type: "video",
      duration: 13,
      chunks: [
        { id: "accounting-finance-101-l06-c1", title: "Profitability Ratios", content: "Profitability ratios measure how well a company generates profit. Gross Profit Margin = (Revenue - COGS) ÷ Revenue × 100. If revenue is $100,000 and COGS is $60,000, gross margin is 40%. Net Profit Margin = Net Income ÷ Revenue × 100. Return on Equity (ROE) = Net Income ÷ Shareholders' Equity × 100 — this tells investors how efficiently their money is being used. Higher margins mean better profitability." },
        { id: "accounting-finance-101-l06-c2", title: "Liquidity Ratios", content: "Liquidity ratios measure if a company can pay its short-term bills. Current Ratio = Current Assets ÷ Current Liabilities. If current assets are $50,000 and current liabilities are $25,000, the current ratio is 2.0 — meaning you have $2 for every $1 owed. A ratio above 1.0 means the company can cover its short-term debts. Quick Ratio (acid test) excludes inventory: (Cash + Receivables) ÷ Current Liabilities — a stricter test." },
        { id: "accounting-finance-101-l06-c3", title: "Leverage and Efficiency Ratios", content: "Debt-to-Equity Ratio = Total Liabilities ÷ Total Equity. A ratio of 1.5 means $1.50 of debt for every $1 of equity — higher means more risk. Inventory Turnover = COGS ÷ Average Inventory — how many times inventory sells and is replaced per year. A grocery store might have turnover of 15 (fast-moving), while a car dealer might have 6-8. Accounts Receivable Turnover = Net Credit Sales ÷ Average AR — how quickly customers pay." }
      ],
      flashcards: [
        { id: "accounting-finance-101-l06-f1", front: "Net Income ÷ Revenue × 100", back: "Net Profit Margin — measures overall profitability" },
        { id: "accounting-finance-101-l06-f2", front: "Current Assets ÷ Current Liabilities", back: "Current Ratio — measures ability to pay short-term debts" },
        { id: "accounting-finance-101-l06-f3", front: "Total Liabilities ÷ Total Equity", back: "Debt-to-Equity Ratio — measures financial leverage/risk" },
        { id: "accounting-finance-101-l06-f4", front: "COGS ÷ Average Inventory", back: "Inventory Turnover — how fast inventory sells" }
      ],
      questions: [
        { id: "accounting-finance-101-l06-q1", text: "A company with $50,000 in current assets and $25,000 in current liabilities has a current ratio of", options: [{ id: "a", text: "2.0" }, { id: "b", text: "0.5" }, { id: "c", text: "25,000" }, { id: "d", text: "75,000" }], correctOptionId: "a", explanation: "Current Ratio = $50,000 ÷ $25,000 = 2.0 — the company can cover its short-term debts twice over!" },
        { id: "accounting-finance-101-l06-q2", text: "A high debt-to-equity ratio indicates", options: [{ id: "a", text: "More financial risk — the company is heavily funded by debt" }, { id: "b", text: "High profitability" }, { id: "c", text: "The company has no debts" }, { id: "d", text: "Fast inventory turnover" }], correctOptionId: "a", explanation: "High D/E means more borrowed money relative to owner investment — higher risk!" },
        { id: "accounting-finance-101-l06-q3", text: "If revenue is $200,000 and COGS is $120,000, the gross profit margin is", options: [{ id: "a", text: "40%" }, { id: "b", text: "60%" }, { id: "c", text: "80%" }, { id: "d", text: "120%" }], correctOptionId: "a", explanation: "Gross Profit = $200,000 - $120,000 = $80,000. Margin = $80,000 ÷ $200,000 = 40%!" }
      ],
      activities: [{ id: "accounting-finance-101-l06-act1", type: "matching_pairs", title: "Ratio matcher", description: "Match each ratio to what it measures: Current Ratio → Short-term debt ability, Net Profit Margin → Overall profitability, Debt-to-Equity → Financial leverage, Inventory Turnover → Sales efficiency." }]
    },

    /* ── L07  Budgeting and Forecasting  (video) ── */
    {
      id: "accounting-finance-101-l07",
      title: "Budgeting and Forecasting",
      type: "video",
      duration: 12,
      chunks: [
        { id: "accounting-finance-101-l07-c1", title: "Why Budget?", content: "A budget is a financial plan for a specific period — usually a month, quarter, or year. It estimates future revenue and allocates spending to different areas. Without a budget, businesses overspend, miss goals, and run out of cash. There are three main approaches: top-down (leadership sets targets), bottom-up (departments build estimates), and zero-based (every expense must be justified from scratch each period, starting from zero)." },
        { id: "accounting-finance-101-l07-c2", title: "Creating a Budget", content: "Step 1: Estimate revenue based on historical data and market conditions. Step 2: List fixed costs (rent, salaries, insurance — the same every month). Step 3: Estimate variable costs (materials, commissions, utilities — change with production/sales). Step 4: Add a contingency reserve (5-10% for unexpected expenses). Step 5: Calculate the projected profit — revenue minus total costs. Compare actual results to the budget monthly to spot variances." },
        { id: "accounting-finance-101-l07-c3", title: "Forecasting and Variance Analysis", content: "Forecasting uses trends, historical data, and assumptions to predict future performance. A sales forecast might use last year's growth rate: if sales grew 8% last year and the market is stable, forecast 8% growth. Variance analysis compares budgeted vs. actual results. Favorable variance: you spent less or earned more than planned. Unfavorable variance: you overspent or underperformed. Investigate large variances to improve future budgets." }
      ],
      flashcards: [
        { id: "accounting-finance-101-l07-f1", front: "A financial plan estimating revenue and allocating spending for a period", back: "Budget" },
        { id: "accounting-finance-101-l07-f2", front: "Budgeting method where every expense must be justified from $0 each period", back: "Zero-based budgeting" },
        { id: "accounting-finance-101-l07-f3", front: "The difference between budgeted and actual amounts", back: "Variance (favorable or unfavorable)" },
        { id: "accounting-finance-101-l07-f4", front: "Costs that stay the same regardless of production level", back: "Fixed costs (rent, salaries, insurance)" }
      ],
      questions: [
        { id: "accounting-finance-101-l07-q1", text: "In zero-based budgeting, every expense must be", options: [{ id: "a", text: "Justified from scratch each period" }, { id: "b", text: "The same as last year" }, { id: "c", text: "Approved by shareholders" }, { id: "d", text: "Paid in cash" }], correctOptionId: "a", explanation: "Zero-based starts from $0 — every line item must prove its value!" },
        { id: "accounting-finance-101-l07-q2", text: "An unfavorable variance means", options: [{ id: "a", text: "You spent more or earned less than budgeted" }, { id: "b", text: "You spent less than planned" }, { id: "c", text: "The budget was perfect" }, { id: "d", text: "Revenue doubled" }], correctOptionId: "a", explanation: "Unfavorable = actual results were worse than the budget predicted!" },
        { id: "accounting-finance-101-l07-q3", text: "Which of these is a fixed cost?", options: [{ id: "a", text: "Monthly rent of $2,000" }, { id: "b", text: "Raw materials for production" }, { id: "c", text: "Sales commissions" }, { id: "d", text: "Shipping costs" }], correctOptionId: "a", explanation: "Rent stays the same every month regardless of how much you produce or sell!" }
      ],
      activities: [{ id: "accounting-finance-101-l07-act1", type: "project_builder", title: "Simple business budget", description: "Create a monthly budget for a small coffee shop: estimate revenue ($15,000), list fixed costs (rent $3,000, wages $5,000, insurance $500), estimate variable costs (coffee beans, milk, cups $3,000), add 5% contingency. Calculate projected monthly profit." }]
    },

    /* ── L08  Accounting & Finance Final Assessment  (quiz) ── */
    {
      id: "accounting-finance-101-l08",
      title: "Accounting & Finance Final Assessment",
      type: "quiz",
      duration: 10,
      questions: [
        { id: "accounting-finance-101-l08-q1", text: "The accounting equation is", options: [{ id: "a", text: "Assets = Liabilities + Equity" }, { id: "b", text: "Revenue = Expenses + Profit" }, { id: "c", text: "Debits = Assets + Liabilities" }, { id: "d", text: "Cash = Income - Taxes" }], correctOptionId: "a", explanation: "A = L + E is the foundation of all accounting!" },
        { id: "accounting-finance-101-l08-q2", text: "Using the Rule of 72, how long to double money at 6% interest?", options: [{ id: "a", text: "12 years" }, { id: "b", text: "6 years" }, { id: "c", text: "72 years" }, { id: "d", text: "8 years" }], correctOptionId: "a", explanation: "72 ÷ 6 = 12 years to double your investment!" },
        { id: "accounting-finance-101-l08-q3", text: "The income statement shows", options: [{ id: "a", text: "Revenue minus expenses over a period of time" }, { id: "b", text: "Assets and liabilities at one point in time" }, { id: "c", text: "Cash inflows and outflows" }, { id: "d", text: "The company's stock price" }], correctOptionId: "a", explanation: "The income statement reports profitability over a time period — monthly, quarterly, or annually!" }
      ],
      flashcards: [
        { id: "accounting-finance-101-l08-f1", front: "Assets = Liabilities + Equity", back: "The Accounting Equation" },
        { id: "accounting-finance-101-l08-f2", front: "FV = PV × (1 + r)^n", back: "Future Value formula" },
        { id: "accounting-finance-101-l08-f3", front: "Current Assets ÷ Current Liabilities", back: "Current Ratio" },
        { id: "accounting-finance-101-l08-f4", front: "Revenue - COGS - Operating Expenses - Taxes", back: "Net Income (bottom line)" }
      ]
    }
  ]
};
