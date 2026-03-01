import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:\My Drive\15_E-BOOKS\file008489.epub
// Author: Kaiser Fung  |  Subject: Statistics / Data Science

export const NumbersRuleYourWorldTheHiddenInfluenceOfPrModule: LearningModule = {
  id: "numbers-rule-your-world-the-hidden-influence-of-pr",
  title: "Numbers Rule Your World: The Hidden Influence of Probability and Statistics on Everything You Do",
  description:
    "Kaiser Fung demonstrates that statistical thinking is not abstract mathematics but a practical skill shaping everyday life — from how theme parks manage queues and how highway engineers control traffic flow, to how insurers set premiums, how drug regulators evaluate safety, and how investigators detect rare events and cheating. Through paired case studies, Fung shows that properly applied statistics improve decisions and save lives, while statistical illiteracy leads to waste, injustice, and harm.",
  subject: "Mathematics",
  tags: ["epub-derived", "curriculum", "interactive", "statistics", "probability", "data-science", "decision-making"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  learningObjectives: [
    "Explain how averaging and queuing theory improve wait times in service systems",
    "Distinguish between Type I and Type II errors and their real-world consequences",
    "Describe how statistical models underpin insurance, standardised testing, and risk pooling",
    "Analyse the concept of asymmetric error costs and how they shape testing policies",
    "Evaluate how probability theory applies to rare events, jackpots, and crash investigations",
    "Apply critical statistical thinking to real-world decision-making scenarios",
  ],
  lessons: [

    /* ─────────────────────────────────────────────────
       L01  Fast Passes and Slow Merges: Averaging and Queuing
    ───────────────────────────────────────────────── */
    {
      id: "nrw-l01",
      title: "Fast Passes and Slow Merges: The Power of Averaging",
      type: "video",
      duration: 12,
      objectives: [
        "Explain how queuing theory reduces perceived and actual wait times",
        "Describe the statistical principle behind Disney's FastPass system",
        "Apply averaging concepts to traffic engineering and highway merging",
      ],
      chunks: [
        {
          id: "nrw-l01-c1",
          title: "Disney's Statistical Magic: The FastPass System",
          content:
            "Fung opens with a deceptively simple question: why does Disney's FastPass system work? At first glance, it appears to be a magic trick — guests get shorter wait times without Disney adding rides or reducing attendance. The key is statistical reasoning about queue management. Without FastPass, guests arrive at popular attractions randomly, creating period bursts of demand that exceed ride capacity (resulting in long queues) separated by lulls when capacity goes underused. FastPass transforms this random arrival pattern into a managed one by spreading demand more evenly across time. Guests with FastPass tickets return during assigned windows, converting unpredictable demand into predictable, scheduled flows. The statistical insight is profound: when arrival variability decreases, average wait time decreases dramatically — even though the same number of people ride the same rides. Disney is not creating capacity; it is reducing the variance that causes bottlenecks. This is a practical application of queuing theory, a branch of mathematics that studies how wait times arise from the interaction between arrival rates, service rates, and variability.",
        },
        {
          id: "nrw-l01-c2",
          title: "Highway Merging: Why Zipper Merges Beat Early Merges",
          content:
            "Fung pairs the Disney example with a seemingly unrelated case: highway traffic merging during construction zone lane closures. Conventional wisdom says drivers should merge early — as soon as they see the 'lane closed ahead' sign — to be polite and avoid cutting in line. But traffic engineers know that early merging is statistically inferior to late or 'zipper' merging. When drivers merge early, they compress all traffic into a single lane far before the bottleneck, creating a long queue of stopped cars while the closing lane sits empty. Zipper merging — using both lanes until the point of closure and then alternating cars — utilises available road capacity more fully and reduces the total length of congestion by up to 40 percent. The statistical principle is the same as FastPass: reducing variability in spacing between vehicles and utilising available capacity more evenly produces dramatically better outcomes for everyone. Both cases demonstrate that statistical thinking often contradicts common intuition, and that the intuitive approach — 'merge early to be nice' — can produce worse results for the very people it intends to help.",
        },
        {
          id: "nrw-l01-c3",
          title: "The General Principle: Variance Is the Enemy",
          content:
            "Fung extracts a general principle from these paired examples: in any system where demand must be matched to capacity, variance — unpredictable fluctuation — is the enemy of efficiency. Hospitals reduce emergency room wait times not by adding doctors (expensive) but by smoothing elective surgery schedules to reduce variability in post-operative bed demand. Call centres reduce hold times not by hiring more agents but by offering callback systems that convert variable arrival patterns into managed queues. Supermarkets reduce checkout congestion by implementing single serpentine lines rather than multiple parallel lines — the single line has the same average wait time but dramatically lower variance, meaning fewer people experience extremely long waits. The insight extends beyond physical queuing: any decision-making process that involves matching variable supply to variable demand — inventory management, staffing, network bandwidth allocation — benefits from the same statistical logic. Reducing variance is often cheaper, faster, and more effective than increasing capacity. This is one of the most powerful and underappreciated findings of applied statistics.",
        },
      ],
      flashcards: [
        {
          id: "nrw-l01-f1",
          front: "Queuing theory",
          back: "A branch of mathematics studying how wait times arise from the interaction between arrival rates, service rates, and variability. Reducing arrival variability can dramatically cut wait times without adding capacity.",
        },
        {
          id: "nrw-l01-f2",
          front: "Disney FastPass principle",
          back: "Converts random, variable demand into managed, scheduled arrivals — reducing variability and therefore wait times, without adding rides or reducing attendance. Same capacity, less variance, shorter queues.",
        },
        {
          id: "nrw-l01-f3",
          front: "Zipper merge advantage",
          back: "Using both lanes until the merge point and alternating cars utilises available road capacity more fully, reducing congestion length by up to 40% compared to early merging.",
        },
        {
          id: "nrw-l01-f4",
          front: "Variance as the enemy of efficiency",
          back: "In any system matching demand to capacity, unpredictable fluctuation is the primary source of inefficiency. Reducing variance is often cheaper and more effective than increasing capacity.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L02  Statistical Modelling and Risk Pooling
    ───────────────────────────────────────────────── */
    {
      id: "nrw-l02",
      title: "Bagged Spinach and Bad Scores: Models and Risk Pools",
      type: "video",
      duration: 12,
      objectives: [
        "Explain how statistical models detect contamination and predict risk",
        "Describe the concept of risk pooling and its application in insurance",
        "Analyse the trade-offs in standardised testing through an item-bank lens",
      ],
      chunks: [
        {
          id: "nrw-l02-c1",
          title: "Bagged Spinach: Statistical Models for Food Safety",
          content:
            "Fung examines the 2006 E. coli outbreak traced to bagged spinach, using it to illustrate how statistical modelling operates in food safety. When contamination strikes, investigators face a needle-in-a-haystack problem: millions of servings of thousands of products across countless supply chains. Statistical methods — outbreak cluster detection, epidemiological modelling, and Bayesian inference — allow investigators to narrow the field rapidly. The CDC's PulseNet system uses DNA fingerprinting of bacteria combined with statistical pattern matching to connect geographically dispersed cases to a single source. The statistical challenge is distinguishing a genuine cluster from random fluctuation: in any given week, some regions will have more food-poisoning cases than average simply by chance. The model must estimate the probability that the observed pattern is too extreme to be explained by random variation — a process called hypothesis testing. A p-value below a threshold (typically 0.05) triggers an investigation. Fung emphasises that the model does not prove causation but identifies where to look — guiding resource allocation so investigators focus on the most probable sources.",
        },
        {
          id: "nrw-l02-c2",
          title: "Risk Pooling: How Insurance Actually Works",
          content:
            "Fung explains the statistical foundation of insurance through the concept of risk pooling. Individual events — a house fire, a car accident, a serious illness — are unpredictable for any specific person. But the aggregate rate of these events across large populations is remarkably stable and predictable. An insurance company cannot predict which of its million homeowner policyholders will experience a fire this year, but it can predict with high confidence that approximately 3,500 will — and price premiums accordingly. This is the law of large numbers in action: as sample size increases, the observed rate converges on the true underlying probability. Risk pooling works because individual risks are largely independent — my house fire does not cause yours. By pooling many independent risks, the insurer converts each individual's unpredictable catastrophe into a collective predictable cost. The mathematical elegance is that the pooled fund is always smaller than the sum of worst-case outcomes, creating an economic surplus that covers administrative costs and profit while still leaving policyholders better off than self-insuring.",
        },
        {
          id: "nrw-l02-c3",
          title: "Item Banks and Standardised Testing",
          content:
            "Fung explores standardised testing as another application of statistical modelling. Tests like the SAT, GRE, and state achievement exams maintain large 'item banks' — databases of thousands of pre-calibrated questions, each with known statistical properties: difficulty level, discrimination power (how well the item distinguishes high-ability from low-ability test-takers), and susceptibility to guessing. This calibration process, called item response theory (IRT), allows test designers to create multiple test forms that differ in their specific questions but measure the same underlying ability with comparable precision. This is why two students taking different GRE forms on different days can receive directly comparable scores — the statistical model adjusts for differences in question difficulty. Fung uses this example to illustrate a broader point: well-designed statistical models create fairness and comparability that would be impossible through intuition alone. Without IRT, standardised testing would be profoundly unfair — students taking harder forms would receive lower scores through no fault of their own.",
        },
      ],
      flashcards: [
        {
          id: "nrw-l02-f1",
          front: "Hypothesis testing in outbreak detection",
          back: "Estimating the probability that an observed disease cluster is too extreme to be random chance. A low p-value (< 0.05) triggers investigation — the model guides resource allocation, not proof of causation.",
        },
        {
          id: "nrw-l02-f2",
          front: "Law of large numbers (insurance application)",
          back: "As sample size increases, the observed event rate converges on the true probability. Insurers cannot predict individual events but reliably predict aggregate rates across large populations.",
        },
        {
          id: "nrw-l02-f3",
          front: "Risk pooling",
          back: "Combining many independent individual risks into a collective pool. The pooled cost is predictable and smaller than the sum of worst cases — making insurance economically rational for all participants.",
        },
        {
          id: "nrw-l02-f4",
          front: "Item response theory (IRT)",
          back: "Statistical framework calibrating test questions by difficulty, discrimination, and guessing susceptibility. Enables fair comparison across different test forms by adjusting for question-level differences.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L03  Asymmetric Errors and Rare Events
    ───────────────────────────────────────────────── */
    {
      id: "nrw-l03",
      title: "Timid Testers and Magic Lassos: Errors and Rare Events",
      type: "video",
      duration: 13,
      objectives: [
        "Define Type I and Type II errors and their asymmetric costs",
        "Explain how drug testing, doping detection, and safety testing manage error trade-offs",
        "Apply probability reasoning to rare events: crashes, jackpots, and coincidences",
      ],
      chunks: [
        {
          id: "nrw-l03-c1",
          title: "Type I and Type II Errors: The Fundamental Trade-Off",
          content:
            "Fung introduces one of statistics' most important concepts: the distinction between Type I errors (false positives — detecting something that is not there) and Type II errors (false negatives — failing to detect something that is there). Every decision-making system that uses statistical evidence faces an unavoidable trade-off between these two types of error. Making a test more sensitive (reducing false negatives) inevitably increases false positives, and vice versa. The critical question is which type of error is more costly — and the answer depends entirely on context. In cancer screening, a false negative (telling a cancer patient they are healthy) is potentially fatal, so screening tests are deliberately made highly sensitive, accepting a high false-positive rate. False positives cause anxiety and unnecessary follow-up procedures, but they do not kill people. In criminal justice, the reverse priority applies: convicting an innocent person (false positive) is considered worse than acquitting a guilty one (false negative), so the standard of proof is set very high ('beyond reasonable doubt'). Fung argues that understanding this trade-off is essential statistical literacy.",
        },
        {
          id: "nrw-l03-c2",
          title: "Drug Testing, Doping, and the Cost of Getting It Wrong",
          content:
            "Fung pairs two case studies to illustrate asymmetric error costs. First, pharmaceutical drug testing: the FDA requires extensive clinical trials before approving new drugs. The agency is inherently 'timid' — biased toward Type II errors (failing to approve effective drugs) rather than Type I errors (approving harmful drugs). This asymmetry exists because an approved harmful drug can injure millions, while an unapproved effective drug harms a smaller (though still significant) group who might have benefited. Second, athletic doping tests: anti-doping agencies face the opposite pressure. A false positive — falsely accusing a clean athlete of doping — destroys an innocent person's career and reputation. So doping tests are set at extremely high specificity thresholds, accepting a higher false-negative rate (letting some dopers escape detection). In both cases, the statistical threshold is not determined by mathematics alone but by a value judgement about which error is more harmful — and reasonable people can disagree. Fung emphasises that pretending the trade-off does not exist is worse than making a transparent choice.",
        },
        {
          id: "nrw-l03-c3",
          title: "Jet Crashes and Jackpots: Reasoning About Rare Events",
          content:
            "Fung's final paired case study examines how we reason — and reason poorly — about rare events. Aviation crash investigations illustrate good statistical reasoning: the aviation industry treats every incident as data, employing fault tree analysis and Bayesian updating to identify systemic risks and design countermeasures. The result is an extraordinary safety record — commercial aviation fatality rates have declined by orders of magnitude over decades. Lottery jackpots illustrate poor statistical reasoning: millions of people willingly pay for tickets with negative expected value because they confuse the possibility of winning with its probability. The chance of winning a major lottery is roughly 1 in 300 million — comparable to being struck by lightning twice — yet the vividness of imagined wealth and the availability of jackpot stories in media make the tiny probability feel far larger than it is. Fung connects these to the broader phenomenon of probability neglect: humans are poor at intuitively grasping very small or very large numbers, and our decisions about rare events are governed more by emotion and narrative than by calculation. Statistical literacy means learning to override these intuitions with disciplined probabilistic reasoning.",
        },
      ],
      flashcards: [
        {
          id: "nrw-l03-f1",
          front: "Type I error (false positive)",
          back: "Detecting something that is not there — e.g., diagnosing disease in a healthy person, convicting an innocent defendant, flagging a clean athlete as a doper.",
        },
        {
          id: "nrw-l03-f2",
          front: "Type II error (false negative)",
          back: "Failing to detect something that is there — e.g., telling a cancer patient they are healthy, acquitting a guilty defendant, missing a contaminated food batch.",
        },
        {
          id: "nrw-l03-f3",
          front: "Asymmetric error costs",
          back: "The two error types have different consequences depending on context. In cancer screening, false negatives (missed cancers) are worse. In criminal justice, false positives (wrongful conviction) are worse. The threshold reflects a value judgement.",
        },
        {
          id: "nrw-l03-f4",
          front: "Probability neglect",
          back: "The human tendency to reason about rare events based on emotion and narrative rather than calculation — lottery vivid images override the 1-in-300-million odds. Statistical literacy means overriding these intuitions.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L04  Checkpoint Quiz
    ───────────────────────────────────────────────── */
    {
      id: "nrw-l04",
      title: "Numbers Rule Your World: Checkpoint Quiz",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of queuing theory, risk pooling, and error trade-offs"],
      questions: [
        {
          id: "nrw-l04-q1",
          text: "Why does Disney's FastPass reduce wait times without adding ride capacity?",
          options: [
            { id: "a", text: "Because FastPass reduces the number of people in the park" },
            { id: "b", text: "Because it converts random, variable arrivals into scheduled, managed flows — reducing the variability that causes bottlenecks" },
            { id: "c", text: "Because FastPass makes rides go faster" },
            { id: "d", text: "Because FastPass tickets are expensive so fewer people buy them" },
          ],
          correctOptionId: "b",
          explanation:
            "FastPass works by reducing arrival variability. When demand is spread more evenly across time, the same capacity handles the same number of guests with shorter average waits — a practical application of queuing theory.",
        },
        {
          id: "nrw-l04-q2",
          text: "What statistical principle allows insurers to convert unpredictable individual catastrophes into predictable collective costs?",
          options: [
            { id: "a", text: "The central limit theorem" },
            { id: "b", text: "The law of large numbers — as pool size increases, the observed rate converges on the true probability, making aggregate costs predictable" },
            { id: "c", text: "Bayes' theorem" },
            { id: "d", text: "The gambler's fallacy" },
          ],
          correctOptionId: "b",
          explanation:
            "Risk pooling relies on the law of large numbers: individual events are unpredictable, but aggregate rates across large populations converge on stable, predictable values — enabling accurate premium pricing.",
        },
        {
          id: "nrw-l04-q3",
          text: "Why is the FDA inherently biased toward Type II errors (not approving effective drugs)?",
          options: [
            { id: "a", text: "Because Type II errors are less embarrassing for the agency" },
            { id: "b", text: "Because an approved harmful drug can injure millions, while an unapproved effective drug harms a smaller group — making the cost of Type I errors (approving bad drugs) higher" },
            { id: "c", text: "Because drug companies prefer slower approval" },
            { id: "d", text: "Because Type II errors generate more revenue" },
          ],
          correctOptionId: "b",
          explanation:
            "The asymmetric cost drives the bias: a harmful approved drug reaches millions; an effective but unapproved drug harms fewer people. The threshold reflects a value judgement about which harm is worse.",
        },
        {
          id: "nrw-l04-q4",
          text: "What general principle does Fung extract from both the FastPass and zipper-merge examples?",
          options: [
            { id: "a", text: "Technology always solves congestion problems" },
            { id: "b", text: "Variance is the enemy of efficiency: reducing variability in demand/flow is often cheaper and more effective than adding capacity" },
            { id: "c", text: "Queues are always necessary for fairness" },
            { id: "d", text: "Early action is always better than late action" },
          ],
          correctOptionId: "b",
          explanation:
            "Both cases demonstrate the same principle: reducing variability (in arrival patterns or vehicle spacing) produces dramatic efficiency gains without adding capacity. This insight applies broadly to operations management.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L05  Final Assessment
    ───────────────────────────────────────────────── */
    {
      id: "nrw-l05",
      title: "Numbers Rule Your World: Comprehensive Assessment",
      type: "quiz",
      duration: 9,
      objectives: ["Evaluate mastery of applied statistics, error theory, and probabilistic reasoning"],
      questions: [
        {
          id: "nrw-l05-q1",
          text: "A hospital wants to reduce ER wait times. Based on Fung's analysis, what approach is most likely to be effective?",
          options: [
            { id: "a", text: "Hiring twice as many doctors" },
            { id: "b", text: "Smoothing elective surgery schedules to reduce variability in post-operative bed demand, freeing capacity during peaks" },
            { id: "c", text: "Closing the ER during off-peak hours" },
            { id: "d", text: "Eliminating all scheduled appointments" },
          ],
          correctOptionId: "b",
          explanation:
            "Fung's general principle: reducing variance is cheaper and more effective than adding capacity. By smoothing elective surgery schedules, the hospital reduces downstream demand variability, freeing ER beds during peak periods.",
        },
        {
          id: "nrw-l05-q2",
          text: "A cancer screening test is made more sensitive (catches more true cancers). What is the inevitable statistical trade-off?",
          options: [
            { id: "a", text: "The test becomes cheaper" },
            { id: "b", text: "More false positives — healthy people incorrectly flagged as positive, causing anxiety and unnecessary follow-up procedures" },
            { id: "c", text: "Fewer people get screened" },
            { id: "d", text: "The test becomes more specific" },
          ],
          correctOptionId: "b",
          explanation:
            "Increasing sensitivity (catching more true positives) inevitably increases false positives. This is the fundamental Type I/Type II trade-off. In cancer screening, the trade-off is accepted because a missed cancer (false negative) is potentially fatal.",
        },
        {
          id: "nrw-l05-q3",
          text: "Why does Fung argue that item response theory (IRT) creates fairness in standardised testing?",
          options: [
            { id: "a", text: "Because IRT ensures all students answer the same questions" },
            { id: "b", text: "Because IRT calibrates each question's difficulty and adjusts scores accordingly, ensuring students taking different forms receive comparable scores" },
            { id: "c", text: "Because IRT eliminates all questions that students find difficult" },
            { id: "d", text: "Because IRT allows students to choose their questions" },
          ],
          correctOptionId: "b",
          explanation:
            "Without IRT, students taking harder test forms would receive lower scores unfairly. IRT's statistical model calibrates questions individually and adjusts, ensuring comparability across forms — a fairness impossible through intuition alone.",
        },
        {
          id: "nrw-l05-q4",
          text: "What does 'probability neglect' mean, and how does it manifest in lottery ticket purchases?",
          options: [
            { id: "a", text: "People ignore probabilities entirely, reasoning about rare events based on emotion and vivid imagination rather than calculation — buying tickets with negative expected value because imagined wealth feels likely" },
            { id: "b", text: "People buy lottery tickets as a rational investment" },
            { id: "c", text: "People always overestimate probabilities of rare events" },
            { id: "d", text: "Probability neglect only affects professional gamblers" },
          ],
          correctOptionId: "a",
          explanation:
            "Probability neglect is the human tendency to substitute emotional vividness for probabilistic reasoning. The chance of winning (~1 in 300 million) is cognitively replaced by the vivid image of wealth — statistical literacy means overriding this intuition.",
        },
        {
          id: "nrw-l05-q5",
          text: "Why does the aviation industry achieve extraordinary safety records, according to Fung's statistical analysis?",
          options: [
            { id: "a", text: "Because planes are simpler than other machines" },
            { id: "b", text: "Because the industry treats every incident as data, using fault tree analysis and Bayesian updating to identify systemic risks and design countermeasures — institutionalised statistical reasoning" },
            { id: "c", text: "Because flying is inherently safer than driving" },
            { id: "d", text: "Because pilots never make mistakes" },
          ],
          correctOptionId: "b",
          explanation:
            "Aviation exemplifies good statistical reasoning about rare events: every incident enters a data system, is analysed through fault trees and Bayesian methods, and produces systemic changes. This disciplined approach has reduced fatality rates by orders of magnitude.",
        },
      ],
    },
  ],
};
