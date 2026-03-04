import type { LearningModule } from "@/lib/modules/types";

export const AccountingFinance101Module: LearningModule = {
  "id": "accounting-finance-101",
  "title": "Accounting & Finance Fundamentals",
  "description": "Master the language of business. Learn the accounting equation, double-entry bookkeeping, financial statements, the time value of money, financial ratios, and budgeting — the essential toolkit for understanding any organization's financial health.",
  "subject": "Accounting and Finance",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "business",
    "finance"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Apply the accounting equation (Assets = Liabilities + Equity) to classify transactions",
    "Record business transactions using double-entry bookkeeping with debits and credits",
    "Read and interpret the three core financial statements (income statement, balance sheet, cash flow statement)",
    "Calculate present and future value using time value of money formulas",
    "Analyze business performance using liquidity, profitability, and leverage ratios",
    "Create basic budgets, forecasts, and break-even analyses for business planning",
    "Reference GAAP and IFRS frameworks when discussing accounting standards and reporting"
  ],
  "lessons": [
    {
      "id": "accounting-finance-101-l01",
      "title": "The Accounting Equation",
      "type": "video",
      "duration": 12,
      "objectives": [
        "State the accounting equation and identify its three components",
        "Demonstrate how every transaction keeps the equation in balance",
        "Classify common accounts as assets, liabilities, or equity"
      ],
      "chunks": [
        {
          "id": "accounting-finance-101-l01-c1",
          "title": "Assets = Liabilities + Equity",
          "content": "The accounting equation is a key concept in accounting that helps us understand how a business's finances are organized. This equation can be written as: Assets = Liabilities + Equity. Let's explore what each part means in more detail.\nFirst, we have Assets. These are all the valuable things that a business owns. Think of assets as the resources that help a business operate and grow. Examples of assets include cash (money in the bank), equipment (like computers and machinery), inventory (products ready to be sold), buildings (offices or stores), and accounts receivable (money that customers owe the business for products or services they have received but not yet paid for).\nNext, we have Liabilities. These are the obligations or debts that a business has to pay to others. Liabilities include loans (money borrowed from banks), accounts payable (money owed to suppliers for goods or services received), mortgages (loans taken out to buy property), and unearned revenue (payments received in advance for services that have not yet been delivered).\nFinally, we have Equity. This represents the owner's claim on the business. It is what is left over after all liabilities are subtracted from assets. In simpler terms, equity shows how much of the business the owner truly owns. For example, if a company has $500,000 in assets and $200,000 in liabilities, we can calculate the owner's equity by subtracting the liabilities from the assets, which gives us $300,000.\nUnderstanding this equation is very important because it must always balance. This means that the total value of assets must equal the total value of liabilities plus equity. Both the Generally Accepted Accounting Principles (GAAP), which are used in the United States, and the International Financial Reporting Standards (IFRS), which are used in many other countries, require that this equation remains balanced at all times. This balance is essential for accurate financial reporting and helps ensure that businesses are operating responsibly and transparently.\nContext recap: The accounting equation is a key concept in accounting that helps us understand how a business's finances are organized. This equation can be written as: Assets = Liabilities + Equity. Let's explore what each part means in more detail. First, we have Assets.\nWhy this matters: Assets = Liabilities + Equity helps learners in Accounting and Finance connect ideas from Accounting & Finance Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints.\nGuided check: Ask yourself, \"What is the claim?\", \"Which evidence is strongest?\", and \"What would change my conclusion?\" Use the terms assets, liabilities, business, equity, equation, money, accounting, services while answering to reinforce vocabulary and precision."
        },
        {
          "id": "accounting-finance-101-l01-c2",
          "title": "How Transactions Affect the Equation",
          "content": "In the world of accounting, every time a business makes a financial transaction, it impacts at least two accounts. This is a fundamental concept known as the duality principle, which ensures that the accounting equation remains balanced. Let's explore this idea with some examples to make it clearer.\nImagine you decide to start your own business and invest $10,000. In this case, your cash increases by $10,000, which is considered an asset. At the same time, your owner's equity also increases by $10,000 because this money belongs to you. This shows how one transaction can affect both sides of the equation equally.\nNow, consider a different scenario where you buy equipment for your business that costs $3,000. You pay for this equipment using cash. Here, your equipment (another asset) increases by $3,000, but your cash decreases by the same amount, $3,000. Even though you have traded one asset for another, the total value of your assets remains the same. This is an important point to remember: the total assets do not change, even though their composition does.\nNext, let's say you take out a bank loan for $5,000. In this situation, your cash increases by $5,000, which is great for your business! However, you also have a new liability of $5,000 because you owe that money to the bank. Again, both sides of the accounting equation increase equally, maintaining balance.\nLastly, some transactions can affect all three components of the accounting equation. For example, if you purchase inventory on credit, your assets increase because you now have more inventory, but your liabilities also increase because you owe money for that inventory.\nUnderstanding how each transaction impacts the accounting equation is essential for keeping accurate financial records. This knowledge will help you manage your business finances effectively and ensure that everything is in order.\nContext recap: In the world of accounting, every time a business makes a financial transaction, it impacts at least two accounts. This is a fundamental concept known as the duality principle, which ensures that the accounting equation remains balanced. Let's explore this idea with some examples to make it clearer. Imagine you decide to start your own business and invest $10,000.\nWhy this matters: How Transactions Affect the Equation helps learners in Accounting and Finance connect ideas from Accounting & Finance Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "accounting-finance-101-l01-c3",
          "title": "Types of Accounts",
          "content": "In the world of accounting, we categorize financial activities into different types of accounts to better understand a business's financial health. Let's explore these categories together!\nFirst, we have **asset accounts**. These accounts represent valuable resources that a business owns. Some common examples include:\n- **Cash**: This is the money a business has on hand or in the bank.\n- **Accounts Receivable**: This is the money that customers owe to the business for products or services they have received but not yet paid for.\n- **Inventory**: This refers to the goods that a business has available for sale.\n- **Prepaid Expenses**: These are payments made in advance for services or goods that will be received in the future.\n- **Equipment**: This includes tools and machinery that a business uses to operate.\n- **Buildings**: These are the physical structures owned by the business.\nNext, we have **liability accounts**. These accounts track what the business owes to others. Some key examples are:\n- **Accounts Payable**: This is the money that the business owes to its suppliers for goods or services received.\n- **Notes Payable**: This refers to formal loans that the business has taken out.\n- **Unearned Revenue**: This is money received from customers before the business has delivered the goods or services.\n- **Accrued Expenses**: These are costs that the business has incurred but has not yet paid, such as wages owed to employees.\nFinally, we have **equity accounts**. These accounts show the owner's interest in the business. They include:\n- **Owner's Capital**: This represents the initial and any additional investments made by the owner.\n- **Retained Earnings**: This is the accumulated net income that has been reinvested in the business rather than distributed to the owners.\n- **Dividends or Drawings**: These are payments made to the owners from the business profits.\nIt's essential to understand that revenue, which is the money earned from sales, increases equity, while expenses, which are costs incurred, decrease it. In some accounting frameworks, like IFRS (International Financial Reporting Standards), equity may also be called 'net assets,' but the idea remains the same. Understanding these accounts is crucial for managing a business's finances effectively!\nContext recap: In the world of accounting, we categorize financial activities into different types of accounts to better understand a business's financial health. Let's explore these categories together! First, we have **asset accounts**. These accounts represent valuable resources that a business owns.\nWhy this matters: Types of Accounts helps learners in Accounting and Finance connect ideas from Accounting & Finance Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints.\nGuided check: Ask yourself, \"What is the claim?\", \"Which evidence is strongest?\", and \"What would change my conclusion?\" Use the terms business, accounts, money, services, received, goods, financial, expenses while answering to reinforce vocabulary and precision."
        }
      ],
      "flashcards": [
        {
          "id": "accounting-finance-101-l01-f1",
          "front": "The fundamental accounting equation",
          "back": "Assets = Liabilities + Equity — must balance after every transaction"
        },
        {
          "id": "accounting-finance-101-l01-f2",
          "front": "Accounts Receivable",
          "back": "Money that customers owe the business for goods or services delivered on credit — classified as a current asset"
        },
        {
          "id": "accounting-finance-101-l01-f3",
          "front": "Accounts Payable",
          "back": "Money the business owes to suppliers for goods or services received on credit — classified as a current liability"
        },
        {
          "id": "accounting-finance-101-l01-f4",
          "front": "Retained Earnings",
          "back": "Accumulated net income that has not been distributed to owners as dividends — part of equity"
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "accounting-finance-101-l02",
      "title": "Double-Entry Bookkeeping and Journal Entries",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Explain the double-entry system and why debits must equal credits",
        "Record common transactions as properly formatted journal entries",
        "Post journal entries to a general ledger and prepare a trial balance"
      ],
      "chunks": [
        {
          "id": "accounting-finance-101-l02-c1",
          "title": "Debits and Credits",
          "content": "Double-entry bookkeeping is an essential method used in accounting that helps ensure accuracy in financial records. In this system, every financial transaction is recorded with at least one debit and one credit. This means that the total amount of debits must always equal the total amount of credits, creating a balanced record. To understand how this works, let's look at the T-account, which is a visual tool used in accounting. Debits, often abbreviated as Dr, are placed on the left side of the T-account, while credits, abbreviated as Cr, are placed on the right side.\nThe rules governing debits and credits are quite clear: when you record a debit, it increases assets and expenses. For example, if a business buys new equipment, that purchase is recorded as a debit because it increases the company's assets. On the other hand, credits increase liabilities, equity, and revenue. For instance, if a company takes out a loan, that loan is recorded as a credit because it increases the company's liabilities.\nIt's important to note that the terms 'debit' and 'credit' do not refer to adding or subtracting amounts; instead, they are simply labels that indicate where the entry is recorded in the accounting system. This double-entry bookkeeping system was first formalized by the Italian mathematician Luca Pacioli in 1494 in his influential book 'Summa de Arithmetica.' His work laid the groundwork for modern accounting practices. Today, all contemporary accounting software, such as QuickBooks and SAP, is built upon this foundational principle, ensuring that businesses can maintain accurate and reliable financial records.\nContext recap: Double-entry bookkeeping is an essential method used in accounting that helps ensure accuracy in financial records. In this system, every financial transaction is recorded with at least one debit and one credit. This means that the total amount of debits must always equal the total amount of credits, creating a balanced record. To understand how this works, let's look at the T-account, which is a visual tool used in accounting.\nWhy this matters: Debits and Credits helps learners in Accounting and Finance connect ideas from Accounting & Finance Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "accounting-finance-101-l02-c2",
          "title": "Recording Journal Entries",
          "content": "When you record a journal entry, you are capturing important details about a specific transaction. Each entry includes the date of the transaction, the accounts that are involved, the amounts of money being exchanged, and a short description of what the transaction is about. To format a journal entry correctly, you start by listing the account that is being debited first. This means you are showing that money is being taken out of that account. You should align this account name to the left side of the page. Next, you indent and write the account that is being credited, which shows that money is being added to that account.\nFor example, if you buy $2,000 worth of inventory using cash, your journal entry would look like this:\nDr Inventory $2,000\n   Cr Cash $2,000.\nIn another situation, if you provide $500 worth of consulting services on credit, you would record it as follows:\nDr Accounts Receivable $500\n   Cr Service Revenue $500.\nIf you receive a payment of $1,200 from a customer who owed you money, you would write it like this:\nDr Cash $1,200\n   Cr Accounts Receivable $1,200.\nSometimes, transactions can involve more than two accounts, and these are known as compound entries. For instance, if you purchase a vehicle for $10,000, paying $3,000 in cash and taking out a $7,000 loan, your journal entry would be recorded as:\nDr Vehicle $10,000\n   Cr Cash $3,000\n   Cr Notes Payable $7,000.\nUnderstanding how to properly record these entries is crucial for keeping accurate financial records. It helps businesses track their income and expenses, ensuring they know where their money is going and coming from.\nContext recap: When you record a journal entry, you are capturing important details about a specific transaction. Each entry includes the date of the transaction, the accounts that are involved, the amounts of money being exchanged, and a short description of what the transaction is about. To format a journal entry correctly, you start by listing the account that is being debited first. This means you are showing that money is being taken out of that account.\nWhy this matters: Recording Journal Entries helps learners in Accounting and Finance connect ideas from Accounting & Finance Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "accounting-finance-101-l02-c3",
          "title": "The General Ledger and Trial Balance",
          "content": "The general ledger is like a big notebook that keeps track of all the accounts a business uses. Imagine each account as a separate page in this notebook, which is often called a T-account. On these pages, every time money comes in or goes out, we write it down as either a debit (money going out) or a credit (money coming in). This helps us see how much money we have and how much we owe.\nAfter we have written down all the transactions in the general ledger, we need to create something called a trial balance. This is a special list that shows all the accounts along with their balances, which can either be a debit or a credit, at a specific date. When we add up all the debits and all the credits, they should be equal. If they are, it means our accounts are balanced, which is a good sign!\nHowever, we need to be careful because just because the trial balance is balanced doesn’t mean everything is perfect. Sometimes, mistakes can happen, like writing down a transaction in the wrong account or forgetting to write one down altogether. These errors might not show up in the trial balance.\nThe trial balance is very important because it helps us prepare financial statements, which are documents that show how well a business is doing financially. Both GAAP (Generally Accepted Accounting Principles) and IFRS (International Financial Reporting Standards) are rules that say businesses must keep a complete and accurate general ledger. This is essential for making sure that everyone can trust the financial information the business provides, which helps in making informed decisions.\nIn summary, the general ledger and trial balance are crucial tools in accounting that help businesses keep track of their finances accurately and responsibly.\nContext recap: The general ledger is like a big notebook that keeps track of all the accounts a business uses. Imagine each account as a separate page in this notebook, which is often called a T-account. On these pages, every time money comes in or goes out, we write it down as either a debit (money going out) or a credit (money coming in). This helps us see how much money we have and how much we owe.\nWhy this matters: The General Ledger and Trial Balance helps learners in Accounting and Finance connect ideas from Accounting & Finance Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "interactiveActivities": [
        {
          "id": "accounting-finance-101-l02-a1",
          "title": "Debit or Credit?",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "Increase Cash",
              "right": "Debit"
            },
            {
              "left": "Increase Revenue",
              "right": "Credit"
            },
            {
              "left": "Increase Accounts Payable",
              "right": "Credit"
            },
            {
              "left": "Increase Expenses",
              "right": "Debit"
            },
            {
              "left": "Increase Owner's Equity",
              "right": "Credit"
            },
            {
              "left": "Increase Equipment",
              "right": "Debit"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "accounting-finance-101-l02-f1",
          "front": "Double-entry bookkeeping",
          "back": "Every transaction must be recorded with equal debits and credits — codified by Luca Pacioli in 1494"
        },
        {
          "id": "accounting-finance-101-l02-f2",
          "front": "Debit (Dr)",
          "back": "Left side of a T-account — increases assets and expenses, decreases liabilities, equity, and revenue"
        },
        {
          "id": "accounting-finance-101-l02-f3",
          "front": "Credit (Cr)",
          "back": "Right side of a T-account — increases liabilities, equity, and revenue, decreases assets and expenses"
        },
        {
          "id": "accounting-finance-101-l02-f4",
          "front": "Trial balance",
          "back": "A list of all ledger accounts with their debit or credit balances — total debits must equal total credits"
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "accounting-finance-101-l03",
      "title": "Foundations Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of the accounting equation, debits/credits, and journal entries"
      ],
      "questions": [
        {
          "id": "accounting-finance-101-l03-q1",
          "text": "If a company has $200,000 in assets and $120,000 in equity, what are the liabilities?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "$80,000"
            },
            {
              "id": "b",
              "text": "$320,000"
            },
            {
              "id": "c",
              "text": "$200,000"
            },
            {
              "id": "d",
              "text": "$120,000"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A = L + E → $200,000 = L + $120,000 → L = $80,000. The equation must always balance."
        },
        {
          "id": "accounting-finance-101-l03-q2",
          "text": "To record an increase in revenue, you enter a:",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Debit"
            },
            {
              "id": "b",
              "text": "Credit"
            },
            {
              "id": "c",
              "text": "Withdrawal"
            },
            {
              "id": "d",
              "text": "Closing entry"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Revenue increases with credits (right side) — the same direction as liabilities and equity."
        },
        {
          "id": "accounting-finance-101-l03-q3",
          "text": "A business buys $4,000 of supplies with cash. Which journal entry is correct?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Dr Supplies $4,000 / Cr Cash $4,000"
            },
            {
              "id": "b",
              "text": "Dr Cash $4,000 / Cr Supplies $4,000"
            },
            {
              "id": "c",
              "text": "Dr Supplies $4,000 / Cr Revenue $4,000"
            },
            {
              "id": "d",
              "text": "Dr Expenses $4,000 / Cr Equity $4,000"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Supplies (asset) increases → debit. Cash (asset) decreases → credit. Debits equal credits."
        },
        {
          "id": "accounting-finance-101-l03-q4",
          "text": "A trial balance proves that:",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Total debits equal total credits in the ledger"
            },
            {
              "id": "b",
              "text": "All transactions were recorded to the correct accounts"
            },
            {
              "id": "c",
              "text": "The company is profitable"
            },
            {
              "id": "d",
              "text": "No transactions were omitted"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A trial balance only confirms mathematical equality of debits and credits — it cannot detect errors like misclassified accounts or missing entries."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 1,
          "apply": 1
        }
      },
      "learningAids": [
        {
          "id": "accounting-finance-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "accounting-finance-101-l04",
      "title": "Financial Statements: Income Statement, Balance Sheet, and Cash Flow",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Explain the purpose and structure of the three core financial statements",
        "Calculate gross profit, operating income, and net income from an income statement",
        "Distinguish between operating, investing, and financing activities on a cash flow statement"
      ],
      "chunks": [
        {
          "id": "accounting-finance-101-l04-c1",
          "title": "The Income Statement (Profit & Loss)",
          "content": "The income statement, often referred to as the profit and loss statement, is an important financial document that summarizes a company's revenues and expenses over a specific time frame, such as a month, a quarter, or a year. This statement helps businesses understand how much money they are making and how much they are spending. The structure of the income statement is quite simple and follows a clear format. It starts with Revenue, which is the total amount of money earned from sales. From this, we subtract the Cost of Goods Sold (COGS), which represents the direct costs associated with producing the goods sold by the company. The result of this calculation is called Gross Profit.\nNext, we take the Gross Profit and subtract Operating Expenses. Operating Expenses include various costs that a business incurs during its normal operations, such as rent for the building, salaries for employees, utility bills, and depreciation of equipment. After subtracting these expenses, we arrive at Operating Income, which is also known as Earnings Before Interest and Taxes (EBIT).\nFinally, to find the Net Income, we subtract any Interest Expenses and Taxes from the Operating Income. This final figure represents the company's profit after all expenses have been accounted for.\nFor example, let’s consider a bakery that earns $120,000 in annual revenue. If it spends $45,000 on ingredients (this is the COGS) and incurs $40,000 in operating expenses, we can calculate the Gross Profit as $75,000 and the Operating Income as $35,000.\nWhen it comes to reporting, companies can choose between two formats under Generally Accepted Accounting Principles (GAAP). They can use a single-step format, which simply subtracts total expenses from total revenues, or a multi-step format, which separates gross profit from other income and expenses. Additionally, the International Financial Reporting Standards (IFRS) require that companies present their expenses either by nature (what the expenses are) or by function (how the expenses are used). Understanding these concepts is crucial for anyone interested in finance and accounting, as they provide insight into a company's financial health and operational efficiency.\nContext recap: The income statement, often referred to as the profit and loss statement, is an important financial document that summarizes a company's revenues and expenses over a specific time frame, such as a month, a quarter, or a year. This statement helps businesses understand how much money they are making and how much they are spending. The structure of the income statement is quite simple and follows a clear format. It starts with Revenue, which is the total amount of money earned from sales.\nWhy this matters: The Income Statement (Profit & Loss) helps learners in Accounting and Finance connect ideas from Accounting & Finance Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "accounting-finance-101-l04-c2",
          "title": "The Balance Sheet",
          "content": "The balance sheet is an important financial statement that gives us a clear picture of a company's financial health at a specific moment in time. Think of it as a snapshot that shows what the company owns (its assets), what it owes (its liabilities), and how much it is worth (its equity). This statement is based on a fundamental accounting equation: Assets = Liabilities + Equity.\nLet's break it down further. The assets section lists everything the company owns, and these are organized by how quickly they can be turned into cash. Current assets, such as cash, accounts receivable (money owed to the company), and inventory (products ready to be sold), are listed first because they can be converted to cash within one year. Following current assets, we find non-current assets, which include things like property, buildings, equipment, and intangible assets such as patents and goodwill. These are valuable but not as easily converted to cash in the short term.\nNext, we look at liabilities, which are the company’s debts or obligations. Similar to assets, liabilities are also organized by their due dates. Current liabilities, such as accounts payable (money the company owes to suppliers), short-term debt, and accrued wages (salaries that have been earned but not yet paid), are listed first. Long-term liabilities, like mortgages and bonds payable, come next, as these are obligations that will be paid off over a longer period.\nThe equity section of the balance sheet shows the owner's contributions to the business, which includes contributed capital and retained earnings (profits that have been reinvested in the company). It also accounts for treasury stock, which is stock that the company has repurchased.\nIn some regions, particularly under International Financial Reporting Standards (IFRS), the balance sheet is called the 'Statement of Financial Position.' Finally, the net book value, which is calculated by subtracting total liabilities from total assets, gives us the accounting net worth of the company. This figure can be different from the market value, which is what the company would sell for in the open market. Understanding the balance sheet is crucial for anyone interested in finance or running a business, as it provides key insights into a company's financial stability and operational efficiency.\nContext recap: The balance sheet is an important financial statement that gives us a clear picture of a company's financial health at a specific moment in time. Think of it as a snapshot that shows what the company owns (its assets), what it owes (its liabilities), and how much it is worth (its equity). This statement is based on a fundamental accounting equation: Assets = Liabilities + Equity. Let's break it down further.\nWhy this matters: The Balance Sheet helps learners in Accounting and Finance connect ideas from Accounting & Finance Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints.\nGuided check: Ask yourself, \"What is the claim?\", \"Which evidence is strongest?\", and \"What would change my conclusion?\" Use the terms company, assets, liabilities, balance, sheet, financial, cash, statement while answering to reinforce vocabulary and precision."
        },
        {
          "id": "accounting-finance-101-l04-c3",
          "title": "The Cash Flow Statement",
          "content": "The cash flow statement is a crucial financial document that helps us understand how cash moves in and out of a company. This statement is divided into three main sections, each serving a different purpose.\nThe first section is called Operating Activities. This part tracks the cash generated from the company's core business operations. For example, it includes the money a company receives from its customers when they make purchases, as well as the payments the company makes to its suppliers and employees. Companies can report this information using two different methods. Under Generally Accepted Accounting Principles (GAAP), they can choose the direct method, which lists all actual cash receipts and payments, or the indirect method, which starts with the company's net income and then adjusts for non-cash items, like depreciation and changes in working capital. The International Financial Reporting Standards (IFRS) also allows both methods but encourages companies to use the direct method for clarity.\nThe second section is known as Investing Activities. This part focuses on cash flows related to buying or selling long-term assets. For instance, when a company purchases new equipment, this is considered a cash outflow because money is going out of the company. Conversely, if the company sells a building, this is a cash inflow because money is coming into the company.\nThe third section is called Financing Activities. This section includes transactions that involve the company's owners and creditors. For example, when a company issues stock to raise money, this is a cash inflow. On the other hand, when the company repays loans or pays dividends to its shareholders, these are considered cash outflows.\nIt's essential to understand that a company can show profits on its income statement, which indicates that it is making money, but it can still run out of cash. This situation emphasizes the important saying in corporate finance: 'Cash is king.' This means that having enough cash on hand is vital for a company's survival, even if it appears profitable on paper.\nContext recap: The cash flow statement is a crucial financial document that helps us understand how cash moves in and out of a company. This statement is divided into three main sections, each serving a different purpose. The first section is called Operating Activities. This part tracks the cash generated from the company's core business operations.\nWhy this matters: The Cash Flow Statement helps learners in Accounting and Finance connect ideas from Accounting & Finance Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints.\nGuided check: Ask yourself, \"What is the claim?\", \"Which evidence is strongest?\", and \"What would change my conclusion?\" Use the terms company, cash, money, statement, section, activities, method, flow while answering to reinforce vocabulary and precision."
        }
      ],
      "flashcards": [
        {
          "id": "accounting-finance-101-l04-f1",
          "front": "Revenue − COGS",
          "back": "Gross Profit — measures profitability before operating expenses are deducted"
        },
        {
          "id": "accounting-finance-101-l04-f2",
          "front": "Financial statement that is a 'snapshot' at one point in time",
          "back": "Balance Sheet (called Statement of Financial Position under IFRS)"
        },
        {
          "id": "accounting-finance-101-l04-f3",
          "front": "Three sections of the Cash Flow Statement",
          "back": "Operating (core business cash flows), Investing (long-term asset transactions), Financing (debt and equity capital transactions)"
        },
        {
          "id": "accounting-finance-101-l04-f4",
          "front": "Why can a profitable company go bankrupt?",
          "back": "Accrual accounting recognizes revenue when earned, not when cash arrives — a company can show profit on paper yet run out of actual cash"
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "accounting-finance-101-l05",
      "title": "Time Value of Money: Present and Future Value",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Explain why a dollar today is worth more than a dollar in the future",
        "Calculate future value using the compound interest formula FV = PV × (1 + r)^n",
        "Calculate present value using the discounting formula PV = FV ÷ (1 + r)^n"
      ],
      "chunks": [
        {
          "id": "accounting-finance-101-l05-c1",
          "title": "Why a Dollar Today Is Worth More",
          "content": "The Time Value of Money (TVM) is a key concept in finance that helps us understand why having a dollar today is more valuable than having a dollar in the future. This idea is based on three important reasons. First, we have something called opportunity cost. This means that if you have money right now, you can invest it and potentially earn more money over time. For example, if you invest a dollar today, it could grow into more dollars in the future.\nSecond, there's inflation. Inflation is when prices of goods and services increase over time. This means that the money you have today will not buy as much in the future. For instance, if inflation is 3% each year, a dollar today will only be able to buy what about 74 cents can buy in ten years. This shows how inflation can reduce the value of your money over time.\nThird, we must consider risk. When someone promises to pay you money in the future, there is always a chance that they might not be able to keep that promise. This uncertainty makes future money less reliable than money you have right now.\nUnderstanding the Time Value of Money is essential for making smart financial choices. It helps us in many areas, such as deciding how much to charge for loans, figuring out how much a company is worth, assessing whether an investment project is a good idea, and planning for our retirement. For example, when a bank charges 7% interest on a car loan, they are taking into account these three factors: opportunity cost, inflation, and risk. By understanding TVM, you can make better decisions about your money and future investments.\nContext recap: The Time Value of Money (TVM) is a key concept in finance that helps us understand why having a dollar today is more valuable than having a dollar in the future. This idea is based on three important reasons. First, we have something called opportunity cost. This means that if you have money right now, you can invest it and potentially earn more money over time.\nWhy this matters: Why a Dollar Today Is Worth More helps learners in Accounting and Finance connect ideas from Accounting & Finance Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "accounting-finance-101-l05-c2",
          "title": "Future Value and Compound Interest",
          "content": "Future Value (FV) is an important concept in finance that helps us understand how much our money can grow over time. It answers the question: 'What will my money be worth in the future?' To calculate Future Value, we use a specific formula: FV = PV × (1 + r)^n. In this formula, PV stands for present value, which is the amount of money you start with. The letter 'r' represents the interest rate, which is the percentage of your money that you earn each period, and 'n' is the number of compounding periods, or how many times the interest is applied.\nLet’s look at an example to make this clearer. Imagine you decide to invest $1,000 at an interest rate of 6% that compounds annually for 10 years. To find out how much your investment will be worth in the future, you would plug the numbers into the formula: FV = $1,000 × (1.06)^10. When you calculate this, you find that your Future Value is approximately $1,790.85. This means that after 10 years, your initial investment of $1,000 has grown significantly!\nThe magic of compounding is that you earn interest not only on your original investment but also on the interest that accumulates over time. For example, in the first year, at a 6% interest rate, you would earn $60 in interest. However, by the tenth year, the interest earned in that year alone would be about $101! This shows how powerful compounding can be.\nA useful tool to estimate how long it will take for your money to double is called the Rule of 72. This rule is simple: you divide 72 by the annual interest rate. For instance, if your interest rate is 6%, you would calculate 72 ÷ 6, which tells you that your money will double in about 12 years. If the interest rate were 12%, your money would double in about 6 years.\nCompound interest is so impactful that it has been famously referred to by the great scientist Albert Einstein as 'the eighth wonder of the world.' This highlights just how important it is to understand and utilize the power of compound interest in managing your finances effectively.\nContext recap: Future Value (FV) is an important concept in finance that helps us understand how much our money can grow over time. It answers the question: 'What will my money be worth in the future?' To calculate Future Value, we use a specific formula: FV = PV × (1 + r)^n. In this formula, PV stands for present value, which is the amount of money you start with. The letter 'r' represents the interest rate, which is the percentage of your money that you earn each period, and 'n' is the number of compounding periods, or how many times the interest is applied.\nWhy this matters: Future Value and Compound Interest helps learners in Accounting and Finance connect ideas from Accounting & Finance Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "accounting-finance-101-l05-c3",
          "title": "Present Value and Discounting",
          "content": "Present Value (PV) is an important financial concept that helps us answer the question, 'What is a future cash flow worth today?' This is crucial for making smart financial decisions. To calculate Present Value, we use the formula: PV = FV ÷ (1 + r)^n. In this formula, FV stands for Future Value, which is the amount of money we expect to receive in the future. The letter 'r' represents the discount rate, which reflects the return we expect to earn on our investment, and 'n' is the number of periods (like years) until we receive that cash flow.\nLet’s look at an example to make this clearer. Imagine you have a bond that promises to pay you $10,000 in 5 years. If we want to find out how much that future payment is worth today, we can use an 8% discount rate. Plugging the numbers into our formula, we get: PV = $10,000 ÷ (1.08)^5. When we do the math, we find that the Present Value is approximately $6,805.83. This means that if you invest $6,805.83 today at an 8% interest rate, you will have $10,000 in 5 years.\nBusinesses also use a method called Net Present Value (NPV) to help them decide whether to invest in projects. The NPV formula is: NPV = Σ [Cash Flow_t ÷ (1 + r)^t] − Initial Investment. In simple terms, if the NPV is greater than 0, it means the project is expected to create value, and the company should go ahead with it. If the NPV is less than 0, it suggests that the project might not be a good idea because it could destroy value. Big companies like Apple and Toyota use NPV analysis to make important decisions about where to invest billions of dollars. Understanding these concepts can help you make better financial choices in the future.\nContext recap: Present Value (PV) is an important financial concept that helps us answer the question, 'What is a future cash flow worth today?' This is crucial for making smart financial decisions. To calculate Present Value, we use the formula: PV = FV ÷ (1 + r)^n. In this formula, FV stands for Future Value, which is the amount of money we expect to receive in the future. The letter 'r' represents the discount rate, which reflects the return we expect to earn on our investment, and 'n' is the number of periods (like years) until we receive that cash flow.\nWhy this matters: Present Value and Discounting helps learners in Accounting and Finance connect ideas from Accounting & Finance Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "interactiveActivities": [
        {
          "id": "accounting-finance-101-l05-a1",
          "title": "Compound Interest Calculator",
          "type": "simulation",
          "description": "Calculate: (1) Invest $500 at 7% annual compound interest for 5 years — FV = 500 × (1.07)^5 ≈ $701.28. (2) Use the Rule of 72 to estimate when $500 doubles at 7% (72 ÷ 7 ≈ 10.3 years). (3) Find the present value of $20,000 due in 8 years at a 5% discount rate: PV = $20,000 ÷ (1.05)^8 ≈ $13,537."
        }
      ],
      "flashcards": [
        {
          "id": "accounting-finance-101-l05-f1",
          "front": "Time Value of Money (TVM)",
          "back": "The principle that money available now is worth more than the same amount in the future — due to earning potential, inflation, and risk"
        },
        {
          "id": "accounting-finance-101-l05-f2",
          "front": "FV = PV × (1 + r)^n",
          "back": "Future Value formula — calculates what a present investment will be worth after n compounding periods at rate r"
        },
        {
          "id": "accounting-finance-101-l05-f3",
          "front": "PV = FV ÷ (1 + r)^n",
          "back": "Present Value formula — discounts a future cash flow back to today's dollars using discount rate r"
        },
        {
          "id": "accounting-finance-101-l05-f4",
          "front": "Rule of 72",
          "back": "Divide 72 by the annual interest rate to estimate the number of years needed to double an investment"
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "accounting-finance-101-l06",
      "title": "Financial Statements & TVM Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Apply knowledge of financial statements and time value of money calculations"
      ],
      "questions": [
        {
          "id": "accounting-finance-101-l06-q1",
          "text": "A bakery earns $120,000 in revenue and spends $45,000 on ingredients (COGS). What is the gross profit?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "$75,000"
            },
            {
              "id": "b",
              "text": "$165,000"
            },
            {
              "id": "c",
              "text": "$45,000"
            },
            {
              "id": "d",
              "text": "$120,000"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Gross Profit = Revenue − COGS = $120,000 − $45,000 = $75,000."
        },
        {
          "id": "accounting-finance-101-l06-q2",
          "text": "Which section of the cash flow statement reports loan repayments and dividend payments?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Financing Activities"
            },
            {
              "id": "b",
              "text": "Operating Activities"
            },
            {
              "id": "c",
              "text": "Investing Activities"
            },
            {
              "id": "d",
              "text": "Revenue Activities"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Financing Activities cover transactions with creditors (loan repayments) and owners (dividends, stock issuance)."
        },
        {
          "id": "accounting-finance-101-l06-q3",
          "text": "Using the Rule of 72, approximately how many years does it take to double money at 9% interest?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "8 years"
            },
            {
              "id": "b",
              "text": "9 years"
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
          "explanation": "72 ÷ 9 = 8. At 9% annual interest, an investment roughly doubles in 8 years."
        },
        {
          "id": "accounting-finance-101-l06-q4",
          "text": "A company invests $5,000 at 10% for 2 years. What is the future value?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "$6,050"
            },
            {
              "id": "b",
              "text": "$6,000"
            },
            {
              "id": "c",
              "text": "$5,500"
            },
            {
              "id": "d",
              "text": "$7,000"
            }
          ],
          "correctOptionId": "a",
          "explanation": "FV = PV × (1 + r)^n = $5,000 × (1.10)^2 = $5,000 × 1.21 = $6,050. The extra $50 beyond simple interest ($6,000) is compound interest on first-year interest."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 2
        }
      }
    },
    {
      "id": "accounting-finance-101-l07",
      "title": "Financial Ratios and Analysis",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Calculate and interpret key profitability ratios including gross margin and ROE",
        "Evaluate short-term solvency using the current ratio and quick ratio",
        "Assess financial leverage using the debt-to-equity ratio and efficiency using turnover ratios"
      ],
      "chunks": [
        {
          "id": "accounting-finance-101-l07-c1",
          "title": "Profitability Ratios",
          "content": "Profitability ratios are essential tools that help us understand how effectively a company is turning its sales into actual profit. One of the most important profitability ratios is the Gross Profit Margin. This ratio is calculated by taking the total revenue a company earns and subtracting the cost of goods sold (COGS). After that, we divide the result by the total revenue and multiply by 100 to express it as a percentage. For example, if a company has $200,000 in revenue and its COGS is $120,000, we can calculate the gross profit margin as follows: (200,000 - 120,000) ÷ 200,000 × 100, which equals 40%. This means that for every dollar the company earns, 40 cents is used to cover costs and contribute to profit.\nAnother crucial ratio is the Net Profit Margin. This ratio is calculated by dividing the net income by the total revenue and then multiplying by 100. The net profit margin gives us the true profit percentage after all expenses, including taxes and operating costs, are taken into account.\nAdditionally, we have the Return on Equity (ROE), which measures how well a company uses its shareholders' equity to generate profit. It is calculated by dividing net income by shareholders' equity and multiplying by 100. For instance, if a company earns $50,000 with $250,000 in equity, the ROE would be calculated as follows: (50,000 ÷ 250,000) × 100, resulting in an ROE of 20%. This indicates that for every dollar invested by shareholders, they earn 20 cents back.\nSuccessful investors, like Warren Buffett, often look for companies that maintain a sustained ROE of over 15%, as this suggests strong financial performance.\nIt's also important to compare these ratios to industry standards. For example, grocery stores typically operate with low net profit margins around 2%, while software companies can achieve much higher margins, often exceeding 25%. Understanding these ratios is crucial for investors and managers, as it helps them make informed decisions about a company's financial health and future prospects.\nContext recap: Profitability ratios are essential tools that help us understand how effectively a company is turning its sales into actual profit. One of the most important profitability ratios is the Gross Profit Margin. This ratio is calculated by taking the total revenue a company earns and subtracting the cost of goods sold (COGS). After that, we divide the result by the total revenue and multiply by 100 to express it as a percentage.\nWhy this matters: Profitability Ratios helps learners in Accounting and Finance connect ideas from Accounting & Finance Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "accounting-finance-101-l07-c2",
          "title": "Liquidity Ratios",
          "content": "Liquidity ratios are very important tools that help us understand if a company can pay its short-term bills and obligations, like rent, salaries, and other debts. One of the most popular liquidity ratios is called the Current Ratio. To find this ratio, we take the company's current assets and divide them by its current liabilities. Current assets are things like cash, accounts receivable (money owed to the company), and other assets that can be quickly turned into cash. For example, if a company has $80,000 in current assets and $40,000 in current liabilities, we can calculate the Current Ratio like this: Current Ratio = Current Assets ÷ Current Liabilities, which gives us 2.0. This means that for every $1 the company owes in the short term, it has $2 available in liquid assets, which is generally a positive indicator of financial health. A Current Ratio above 1.0 usually suggests that the company is in a good position to handle its short-term debts without any trouble.\nAnother important liquidity measure is the Quick Ratio, often referred to as the Acid Test. This ratio is calculated a bit differently. To find the Quick Ratio, we add together cash, marketable securities (like stocks or bonds that can be quickly sold), and accounts receivable, and then divide that total by current liabilities. The Quick Ratio does not include inventory because inventory can take time to sell and may not always be converted to cash quickly. For instance, a technology company that has very little inventory might have a Current Ratio and a Quick Ratio that are almost the same. In contrast, a furniture retailer, which typically has a lot of inventory, might show a much lower Quick Ratio because it has more goods that are not immediately cash. Lenders and suppliers pay close attention to these ratios when deciding whether to lend money or offer favorable payment terms, as they want to ensure the company is financially stable and capable of meeting its obligations.\nContext recap: Liquidity ratios are very important tools that help us understand if a company can pay its short-term bills and obligations, like rent, salaries, and other debts. One of the most popular liquidity ratios is called the Current Ratio. To find this ratio, we take the company's current assets and divide them by its current liabilities. Current assets are things like cash, accounts receivable (money owed to the company), and other assets that can be quickly turned into cash.\nWhy this matters: Liquidity Ratios helps learners in Accounting and Finance connect ideas from Accounting & Finance Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "accounting-finance-101-l07-c3",
          "title": "Leverage and Efficiency Ratios",
          "content": "Leverage and efficiency ratios are important tools that help us understand how well a company is handling its debt and how effectively it is using its resources. One of the most important ratios is the Debt-to-Equity Ratio (D/E Ratio). This ratio is calculated by dividing the total liabilities of a company by its total equity. For example, if a company has a D/E ratio of 1.5, it means that for every dollar of equity, the company has $1.50 in debt. This higher level of debt can lead to greater profits when things go well, but it can also result in larger losses if the company faces difficulties. Companies in stable industries, such as utilities, often have D/E ratios above 1.0 because they have steady cash flows that can support higher levels of debt. In contrast, startups usually aim for lower D/E ratios to reduce their risk and maintain financial stability.\nAnother important measure is Inventory Turnover. This ratio is calculated by dividing the cost of goods sold (COGS) by the average inventory. It tells us how many times a company sells and replaces its inventory in a year. For instance, a grocery store might have an inventory turnover of 15 times, which means it sells its stock approximately every 24 days. On the other hand, a luxury jewelry store might only turn its inventory 2 to 3 times a year, indicating that their products sell more slowly.\nLastly, we have Days Sales Outstanding (DSO), which helps us understand how long it takes for a company to collect payments from its customers. To calculate DSO, you divide accounts receivable by revenue and then multiply by 365. For example, if a company has $50,000 in accounts receivable and $600,000 in annual revenue, the DSO would be about 30 days. A rising DSO can be a warning sign that customers are taking longer to pay their bills, which can create cash flow problems for the company, even if sales are increasing. Understanding these ratios is essential for anyone interested in finance, as they provide valuable insights into a company's financial health and operational efficiency.\nContext recap: Leverage and efficiency ratios are important tools that help us understand how well a company is handling its debt and how effectively it is using its resources. One of the most important ratios is the Debt-to-Equity Ratio (D/E Ratio). This ratio is calculated by dividing the total liabilities of a company by its total equity. For example, if a company has a D/E ratio of 1.5, it means that for every dollar of equity, the company has $1.50 in debt.\nWhy this matters: Leverage and Efficiency Ratios helps learners in Accounting and Finance connect ideas from Accounting & Finance Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "accounting-finance-101-l07-f1",
          "front": "Gross Profit Margin formula",
          "back": "(Revenue − COGS) ÷ Revenue × 100 — percentage of each revenue dollar remaining after direct production costs"
        },
        {
          "id": "accounting-finance-101-l07-f2",
          "front": "Current Ratio",
          "back": "Current Assets ÷ Current Liabilities — measures ability to pay short-term obligations; above 1.0 is generally healthy"
        },
        {
          "id": "accounting-finance-101-l07-f3",
          "front": "ROE (Return on Equity)",
          "back": "Net Income ÷ Shareholders' Equity × 100 — measures how effectively equity capital generates profit"
        },
        {
          "id": "accounting-finance-101-l07-f4",
          "front": "Debt-to-Equity Ratio",
          "back": "Total Liabilities ÷ Total Equity — measures financial leverage; higher ratio means more debt relative to owner investment = more risk"
        }
      ]
    },
    {
      "id": "accounting-finance-101-l08",
      "title": "Budgeting, Forecasting, and Break-Even Analysis",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Construct a basic operating budget with fixed costs, variable costs, and contingency",
        "Perform variance analysis by comparing budgeted to actual results",
        "Calculate the break-even point using Break-Even Units = Fixed Costs ÷ (Price − Variable Cost per Unit)"
      ],
      "chunks": [
        {
          "id": "accounting-finance-101-l08-c1",
          "title": "Building a Budget",
          "content": "Creating a budget is a vital skill for managing your finances wisely. A budget acts as a financial roadmap for a specific time frame, which can be a month, a quarter, or even a full year. The first step in building a budget is to estimate your expected revenue. This can be based on how much money you made in the past, the current market conditions, and any potential sales opportunities you foresee. For example, if you sold a certain number of products last year, you might use that information to predict how much you can sell this year.\nNext, it’s important to identify your fixed costs. These are expenses that stay the same no matter how much you produce or sell. Common examples of fixed costs include rent, salaries for employees, and insurance payments. For instance, if your rent is $3,000 each month, your total salaries amount to $8,000, and your insurance costs $500, you would include these figures in your budget.\nAfter identifying fixed costs, you should estimate your variable costs. These are expenses that can change based on how much you produce or sell. Examples of variable costs include the price of raw materials, sales commissions, shipping fees, and hourly labor costs. It’s essential to keep track of these expenses because they can significantly impact your overall budget.\nAdditionally, it's a good idea to include a contingency reserve in your budget. This reserve, typically around 5% to 10% of your total budget, is set aside to cover any unexpected expenses that might come up. This way, you won’t be caught off guard if something unexpected happens.\nFinally, to calculate your projected profit, you will subtract the total of your fixed costs, variable costs, and the contingency reserve from your estimated revenue. This calculation will give you a clearer picture of how much money you can expect to make.\nThere are three main approaches to budgeting that you can consider:\n1. **Top-Down Budgeting**: In this method, the leadership sets overall financial targets, and then departments allocate their budgets based on those targets.\n2. **Bottom-Up Budgeting**: Here, each department creates its own budget estimates, which are then combined to form the overall company budget.\n3. **Zero-Based Budgeting (ZBB)**: This approach requires that every expense must be justified from scratch at the beginning of each budgeting period, with no automatic carryovers from previous budgets. ZBB was first introduced at Texas Instruments in 1969 and has since been adopted by many large companies, including Kraft Heinz.\nUnderstanding these budgeting methods can help you choose the best approach for your financial planning needs.\nContext recap: Creating a budget is a vital skill for managing your finances wisely. A budget acts as a financial roadmap for a specific time frame, which can be a month, a quarter, or even a full year. The first step in building a budget is to estimate your expected revenue. This can be based on how much money you made in the past, the current market conditions, and any potential sales opportunities you foresee.\nWhy this matters: Building a Budget helps learners in Accounting and Finance connect ideas from Accounting & Finance Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "accounting-finance-101-l08-c2",
          "title": "Forecasting and Variance Analysis",
          "content": "Forecasting is an essential process that helps businesses make educated guesses about their future financial performance. This is done by analyzing historical data, conducting market research, and making certain assumptions about future conditions. One of the simplest ways to forecast is by looking at past revenue growth. For example, if a company saw an 8% increase in revenue last year and the market conditions are expected to remain stable, it would be logical to predict another 8% growth for the upcoming year. However, businesses can also use more sophisticated forecasting methods. These include techniques like moving averages, which smooth out fluctuations in data to identify trends, regression analysis, which examines the relationship between different variables, and scenario planning, which prepares for various possible futures by considering best-case, base-case, and worst-case scenarios.\nAnother important concept in financial management is variance analysis. This tool helps companies compare their budgeted figures—what they planned to earn or spend—with their actual results. A favorable variance occurs when a company earns more than expected or spends less than planned. On the other hand, an unfavorable variance happens when a company earns less or spends more than it budgeted. For instance, if a company budgeted $10,000 for materials but ended up spending $11,200, this would result in a $1,200 unfavorable variance.\nIt is crucial for businesses to investigate significant variances, especially those that could influence important decisions, on a monthly basis. Companies usually focus on three main categories of variances: revenue variances, which help determine if sales met expectations; cost variances, which check if spending was in line with the budget; and volume variances, which assess whether production levels matched the planned quantities. By closely monitoring these variances, businesses can make informed decisions to improve their financial performance and achieve their goals.\nContext recap: Forecasting is an essential process that helps businesses make educated guesses about their future financial performance. This is done by analyzing historical data, conducting market research, and making certain assumptions about future conditions. One of the simplest ways to forecast is by looking at past revenue growth. For example, if a company saw an 8% increase in revenue last year and the market conditions are expected to remain stable, it would be logical to predict another 8% growth for the upcoming year.\nWhy this matters: Forecasting and Variance Analysis helps learners in Accounting and Finance connect ideas from Accounting & Finance Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "accounting-finance-101-l08-c3",
          "title": "Break-Even Analysis",
          "content": "Break-even analysis is an important concept in accounting and finance that helps businesses understand how many products they need to sell in order to cover all their costs. When a company reaches its break-even point, it means that the total money earned from sales is exactly equal to the total costs incurred, resulting in neither profit nor loss. This is crucial for any business owner to know because it helps them make informed decisions about pricing and sales strategies.\nTo calculate the break-even point, we use a specific formula: Break-Even Units = Fixed Costs ÷ (Selling Price per Unit − Variable Cost per Unit). In this formula, fixed costs are the expenses that do not change regardless of how many products are sold, such as rent or salaries. The selling price per unit is how much customers pay for each product, while the variable cost per unit includes expenses that vary with production, like materials and labor.\nThe part of the formula that subtracts variable costs from the selling price is called the contribution margin per unit. This margin tells us how much money each sale contributes to covering fixed costs and eventually making a profit. For instance, let’s consider a candle company. If this company has fixed costs of $6,000 every month and sells each candle for $25, while it costs $10 to produce each candle, we can calculate the contribution margin. Here, the contribution margin would be $25 (selling price) minus $10 (variable cost), which equals $15 per candle.\nNow, to find out how many candles the company needs to sell to break even, we divide the fixed costs of $6,000 by the contribution margin of $15. This calculation shows that the company needs to sell 400 candles each month to cover all its costs. If they sell 401 candles, they will start making a profit, but if they only sell 399, they will incur a loss.\nAdditionally, we can calculate the Break-Even Revenue, which is the total amount of money the company needs to earn to break even. This is done by multiplying the break-even units (400 candles) by the selling price ($25), resulting in a total of $10,000. Furthermore, the Contribution Margin Ratio, which indicates the percentage of each sale that goes towards covering fixed costs, can be calculated by dividing the contribution margin ($15) by the selling price ($25). In this example, the Contribution Margin Ratio is 60%.\nUnderstanding break-even analysis is essential for managers as it helps them set appropriate pricing strategies, evaluate whether to launch new products, and determine the minimum sales targets necessary to maintain financial health and stability in their business operations.\nContext recap: Break-even analysis is an important concept in accounting and finance that helps businesses understand how many products they need to sell in order to cover all their costs. When a company reaches its break-even point, it means that the total money earned from sales is exactly equal to the total costs incurred, resulting in neither profit nor loss. This is crucial for any business owner to know because it helps them make informed decisions about pricing and sales strategies. To calculate the break-even point, we use a specific formula: Break-Even Units = Fixed Costs ÷ (Selling Price per Unit − Variable Cost per Unit).\nWhy this matters: Break-Even Analysis helps learners in Accounting and Finance connect ideas from Accounting & Finance Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "interactiveActivities": [
        {
          "id": "accounting-finance-101-l08-a1",
          "title": "Coffee Shop Budget & Break-Even",
          "type": "project_builder",
          "description": "Build a monthly budget and break-even for a coffee shop. Fixed costs: rent $3,500 + wages $6,000 + insurance $400 = $9,900. Average coffee price $5.50, variable cost per cup $1.80. Contribution margin = $3.70. Break-even = $9,900 ÷ $3.70 ≈ 2,676 cups/month (≈ 89 cups/day). If you sell 3,200 cups, projected monthly profit = (3,200 × $3.70) − $9,900 = $1,940. Add a 7% contingency ($693) and recalculate net profit."
        }
      ],
      "flashcards": [
        {
          "id": "accounting-finance-101-l08-f1",
          "front": "Break-Even Point (units)",
          "back": "Fixed Costs ÷ (Selling Price − Variable Cost per Unit) — the volume at which total revenue equals total cost"
        },
        {
          "id": "accounting-finance-101-l08-f2",
          "front": "Contribution Margin",
          "back": "Selling Price − Variable Cost per Unit — the amount each unit sale contributes toward covering fixed costs and generating profit"
        },
        {
          "id": "accounting-finance-101-l08-f3",
          "front": "Zero-Based Budgeting (ZBB)",
          "back": "Every expense must be justified from $0 each period — no automatic carryover from previous budget periods"
        },
        {
          "id": "accounting-finance-101-l08-f4",
          "front": "Variance (favorable vs. unfavorable)",
          "back": "Favorable: actual results beat the budget (more revenue or less cost). Unfavorable: actual results trail the budget (less revenue or more cost)"
        }
      ]
    },
    {
      "id": "accounting-finance-101-l09",
      "title": "Ratios, Budgets, and Break-Even Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Apply financial ratio analysis, budgeting concepts, and break-even calculations"
      ],
      "questions": [
        {
          "id": "accounting-finance-101-l09-q1",
          "text": "A company has $80,000 in current assets and $40,000 in current liabilities. What is its current ratio?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "2.0"
            },
            {
              "id": "b",
              "text": "0.5"
            },
            {
              "id": "c",
              "text": "40,000"
            },
            {
              "id": "d",
              "text": "120,000"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Current Ratio = Current Assets ÷ Current Liabilities = $80,000 ÷ $40,000 = 2.0. The company has $2 for every $1 of short-term debt."
        },
        {
          "id": "accounting-finance-101-l09-q2",
          "text": "If revenue is $200,000 and COGS is $120,000, what is the gross profit margin?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "40%"
            },
            {
              "id": "b",
              "text": "60%"
            },
            {
              "id": "c",
              "text": "80%"
            },
            {
              "id": "d",
              "text": "20%"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Gross Profit = $200,000 − $120,000 = $80,000. Margin = $80,000 ÷ $200,000 × 100 = 40%."
        },
        {
          "id": "accounting-finance-101-l09-q3",
          "text": "A product sells for $50, variable cost is $20 per unit, and monthly fixed costs are $9,000. What is the break-even quantity?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "300 units"
            },
            {
              "id": "b",
              "text": "180 units"
            },
            {
              "id": "c",
              "text": "450 units"
            },
            {
              "id": "d",
              "text": "9,000 units"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Contribution margin = $50 − $20 = $30. Break-even = $9,000 ÷ $30 = 300 units per month."
        },
        {
          "id": "accounting-finance-101-l09-q4",
          "text": "An unfavorable budget variance means:",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Actual costs exceeded the budget or actual revenue fell short"
            },
            {
              "id": "b",
              "text": "The company spent less than planned"
            },
            {
              "id": "c",
              "text": "Revenue exceeded forecasts"
            },
            {
              "id": "d",
              "text": "The budget was perfectly accurate"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Unfavorable means actual results were worse than budgeted — either higher costs or lower revenue than planned."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 2
        }
      }
    },
    {
      "id": "accounting-finance-101-l10",
      "title": "Mastery Quiz: Accounting & Finance Foundations",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Synthesize and apply all accounting and finance fundamentals"
      ],
      "questions": [
        {
          "id": "accounting-finance-101-l10-q1",
          "text": "A company reports assets of $350,000, liabilities of $150,000, and revenue of $200,000. What is the owner's equity?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "$200,000"
            },
            {
              "id": "b",
              "text": "$350,000"
            },
            {
              "id": "c",
              "text": "$500,000"
            },
            {
              "id": "d",
              "text": "$150,000"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Equity = Assets − Liabilities = $350,000 − $150,000 = $200,000. Revenue appears on the income statement, not directly in this balance-sheet calculation."
        },
        {
          "id": "accounting-finance-101-l10-q2",
          "text": "You invest $2,000 at 8% annual compound interest. Using FV = PV × (1 + r)^n, what is the value after 3 years?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "$2,519.42"
            },
            {
              "id": "b",
              "text": "$2,480.00"
            },
            {
              "id": "c",
              "text": "$2,160.00"
            },
            {
              "id": "d",
              "text": "$2,600.00"
            }
          ],
          "correctOptionId": "a",
          "explanation": "FV = $2,000 × (1.08)^3 = $2,000 × 1.259712 = $2,519.42. Compound interest earns $39.42 more than simple interest ($2,480)."
        },
        {
          "id": "accounting-finance-101-l10-q3",
          "text": "A company earns net income of $60,000 on shareholders' equity of $300,000. What is the ROE?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "20%"
            },
            {
              "id": "b",
              "text": "5%"
            },
            {
              "id": "c",
              "text": "50%"
            },
            {
              "id": "d",
              "text": "200%"
            }
          ],
          "correctOptionId": "a",
          "explanation": "ROE = Net Income ÷ Shareholders' Equity × 100 = $60,000 ÷ $300,000 × 100 = 20%."
        },
        {
          "id": "accounting-finance-101-l10-q4",
          "text": "A product has a $40 selling price, $16 variable cost, and $7,200 in monthly fixed costs. How many units must sell to break even?",
          "skillId": "accounting-finance-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "300 units"
            },
            {
              "id": "b",
              "text": "180 units"
            },
            {
              "id": "c",
              "text": "450 units"
            },
            {
              "id": "d",
              "text": "7,200 units"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Contribution margin = $40 − $16 = $24. Break-even = $7,200 ÷ $24 = 300 units. Selling unit 301 generates profit."
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
