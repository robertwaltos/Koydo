import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:/My Drive/15_E-BOOKS/file012610.epub
// Author: Stephen Hawking  |  Subject: Physics/Cosmology

export const IllustratedTheoryOfEverythingStephenHawkingModule: LearningModule = {
  id: "illustrated-theory-of-everything-stephen-hawking",
  title: "Illustrated Theory of Everything",
  description:
    "A comprehensive educational module derived from Illustrated Theory of Everything by Stephen Hawking. This course provides structured video lessons and interactive quizzes exploring the key themes, arguments, and insights of the work.",
  subject: "Physics/Cosmology",
  tags: ["epub-derived", "curriculum", "interactive", "physics", "cosmology"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  learningObjectives: [
    "Understand and critically analyze the concepts related to the theory of everything",
    "Understand and critically analyze the concepts related to chapter 1",
    "Understand and critically analyze the concepts related to chapter 2",
    "Understand and critically analyze the concepts related to chapter 3",
    "Understand and critically analyze the concepts related to chapter 4",
    "Understand and critically analyze the concepts related to chapter 5 - fifth lecture - the origin and fate of the",
    "Understand and critically analyze the concepts related to chapter 6",
  ],
  lessons: [
    /* ─────────────────────────────────────────────────
       L01  The Theory of Everything and Chapter 1
    ───────────────────────────────────────────────── */
    {
      id: "te-l01",
      title: "The Theory of Everything and Chapter 1",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to the theory of everything",
        "Examine the key ideas and arguments related to chapter 1",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "te-l01-c1",
          title: "The Theory of Everything",
          content:
            "The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin and Fate of the Universe By Hawking, Stephen INTRODUCTION In this series of lectures I shall try to give an outline of what we think is thehistory of the universe from the big bang to black holes. In the first lectureI shall briefly review past ideas about the universe and how we got to ourpresent picture. One might call this the history of the history of the universe. In the second lecture I shall describe how both Newton’s and Einstein’s the-ories of gravity led to the conclusion that the universe could not be static; ithad to be either expanding or contracting.",
        },
        {
          id: "te-l01-c2",
          title: "Chapter 1",
          content:
            "Chapter 1 - FIRST LECTURE - IDEAS ABOUT THE UNIVERSE As long ago as 340 B.C. Aristotle, in his book On the Heavens, was able toput forward two good arguments for believing that the Earth was a roundball rather than a flat plate. First, he realized that eclipses of the moon werecaused by the Earth coming between the sun and the moon. The Earth’s shad-ow on the moon was always round, which would be true only if the Earth wasspherical. If the Earth had been a flat disk, the shadow would have been elon-gated and elliptical, unless the eclipse always occurred at a time when the sunwas directly above the center of the disk.",
        },
        {
          id: "te-l01-c3",
          title: "Deeper Analysis: The Theory of Everything",
          content:
            "This, in turn, implied that theremust have been a time between ten and twenty billion years ago when thedensity of the universe was infinite. This is called the big bang. It would havebeen the beginning of the universe. In the third lecture I shall talk about black holes. These are formed when amassive star or an even larger body collapses in on itself under its owngravitational pull. According to Einstein’s general theory of relativity, anyonefoolish enough to fall into a black hole will be lost forever. They will not beable to come out of the black hole again. Instead, history, as far as they areconcerned, will come to a sticky end at a singularity.",
        },
      ],
      flashcards: [
        {
          id: "te-l01-f1",
          front: "The Theory of Everything",
          back:
            "This, in turn, implied that theremust have been a time between ten and twenty billion years ago when thedensity of the universe was infinite.",
        },
        {
          id: "te-l01-f2",
          front: "Chapter 1",
          back:
            "Second, the Greeks knew from their travels that the Pole Star appeared lowerin the sky when viewed in the south than it did in more northerly regions.From the difference in the app...",
        },
        {
          id: "te-l01-f3",
          front: "Key concept: The Theory of Everything",
          back:
            "However, generalrelativity is a classical theory-that is, it doesn’t take into account theuncertainty principle of quantum mechanics.",
        },
        {
          id: "te-l01-f4",
          front: "Key concept: Chapter 1",
          back:
            "Aristotle thought that the Earth was stationary and that the sun,the moon, the planets, and the stars moved in circular orbits about the Earth.He believed this because he felt, for...",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L02  Chapter 2 and Chapter 3
    ───────────────────────────────────────────────── */
    {
      id: "te-l02",
      title: "Chapter 2 and Chapter 3",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to chapter 2",
        "Examine the key ideas and arguments related to chapter 3",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "te-l02-c1",
          title: "Chapter 2",
          content:
            "Chapter 2 - SECOND LECTURE - THE EXPANDING UNIVERSE Our sun and the nearby stars are all part of a vast collection of stars calledthe Milky Way galaxy. For a long time it was thought that this was thewhole universe. It was only in 1924 that the American astronomer EdwinHubble demonstrated that ours was not the only galaxy. There were, in fact,many others, with vast tracks of empty space between them. In order to provethis he needed to determine the distances to these other galaxies. We candetermine the distance of nearby stars by observing how they change positionas the Earth goes around the sun. But other galaxies are so far away that, unlikenearby stars, they really do appear fixed. Hubble was forced, therefore, to useindirect methods to measure the distances.",
        },
        {
          id: "te-l02-c2",
          title: "Chapter 3",
          content:
            "Chapter 3 - THIRD LECTURE - BLACK HOLES The term black hole is of very recent origin. It was coined in 1969 by theAmerican scientist John Wheeler as a graphic description of an idea thatgoes back at least two hundred years. At that time there were two theoriesabout light. One was that it was composed of particles; the other was that itwas made of waves. We now know that really both theories are correct. By thewave/particle duality of quantum mechanics, light can be regarded as both awave and a particle. Under the theory that light was made up of waves, it wasnot clear how it would respond to gravity.",
        },
        {
          id: "te-l02-c3",
          title: "Deeper Analysis: Chapter 2",
          content:
            "Now the apparent brightness of a star depends on two factors-luminosity andhow far it is from us. For nearby stars we can measure both their apparentbrightness and their distance, so we can work out their luminosity. Conversely,if we knew the luminosity of stars in other galaxies, we could work out theirdistance by measuring their apparent brightness. Hubble argued that therewere certain types of stars that always had the same luminosity when they werenear enough for us to measure. If, therefore, we found such stars in anothergalaxy, we could assume that they had the same luminosity. Thus, we couldcalculate the distance to that galaxy.",
        },
      ],
      flashcards: [
        {
          id: "te-l02-f1",
          front: "Chapter 2",
          back:
            "Now the apparent brightness of a star depends on two factors-luminosity andhow far it is from us.",
        },
        {
          id: "te-l02-f2",
          front: "Chapter 3",
          back:
            "But if light were composed of parti-cles, one might expect them to be affected by gravity in the same way thatcannonballs, rockets, and planets are.",
        },
        {
          id: "te-l02-f3",
          front: "Key concept: Chapter 2",
          back:
            "If we could do this for a number of starsin the same galaxy, and our calculations always gave the same distance, wecould be fairly confident of our estimate.",
        },
        {
          id: "te-l02-f4",
          front: "Key concept: Chapter 3",
          back:
            "A consistenttheory of how gravity affects light did not come until Einstein proposed gen-eral relativity in 1915; and even then it was a long time before the implica-tions of the t...",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L03  Chapter 4 and Chapter 5 - FIFTH LECTURE - THE ORIGIN AND FATE OF THE
    ───────────────────────────────────────────────── */
    {
      id: "te-l03",
      title: "Chapter 4 and Chapter 5 - FIFTH LECTURE - THE ORIGIN AND FATE OF THE",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to chapter 4",
        "Examine the key ideas and arguments related to chapter 5 - fifth lecture - the origin and fate of the",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "te-l03-c1",
          title: "Chapter 4",
          content:
            "Chapter 4 - FOURTH LECTURE - BLACK HOLES AIN’T SO BLACK Before 1970, my research on general relativity had concentrated mainly onthe question of whether there had been a big bang singularity. However,one evening in November of that year, shortly after the birth of my daughter,Lucy, I started to think about black holes as I was getting into bed. My disabil-ity made this rather a slow process, so I had plenty of time. At that date therewas no precise definition of which points in space-time lay inside a black holeand which lay outside. I had already discussed with Roger Penrose the idea of defining a black hole asthe set of events from which it was not possible to escape to a large distance.This is now the generally accepted definition.",
        },
        {
          id: "te-l03-c2",
          title: "Chapter 5 - FIFTH LECTURE - THE ORIGIN AND FATE OF THE",
          content:
            "Chapter 5 - FIFTH LECTURE - THE ORIGIN AND FATE OF THE... T H E O R I G I N A N D F A T E O F T H E U N I V E R S EThroughout the 1970s I had been working mainly on black holes. However,n 1981 my interest in questions about the origin of the universe wasreawakened when I attended a conference on cosmology in the Vatican. TheCatholic church had made a bad mistake with Galileo when it tried to laydown the law on a question of science, declaring that the sun went around theEarth. Now, centuries later, it had decided it would be better to invite a num-ber of experts to advise it on cosmology.",
        },
        {
          id: "te-l03-c3",
          title: "Deeper Analysis: Chapter 4",
          content:
            "It means that the boundary ofthe black hole, the event horizon, is formed by rays of light that just fail to getaway from the black hole. Instead, they stay forever, hovering on the edge ofthe black hole. It is like running away from the police and managing to keepone step ahead but not being able to get clear away. Suddenly I realized that the paths of these light rays could not be approachingone another, because if they were, they must eventually run into each other. Itwould be like someone else running away from the police in the opposite direc-tion. You would both be caught or, in this case, fall into a black hole.",
        },
      ],
      flashcards: [
        {
          id: "te-l03-f1",
          front: "Chapter 4",
          back:
            "It means that the boundary ofthe black hole, the event horizon, is formed by rays of light that just fail to getaway from the black hole.",
        },
        {
          id: "te-l03-f2",
          front: "Chapter 5 - FIFTH LECTURE - THE ORIGIN AND FATE OF THE",
          back:
            "At the end of the conference the participants were granted an audience withthe pope.",
        },
        {
          id: "te-l03-f3",
          front: "Key concept: Chapter 4",
          back:
            "But ifthese light rays were swallowed up by the black hole, then they could not havebeen on the boundary of the black hole.",
        },
        {
          id: "te-l03-f4",
          front: "Key concept: Chapter 5 - FIFTH LECTURE - THE ORIGIN AND FATE OF THE",
          back:
            "THE HOT BIG BANG MODEL In order to explain what my paper was about, I shall first describe the generallyaccepted history of the universe, according to what is known as the “hot big...",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L04  Checkpoint Quiz 2
    ───────────────────────────────────────────────── */
    {
      id: "te-l04",
      title: "Checkpoint Quiz 2",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of the concepts covered in the preceding lessons"],
      questions: [
        {
          id: "te-l04-q1",
          text: "Which of the following best describes a key idea from the section on The Theory of Everything?",
          options: [
            { id: "a", text: "Chapter 3 - THIRD LECTURE - BLACK HOLES The term black hole is of very recent origin." },
            { id: "b", text: "Chapter 2 - SECOND LECTURE - THE EXPANDING UNIVERSE Our sun and the nearby stars are all part of a v..." },
            { id: "c", text: "Chapter 1 - FIRST LECTURE - IDEAS ABOUT THE UNIVERSE As long ago as 340 B.C." },
            { id: "d", text: "The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin a..." },
          ],
          correctOptionId: "d",
          explanation:
            "This question relates to The Theory of Everything. The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin a...",
        },
        {
          id: "te-l04-q2",
          text: "Which of the following best describes a key idea from the section on Chapter 1?",
          options: [
            { id: "a", text: "The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin a..." },
            { id: "b", text: "Chapter 3 - THIRD LECTURE - BLACK HOLES The term black hole is of very recent origin." },
            { id: "c", text: "Chapter 1 - FIRST LECTURE - IDEAS ABOUT THE UNIVERSE As long ago as 340 B.C." },
            { id: "d", text: "Chapter 2 - SECOND LECTURE - THE EXPANDING UNIVERSE Our sun and the nearby stars are all part of a v..." },
          ],
          correctOptionId: "c",
          explanation:
            "This question relates to Chapter 1. Chapter 1 - FIRST LECTURE - IDEAS ABOUT THE UNIVERSE As long ago as 340 B.C.",
        },
        {
          id: "te-l04-q3",
          text: "Which of the following best describes a key idea from the section on Chapter 2?",
          options: [
            { id: "a", text: "Chapter 1 - FIRST LECTURE - IDEAS ABOUT THE UNIVERSE As long ago as 340 B.C." },
            { id: "b", text: "The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin a..." },
            { id: "c", text: "Chapter 3 - THIRD LECTURE - BLACK HOLES The term black hole is of very recent origin." },
            { id: "d", text: "Chapter 2 - SECOND LECTURE - THE EXPANDING UNIVERSE Our sun and the nearby stars are all part of a v..." },
          ],
          correctOptionId: "d",
          explanation:
            "This question relates to Chapter 2. Chapter 2 - SECOND LECTURE - THE EXPANDING UNIVERSE Our sun and the nearby stars are all part of a v...",
        },
        {
          id: "te-l04-q4",
          text: "Which of the following best describes a key idea from the section on Chapter 3?",
          options: [
            { id: "a", text: "Chapter 3 - THIRD LECTURE - BLACK HOLES The term black hole is of very recent origin." },
            { id: "b", text: "Chapter 1 - FIRST LECTURE - IDEAS ABOUT THE UNIVERSE As long ago as 340 B.C." },
            { id: "c", text: "Chapter 2 - SECOND LECTURE - THE EXPANDING UNIVERSE Our sun and the nearby stars are all part of a v..." },
            { id: "d", text: "The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin a..." },
          ],
          correctOptionId: "a",
          explanation:
            "This question relates to Chapter 3. Chapter 3 - THIRD LECTURE - BLACK HOLES The term black hole is of very recent origin.",
        },
        {
          id: "te-l04-q5",
          text: "Which of the following best describes a key idea from the section on Chapter 4?",
          options: [
            { id: "a", text: "The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin a..." },
            { id: "b", text: "Chapter 4 - FOURTH LECTURE - BLACK HOLES AIN’T SO BLACK Before 1970, my research on general relativi..." },
            { id: "c", text: "Chapter 1 - FIRST LECTURE - IDEAS ABOUT THE UNIVERSE As long ago as 340 B.C." },
            { id: "d", text: "Chapter 2 - SECOND LECTURE - THE EXPANDING UNIVERSE Our sun and the nearby stars are all part of a v..." },
          ],
          correctOptionId: "b",
          explanation:
            "This question relates to Chapter 4. Chapter 4 - FOURTH LECTURE - BLACK HOLES AIN’T SO BLACK Before 1970, my research on general relativi...",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L05  Chapter 6 and Chapter 7
    ───────────────────────────────────────────────── */
    {
      id: "te-l05",
      title: "Chapter 6 and Chapter 7",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to chapter 6",
        "Examine the key ideas and arguments related to chapter 7",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "te-l05-c1",
          title: "Chapter 6",
          content:
            "Chapter 6 - SIXTH LECTURE - THE DIRECTION OF TIME T H E D I R E C T I O N O F T I M EIn his book, The Go Between, L. P. Hartley wrote, “The past is a foreigncountry. They do things differently there-but why is the past so differentfrom the future? Why do we remember the past, but not the future?” In otherwords, why does time go forward? Is this connected with the fact that the uni-verse is expanding? C, P, T The laws of physics do not distinguish between the past and the future. Moreprecisely, the laws of physics are unchanged under the combination of opera-tions known as C, P, and T. (C means changing particles for antiparticles.",
        },
        {
          id: "te-l05-c2",
          title: "Chapter 7",
          content:
            "Chapter 7 - SEVENTH LECTURE - THE THEORY OF EVERYTHING It would be very difficult to construct a complete unified theory of everythingall at one go. So instead we have made progress by finding partial theories.These describe a limited range of happenings and neglect other effects, orapproximate them by certain numbers. In chemistry, for example, we can cal-culate the interactions of atoms without knowing the internal structure of thenucleus of an atom. Ultimately, however, one would hope to find a complete,consistent, unified theory that would include all these partial theories asapproximations.",
        },
        {
          id: "te-l05-c3",
          title: "Deeper Analysis: Chapter 6",
          content:
            "Pmeans taking the mirror image so left and right are swapped for each other.And T means reversing the direction of motion of all particles-in effect, run-ning the motion backward.) The laws of physics that govern the behavior ofmatter under all normal situations are unchanged under the operations C andP on their own. In other words, life would be just the same for the inhabitantsof another planet who were our mirror images and who were made of antimat-ter. If you meet someone from another planet and he holds out his left hand,don’t shake it. He might be made of antimatter. You would both disappear ina tremendous flash of light.",
        },
      ],
      flashcards: [
        {
          id: "te-l05-f1",
          front: "Chapter 6",
          back:
            "Pmeans taking the mirror image so left and right are swapped for each other.And T means reversing the direction of motion of all particles-in effect, run-ning the motion backward.)...",
        },
        {
          id: "te-l05-f2",
          front: "Chapter 7",
          back:
            "The quest for such a theory is known as “the unification ofphysics.” Einstein spent most of his later years unsuccessfully searching for a unified the-ory, but the time was not rip...",
        },
        {
          id: "te-l05-f3",
          front: "Key concept: Chapter 6",
          back:
            "If the laws of physics are unchanged by the com-bination of operations C and P, and also by the combination C, P, and T, theymust also be unchanged under the operation T alone....",
        },
        {
          id: "te-l05-f4",
          front: "Key concept: Chapter 7",
          back:
            "At the beginning of this century, forexample, it was thought that everything could be explained in terms of theproperties of continuous matter, such as elasticity and heat conducti...",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L06  Further Analysis: The Theory of Everything
    ───────────────────────────────────────────────── */
    {
      id: "te-l06",
      title: "Further Analysis: The Theory of Everything",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to further analysis: the theory of everything",
        "Examine the key ideas and arguments related to further analysis: the theory of everything",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "te-l06-c1",
          title: "Further Analysis: The Theory of Everything",
          content:
            "The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin and Fate of the Universe By Hawking, Stephen INTRODUCTION In this series of lectures I shall try to give an outline of what we think is thehistory of the universe from the big bang to black holes. In the first lectureI shall briefly review past ideas about the universe and how we got to ourpresent picture. One might call this the history of the history of the universe. In the second lecture I shall describe how both Newton’s and Einstein’s the-ories of gravity led to the conclusion that the universe could not be static; ithad to be either expanding or contracting.",
        },
        {
          id: "te-l06-c2",
          title: "Further Analysis: The Theory of Everything",
          content:
            "The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin and Fate of the Universe By Hawking, Stephen INTRODUCTION In this series of lectures I shall try to give an outline of what we think is thehistory of the universe from the big bang to black holes. In the first lectureI shall briefly review past ideas about the universe and how we got to ourpresent picture. One might call this the history of the history of the universe. In the second lecture I shall describe how both Newton’s and Einstein’s the-ories of gravity led to the conclusion that the universe could not be static; ithad to be either expanding or contracting.",
        },
        {
          id: "te-l06-c3",
          title: "Deeper Analysis: Further Analysis: The Theory of Everything",
          content:
            "This, in turn, implied that theremust have been a time between ten and twenty billion years ago when thedensity of the universe was infinite. This is called the big bang. It would havebeen the beginning of the universe. In the third lecture I shall talk about black holes. These are formed when amassive star or an even larger body collapses in on itself under its owngravitational pull. According to Einstein’s general theory of relativity, anyonefoolish enough to fall into a black hole will be lost forever. They will not beable to come out of the black hole again. Instead, history, as far as they areconcerned, will come to a sticky end at a singularity.",
        },
      ],
      flashcards: [
        {
          id: "te-l06-f1",
          front: "Further Analysis: The Theory of Everything",
          back:
            "This, in turn, implied that theremust have been a time between ten and twenty billion years ago when thedensity of the universe was infinite.",
        },
        {
          id: "te-l06-f2",
          front: "Further Analysis: The Theory of Everything",
          back:
            "This, in turn, implied that theremust have been a time between ten and twenty billion years ago when thedensity of the universe was infinite.",
        },
        {
          id: "te-l06-f3",
          front: "Key concept: Further Analysis: The Theory of Everything",
          back:
            "However, generalrelativity is a classical theory-that is, it doesn’t take into account theuncertainty principle of quantum mechanics.",
        },
        {
          id: "te-l06-f4",
          front: "Key concept: Further Analysis: The Theory of Everything",
          back:
            "However, generalrelativity is a classical theory-that is, it doesn’t take into account theuncertainty principle of quantum mechanics.",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L07  Checkpoint Quiz 2
    ───────────────────────────────────────────────── */
    {
      id: "te-l07",
      title: "Checkpoint Quiz 2",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of the concepts covered in the preceding lessons"],
      questions: [
        {
          id: "te-l07-q1",
          text: "Which of the following best describes a key idea from the section on Chapter 6?",
          options: [
            { id: "a", text: "The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin a..." },
            { id: "b", text: "Chapter 6 - SIXTH LECTURE - THE DIRECTION OF TIME T H E D I R E C T I O N O F T I M EIn his book, Th..." },
            { id: "c", text: "Chapter 7 - SEVENTH LECTURE - THE THEORY OF EVERYTHING It would be very difficult to construct a com..." },
            { id: "d", text: "The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin a..." },
          ],
          correctOptionId: "b",
          explanation:
            "This question relates to Chapter 6. Chapter 6 - SIXTH LECTURE - THE DIRECTION OF TIME T H E D I R E C T I O N O F T I M EIn his book, Th...",
        },
        {
          id: "te-l07-q2",
          text: "Which of the following best describes a key idea from the section on Chapter 7?",
          options: [
            { id: "a", text: "The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin a..." },
            { id: "b", text: "Chapter 6 - SIXTH LECTURE - THE DIRECTION OF TIME T H E D I R E C T I O N O F T I M EIn his book, Th..." },
            { id: "c", text: "Chapter 7 - SEVENTH LECTURE - THE THEORY OF EVERYTHING It would be very difficult to construct a com..." },
            { id: "d", text: "The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin a..." },
          ],
          correctOptionId: "c",
          explanation:
            "This question relates to Chapter 7. Chapter 7 - SEVENTH LECTURE - THE THEORY OF EVERYTHING It would be very difficult to construct a com...",
        },
        {
          id: "te-l07-q3",
          text: "Which of the following best describes a key idea from the section on Further Analysis: The Theory of Everything?",
          options: [
            { id: "a", text: "Chapter 7 - SEVENTH LECTURE - THE THEORY OF EVERYTHING It would be very difficult to construct a com..." },
            { id: "b", text: "Chapter 6 - SIXTH LECTURE - THE DIRECTION OF TIME T H E D I R E C T I O N O F T I M EIn his book, Th..." },
            { id: "c", text: "The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin a..." },
            { id: "d", text: "The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin a..." },
          ],
          correctOptionId: "c",
          explanation:
            "This question relates to Further Analysis: The Theory of Everything. The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin a...",
        },
        {
          id: "te-l07-q4",
          text: "Which of the following best describes a key idea from the section on Further Analysis: The Theory of Everything?",
          options: [
            { id: "a", text: "Chapter 6 - SIXTH LECTURE - THE DIRECTION OF TIME T H E D I R E C T I O N O F T I M EIn his book, Th..." },
            { id: "b", text: "Chapter 7 - SEVENTH LECTURE - THE THEORY OF EVERYTHING It would be very difficult to construct a com..." },
            { id: "c", text: "The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin a..." },
            { id: "d", text: "The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin a..." },
          ],
          correctOptionId: "c",
          explanation:
            "This question relates to Further Analysis: The Theory of Everything. The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin a...",
        },
        {
          id: "te-l07-q5",
          text: "Which of the following best describes a key idea from the section on Further Analysis: The Theory of Everything?",
          options: [
            { id: "a", text: "Chapter 6 - SIXTH LECTURE - THE DIRECTION OF TIME T H E D I R E C T I O N O F T I M EIn his book, Th..." },
            { id: "b", text: "The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin a..." },
            { id: "c", text: "Chapter 7 - SEVENTH LECTURE - THE THEORY OF EVERYTHING It would be very difficult to construct a com..." },
            { id: "d", text: "The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin a..." },
          ],
          correctOptionId: "b",
          explanation:
            "This question relates to Further Analysis: The Theory of Everything. The Theory of Everything: The Origin and Fate of the Universe The Theory of Everything: The Origin a...",
        },
      ],
    },
  ],
};
