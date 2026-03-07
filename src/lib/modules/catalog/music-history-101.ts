import type { LearningModule } from "@/lib/modules/types";

export const music_history_101_Module: LearningModule = {
  "id": "music-history-101",
  "title": "Music History: Medieval to Modern",
  "description": "Journey through a thousand years of Western music — from Gregorian chant to hip-hop. Meet the composers, understand the cultural forces, and hear how each era shaped the next.",
  "subject": "Music",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "music",
    "history"
  ],
  "minAge": 10,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Place the major musical periods on a timeline (Medieval, Renaissance, Baroque, Classical, Romantic, 20th Century, Modern)",
    "Identify key composers and works from each era",
    "Explain how cultural, technological, and social changes shaped musical evolution",
    "Recognize stylistic features of each period by listening",
    "Understand the development of notation, instruments, and performance practice",
    "Connect historical music trends to modern genres",
    "Describe the impact of recording technology on music distribution and style"
  ],
  "lessons": [
    {
      "id": "music-history-101-l01",
      "title": "Medieval Music: Sacred Beginnings",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Describe Gregorian chant and its role in medieval worship",
        "Explain the development of early notation (neumes)",
        "Identify the emergence of polyphony in the Notre Dame school"
      ],
      "chunks": [
        {
          "id": "music-history-101-l01-c1",
          "title": "Gregorian Chant",
          "content": "In the Middle Ages, most music was created for the church. The most important style was Gregorian chant, named after Pope Gregory I. Imagine monks in a stone cathedral singing a single, flowing melody together. This music, sung in Latin, didn't have a strong beat like modern pop songs. Instead, its rhythm was gentle and free, designed to create a peaceful, spiritual atmosphere for worship. This style of music, with just one melody line, is called monophony. For centuries, Gregorian chant was the sound of worship across Europe, and it formed the foundation for all Western music that followed."
        },
        {
          "id": "music-history-101-l01-c2",
          "title": "The Birth of Notation",
          "content": "How do you share a song without writing it down? For a long time, musicians had to learn everything by ear. This changed around the 9th century when monks developed symbols called neumes. These were small marks written above the text of a chant to show if the melody went up or down. It was a huge step, but it wasn't very precise. Then, in the 11th century, a monk named Guido d'Arezzo had a brilliant idea. He created a system of lines and spaces called a staff, where each line or space represented a specific pitch. He also invented solmization, the ancestor of our 'do, re, mi.' For the first time, music could be written down accurately, shared widely, and preserved for the future."
        },
        {
          "id": "music-history-101-l01-c3",
          "title": "Early Polyphony",
          "content": "Music became more complex around the year 1100 at the famous Notre Dame Cathedral in Paris. Composers like Léonin and Pérotin started experimenting. They took a traditional Gregorian chant and added a second, third, or even a fourth melody on top of it. This new texture, with multiple independent melodies woven together, is called polyphony. It was a revolutionary idea that transformed music from a single line of melody into a rich, layered tapestry of sound. This innovation, born in the heart of Paris, set the stage for the complex harmonies that would define Western music for centuries to come."
        }
      ],
      "flashcards": [
        {
          "id": "music-history-101-l01-fc-1",
          "front": "Gregorian chant",
          "back": "Monophonic sacred song in Latin, the dominant music of medieval Europe, named after Pope Gregory I."
        },
        {
          "id": "music-history-101-l01-fc-2",
          "front": "Neumes",
          "back": "Early notation symbols written above text to indicate melodic direction — the ancestors of modern notes."
        },
        {
          "id": "music-history-101-l01-fc-3",
          "front": "Polyphony",
          "back": "Music with two or more simultaneous independent melodic lines — pioneered at Notre Dame, Paris c. 1100."
        },
        {
          "id": "music-history-101-l01-fc-4",
          "front": "Guido d'Arezzo",
          "back": "11th-century monk who developed the musical staff and solmization (do, re, mi, fa, sol, la)."
        }
      ],
      "learningAids": [
        {
          "id": "music-history-101-l01-a1",
          "type": "image",
          "title": "Medieval Music Manuscript",
          "content": "An illuminated manuscript showing early neumes above Latin text, illustrating how music was first written down."
        }
      ]
    },
    {
      "id": "music-history-101-l02",
      "title": "Renaissance: The Golden Age of Vocal Music",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Describe the texture and style of Renaissance polyphony",
        "Identify Josquin, Palestrina, and their contributions",
        "Explain how the Protestant Reformation changed church music"
      ],
      "chunks": [
        {
          "id": "music-history-101-l02-c1",
          "title": "A Cappella Polyphony",
          "content": "The Renaissance (1400–1600) is often called the 'golden age of vocal music.' Composers like Josquin des Prez and Palestrina perfected the art of polyphony, creating complex yet smooth and beautiful music for choirs. The ideal sound was a cappella, meaning voices only, with no instruments. Each vocal part was equally important, weaving together to create a seamless and balanced texture. This music was designed to be heavenly and uplifting, reflecting the Renaissance ideals of beauty, order, and human creativity."
        },
        {
          "id": "music-history-101-l02-c2",
          "title": "Secular Music Flourishes",
          "content": "Music wasn't just for church anymore. During the Renaissance, secular music—music for entertainment—became very popular. In Italy and England, the madrigal was the favorite genre. A madrigal is a vocal piece for a small group of singers, usually about love or nature. Composers loved to use 'word painting,' where the music literally illustrates the meaning of the words. For example, on the word 'rising,' the melody would go up, and on the word 'sighing,' the music might have a gentle, falling sound. This made the music both clever and expressive."
        },
        {
          "id": "music-history-101-l02-c3",
          "title": "Reformation and Counter-Reformation",
          "content": "In 1517, Martin Luther started the Protestant Reformation, which had a huge impact on music. He believed everyone in the church, not just the choir, should sing. He wrote simple, catchy hymns in German called chorales, which the whole congregation could join in on. In response, the Catholic Church launched the Counter-Reformation. They wanted their music to be beautiful but also clear, so the words could be understood. The music of Palestrina, with its balanced and pure polyphony, became the model for this new, clarified style of sacred music."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-history-101-l02-a1",
          "title": "Match the Pairs",
          "type": "matching_pairs",
          "pairs": [
            {
              "id": "music-history-101-l02-a-1-p1",
              "left": "Josquin des Prez",
              "right": "Master of Renaissance polyphony; 'Prince of Music'"
            },
            {
              "id": "music-history-101-l02-a-1-p2",
              "left": "Palestrina",
              "right": "Counter-Reformation ideal; clear, balanced sacred polyphony"
            },
            {
              "id": "music-history-101-l02-a-1-p3",
              "left": "Martin Luther",
              "right": "Protestant Reformation; congregational hymns (chorales)"
            },
            {
              "id": "music-history-101-l02-a-1-p4",
              "left": "William Byrd",
              "right": "English Renaissance; masses, motets, and keyboard music"
            },
            {
              "id": "music-history-101-l02-a-1-p5",
              "left": "Madrigal",
              "right": "Secular vocal piece with word painting; popular in Italy"
            },
            {
              "id": "music-history-101-l02-a-1-p6",
              "left": "Word painting",
              "right": "Music that literally depicts the meaning of the text"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-history-101-l02-fc-1",
          "front": "A cappella",
          "back": "Vocal music performed without instrumental accompaniment — the primary texture of Renaissance sacred music."
        },
        {
          "id": "music-history-101-l02-fc-2",
          "front": "Madrigal",
          "back": "A secular vocal composition for 4-5 voices, popular in Italy and England, known for word painting."
        },
        {
          "id": "music-history-101-l02-fc-3",
          "front": "Chorale",
          "back": "A hymn tune for congregational singing, introduced by Martin Luther during the Protestant Reformation."
        }
      ],
      "learningAids": [
        {
          "id": "music-history-101-l02-a1",
          "type": "image",
          "title": "Renaissance Lute Player",
          "content": "A painting from the Renaissance period depicting a musician playing a lute, illustrating the rise of secular music and instruments."
        }
      ]
    },
    {
      "id": "music-history-101-l03",
      "title": "Medieval & Renaissance Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of medieval and Renaissance music history"
      ],
      "questions": [
        {
          "id": "music-history-101-l03-q-1",
          "text": "What is Gregorian chant?",
          "options": [
            {
              "id": "music-history-101-l03-q-1-opt-0",
              "text": "Polyphonic organ music from Germany"
            },
            {
              "id": "music-history-101-l03-q-1-opt-1",
              "text": "Monophonic sacred song sung in Latin"
            },
            {
              "id": "music-history-101-l03-q-1-opt-2",
              "text": "Renaissance dance music for lute"
            },
            {
              "id": "music-history-101-l03-q-1-opt-3",
              "text": "A type of medieval folk song"
            }
          ],
          "correctOptionId": "music-history-101-l03-q-1-opt-1"
        },
        {
          "id": "music-history-101-l03-q-2",
          "text": "Who developed the musical staff and solmization (do, re, mi)?",
          "options": [
            {
              "id": "music-history-101-l03-q-2-opt-0",
              "text": "Pope Gregory I"
            },
            {
              "id": "music-history-101-l03-q-2-opt-1",
              "text": "Léonin"
            },
            {
              "id": "music-history-101-l03-q-2-opt-2",
              "text": "Guido d'Arezzo"
            },
            {
              "id": "music-history-101-l03-q-2-opt-3",
              "text": "Palestrina"
            }
          ],
          "correctOptionId": "music-history-101-l03-q-2-opt-2"
        },
        {
          "id": "music-history-101-l03-q-3",
          "text": "'Word painting' in a madrigal means:",
          "options": [
            {
              "id": "music-history-101-l03-q-3-opt-0",
              "text": "Writing lyrics on a painted scroll"
            },
            {
              "id": "music-history-101-l03-q-3-opt-1",
              "text": "Music that literally depicts the meaning of the text"
            },
            {
              "id": "music-history-101-l03-q-3-opt-2",
              "text": "Painting portraits of composers"
            },
            {
              "id": "music-history-101-l03-q-3-opt-3",
              "text": "Using colors to represent different notes"
            }
          ],
          "correctOptionId": "music-history-101-l03-q-3-opt-1"
        },
        {
          "id": "music-history-101-l03-q-4",
          "text": "Martin Luther's chorales were significant because they:",
          "options": [
            {
              "id": "music-history-101-l03-q-4-opt-0",
              "text": "Were written in complex Latin polyphony"
            },
            {
              "id": "music-history-101-l03-q-4-opt-1",
              "text": "Allowed congregations to sing in their own language"
            },
            {
              "id": "music-history-101-l03-q-4-opt-2",
              "text": "Were only performed by professional choirs"
            },
            {
              "id": "music-history-101-l03-q-4-opt-3",
              "text": "Eliminated all instruments from church"
            }
          ],
          "correctOptionId": "music-history-101-l03-q-4-opt-1"
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "learningAids": [
        {
          "id": "music-history-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "music-history-101-l04",
      "title": "Baroque: Drama, Virtuosity, and Bach",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Describe the Baroque emphasis on contrast, ornamentation, and emotional expression",
        "Identify Bach, Handel, and Vivaldi and their landmark works",
        "Explain the development of opera, concerto, and fugue"
      ],
      "chunks": [
        {
          "id": "music-history-101-l04-c1",
          "title": "The Birth of Opera",
          "content": "The Baroque period (1600–1750) was all about drama, contrast, and emotion. The ultimate expression of this was a brand new art form: opera. Invented in Italy around 1600, opera is a play where all the dialogue is sung. Composers like Claudio Monteverdi used music to heighten the story's emotion. They developed two vocal styles: recitative, a speech-like style to move the plot forward, and the aria, a beautiful, emotional solo song where a character expresses their feelings. With elaborate costumes, stage sets, and a full orchestra, opera became the most spectacular entertainment of its time."
        },
        {
          "id": "music-history-101-l04-c2",
          "title": "Bach and the Fugue",
          "content": "Johann Sebastian Bach is one of the most important composers of all time. A master of Baroque style, he was especially famous for his complex polyphony. His favorite form was the fugue, an intricate composition where a single musical theme, called the subject, is introduced and then chased and imitated by other melodic lines. It's like a highly complex game of 'follow the leader.' Bach's works, like 'The Well-Tempered Clavier' and the 'Mass in B Minor,' represent the peak of Baroque craftsmanship, combining brilliant technical skill with deep spiritual expression."
        },
        {
          "id": "music-history-101-l04-c3",
          "title": "Handel, Vivaldi, and the Concerto",
          "content": "The Baroque era also saw the rise of instrumental music and the virtuoso—a highly skilled performer. The concerto became a popular genre to showcase these talents. A concerto features a soloist or a small group of soloists contrasted with a larger orchestra. Antonio Vivaldi was a master of the solo concerto; his most famous work, 'The Four Seasons,' is a set of four violin concertos that vividly paint pictures of nature. George Frideric Handel was famous for his grand operas and oratorios, like the 'Messiah,' which features the famous 'Hallelujah' chorus."
        }
      ],
      "flashcards": [
        {
          "id": "music-history-101-l04-fc-1",
          "front": "Opera",
          "back": "A dramatic work set entirely to music, combining singing, acting, and orchestra — invented c. 1600 in Italy."
        },
        {
          "id": "music-history-101-l04-fc-2",
          "front": "Fugue",
          "back": "A contrapuntal composition where a subject enters in one voice and is imitated by others in a structured pattern."
        },
        {
          "id": "music-history-101-l04-fc-3",
          "front": "Basso continuo",
          "back": "The Baroque accompaniment practice: a bass line played by cello/bassoon with chords filled in by harpsichord/organ."
        },
        {
          "id": "music-history-101-l04-fc-4",
          "front": "J. S. Bach",
          "back": "1685–1750; German composer; master of counterpoint; wrote fugues, cantatas, concertos, and the Mass in B Minor."
        }
      ],
      "learningAids": [
        {
          "id": "music-history-101-l04-a1",
          "type": "image",
          "title": "Baroque Orchestra",
          "content": "An illustration of a small Baroque orchestra, featuring a harpsichord for the basso continuo, violins, and cellos."
        }
      ]
    },
    {
      "id": "music-history-101-l05",
      "title": "Classical: Elegance and Structure",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Describe Classical period ideals: clarity, balance, and formal structure",
        "Identify Haydn, Mozart, and Beethoven and their innovations",
        "Explain sonata form and the development of the symphony"
      ],
      "chunks": [
        {
          "id": "music-history-101-l05-c1",
          "title": "Classical Ideals",
          "content": "The Classical period (1750–1820) was a reaction against the complexity of Baroque music. Composers now valued clarity, balance, and elegance. Melodies became simpler, catchier, and were often organized into balanced, four-bar phrases. Instead of dense polyphony, the common texture was a clear melody with a simple accompaniment. This was also the era when the piano, which could play both soft and loud (unlike the harpsichord), became the main keyboard instrument. Music moved out of the church and into the public concert hall, meant to be enjoyed by a wider audience."
        },
        {
          "id": "music-history-101-l05-c2",
          "title": "The Symphony and Sonata Form",
          "content": "The Classical era gave us the symphony: a large-scale work for orchestra, usually in four movements. Franz Joseph Haydn, known as the 'Father of the Symphony,' standardized this form. The most important structure within the symphony was sonata form. Think of it as a musical story with three parts: the Exposition, where two contrasting themes are introduced; the Development, where the themes are explored and transformed; and the Recapitulation, where the themes return. Wolfgang Amadeus Mozart, a brilliant child prodigy, perfected this form in his elegant symphonies, concertos, and operas."
        },
        {
          "id": "music-history-101-l05-c3",
          "title": "Beethoven: Bridge to Romanticism",
          "content": "Ludwig van Beethoven is one of history's most powerful composers. He began writing in the elegant Classical style of Haydn and Mozart, but he pushed its boundaries, filling it with intense emotion and personal struggle. His symphonies became longer, more dramatic, and more powerful than ever before. His famous Fifth Symphony is a model of emotional journey, from conflict to triumph. Even after he became deaf, Beethoven continued to compose groundbreaking music. His work serves as a bridge from the structured world of the Classical era to the emotional freedom of the Romantic era."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-history-101-l05-a1",
          "title": "Sort into Categories",
          "type": "sorting_buckets",
          "buckets": [
            "Baroque (1600–1750)",
            "Classical (1750–1820)"
          ],
          "items": [
            {
              "id": "music-history-101-l05-a-1-i1",
              "text": "Dense counterpoint and fugues",
              "bucket": "Baroque (1600–1750)"
            },
            {
              "id": "music-history-101-l05-a-1-i2",
              "text": "Clear melody over simple accompaniment",
              "bucket": "Classical (1750–1820)"
            },
            {
              "id": "music-history-101-l05-a-1-i3",
              "text": "Harpsichord as main keyboard",
              "bucket": "Baroque (1600–1750)"
            },
            {
              "id": "music-history-101-l05-a-1-i4",
              "text": "Piano replaces harpsichord",
              "bucket": "Classical (1750–1820)"
            },
            {
              "id": "music-history-101-l05-a-1-i5",
              "text": "Concerto grosso",
              "bucket": "Baroque (1600–1750)"
            },
            {
              "id": "music-history-101-l05-a-1-i6",
              "text": "Sonata form and symphony",
              "bucket": "Classical (1750–1820)"
            },
            {
              "id": "music-history-101-l05-a-1-i7",
              "text": "Basso continuo accompaniment",
              "bucket": "Baroque (1600–1750)"
            },
            {
              "id": "music-history-101-l05-a-1-i8",
              "text": "Singable, balanced 4-bar phrases",
              "bucket": "Classical (1750–1820)"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-history-101-l05-fc-1",
          "front": "Sonata form",
          "back": "Exposition (two themes) → Development (themes explored) → Recapitulation (themes return) — the central Classical structure."
        },
        {
          "id": "music-history-101-l05-fc-2",
          "front": "Haydn",
          "back": "'Father of the Symphony' and string quartet; standardized Classical forms at the Esterházy court."
        },
        {
          "id": "music-history-101-l05-fc-3",
          "front": "Mozart",
          "back": "1756–1791; Austrian prodigy; perfected opera, symphony, concerto, and chamber music in the Classical style."
        },
        {
          "id": "music-history-101-l05-fc-4",
          "front": "Beethoven",
          "back": "1770–1827; bridged Classical and Romantic; expanded the symphony's emotional and structural scope despite deafness."
        }
      ],
      "learningAids": [
        {
          "id": "music-history-101-l05-a1",
          "type": "diagram",
          "title": "Sonata Form Explained",
          "content": "A simple visual diagram showing the three parts of sonata form: Exposition (Theme A, Theme B), Development (Themes explored), and Recapitulation (Theme A, Theme B return)."
        }
      ]
    },
    {
      "id": "music-history-101-l06",
      "title": "Baroque & Classical Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of Baroque and Classical music history"
      ],
      "questions": [
        {
          "id": "music-history-101-l06-q-1",
          "text": "Who is considered the 'Father of the Symphony'?",
          "options": [
            {
              "id": "music-history-101-l06-q-1-opt-0",
              "text": "Bach"
            },
            {
              "id": "music-history-101-l06-q-1-opt-1",
              "text": "Mozart"
            },
            {
              "id": "music-history-101-l06-q-1-opt-2",
              "text": "Haydn"
            },
            {
              "id": "music-history-101-l06-q-1-opt-3",
              "text": "Beethoven"
            }
          ],
          "correctOptionId": "music-history-101-l06-q-1-opt-2"
        },
        {
          "id": "music-history-101-l06-q-2",
          "text": "Sonata form consists of which three main sections?",
          "options": [
            {
              "id": "music-history-101-l06-q-2-opt-0",
              "text": "Verse, Chorus, Bridge"
            },
            {
              "id": "music-history-101-l06-q-2-opt-1",
              "text": "Exposition, Development, Recapitulation"
            },
            {
              "id": "music-history-101-l06-q-2-opt-2",
              "text": "Prelude, Fugue, Coda"
            },
            {
              "id": "music-history-101-l06-q-2-opt-3",
              "text": "Theme, Variations, Finale"
            }
          ],
          "correctOptionId": "music-history-101-l06-q-2-opt-1"
        },
        {
          "id": "music-history-101-l06-q-3",
          "text": "Which instrument replaced the harpsichord in the Classical period?",
          "options": [
            {
              "id": "music-history-101-l06-q-3-opt-0",
              "text": "Organ"
            },
            {
              "id": "music-history-101-l06-q-3-opt-1",
              "text": "Clavichord"
            },
            {
              "id": "music-history-101-l06-q-3-opt-2",
              "text": "Piano"
            },
            {
              "id": "music-history-101-l06-q-3-opt-3",
              "text": "Synthesizer"
            }
          ],
          "correctOptionId": "music-history-101-l06-q-3-opt-2"
        },
        {
          "id": "music-history-101-l06-q-4",
          "text": "Vivaldi's 'The Four Seasons' is an example of a Baroque:",
          "options": [
            {
              "id": "music-history-101-l06-q-4-opt-0",
              "text": "Opera"
            },
            {
              "id": "music-history-101-l06-q-4-opt-1",
              "text": "Fugue"
            },
            {
              "id": "music-history-101-l06-q-4-opt-2",
              "text": "Solo concerto"
            },
            {
              "id": "music-history-101-l06-q-4-opt-3",
              "text": "Mass"
            }
          ],
          "correctOptionId": "music-history-101-l06-q-4-opt-2"
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "learningAids": [
        {
          "id": "music-history-101-l06-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "music-history-101-l07",
      "title": "Romantic: Emotion Unleashed",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Describe the Romantic emphasis on individual expression, nationalism, and virtuosity",
        "Identify Chopin, Wagner, Tchaikovsky, and Brahms",
        "Explain new forms: the tone poem, art song, and music drama"
      ],
      "chunks": [
        {
          "id": "music-history-101-l07-c1",
          "title": "Emotion Over Form",
          "content": "The Romantic period (1820–1900) put personal feelings front and center. Composers were no longer content with the elegant structures of the Classical era; they wanted to express the full range of human emotion, from passionate love to deep sorrow. Orchestras grew much larger, with more brass and percussion, to create a bigger, more powerful sound. Composers found inspiration in nature, literature, and their own life stories. Music became a way to tell a story and express a personal point of view."
        },
        {
          "id": "music-history-101-l07-c2",
          "title": "Piano Virtuosity and Art Song",
          "content": "The piano became the star instrument of the Romantic era, and composers like Frédéric Chopin and Franz Liszt were treated like modern rock stars. They wrote incredibly difficult music to show off their amazing technical skill, or virtuosity. At the same time, more intimate music was also popular. The art song, or Lied, a poem set to music for solo voice and piano, became a major genre. Franz Schubert was a master of the art song, writing over 600 of them, each a perfect miniature drama."
        },
        {
          "id": "music-history-101-l07-c3",
          "title": "Wagner, Nationalism, and the Orchestra",
          "content": "As composers focused on personal identity, many also began to celebrate their national heritage. They used folk songs and dances from their home countries in their music. Tchaikovsky's music sounds distinctly Russian, while Dvorak's is Czech. Richard Wagner took opera to an epic scale with his 'music dramas,' like the massive 'Ring Cycle.' He created the idea of a 'total work of art,' combining music, poetry, drama, and stage design into one powerful experience. The orchestra became a character in itself, telling the story with powerful themes."
        }
      ],
      "flashcards": [
        {
          "id": "music-history-101-l07-fc-1",
          "front": "Romanticism in music",
          "back": "1820–1900; emphasized personal expression, nationalism, virtuosity, and emotional intensity over formal structure."
        },
        {
          "id": "music-history-101-l07-fc-2",
          "front": "Art song (Lied)",
          "back": "A poem set for solo voice and piano; Schubert, Schumann, and Brahms were masters of the form."
        },
        {
          "id": "music-history-101-l07-fc-3",
          "front": "Tone poem",
          "back": "A single-movement orchestral work that tells a story or paints a scene — pioneered by Liszt."
        },
        {
          "id": "music-history-101-l07-fc-4",
          "front": "Gesamtkunstwerk",
          "back": "Wagner's 'total work of art' — opera combining music, drama, poetry, and visual spectacle as one unified experience."
        }
      ],
      "learningAids": [
        {
          "id": "music-history-101-l07-a1",
          "type": "image",
          "title": "Romantic Era Orchestra",
          "content": "A painting of a large, 19th-century symphony orchestra, showing the expanded brass and percussion sections used to create powerful emotional effects."
        }
      ]
    },
    {
      "id": "music-history-101-l08",
      "title": "20th Century: Breaking All the Rules",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Describe how 20th-century composers shattered tonal conventions",
        "Identify Debussy, Stravinsky, Schoenberg, and their innovations",
        "Explain impressionism, atonality, serialism, and minimalism"
      ],
      "chunks": [
        {
          "id": "music-history-101-l08-c1",
          "title": "Impressionism and Debussy",
          "content": "At the turn of the 20th century, composers started to question the old rules. In France, Claude Debussy created a style called Impressionism, inspired by painters like Monet. Instead of strong melodies and harmonies, he focused on creating moods and atmospheres with shimmering, colorful sounds. His music, like 'Prélude à l'après-midi d'un faune,' drifts and flows, blurring the traditional sense of beat and key. It was a radical new way of thinking about what music could be."
        },
        {
          "id": "music-history-101-l08-c2",
          "title": "Stravinsky and Rhythmic Revolution",
          "content": "If Debussy blurred the rules, Igor Stravinsky smashed them. His 1913 ballet, 'The Rite of Spring,' caused a riot at its premiere in Paris. The audience was shocked by its pounding, unpredictable rhythms and harsh, dissonant chords. Stravinsky treated the orchestra like a giant percussion instrument, prioritizing raw, primal energy over beautiful melodies. His work proved that rhythm could be the most important element in music, a change that would influence rock, jazz, and film music for decades."
        },
        {
          "id": "music-history-101-l08-c3",
          "title": "Atonality, Serialism, and Minimalism",
          "content": "Some composers went even further. Arnold Schoenberg abandoned tonality—the system of keys that had governed music for centuries—altogether. His atonal music had no 'home base' chord, creating a tense and unsettling sound. To organize this new language, he invented the 12-tone system (serialism), a mathematical way of composing. Later in the century, composers like Steve Reich and Philip Glass reacted against this complexity with Minimalism. They built entire pieces from simple, repeated patterns that change very gradually, creating a hypnotic and meditative effect."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-history-101-l08-a1",
          "title": "Sort into Categories",
          "type": "sorting_buckets",
          "buckets": [
            "Impressionism",
            "Modernism / Atonality",
            "Minimalism"
          ],
          "items": [
            {
              "id": "music-history-101-l08-a-1-i1",
              "text": "Debussy — atmospheric, whole-tone scales",
              "bucket": "Impressionism"
            },
            {
              "id": "music-history-101-l08-a-1-i2",
              "text": "Schoenberg — 12-tone serial technique",
              "bucket": "Modernism / Atonality"
            },
            {
              "id": "music-history-101-l08-a-1-i3",
              "text": "Steve Reich — repeated patterns evolving slowly",
              "bucket": "Minimalism"
            },
            {
              "id": "music-history-101-l08-a-1-i4",
              "text": "Stravinsky — 'The Rite of Spring,' rhythmic shock",
              "bucket": "Modernism / Atonality"
            },
            {
              "id": "music-history-101-l08-a-1-i5",
              "text": "Ravel — lush orchestration, subtle harmonic color",
              "bucket": "Impressionism"
            },
            {
              "id": "music-history-101-l08-a-1-i6",
              "text": "Philip Glass — hypnotic arpeggiated patterns",
              "bucket": "Minimalism"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-history-101-l08-fc-1",
          "front": "Impressionism (music)",
          "back": "Late 19th/early 20th century; emphasis on atmosphere, color, and mood over structure — led by Debussy and Ravel."
        },
        {
          "id": "music-history-101-l08-fc-2",
          "front": "12-tone serialism",
          "back": "Schoenberg's system: all 12 chromatic notes used in a fixed order (tone row) to avoid tonal hierarchy."
        },
        {
          "id": "music-history-101-l08-fc-3",
          "front": "Minimalism",
          "back": "Music built on simple repeated patterns that evolve gradually — Reich, Glass, Riley, Adams."
        },
        {
          "id": "music-history-101-l08-fc-4",
          "front": "Stravinsky",
          "back": "1882–1971; rhythmic innovator; 'The Rite of Spring'; continually reinvented his style across neoclassicism and serialism."
        }
      ],
      "learningAids": [
        {
          "id": "music-history-101-l08-a1",
          "type": "audio_timeline",
          "title": "From Tonality to Atonality",
          "content": "An interactive timeline with audio clips demonstrating the shift from a Romantic melody (tonal) to an Impressionistic passage (ambiguous tonality) to a Serial piece (atonal)."
        }
      ]
    },
    {
      "id": "music-history-101-l09",
      "title": "Romantic & Modern Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of Romantic and 20th-century music history"
      ],
      "questions": [
        {
          "id": "music-history-101-l09-q-1",
          "text": "Wagner's concept of 'Gesamtkunstwerk' means:",
          "options": [
            {
              "id": "music-history-101-l09-q-1-opt-0",
              "text": "Absolute music without a program"
            },
            {
              "id": "music-history-101-l09-q-1-opt-1",
              "text": "A total work of art combining music, drama, poetry, and spectacle"
            },
            {
              "id": "music-history-101-l09-q-1-opt-2",
              "text": "Music written only for instruments"
            },
            {
              "id": "music-history-101-l09-q-1-opt-3",
              "text": "A 12-tone compositional technique"
            }
          ],
          "correctOptionId": "music-history-101-l09-q-1-opt-1"
        },
        {
          "id": "music-history-101-l09-q-2",
          "text": "Which work famously caused a riot at its 1913 premiere?",
          "options": [
            {
              "id": "music-history-101-l09-q-2-opt-0",
              "text": "Debussy's 'Prélude à l'après-midi d'un faune'"
            },
            {
              "id": "music-history-101-l09-q-2-opt-1",
              "text": "Beethoven's Ninth Symphony"
            },
            {
              "id": "music-history-101-l09-q-2-opt-2",
              "text": "Stravinsky's 'The Rite of Spring'"
            },
            {
              "id": "music-history-101-l09-q-2-opt-3",
              "text": "Schoenberg's 'Pierrot lunaire'"
            }
          ],
          "correctOptionId": "music-history-101-l09-q-2-opt-2"
        },
        {
          "id": "music-history-101-l09-q-3",
          "text": "Minimalist music is characterized by:",
          "options": [
            {
              "id": "music-history-101-l09-q-3-opt-0",
              "text": "Dense counterpoint and complex fugues"
            },
            {
              "id": "music-history-101-l09-q-3-opt-1",
              "text": "Simple repeated patterns that evolve gradually"
            },
            {
              "id": "music-history-101-l09-q-3-opt-2",
              "text": "12-tone serial rows"
            },
            {
              "id": "music-history-101-l09-q-3-opt-3",
              "text": "Massive Romantic orchestras"
            }
          ],
          "correctOptionId": "music-history-101-l09-q-3-opt-1"
        },
        {
          "id": "music-history-101-l09-q-4",
          "text": "Schoenberg's 12-tone system ensures that:",
          "options": [
            {
              "id": "music-history-101-l09-q-4-opt-0",
              "text": "Only 7 notes of a major scale are used"
            },
            {
              "id": "music-history-101-l09-q-4-opt-1",
              "text": "All 12 chromatic notes are used in a fixed order, avoiding a tonal center"
            },
            {
              "id": "music-history-101-l09-q-4-opt-2",
              "text": "Music always resolves to a tonic chord"
            },
            {
              "id": "music-history-101-l09-q-4-opt-3",
              "text": "Rhythm is the primary structural element"
            }
          ],
          "correctOptionId": "music-history-101-l09-q-4-opt-1"
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      }
    },
    {
      "id": "music-history-101-l10",
      "title": "Mastery Quiz: Full Musical Timeline",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Synthesize knowledge across all musical periods"
      ],
      "questions": [
        {
          "id": "music-history-101-l10-q-1",
          "text": "Place these in chronological order: Baroque, Medieval, Classical, Renaissance",
          "options": [
            {
              "id": "music-history-101-l10-q-1-opt-0",
              "text": "Medieval → Renaissance → Baroque → Classical"
            },
            {
              "id": "music-history-101-l10-q-1-opt-1",
              "text": "Renaissance → Medieval → Classical → Baroque"
            },
            {
              "id": "music-history-101-l10-q-1-opt-2",
              "text": "Medieval → Baroque → Renaissance → Classical"
            },
            {
              "id": "music-history-101-l10-q-1-opt-3",
              "text": "Baroque → Medieval → Renaissance → Classical"
            }
          ],
          "correctOptionId": "music-history-101-l10-q-1-opt-0"
        },
        {
          "id": "music-history-101-l10-q-2",
          "text": "Which composer bridged the Classical and Romantic periods?",
          "options": [
            {
              "id": "music-history-101-l10-q-2-opt-0",
              "text": "Haydn"
            },
            {
              "id": "music-history-101-l10-q-2-opt-1",
              "text": "Mozart"
            },
            {
              "id": "music-history-101-l10-q-2-opt-2",
              "text": "Beethoven"
            },
            {
              "id": "music-history-101-l10-q-2-opt-3",
              "text": "Schubert"
            }
          ],
          "correctOptionId": "music-history-101-l10-q-2-opt-2"
        },
        {
          "id": "music-history-101-l10-q-3",
          "text": "The development of notation (neumes → staff) occurred during which period?",
          "options": [
            {
              "id": "music-history-101-l10-q-3-opt-0",
              "text": "Renaissance"
            },
            {
              "id": "music-history-101-l10-q-3-opt-1",
              "text": "Medieval"
            },
            {
              "id": "music-history-101-l10-q-3-opt-2",
              "text": "Baroque"
            },
            {
              "id": "music-history-101-l10-q-3-opt-3",
              "text": "Classical"
            }
          ],
          "correctOptionId": "music-history-101-l10-q-3-opt-1"
        },
        {
          "id": "music-history-101-l10-q-4",
          "text": "Debussy's music is most associated with which style?",
          "options": [
            {
              "id": "music-history-101-l10-q-4-opt-0",
              "text": "Romanticism"
            },
            {
              "id": "music-history-101-l10-q-4-opt-1",
              "text": "Serialism"
            },
            {
              "id": "music-history-101-l10-q-4-opt-2",
              "text": "Impressionism"
            },
            {
              "id": "music-history-101-l10-q-4-opt-3",
              "text": "Minimalism"
            }
          ],
          "correctOptionId": "music-history-101-l10-q-4-opt-2"
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
    },
    {
      "id": "music-history-101-l11",
      "title": "Popular Music Origins: Blues, Jazz, and Rock",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Trace the African American roots of blues, jazz, and rock",
        "Identify key figures: Robert Johnson, Louis Armstrong, Elvis Presley, Chuck Berry",
        "Explain how recording technology democratized music"
      ],
      "chunks": [
        {
          "id": "music-history-101-l11-c1",
          "title": "The Blues",
          "content": "Modern popular music begins with the blues. Born in the late 1800s in African American communities in the Mississippi Delta, the blues was a powerful expression of life's hardships and hopes. It blended African musical traditions with American folk songs. Key features include 'blue notes' (notes sung at a slightly different pitch for expression) and the 12-bar blues chord progression, which became the foundation for countless songs. Artists like Robert Johnson and Bessie Smith sang with raw, emotional honesty, creating a sound that would change music forever."
        },
        {
          "id": "music-history-101-l11-c2",
          "title": "Jazz: America's Art Form",
          "content": "Around 1900 in the vibrant city of New Orleans, the blues mixed with ragtime and brass band music to create jazz. The defining feature of jazz is improvisation—making up music on the spot. Trumpeter Louis Armstrong was jazz's first great genius, famous for his brilliant solos and joyful 'scat' singing. Later, bandleaders like Duke Ellington turned jazz into a sophisticated art form, and innovators like Charlie Parker and Miles Davis pushed its boundaries into new styles like bebop and cool jazz. Jazz is often called America's classical music."
        },
        {
          "id": "music-history-101-l11-c3",
          "title": "Rock and Roll Revolution",
          "content": "In the 1950s, the energy of the blues and the driving beat of rhythm & blues collided with country music to create rock and roll. African American pioneers like Chuck Berry (with his signature guitar riffs) and Little Richard (with his wild piano playing and vocals) laid the groundwork. Elvis Presley, a white singer with a blues-infused voice, brought the sound to a massive mainstream audience. With the electric guitar as its weapon, rock and roll was a rebellious sound for a new generation, and bands like The Beatles would soon take that energy and transform it into a global phenomenon."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-history-101-l11-a1",
          "title": "Match the Pairs",
          "type": "matching_pairs",
          "pairs": [
            {
              "id": "music-history-101-l11-a-1-p1",
              "left": "Robert Johnson",
              "right": "Delta blues; legendary guitarist; 'Cross Road Blues'"
            },
            {
              "id": "music-history-101-l11-a-1-p2",
              "left": "Louis Armstrong",
              "right": "Jazz trumpet pioneer; 'What a Wonderful World'"
            },
            {
              "id": "music-history-101-l11-a-1-p3",
              "left": "Duke Ellington",
              "right": "Jazz composer/bandleader; 'Take the A Train'"
            },
            {
              "id": "music-history-101-l11-a-1-p4",
              "left": "Chuck Berry",
              "right": "Father of rock and roll; 'Johnny B. Goode'"
            },
            {
              "id": "music-history-101-l11-a-1-p5",
              "left": "The Beatles",
              "right": "Expanded rock into an album-length art form"
            },
            {
              "id": "music-history-101-l11-a-1-p6",
              "left": "Miles Davis",
              "right": "Reinvented jazz multiple times; 'Kind of Blue'"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-history-101-l11-fc-1",
          "front": "Blues",
          "back": "African American music from the Mississippi Delta; 12-bar form, blue notes, raw emotional expression — foundation of all popular music."
        },
        {
          "id": "music-history-101-l11-fc-2",
          "front": "Jazz",
          "back": "Born in New Orleans c. 1900; blends blues, ragtime, and improvisation — America's original art form."
        },
        {
          "id": "music-history-101-l11-fc-3",
          "front": "Rock and roll",
          "back": "1950s fusion of blues, country, and R&B; Chuck Berry, Elvis Presley; electric guitar as signature instrument."
        }
      ],
      "learningAids": [
        {
          "id": "music-history-101-l11-a1",
          "type": "image",
          "title": "The Great Migration Map",
          "content": "A map of the United States showing the Great Migration routes from the Mississippi Delta to northern cities like Chicago, illustrating how the blues spread and evolved."
        }
      ]
    },
    {
      "id": "music-history-101-l12",
      "title": "Mastery Retest",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate comprehensive music history knowledge"
      ],
      "questions": [
        {
          "id": "music-history-101-l12-q-1",
          "text": "The blues originated primarily from:",
          "options": [
            {
              "id": "music-history-101-l12-q-1-opt-0",
              "text": "European classical tradition"
            },
            {
              "id": "music-history-101-l12-q-1-opt-1",
              "text": "African American communities in the Mississippi Delta"
            },
            {
              "id": "music-history-101-l12-q-1-opt-2",
              "text": "Asian folk music"
            },
            {
              "id": "music-history-101-l12-q-1-opt-3",
              "text": "Medieval church chant"
            }
          ],
          "correctOptionId": "music-history-101-l12-q-1-opt-1"
        },
        {
          "id": "music-history-101-l12-q-2",
          "text": "Bach is most famous for which compositional technique?",
          "options": [
            {
              "id": "music-history-101-l12-q-2-opt-0",
              "text": "Serialism"
            },
            {
              "id": "music-history-101-l12-q-2-opt-1",
              "text": "Minimalism"
            },
            {
              "id": "music-history-101-l12-q-2-opt-2",
              "text": "Counterpoint and fugue"
            },
            {
              "id": "music-history-101-l12-q-2-opt-3",
              "text": "Impressionism"
            }
          ],
          "correctOptionId": "music-history-101-l12-q-2-opt-2"
        },
        {
          "id": "music-history-101-l12-q-3",
          "text": "The piano replaced the harpsichord because the piano could:",
          "options": [
            {
              "id": "music-history-101-l12-q-3-opt-0",
              "text": "Play more notes at once"
            },
            {
              "id": "music-history-101-l12-q-3-opt-1",
              "text": "Play both soft and loud (dynamics)"
            },
            {
              "id": "music-history-101-l12-q-3-opt-2",
              "text": "Be tuned more easily"
            },
            {
              "id": "music-history-101-l12-q-3-opt-3",
              "text": "Produce sustained tones"
            }
          ],
          "correctOptionId": "music-history-101-l12-q-3-opt-1"
        },
        {
          "id": "music-history-101-l12-q-4",
          "text": "Which genre was born in New Orleans around 1900?",
          "options": [
            {
              "id": "music-history-101-l12-q-4-opt-0",
              "text": "Blues"
            },
            {
              "id": "music-history-101-l12-q-4-opt-1",
              "text": "Rock and roll"
            },
            {
              "id": "music-history-101-l12-q-4-opt-2",
              "text": "Jazz"
            },
            {
              "id": "music-history-101-l12-q-4-opt-3",
              "text": "Country"
            }
          ],
          "correctOptionId": "music-history-101-l12-q-4-opt-2"
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 1,
          "apply": 1
        }
      }
    },
    {
      "id": "music-history-101-l13",
      "title": "Music and Technology: From Phonograph to Streaming",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Describe how recording technology changed music creation and consumption",
        "Trace the evolution from phonograph to vinyl to digital to streaming",
        "Explain how hip-hop, electronic music, and sampling emerged from technology"
      ],
      "chunks": [
        {
          "id": "music-history-101-l13-c1",
          "title": "The Recording Revolution",
          "content": "For most of history, music was a live, one-time event. That all changed in 1877 when Thomas Edison invented the phonograph. For the first time, sound could be captured and replayed. This was a revolution. Music was no longer tied to a specific time or place; it could be owned and listened to anywhere. Over the next century, technology evolved from wax cylinders to vinyl records, cassette tapes, and CDs. Each new format made music more portable and accessible. This also changed music itself: songs became shorter to fit on a record, and the recording studio became an instrument for creating new sounds."
        },
        {
          "id": "music-history-101-l13-c2",
          "title": "Electronic Music and Hip-Hop",
          "content": "New technologies created entirely new genres. The invention of the synthesizer in the 1960s allowed musicians to create sounds that had never existed before, leading to electronic music pioneers like Kraftwerk. In the 1970s in the South Bronx, DJs like Kool Herc started using two turntables to isolate and loop the drum breaks from funk and soul records. This technique, along with drum machines and sampling (reusing a piece of an existing sound recording), became the foundation of hip-hop. Technology allowed artists to build new music from the sounds of the past."
        },
        {
          "id": "music-history-101-l13-c3",
          "title": "The Digital Age",
          "content": "The internet changed everything again. The invention of the MP3 file in the 1990s made it possible to share music instantly across the globe. Services like iTunes made buying digital music easy, and streaming platforms like Spotify and Apple Music put nearly all of recorded history at our fingertips for a monthly fee. Today, an artist can record a song on a laptop and upload it for the world to hear in minutes. This has democratized music creation, but it also raises new questions about how artists get paid and how we discover music in an age of infinite choice."
        }
      ],
      "flashcards": [
        {
          "id": "music-history-101-l13-fc-1",
          "front": "Phonograph",
          "back": "Edison's invention (1877) — the first device to record and play back sound; revolutionized music consumption."
        },
        {
          "id": "music-history-101-l13-fc-2",
          "front": "Sampling",
          "back": "Taking a portion of an existing recording and reusing it in a new composition — central to hip-hop and electronic music."
        },
        {
          "id": "music-history-101-l13-fc-3",
          "front": "Hip-hop",
          "back": "Born in South Bronx, 1973; uses turntables, drum machines, MCing, and sampling; transformed music and culture globally."
        },
        {
          "id": "music-history-101-l13-fc-4",
          "front": "Streaming",
          "back": "On-demand access to music via internet (Spotify, Apple Music); replaced physical media as the dominant format."
        }
      ],
      "learningAids": [
        {
          "id": "music-history-101-l13-a1",
          "type": "timeline",
          "title": "History of Music Formats",
          "content": "A visual timeline showing the evolution of music formats: Phonograph Cylinder -> Vinyl Record -> Cassette Tape -> CD -> MP3 Player -> Streaming App."
        }
      ]
    },
    {
      "id": "music-history-101-l14",
      "title": "Music History Coaching Clinic",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Correct common misconceptions about music history",
        "Connect historical periods to modern genres",
        "Identify lasting legacies of each era in today's music"
      ],
      "chunks": [
        {
          "id": "music-history-101-l14-c1",
          "title": "Common Misconceptions",
          "content": "Let's clear up a few common myths. First, the term 'classical music' is often used for all orchestral music, but it technically refers to one specific period (1750–1820). The broader term is 'Western art music.' Second, many think J.S. Bach was a superstar in his day. In reality, he was respected as an organist, but his compositions were considered old-fashioned and were largely forgotten until a revival in the 19th century. Finally, many believe old music has no connection to today's pop. But the chord progressions in many hit songs are based on the same harmonic principles perfected by Bach and other Baroque composers."
        },
        {
          "id": "music-history-101-l14-c2",
          "title": "Connections to Today",
          "content": "Every genre of music you listen to today stands on the shoulders of the past. The balanced, catchy melodies of pop music echo the phrases of the Classical era. The epic guitar solo in a rock song is a direct descendant of the Romantic piano virtuoso. The complex rhythms in electronic dance music have roots in the experiments of 20th-century composers like Stravinsky. The dramatic, emotional music in a movie soundtrack is heavily influenced by the operas of Wagner. By understanding music history, you gain a deeper appreciation for the music you love now."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-history-101-l14-a1",
          "title": "Match the Pairs",
          "type": "matching_pairs",
          "pairs": [
            {
              "id": "music-history-101-l14-a-1-p1",
              "left": "Pop melody structure",
              "right": "Classical balanced 4-bar phrases"
            },
            {
              "id": "music-history-101-l14-a-1-p2",
              "left": "Rock guitar virtuosity",
              "right": "Romantic-era solo performer tradition"
            },
            {
              "id": "music-history-101-l14-a-1-p3",
              "left": "Jazz improvisation",
              "right": "Baroque ornamentation and embellishment"
            },
            {
              "id": "music-history-101-l14-a-1-p4",
              "left": "Hip-hop sampling",
              "right": "Centuries of composers quoting others"
            },
            {
              "id": "music-history-101-l14-a-1-p5",
              "left": "Film scores",
              "right": "Late Romantic orchestral writing (Wagner, Strauss)"
            },
            {
              "id": "music-history-101-l14-a-1-p6",
              "left": "EDM synthesizers",
              "right": "20th-century electronic avant-garde"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-history-101-l14-fc-1",
          "front": "'Classical music' (clarification)",
          "back": "Specifically: the Classical period (1750–1820). More broadly: 'Western art music' is the correct umbrella term."
        },
        {
          "id": "music-history-101-l14-fc-2",
          "front": "Mendelssohn's Bach revival",
          "back": "In 1829, Mendelssohn performed Bach's St. Matthew Passion, sparking a revival of Bach's forgotten works."
        }
      ]
    },
    {
      "id": "music-history-101-l15",
      "title": "Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate comprehensive mastery of music history"
      ],
      "questions": [
        {
          "id": "music-history-101-l15-q-1",
          "text": "Hip-hop originated in:",
          "options": [
            {
              "id": "music-history-101-l15-q-1-opt-0",
              "text": "Detroit in the 1980s"
            },
            {
              "id": "music-history-101-l15-q-1-opt-1",
              "text": "The South Bronx in the 1970s"
            },
            {
              "id": "music-history-101-l15-q-1-opt-2",
              "text": "Los Angeles in the 1990s"
            },
            {
              "id": "music-history-101-l15-q-1-opt-3",
              "text": "Chicago in the 1960s"
            }
          ],
          "correctOptionId": "music-history-101-l15-q-1-opt-1"
        },
        {
          "id": "music-history-101-l15-q-2",
          "text": "Which technology first allowed music to be recorded and played back?",
          "options": [
            {
              "id": "music-history-101-l15-q-2-opt-0",
              "text": "Radio"
            },
            {
              "id": "music-history-101-l15-q-2-opt-1",
              "text": "The phonograph"
            },
            {
              "id": "music-history-101-l15-q-2-opt-2",
              "text": "The synthesizer"
            },
            {
              "id": "music-history-101-l15-q-2-opt-3",
              "text": "The internet"
            }
          ],
          "correctOptionId": "music-history-101-l15-q-2-opt-1"
        },
        {
          "id": "music-history-101-l15-q-3",
          "text": "Romantic-era composers drew inspiration from all EXCEPT:",
          "options": [
            {
              "id": "music-history-101-l15-q-3-opt-0",
              "text": "Nationalism and folk music"
            },
            {
              "id": "music-history-101-l15-q-3-opt-1",
              "text": "Literature and nature"
            },
            {
              "id": "music-history-101-l15-q-3-opt-2",
              "text": "12-tone serial rows"
            },
            {
              "id": "music-history-101-l15-q-3-opt-3",
              "text": "Personal emotion and expression"
            }
          ],
          "correctOptionId": "music-history-101-l15-q-3-opt-2"
        },
        {
          "id": "music-history-101-l15-q-4",
          "text": "The connection between film scores and late Romantic music exists because:",
          "options": [
            {
              "id": "music-history-101-l15-q-4-opt-0",
              "text": "Film composers use the same instruments and emotional orchestral techniques Wagner and Strauss pioneered."
            },
            {
              "id": "music-history-101-l15-q-4-opt-1",
              "text": "Films are always set in the 19th century."
            },
            {
              "id": "music-history-101-l15-q-4-opt-2",
              "text": "Romantic composers wrote for silent films."
            },
            {
              "id": "music-history-101-l15-q-4-opt-3",
              "text": "Film scores use 12-tone technique exclusively."
            }
          ],
          "correctOptionId": "music-history-101-l15-q-4-opt-0"
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
