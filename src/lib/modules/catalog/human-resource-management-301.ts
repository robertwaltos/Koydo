import type { LearningModule } from "@/lib/modules/types";

export const HumanResourceManagement301Module: LearningModule = {
  id: "human-resource-management-301",
  title: "Compensation, Benefits & Employee Relations",
  description:
    "Dive deep into compensation strategy, job evaluation methods, benefits administration, employee engagement, workplace wellness, labor relations and collective bargaining, and employee rights and discipline. Learn to design total rewards systems that attract, motivate, and retain talent.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "human-resources"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Design a compensation strategy aligned with organizational goals",
    "Apply equity theory and pay-for-performance principles to reward systems",
    "Evaluate job evaluation methods for establishing internal pay equity",
    "Structure a competitive benefits package that meets diverse employee needs",
    "Measure employee engagement using the Gallup Q12 framework",
    "Explain the collective bargaining process and labor relations fundamentals",
    "Apply progressive discipline and due process principles in employee relations"
  ],
  lessons: [
    {
      id: "human-resource-management-301-l01",
      title: "Compensation Strategy and Pay-for-Performance",
      type: "video",
      duration: 14,
      objectives: [
        "Explain the objectives of a strategic compensation system",
        "Apply equity theory to compensation design",
        "Evaluate different pay-for-performance models"
      ],
      chunks: [
        {
          id: "human-resource-management-301-l01-c1",
          title: "Strategic Compensation Objectives",
          content:
            "Compensation is far more than paying salaries — it is a strategic tool that communicates what the organization values and drives behavior. A well-designed compensation system achieves four objectives: attracting qualified talent (external competitiveness), retaining high performers (internal equity), motivating desired behaviors (performance alignment), and controlling labor costs (budget management). The total rewards philosophy encompasses base pay, variable pay (bonuses, commissions), benefits, recognition, and career development opportunities. Organizations must decide their market positioning — leading, matching, or lagging the market — based on their talent strategy."
        },
        {
          id: "human-resource-management-301-l01-c2",
          title: "Equity Theory and Compensation Fairness",
          content:
            "Adams' Equity Theory posits that employees compare their input-to-outcome ratio with that of referent others. When they perceive inequity — being underpaid relative to peers with similar contributions — they experience tension and may reduce effort, seek a raise, or leave. There are three dimensions of pay equity: internal equity (fair pay across jobs within the organization), external equity (competitive pay compared to the market), and individual equity (fair pay differences among people in the same job based on performance or seniority). Perceived unfairness in any dimension damages motivation and trust."
        },
        {
          id: "human-resource-management-301-l01-c3",
          title: "Pay-for-Performance Models",
          content:
            "Pay-for-performance links compensation to measured outcomes. Individual incentives include merit pay increases (permanent base pay raises tied to appraisal ratings), bonuses (one-time payments for achieving targets), and commissions (percentage of sales revenue). Group incentives include team bonuses and gainsharing (sharing productivity improvements with employees). Organizational incentives include profit sharing and stock options. Research shows pay-for-performance increases productivity by 15-20% when goals are clear, measurement is fair, and payouts are meaningful. Risks include encouraging gaming, short-termism, and neglect of unmeasured duties."
        }
      ],
      flashcards: [
        { id: "human-resource-management-301-l01-f1", front: "Four objectives of strategic compensation", back: "Attract talent (external competitiveness), Retain high performers (internal equity), Motivate behavior (performance alignment), Control costs (budget management)" },
        { id: "human-resource-management-301-l01-f2", front: "Adams' Equity Theory", back: "Employees compare their input-to-outcome ratio with referent others; perceived inequity causes tension leading to reduced effort, seeking raises, or turnover" },
        { id: "human-resource-management-301-l01-f3", front: "Three types of pay-for-performance", back: "Individual (merit pay, bonuses, commissions), Group (team bonuses, gainsharing), Organizational (profit sharing, stock options) — increases productivity 15-20% when well-designed" }
      ]
    },
    {
      id: "human-resource-management-301-l02",
      title: "Job Evaluation and Pay Structures",
      type: "video",
      duration: 12,
      objectives: [
        "Compare job evaluation methods for establishing internal pay equity",
        "Design a pay structure with grades and ranges",
        "Explain the role of salary surveys in external competitiveness"
      ],
      chunks: [
        {
          id: "human-resource-management-301-l02-c1",
          title: "Job Evaluation Methods",
          content:
            "Job evaluation systematically determines the relative worth of jobs within an organization to establish internal pay equity. Four primary methods exist: (1) Job ranking — ordering jobs from highest to lowest value (simple but subjective). (2) Job classification — slotting jobs into predefined grades with written descriptions (used by the U.S. federal government's GS system). (3) Point factor — rating jobs on compensable factors like skill, effort, responsibility, and working conditions, then summing points (most precise and defensible). (4) Factor comparison — combining ranking and point methods by comparing jobs factor by factor against benchmark positions."
        },
        {
          id: "human-resource-management-301-l02-c2",
          title: "Building Pay Structures",
          content:
            "A pay structure organizes jobs into pay grades (groups of similarly valued jobs) with defined pay ranges (minimum, midpoint, and maximum). The midpoint typically represents the market rate. Range spread (the percentage difference between minimum and maximum) is wider for senior roles (50-60%) and narrower for entry-level positions (20-30%). Broadbanding collapses many grades into fewer, wider bands to support flatter organizations and lateral career moves. Compa-ratio (employee salary divided by range midpoint) measures where individuals fall within their range — a compa-ratio of 1.0 means the employee earns exactly the midpoint."
        },
        {
          id: "human-resource-management-301-l02-c3",
          title: "Salary Surveys and Market Pricing",
          content:
            "Salary surveys collect compensation data from comparable employers to establish external competitiveness. Sources include published surveys from consulting firms (Mercer, Willis Towers Watson, Radford), industry associations, and government data (Bureau of Labor Statistics). Key data points include base salary percentiles (25th, 50th, 75th), total cash compensation, and total remuneration. Market pricing matches internal jobs to survey benchmarks using job content (not titles, which vary widely). Organizations typically target a specific percentile — the 50th for market-matching or the 75th for a lead strategy."
        }
      ],
      flashcards: [
        { id: "human-resource-management-301-l02-f1", front: "Point factor job evaluation", back: "Most precise method — rates jobs on compensable factors (skill, effort, responsibility, conditions), sums points to determine relative job worth and internal pay equity" },
        { id: "human-resource-management-301-l02-f2", front: "Compa-ratio", back: "Employee salary ÷ pay range midpoint — a ratio of 1.0 means earning exactly the midpoint; below 1.0 is below midpoint, above 1.0 is above" },
        { id: "human-resource-management-301-l02-f3", front: "Salary survey market pricing", back: "Matching internal jobs to external survey benchmarks by job content to determine competitive pay; organizations target a specific percentile (50th to match, 75th to lead)" }
      ]
    },
    {
      id: "human-resource-management-301-l03",
      title: "Benefits Administration and Total Rewards",
      type: "interactive",
      duration: 13,
      objectives: [
        "Categorize mandatory and voluntary employee benefits",
        "Design a flexible benefits program that meets diverse needs",
        "Calculate the total cost of employee benefits as a percentage of compensation"
      ],
      chunks: [
        {
          id: "human-resource-management-301-l03-c1",
          title: "Mandatory and Voluntary Benefits",
          content:
            "Employee benefits fall into two categories. Mandatory benefits are legally required: Social Security and Medicare (FICA), unemployment insurance, workers' compensation, and Family and Medical Leave Act (FMLA) protections. Voluntary benefits are employer-chosen and include health insurance, dental and vision coverage, retirement plans (401k with employer match), life insurance, disability insurance, paid time off, tuition reimbursement, and employee assistance programs (EAPs). Benefits typically represent 30-40% of total compensation costs. Organizations increasingly offer non-traditional benefits like student loan repayment, fertility treatment coverage, and pet insurance to differentiate their offering."
        },
        {
          id: "human-resource-management-301-l03-c2",
          title: "Flexible Benefits and Cafeteria Plans",
          content:
            "Flexible benefits (cafeteria plans under IRS Section 125) allow employees to choose among benefit options using a defined credit amount. This recognizes that a 25-year-old single employee values different benefits than a 45-year-old parent. Employees select from a menu: higher or lower health plan tiers, dental coverage, dependent care flexible spending accounts (FSAs), health savings accounts (HSAs), additional life insurance, and more. Advantages include higher employee satisfaction and cost efficiency. Challenges include adverse selection (only those who need expensive coverage choose it), administrative complexity, and the need for clear communication so employees make informed choices."
        },
        {
          id: "human-resource-management-301-l03-c3",
          title: "Total Rewards Philosophy",
          content:
            "The total rewards framework, promoted by WorldatWork, encompasses five elements: compensation (base and variable pay), benefits (health, retirement, time off), work-life effectiveness (flexible schedules, remote work, wellness programs), recognition (formal awards and informal appreciation), and development opportunities (training, career pathing, tuition support). A total rewards statement shows employees the full value of their package — many employees significantly underestimate their total rewards, focusing only on base pay. Organizations that communicate total rewards effectively see 12% higher engagement and lower turnover."
        }
      ],
      flashcards: [
        { id: "human-resource-management-301-l03-f1", front: "Benefits as percentage of compensation", back: "Employee benefits typically represent 30-40% of total compensation costs, including mandatory (FICA, workers' comp, FMLA) and voluntary (health, retirement, PTO) benefits" },
        { id: "human-resource-management-301-l03-f2", front: "Cafeteria plan (Section 125)", back: "Flexible benefits plan allowing employees to choose among benefit options using defined credits — recognizes diverse employee needs; challenge is adverse selection" },
        { id: "human-resource-management-301-l03-f3", front: "Five elements of total rewards (WorldatWork)", back: "Compensation, Benefits, Work-life effectiveness, Recognition, Development opportunities — communicating total rewards increases engagement by 12%" }
      ]
    },
    {
      id: "human-resource-management-301-l04",
      title: "Employee Engagement and Workplace Wellness",
      type: "video",
      duration: 13,
      objectives: [
        "Define employee engagement and its impact on business outcomes",
        "Apply the Gallup Q12 framework to measure engagement",
        "Design workplace wellness programs that improve health and productivity"
      ],
      chunks: [
        {
          id: "human-resource-management-301-l04-c1",
          title: "Employee Engagement: Definition and Impact",
          content:
            "Employee engagement is the emotional commitment an employee has to the organization and its goals — it goes beyond satisfaction (being happy) to discretionary effort (going above and beyond). Gallup's research across 2.7 million workers shows that organizations in the top quartile of engagement see 21% higher profitability, 17% higher productivity, 41% lower absenteeism, and 59% lower turnover than bottom-quartile organizations. Despite this, only about 33% of U.S. employees are engaged, 51% are 'not engaged' (doing the minimum), and 16% are 'actively disengaged' (undermining the organization)."
        },
        {
          id: "human-resource-management-301-l04-c2",
          title: "The Gallup Q12 Framework",
          content:
            "Gallup's Q12 is the most widely used engagement survey, consisting of 12 statements employees rate from 1 (strongly disagree) to 5 (strongly agree). The items progress from basic needs to growth: knowing what is expected, having materials and equipment, opportunity to do your best, receiving recognition, someone caring about you as a person, someone encouraging development, opinions counting, mission making work feel important, coworkers committed to quality, having a best friend at work, progress discussions in the last six months, and opportunities to learn and grow. Managers directly influence 70% of the variance in Q12 scores."
        },
        {
          id: "human-resource-management-301-l04-c3",
          title: "Workplace Wellness Programs",
          content:
            "Workplace wellness programs aim to improve employee health, reduce healthcare costs, and boost productivity. Programs range from basic (gym subsidies, health screenings, flu shots) to comprehensive (stress management workshops, mental health counseling, smoking cessation, nutrition coaching, sleep programs, and financial wellness education). The ROI debate is mixed — Johnson & Johnson reported $2.71 savings per dollar spent over a decade, while a 2019 JAMA study found modest short-term returns. Best practices include leadership participation, voluntary enrollment, holistic approach (physical, mental, financial, social wellness), data-driven design, and avoiding penalizing unhealthy employees."
        }
      ],
      flashcards: [
        { id: "human-resource-management-301-l04-f1", front: "Employee engagement", back: "Emotional commitment driving discretionary effort — top-quartile organizations see 21% higher profitability and 59% lower turnover; only ~33% of U.S. workers are engaged" },
        { id: "human-resource-management-301-l04-f2", front: "Gallup Q12", back: "12-item engagement survey progressing from basic needs to growth; managers influence 70% of variance in scores; covers expectations, recognition, development, relationships, and purpose" },
        { id: "human-resource-management-301-l04-f3", front: "Workplace wellness program best practices", back: "Leadership participation, voluntary enrollment, holistic approach (physical, mental, financial, social), data-driven design, avoiding penalties for unhealthy employees" }
      ]
    },
    {
      id: "human-resource-management-301-l05",
      title: "Checkpoint: Compensation, Benefits & Engagement",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "human-resource-management-301-l05-q1",
          text: "According to Adams' Equity Theory, what happens when an employee perceives they are underpaid relative to a coworker with similar inputs?",
          options: [
            { id: "a", text: "They increase their effort to earn more recognition" },
            { id: "b", text: "They experience tension and may reduce effort, seek a raise, or leave" },
            { id: "c", text: "They automatically become more engaged" },
            { id: "d", text: "They are unaffected because pay is confidential" }
          ],
          correctOptionId: "b",
          explanation: "Equity Theory predicts that perceived underpayment creates psychological tension, leading employees to restore equity by reducing effort (lowering inputs), demanding higher pay (increasing outcomes), distorting perceptions, or leaving the situation entirely."
        },
        {
          id: "human-resource-management-301-l05-q2",
          text: "What does a compa-ratio of 0.85 indicate?",
          options: [
            { id: "a", text: "The employee earns 85% above the range midpoint" },
            { id: "b", text: "The employee earns 15% below the range midpoint" },
            { id: "c", text: "The employee is in the 85th percentile of external market pay" },
            { id: "d", text: "The employee's benefits represent 85% of total compensation" }
          ],
          correctOptionId: "b",
          explanation: "Compa-ratio is calculated as employee salary divided by the pay range midpoint. A ratio of 0.85 means the employee earns 85% of the midpoint — or 15% below it — indicating they may be underpaid relative to the target rate for their role."
        },
        {
          id: "human-resource-management-301-l05-q3",
          text: "Which Gallup Q12 finding is most significant for managers?",
          options: [
            { id: "a", text: "Employee engagement has no effect on profitability" },
            { id: "b", text: "Managers influence 70% of the variance in engagement scores" },
            { id: "c", text: "Engagement is entirely determined by compensation levels" },
            { id: "d", text: "Only senior leaders can impact engagement" }
          ],
          correctOptionId: "b",
          explanation: "Gallup's research shows that managers directly influence 70% of the variance in team engagement scores, making the manager-employee relationship the single most critical factor in engagement."
        },
        {
          id: "human-resource-management-301-l05-q4",
          text: "Which job evaluation method rates jobs on compensable factors like skill, effort, responsibility, and working conditions?",
          options: [
            { id: "a", text: "Job ranking" },
            { id: "b", text: "Job classification" },
            { id: "c", text: "Point factor" },
            { id: "d", text: "Market pricing" }
          ],
          correctOptionId: "c",
          explanation: "The point factor method assigns numerical points to compensable factors (skill, effort, responsibility, working conditions), creating a total score that determines relative job worth — it is the most precise and legally defensible method."
        }
      ]
    },
    {
      id: "human-resource-management-301-l06",
      title: "Labor Relations and Collective Bargaining",
      type: "video",
      duration: 14,
      objectives: [
        "Explain the collective bargaining process and its stages",
        "Identify mandatory, permissive, and illegal bargaining subjects",
        "Describe the role of unions and the grievance procedure"
      ],
      chunks: [
        {
          id: "human-resource-management-301-l06-c1",
          title: "The Collective Bargaining Process",
          content:
            "Collective bargaining is the negotiation process between an employer and a union representing employees to establish terms and conditions of employment. The process begins when a union wins a representation election (requiring majority support in an NLRB-supervised vote). Bargaining follows stages: preparation (gathering data on wages, benefits, and industry standards), proposal exchange (each side presents initial demands), negotiation (give-and-take bargaining, often using integrative or win-win approaches), agreement (reaching a tentative contract), and ratification (union members vote to accept). Contracts typically cover 2-4 years."
        },
        {
          id: "human-resource-management-301-l06-c2",
          title: "Bargaining Subjects and Impasse Resolution",
          content:
            "Bargaining subjects fall into three categories: mandatory subjects (wages, hours, working conditions — both sides must bargain in good faith), permissive subjects (matters like union involvement in strategic decisions — either side can raise but neither is obligated to bargain), and illegal subjects (closed shop agreements, discrimination — cannot be included in contracts). When negotiations reach impasse, resolution mechanisms include mediation (neutral third party facilitates agreement), fact-finding (neutral party investigates and recommends terms), and arbitration (neutral party issues a binding decision). Strikes and lockouts are economic pressure tactics of last resort."
        },
        {
          id: "human-resource-management-301-l06-c3",
          title: "Grievance Procedures and Employee Rights",
          content:
            "A grievance procedure is the formal process for resolving disputes about contract interpretation or employee discipline. Typical steps include: (1) Employee raises concern with immediate supervisor. (2) Written grievance filed with department manager and union steward. (3) Escalation to HR and union representatives. (4) Arbitration if unresolved — a neutral arbitrator renders a final, binding decision. Progressive discipline follows a sequence: verbal warning, written warning, suspension, and termination — each step documented and proportionate to the offense. Employees have Weingarten rights to union representation during investigatory interviews that may lead to discipline."
        }
      ],
      flashcards: [
        { id: "human-resource-management-301-l06-f1", front: "Collective bargaining stages", back: "Preparation → Proposal exchange → Negotiation → Agreement → Ratification (union member vote) — contracts typically cover 2-4 years" },
        { id: "human-resource-management-301-l06-f2", front: "Three categories of bargaining subjects", back: "Mandatory (wages, hours, conditions — must bargain), Permissive (optional topics), Illegal (closed shop, discrimination — cannot include)" },
        { id: "human-resource-management-301-l06-f3", front: "Progressive discipline sequence", back: "Verbal warning → Written warning → Suspension → Termination — each step documented and proportionate; employees have Weingarten rights to union representation" }
      ]
    },
    {
      id: "human-resource-management-301-l07",
      title: "Final Assessment: Compensation, Benefits & Employee Relations",
      type: "quiz",
      duration: 15,
      questions: [
        {
          id: "human-resource-management-301-l07-q1",
          text: "Which pay-for-performance model shares productivity improvements between employees and the organization?",
          options: [
            { id: "a", text: "Merit pay" },
            { id: "b", text: "Commission" },
            { id: "c", text: "Gainsharing" },
            { id: "d", text: "Stock options" }
          ],
          correctOptionId: "c",
          explanation: "Gainsharing is a group incentive plan that shares the financial gains from productivity improvements (cost savings, efficiency gains) between employees and the organization, fostering a sense of shared ownership."
        },
        {
          id: "human-resource-management-301-l07-q2",
          text: "Under the National Labor Relations Act, which of the following is a MANDATORY bargaining subject?",
          options: [
            { id: "a", text: "Union involvement in corporate strategy" },
            { id: "b", text: "Closed shop agreements" },
            { id: "c", text: "Employee wages and overtime pay" },
            { id: "d", text: "Company logo design" }
          ],
          correctOptionId: "c",
          explanation: "Wages, hours, and working conditions (including overtime pay) are mandatory bargaining subjects — both employer and union must negotiate in good faith on these topics. Union involvement in strategy is permissive; closed shop is illegal."
        },
        {
          id: "human-resource-management-301-l07-q3",
          text: "What are Weingarten rights?",
          options: [
            { id: "a", text: "The right to a minimum wage increase annually" },
            { id: "b", text: "The right to union representation during investigatory interviews that may lead to discipline" },
            { id: "c", text: "The right to strike without advance notice" },
            { id: "d", text: "The right to access all company financial records" }
          ],
          correctOptionId: "b",
          explanation: "Weingarten rights (from NLRB v. J. Weingarten, 1975) guarantee unionized employees the right to have a union representative present during investigatory interviews that the employee reasonably believes may result in disciplinary action."
        },
        {
          id: "human-resource-management-301-l07-q4",
          text: "The WorldatWork total rewards framework includes five elements. Which of the following is NOT one of them?",
          options: [
            { id: "a", text: "Compensation" },
            { id: "b", text: "Market share" },
            { id: "c", text: "Work-life effectiveness" },
            { id: "d", text: "Recognition" }
          ],
          correctOptionId: "b",
          explanation: "The five elements of total rewards are Compensation, Benefits, Work-life effectiveness, Recognition, and Development opportunities. Market share is a business performance metric, not a component of employee rewards."
        }
      ]
    }
  ],
};
