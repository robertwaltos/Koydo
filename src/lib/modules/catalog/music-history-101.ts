import type { LearningModule } from "@/lib/modules/types";

export const MusicHistory101Module: LearningModule = {
  id: "music-history-101",
  title: "Music History: Medieval to Modern",
  description:
    "Journey through a thousand years of Western music — from Gregorian chant to hip-hop. Meet the composers, understand the cultural forces, and hear how each era shaped the next.",
  subject: "Music",
  tags: ["core", "curriculum", "interactive", "music", "history"],
  minAge: 10,
  maxAge: 18,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  learningObjectives: [
    "Place the major musical periods on a timeline (Medieval, Renaissance, Baroque, Classical, Romantic, 20th Century, Modern)",
    "Identify key composers and works from each era",
    "Explain how cultural, technological, and social changes shaped musical evolution",
    "Recognize stylistic features of each period by listening",
    "Understand the development of notation, instruments, and performance practice",
    "Connect historical music trends to modern genres",
    "Describe the impact of recording technology on music distribution and style"
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  Medieval Music (500–1400)  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-history-101-l01",
      title: "Medieval Music: Sacred Beginnings",
      type: "video",
      duration: 12,
      objectives: [
        "Describe Gregorian chant and its role in medieval worship",
        "Explain the development of early notation (neumes)",
        "Identify the emergence of polyphony in the Notre Dame school"
      ],
      chunks: [
        {
          id: "music-history-101-l01-c1",
          title: "Gregorian Chant",
          content:
            "For centuries, Western music meant one thing: Gregorian chant. These monophonic (single-melody) sacred songs were sung in Latin by monks and choirs in churches across Europe. Chant had no fixed rhythm — it followed the natural flow of the text. It was named after Pope Gregory I (c. 540–604), who was traditionally credited with organizing the repertoire, though the chants evolved over centuries."
        },
        {
          id: "music-history-101-l01-c2",
          title: "The Birth of Notation",
          content:
            "Before notation, music was passed down by ear. Around the 9th century, monks began writing small marks called neumes above the text to show melodic direction (up or down). By the 11th century, Guido d'Arezzo developed the staff system and solmization (do, re, mi) — tools we still use today. Notation transformed music from an oral tradition into something that could be precisely composed, shared, and preserved."
        },
        {
          id: "music-history-101-l01-c3",
          title: "Early Polyphony",
          content:
            "Around 1100, composers at Notre Dame in Paris began adding a second voice to chant — the birth of polyphony (multiple simultaneous melodies). Léonin wrote organum in two voices; his successor Pérotin expanded to three and four voices. This was revolutionary: music was no longer a single line but a layered, vertical structure. Polyphony would become the defining feature of Western art music."
        }
      ],
      flashcards: [
        { id: "music-history-101-l01-fc-1", front: "Gregorian chant", back: "Monophonic sacred song in Latin, the dominant music of medieval Europe, named after Pope Gregory I" },
        { id: "music-history-101-l01-fc-2", front: "Neumes", back: "Early notation symbols written above text to indicate melodic direction — the ancestors of modern notes" },
        { id: "music-history-101-l01-fc-3", front: "Polyphony", back: "Music with two or more simultaneous independent melodic lines — pioneered at Notre Dame, Paris c. 1100" },
        { id: "music-history-101-l01-fc-4", front: "Guido d'Arezzo", back: "11th-century monk who developed the musical staff and solmization (do, re, mi, fa, sol, la)" }
      ]
    },

    /* ──────────────────────────────────────────────
       L02  Renaissance Music (1400–1600)  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-history-101-l02",
      title: "Renaissance: The Golden Age of Vocal Music",
      type: "interactive",
      duration: 13,
      objectives: [
        "Describe the texture and style of Renaissance polyphony",
        "Identify Josquin, Palestrina, and their contributions",
        "Explain how the Protestant Reformation changed church music"
      ],
      chunks: [
        {
          id: "music-history-101-l02-c1",
          title: "A Cappella Polyphony",
          content:
            "The Renaissance (1400–1600) was the golden age of vocal polyphony. Composers like Josquin des Prez, Palestrina, and William Byrd wrote intricate pieces for unaccompanied choir (a cappella). The texture was smooth, flowing, and balanced — every voice was equal in importance. The ideal was a seamless blend of voices, and the result was some of the most beautiful choral music ever written."
        },
        {
          id: "music-history-101-l02-c2",
          title: "Secular Music Flourishes",
          content:
            "Music wasn't only for church. The Italian madrigal (a secular vocal piece for 4-5 voices) became wildly popular. Composers used 'word painting' — making the music literally depict the text. A word like 'rising' would be set to ascending notes; 'death' might get a dissonant chord. In England, the lute song and theater music flourished. Music became entertainment, not just worship."
        },
        {
          id: "music-history-101-l02-c3",
          title: "Reformation and Counter-Reformation",
          content:
            "Martin Luther's Protestant Reformation (1517) transformed church music. Luther believed congregations should sing in their own language, so he wrote hymns (chorales) in German — simple, memorable tunes everyone could sing. The Catholic Counter-Reformation responded by commissioning clearer, more text-intelligible polyphony — Palestrina's masses became the gold standard. Both movements democratized sacred music."
        }
      ],
      activities: [
        {
          id: "music-history-101-l02-a1",
          title: "Match the Pairs",
          type: "matching_pairs",
          pairs: [
            { id: "music-history-101-l02-a-1-p1", left: "Josquin des Prez", right: "Master of Renaissance polyphony; 'Prince of Music'" },
            { id: "music-history-101-l02-a-1-p2", left: "Palestrina", right: "Counter-Reformation ideal; clear, balanced sacred polyphony" },
            { id: "music-history-101-l02-a-1-p3", left: "Martin Luther", right: "Protestant Reformation; congregational hymns (chorales)" },
            { id: "music-history-101-l02-a-1-p4", left: "William Byrd", right: "English Renaissance; masses, motets, and keyboard music" },
            { id: "music-history-101-l02-a-1-p5", left: "Madrigal", right: "Secular vocal piece with word painting; popular in Italy" },
            { id: "music-history-101-l02-a-1-p6", left: "Word painting", right: "Music that literally depicts the meaning of the text" }
          ]
        }
      ],
      flashcards: [
        { id: "music-history-101-l02-fc-1", front: "A cappella", back: "Vocal music performed without instrumental accompaniment — the primary texture of Renaissance sacred music" },
        { id: "music-history-101-l02-fc-2", front: "Madrigal", back: "A secular vocal composition for 4-5 voices, popular in Italy and England, known for word painting" },
        { id: "music-history-101-l02-fc-3", front: "Chorale", back: "A hymn tune for congregational singing, introduced by Martin Luther during the Protestant Reformation" }
      ]
    },

    /* ──────────────────────────────────────────────
       L03  Medieval & Renaissance Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-history-101-l03",
      title: "Medieval & Renaissance Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: [
        "Demonstrate knowledge of medieval and Renaissance music history"
      ],
      quizQuestions: [
        {
          id: "music-history-101-l03-q-1",
          question: "What is Gregorian chant?",
          options: [
            "Polyphonic organ music from Germany",
            "Monophonic sacred song sung in Latin",
            "Renaissance dance music for lute",
            "A type of medieval folk song"
          ],
          correctIndex: 1
        },
        {
          id: "music-history-101-l03-q-2",
          question: "Who developed the musical staff and solmization (do, re, mi)?",
          options: ["Pope Gregory I", "Léonin", "Guido d'Arezzo", "Palestrina"],
          correctIndex: 2
        },
        {
          id: "music-history-101-l03-q-3",
          question: "'Word painting' in a madrigal means:",
          options: [
            "Writing lyrics on a painted scroll",
            "Music that literally depicts the meaning of the text",
            "Painting portraits of composers",
            "Using colors to represent different notes"
          ],
          correctIndex: 1
        },
        {
          id: "music-history-101-l03-q-4",
          question: "Martin Luther's chorales were significant because they:",
          options: [
            "Were written in complex Latin polyphony",
            "Allowed congregations to sing in their own language",
            "Were only performed by professional choirs",
            "Eliminated all instruments from church"
          ],
          correctIndex: 1
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      }
    },

    /* ──────────────────────────────────────────────
       L04  Baroque Music (1600–1750)  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-history-101-l04",
      title: "Baroque: Drama, Virtuosity, and Bach",
      type: "video",
      duration: 13,
      objectives: [
        "Describe the Baroque emphasis on contrast, ornamentation, and emotional expression",
        "Identify Bach, Handel, and Vivaldi and their landmark works",
        "Explain the development of opera, concerto, and fugue"
      ],
      chunks: [
        {
          id: "music-history-101-l04-c1",
          title: "The Birth of Opera",
          content:
            "Around 1600, Italian composers invented opera — drama set entirely to music. Claudio Monteverdi's 'L'Orfeo' (1607) is the first great opera. Opera combined singing, acting, orchestral music, and elaborate staging. It introduced recitative (speech-like singing for dialogue) and aria (emotional solo songs). Opera became the most popular entertainment in Europe and drove musical innovation for the next 400 years."
        },
        {
          id: "music-history-101-l04-c2",
          title: "Bach and the Fugue",
          content:
            "Johann Sebastian Bach (1685–1750) is often considered the greatest composer in Western history. His fugues — complex pieces where a theme enters in one voice, then is imitated by others in a structured web of counterpoint — are marvels of musical architecture. His 'Well-Tempered Clavier' (48 preludes and fugues) explored every major and minor key. He also wrote orchestral suites, cantatas, and the monumental Mass in B Minor."
        },
        {
          id: "music-history-101-l04-c3",
          title: "Handel, Vivaldi, and the Concerto",
          content:
            "George Frideric Handel mastered opera and oratorio — his 'Messiah' (1741) remains one of the most performed choral works. Antonio Vivaldi pioneered the solo concerto, most famously 'The Four Seasons' (1725) — four violin concertos that musically depict spring, summer, autumn, and winter. The Baroque concerto featured soloists contrasting with a larger ensemble (concerto grosso), establishing the virtuoso tradition."
        }
      ],
      flashcards: [
        { id: "music-history-101-l04-fc-1", front: "Opera", back: "A dramatic work set entirely to music, combining singing, acting, and orchestra — invented c. 1600 in Italy" },
        { id: "music-history-101-l04-fc-2", front: "Fugue", back: "A contrapuntal composition where a subject enters in one voice and is imitated by others in a structured pattern" },
        { id: "music-history-101-l04-fc-3", front: "Basso continuo", back: "The Baroque accompaniment practice: a bass line played by cello/bassoon with chords filled in by harpsichord/organ" },
        { id: "music-history-101-l04-fc-4", front: "J. S. Bach", back: "1685–1750; German composer; master of counterpoint; wrote fugues, cantatas, concertos, and the Mass in B Minor" }
      ]
    },

    /* ──────────────────────────────────────────────
       L05  Classical Period (1750–1820)  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-history-101-l05",
      title: "Classical: Elegance and Structure",
      type: "interactive",
      duration: 13,
      objectives: [
        "Describe Classical period ideals: clarity, balance, and formal structure",
        "Identify Haydn, Mozart, and Beethoven and their innovations",
        "Explain sonata form and the development of the symphony"
      ],
      chunks: [
        {
          id: "music-history-101-l05-c1",
          title: "Classical Ideals",
          content:
            "After the ornate Baroque, the Classical period (1750–1820) valued clarity, balance, and elegance. Melodies were singable and phrase-based (often 4+4 bar periods). Textures lightened: instead of dense counterpoint, a clear melody over simple accompaniment dominated. The harpsichord gave way to the piano (capable of dynamics — soft and loud). Music became less church-centered and more for public concerts and aristocratic entertainment."
        },
        {
          id: "music-history-101-l05-c2",
          title: "The Symphony and Sonata Form",
          content:
            "Haydn ('Father of the Symphony') standardized the four-movement symphony and string quartet. Sonata form — the most important structure in Classical music — organizes a movement into exposition (two contrasting themes), development (themes fragmented and explored in new keys), and recapitulation (themes return in the home key). Mozart perfected sonata form in symphonies, concertos, and operas."
        },
        {
          id: "music-history-101-l05-c3",
          title: "Beethoven: Bridge to Romanticism",
          content:
            "Ludwig van Beethoven (1770–1827) began in the Classical style but exploded its boundaries. His symphonies grew longer, louder, and more emotionally intense. The 'Eroica' (Symphony No. 3) redefined what a symphony could be. His late works — particularly the Ninth Symphony with its choral finale — pointed directly to the Romantic era. Despite progressive deafness, he composed some of the most powerful music ever written."
        }
      ],
      activities: [
        {
          id: "music-history-101-l05-a1",
          title: "Sort into Categories",
          type: "sorting_buckets",
          buckets: ["Baroque (1600–1750)", "Classical (1750–1820)"],
          items: [
            { id: "music-history-101-l05-a-1-i1", text: "Dense counterpoint and fugues", bucket: "Baroque (1600–1750)" },
            { id: "music-history-101-l05-a-1-i2", text: "Clear melody over simple accompaniment", bucket: "Classical (1750–1820)" },
            { id: "music-history-101-l05-a-1-i3", text: "Harpsichord as main keyboard", bucket: "Baroque (1600–1750)" },
            { id: "music-history-101-l05-a-1-i4", text: "Piano replaces harpsichord", bucket: "Classical (1750–1820)" },
            { id: "music-history-101-l05-a-1-i5", text: "Concerto grosso", bucket: "Baroque (1600–1750)" },
            { id: "music-history-101-l05-a-1-i6", text: "Sonata form and symphony", bucket: "Classical (1750–1820)" },
            { id: "music-history-101-l05-a-1-i7", text: "Basso continuo accompaniment", bucket: "Baroque (1600–1750)" },
            { id: "music-history-101-l05-a-1-i8", text: "Singable, balanced 4-bar phrases", bucket: "Classical (1750–1820)" }
          ]
        }
      ],
      flashcards: [
        { id: "music-history-101-l05-fc-1", front: "Sonata form", back: "Exposition (two themes) → Development (themes explored) → Recapitulation (themes return) — the central Classical structure" },
        { id: "music-history-101-l05-fc-2", front: "Haydn", back: "'Father of the Symphony' and string quartet; standardized Classical forms at the Esterházy court" },
        { id: "music-history-101-l05-fc-3", front: "Mozart", back: "1756–1791; Austrian prodigy; perfected opera, symphony, concerto, and chamber music in the Classical style" },
        { id: "music-history-101-l05-fc-4", front: "Beethoven", back: "1770–1827; bridged Classical and Romantic; expanded the symphony's emotional and structural scope despite deafness" }
      ]
    },

    /* ──────────────────────────────────────────────
       L06  Baroque & Classical Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-history-101-l06",
      title: "Baroque & Classical Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: [
        "Demonstrate knowledge of Baroque and Classical music history"
      ],
      quizQuestions: [
        {
          id: "music-history-101-l06-q-1",
          question: "Who is considered the 'Father of the Symphony'?",
          options: ["Bach", "Mozart", "Haydn", "Beethoven"],
          correctIndex: 2
        },
        {
          id: "music-history-101-l06-q-2",
          question: "Sonata form consists of which three main sections?",
          options: [
            "Verse, Chorus, Bridge",
            "Exposition, Development, Recapitulation",
            "Prelude, Fugue, Coda",
            "Theme, Variations, Finale"
          ],
          correctIndex: 1
        },
        {
          id: "music-history-101-l06-q-3",
          question: "Which instrument replaced the harpsichord in the Classical period?",
          options: ["Organ", "Clavichord", "Piano", "Synthesizer"],
          correctIndex: 2
        },
        {
          id: "music-history-101-l06-q-4",
          question: "Vivaldi's 'The Four Seasons' is an example of a Baroque:",
          options: ["Opera", "Fugue", "Solo concerto", "Mass"],
          correctIndex: 2
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      }
    },

    /* ──────────────────────────────────────────────
       L07  Romantic Period (1820–1900)  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-history-101-l07",
      title: "Romantic: Emotion Unleashed",
      type: "video",
      duration: 13,
      objectives: [
        "Describe the Romantic emphasis on individual expression, nationalism, and virtuosity",
        "Identify Chopin, Wagner, Tchaikovsky, and Brahms",
        "Explain new forms: the tone poem, art song, and music drama"
      ],
      chunks: [
        {
          id: "music-history-101-l07-c1",
          title: "Emotion Over Form",
          content:
            "The Romantic period (1820–1900) valued personal expression above formal structure. Orchestras grew to massive size. Dynamic extremes widened. Chromaticism (notes outside the key) intensified harmonic color. Composers drew inspiration from literature, nature, nationalism, and personal emotion. The artist was seen as a genius speaking from the soul — a dramatic shift from the Classical ideal of elegant craftsmanship."
        },
        {
          id: "music-history-101-l07-c2",
          title: "Piano Virtuosity and Art Song",
          content:
            "Chopin and Liszt made the piano a vehicle for extreme expression and dazzling virtuosity. Chopin's nocturnes, preludes, and ballades are intimate masterpieces. Liszt's transcendental études pushed technical limits. The art song (Lied) — a poem set for solo voice and piano — flourished with Schubert, who wrote over 600. His song cycle 'Winterreise' follows a rejected lover through a winter landscape of despair."
        },
        {
          id: "music-history-101-l07-c3",
          title: "Wagner, Nationalism, and the Orchestra",
          content:
            "Richard Wagner reinvented opera as 'Gesamtkunstwerk' (total work of art), combining music, drama, poetry, and visual spectacle. His 'Ring Cycle' is 15+ hours long. Nationalism inspired composers to incorporate folk melodies: Tchaikovsky (Russia), Dvorak (Czech lands), Grieg (Norway), Sibelius (Finland). Orchestras ballooned to 100+ players. The tone poem — an orchestral work telling a story — was pioneered by Liszt and perfected by Richard Strauss."
        }
      ],
      flashcards: [
        { id: "music-history-101-l07-fc-1", front: "Romanticism in music", back: "1820–1900; emphasized personal expression, nationalism, virtuosity, and emotional intensity over formal structure" },
        { id: "music-history-101-l07-fc-2", front: "Art song (Lied)", back: "A poem set for solo voice and piano; Schubert, Schumann, and Brahms were masters of the form" },
        { id: "music-history-101-l07-fc-3", front: "Tone poem", back: "A single-movement orchestral work that tells a story or paints a scene — pioneered by Liszt" },
        { id: "music-history-101-l07-fc-4", front: "Gesamtkunstwerk", back: "Wagner's 'total work of art' — opera combining music, drama, poetry, and visual spectacle as one unified experience" }
      ]
    },

    /* ──────────────────────────────────────────────
       L08  20th Century & Beyond  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-history-101-l08",
      title: "20th Century: Breaking All the Rules",
      type: "interactive",
      duration: 14,
      objectives: [
        "Describe how 20th-century composers shattered tonal conventions",
        "Identify Debussy, Stravinsky, Schoenberg, and their innovations",
        "Explain impressionism, atonality, serialism, and minimalism"
      ],
      chunks: [
        {
          id: "music-history-101-l08-c1",
          title: "Impressionism and Debussy",
          content:
            "Claude Debussy (1862–1918) rejected Romantic excess in favor of color, atmosphere, and suggestion — like the Impressionist painters. His 'Prélude à l'après-midi d'un faune' (1894) is often called the beginning of modern music. He used whole-tone and pentatonic scales, parallel chords, and floating rhythms that dissolved traditional phrase structure. Music no longer had to tell a story — it could simply evoke a mood."
        },
        {
          id: "music-history-101-l08-c2",
          title: "Stravinsky and Rhythmic Revolution",
          content:
            "Igor Stravinsky's 'The Rite of Spring' (1913) caused a riot at its Paris premiere. Its pounding, irregular rhythms, savage dissonances, and raw orchestral power shocked audiences raised on Romantic elegance. Stravinsky made rhythm — not melody or harmony — the driving force of music. He later adopted neoclassicism (returning to Classical forms with modern harmony) and eventually serialism, reinventing himself across six decades."
        },
        {
          id: "music-history-101-l08-c3",
          title: "Atonality, Serialism, and Minimalism",
          content:
            "Arnold Schoenberg abandoned tonality entirely, developing the 12-tone (serial) system: every piece uses all 12 chromatic notes in a fixed order (tone row), avoiding any sense of key. His student Webern pushed this to extreme brevity and precision. By the 1960s, composers like Steve Reich and Philip Glass reacted against complexity with minimalism — simple repeated patterns that evolve gradually, creating a hypnotic, trance-like effect."
        }
      ],
      activities: [
        {
          id: "music-history-101-l08-a1",
          title: "Sort into Categories",
          type: "sorting_buckets",
          buckets: ["Impressionism", "Modernism / Atonality", "Minimalism"],
          items: [
            { id: "music-history-101-l08-a-1-i1", text: "Debussy — atmospheric, whole-tone scales", bucket: "Impressionism" },
            { id: "music-history-101-l08-a-1-i2", text: "Schoenberg — 12-tone serial technique", bucket: "Modernism / Atonality" },
            { id: "music-history-101-l08-a-1-i3", text: "Steve Reich — repeated patterns evolving slowly", bucket: "Minimalism" },
            { id: "music-history-101-l08-a-1-i4", text: "Stravinsky — 'The Rite of Spring,' rhythmic shock", bucket: "Modernism / Atonality" },
            { id: "music-history-101-l08-a-1-i5", text: "Ravel — lush orchestration, subtle harmonic color", bucket: "Impressionism" },
            { id: "music-history-101-l08-a-1-i6", text: "Philip Glass — hypnotic arpeggiated patterns", bucket: "Minimalism" }
          ]
        }
      ],
      flashcards: [
        { id: "music-history-101-l08-fc-1", front: "Impressionism (music)", back: "Late 19th/early 20th century; emphasis on atmosphere, color, and mood over structure — led by Debussy and Ravel" },
        { id: "music-history-101-l08-fc-2", front: "12-tone serialism", back: "Schoenberg's system: all 12 chromatic notes used in a fixed order (tone row) to avoid tonal hierarchy" },
        { id: "music-history-101-l08-fc-3", front: "Minimalism", back: "Music built on simple repeated patterns that evolve gradually — Reich, Glass, Riley, Adams" },
        { id: "music-history-101-l08-fc-4", front: "Stravinsky", back: "1882–1971; rhythmic innovator; 'The Rite of Spring'; continually reinvented his style across neoclassicism and serialism" }
      ]
    },

    /* ──────────────────────────────────────────────
       L09  Romantic & Modern Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-history-101-l09",
      title: "Romantic & Modern Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: [
        "Demonstrate knowledge of Romantic and 20th-century music history"
      ],
      quizQuestions: [
        {
          id: "music-history-101-l09-q-1",
          question: "Wagner's concept of 'Gesamtkunstwerk' means:",
          options: [
            "Absolute music without a program",
            "A total work of art combining music, drama, poetry, and spectacle",
            "Music written only for instruments",
            "A 12-tone compositional technique"
          ],
          correctIndex: 1
        },
        {
          id: "music-history-101-l09-q-2",
          question: "Which work famously caused a riot at its 1913 premiere?",
          options: [
            "Debussy's 'Prélude à l'après-midi d'un faune'",
            "Beethoven's Ninth Symphony",
            "Stravinsky's 'The Rite of Spring'",
            "Schoenberg's 'Pierrot lunaire'"
          ],
          correctIndex: 2
        },
        {
          id: "music-history-101-l09-q-3",
          question: "Minimalist music is characterized by:",
          options: [
            "Dense counterpoint and complex fugues",
            "Simple repeated patterns that evolve gradually",
            "12-tone serial rows",
            "Massive Romantic orchestras"
          ],
          correctIndex: 1
        },
        {
          id: "music-history-101-l09-q-4",
          question: "Schoenberg's 12-tone system ensures that:",
          options: [
            "Only 7 notes of a major scale are used",
            "All 12 chromatic notes are used in a fixed order, avoiding tonal center",
            "Music always resolves to a tonic chord",
            "Rhythm is the primary structural element"
          ],
          correctIndex: 1
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      }
    },

    /* ──────────────────────────────────────────────
       L10  Mastery Quiz: Full Timeline  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-history-101-l10",
      title: "Mastery Quiz: Full Musical Timeline",
      type: "quiz",
      duration: 12,
      objectives: [
        "Synthesize knowledge across all musical periods"
      ],
      quizQuestions: [
        {
          id: "music-history-101-l10-q-1",
          question: "Place these in chronological order: Baroque, Medieval, Classical, Renaissance",
          options: [
            "Medieval → Renaissance → Baroque → Classical",
            "Renaissance → Medieval → Classical → Baroque",
            "Medieval → Baroque → Renaissance → Classical",
            "Baroque → Medieval → Renaissance → Classical"
          ],
          correctIndex: 0
        },
        {
          id: "music-history-101-l10-q-2",
          question: "Which composer bridged the Classical and Romantic periods?",
          options: ["Haydn", "Mozart", "Beethoven", "Schubert"],
          correctIndex: 2
        },
        {
          id: "music-history-101-l10-q-3",
          question: "The development of notation (neumes → staff) occurred during which period?",
          options: ["Renaissance", "Medieval", "Baroque", "Classical"],
          correctIndex: 1
        },
        {
          id: "music-history-101-l10-q-4",
          question: "Debussy's music is most associated with which style?",
          options: ["Romanticism", "Serialism", "Impressionism", "Minimalism"],
          correctIndex: 2
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 1, apply: 1, analyze: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L11  Popular Music Origins  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-history-101-l11",
      title: "Popular Music Origins: Blues, Jazz, and Rock",
      type: "interactive",
      duration: 14,
      objectives: [
        "Trace the African American roots of blues, jazz, and rock",
        "Identify key figures: Robert Johnson, Louis Armstrong, Elvis Presley, Chuck Berry",
        "Explain how recording technology democratized music"
      ],
      chunks: [
        {
          id: "music-history-101-l11-c1",
          title: "The Blues",
          content:
            "The blues emerged from African American communities in the Mississippi Delta in the late 1800s. It combined African musical traditions (call-and-response, pentatonic scales, blue notes) with Western harmony. The 12-bar blues form and its raw emotional honesty became the foundation for virtually all popular music that followed. Robert Johnson, Bessie Smith, and Muddy Waters are foundational figures."
        },
        {
          id: "music-history-101-l11-c2",
          title: "Jazz: America's Art Form",
          content:
            "Jazz was born in New Orleans around 1900, blending blues, ragtime, brass band music, and improvisation. Louis Armstrong revolutionized jazz trumpet and solo improvisation. Duke Ellington elevated jazz composition to an art form. Bebop (Charlie Parker, Dizzy Gillespie) made jazz more harmonically complex. Miles Davis reinvented jazz multiple times — from cool jazz to modal jazz to fusion."
        },
        {
          id: "music-history-101-l11-c3",
          title: "Rock and Roll Revolution",
          content:
            "In the 1950s, rock and roll fused blues, country, and rhythm & blues. Chuck Berry, Little Richard, and Fats Domino created the template. Elvis Presley brought it to a mass white audience. The electric guitar became the signature instrument. The Beatles (1960s) expanded rock into an album-length art form. Rock fractured into subgenres: punk, metal, progressive, alternative — each pushing boundaries."
        }
      ],
      activities: [
        {
          id: "music-history-101-l11-a1",
          title: "Match the Pairs",
          type: "matching_pairs",
          pairs: [
            { id: "music-history-101-l11-a-1-p1", left: "Robert Johnson", right: "Delta blues; legendary guitarist; 'Cross Road Blues'" },
            { id: "music-history-101-l11-a-1-p2", left: "Louis Armstrong", right: "Jazz trumpet pioneer; 'What a Wonderful World'" },
            { id: "music-history-101-l11-a-1-p3", left: "Duke Ellington", right: "Jazz composer/bandleader; 'Take the A Train'" },
            { id: "music-history-101-l11-a-1-p4", left: "Chuck Berry", right: "Father of rock and roll; 'Johnny B. Goode'" },
            { id: "music-history-101-l11-a-1-p5", left: "The Beatles", right: "Expanded rock into an album-length art form" },
            { id: "music-history-101-l11-a-1-p6", left: "Miles Davis", right: "Reinvented jazz multiple times; 'Kind of Blue'" }
          ]
        }
      ],
      flashcards: [
        { id: "music-history-101-l11-fc-1", front: "Blues", back: "African American music from the Mississippi Delta; 12-bar form, blue notes, raw emotional expression — foundation of all popular music" },
        { id: "music-history-101-l11-fc-2", front: "Jazz", back: "Born in New Orleans c. 1900; blends blues, ragtime, and improvisation — America's original art form" },
        { id: "music-history-101-l11-fc-3", front: "Rock and roll", back: "1950s fusion of blues, country, and R&B; Chuck Berry, Elvis Presley; electric guitar as signature instrument" }
      ]
    },

    /* ──────────────────────────────────────────────
       L12  Mastery Retest  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-history-101-l12",
      title: "Mastery Retest",
      type: "quiz",
      duration: 10,
      objectives: [
        "Demonstrate comprehensive music history knowledge"
      ],
      quizQuestions: [
        {
          id: "music-history-101-l12-q-1",
          question: "The blues originated primarily from:",
          options: [
            "European classical tradition",
            "African American communities in the Mississippi Delta",
            "Asian folk music",
            "Medieval church chant"
          ],
          correctIndex: 1
        },
        {
          id: "music-history-101-l12-q-2",
          question: "Bach is most famous for which compositional technique?",
          options: ["Serialism", "Minimalism", "Counterpoint and fugue", "Impressionism"],
          correctIndex: 2
        },
        {
          id: "music-history-101-l12-q-3",
          question: "The piano replaced the harpsichord because the piano could:",
          options: [
            "Play more notes at once",
            "Play both soft and loud (dynamics)",
            "Be tuned more easily",
            "Produce sustained tones"
          ],
          correctIndex: 1
        },
        {
          id: "music-history-101-l12-q-4",
          question: "Which genre was born in New Orleans around 1900?",
          options: ["Blues", "Rock and roll", "Jazz", "Country"],
          correctIndex: 2
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 1, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L13  Music and Technology  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-history-101-l13",
      title: "Music and Technology: From Phonograph to Streaming",
      type: "video",
      duration: 12,
      objectives: [
        "Describe how recording technology changed music creation and consumption",
        "Trace the evolution from phonograph to vinyl to digital to streaming",
        "Explain how hip-hop, electronic music, and sampling emerged from technology"
      ],
      chunks: [
        {
          id: "music-history-101-l13-c1",
          title: "The Recording Revolution",
          content:
            "Thomas Edison's phonograph (1877) changed everything. Before recording, you had to be physically present to hear music. Records made music portable, repeatable, and collectible. The 78 RPM record, then the LP (1948), then the cassette (1963), and the CD (1982) each expanded access. Recording also changed composition: songs became shorter to fit formats, and studio production became an art form."
        },
        {
          id: "music-history-101-l13-c2",
          title: "Electronic Music and Hip-Hop",
          content:
            "Synthesizers (Moog, 1960s) created sounds no acoustic instrument could make. Kraftwerk pioneered electronic pop in the 1970s. Hip-hop, born in the South Bronx (1973), used turntables, drum machines, and sampling — turning existing recordings into raw material for new art. DJs and producers became the new musicians. Electronic dance music (EDM) grew from underground clubs to mainstream festivals."
        },
        {
          id: "music-history-101-l13-c3",
          title: "The Digital Age",
          content:
            "The MP3 (1990s) and Napster (1999) disrupted the music industry by making digital sharing possible. Apple's iTunes (2003) legitimized digital sales. Spotify (2008) and streaming made virtually all recorded music accessible for a monthly fee. Today, anyone with a laptop can produce and distribute music globally. The barrier between artist and audience has nearly dissolved — but questions about fair compensation and artistic curation remain."
        }
      ],
      flashcards: [
        { id: "music-history-101-l13-fc-1", front: "Phonograph", back: "Edison's invention (1877) — the first device to record and play back sound; revolutionized music consumption" },
        { id: "music-history-101-l13-fc-2", front: "Sampling", back: "Taking a portion of an existing recording and reusing it in a new composition — central to hip-hop and electronic music" },
        { id: "music-history-101-l13-fc-3", front: "Hip-hop", back: "Born in South Bronx, 1973; uses turntables, drum machines, MCing, and sampling; transformed music and culture globally" },
        { id: "music-history-101-l13-fc-4", front: "Streaming", back: "On-demand access to music via internet (Spotify, Apple Music); replaced physical media as the dominant format" }
      ]
    },

    /* ──────────────────────────────────────────────
       L14  Music History Coaching Clinic  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-history-101-l14",
      title: "Music History Coaching Clinic",
      type: "interactive",
      duration: 13,
      objectives: [
        "Correct common misconceptions about music history",
        "Connect historical periods to modern genres",
        "Identify lasting legacies of each era in today's music"
      ],
      chunks: [
        {
          id: "music-history-101-l14-c1",
          title: "Common Misconceptions",
          content:
            "Myth: 'Classical music' means all old orchestral music. Fact: 'Classical' is a specific period (1750–1820); the umbrella term is 'Western art music.' Myth: Bach was famous in his lifetime. Fact: Bach was known as an organist, not a composer — his music was largely forgotten until Mendelssohn revived it in 1829. Myth: Old music is irrelevant. Fact: The I-V-vi-IV pop progression follows the same harmonic logic Bach used."
        },
        {
          id: "music-history-101-l14-c2",
          title: "Connections to Today",
          content:
            "Every modern genre has deep roots. Pop melody structure → Classical phrase symmetry. Rock guitar solos → Romantic virtuosity. Jazz improvisation → Baroque ornamentation. Hip-hop sampling → Centuries of composers quoting each other. Film scores → Late Romantic orchestral writing. EDM's electronic sounds → 20th-century avant-garde experimentation. Understanding history helps you hear these connections."
        }
      ],
      activities: [
        {
          id: "music-history-101-l14-a1",
          title: "Match the Pairs",
          type: "matching_pairs",
          pairs: [
            { id: "music-history-101-l14-a-1-p1", left: "Pop melody structure", right: "Classical balanced 4-bar phrases" },
            { id: "music-history-101-l14-a-1-p2", left: "Rock guitar virtuosity", right: "Romantic-era solo performer tradition" },
            { id: "music-history-101-l14-a-1-p3", left: "Jazz improvisation", right: "Baroque ornamentation and embellishment" },
            { id: "music-history-101-l14-a-1-p4", left: "Hip-hop sampling", right: "Centuries of composers quoting others" },
            { id: "music-history-101-l14-a-1-p5", left: "Film scores", right: "Late Romantic orchestral writing (Wagner, Strauss)" },
            { id: "music-history-101-l14-a-1-p6", left: "EDM synthesizers", right: "20th-century electronic avant-garde" }
          ]
        }
      ],
      flashcards: [
        { id: "music-history-101-l14-fc-1", front: "'Classical music' (clarification)", back: "Specifically: the Classical period (1750–1820). More broadly: 'Western art music' is the correct umbrella term" },
        { id: "music-history-101-l14-fc-2", front: "Mendelssohn's Bach revival", back: "In 1829, Mendelssohn performed Bach's St. Matthew Passion, sparking a revival of Bach's forgotten works" }
      ]
    },

    /* ──────────────────────────────────────────────
       L15  Mastery Sprint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-history-101-l15",
      title: "Mastery Sprint",
      type: "quiz",
      duration: 10,
      objectives: [
        "Demonstrate comprehensive mastery of music history"
      ],
      quizQuestions: [
        {
          id: "music-history-101-l15-q-1",
          question: "Hip-hop originated in:",
          options: [
            "Detroit in the 1980s",
            "The South Bronx in the 1970s",
            "Los Angeles in the 1990s",
            "Chicago in the 1960s"
          ],
          correctIndex: 1
        },
        {
          id: "music-history-101-l15-q-2",
          question: "Which technology first allowed music to be recorded and played back?",
          options: ["Radio", "The phonograph", "The synthesizer", "The internet"],
          correctIndex: 1
        },
        {
          id: "music-history-101-l15-q-3",
          question: "Romantic-era composers drew inspiration from all EXCEPT:",
          options: [
            "Nationalism and folk music",
            "Literature and nature",
            "12-tone serial rows",
            "Personal emotion and expression"
          ],
          correctIndex: 2
        },
        {
          id: "music-history-101-l15-q-4",
          question: "The connection between film scores and late Romantic music exists because:",
          options: [
            "Film composers use the same instruments and emotional orchestral techniques Wagner and Strauss pioneered",
            "Films are always set in the 19th century",
            "Romantic composers wrote for silent films",
            "Film scores use 12-tone technique exclusively"
          ],
          correctIndex: 0
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 1, apply: 1, analyze: 1 }
      }
    }
  ]
};
