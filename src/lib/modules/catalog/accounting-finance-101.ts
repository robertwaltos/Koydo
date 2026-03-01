import type { LearningModule } from "@/lib/modules/types";

export const AccountingFinance101Module: LearningModule = {
  id: "accounting-finance-101",
  title: "Accounting & Finance Fundamentals",
  description:
    "Master the language of business. Learn the accounting equation, double-entry bookkeeping, financial statements, the time value of money, financial ratios, and budgeting — the essential toolkit for understanding any organization's financial health.",
  subject: "Accounting and Finance",
  tags: ["core", "curriculum", "interactive", "business", "finance"],
  minAge: 14,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Apply the accounting equation (Assets = Liabilities + Equity) to classify transactions",
    "Record business transactions using double-entry bookkeeping with debits and credits",
    "Read and interpret the three core financial statements (income statement, balance sheet, cash flow statement)",
    "Calculate present and future value using time value of money formulas",
    "Analyze business performance using liquidity, profitability, and leverage ratios",
    "Create basic budgets, forecasts, and break-even analyses for business planning",
    "Reference GAAP and IFRS frameworks when discussing accounting standards and reporting"
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  The Accounting Equation  (video)
    ────────────────────────────────────────────── */
    {
      id: "accounting-finance-101-l01",
      title: "The Accounting Equation",
      type: "video",
      duration: 12,
      objectives: [
        "State the accounting equation and identify its three components",
        "Demonstrate how every transaction keeps the equation in balance",
        "Classify common accounts as assets, liabilities, or equity"
      ],
      chunks: [
        {
          id: "accounting-finance-101-l01-c1",
          title: "Assets = Liabilities + Equity",
          content:
            "The accounting equation is the foundation of all accounting: Assets = Liabilities + Equity. Assets are what a business OWNS — cash, equipment, inventory, buildings, accounts receivable. Liabilities are what it OWES — loans, accounts payable, mortgages, unearned revenue. Equity is the owner's residual claim — what remains after subtracting liabilities from assets. If a company has $500,000 in assets and $200,000 in liabilities, the owner's equity is $300,000. Both GAAP (Generally Accepted Accounting Principles, used in the U.S.) and IFRS (International Financial Reporting Standards, used in 140+ countries) require this equation to balance at all times."
        },
        {
          id: "accounting-finance-101-l01-c2",
          title: "How Transactions Affect the Equation",
          content:
            "Every transaction affects at least two accounts and the equation must ALWAYS balance — this is the duality principle. Example 1: You invest $10,000 to start a business → Cash (asset) +$10,000, Owner's Equity +$10,000. Example 2: You buy equipment for $3,000 cash → Equipment (asset) +$3,000, Cash (asset) −$3,000. Total assets stay the same — one asset traded for another. Example 3: You take a $5,000 bank loan → Cash (asset) +$5,000, Bank Loan (liability) +$5,000. Both sides increase equally. Example 4: You pay $1,000 rent → Cash (asset) −$1,000, Rent Expense reduces Retained Earnings (equity) −$1,000. Some transactions touch all three components: buying inventory on credit increases an asset and a liability simultaneously."
        },
        {
          id: "accounting-finance-101-l01-c3",
          title: "Types of Accounts",
          content:
            "Asset accounts include: Cash, Accounts Receivable (money customers owe you), Inventory, Prepaid Expenses, Equipment, and Buildings. Liability accounts include: Accounts Payable (money you owe suppliers), Notes Payable (formal loans), Unearned Revenue (payments received before delivering goods or services), and Accrued Expenses (costs incurred but not yet paid, like wages payable). Equity accounts include: Owner's Capital (initial and additional investments), Retained Earnings (accumulated net income not distributed), and Dividends or Drawing (distributions to owners). Revenue increases equity; expenses decrease it. Under IFRS, equity is sometimes called 'net assets' — the concept is identical."
        }
      ],
      flashcards: [
        { id: "accounting-finance-101-l01-f1", front: "The fundamental accounting equation", back: "Assets = Liabilities + Equity — must balance after every transaction" },
        { id: "accounting-finance-101-l01-f2", front: "Accounts Receivable", back: "Money that customers owe the business for goods or services delivered on credit — classified as a current asset" },
        { id: "accounting-finance-101-l01-f3", front: "Accounts Payable", back: "Money the business owes to suppliers for goods or services received on credit — classified as a current liability" },
        { id: "accounting-finance-101-l01-f4", front: "Retained Earnings", back: "Accumulated net income that has not been distributed to owners as dividends — part of equity" }
      ]
    },

    /* ──────────────────────────────────────────────
       L02  Double-Entry Bookkeeping & Journal Entries  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "accounting-finance-101-l02",
      title: "Double-Entry Bookkeeping and Journal Entries",
      type: "interactive",
      duration: 14,
      objectives: [
        "Explain the double-entry system and why debits must equal credits",
        "Record common transactions as properly formatted journal entries",
        "Post journal entries to a general ledger and prepare a trial balance"
      ],
      chunks: [
        {
          id: "accounting-finance-101-l02-c1",
          title: "Debits and Credits",
          content:
            "Double-entry bookkeeping means every transaction is recorded with at least one debit and one credit — debits must always equal credits. Debits (Dr) go on the left side of a T-account; credits (Cr) go on the right. The rules: Debits INCREASE assets and expenses; Credits INCREASE liabilities, equity, and revenue. This isn't about 'adding' or 'subtracting' — debit and credit are positional labels. The system was codified by the Italian mathematician Luca Pacioli in 1494 in his treatise 'Summa de Arithmetica.' Every modern accounting system — from QuickBooks to SAP — is built on this foundation."
        },
        {
          id: "accounting-finance-101-l02-c2",
          title: "Recording Journal Entries",
          content:
            "A journal entry records one transaction with a date, accounts involved, amounts, and a brief narration. Format: list the debited account first (flush left), then indent the credited account. Example 1: Purchase $2,000 of inventory with cash → Dr Inventory $2,000 / Cr Cash $2,000. Example 2: Provide $500 of consulting services on credit → Dr Accounts Receivable $500 / Cr Service Revenue $500. Example 3: Receive $1,200 payment on a customer's account → Dr Cash $1,200 / Cr Accounts Receivable $1,200. Compound entries involve more than two accounts: buy a $10,000 vehicle with $3,000 down and a $7,000 loan → Dr Vehicle $10,000 / Cr Cash $3,000 / Cr Notes Payable $7,000."
        },
        {
          id: "accounting-finance-101-l02-c3",
          title: "The General Ledger and Trial Balance",
          content:
            "The general ledger is the master record of all accounts. Each account has its own page (T-account) showing every debit and credit posted from the journal. After posting, you create a trial balance: a list of all accounts with their debit or credit balances at a specific date. If total debits equal total credits, the books are mathematically balanced. A trial balance does not guarantee accuracy — errors like posting to the wrong account or omitting a transaction entirely won't be caught. The trial balance is the starting point for preparing financial statements. Under both GAAP and IFRS, companies must maintain a complete and accurate general ledger."
        }
      ],
      interactiveActivities: [
        {
          id: "accounting-finance-101-l02-a1",
          title: "Debit or Credit?",
          type: "matching_pairs",
          pairs: [
            { left: "Increase Cash", right: "Debit" },
            { left: "Increase Revenue", right: "Credit" },
            { left: "Increase Accounts Payable", right: "Credit" },
            { left: "Increase Expenses", right: "Debit" },
            { left: "Increase Owner's Equity", right: "Credit" },
            { left: "Increase Equipment", right: "Debit" }
          ]
        }
      ],
      flashcards: [
        { id: "accounting-finance-101-l02-f1", front: "Double-entry bookkeeping", back: "Every transaction must be recorded with equal debits and credits — codified by Luca Pacioli in 1494" },
        { id: "accounting-finance-101-l02-f2", front: "Debit (Dr)", back: "Left side of a T-account — increases assets and expenses, decreases liabilities, equity, and revenue" },
        { id: "accounting-finance-101-l02-f3", front: "Credit (Cr)", back: "Right side of a T-account — increases liabilities, equity, and revenue, decreases assets and expenses" },
        { id: "accounting-finance-101-l02-f4", front: "Trial balance", back: "A list of all ledger accounts with their debit or credit balances — total debits must equal total credits" }
      ]
    },

    /* ──────────────────────────────────────────────
       L03  Foundations Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "accounting-finance-101-l03",
      title: "Foundations Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Demonstrate understanding of the accounting equation, debits/credits, and journal entries"],
      questions: [
        {
          id: "accounting-finance-101-l03-q1",
          text: "If a company has $200,000 in assets and $120,000 in equity, what are the liabilities?",
          skillId: "accounting-finance-101-skill-core",
          options: [
            { id: "a", text: "$80,000" },
            { id: "b", text: "$320,000" },
            { id: "c", text: "$200,000" },
            { id: "d", text: "$120,000" }
          ],
          correctOptionId: "a",
          explanation: "A = L + E → $200,000 = L + $120,000 → L = $80,000. The equation must always balance."
        },
        {
          id: "accounting-finance-101-l03-q2",
          text: "To record an increase in revenue, you enter a:",
          skillId: "accounting-finance-101-skill-core",
          options: [
            { id: "a", text: "Debit" },
            { id: "b", text: "Credit" },
            { id: "c", text: "Withdrawal" },
            { id: "d", text: "Closing entry" }
          ],
          correctOptionId: "b",
          explanation: "Revenue increases with credits (right side) — the same direction as liabilities and equity."
        },
        {
          id: "accounting-finance-101-l03-q3",
          text: "A business buys $4,000 of supplies with cash. Which journal entry is correct?",
          skillId: "accounting-finance-101-skill-core",
          options: [
            { id: "a", text: "Dr Supplies $4,000 / Cr Cash $4,000" },
            { id: "b", text: "Dr Cash $4,000 / Cr Supplies $4,000" },
            { id: "c", text: "Dr Supplies $4,000 / Cr Revenue $4,000" },
            { id: "d", text: "Dr Expenses $4,000 / Cr Equity $4,000" }
          ],
          correctOptionId: "a",
          explanation: "Supplies (asset) increases → debit. Cash (asset) decreases → credit. Debits equal credits."
        },
        {
          id: "accounting-finance-101-l03-q4",
          text: "A trial balance proves that:",
          skillId: "accounting-finance-101-skill-core",
          options: [
            { id: "a", text: "Total debits equal total credits in the ledger" },
            { id: "b", text: "All transactions were recorded to the correct accounts" },
            { id: "c", text: "The company is profitable" },
            { id: "d", text: "No transactions were omitted" }
          ],
          correctOptionId: "a",
          explanation: "A trial balance only confirms mathematical equality of debits and credits — it cannot detect errors like misclassified accounts or missing entries."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 1, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L04  Financial Statements  (video)
    ────────────────────────────────────────────── */
    {
      id: "accounting-finance-101-l04",
      title: "Financial Statements: Income Statement, Balance Sheet, and Cash Flow",
      type: "video",
      duration: 14,
      objectives: [
        "Explain the purpose and structure of the three core financial statements",
        "Calculate gross profit, operating income, and net income from an income statement",
        "Distinguish between operating, investing, and financing activities on a cash flow statement"
      ],
      chunks: [
        {
          id: "accounting-finance-101-l04-c1",
          title: "The Income Statement (Profit & Loss)",
          content:
            "The income statement shows revenue minus expenses over a period — a month, quarter, or year. The structure follows a simple cascade: Revenue − Cost of Goods Sold (COGS) = Gross Profit. Gross Profit − Operating Expenses (rent, salaries, utilities, depreciation) = Operating Income (EBIT — Earnings Before Interest and Taxes). Operating Income − Interest Expense − Taxes = Net Income. Example: A bakery earns $120,000 annual revenue, spends $45,000 on ingredients (COGS), and $40,000 on rent and wages (operating expenses). Gross Profit = $75,000; Operating Income = $35,000. Under GAAP, companies may report using single-step (total revenues minus total expenses) or multi-step format (shows gross profit separately). IFRS requires presenting expenses by nature or function."
        },
        {
          id: "accounting-finance-101-l04-c2",
          title: "The Balance Sheet",
          content:
            "The balance sheet shows what a company owns, owes, and is worth at a SPECIFIC moment — a financial snapshot. It follows the accounting equation: Assets = Liabilities + Equity. Assets are listed by liquidity: current assets (cash, accounts receivable, inventory — convertible to cash within one year) before non-current assets (property, plant, equipment, intangible assets like patents and goodwill). Liabilities follow the same pattern: current (accounts payable, short-term debt, accrued wages) before long-term (mortgages, bonds payable, deferred tax liabilities). Equity = Contributed Capital + Retained Earnings − Treasury Stock. Under IFRS, the balance sheet is called a 'Statement of Financial Position.' Net book value (assets minus liabilities) represents accounting net worth — often different from market value."
        },
        {
          id: "accounting-finance-101-l04-c3",
          title: "The Cash Flow Statement",
          content:
            "The cash flow statement tracks actual cash movement in three sections. Operating Activities: cash from core business operations — customer payments received, supplier and employee payments made. Under GAAP, companies may use the direct method (listing actual cash receipts and payments) or the indirect method (starting from net income and adjusting for non-cash items like depreciation and changes in working capital). IFRS allows both methods but encourages the direct method. Investing Activities: buying or selling long-term assets — purchasing equipment (outflow), selling a building (inflow). Financing Activities: transactions with owners and creditors — issuing stock (inflow), repaying loans (outflow), paying dividends (outflow). A company can be profitable on the income statement yet run out of cash — Enron famously reported profits while hemorrhaging cash. 'Cash is king' is the most important axiom in corporate finance."
        }
      ],
      flashcards: [
        { id: "accounting-finance-101-l04-f1", front: "Revenue − COGS", back: "Gross Profit — measures profitability before operating expenses are deducted" },
        { id: "accounting-finance-101-l04-f2", front: "Financial statement that is a 'snapshot' at one point in time", back: "Balance Sheet (called Statement of Financial Position under IFRS)" },
        { id: "accounting-finance-101-l04-f3", front: "Three sections of the Cash Flow Statement", back: "Operating (core business cash flows), Investing (long-term asset transactions), Financing (debt and equity capital transactions)" },
        { id: "accounting-finance-101-l04-f4", front: "Why can a profitable company go bankrupt?", back: "Accrual accounting recognizes revenue when earned, not when cash arrives — a company can show profit on paper yet run out of actual cash" }
      ]
    },

    /* ──────────────────────────────────────────────
       L05  Time Value of Money  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "accounting-finance-101-l05",
      title: "Time Value of Money: Present and Future Value",
      type: "interactive",
      duration: 14,
      objectives: [
        "Explain why a dollar today is worth more than a dollar in the future",
        "Calculate future value using the compound interest formula FV = PV × (1 + r)^n",
        "Calculate present value using the discounting formula PV = FV ÷ (1 + r)^n"
      ],
      chunks: [
        {
          id: "accounting-finance-101-l05-c1",
          title: "Why a Dollar Today Is Worth More",
          content:
            "A dollar today is worth more than a dollar tomorrow — this is the Time Value of Money (TVM), the most fundamental concept in finance. Three forces explain why: (1) Opportunity cost — money available now can be invested to earn a return. (2) Inflation — prices rise over time, eroding purchasing power; at 3% annual inflation, $100 today buys only about $74 worth of goods in 10 years. (3) Risk — a promise of future payment carries uncertainty. TVM underpins every financial decision: pricing loans, valuing companies, evaluating capital projects, and planning for retirement. When a bank charges 7% interest on a car loan, it is compensating for all three factors."
        },
        {
          id: "accounting-finance-101-l05-c2",
          title: "Future Value and Compound Interest",
          content:
            "Future Value (FV) answers: 'What will my money be worth later?' The formula is FV = PV × (1 + r)^n, where PV = present value (starting amount), r = interest rate per period, and n = number of compounding periods. Example: Invest $1,000 at 6% compounded annually for 10 years → FV = $1,000 × (1.06)^10 = $1,790.85. The power is compounding — you earn interest on your interest. At 6%, your first year earns $60; by year 10, that year's interest alone is roughly $101. The Rule of 72 provides a quick estimate: divide 72 by the annual rate to approximate the doubling time. At 6%, money doubles in ~12 years (72 ÷ 6). At 12%, it doubles in ~6 years. Compound interest is so powerful that Albert Einstein reportedly called it 'the eighth wonder of the world.'"
        },
        {
          id: "accounting-finance-101-l05-c3",
          title: "Present Value and Discounting",
          content:
            "Present Value (PV) works in reverse: 'What is a future cash flow worth today?' Formula: PV = FV ÷ (1 + r)^n, where r is the discount rate reflecting the required rate of return. Example: A bond promises to pay $10,000 in 5 years. At an 8% discount rate, PV = $10,000 ÷ (1.08)^5 = $6,805.83. You would need to invest $6,805.83 today at 8% to accumulate $10,000 in 5 years. Businesses use Net Present Value (NPV) to evaluate capital projects: NPV = Σ [Cash Flow_t ÷ (1 + r)^t] − Initial Investment. If NPV > 0, the project creates value and should be accepted. If NPV < 0, it destroys value. Companies like Apple and Toyota rely on NPV analysis for billion-dollar capital budgeting decisions."
        }
      ],
      interactiveActivities: [
        {
          id: "accounting-finance-101-l05-a1",
          title: "Compound Interest Calculator",
          type: "simulation",
          description: "Calculate: (1) Invest $500 at 7% annual compound interest for 5 years — FV = 500 × (1.07)^5 ≈ $701.28. (2) Use the Rule of 72 to estimate when $500 doubles at 7% (72 ÷ 7 ≈ 10.3 years). (3) Find the present value of $20,000 due in 8 years at a 5% discount rate: PV = $20,000 ÷ (1.05)^8 ≈ $13,537."
        }
      ],
      flashcards: [
        { id: "accounting-finance-101-l05-f1", front: "Time Value of Money (TVM)", back: "The principle that money available now is worth more than the same amount in the future — due to earning potential, inflation, and risk" },
        { id: "accounting-finance-101-l05-f2", front: "FV = PV × (1 + r)^n", back: "Future Value formula — calculates what a present investment will be worth after n compounding periods at rate r" },
        { id: "accounting-finance-101-l05-f3", front: "PV = FV ÷ (1 + r)^n", back: "Present Value formula — discounts a future cash flow back to today's dollars using discount rate r" },
        { id: "accounting-finance-101-l05-f4", front: "Rule of 72", back: "Divide 72 by the annual interest rate to estimate the number of years needed to double an investment" }
      ]
    },

    /* ──────────────────────────────────────────────
       L06  Financial Statements & TVM Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "accounting-finance-101-l06",
      title: "Financial Statements & TVM Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Apply knowledge of financial statements and time value of money calculations"],
      questions: [
        {
          id: "accounting-finance-101-l06-q1",
          text: "A bakery earns $120,000 in revenue and spends $45,000 on ingredients (COGS). What is the gross profit?",
          skillId: "accounting-finance-101-skill-core",
          options: [
            { id: "a", text: "$75,000" },
            { id: "b", text: "$165,000" },
            { id: "c", text: "$45,000" },
            { id: "d", text: "$120,000" }
          ],
          correctOptionId: "a",
          explanation: "Gross Profit = Revenue − COGS = $120,000 − $45,000 = $75,000."
        },
        {
          id: "accounting-finance-101-l06-q2",
          text: "Which section of the cash flow statement reports loan repayments and dividend payments?",
          skillId: "accounting-finance-101-skill-core",
          options: [
            { id: "a", text: "Financing Activities" },
            { id: "b", text: "Operating Activities" },
            { id: "c", text: "Investing Activities" },
            { id: "d", text: "Revenue Activities" }
          ],
          correctOptionId: "a",
          explanation: "Financing Activities cover transactions with creditors (loan repayments) and owners (dividends, stock issuance)."
        },
        {
          id: "accounting-finance-101-l06-q3",
          text: "Using the Rule of 72, approximately how many years does it take to double money at 9% interest?",
          skillId: "accounting-finance-101-skill-core",
          options: [
            { id: "a", text: "8 years" },
            { id: "b", text: "9 years" },
            { id: "c", text: "72 years" },
            { id: "d", text: "12 years" }
          ],
          correctOptionId: "a",
          explanation: "72 ÷ 9 = 8. At 9% annual interest, an investment roughly doubles in 8 years."
        },
        {
          id: "accounting-finance-101-l06-q4",
          text: "A company invests $5,000 at 10% for 2 years. What is the future value?",
          skillId: "accounting-finance-101-skill-core",
          options: [
            { id: "a", text: "$6,050" },
            { id: "b", text: "$6,000" },
            { id: "c", text: "$5,500" },
            { id: "d", text: "$7,000" }
          ],
          correctOptionId: "a",
          explanation: "FV = PV × (1 + r)^n = $5,000 × (1.10)^2 = $5,000 × 1.21 = $6,050. The extra $50 beyond simple interest ($6,000) is compound interest on first-year interest."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 1, apply: 2 }
      }
    },

    /* ──────────────────────────────────────────────
       L07  Financial Ratios & Analysis  (video)
    ────────────────────────────────────────────── */
    {
      id: "accounting-finance-101-l07",
      title: "Financial Ratios and Analysis",
      type: "video",
      duration: 14,
      objectives: [
        "Calculate and interpret key profitability ratios including gross margin and ROE",
        "Evaluate short-term solvency using the current ratio and quick ratio",
        "Assess financial leverage using the debt-to-equity ratio and efficiency using turnover ratios"
      ],
      chunks: [
        {
          id: "accounting-finance-101-l07-c1",
          title: "Profitability Ratios",
          content:
            "Profitability ratios measure how efficiently a company converts revenue into profit. Gross Profit Margin = (Revenue − COGS) ÷ Revenue × 100. If revenue is $200,000 and COGS is $120,000, gross margin is 40% — meaning 40 cents of every revenue dollar covers operating costs and profit. Net Profit Margin = Net Income ÷ Revenue × 100 — the true 'bottom line' percentage. Return on Equity (ROE) = Net Income ÷ Shareholders' Equity × 100: if a company earns $50,000 on $250,000 of equity, ROE is 20% — investors earned 20 cents on every dollar of book equity. Warren Buffett famously targets companies with sustained ROE above 15%. Industry benchmarks matter: grocery chains operate on ~2% net margins, while software companies often exceed 25%."
        },
        {
          id: "accounting-finance-101-l07-c2",
          title: "Liquidity Ratios",
          content:
            "Liquidity ratios answer a critical question: can the company pay its bills as they come due? Current Ratio = Current Assets ÷ Current Liabilities. If current assets are $80,000 and current liabilities are $40,000, the current ratio is 2.0 — meaning $2 of liquid assets for every $1 of near-term debt. A ratio above 1.0 generally indicates adequate short-term solvency. The Quick Ratio (Acid Test) = (Cash + Marketable Securities + Accounts Receivable) ÷ Current Liabilities — it strips out inventory because inventory may not sell quickly or at full value. A tech company with little inventory might show nearly identical current and quick ratios, while a furniture retailer's quick ratio could be notably lower. Lenders and suppliers scrutinize these ratios before extending credit terms."
        },
        {
          id: "accounting-finance-101-l07-c3",
          title: "Leverage and Efficiency Ratios",
          content:
            "Debt-to-Equity Ratio = Total Liabilities ÷ Total Equity. A ratio of 1.5 means $1.50 of debt for every $1 of equity — higher leverage amplifies both gains and losses. Utilities commonly carry D/E ratios above 1.0 because stable cash flows support debt payments; startups typically aim lower. Inventory Turnover = COGS ÷ Average Inventory — how many times inventory sells and is replaced per year. A grocery store might turn inventory 15 times (selling stock every ~24 days); a luxury jeweler might turn it 2–3 times. Days Sales Outstanding (DSO) = (Accounts Receivable ÷ Revenue) × 365 — measures average collection period. If AR is $50,000 on $600,000 of annual revenue, DSO ≈ 30 days. A rising DSO signals that customers are paying more slowly, which can strain cash flow even if sales are growing."
        }
      ],
      flashcards: [
        { id: "accounting-finance-101-l07-f1", front: "Gross Profit Margin formula", back: "(Revenue − COGS) ÷ Revenue × 100 — percentage of each revenue dollar remaining after direct production costs" },
        { id: "accounting-finance-101-l07-f2", front: "Current Ratio", back: "Current Assets ÷ Current Liabilities — measures ability to pay short-term obligations; above 1.0 is generally healthy" },
        { id: "accounting-finance-101-l07-f3", front: "ROE (Return on Equity)", back: "Net Income ÷ Shareholders' Equity × 100 — measures how effectively equity capital generates profit" },
        { id: "accounting-finance-101-l07-f4", front: "Debt-to-Equity Ratio", back: "Total Liabilities ÷ Total Equity — measures financial leverage; higher ratio means more debt relative to owner investment = more risk" }
      ]
    },

    /* ──────────────────────────────────────────────
       L08  Budgeting, Forecasting & Break-Even Analysis  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "accounting-finance-101-l08",
      title: "Budgeting, Forecasting, and Break-Even Analysis",
      type: "interactive",
      duration: 15,
      objectives: [
        "Construct a basic operating budget with fixed costs, variable costs, and contingency",
        "Perform variance analysis by comparing budgeted to actual results",
        "Calculate the break-even point using Break-Even Units = Fixed Costs ÷ (Price − Variable Cost per Unit)"
      ],
      chunks: [
        {
          id: "accounting-finance-101-l08-c1",
          title: "Building a Budget",
          content:
            "A budget is a financial plan for a specific period — typically a month, quarter, or fiscal year. Step 1: Estimate revenue based on historical data, market conditions, and sales pipeline. Step 2: List fixed costs — expenses that remain constant regardless of output volume: rent ($3,000/mo), salaried employees ($8,000/mo), insurance ($500/mo). Step 3: Estimate variable costs — expenses that fluctuate with production or sales volume: raw materials, sales commissions, shipping, hourly labor. Step 4: Add a contingency reserve of 5–10% for unexpected expenses. Step 5: Calculate projected profit = Revenue − (Fixed Costs + Variable Costs + Contingency). Three main budgeting approaches: top-down (leadership sets targets and departments allocate within them), bottom-up (departments build estimates that roll up to the company total), and zero-based budgeting (ZBB — every expense must be justified from scratch each period with no automatic rollovers). ZBB was pioneered at Texas Instruments in 1969 and later adopted by major corporations like Kraft Heinz."
        },
        {
          id: "accounting-finance-101-l08-c2",
          title: "Forecasting and Variance Analysis",
          content:
            "Forecasting projects future financial performance using historical trends, market research, and assumptions. A simple approach: if revenue grew 8% last year and market conditions are stable, forecast 8% growth. More sophisticated techniques include moving averages, regression analysis, and scenario planning (best case / base case / worst case). Variance analysis compares budgeted versus actual results. Favorable variance: you earned more or spent less than planned. Unfavorable variance: you underperformed or overspent. Example: budgeted materials cost is $10,000 but actual was $11,200 → $1,200 unfavorable variance. Investigate material variances (those large enough to impact decisions) monthly. Companies track three main categories: revenue variances (did we sell what we expected?), cost variances (did we spend what we planned?), and volume variances (did we produce the planned quantity?)."
        },
        {
          id: "accounting-finance-101-l08-c3",
          title: "Break-Even Analysis",
          content:
            "Break-even analysis determines the sales volume at which total revenue exactly equals total costs — zero profit, zero loss. The formula: Break-Even Units = Fixed Costs ÷ (Selling Price per Unit − Variable Cost per Unit). The denominator, Price minus Variable Cost, is called the contribution margin per unit — how much each sale contributes toward covering fixed costs and eventually generating profit. Example: A candle company has $6,000 in monthly fixed costs. Each candle sells for $25 and costs $10 in materials and labor (variable cost). Contribution margin = $25 − $10 = $15 per candle. Break-even = $6,000 ÷ $15 = 400 candles per month. Selling 401 candles generates profit; selling 399 generates a loss. Break-Even Revenue = Break-Even Units × Price = 400 × $25 = $10,000. The Contribution Margin Ratio = Contribution Margin ÷ Price = $15 ÷ $25 = 60%. Managers use break-even analysis to set pricing, evaluate new product launches, and determine minimum viable sales targets."
        }
      ],
      interactiveActivities: [
        {
          id: "accounting-finance-101-l08-a1",
          title: "Coffee Shop Budget & Break-Even",
          type: "project_builder",
          description: "Build a monthly budget and break-even for a coffee shop. Fixed costs: rent $3,500 + wages $6,000 + insurance $400 = $9,900. Average coffee price $5.50, variable cost per cup $1.80. Contribution margin = $3.70. Break-even = $9,900 ÷ $3.70 ≈ 2,676 cups/month (≈ 89 cups/day). If you sell 3,200 cups, projected monthly profit = (3,200 × $3.70) − $9,900 = $1,940. Add a 7% contingency ($693) and recalculate net profit."
        }
      ],
      flashcards: [
        { id: "accounting-finance-101-l08-f1", front: "Break-Even Point (units)", back: "Fixed Costs ÷ (Selling Price − Variable Cost per Unit) — the volume at which total revenue equals total cost" },
        { id: "accounting-finance-101-l08-f2", front: "Contribution Margin", back: "Selling Price − Variable Cost per Unit — the amount each unit sale contributes toward covering fixed costs and generating profit" },
        { id: "accounting-finance-101-l08-f3", front: "Zero-Based Budgeting (ZBB)", back: "Every expense must be justified from $0 each period — no automatic carryover from previous budget periods" },
        { id: "accounting-finance-101-l08-f4", front: "Variance (favorable vs. unfavorable)", back: "Favorable: actual results beat the budget (more revenue or less cost). Unfavorable: actual results trail the budget (less revenue or more cost)" }
      ]
    },

    /* ──────────────────────────────────────────────
       L09  Ratios, Budgets & Break-Even Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "accounting-finance-101-l09",
      title: "Ratios, Budgets, and Break-Even Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Apply financial ratio analysis, budgeting concepts, and break-even calculations"],
      questions: [
        {
          id: "accounting-finance-101-l09-q1",
          text: "A company has $80,000 in current assets and $40,000 in current liabilities. What is its current ratio?",
          skillId: "accounting-finance-101-skill-core",
          options: [
            { id: "a", text: "2.0" },
            { id: "b", text: "0.5" },
            { id: "c", text: "40,000" },
            { id: "d", text: "120,000" }
          ],
          correctOptionId: "a",
          explanation: "Current Ratio = Current Assets ÷ Current Liabilities = $80,000 ÷ $40,000 = 2.0. The company has $2 for every $1 of short-term debt."
        },
        {
          id: "accounting-finance-101-l09-q2",
          text: "If revenue is $200,000 and COGS is $120,000, what is the gross profit margin?",
          skillId: "accounting-finance-101-skill-core",
          options: [
            { id: "a", text: "40%" },
            { id: "b", text: "60%" },
            { id: "c", text: "80%" },
            { id: "d", text: "20%" }
          ],
          correctOptionId: "a",
          explanation: "Gross Profit = $200,000 − $120,000 = $80,000. Margin = $80,000 ÷ $200,000 × 100 = 40%."
        },
        {
          id: "accounting-finance-101-l09-q3",
          text: "A product sells for $50, variable cost is $20 per unit, and monthly fixed costs are $9,000. What is the break-even quantity?",
          skillId: "accounting-finance-101-skill-core",
          options: [
            { id: "a", text: "300 units" },
            { id: "b", text: "180 units" },
            { id: "c", text: "450 units" },
            { id: "d", text: "9,000 units" }
          ],
          correctOptionId: "a",
          explanation: "Contribution margin = $50 − $20 = $30. Break-even = $9,000 ÷ $30 = 300 units per month."
        },
        {
          id: "accounting-finance-101-l09-q4",
          text: "An unfavorable budget variance means:",
          skillId: "accounting-finance-101-skill-core",
          options: [
            { id: "a", text: "Actual costs exceeded the budget or actual revenue fell short" },
            { id: "b", text: "The company spent less than planned" },
            { id: "c", text: "Revenue exceeded forecasts" },
            { id: "d", text: "The budget was perfectly accurate" }
          ],
          correctOptionId: "a",
          explanation: "Unfavorable means actual results were worse than budgeted — either higher costs or lower revenue than planned."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 1, apply: 2 }
      }
    },

    /* ──────────────────────────────────────────────
       L10  Mastery Quiz: Accounting & Finance Foundations  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "accounting-finance-101-l10",
      title: "Mastery Quiz: Accounting & Finance Foundations",
      type: "quiz",
      duration: 12,
      objectives: ["Synthesize and apply all accounting and finance fundamentals"],
      questions: [
        {
          id: "accounting-finance-101-l10-q1",
          text: "A company reports assets of $350,000, liabilities of $150,000, and revenue of $200,000. What is the owner's equity?",
          skillId: "accounting-finance-101-skill-core",
          options: [
            { id: "a", text: "$200,000" },
            { id: "b", text: "$350,000" },
            { id: "c", text: "$500,000" },
            { id: "d", text: "$150,000" }
          ],
          correctOptionId: "a",
          explanation: "Equity = Assets − Liabilities = $350,000 − $150,000 = $200,000. Revenue appears on the income statement, not directly in this balance-sheet calculation."
        },
        {
          id: "accounting-finance-101-l10-q2",
          text: "You invest $2,000 at 8% annual compound interest. Using FV = PV × (1 + r)^n, what is the value after 3 years?",
          skillId: "accounting-finance-101-skill-core",
          options: [
            { id: "a", text: "$2,519.42" },
            { id: "b", text: "$2,480.00" },
            { id: "c", text: "$2,160.00" },
            { id: "d", text: "$2,600.00" }
          ],
          correctOptionId: "a",
          explanation: "FV = $2,000 × (1.08)^3 = $2,000 × 1.259712 = $2,519.42. Compound interest earns $39.42 more than simple interest ($2,480)."
        },
        {
          id: "accounting-finance-101-l10-q3",
          text: "A company earns net income of $60,000 on shareholders' equity of $300,000. What is the ROE?",
          skillId: "accounting-finance-101-skill-core",
          options: [
            { id: "a", text: "20%" },
            { id: "b", text: "5%" },
            { id: "c", text: "50%" },
            { id: "d", text: "200%" }
          ],
          correctOptionId: "a",
          explanation: "ROE = Net Income ÷ Shareholders' Equity × 100 = $60,000 ÷ $300,000 × 100 = 20%."
        },
        {
          id: "accounting-finance-101-l10-q4",
          text: "A product has a $40 selling price, $16 variable cost, and $7,200 in monthly fixed costs. How many units must sell to break even?",
          skillId: "accounting-finance-101-skill-core",
          options: [
            { id: "a", text: "300 units" },
            { id: "b", text: "180 units" },
            { id: "c", text: "450 units" },
            { id: "d", text: "7,200 units" }
          ],
          correctOptionId: "a",
          explanation: "Contribution margin = $40 − $16 = $24. Break-even = $7,200 ÷ $24 = 300 units. Selling unit 301 generates profit."
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 1, apply: 1, analyze: 1 }
      }
    }
  ]
};
