import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:\My Drive\15_E-BOOKS\file002209.epub
// Author: Jiddu Krishnamurti  |  Subject: Philosophy/Education

export const BeginningsOfLearningJidduKrishnamurtiModule: LearningModule = {
  id: "beginnings-of-learning-jiddu-krishnamurti",
  title: "Beginnings of Learning",
  description:
    "An exploration of Jiddu Krishnamurti's radical philosophy of education, drawn from his dialogues with teachers and students. This module examines Krishnamurti's critique of conventional schooling, his vision of education as the cultivation of total awareness, and his insights into fear, authority, conditioning, and the nature of genuine learning.",
  subject: "Philosophy/Education",
  tags: ["epub-derived", "curriculum", "interactive", "philosophy", "education", "krishnamurti", "awareness", "conditioning"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  learningObjectives: [
    "Explain Krishnamurti's critique of conventional education as conditioning",
    "Analyse the distinction between accumulation of knowledge and genuine learning",
    "Evaluate Krishnamurti's concept of freedom from authority in education",
    "Describe the role of self-knowledge in the educational process",
    "Assess the relationship between fear and learning in Krishnamurti's thought",
    "Examine Krishnamurti's dialogical method as an educational practice",
    "Apply Krishnamurti's insights to contemporary debates in education",
  ],
  lessons: [
    {
      id: "bl-l01",
      title: "Education as Revolutionary Act",
      type: "video",
      duration: 12,
      objectives: [
        "Explain why Krishnamurti considers conventional education a form of conditioning",
        "Distinguish between education for career and education for life",
        "Describe Krishnamurti's vision of the school as a place of total human development",
      ],
      chunks: [
        {
          id: "bl-l01-c1",
          title: "The Failure of Conventional Education",
          content:
            "Krishnamurti begins from a radical premise: conventional education has failed because it serves the wrong purpose. Schools, as currently constituted, prepare students for careers — they transmit information, develop technical skills, and train pupils to compete successfully in the economic marketplace. But this vocational function, however necessary, addresses only a fraction of what it means to be human. It produces competent professionals who may be psychologically fragile, emotionally immature, and spiritually empty — people who know how to earn a living but not how to live. Krishnamurti argues that genuine education must address the whole human being: not only the intellect but the emotions, the body, the relationships, and the quality of attention that a person brings to every moment of life. Education that neglects these dimensions is not merely incomplete — it is actively harmful, because it trains human beings to be efficient instruments of a social order without ever questioning the values and assumptions on which that order rests.",
        },
        {
          id: "bl-l01-c2",
          title: "Conditioning and the Reproduction of Society",
          content:
            "All conventional education, Krishnamurti contends, is fundamentally a process of conditioning — of shaping the mind to conform to the patterns of the existing society. Schools teach children what to think, not how to think; they transmit the beliefs, values, prejudices, and ambitions of the society that funds them. The child enters school as a relatively open, curious being and emerges as a product of national, cultural, and economic conditioning — an Indian, an American, a Catholic, a capitalist — identified with a particular group and trained to compete with other groups. This conditioning is not accidental but structural: the examination system rewards conformity, the curriculum reflects dominant ideologies, and the authority structure of the classroom replicates the hierarchies of the larger society. Krishnamurti is not suggesting that cultural transmission is unnecessary — children need language, history, and skills — but that education that only transmits culture without cultivating the awareness to question it produces conformists, not free human beings.",
        },
        {
          id: "bl-l01-c3",
          title: "A Different Kind of School",
          content:
            "Krishnamurti founded several schools in India and England (including Brockwood Park in Hampshire and Rishi Valley in Andhra Pradesh) as laboratories for a different kind of education. In these schools, academic excellence is pursued alongside — not instead of — psychological self-understanding. Small group sizes, close teacher-student relationships, engagement with nature, and regular dialogues about the fundamental questions of human existence (What is fear? What is love? What is death? What is the purpose of living?) are integral to the curriculum. The teacher is not an authority who transmits knowledge from above but a fellow learner who investigates life alongside the student. This does not mean the teacher abdicates responsibility — Krishnamurti insists that teachers must be deeply competent in their subjects — but that the hierarchical relationship between knower and ignorant is dissolved in favour of a shared inquiry. The school, in this vision, is the most important institution in society because it is the place where the next generation can break free from the conditioning that perpetuates conflict, competition, and psychological suffering.",
        },
      ],
      flashcards: [
        {
          id: "bl-l01-f1",
          front: "Krishnamurti's critique of conventional education",
          back: "Schools prepare students for careers but neglect the whole human being — emotions, relationships, self-understanding. They produce competent professionals who may be psychologically fragile and spiritually empty.",
        },
        {
          id: "bl-l01-f2",
          front: "Education as conditioning",
          back: "Schools shape minds to conform to existing social patterns. The examination system rewards conformity, curricula reflect dominant ideologies, and classroom hierarchies replicate societal power structures.",
        },
        {
          id: "bl-l01-f3",
          front: "Krishnamurti's alternative schools",
          back: "Brockwood Park and Rishi Valley pursue academic excellence alongside self-understanding, with small groups, close relationships, nature engagement, and dialogues about fundamental human questions.",
        },
        {
          id: "bl-l01-f4",
          front: "Teacher as fellow learner",
          back: "The teacher is not an authority transmitting knowledge from above but a competent, engaged co-investigator — dissolving the hierarchical knower/ignorant relationship in favour of shared inquiry.",
        },
      ],
    },
    {
      id: "bl-l02",
      title: "Fear, Authority, and Freedom",
      type: "video",
      duration: 12,
      objectives: [
        "Analyse Krishnamurti's account of fear as a central obstacle to learning",
        "Explain the difference between functional authority and psychological authority",
        "Evaluate Krishnamurti's concept of freedom in the educational context",
      ],
      chunks: [
        {
          id: "bl-l02-c1",
          title: "Fear as the Enemy of Learning",
          content:
            "Krishnamurti identifies fear as the fundamental obstacle to genuine learning. A mind that is afraid — afraid of failure, of punishment, of disapproval, of the unknown — cannot learn because it is concerned with self-protection rather than with understanding. Fear narrows attention, constricts perception, and locks the mind into known patterns of response. In conventional classrooms, fear is systematically cultivated through examinations, grading, comparison, and competition. The child learns not because she is genuinely curious but because she is afraid of failing — and this fear follows her into adulthood, shaping her relationships, her career choices, and her entire orientation to life. Krishnamurti's observation is not that examinations are unnecessary (he acknowledges that some form of assessment may be needed) but that when fear becomes the primary motivator of learning, the learning itself is corrupted. The student who studies in order to pass an examination retains information temporarily and discards it once the examination is over — she has not learned but merely performed.",
        },
        {
          id: "bl-l02-c2",
          title: "Authority: Functional and Psychological",
          content:
            "Krishnamurti draws a crucial distinction between functional authority and psychological authority. Functional authority is the authority of competence: the surgeon who knows how to operate, the engineer who knows how to build a bridge, the teacher who understands mathematics. This kind of authority is legitimate and necessary — it is based on actual knowledge and skill. Psychological authority, by contrast, is the authority that demands obedience, conformity, and submission — the parent who says 'do as I say because I am your parent,' the guru who says 'believe what I tell you because I am enlightened,' the teacher who says 'accept this because I am the teacher.' This kind of authority is destructive because it replaces the student's own inquiry with borrowed conclusions. The student who accepts truth on authority has not discovered truth — she has acquired a belief, which is fundamentally different. Krishnamurti's educational philosophy insists on the elimination of psychological authority while preserving functional competence.",
        },
        {
          id: "bl-l02-c3",
          title: "Freedom as the Beginning, Not the Goal",
          content:
            "Freedom, for Krishnamurti, is not the reward of education but its precondition. A mind that is not free — that is burdened by fear, authority, comparison, and ambition — cannot learn because it is not open to the new. It can only rearrange what it already knows within the framework of what it has been conditioned to accept. Genuine learning requires the freedom to question, to doubt, to make mistakes, and to discover for oneself what is true — not as a theoretical possibility but as a lived reality in every moment of the educational process. This does not mean permissiveness or the absence of structure. Krishnamurti is emphatic that freedom is not licence — doing whatever one wants is merely another form of conditioning (the conditioning of desire). Freedom is the quality of attention that arises when the mind is not dominated by fear, ambition, or the desire for approval. It is a disciplined awareness, not an anarchic impulse. The school must create an atmosphere in which this quality of freedom is possible — and this requires teachers who are themselves free, who are investigating their own conditioning alongside their students.",
        },
      ],
      flashcards: [
        {
          id: "bl-l02-f1",
          front: "Fear as learning obstacle",
          back: "Fear narrows attention and locks the mind into self-protection. Conventional education systematically cultivates fear through examinations, grading, and competition — corrupting learning into performance.",
        },
        {
          id: "bl-l02-f2",
          front: "Functional vs psychological authority",
          back: "Functional authority (competence-based) is legitimate. Psychological authority (demanding obedience because of status) is destructive — it replaces the student's own inquiry with borrowed conclusions.",
        },
        {
          id: "bl-l02-f3",
          front: "Freedom as precondition, not reward",
          back: "Freedom is not the goal of education but its starting point. A mind not free from fear, authority, and ambition cannot learn — it can only rearrange what it already knows within its conditioning.",
        },
        {
          id: "bl-l02-f4",
          front: "Freedom is not licence",
          back: "Krishnamurti distinguishes freedom from permissiveness. Freedom is disciplined awareness — attention free from internal domination — not doing whatever one wants, which is merely conditioning by desire.",
        },
      ],
    },
    {
      id: "bl-l03",
      title: "Self-Knowledge and the Art of Observation",
      type: "video",
      duration: 13,
      objectives: [
        "Explain why Krishnamurti considers self-knowledge the foundation of all education",
        "Describe the practice of choiceless awareness as an educational method",
        "Assess the implications of Krishnamurti's approach for the relationship between teacher and student",
      ],
      chunks: [
        {
          id: "bl-l03-c1",
          title: "Self-Knowledge as Foundation",
          content:
            "Krishnamurti's most fundamental educational thesis is that self-knowledge is the beginning and end of all genuine education. By self-knowledge he does not mean introspective analysis — standing apart from oneself and examining one's psychological mechanisms — but a direct, immediate awareness of one's own thoughts, feelings, reactions, and patterns as they occur in the present moment. Why is this fundamental? Because, Krishnamurti argues, we do not perceive the world directly — we perceive it through the filter of our conditioning: our beliefs, fears, desires, prejudices, and accumulated experiences. A person who does not understand her own conditioning inevitably projects it onto everything she encounters — she sees the world not as it is but as her conditioning allows her to see it. Therefore, the most important knowledge is not knowledge of the external world but knowledge of the instrument through which we know the external world: the mind itself. Without self-knowledge, all other knowledge is distorted.",
        },
        {
          id: "bl-l03-c2",
          title: "Choiceless Awareness",
          content:
            "The method Krishnamurti proposes for cultivating self-knowledge is what he calls 'choiceless awareness' — the practice of observing one's own mental and emotional processes without judgment, without choice, and without the desire to change them. When you are angry, you observe the anger without condemning it, without justifying it, and without trying to transform it into something else. You simply watch — with full attention, without the division between the observer and the observed. This practice is not a technique to be learned and applied mechanically; it is a quality of attention that arises naturally when the mind is genuinely interested in understanding itself. The key insight is that the usual approach to psychological problems — analyse them, find their causes, devise strategies for change — is itself part of the problem, because it divides the mind into the observer (who judges) and the observed (who is judged), perpetuating conflict. Choiceless awareness dissolves this division: there is only the observing, and in that observing, understanding arises without effort.",
        },
        {
          id: "bl-l03-c3",
          title: "The Teacher Who Is Also Learning",
          content:
            "If self-knowledge is the foundation of education, then the teacher's relationship to her own conditioning becomes the most important factor in the classroom. Krishnamurti insists that a teacher who is not actively investigating her own prejudices, fears, ambitions, and patterns of reaction cannot help students investigate theirs — she will inevitably transmit her conditioning rather than fostering genuine inquiry. The teacher who is authoritarian will produce students who are either submissive or rebellious (both responses to authority); the teacher who is anxious about results will produce students who are anxious about results. The medium is the message: the quality of the teacher's own awareness is what the student actually 'learns,' regardless of the subject content. This places an enormous demand on teachers — not to be perfect, but to be honest: to acknowledge their own conditioning, to investigate it openly, and to model the quality of self-questioning attention that they hope to cultivate in their students. The classroom becomes a space of mutual investigation, not a stage for the performance of expertise.",
        },
      ],
      flashcards: [
        {
          id: "bl-l03-f1",
          front: "Self-knowledge as educational foundation",
          back: "We perceive the world through our conditioning. Without understanding the instrument of knowing (the mind itself), all other knowledge is distorted. Self-knowledge is therefore the beginning of all genuine education.",
        },
        {
          id: "bl-l03-f2",
          front: "Choiceless awareness",
          back: "Observing one's own mental and emotional processes without judgment, choice, or desire to change them. Dissolves the division between observer and observed, allowing understanding to arise without effort.",
        },
        {
          id: "bl-l03-f3",
          front: "The medium is the message (education)",
          back: "The quality of the teacher's own awareness is what students actually learn, regardless of subject content. An authoritarian teacher produces submissive or rebellious students; an anxious teacher produces anxious students.",
        },
        {
          id: "bl-l03-f4",
          front: "Mutual investigation in the classroom",
          back: "The teacher models self-questioning attention by investigating her own conditioning alongside students — the classroom becomes a space of shared inquiry, not a stage for performing expertise.",
        },
      ],
    },
    {
      id: "bl-l04",
      title: "Checkpoint Quiz: Krishnamurti's Educational Philosophy",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of fear, authority, freedom, and self-knowledge in Krishnamurti's thought"],
      questions: [
        {
          id: "bl-l04-q1",
          text: "Why does Krishnamurti argue that fear-based motivation corrupts learning?",
          options: [
            { id: "a", text: "Fear improves memory retention and should be encouraged" },
            { id: "b", text: "A mind afraid of failure is concerned with self-protection, not understanding — the student performs rather than learns, retaining information temporarily and discarding it after the test" },
            { id: "c", text: "Fear only affects physical education, not academic subjects" },
            { id: "d", text: "Fear is beneficial in small doses" },
          ],
          correctOptionId: "b",
          explanation: "Fear narrows attention and converts learning into performance. The student who studies to pass an exam has not genuinely learned — she has temporarily memorised information under duress.",
        },
        {
          id: "bl-l04-q2",
          text: "What is the difference between functional and psychological authority?",
          options: [
            { id: "a", text: "Functional authority is based on age; psychological authority is based on knowledge" },
            { id: "b", text: "Functional authority is the legitimate authority of competence (the surgeon who can operate); psychological authority demands obedience based on status and replaces the student's own inquiry with borrowed conclusions" },
            { id: "c", text: "They are identical — all authority is psychological" },
            { id: "d", text: "Functional authority is temporary; psychological authority is permanent" },
          ],
          correctOptionId: "b",
          explanation: "Functional authority rests on demonstrable skill. Psychological authority demands submission regardless of competence. Krishnamurti advocates eliminating the latter while preserving the former.",
        },
        {
          id: "bl-l04-q3",
          text: "Why does Krishnamurti say freedom is NOT the same as licence?",
          options: [
            { id: "a", text: "Because freedom requires a government license" },
            { id: "b", text: "Because doing whatever one wants is merely another form of conditioning — the conditioning of desire. Freedom is disciplined awareness, not anarchic impulse" },
            { id: "c", text: "Because only adults can have freedom" },
            { id: "d", text: "Because freedom must be earned through examination results" },
          ],
          correctOptionId: "b",
          explanation: "Permissiveness is not freedom — it is slavery to desire. Genuine freedom is attention free from internal domination by fear, ambition, or the need for approval.",
        },
        {
          id: "bl-l04-q4",
          text: "Choiceless awareness involves:",
          options: [
            { id: "a", text: "Choosing the most positive thoughts and suppressing negative ones" },
            { id: "b", text: "Observing one's own mental and emotional processes without judgment, choice, or desire to change them — dissolving the division between observer and observed" },
            { id: "c", text: "Reaching a state of no thoughts at all" },
            { id: "d", text: "Analysing one's childhood memories with a therapist" },
          ],
          correctOptionId: "b",
          explanation: "Choiceless awareness is non-judgmental observation of one's own processes as they occur. It dissolves the observer/observed split that perpetuates psychological conflict.",
        },
        {
          id: "bl-l04-q5",
          text: "Why is the teacher's own self-knowledge the most important factor in education?",
          options: [
            { id: "a", text: "Because students automatically copy the teacher's subject knowledge" },
            { id: "b", text: "Because the quality of the teacher's own awareness is what students actually learn — a teacher who hasn't investigated her own conditioning will inevitably transmit it rather than fostering genuine inquiry" },
            { id: "c", text: "Because teachers must pass a self-knowledge examination" },
            { id: "d", text: "Because students only respect teachers who are emotionally distant" },
          ],
          correctOptionId: "b",
          explanation: "The medium is the message: the teacher's attitude, fears, and patterns of reaction are absorbed by students regardless of subject content. Only a teacher investigating her own conditioning can model genuine inquiry.",
        },
      ],
    },
    {
      id: "bl-l05",
      title: "Thought, Knowledge, and Intelligence",
      type: "video",
      duration: 12,
      objectives: [
        "Distinguish between knowledge and intelligence in Krishnamurti's framework",
        "Analyse Krishnamurti's critique of thought as a limited instrument",
        "Explain the relationship between knowledge, thought, and psychological suffering",
      ],
      chunks: [
        {
          id: "bl-l05-c1",
          title: "The Limits of Thought",
          content:
            "Krishnamurti draws a fundamental distinction between thought and intelligence. Thought is the response of memory — the accumulated store of past experience, knowledge, and conditioning. When you see a snake and recoil, that is thought: memory recognising danger and triggering an appropriate response. Thought is mechanical, repetitive, and rooted in the known. It is indispensable for practical, technical, and scientific purposes — you cannot build a bridge or perform surgery without accumulated knowledge. But thought becomes destructive when it is applied to psychological problems, because these problems are not technical: they cannot be solved by rearranging what one already knows. Fear, jealousy, loneliness, the search for meaning — these arise precisely from the activity of thought itself (from memory, comparison, and projection into the future). Using thought to solve the problems created by thought is like using a knife to sharpen itself. Intelligence, by contrast, is the quality of perception that arises when thought recognises its own limitations and falls silent — not suppressed, but naturally quiet, having seen that it cannot go further.",
        },
        {
          id: "bl-l05-c2",
          title: "Knowledge and the Known",
          content:
            "In the educational context, Krishnamurti's distinction between knowledge and intelligence has radical implications. Schools overwhelmingly emphasise the accumulation of knowledge — the memorisation of facts, formulas, dates, and theories. Knowledge is obviously necessary: you cannot function in the world without it. But knowledge is always about the past — it is the record of what has already been discovered, experienced, and formulated. Education that consists exclusively of knowledge accumulation trains the mind to operate within the known and fosters the illusion that understanding is reached by adding more and more information. But the most important moments of human life — encountering death, falling in love, experiencing beauty, confronting moral dilemmas — cannot be met with accumulated knowledge, because they are new in each instance. They require a quality of fresh perception — intelligence — that can respond to the present moment without the interference of past conditioning. Krishnamurti does not oppose knowledge but insists that it must be accompanied by the awareness that knowledge is always limited and that the truly important things in life lie beyond its reach.",
        },
        {
          id: "bl-l05-c3",
          title: "Psychological Suffering and Thought",
          content:
            "Krishnamurti's most provocative claim is that psychological suffering — fear, anxiety, loneliness, despair — is generated by thought itself, not by external circumstances. The fear of death, for example, is not produced by death (which has not yet occurred) but by thought's projection of the future — the image of one's own non-existence. Jealousy is not produced by the partner's behaviour but by thought's comparison of what is (the partner talking to someone) with what thought desires (exclusive possession). If education does not address the role of thought in generating suffering, it leaves students helpless before the fundamental challenges of human existence, no matter how technically proficient they become. This is why Krishnamurti insists that self-knowledge — the direct observation of how thought operates in one's own mind — is not a luxury or a spiritual extra but the most essential and practical form of education. A person who understands how her own thinking generates suffering is in a fundamentally different position from one who does not.",
        },
      ],
      flashcards: [
        {
          id: "bl-l05-f1",
          front: "Thought vs intelligence (Krishnamurti)",
          back: "Thought is the mechanical response of memory — useful for technical tasks but destructive when applied to psychological problems it itself creates. Intelligence is fresh perception that arises when thought recognises its own limits.",
        },
        {
          id: "bl-l05-f2",
          front: "Knowledge is always about the past",
          back: "Knowledge records what has been discovered. The most important human experiences — death, love, beauty, moral dilemmas — are new in each instance and require intelligence (fresh perception), not accumulated information.",
        },
        {
          id: "bl-l05-f3",
          front: "Thought generates psychological suffering",
          back: "Fear, anxiety, jealousy, and despair are produced not by external circumstances but by thought's projections, comparisons, and images. Understanding this mechanism is the most practical form of education.",
        },
        {
          id: "bl-l05-f4",
          front: "Self-knowledge as practical education",
          back: "A person who understands how her own thinking generates suffering is in a fundamentally different position from one who does not — making self-observation the most essential (not optional) form of education.",
        },
      ],
    },
    {
      id: "bl-l06",
      title: "Dialogue, Relationship, and Learning Together",
      type: "video",
      duration: 12,
      objectives: [
        "Describe Krishnamurti's dialogical method and how it differs from debate",
        "Explain the role of relationship in learning",
        "Assess the contemporary relevance of Krishnamurti's educational philosophy",
      ],
      chunks: [
        {
          id: "bl-l06-c1",
          title: "Dialogue as Shared Inquiry",
          content:
            "The Beginnings of Learning consists largely of recorded dialogues between Krishnamurti and teachers, students, and parents at his schools. These dialogues are not debates (where each party defends a position) or Socratic questionings (where the questioner already knows the answer). They are genuine shared inquiries in which all participants — including Krishnamurti — explore a question together without knowing the answer in advance. The quality of attention is more important than the conclusion: the participants listen not to refute but to understand, they follow the movement of thought as it unfolds, and they are willing to abandon their positions when the inquiry reveals them to be inadequate. This dialogical method is itself an educational practice: it demonstrates what it means to learn together, to think without motives, and to give complete attention to a question without the anxiety of needing to find a definitive answer. The dialogue does not reach a final answer because Krishnamurti holds that the understanding of truth is not a destination but a continuous process of observation.",
        },
        {
          id: "bl-l06-c2",
          title: "Relationship as the Mirror of Self",
          content:
            "Krishnamurti insists that self-knowledge cannot be achieved in isolation — it requires relationship. It is in relationship with others — with students, colleagues, family, strangers — that one's conditioning is activated and made visible. In isolation, fear, jealousy, ambition, and aggression remain latent; in relationship, they manifest and can be observed. The classroom, therefore, is not merely a venue for transferring information but a laboratory of relationship in which both teacher and student can observe their own reactions and patterns. When a teacher becomes irritated with a student's question, that irritation is not merely an obstacle to good teaching — it is an opportunity for self-observation. When a student feels competitive with a classmate, that competitiveness is not merely a social problem — it is a window into the student's conditioning. Education, in this framework, is the cultivation of awareness within the field of relationship — learning to see oneself in the mirror of one's interactions with others.",
        },
        {
          id: "bl-l06-c3",
          title: "Contemporary Relevance",
          content:
            "Krishnamurti's educational philosophy, developed primarily in the 1960s and 1970s, has acquired renewed relevance in the twenty-first century. The crisis of mental health among young people — rising rates of anxiety, depression, self-harm, and suicide — confirms his warning that an education focused exclusively on career preparation while neglecting psychological well-being produces suffering. The epidemic of social media comparison, performance anxiety, and identity fragmentation echoes his analysis of fear, competition, and the search for approval as barriers to genuine learning. His emphasis on self-knowledge, mindful attention, and the cultivation of emotional intelligence anticipates contemporary developments in social-emotional learning (SEL), mindfulness-based education, and contemplative pedagogy. At the same time, Krishnamurti's philosophy challenges these contemporary movements by questioning whether techniques and programmes — however well-intentioned — can cultivate genuine awareness, or whether they merely create new forms of conditioning. His insistence that transformation cannot be programmed but must arise from direct, honest observation of oneself remains profoundly provocative.",
        },
      ],
      flashcards: [
        {
          id: "bl-l06-f1",
          front: "Krishnamurti's dialogical method",
          back: "Not debate or Socratic questioning but genuine shared inquiry where all participants explore without knowing the answer. The quality of attention matters more than reaching a conclusion.",
        },
        {
          id: "bl-l06-f2",
          front: "Relationship as mirror of self",
          back: "Conditioning (fear, jealousy, ambition) becomes visible in relationship. The classroom is a laboratory where teacher and student observe their own reactions — learning to see oneself in one's interactions.",
        },
        {
          id: "bl-l06-f3",
          front: "Contemporary relevance of Krishnamurti",
          back: "Youth mental health crisis, social media comparison, and performance anxiety confirm his warnings. His emphasis on self-knowledge anticipates SEL and mindfulness education, while questioning whether techniques can cultivate genuine awareness.",
        },
        {
          id: "bl-l06-f4",
          front: "Transformation cannot be programmed",
          back: "Krishnamurti challenges even well-intentioned mindfulness programmes by arguing that genuine awareness arises from direct, honest self-observation — not from externally imposed techniques, which may create new conditioning.",
        },
      ],
    },
    {
      id: "bl-l07",
      title: "Final Assessment: Krishnamurti and Education",
      type: "quiz",
      duration: 9,
      objectives: ["Evaluate comprehensive understanding of Krishnamurti's educational philosophy"],
      questions: [
        {
          id: "bl-l07-q1",
          text: "Krishnamurti considers conventional education fundamentally flawed because:",
          options: [
            { id: "a", text: "It teaches subjects that are too difficult for children" },
            { id: "b", text: "It prepares students for careers but neglects psychological well-being, emotional maturity, and self-understanding — producing competent professionals who may suffer deeply" },
            { id: "c", text: "It does not use enough technology in the classroom" },
            { id: "d", text: "It gives students too much freedom" },
          ],
          correctOptionId: "b",
          explanation: "Conventional education addresses only the vocational dimension of human life. By neglecting the psychological, emotional, and relational dimensions, it produces people who can earn a living but do not know how to live.",
        },
        {
          id: "bl-l07-q2",
          text: "Why does Krishnamurti distinguish thought from intelligence?",
          options: [
            { id: "a", text: "Because thought is useless and should be eliminated" },
            { id: "b", text: "Because thought is the mechanical response of memory (useful for technical tasks) while intelligence is fresh perception arising when thought recognises its own limitations — psychological problems require intelligence, not more thought" },
            { id: "c", text: "Because intelligence is measured by IQ tests" },
            { id: "d", text: "Because thought belongs to the body and intelligence to the soul" },
          ],
          correctOptionId: "b",
          explanation: "Thought draws on the past; intelligence perceives the present freshly. Using thought to solve problems created by thought is circular. Intelligence emerges when thought sees its own limits and naturally falls silent.",
        },
        {
          id: "bl-l07-q3",
          text: "Choiceless awareness differs from ordinary self-analysis in that:",
          options: [
            { id: "a", text: "It is performed only by trained psychologists" },
            { id: "b", text: "It observes without judging, choosing, or wanting to change — dissolving the division between observer and observed that perpetuates psychological conflict" },
            { id: "c", text: "It requires no attention at all" },
            { id: "d", text: "It analyses past memories to find root causes" },
          ],
          correctOptionId: "b",
          explanation: "Ordinary analysis divides the mind into observer (who judges) and observed (who is judged), maintaining conflict. Choiceless awareness dissolves this split: there is only observing, and understanding arises naturally.",
        },
        {
          id: "bl-l07-q4",
          text: "Krishnamurti's dialogical method is NOT:",
          options: [
            { id: "a", text: "A genuine shared inquiry where all participants explore without a predetermined answer" },
            { id: "b", text: "A practice where the quality of attention matters more than reaching conclusions" },
            { id: "c", text: "A debate where each party defends their position and tries to win the argument" },
            { id: "d", text: "A process where participants are willing to abandon positions revealed as inadequate" },
          ],
          correctOptionId: "c",
          explanation: "Krishnamurti's dialogues are neither debates (position defence) nor Socratic questioning (the questioner knows the answer). They are open explorations where listening to understand replaces arguing to win.",
        },
        {
          id: "bl-l07-q5",
          text: "How does Krishnamurti challenge modern mindfulness education programmes?",
          options: [
            { id: "a", text: "He argues that any meditation practice is harmful" },
            { id: "b", text: "He questions whether externally imposed techniques can cultivate genuine awareness — they may create new forms of conditioning rather than real transformation" },
            { id: "c", text: "He believes only traditional religious practices are valid" },
            { id: "d", text: "He argues that mindfulness is only for adults" },
          ],
          correctOptionId: "b",
          explanation: "Krishnamurti's provocation is that genuine awareness cannot be programmed. Techniques and programmes, however well-intentioned, may produce a new kind of conformity rather than the direct, honest self-observation that transforms.",
        },
        {
          id: "bl-l07-q6",
          text: "Why does Krishnamurti insist that self-knowledge requires relationship?",
          options: [
            { id: "a", text: "Because people are happier when they have friends" },
            { id: "b", text: "Because conditioning (fear, jealousy, ambition) remains latent in isolation but manifests in relationship — relationship is the mirror in which one's patterns become visible and can be observed" },
            { id: "c", text: "Because self-knowledge can only be taught by a guru" },
            { id: "d", text: "Because studying alone is less efficient than group study" },
          ],
          correctOptionId: "b",
          explanation: "In isolation, psychological patterns stay hidden. In relationship, they activate: irritation, competition, desire for approval become visible. The classroom is a laboratory of relationship where both teacher and student can observe their conditioning.",
        },
      ],
    },
  ],
};
