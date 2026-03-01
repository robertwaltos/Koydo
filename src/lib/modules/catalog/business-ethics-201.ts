import type { LearningModule } from "@/lib/modules/types";

export const BusinessEthics201Module: LearningModule = {
  id: "business-ethics-201",
  title: "Corporate Governance & Legal Frameworks",
  description:
    "Understand the governance structures and legal frameworks that shape ethical business conduct. Explore board responsibilities, key regulations like Sarbanes-Oxley, whistleblower protections, insider trading rules, antitrust law, and intellectual property basics.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "ethics"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "intermediate",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Explain the purpose and structure of corporate governance systems",
    "Describe the fiduciary duties and responsibilities of boards of directors",
    "Analyze the key provisions and impact of the Sarbanes-Oxley Act",
    "Evaluate the role of whistleblowing in maintaining corporate integrity",
    "Identify insider trading violations and their legal consequences",
    "Apply antitrust law fundamentals to business competition scenarios",
    "Understand how intellectual property protections affect business strategy"
  ],
  lessons: [
    {
      id: "business-ethics-201-l01",
      title: "Corporate Governance Structures",
      type: "video",
      duration: 13,
      objectives: [
        "Define corporate governance and explain its purpose",
        "Describe the roles of shareholders, boards, and management",
        "Compare one-tier and two-tier board structures"
      ],
      chunks: [
        {
          id: "business-ethics-201-l01-c1",
          title: "What Is Corporate Governance?",
          content:
            "Corporate governance is the system of rules, practices, and processes by which a company is directed and controlled. It defines the distribution of rights and responsibilities among shareholders, the board of directors, managers, and other stakeholders. Good governance ensures accountability, fairness, and transparency in a company's relationship with all its stakeholders. It is the mechanism through which the agency problem — the conflict between owners and managers — is managed."
        },
        {
          id: "business-ethics-201-l01-c2",
          title: "Key Players in Governance",
          content:
            "Shareholders are the owners who elect the board and vote on major decisions. The board of directors oversees management, sets strategic direction, and has fiduciary duties of care and loyalty. The CEO and executive team handle day-to-day operations. Independent directors — those without material ties to the company — provide unbiased oversight. Institutional investors like pension funds and mutual funds increasingly use their voting power to push for governance reforms."
        },
        {
          id: "business-ethics-201-l01-c3",
          title: "One-Tier vs. Two-Tier Boards",
          content:
            "The Anglo-American one-tier model combines executive and non-executive directors on a single board. This allows close collaboration but can create conflicts when the board must oversee the very executives who sit on it. The Continental European two-tier model separates the management board (running operations) from the supervisory board (overseeing management). Germany's model also includes employee representation on the supervisory board through codetermination, giving workers a formal voice in governance."
        }
      ],
      flashcards: [
        { id: "business-ethics-201-l01-f1", front: "Corporate governance", back: "The system of rules, practices, and processes directing and controlling a company — managing the agency problem between owners and managers through accountability, fairness, and transparency" },
        { id: "business-ethics-201-l01-f2", front: "Agency problem", back: "The conflict of interest between company owners (shareholders) and managers — managers may pursue their own interests rather than maximizing shareholder value" },
        { id: "business-ethics-201-l01-f3", front: "Two-tier board model", back: "Separates management board (operations) from supervisory board (oversight); used in Continental Europe; Germany includes employee codetermination on the supervisory board" }
      ]
    },
    {
      id: "business-ethics-201-l02",
      title: "Board Responsibilities & Fiduciary Duties",
      type: "video",
      duration: 12,
      objectives: [
        "Explain the duty of care and duty of loyalty",
        "Describe the business judgment rule and its protections",
        "Identify best practices for effective board oversight"
      ],
      chunks: [
        {
          id: "business-ethics-201-l02-c1",
          title: "Fiduciary Duties",
          content:
            "Directors owe two fundamental fiduciary duties to the corporation and its shareholders. The duty of care requires directors to make informed decisions — they must exercise the care that a reasonably prudent person would use, reviewing materials, asking questions, and seeking expert advice when needed. The duty of loyalty demands that directors put the corporation's interests ahead of personal interests, avoiding self-dealing, competing with the company, or usurping corporate opportunities for personal gain."
        },
        {
          id: "business-ethics-201-l02-c2",
          title: "The Business Judgment Rule",
          content:
            "The business judgment rule is a legal presumption that directors made decisions on an informed basis, in good faith, and in the honest belief that the action was in the company's best interest. Courts will not second-guess board decisions that meet these criteria, even if the outcome is poor. However, the rule does not protect directors who are grossly negligent in gathering information, who have conflicts of interest, or who commit fraud. This rule encourages reasonable risk-taking without fear of personal liability."
        },
        {
          id: "business-ethics-201-l02-c3",
          title: "Board Best Practices",
          content:
            "Effective boards maintain a majority of independent directors, separate the CEO and board chair roles, conduct regular executive sessions without management present, and establish robust audit, compensation, and nominating committees. Board diversity — in gender, ethnicity, expertise, and background — improves decision quality by reducing groupthink. Regular board evaluations, director education programs, and clear succession planning further strengthen governance effectiveness."
        }
      ],
      flashcards: [
        { id: "business-ethics-201-l02-f1", front: "Duty of care", back: "Directors must make informed decisions with the care a reasonably prudent person would exercise — reviewing materials, asking questions, and seeking expert advice" },
        { id: "business-ethics-201-l02-f2", front: "Duty of loyalty", back: "Directors must put the corporation's interests ahead of personal interests — no self-dealing, competing with the company, or usurping corporate opportunities" },
        { id: "business-ethics-201-l02-f3", front: "Business judgment rule", back: "Legal presumption protecting directors who made decisions that were informed, in good faith, and in the corporation's best interest — even if outcomes are poor" }
      ]
    },
    {
      id: "business-ethics-201-l03",
      title: "Sarbanes-Oxley Act & Whistleblowing",
      type: "interactive",
      duration: 15,
      objectives: [
        "Explain the key provisions of the Sarbanes-Oxley Act",
        "Describe whistleblower protections under SOX and Dodd-Frank",
        "Evaluate the ethical dimensions of whistleblowing decisions"
      ],
      chunks: [
        {
          id: "business-ethics-201-l03-c1",
          title: "The Sarbanes-Oxley Act (SOX)",
          content:
            "Enacted in 2002 following the Enron and WorldCom scandals, the Sarbanes-Oxley Act fundamentally transformed corporate governance in the United States. Key provisions include: CEO and CFO must personally certify the accuracy of financial statements (Section 302). Companies must establish and maintain internal controls over financial reporting (Section 404). Audit committees must be composed entirely of independent directors. The Public Company Accounting Oversight Board (PCAOB) was created to regulate auditors. Penalties for securities fraud increased to up to 25 years imprisonment."
        },
        {
          id: "business-ethics-201-l03-c2",
          title: "Whistleblower Protections",
          content:
            "SOX Section 806 protects employees of public companies who report securities fraud from retaliation — including discharge, demotion, suspension, threats, or harassment. The 2010 Dodd-Frank Act strengthened protections further by creating a financial incentive: whistleblowers who provide original information leading to SEC sanctions exceeding $1 million can receive 10-30% of the amount collected. Since its inception, the SEC whistleblower program has awarded over $1.5 billion to individuals who exposed corporate wrongdoing."
        },
        {
          id: "business-ethics-201-l03-c3",
          title: "The Ethics of Whistleblowing",
          content:
            "Whistleblowing raises complex ethical questions. It can protect the public, shareholders, and employees from serious harm. However, whistleblowers often face severe personal consequences — career destruction, social isolation, financial hardship, and psychological distress — even with legal protections. Ethical analysis must weigh the seriousness of the wrongdoing, whether internal channels were exhausted first, the whistleblower's motives, and the likelihood that disclosure will actually correct the problem. Organizations that create safe internal reporting channels reduce the need for external whistleblowing."
        }
      ],
      flashcards: [
        { id: "business-ethics-201-l03-f1", front: "Sarbanes-Oxley Act (2002)", back: "Post-Enron law requiring CEO/CFO certification of financials, internal controls (Section 404), independent audit committees, PCAOB oversight, and increased fraud penalties" },
        { id: "business-ethics-201-l03-f2", front: "SOX Section 302", back: "Requires CEO and CFO to personally certify the accuracy and completeness of financial reports — they face criminal penalties for knowing violations" },
        { id: "business-ethics-201-l03-f3", front: "Dodd-Frank whistleblower incentive", back: "Whistleblowers providing original information leading to SEC sanctions over $1 million can receive 10-30% of the amount collected" }
      ]
    },
    {
      id: "business-ethics-201-l04",
      title: "Insider Trading & Securities Regulation",
      type: "video",
      duration: 13,
      objectives: [
        "Define insider trading and material nonpublic information",
        "Distinguish between legal and illegal insider trading",
        "Explain the classical theory and misappropriation theory of liability"
      ],
      chunks: [
        {
          id: "business-ethics-201-l04-c1",
          title: "What Is Insider Trading?",
          content:
            "Insider trading involves buying or selling securities based on material nonpublic information (MNPI). Information is material if a reasonable investor would consider it important in making an investment decision — earnings surprises, mergers, major contracts, or regulatory decisions. Information is nonpublic if it has not been broadly disseminated to the general market. Not all insider trading is illegal: corporate officers routinely buy and sell their own company's stock, but must report these trades and cannot trade on MNPI."
        },
        {
          id: "business-ethics-201-l04-c2",
          title: "Theories of Liability",
          content:
            "The classical theory holds that corporate insiders — officers, directors, employees — breach their fiduciary duty to shareholders when they trade on MNPI. The misappropriation theory, established in United States v. O'Hagan (1997), extends liability to outsiders who misappropriate confidential information from the source of that information — such as a lawyer trading on client secrets or a printer who reads draft merger documents. Tippers who share MNPI and tippees who trade on it can both face liability."
        },
        {
          id: "business-ethics-201-l04-c3",
          title: "Penalties and Prevention",
          content:
            "Insider trading penalties are severe: individuals face up to 20 years in prison and fines up to $5 million; firms face fines up to $25 million. The SEC can also impose civil penalties of up to three times the profit gained or loss avoided. Companies prevent insider trading through blackout periods (restricting trades around earnings), pre-clearance requirements, mandatory trading plans (Rule 10b5-1), employee training, and information barriers (Chinese walls) between departments that handle sensitive information."
        }
      ],
      flashcards: [
        { id: "business-ethics-201-l04-f1", front: "Material nonpublic information (MNPI)", back: "Information that a reasonable investor would find important for investment decisions and that has not been broadly disseminated to the general market" },
        { id: "business-ethics-201-l04-f2", front: "Misappropriation theory of insider trading", back: "Outsiders who misappropriate confidential information from its source breach a duty and are liable — extends liability beyond corporate insiders (U.S. v. O'Hagan, 1997)" },
        { id: "business-ethics-201-l04-f3", front: "Rule 10b5-1 trading plan", back: "A pre-arranged plan allowing insiders to trade at predetermined times or prices, providing an affirmative defense against insider trading charges if adopted in good faith" }
      ]
    },
    {
      id: "business-ethics-201-l05",
      title: "Checkpoint: Governance, SOX, & Securities Law",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "business-ethics-201-l05-q1",
          text: "Which provision of the Sarbanes-Oxley Act requires companies to maintain internal controls over financial reporting?",
          options: [
            { id: "a", text: "Section 302" },
            { id: "b", text: "Section 404" },
            { id: "c", text: "Section 806" },
            { id: "d", text: "Section 906" }
          ],
          correctOptionId: "b",
          explanation: "Section 404 requires management to establish and maintain adequate internal controls over financial reporting and to assess their effectiveness annually. This is one of the most impactful and costly provisions of SOX."
        },
        {
          id: "business-ethics-201-l05-q2",
          text: "Under the misappropriation theory of insider trading, liability can extend to:",
          options: [
            { id: "a", text: "Only officers and directors of the issuing company" },
            { id: "b", text: "Anyone who trades based on publicly available information" },
            { id: "c", text: "Outsiders who misappropriate confidential information from its source" },
            { id: "d", text: "Only those who physically access company servers" }
          ],
          correctOptionId: "c",
          explanation: "The misappropriation theory extends insider trading liability beyond corporate insiders to anyone who misappropriates confidential information from its source — such as lawyers, accountants, or printers — and trades on that information."
        },
        {
          id: "business-ethics-201-l05-q3",
          text: "The business judgment rule protects directors EXCEPT when they:",
          options: [
            { id: "a", text: "Make a decision that results in financial losses" },
            { id: "b", text: "Decide to enter a risky new market that fails" },
            { id: "c", text: "Are grossly negligent in gathering information before deciding" },
            { id: "d", text: "Choose a strategy that competitors later outperform" }
          ],
          correctOptionId: "c",
          explanation: "The business judgment rule does not protect directors who are grossly negligent in their decision-making process, have undisclosed conflicts of interest, or act in bad faith — regardless of whether the outcome is good or bad."
        },
        {
          id: "business-ethics-201-l05-q4",
          text: "Which governance practice is most effective at reducing the agency problem?",
          options: [
            { id: "a", text: "Having the CEO also serve as board chair" },
            { id: "b", text: "Filling all board seats with company executives" },
            { id: "c", text: "Maintaining a majority of independent directors on the board" },
            { id: "d", text: "Limiting board meetings to once per year" }
          ],
          correctOptionId: "c",
          explanation: "Independent directors — those without material ties to the company — provide unbiased oversight of management, helping to align management actions with shareholder interests and reduce the agency problem."
        }
      ]
    },
    {
      id: "business-ethics-201-l06",
      title: "Antitrust Law & Intellectual Property",
      type: "video",
      duration: 14,
      objectives: [
        "Explain the purpose and key provisions of antitrust law",
        "Distinguish between patents, trademarks, copyrights, and trade secrets",
        "Analyze how IP and antitrust law shape competitive strategy"
      ],
      chunks: [
        {
          id: "business-ethics-201-l06-c1",
          title: "Antitrust Law Fundamentals",
          content:
            "Antitrust law prevents businesses from engaging in practices that restrain trade or reduce competition. In the United States, the Sherman Act (1890) prohibits monopolization and agreements that restrain trade. The Clayton Act (1914) addresses specific practices like price discrimination, tying arrangements, and mergers that may substantially lessen competition. The Federal Trade Commission Act created the FTC to enforce fair competition. Violations can result in criminal prosecution, treble damages in civil suits, and forced divestitures."
        },
        {
          id: "business-ethics-201-l06-c2",
          title: "Common Antitrust Violations",
          content:
            "Price fixing — competitors agreeing to set prices — is a per se illegal violation, meaning no justification is accepted. Market allocation, where competitors divide territories or customers, is similarly per se illegal. Bid rigging, where competitors coordinate bids on contracts, carries criminal penalties. Monopolization — using market power to exclude competitors through predatory pricing, exclusive dealing, or tying arrangements — is evaluated under the rule of reason, considering market context and competitive effects."
        },
        {
          id: "business-ethics-201-l06-c3",
          title: "Intellectual Property Basics",
          content:
            "Intellectual property law grants creators exclusive rights to their innovations. Patents protect inventions and processes for 20 years, requiring novelty, usefulness, and non-obviousness. Trademarks protect brand identifiers — names, logos, slogans — indefinitely, as long as they are used in commerce. Copyrights protect original creative works for the author's life plus 70 years. Trade secrets — like the Coca-Cola formula — are protected indefinitely through confidentiality, not registration. Each form of IP serves a different strategic purpose."
        }
      ],
      flashcards: [
        { id: "business-ethics-201-l06-f1", front: "Sherman Act (1890)", back: "Foundational U.S. antitrust law prohibiting monopolization and agreements that unreasonably restrain trade — violations can lead to criminal prosecution and treble damages" },
        { id: "business-ethics-201-l06-f2", front: "Per se illegal vs. rule of reason", back: "Per se: automatically illegal with no justification accepted (price fixing, market allocation). Rule of reason: evaluated considering market context and competitive effects (monopolization)" },
        { id: "business-ethics-201-l06-f3", front: "Four types of intellectual property", back: "Patents (inventions, 20 years), Trademarks (brand identifiers, indefinite), Copyrights (creative works, life + 70 years), Trade secrets (confidential info, indefinite through secrecy)" }
      ]
    },
    {
      id: "business-ethics-201-l07",
      title: "Final Assessment: Corporate Governance & Legal Frameworks",
      type: "quiz",
      duration: 15,
      questions: [
        {
          id: "business-ethics-201-l07-q1",
          text: "Which of the following is a per se violation of antitrust law?",
          options: [
            { id: "a", text: "A company achieving a dominant market share through superior products" },
            { id: "b", text: "Competitors secretly agreeing to fix prices in their industry" },
            { id: "c", text: "A firm charging different prices in different geographic markets" },
            { id: "d", text: "A company acquiring a small competitor in a related industry" }
          ],
          correctOptionId: "b",
          explanation: "Price fixing — competitors agreeing to set prices — is per se illegal under the Sherman Act. No justification or market analysis is needed; the agreement itself is the violation."
        },
        {
          id: "business-ethics-201-l07-q2",
          text: "Under the Dodd-Frank Act, a whistleblower who provides original information leading to SEC sanctions exceeding $1 million may receive:",
          options: [
            { id: "a", text: "A fixed $100,000 reward" },
            { id: "b", text: "10-30% of the sanctions collected" },
            { id: "c", text: "50% of the sanctions collected" },
            { id: "d", text: "Only protection from retaliation, with no financial award" }
          ],
          correctOptionId: "b",
          explanation: "The Dodd-Frank whistleblower program awards 10-30% of sanctions collected when the total exceeds $1 million, providing a significant financial incentive for reporting securities violations."
        },
        {
          id: "business-ethics-201-l07-q3",
          text: "Which form of intellectual property has no fixed expiration date and relies on maintaining secrecy?",
          options: [
            { id: "a", text: "Patent" },
            { id: "b", text: "Copyright" },
            { id: "c", text: "Trade secret" },
            { id: "d", text: "Trademark" }
          ],
          correctOptionId: "c",
          explanation: "Trade secrets are protected indefinitely — but only as long as the information remains confidential. Once the secret is disclosed or independently discovered, protection is lost. Trademarks also lack a fixed expiration but require active use in commerce, not secrecy."
        },
        {
          id: "business-ethics-201-l07-q4",
          text: "The primary purpose of the two-tier board structure used in Germany is to:",
          options: [
            { id: "a", text: "Allow the CEO to control both strategic and operational decisions" },
            { id: "b", text: "Separate management oversight from day-to-day operations" },
            { id: "c", text: "Eliminate the need for shareholder voting" },
            { id: "d", text: "Reduce the number of directors required by law" }
          ],
          correctOptionId: "b",
          explanation: "The two-tier model separates the supervisory board (which oversees and appoints management) from the management board (which runs daily operations), creating a clearer separation of oversight and execution."
        }
      ]
    }
  ],
};
