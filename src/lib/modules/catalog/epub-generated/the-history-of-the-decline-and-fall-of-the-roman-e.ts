import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:/My Drive/15_E-BOOKS/file006397.epub
// Author: Edward Gibbon  |  Subject: History

export const TheHistoryOfTheDeclineAndFallOfTheRomanEModule: LearningModule = {
  id: "the-history-of-the-decline-and-fall-of-the-roman-e",
  title: "The History of the Decline and Fall of the Roman Empire",
  description:
    "A comprehensive educational module derived from The History of the Decline and Fall of the Roman Empire by Edward Gibbon. This course provides structured video lessons and interactive quizzes exploring the key themes, arguments, and insights of the work.",
  subject: "History",
  tags: ["epub-derived", "curriculum", "interactive", "history"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  learningObjectives: [
    "Understand and critically analyze the concepts related to part i",
    "Understand and critically analyze the concepts related to part ii",
    "Understand and critically analyze the concepts related to part iii",
    "Understand and critically analyze the concepts related to part iv",
    "Understand and critically analyze the concepts related to part v",
    "Understand and critically analyze the concepts related to part vi",
    "Understand and critically analyze the concepts related to part vii",
  ],
  lessons: [
    /* ─────────────────────────────────────────────────
       L01  Part I and Part II
    ───────────────────────────────────────────────── */
    {
      id: "df-l01",
      title: "Part I and Part II",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to part i",
        "Examine the key ideas and arguments related to part ii",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "df-l01-c1",
          title: "Part I",
          content:
            "Part I. The Conduct Of The Roman Government Towards The Christians, From The Reign Of Nero To That Of Constantine. If we seriously consider the purity of the Christian religion, the sanctity of its moral precepts, and the innocent as well as austere lives of the greater number of those who during the first ages embraced the faith of the gospel, we should naturally suppose, that so benevolent a doctrine would have been received with due reverence, even by the unbelieving world; that the learned and the polite, however they may deride the miracles, would have esteemed the virtues, of the new sect; and that the magistrates, instead of persecuting, would have protected an order of men who yielded the most passive obedience to the laws, though they declined the.",
        },
        {
          id: "df-l01-c2",
          title: "Part II",
          content:
            "Part II. History, which undertakes to record the transactions of the past, for the instruction of future ages, would ill deserve that honorable office, if she condescended to plead the cause of tyrants, or to justify the maxims of persecution. It must, however, be acknowledged, that the conduct of the emperors who appeared the least favorable to the primitive church, is by no means so criminal as that of modern sovereigns, who have employed the arm of violence and terror against the religious opinions of any part of their subjects. From their reflections, or even from their own feelings, a Charles V. or a Lewis XIV. might have acquired a just knowledge of the rights of conscience, of the obligation of faith, and of the innocence of error.",
        },
        {
          id: "df-l01-c3",
          title: "Deeper Analysis: Part I",
          content:
            "If, on the other hand, we recollect the universal toleration of Polytheism, as it was invariably maintained by the faith of the people, the incredulity of philosophers, and the policy of the Roman senate and emperors, we are at a loss to discover what new offence the Christians had committed, what new provocation could exasperate the mild indifference of antiquity, and what new motives could urge the Roman princes, who beheld without concern a thousand forms of religion subsisting in peace under their gentle sway, to inflict a severe punishment on any part of their subjects, who had chosen for themselves a singular but an inoffensive mode of faith and worship.",
        },
      ],
      flashcards: [
        {
          id: "df-l01-f1",
          front: "Part I",
          back:
            "If, on the other hand, we recollect the universal toleration of Polytheism, as it was invariably maintained by the faith of the people, the incredulity of philosophers, and the pol...",
        },
        {
          id: "df-l01-f2",
          front: "Part II",
          back:
            "But the princes and magistrates of ancient Rome were strangers to those principles which inspired and authorized the inflexible obstinacy of the Christians in the cause of truth, n...",
        },
        {
          id: "df-l01-f3",
          front: "Key concept: Part I",
          back:
            "The religious policy of the ancient world seems to have assumed a more stern and intolerant character, to oppose the progress of Christianity.",
        },
        {
          id: "df-l01-f4",
          front: "Key concept: Part II",
          back:
            "From the general view of their character and motives we might naturally conclude: I.",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L02  Part III and Part IV
    ───────────────────────────────────────────────── */
    {
      id: "df-l02",
      title: "Part III and Part IV",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to part iii",
        "Examine the key ideas and arguments related to part iv",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "df-l02-c1",
          title: "Part III",
          content:
            "Part III. The answer of Trajan, to which the Christians of the succeeding age have frequently appealed, discovers as much regard for justice and humanity as could be reconciled with his mistaken notions of religious policy. Instead of displaying the implacable zeal of an inquisitor, anxious to discover the most minute particles of heresy, and exulting in the number of his victims, the emperor expresses much more solicitude to protect the security of the innocent, than to prevent the escape of the guilty. He acknowledged the difficulty of fixing any general plan; but he lays down two salutary rules, which often afforded relief and support to the distressed Christians.",
        },
        {
          id: "df-l02-c2",
          title: "Part IV",
          content:
            "Part IV. When Valerian was consul for the third, and Gallienus for the fourth time, Paternus, proconsul of Africa, summoned Cyprian to appear in his private council–chamber. He there acquainted him with the Imperial mandate which he had just received, that those who had abandoned the Roman religion should immediately return to the practice of the ceremonies of their ancestors. Cyprian replied without hesitation, that he was a Christian and a bishop, devoted to the worship of the true and only Deity, to whom he offered up his daily supplications for the safety and prosperity of the two emperors, his lawful sovereigns. With modest confidence he pleaded the privilege of a citizen, in refusing to give any answer to some invidious and indeed illegal questions which the proconsul had proposed.",
        },
        {
          id: "df-l02-c3",
          title: "Deeper Analysis: Part III",
          content:
            "Though he directs the magistrates to punish such persons as are legally convicted, he prohibits them, with a very humane inconsistency, from making any inquiries concerning the supposed criminals. Nor was the magistrate allowed to proceed on every kind of information. Anonymous charges the emperor rejects, as too repugnant to the equity of his government; and he strictly requires, for the conviction of those to whom the guilt of Christianity is imputed, the positive evidence of a fair and open accuser.",
        },
      ],
      flashcards: [
        {
          id: "df-l02-f1",
          front: "Part III",
          back:
            "Though he directs the magistrates to punish such persons as are legally convicted, he prohibits them, with a very humane inconsistency, from making any inquiries concerning the sup...",
        },
        {
          id: "df-l02-f2",
          front: "Part IV",
          back:
            "He was recalled from banishment; and though not yet permitted to return to Carthage, his own gardens in the neighborhood of the capital were assigned for the place of his residence...",
        },
        {
          id: "df-l02-f3",
          front: "Key concept: Part III",
          back:
            "It is likewise probable, that the persons who assumed so invidiuous an office, were obliged to declare the grounds of their suspicions, to specify (both in respect to time and plac...",
        },
        {
          id: "df-l02-f4",
          front: "Key concept: Part IV",
          back:
            "Two officers of rank, who were intrusted with that commission, placed Cyprian between them in a chariot, and as the proconsul was not then at leisure, they conducted him, not to a...",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L03  Part V and Part VI
    ───────────────────────────────────────────────── */
    {
      id: "df-l03",
      title: "Part V and Part VI",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to part v",
        "Examine the key ideas and arguments related to part vi",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "df-l03-c1",
          title: "Part V",
          content:
            "The edict of Marcus Antoninus is supposed to have been the effect of his devotion and gratitude for the miraculous deliverance which he had obtained in the Marcomannic war. The distress of the legions, the seasonable tempest of rain and hail, of thunder and of lightning, and the dismay and defeat of the barbarians, have been celebrated by the eloquence of several Pagan writers. If there were any Christians in that army, it was natural that they should ascribe some merit to the fervent prayers, which, in the moment of danger, they had offered up for their own and the public safety.",
        },
        {
          id: "df-l03-c2",
          title: "Part VI",
          content:
            "Part VI. Although the policy of Diocletian and the humanity of Constantius inclined them to preserve inviolate the maxims of toleration, it was soon discovered that their two associates, Maximian and Galerius, entertained the most implacable aversion for the name and religion of the Christians. The minds of those princes had never been enlightened by science; education had never softened their temper. They owed their greatness to their swords, and in their most elevated fortune they still retained their superstitious prejudices of soldiers and peasants. In the general administration of the provinces they obeyed the laws which their benefactor had established; but they frequently found occasions of exercising within their camp and palaces a secret persecution, for which the imprudent zeal of the Christians sometimes offered the most specious pretences.",
        },
        {
          id: "df-l03-c3",
          title: "Deeper Analysis: Part V",
          content:
            "But we are still assured by monuments of brass and marble, by the Imperial medals, and by the Antonine column, that neither the prince nor the people entertained any sense of this signal obligation, since they unanimously attribute their deliverance to the providence of Jupiter, and to the interposition of Mercury. During the whole course of his reign, Marcus despised the Christians as a philosopher, and punished them as a sovereign. * By a singular fatality, the hardships which they had endured under the government of a virtuous prince, immediately ceased on the accession of a tyrant; and as none except themselves had experienced the injustice of Marcus, so they alone were protected by the lenity of Commodus.",
        },
      ],
      flashcards: [
        {
          id: "df-l03-f1",
          front: "Part V",
          back:
            "But we are still assured by monuments of brass and marble, by the Imperial medals, and by the Antonine column, that neither the prince nor the people entertained any sense of this...",
        },
        {
          id: "df-l03-f2",
          front: "Part VI",
          back:
            "A sentence of death was executed upon Maximilianus, an African youth, who had been produced by his own father *before the magistrate as a sufficient and legal recruit, but who obst...",
        },
        {
          id: "df-l03-f3",
          front: "Key concept: Part V",
          back:
            "The celebrated Marcia, the most favored of his concubines, and who at length contrived the murder of her Imperial lover, entertained a singular affection for the oppressed church;...",
        },
        {
          id: "df-l03-f4",
          front: "Key concept: Part VI",
          back:
            "The soldiers, as soon as they recovered from their astonishment, secured the person of Marcellus.",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L04  Checkpoint Quiz 2
    ───────────────────────────────────────────────── */
    {
      id: "df-l04",
      title: "Checkpoint Quiz 2",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of the concepts covered in the preceding lessons"],
      questions: [
        {
          id: "df-l04-q1",
          text: "Which of the following best describes a key idea from the section on Part I?",
          options: [
            { id: "a", text: "Part III." },
            { id: "b", text: "Part II." },
            { id: "c", text: "Part IV." },
            { id: "d", text: "Part I." },
          ],
          correctOptionId: "d",
          explanation:
            "This question relates to Part I. Part I.",
        },
        {
          id: "df-l04-q2",
          text: "Which of the following best describes a key idea from the section on Part II?",
          options: [
            { id: "a", text: "Part III." },
            { id: "b", text: "Part IV." },
            { id: "c", text: "Part I." },
            { id: "d", text: "Part II." },
          ],
          correctOptionId: "d",
          explanation:
            "This question relates to Part II. Part II.",
        },
        {
          id: "df-l04-q3",
          text: "Which of the following best describes a key idea from the section on Part III?",
          options: [
            { id: "a", text: "Part III." },
            { id: "b", text: "Part I." },
            { id: "c", text: "Part IV." },
            { id: "d", text: "Part II." },
          ],
          correctOptionId: "a",
          explanation:
            "This question relates to Part III. Part III.",
        },
        {
          id: "df-l04-q4",
          text: "Which of the following best describes a key idea from the section on Part IV?",
          options: [
            { id: "a", text: "Part IV." },
            { id: "b", text: "Part I." },
            { id: "c", text: "Part II." },
            { id: "d", text: "Part III." },
          ],
          correctOptionId: "a",
          explanation:
            "This question relates to Part IV. Part IV.",
        },
        {
          id: "df-l04-q5",
          text: "Which of the following best describes a key idea from the section on Part V?",
          options: [
            { id: "a", text: "Part I." },
            { id: "b", text: "The edict of Marcus Antoninus is supposed to have been the effect of his devotion and gratitude for..." },
            { id: "c", text: "Part II." },
            { id: "d", text: "Part III." },
          ],
          correctOptionId: "b",
          explanation:
            "This question relates to Part V. The edict of Marcus Antoninus is supposed to have been the effect of his devotion and gratitude for...",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L05  Part VII and Part VIII
    ───────────────────────────────────────────────── */
    {
      id: "df-l05",
      title: "Part VII and Part VIII",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to part vii",
        "Examine the key ideas and arguments related to part viii",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "df-l05-c1",
          title: "Part VII",
          content:
            "The mild and humane temper of Constantius was averse to the oppression of any part of his subjects. The principal offices of his palace were exercised by Christians. He loved their persons, esteemed their fidelity, and entertained not any dislike to their religious principles. But as long as Constantius remained in the subordinate station of Cæsar, it was not in his power openly to reject the edicts of Diocletian, or to disobey the commands of Maximian. His authority contributed, however, to alleviate the sufferings which he pitied and abhorred. He consented with reluctance to the ruin of the churches; but he ventured to protect the Christians themselves from the fury of the populace, and from the rigor of the laws.",
        },
        {
          id: "df-l05-c2",
          title: "Part VIII",
          content:
            "From the history of Eusebius, it may, however, be collected, that only nine bishops were punished with death; and we are assured, by his particular enumeration of the martyrs of Palestine, that no more than ninety–two Christians were entitled to that honorable appellation. As we are unacquainted with the degree of episcopal zeal and courage which prevailed at that time, it is not in our power to draw any useful inferences from the former of these facts: but the latter may serve to justify a very important and probable conclusion.",
        },
        {
          id: "df-l05-c3",
          title: "Deeper Analysis: Part VII",
          content:
            "The provinces of Gaul (under which we may probably include those of Britain) were indebted for the singular tranquillity which they enjoyed, to the gentle interposition of their sovereign. But Datianus, the president or governor of Spain, actuated either by zeal or policy, chose rather to execute the public edicts of the emperors, than to understand the secret intentions of Constantius; and it can scarcely be doubted, that his provincial administration was stained with the blood of a few martyrs.",
        },
      ],
      flashcards: [
        {
          id: "df-l05-f1",
          front: "Part VII",
          back:
            "The provinces of Gaul (under which we may probably include those of Britain) were indebted for the singular tranquillity which they enjoyed, to the gentle interposition of their so...",
        },
        {
          id: "df-l05-f2",
          front: "Part VIII",
          back:
            "Allotting the same proportion to the provinces of Italy, Africa, and perhaps Spain, where, at the end of two or three years, the rigor of the penal laws was either suspended or abo...",
        },
        {
          id: "df-l05-f3",
          front: "Key concept: Part VII",
          back:
            "The elevation of Constantius to the supreme and independent dignity of Augustus, gave a free scope to the exercise of his virtues, and the shortness of his reign did not prevent hi...",
        },
        {
          id: "df-l05-f4",
          front: "Key concept: Part VIII",
          back:
            "We shall conclude this chapter by a melancholy truth, which obtrudes itself on the reluctant mind; that even admitting, without hesitation or inquiry, all that history has recorded...",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L06  Part I and Part II
    ───────────────────────────────────────────────── */
    {
      id: "df-l06",
      title: "Part I and Part II",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to part i",
        "Examine the key ideas and arguments related to part ii",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "df-l06-c1",
          title: "Part I",
          content:
            "Part I. Foundation Of Constantinople.—Political System Constantine, And His Successors.—Military Discipline.—The Palace.—The Finances. The unfortunate Licinius was the last rival who opposed the greatness, and the last captive who adorned the triumph, of Constantine. After a tranquil and prosperous reign, the conqueror bequeathed to his family the inheritance of the Roman empire; a new capital, a new policy, and a new religion; and the innovations which he established have been embraced and consecrated by succeeding generations. The age of the great Constantine and his sons is filled with important events; but the historian must be oppressed by their number and variety, unless he diligently separates from each other the scenes which are connected only by the order of time.",
        },
        {
          id: "df-l06-c2",
          title: "Part II",
          content:
            "Part II. The master of the Roman world, who aspired to erect an eternal monument of the glories of his reign could employ in the prosecution of that great work, the wealth, the labor, and all that yet remained of the genius of obedient millions. Some estimate may be formed of the expense bestowed with Imperial liberality on the foundation of Constantinople, by the allowance of about two millions five hundred thousand pounds for the construction of the walls, the porticos, and the aqueducts. The forests that overshadowed the shores of the Euxine, and the celebrated quarries of white marble in the little island of Proconnesus, supplied an inexhaustible stock of materials, ready to be conveyed, by the convenience of a short water carriage, to the harbor of Byzantium.",
        },
        {
          id: "df-l06-c3",
          title: "Deeper Analysis: Part I",
          content:
            "He will describe the political institutions that gave strength and stability to the empire, before he proceeds to relate the wars and revolutions which hastened its decline. He will adopt the division unknown to the ancients of civil and ecclesiastical affairs: the victory of the Christians, and their intestine discord, will supply copious and distinct materials both for edification and for scandal. After the defeat and abdication of Licinius, his victorious rival proceeded to lay the foundations of a city destined to reign in future times, the mistress of the East, and to survive the empire and religion of Constantine.",
        },
      ],
      flashcards: [
        {
          id: "df-l06-f1",
          front: "Part I",
          back:
            "He will describe the political institutions that gave strength and stability to the empire, before he proceeds to relate the wars and revolutions which hastened its decline.",
        },
        {
          id: "df-l06-f2",
          front: "Part II",
          back:
            "A multitude of laborers and artificers urged the conclusion of the work with incessant toil: but the impatience of Constantine soon discovered, that, in the decline of the arts, th...",
        },
        {
          id: "df-l06-f3",
          front: "Key concept: Part I",
          back:
            "The motives, whether of pride or of policy, which first induced Diocletian to withdraw himself from the ancient seat of government, had acquired additional weight by the example of...",
        },
        {
          id: "df-l06-f4",
          front: "Key concept: Part II",
          back:
            "The buildings of the new city were executed by such artificers as the reign of Constantine could afford; but they were decorated by the hands of the most celebrated masters of the...",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L07  Checkpoint Quiz 2
    ───────────────────────────────────────────────── */
    {
      id: "df-l07",
      title: "Checkpoint Quiz 2",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of the concepts covered in the preceding lessons"],
      questions: [
        {
          id: "df-l07-q1",
          text: "Which of the following best describes a key idea from the section on Part VII?",
          options: [
            { id: "a", text: "Part II." },
            { id: "b", text: "From the history of Eusebius, it may, however, be collected, that only nine bishops were punished wi..." },
            { id: "c", text: "The mild and humane temper of Constantius was averse to the oppression of any part of his subjects." },
            { id: "d", text: "Part I." },
          ],
          correctOptionId: "c",
          explanation:
            "This question relates to Part VII. The mild and humane temper of Constantius was averse to the oppression of any part of his subjects.",
        },
        {
          id: "df-l07-q2",
          text: "Which of the following best describes a key idea from the section on Part VIII?",
          options: [
            { id: "a", text: "The mild and humane temper of Constantius was averse to the oppression of any part of his subjects." },
            { id: "b", text: "Part I." },
            { id: "c", text: "From the history of Eusebius, it may, however, be collected, that only nine bishops were punished wi..." },
            { id: "d", text: "Part II." },
          ],
          correctOptionId: "c",
          explanation:
            "This question relates to Part VIII. From the history of Eusebius, it may, however, be collected, that only nine bishops were punished wi...",
        },
        {
          id: "df-l07-q3",
          text: "Which of the following best describes a key idea from the section on Part I?",
          options: [
            { id: "a", text: "Part II." },
            { id: "b", text: "Part I." },
            { id: "c", text: "From the history of Eusebius, it may, however, be collected, that only nine bishops were punished wi..." },
            { id: "d", text: "The mild and humane temper of Constantius was averse to the oppression of any part of his subjects." },
          ],
          correctOptionId: "b",
          explanation:
            "This question relates to Part I. Part I.",
        },
        {
          id: "df-l07-q4",
          text: "Which of the following best describes a key idea from the section on Part II?",
          options: [
            { id: "a", text: "The mild and humane temper of Constantius was averse to the oppression of any part of his subjects." },
            { id: "b", text: "Part II." },
            { id: "c", text: "From the history of Eusebius, it may, however, be collected, that only nine bishops were punished wi..." },
            { id: "d", text: "Part I." },
          ],
          correctOptionId: "b",
          explanation:
            "This question relates to Part II. Part II.",
        },
        {
          id: "df-l07-q5",
          text: "Which of the following best describes a key idea from the section on Part III?",
          options: [
            { id: "a", text: "The mild and humane temper of Constantius was averse to the oppression of any part of his subjects." },
            { id: "b", text: "Part I." },
            { id: "c", text: "From the history of Eusebius, it may, however, be collected, that only nine bishops were punished wi..." },
            { id: "d", text: "Part III." },
          ],
          correctOptionId: "d",
          explanation:
            "This question relates to Part III. Part III.",
        },
      ],
    },
  ],
};
