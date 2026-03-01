import type { LearningModule } from "@/lib/modules/types";

export const LawStudies101Module: LearningModule = {
  id: "law-studies-101",
  title: "Introduction to Law",
  description:
    "Explore the foundations of legal systems, constitutional principles, criminal and civil law, contract and tort doctrine, and legal reasoning methods used to analyze cases and resolve disputes.",
  subject: "Law",
  tags: ["core", "curriculum", "interactive", "legal", "pre-law"],
  minAge: 16,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Distinguish between common law, civil law, statutory law, and constitutional law systems",
    "Explain the structure of the court system including trial, appellate, and supreme court levels",
    "Identify fundamental constitutional rights and the role of judicial review",
    "Analyze the elements of a crime including actus reus, mens rea, and available defenses",
    "Apply the elements of a valid contract and distinguish breach remedies from tort remedies",
    "Evaluate legal problems using the IRAC method (Issue, Rule, Application, Conclusion)",
    "Interpret the role of precedent and stare decisis in shaping legal outcomes"
  ],
  lessons: [
    /* ── L01  Sources and Types of Law  (video) ── */
    {
      id: "law-studies-101-l01",
      title: "Sources and Types of Law",
      type: "video",
      duration: 12,
      chunks: [
        { id: "law-studies-101-l01-c1", title: "Common Law vs Civil Law Systems", content: "The world's legal systems fall into two main families. Common law, used in the United States, United Kingdom, Canada, and Australia, relies heavily on judicial precedent — judges' decisions in past cases bind future courts through the doctrine of stare decisis. Civil law, used across continental Europe, Latin America, and much of Asia, is based on comprehensive legal codes drafted by legislatures. In civil law systems, judges apply the code rather than building law case by case. Some jurisdictions, like Louisiana and Quebec, blend both traditions. Understanding which system governs a jurisdiction is essential before analyzing any legal question." },
        { id: "law-studies-101-l01-c2", title: "Statutory, Constitutional, and Case Law", content: "Legal rules come from several sources arranged in a hierarchy. Constitutional law sits at the top — the U.S. Constitution is the supreme law of the land, and any statute that conflicts with it can be struck down. Below that, statutory law consists of laws passed by legislatures (Congress, state legislatures, or parliaments). Administrative law comprises regulations created by government agencies like the EPA or SEC under authority delegated by the legislature. Case law (also called judge-made law) emerges from court opinions interpreting statutes and the Constitution. When a higher court issues a ruling, lower courts within that jurisdiction must follow it." },
        { id: "law-studies-101-l01-c3", title: "Jurisdiction and the Rule of Law", content: "Jurisdiction determines which court has authority to hear a case. Subject-matter jurisdiction asks whether the court can hear that type of case — federal courts handle federal questions and diversity cases, while state courts handle most other matters. Personal jurisdiction asks whether the court has authority over the parties involved. The rule of law is a foundational principle meaning that no person, including government officials, is above the law. Laws must be publicly known, equally enforced, and independently adjudicated. Without these principles, legal systems cannot function fairly or predictably." }
      ],
      flashcards: [
        { id: "law-studies-101-l01-f1", front: "Legal system where judges follow precedent from prior court decisions", back: "Common law system (used in the US, UK, Canada, Australia)" },
        { id: "law-studies-101-l01-f2", front: "Legal system built on comprehensive written codes rather than judicial precedent", back: "Civil law system (used in France, Germany, Japan, and most of continental Europe)" },
        { id: "law-studies-101-l01-f3", front: "The doctrine that courts must follow decisions of higher courts in the same jurisdiction", back: "Stare decisis (Latin: 'to stand by things decided')" },
        { id: "law-studies-101-l01-f4", front: "The supreme law of the land in the United States, which overrides all conflicting statutes", back: "The U.S. Constitution" }
      ]
    },

    /* ── L02  The Court System and Legal Process  (interactive) ── */
    {
      id: "law-studies-101-l02",
      title: "The Court System and Legal Process",
      type: "interactive",
      duration: 14,
      chunks: [
        { id: "law-studies-101-l02-c1", title: "Trial Courts vs Appellate Courts", content: "Trial courts (courts of first instance) are where cases begin. They hear evidence, examine witnesses, and a judge or jury determines the facts. In the federal system, U.S. District Courts serve as trial courts. Appellate courts review trial court decisions for legal errors — they do not re-hear evidence or call witnesses. The U.S. Courts of Appeals (13 circuits) handle federal appeals. The U.S. Supreme Court sits at the top, hearing roughly 70–80 cases per year through a discretionary process called certiorari. Most state systems mirror this three-tier structure with trial courts, intermediate appellate courts, and a state supreme court." },
        { id: "law-studies-101-l02-c2", title: "Federal vs State Court Systems", content: "The United States operates a dual court system. Federal courts hear cases involving federal statutes, constitutional questions, treaties, and disputes between citizens of different states (diversity jurisdiction) where the amount exceeds $75,000. State courts handle the vast majority of cases — about 95% of all litigation — including most criminal cases, family law, contract disputes, and personal injury claims. Some cases can be filed in either system (concurrent jurisdiction). A defendant sued in state court may sometimes 'remove' the case to federal court if federal jurisdiction exists. Each system has its own procedural rules." },
        { id: "law-studies-101-l02-c3", title: "Civil vs Criminal Procedure", content: "Civil cases involve disputes between private parties (individuals, businesses, or government agencies acting as a party). The plaintiff files a complaint, the defendant answers, and the case proceeds through discovery, motions, trial, and potentially appeal. The burden of proof is 'preponderance of the evidence' — more likely than not. Criminal cases are brought by the government (prosecution) against a defendant accused of violating criminal statutes. The burden of proof is much higher: 'beyond a reasonable doubt.' Criminal defendants have constitutional protections including the right to counsel, the right to remain silent, and protection against double jeopardy." }
      ],
      flashcards: [
        { id: "law-studies-101-l02-f1", front: "Court where a case is first heard, evidence is presented, and facts are determined", back: "Trial court (e.g., U.S. District Court at the federal level)" },
        { id: "law-studies-101-l02-f2", front: "The standard of proof required to win a civil case", back: "Preponderance of the evidence (more likely than not, >50%)" },
        { id: "law-studies-101-l02-f3", front: "The standard of proof required to convict in a criminal case", back: "Beyond a reasonable doubt (the highest standard of proof)" },
        { id: "law-studies-101-l02-f4", front: "The process by which the U.S. Supreme Court selects cases to hear", back: "Writ of certiorari (cert) — the Court grants cert to about 70–80 cases per year" }
      ],
      interactiveActivities: [
        { id: "law-studies-101-l02-a1", type: "sorting_buckets", title: "Federal vs State Court", description: "Sort these cases into Federal Court or State Court: Constitutional rights violation (Federal), Dispute between citizens of different states over $75,000 (Federal), Divorce proceeding (State), Robbery charge under state penal code (State), Patent infringement (Federal), Car accident personal injury suit (State), Violation of federal securities law (Federal), Landlord-tenant dispute (State)." }
      ]
    },

    /* ── L03  Legal Foundations Checkpoint  (quiz) ── */
    {
      id: "law-studies-101-l03",
      title: "Legal Foundations Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: { totalQuestions: 4, bloomProfile: { remember: 2, understand: 1, apply: 1 } },
      questions: [
        { id: "law-studies-101-l03-q1", text: "Which legal system relies primarily on judicial precedent and the doctrine of stare decisis?", skillId: "law-studies-101-skill-core", options: [{ id: "a", text: "Common law" }, { id: "b", text: "Civil law" }, { id: "c", text: "Administrative law" }, { id: "d", text: "Canon law" }], correctOptionId: "a", explanation: "Common law systems (US, UK, Canada, Australia) build legal rules through judicial decisions. The doctrine of stare decisis requires courts to follow precedent set by higher courts in the same jurisdiction." },
        { id: "law-studies-101-l03-q2", text: "What is the burden of proof in a criminal case?", skillId: "law-studies-101-skill-core", options: [{ id: "a", text: "Beyond a reasonable doubt" }, { id: "b", text: "Preponderance of the evidence" }, { id: "c", text: "Clear and convincing evidence" }, { id: "d", text: "Probable cause" }], correctOptionId: "a", explanation: "Criminal cases require proof 'beyond a reasonable doubt' — the highest standard — because a conviction can result in loss of liberty or life. Civil cases use the lower 'preponderance' standard." },
        { id: "law-studies-101-l03-q3", text: "An appellate court's primary function is to:", skillId: "law-studies-101-skill-core", options: [{ id: "a", text: "Review the trial court's application of law for errors" }, { id: "b", text: "Hear new witness testimony" }, { id: "c", text: "Empanel a jury to retry the case" }, { id: "d", text: "Negotiate a plea bargain" }], correctOptionId: "a", explanation: "Appellate courts review whether the trial court correctly applied the law. They do not hear new evidence, call witnesses, or use juries — they review the existing record and legal arguments." },
        { id: "law-studies-101-l03-q4", text: "A patent infringement case would most likely be filed in:", skillId: "law-studies-101-skill-core", options: [{ id: "a", text: "Federal court, because patent law is federal law" }, { id: "b", text: "State court, because it involves a private dispute" }, { id: "c", text: "Small claims court, because no jury is needed" }, { id: "d", text: "Family court, because it involves property" }], correctOptionId: "a", explanation: "Patent law is exclusively federal under Article I, Section 8 of the Constitution. Federal courts have exclusive subject-matter jurisdiction over patent cases, regardless of the amount in controversy." }
      ],
      flashcards: [
        { id: "law-studies-101-l03-f1", front: "Approximately what percentage of all US litigation is handled by state courts?", back: "About 95% — state courts handle the vast majority of legal disputes" },
        { id: "law-studies-101-l03-f2", front: "Minimum amount in controversy for federal diversity jurisdiction", back: "$75,000 (plus the parties must be citizens of different states)" },
        { id: "law-studies-101-l03-f3", front: "The principle that no person — including government officials — is above the law", back: "The rule of law" },
        { id: "law-studies-101-l03-f4", front: "The three-tier structure of most US court systems", back: "Trial court → Intermediate appellate court → Supreme court" }
      ]
    },

    /* ── L04  Constitutional Law and Rights  (video) ── */
    {
      id: "law-studies-101-l04",
      title: "Constitutional Law and Rights",
      type: "video",
      duration: 13,
      chunks: [
        { id: "law-studies-101-l04-c1", title: "The Bill of Rights and Fundamental Freedoms", content: "The Bill of Rights comprises the first ten amendments to the U.S. Constitution, ratified in 1791. The First Amendment protects freedom of speech, religion, press, assembly, and petition. The Fourth Amendment guards against unreasonable searches and seizures, requiring probable cause for warrants. The Fifth Amendment provides the right against self-incrimination, protection from double jeopardy, and guarantees due process of law. The Sixth Amendment ensures the right to a speedy and public trial, an impartial jury, and the assistance of counsel. These rights originally limited only the federal government, but through the Fourteenth Amendment's incorporation doctrine, most now apply to state governments as well." },
        { id: "law-studies-101-l04-c2", title: "Due Process and Equal Protection", content: "The Fourteenth Amendment (1868) contains two critical clauses. The Due Process Clause prohibits states from depriving any person of life, liberty, or property without due process of law. 'Procedural' due process requires fair procedures (notice and a hearing) before the government acts. 'Substantive' due process protects fundamental rights — like privacy, marriage, and parenting — from unreasonable government interference, even if fair procedures are followed. The Equal Protection Clause requires states to treat similarly situated people equally under the law. Courts apply different levels of scrutiny: strict scrutiny for race and national origin, intermediate scrutiny for gender, and rational basis review for most economic and social legislation." },
        { id: "law-studies-101-l04-c3", title: "Judicial Review and Separation of Powers", content: "Judicial review — the power of courts to declare laws unconstitutional — was established in Marbury v. Madison (1803). Chief Justice John Marshall held that the Constitution is supreme, and it is the duty of the judiciary to say what the law is. This power is not explicitly stated in the Constitution but has become a cornerstone of American governance. Separation of powers divides government authority among three branches: the legislature makes laws, the executive enforces them, and the judiciary interprets them. Each branch checks the others — the president can veto legislation, Congress can override vetoes and impeach officials, and courts can invalidate both statutes and executive actions." }
      ],
      flashcards: [
        { id: "law-studies-101-l04-f1", front: "The landmark 1803 case that established judicial review in the United States", back: "Marbury v. Madison — Chief Justice Marshall declared the judiciary has the power to strike down unconstitutional laws" },
        { id: "law-studies-101-l04-f2", front: "Amendment that protects against unreasonable searches and seizures", back: "The Fourth Amendment (requires probable cause for warrants)" },
        { id: "law-studies-101-l04-f3", front: "The highest level of judicial scrutiny applied to government classifications by race", back: "Strict scrutiny — the government must show a compelling interest and narrowly tailored means" },
        { id: "law-studies-101-l04-f4", front: "Two types of due process protected by the Fifth and Fourteenth Amendments", back: "Procedural due process (fair procedures) and substantive due process (protection of fundamental rights)" }
      ]
    },

    /* ── L05  Criminal Law Fundamentals  (interactive) ── */
    {
      id: "law-studies-101-l05",
      title: "Criminal Law Fundamentals",
      type: "interactive",
      duration: 14,
      chunks: [
        { id: "law-studies-101-l05-c1", title: "Elements of a Crime: Actus Reus and Mens Rea", content: "Every crime requires two fundamental elements. Actus reus (the 'guilty act') is the voluntary physical act or unlawful omission that constitutes the crime — for example, pulling a trigger, taking someone's property, or driving while intoxicated. Mens rea (the 'guilty mind') is the mental state required. The Model Penal Code identifies four levels: purposely (conscious objective to cause a result), knowingly (awareness that conduct will cause a result), recklessly (conscious disregard of a substantial risk), and negligently (failure to perceive a substantial risk). First-degree murder typically requires purposeful intent, while involuntary manslaughter may require only criminal negligence." },
        { id: "law-studies-101-l05-c2", title: "Categories of Crime and Inchoate Offenses", content: "Crimes are classified by severity. Felonies (murder, robbery, arson) carry penalties of more than one year in prison. Misdemeanors (petty theft, simple assault, trespassing) carry sentences of up to one year. Infractions (traffic violations, jaywalking) typically result only in fines. Inchoate (incomplete) offenses criminalize conduct leading toward a crime: attempt requires a substantial step toward committing a crime with the intent to complete it; conspiracy is an agreement between two or more people to commit a crime plus an overt act in furtherance; solicitation is encouraging or requesting another person to commit a crime. These offenses are punishable even if the target crime is never completed." },
        { id: "law-studies-101-l05-c3", title: "Defenses in Criminal Law", content: "Criminal defendants may raise several categories of defense. Justification defenses argue the conduct was not wrongful: self-defense permits reasonable force to protect oneself from imminent harm; necessity justifies unlawful action to prevent a greater harm. Excuse defenses argue the defendant is not blameworthy: insanity (under the M'Naghten rule, the defendant did not know the nature of the act or that it was wrong); duress (the defendant was coerced by threat of imminent serious harm); and infancy (children under a certain age lack criminal capacity). Procedural defenses include the statute of limitations, entrapment (government inducing someone to commit a crime they wouldn't otherwise commit), and constitutional violations like an unlawful search." }
      ],
      flashcards: [
        { id: "law-studies-101-l05-f1", front: "The voluntary physical act or omission that constitutes a crime", back: "Actus reus (Latin: 'guilty act')" },
        { id: "law-studies-101-l05-f2", front: "The four levels of mens rea under the Model Penal Code", back: "Purposely, knowingly, recklessly, negligently (in descending order of culpability)" },
        { id: "law-studies-101-l05-f3", front: "An agreement between two or more persons to commit a crime, plus an overt act", back: "Conspiracy (an inchoate offense)" },
        { id: "law-studies-101-l05-f4", front: "The insanity defense standard asking whether the defendant knew the act was wrong", back: "The M'Naghten rule (also spelled McNaughtan)" }
      ],
      interactiveActivities: [
        { id: "law-studies-101-l05-a1", type: "matching_pairs", title: "Mens Rea Matching", description: "Match the mens rea level to its definition: Purposely → conscious objective to cause a result, Knowingly → awareness that conduct will cause a result, Recklessly → conscious disregard of a substantial risk, Negligently → failure to perceive a substantial risk, Strict liability → no mental state required, General intent → intent to perform the act itself." }
      ]
    },

    /* ── L06  Constitutional & Criminal Law Checkpoint  (quiz) ── */
    {
      id: "law-studies-101-l06",
      title: "Constitutional & Criminal Law Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: { totalQuestions: 4, bloomProfile: { remember: 1, understand: 2, apply: 1 } },
      questions: [
        { id: "law-studies-101-l06-q1", text: "Which case established the power of judicial review — the authority of courts to declare laws unconstitutional?", skillId: "law-studies-101-skill-core", options: [{ id: "a", text: "Marbury v. Madison (1803)" }, { id: "b", text: "Brown v. Board of Education (1954)" }, { id: "c", text: "Miranda v. Arizona (1966)" }, { id: "d", text: "Roe v. Wade (1973)" }], correctOptionId: "a", explanation: "In Marbury v. Madison, Chief Justice John Marshall established that the Supreme Court has the power to review acts of Congress and declare them void if they conflict with the Constitution." },
        { id: "law-studies-101-l06-q2", text: "A defendant who consciously disregards a substantial and unjustifiable risk acts with which level of mens rea?", skillId: "law-studies-101-skill-core", options: [{ id: "a", text: "Recklessly" }, { id: "b", text: "Purposely" }, { id: "c", text: "Negligently" }, { id: "d", text: "Knowingly" }], correctOptionId: "a", explanation: "Recklessness under the Model Penal Code means the defendant was aware of a substantial risk but consciously chose to disregard it. This differs from negligence (unaware of the risk) and purposefulness (intended the result)." },
        { id: "law-studies-101-l06-q3", text: "The Equal Protection Clause of the Fourteenth Amendment requires government classifications based on race to survive:", skillId: "law-studies-101-skill-core", options: [{ id: "a", text: "Strict scrutiny — compelling interest and narrowly tailored means" }, { id: "b", text: "Rational basis review — any legitimate government interest" }, { id: "c", text: "Intermediate scrutiny — important government interest" }, { id: "d", text: "No scrutiny — racial classifications are always permitted" }], correctOptionId: "a", explanation: "Race is a suspect classification triggering strict scrutiny, the most demanding standard. The government must prove a compelling interest and that the classification is narrowly tailored to achieve it. Very few racial classifications survive this standard." },
        { id: "law-studies-101-l06-q4", text: "Which criminal defense argues that the defendant's conduct was not wrongful because it was necessary to prevent a greater harm?", skillId: "law-studies-101-skill-core", options: [{ id: "a", text: "Necessity (justification defense)" }, { id: "b", text: "Insanity (excuse defense)" }, { id: "c", text: "Entrapment (procedural defense)" }, { id: "d", text: "Statute of limitations (procedural defense)" }], correctOptionId: "a", explanation: "Necessity is a justification defense — the defendant admits to committing the act but argues it was the lesser evil. For example, breaking into a cabin during a blizzard to avoid freezing to death. The defendant must show there was no reasonable legal alternative." }
      ],
      flashcards: [
        { id: "law-studies-101-l06-f1", front: "The two essential elements required for every crime", back: "Actus reus (guilty act) and mens rea (guilty mind)" },
        { id: "law-studies-101-l06-f2", front: "Amendment that guarantees the right to counsel, a speedy trial, and an impartial jury", back: "The Sixth Amendment" },
        { id: "law-studies-101-l06-f3", front: "Three categories of criminal defense", back: "Justification (self-defense, necessity), Excuse (insanity, duress, infancy), Procedural (entrapment, statute of limitations)" },
        { id: "law-studies-101-l06-f4", front: "Three inchoate (incomplete) offenses", back: "Attempt, conspiracy, and solicitation" }
      ]
    },

    /* ── L07  Contract Law and Torts  (video) ── */
    {
      id: "law-studies-101-l07",
      title: "Contract Law and Torts",
      type: "video",
      duration: 14,
      chunks: [
        { id: "law-studies-101-l07-c1", title: "Elements of a Valid Contract", content: "A contract is a legally enforceable agreement. Formation requires four elements: (1) Offer — a clear, definite proposal by the offeror; (2) Acceptance — the offeree's unqualified agreement to the offer's terms (mirror image rule); (3) Consideration — each party must give something of legal value (a bargained-for exchange); and (4) Capacity — both parties must be legally competent (not minors, mentally incapacitated, or intoxicated). Some contracts must also satisfy the Statute of Frauds, which requires a signed writing for certain types of agreements — including sales of land, contracts that cannot be performed within one year, and sales of goods over $500 under the Uniform Commercial Code (UCC)." },
        { id: "law-studies-101-l07-c2", title: "Breach of Contract and Remedies", content: "A breach occurs when a party fails to perform their contractual obligations without a legal excuse. A material breach is a substantial failure that defeats the purpose of the contract, allowing the non-breaching party to cancel and sue for damages. A minor breach is a partial failure where the non-breaching party can sue for damages but must still perform. Remedies include: compensatory damages (money to put the plaintiff in the position they would have been in had the contract been performed), consequential damages (foreseeable losses caused by the breach), specific performance (court orders the breaching party to perform — typically for unique goods like real estate), and liquidated damages (a pre-agreed amount specified in the contract)." },
        { id: "law-studies-101-l07-c3", title: "Tort Law: Negligence and Strict Liability", content: "A tort is a civil wrong causing harm to another person, giving rise to a lawsuit for damages. The most common tort is negligence, which requires four elements: (1) Duty — the defendant owed a duty of care to the plaintiff; (2) Breach — the defendant's conduct fell below the standard of a reasonable person; (3) Causation — both actual cause ('but-for' test) and proximate cause (foreseeable harm); and (4) Damages — the plaintiff suffered actual harm. Strict liability imposes responsibility without proof of negligence or intent, typically in abnormally dangerous activities (e.g., using explosives) and products liability (manufacturers are strictly liable for defective products that injure consumers). Intentional torts — assault, battery, false imprisonment, defamation — require proof that the defendant acted with intent." }
      ],
      flashcards: [
        { id: "law-studies-101-l07-f1", front: "The four elements required to form a valid contract", back: "Offer, Acceptance, Consideration, and Capacity" },
        { id: "law-studies-101-l07-f2", front: "The four elements of a negligence claim", back: "Duty, Breach, Causation (actual + proximate), and Damages" },
        { id: "law-studies-101-l07-f3", front: "A remedy requiring the breaching party to actually perform the contract (common for unique goods)", back: "Specific performance" },
        { id: "law-studies-101-l07-f4", front: "Liability imposed without fault — often for abnormally dangerous activities or defective products", back: "Strict liability" }
      ]
    },

    /* ── L08  Legal Reasoning and Case Analysis  (interactive) ── */
    {
      id: "law-studies-101-l08",
      title: "Legal Reasoning and Case Analysis",
      type: "interactive",
      duration: 14,
      chunks: [
        { id: "law-studies-101-l08-c1", title: "The IRAC Method", content: "IRAC is the standard framework for analyzing legal problems, used in law school exams and professional practice. Issue: identify the legal question that needs to be resolved (e.g., 'Did the defendant commit battery?'). Rule: state the relevant legal rule or principle (e.g., 'Battery is the intentional harmful or offensive touching of another person without consent'). Application: apply the rule to the specific facts of the case, arguing both sides where possible. Conclusion: state the likely outcome based on the analysis. Strong IRAC analysis addresses counterarguments, distinguishes similar cases, and explains why the facts satisfy or fail each element of the rule. This structured approach ensures that legal analysis is thorough, logical, and persuasive." },
        { id: "law-studies-101-l08-c2", title: "Precedent, Stare Decisis, and Distinguishing Cases", content: "In common law systems, courts follow precedent — the principle that similar cases should be decided similarly. Binding precedent comes from higher courts in the same jurisdiction; lower courts must follow it. Persuasive precedent comes from courts in other jurisdictions or lower courts — it may influence but does not bind. Lawyers can argue that a precedent should not apply by 'distinguishing' the case — showing that the material facts are sufficiently different. In rare cases, courts may overrule prior precedent when it is clearly wrong or unworkable (e.g., Brown v. Board overruled Plessy v. Ferguson). The ratio decidendi is the legal reasoning that forms the binding part of a decision; obiter dicta are observations made 'by the way' that do not bind." },
        { id: "law-studies-101-l08-c3", title: "Statutory Interpretation", content: "When a statute is ambiguous, courts use several tools to determine its meaning. The plain meaning rule says courts should apply the ordinary meaning of the words. If ambiguity remains, courts look to legislative history — committee reports, floor debates, and prior drafts — to discern the legislature's intent. The rule of lenity requires that ambiguous criminal statutes be interpreted in favor of the defendant. Canons of construction provide additional guidance: expressio unius est exclusio alterius (expressing one thing excludes others); ejusdem generis (general words following a list are limited to items similar to those listed); and the absurdity doctrine (courts will not interpret a statute in a way that produces absurd results). Textualists focus on the statute's text; purposivists focus on the legislature's underlying purpose." }
      ],
      flashcards: [
        { id: "law-studies-101-l08-f1", front: "The four steps of the IRAC legal analysis framework", back: "Issue, Rule, Application, Conclusion" },
        { id: "law-studies-101-l08-f2", front: "The binding part of a judicial opinion that establishes precedent", back: "Ratio decidendi (the 'reason for deciding')" },
        { id: "law-studies-101-l08-f3", front: "Non-binding observations made 'by the way' in a judicial opinion", back: "Obiter dicta (singular: obiter dictum)" },
        { id: "law-studies-101-l08-f4", front: "The rule requiring ambiguous criminal statutes to be interpreted in favor of the defendant", back: "The rule of lenity" }
      ],
      interactiveActivities: [
        { id: "law-studies-101-l08-a1", type: "matching_pairs", title: "Legal Reasoning Concepts", description: "Match each term to its definition: IRAC → framework for legal analysis (Issue, Rule, Application, Conclusion), Ratio decidendi → binding legal reasoning in a judicial opinion, Obiter dicta → non-binding observations in a court decision, Stare decisis → doctrine that courts follow established precedent, Distinguishing → arguing precedent does not apply because facts differ materially, Rule of lenity → ambiguous criminal statutes favor the defendant." }
      ]
    },

    /* ── L09  Contracts, Torts & Reasoning Checkpoint  (quiz) ── */
    {
      id: "law-studies-101-l09",
      title: "Contracts, Torts & Reasoning Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: { totalQuestions: 4, bloomProfile: { remember: 1, understand: 1, apply: 2 } },
      questions: [
        { id: "law-studies-101-l09-q1", text: "Which of the following is NOT a required element for forming a valid contract?", skillId: "law-studies-101-skill-core", options: [{ id: "a", text: "Notarization by a public official" }, { id: "b", text: "Offer and acceptance" }, { id: "c", text: "Consideration (bargained-for exchange)" }, { id: "d", text: "Legal capacity of both parties" }], correctOptionId: "a", explanation: "The four required elements are offer, acceptance, consideration, and capacity. Notarization is not required for most contracts — though certain contracts must satisfy the Statute of Frauds (a signed writing), notarization is a separate concept." },
        { id: "law-studies-101-l09-q2", text: "In a negligence case, the 'but-for' test is used to establish:", skillId: "law-studies-101-skill-core", options: [{ id: "a", text: "Actual causation — the harm would not have occurred 'but for' the defendant's conduct" }, { id: "b", text: "The defendant's duty of care to the plaintiff" }, { id: "c", text: "The amount of damages to be awarded" }, { id: "d", text: "Whether the defendant's conduct was intentional" }], correctOptionId: "a", explanation: "The but-for test establishes actual (cause-in-fact) causation: 'But for the defendant's negligent act, would the harm have occurred?' If the answer is no, actual causation is established. Proximate causation separately asks whether the harm was foreseeable." },
        { id: "law-studies-101-l09-q3", text: "Using IRAC, which step involves stating the relevant legal principle that governs the issue?", skillId: "law-studies-101-skill-core", options: [{ id: "a", text: "Rule" }, { id: "b", text: "Issue" }, { id: "c", text: "Application" }, { id: "d", text: "Conclusion" }], correctOptionId: "a", explanation: "The 'Rule' step requires identifying and stating the relevant legal principle, statute, or case law that governs the issue. This comes after identifying the Issue and before applying the rule to the facts (Application)." },
        { id: "law-studies-101-l09-q4", text: "A manufacturer sells a toaster with a defective wiring design that causes a house fire. Under which theory is the manufacturer most likely liable?", skillId: "law-studies-101-skill-core", options: [{ id: "a", text: "Strict products liability — manufacturers are liable for defective products regardless of fault" }, { id: "b", text: "Breach of contract — the buyer had a contract with the manufacturer" }, { id: "c", text: "Intentional tort — the manufacturer intended to cause the fire" }, { id: "d", text: "Criminal negligence — the manufacturer was criminally reckless" }], correctOptionId: "a", explanation: "Under strict products liability, a manufacturer is liable for injuries caused by defective products without the plaintiff needing to prove negligence or intent. A design defect that makes the product unreasonably dangerous is sufficient for liability." }
      ],
      flashcards: [
        { id: "law-studies-101-l09-f1", front: "Statute requiring certain contracts to be in writing (e.g., land sales, agreements lasting over one year)", back: "Statute of Frauds" },
        { id: "law-studies-101-l09-f2", front: "Legal principle: 'expressing one thing excludes others'", back: "Expressio unius est exclusio alterius (canon of statutory interpretation)" },
        { id: "law-studies-101-l09-f3", front: "Damages intended to restore the plaintiff to the position they would have been in without the breach", back: "Compensatory damages" },
        { id: "law-studies-101-l09-f4", front: "The technique of arguing that a prior case should not apply because the material facts differ", back: "Distinguishing a case" }
      ]
    },

    /* ── L10  Mastery Quiz: Legal Foundations  (quiz) ── */
    {
      id: "law-studies-101-l10",
      title: "Mastery Quiz: Legal Foundations",
      type: "quiz",
      duration: 10,
      quizBlueprint: { totalQuestions: 4, bloomProfile: { remember: 1, understand: 1, apply: 1, analyze: 1 } },
      questions: [
        { id: "law-studies-101-l10-q1", text: "A state legislature passes a law banning all political speech in public parks. A citizen challenges the law. Which constitutional provision is most directly at issue, and what standard will the court apply?", skillId: "law-studies-101-skill-core", options: [{ id: "a", text: "First Amendment (free speech) — strict scrutiny because political speech is core protected expression" }, { id: "b", text: "Fourth Amendment (search and seizure) — probable cause standard" }, { id: "c", text: "Equal Protection Clause — rational basis review" }, { id: "d", text: "Fifth Amendment (self-incrimination) — beyond a reasonable doubt" }], correctOptionId: "a", explanation: "Content-based restrictions on political speech — the most protected category of expression under the First Amendment — trigger strict scrutiny. The government must prove a compelling interest and that the law is narrowly tailored. A blanket ban on all political speech in public parks would almost certainly fail this standard." },
        { id: "law-studies-101-l10-q2", text: "In a common law jurisdiction, a lower court finds a binding precedent from its appellate court that appears unjust. What is the court's proper course of action?", skillId: "law-studies-101-skill-core", options: [{ id: "a", text: "Follow the precedent but note its concerns for potential appeal and reconsideration by the higher court" }, { id: "b", text: "Ignore the precedent and decide based on its own sense of justice" }, { id: "c", text: "Apply civil law principles from another country instead" }, { id: "d", text: "Refuse to hear the case entirely" }], correctOptionId: "a", explanation: "Under stare decisis, lower courts must follow binding precedent from higher courts in their jurisdiction, even if they disagree. The proper approach is to follow the precedent while noting concerns in the opinion, signaling to the appellate court that reconsideration may be warranted. Only the higher court (or the same-level court sitting en banc) can overrule its own precedent." },
        { id: "law-studies-101-l10-q3", text: "Sarah agrees to sell her car to Tom for $5,000. Tom pays but Sarah refuses to deliver the car. Which remedy is a court most likely to award?", skillId: "law-studies-101-skill-core", options: [{ id: "a", text: "Compensatory damages for breach of contract (money to cover the cost of a comparable car)" }, { id: "b", text: "Specific performance (ordering Sarah to deliver the car)" }, { id: "c", text: "Criminal prosecution of Sarah for theft" }, { id: "d", text: "An injunction preventing Sarah from selling any cars" }], correctOptionId: "a", explanation: "For a breach involving ordinary goods (not unique items), courts typically award compensatory damages — the money needed to put Tom in the position he would have been in (e.g., the cost of buying a comparable car). Specific performance is usually reserved for unique goods like land or rare items. A used car typically is not considered unique enough for specific performance." },
        { id: "law-studies-101-l10-q4", text: "A defendant is charged with robbery. The prosecution proves the defendant took property from the victim by force but presents no evidence of intent to permanently deprive the victim. Applying IRAC analysis, the most likely conclusion is:", skillId: "law-studies-101-skill-core", options: [{ id: "a", text: "Not guilty of robbery — robbery requires both actus reus (taking by force) and mens rea (intent to permanently deprive), and the prosecution failed to prove mens rea" }, { id: "b", text: "Guilty of robbery — the use of force alone is sufficient" }, { id: "c", text: "Guilty of negligence — the defendant should have known better" }, { id: "d", text: "The case should be dismissed because robbery is a civil matter" }], correctOptionId: "a", explanation: "Applying IRAC: Issue — did the defendant commit robbery? Rule — robbery requires (1) taking property from another (2) by force or threat (actus reus) with (3) intent to permanently deprive (mens rea). Application — the prosecution proved the taking by force but not the intent element. Conclusion — without proof of mens rea beyond a reasonable doubt, the defendant cannot be convicted of robbery." }
      ],
      flashcards: [
        { id: "law-studies-101-l10-f1", front: "The two main families of legal systems worldwide", back: "Common law (precedent-based) and civil law (code-based)" },
        { id: "law-studies-101-l10-f2", front: "The four elements of negligence", back: "Duty, Breach, Causation, Damages" },
        { id: "law-studies-101-l10-f3", front: "The four requirements for a valid contract", back: "Offer, Acceptance, Consideration, Capacity" },
        { id: "law-studies-101-l10-f4", front: "IRAC stands for", back: "Issue, Rule, Application, Conclusion — the standard legal analysis framework" }
      ]
    }
  ],
};
