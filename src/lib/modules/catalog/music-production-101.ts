import type { LearningModule } from "@/lib/modules/types";

export const MusicProduction101Module: LearningModule = {
  "id": "music-production-101",
  "title": "Introduction to Music Production",
  "description": "Learn to create music with digital tools — from setting up a DAW and recording audio to mixing, beat making, and sound design. No instruments required.",
  "subject": "Music",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "music",
    "technology"
  ],
  "minAge": 13,
  "maxAge": 18,
  "version": "2.0.0",
  "learningObjectives": [
    "Navigate a DAW (Digital Audio Workstation) interface and its core features",
    "Record audio using a microphone and understand signal flow",
    "Build a beat using drum machines and virtual instruments",
    "Apply EQ, compression, and reverb to shape a mix",
    "Arrange a song with intro, verse, chorus, and outro sections",
    "Understand basic sound design with synthesizers",
    "Export a finished track in standard audio formats"
  ],
  "lessons": [
    {
      "id": "music-production-101-l01",
      "title": "What Is a DAW?",
      "type": "video",
      "duration": 11,
      "objectives": [
        "Define a DAW and explain its role in modern music production",
        "Identify the main components: timeline, mixer, piano roll, browser",
        "Compare popular DAWs and their strengths"
      ],
      "chunks": [
        {
          "id": "music-production-101-l01-c1",
          "title": "The Digital Audio Workstation",
          "content": "A Digital Audio Workstation, commonly known as a DAW, is a powerful software tool that enables you to create and produce music directly on your computer. With a DAW, you can perform a variety of tasks: you can record sounds, edit them to make them just right, arrange different sections of your song in a way that flows well, mix all the elements together to create a polished sound, and finally, export your completed music so you can share it with friends or even the world!\nIn the past, making music was a complex process that required a lot of expensive equipment and a large studio filled with various machines, such as tape recorders and mixing consoles. These setups could take up entire rooms and were often only accessible to professional musicians and producers. However, thanks to advancements in technology, you can now have all of that capability right on your laptop!\nIn fact, the features and power of a modern DAW can actually exceed what was available in a million-dollar studio back in the 1980s! This means that almost every popular song you hear today has been created using a DAW, making it an essential tool for anyone who wants to dive into music production. Whether you're a beginner or an experienced musician, learning how to use a DAW can open up a world of creative possibilities for you in music-making.\nContext recap: A Digital Audio Workstation, commonly known as a DAW, is a powerful software tool that enables you to create and produce music directly on your computer. With a DAW, you can perform a variety of tasks: you can record sounds, edit them to make them just right, arrange different sections of your song in a way that flows well, mix all the elements together to create a polished sound, and finally, export your completed music so you can share it with friends or even the world! In the past, making music was a complex process that required a lot of expensive equipment and a large studio filled with various machines, such as tape recorders and mixing consoles. These setups could take up entire rooms and were often only accessible to professional musicians and producers."
        },
        {
          "id": "music-production-101-l01-c2",
          "title": "Core Interface Elements",
          "content": "Every Digital Audio Workstation (DAW) has four main parts that are essential for creating music. First, we have the Timeline or Arrangement View. This is where you can see your song laid out in tracks from left to right. It helps you organize your music and visualize how different sections fit together, just like a blueprint for a house. Next is the Mixer. This is a powerful tool that allows you to control the volume, panning, and effects for each track. Think of it as the control center where you blend different sounds together to create the perfect mix. The third part is the Piano Roll or MIDI Editor. This is where you can draw or edit musical notes for virtual instruments. It’s a fantastic way to create melodies and harmonies, allowing your creativity to shine. Finally, we have the Browser. This is your treasure chest where you can find sounds, samples, and plugins to use in your music. It’s like a library filled with all the tools you need to bring your musical ideas to life. Learning these four areas is similar to getting to know the different rooms in a new house; each room has its own purpose and contributes to making your musical masterpiece come together beautifully.\nContext recap: Every Digital Audio Workstation (DAW) has four main parts that are essential for creating music. First, we have the Timeline or Arrangement View. This is where you can see your song laid out in tracks from left to right. It helps you organize your music and visualize how different sections fit together, just like a blueprint for a house.\nWhy this matters: Core Interface Elements helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "music-production-101-l01-c3",
          "title": "Choosing a DAW",
          "content": "When it comes to creating music, choosing the right Digital Audio Workstation (DAW) is an important step. There are several popular DAWs, each designed to cater to different needs and styles of music production. For instance, Ableton Live is known for its excellent capabilities in beat making and is especially favored by musicians who perform live. If you're a Mac user looking to write songs, Logic Pro is a powerful tool that offers a wide range of features to help you craft your music. On the other hand, FL Studio is a favorite among hip-hop and electronic dance music producers, and it works on both Windows and Mac platforms, making it quite versatile. If you're just starting out, GarageBand is a fantastic option because it's free for Mac and iOS users, providing a user-friendly interface that’s perfect for beginners. Lastly, Reaper is an affordable DAW that allows for extensive customization, making it suitable for those who want to tailor their music production experience. While all these DAWs share similar core functions, the most important thing is to choose one that you enjoy using and feel comfortable mastering. Remember, the best DAW is the one that inspires you to create music!\nContext recap: When it comes to creating music, choosing the right Digital Audio Workstation (DAW) is an important step. There are several popular DAWs, each designed to cater to different needs and styles of music production. For instance, Ableton Live is known for its excellent capabilities in beat making and is especially favored by musicians who perform live. If you're a Mac user looking to write songs, Logic Pro is a powerful tool that offers a wide range of features to help you craft your music.\nWhy this matters: Choosing a DAW helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        }
      ],
      "flashcards": [
        {
          "id": "music-production-101-l01-f1",
          "front": "DAW",
          "back": "Digital Audio Workstation — software for recording, editing, arranging, mixing, and exporting music"
        },
        {
          "id": "music-production-101-l01-f2",
          "front": "Timeline / Arrangement view",
          "back": "The main view in a DAW showing tracks laid out horizontally over time"
        },
        {
          "id": "music-production-101-l01-f3",
          "front": "Piano roll",
          "back": "A grid editor in a DAW where you draw and edit MIDI notes for virtual instruments"
        },
        {
          "id": "music-production-101-l01-f4",
          "front": "MIDI",
          "back": "Musical Instrument Digital Interface — a protocol that transmits note data (pitch, velocity, duration) rather than audio"
        }
      ],
      "learningAids": [
        {
          "id": "music-production-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "music-production-101-l02",
      "title": "Audio vs. MIDI",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Distinguish between audio recordings and MIDI data",
        "Explain when to use audio vs. MIDI in a project",
        "Record a simple MIDI pattern and an audio clip"
      ],
      "chunks": [
        {
          "id": "music-production-101-l02-c1",
          "title": "Audio: Capturing Sound",
          "content": "When we discuss audio recordings, we are really talking about the process of capturing real sound waves. This fascinating process begins when a microphone picks up vibrations in the air, which are created by sounds around us. The microphone then converts these vibrations into an electrical signal. This signal is sent to a Digital Audio Workstation (DAW), which is a special software used for music production. The DAW stores this electrical signal as a digital file, and you might recognize some common file formats like WAV, AIFF, or MP3.\nIt's important to understand that audio recordings are fixed once they are made. This means that if you want to change the pitch or timing of a note after it has been recorded, it can be quite challenging without using special tools designed for this purpose, such as Flex Time or Melodyne.\nAudio recordings are particularly great for capturing the essence of vocals, live instruments, and sound effects. They allow you to preserve the unique qualities of a performance, making it sound authentic and true to life. This is why many musicians and producers choose to use audio recordings in their projects, as they bring a rich, organic feel to the music.\nContext recap: When we discuss audio recordings, we are really talking about the process of capturing real sound waves. This fascinating process begins when a microphone picks up vibrations in the air, which are created by sounds around us. The microphone then converts these vibrations into an electrical signal. This signal is sent to a Digital Audio Workstation (DAW), which is a special software used for music production.\nWhy this matters: Audio: Capturing Sound helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "music-production-101-l02-c2",
          "title": "MIDI: Capturing Performance",
          "content": "MIDI, which stands for Musical Instrument Digital Interface, is a fascinating tool in music production that works differently from traditional audio recording. Instead of capturing actual sound, MIDI records your performance as data. This data includes important details like which notes you played, how hard you pressed each key, and how long you held them down. This means that when you play a note on your keyboard, MIDI takes note of all these aspects and stores them as information.\nOnce you have recorded your performance, this data can trigger a virtual instrument. Virtual instruments can be anything from a software synthesizer that creates electronic sounds, to a digital piano that mimics the sound of a real piano, or even a drum machine that produces rhythmic beats.\nOne of the most exciting features of MIDI is its flexibility. After you record, you can easily change the instrument you used to play the notes. If you made a mistake and played the wrong note, you can fix it without having to start over. You can also adjust the timing of your notes to make them fit better with the music, or even change the key of the entire piece. This means you can experiment and explore different sounds and styles without the pressure of re-recording everything.\nMIDI is particularly great for creating beats, synthesizer sounds, and even simulating a full orchestra with virtual instruments. It opens up a world of possibilities for musicians and producers, allowing for creativity and innovation in music production.\nContext recap: MIDI, which stands for Musical Instrument Digital Interface, is a fascinating tool in music production that works differently from traditional audio recording. Instead of capturing actual sound, MIDI records your performance as data. This data includes important details like which notes you played, how hard you pressed each key, and how long you held them down. This means that when you play a note on your keyboard, MIDI takes note of all these aspects and stores them as information.\nWhy this matters: MIDI: Capturing Performance helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        },
        {
          "id": "music-production-101-l02-c3",
          "title": "When to Use Each",
          "content": "When you're making music, it's important to think about whether to use audio or MIDI, as each has its own strengths. Audio is great for capturing real performances, like when you record vocals, acoustic guitar, live drums, or even sounds from the environment, known as field recordings. These sounds have a unique quality that can really bring your music to life. On the flip side, MIDI is perfect for creating elements like drum beats, synthesizer pads, piano parts, and orchestral arrangements. The cool thing about MIDI is that it gives you the flexibility to edit your music after you've recorded it, allowing you to experiment and make changes easily. In fact, many professional music producers use a mix of both audio and MIDI in their work. They might use MIDI for programmed elements, which can be adjusted and tweaked, and audio for those special live performances. When you combine these two in a Digital Audio Workstation (DAW), you can create a polished and professional-sounding final product that showcases the best of both worlds.\nContext recap: When you're making music, it's important to think about whether to use audio or MIDI, as each has its own strengths. Audio is great for capturing real performances, like when you record vocals, acoustic guitar, live drums, or even sounds from the environment, known as field recordings. These sounds have a unique quality that can really bring your music to life. On the flip side, MIDI is perfect for creating elements like drum beats, synthesizer pads, piano parts, and orchestral arrangements.\nWhy this matters: When to Use Each helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-production-101-l02-a1",
          "title": "Sort into Categories",
          "type": "sorting_buckets",
          "buckets": [
            "Audio Recording",
            "MIDI Recording"
          ],
          "items": [
            {
              "text": "Captures actual sound waves",
              "bucket": "Audio Recording"
            },
            {
              "text": "Stores note data (pitch, velocity, duration)",
              "bucket": "MIDI Recording"
            },
            {
              "text": "Can change the instrument after recording",
              "bucket": "MIDI Recording"
            },
            {
              "text": "Best for vocals and live instruments",
              "bucket": "Audio Recording"
            },
            {
              "text": "Stored as WAV, AIFF, or MP3",
              "bucket": "Audio Recording"
            },
            {
              "text": "Can fix wrong notes easily",
              "bucket": "MIDI Recording"
            },
            {
              "text": "Best for drum beats and synth parts",
              "bucket": "MIDI Recording"
            },
            {
              "text": "Requires a microphone to record",
              "bucket": "Audio Recording"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-production-101-l02-f1",
          "front": "Audio recording",
          "back": "A digital capture of actual sound waves — fixed once recorded; used for vocals and live instruments"
        },
        {
          "id": "music-production-101-l02-f2",
          "front": "MIDI recording",
          "back": "A capture of performance data (notes, velocity, duration) — fully editable; triggers virtual instruments"
        },
        {
          "id": "music-production-101-l02-f3",
          "front": "Virtual instrument (VSTi)",
          "back": "Software that generates sound from MIDI data — synthesizers, samplers, drum machines"
        }
      ],
      "learningAids": [
        {
          "id": "music-production-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "music-production-101-l03",
      "title": "DAW Basics Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of DAW fundamentals and audio vs. MIDI"
      ],
      "questions": [
        {
          "id": "music-production-101-l03-q1",
          "text": "What does MIDI record?",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Actual sound waves from a microphone"
            },
            {
              "id": "b",
              "text": "Note data — pitch, velocity, and duration"
            },
            {
              "id": "c",
              "text": "The electrical signal from an amplifier"
            },
            {
              "id": "d",
              "text": "The volume level of a speaker"
            }
          ],
          "correctOptionId": "b",
          "explanation": ""
        },
        {
          "id": "music-production-101-l03-q2",
          "text": "Which DAW view shows tracks laid out horizontally over time?",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Piano roll"
            },
            {
              "id": "b",
              "text": "Mixer"
            },
            {
              "id": "c",
              "text": "Timeline / Arrangement"
            },
            {
              "id": "d",
              "text": "Browser"
            }
          ],
          "correctOptionId": "c",
          "explanation": ""
        },
        {
          "id": "music-production-101-l03-q3",
          "text": "Audio recordings are best used for:",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Synth pads and drum machine beats"
            },
            {
              "id": "b",
              "text": "Vocals and live instruments"
            },
            {
              "id": "c",
              "text": "Changing the instrument after recording"
            },
            {
              "id": "d",
              "text": "Programming MIDI patterns"
            }
          ],
          "correctOptionId": "b",
          "explanation": ""
        },
        {
          "id": "music-production-101-l03-q4",
          "text": "A key advantage of MIDI over audio is:",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Higher sound quality"
            },
            {
              "id": "b",
              "text": "Ability to edit notes, timing, and instrument after recording"
            },
            {
              "id": "c",
              "text": "No computer required"
            },
            {
              "id": "d",
              "text": "It captures microphone input"
            }
          ],
          "correctOptionId": "b",
          "explanation": ""
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
          "id": "music-production-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "music-production-101-l04",
      "title": "Beat Making: Drums and Rhythm",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Program a basic drum pattern using a step sequencer or piano roll",
        "Understand the roles of kick, snare, hi-hat, and percussion",
        "Apply swing and velocity variation to humanize a beat"
      ],
      "chunks": [
        {
          "id": "music-production-101-l04-c1",
          "title": "The Drum Kit Breakdown",
          "content": "Every great beat begins with three essential sounds that serve as the backbone of rhythm in music production. First, we have the Kick, which is the deep, low thump that drives the rhythm forward. You can usually hear it on the first and third beats of a measure, giving the music its pulse. Next is the Snare, which produces a sharp, cracking sound that adds a punch to the beat. This sound typically lands on the second and fourth beats, creating a strong backbeat that makes you want to move. Finally, we have the Hi-hat, which creates a sizzling metallic pulse that helps keep time. The Hi-hat often plays faster notes, like eighth or sixteenth notes, adding texture and energy to the rhythm. Together, these three sounds—the Kick, Snare, and Hi-hat—form the rhythmic skeleton that supports nearly every genre of music. Understanding how to use these elements effectively is crucial for any aspiring music producer, as they lay the groundwork for creating engaging and dynamic beats that resonate with listeners. By mastering these sounds, you can start to explore your own unique style and make music that truly reflects your creativity.\nContext recap: Every great beat begins with three essential sounds that serve as the backbone of rhythm in music production. First, we have the Kick, which is the deep, low thump that drives the rhythm forward. You can usually hear it on the first and third beats of a measure, giving the music its pulse. Next is the Snare, which produces a sharp, cracking sound that adds a punch to the beat.\nWhy this matters: The Drum Kit Breakdown helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        },
        {
          "id": "music-production-101-l04-c2",
          "title": "Programming Patterns",
          "content": "When you're diving into music production, one of the first things you'll encounter is the step sequencer in most Digital Audio Workstations (DAWs). This is a helpful tool that looks like a grid, where you can easily click to place different drum hits. Alternatively, you might use a piano roll, which is another way to program your drums. Let's explore how to create some basic beats!\nFor instance, if you want to make a simple hip-hop beat, you can place the kick drum on beats 1 and 3. The snare drum would go on beats 2 and 4, while the hi-hats play on every eighth note. This creates a solid foundation for your track.\nNow, if you're interested in electronic dance music (EDM), you might want to try a classic beat called four-on-the-floor. In this pattern, the kick drum hits on every beat—1, 2, 3, and 4. You can add a snare or clap on beats 2 and 4, and keep the hi-hats playing on every eighth note. Often, producers will include an open hi-hat on the 'and' of beat 4 to give it a little extra flair.\nStarting with these simple patterns is a great way to build your confidence. As you get more comfortable with the basics, don't hesitate to experiment by adding fills and variations. This will help you create more dynamic and interesting beats that showcase your unique style!\nContext recap: When you're diving into music production, one of the first things you'll encounter is the step sequencer in most Digital Audio Workstations (DAWs). This is a helpful tool that looks like a grid, where you can easily click to place different drum hits. Alternatively, you might use a piano roll, which is another way to program your drums. Let's explore how to create some basic beats!\nWhy this matters: Programming Patterns helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "music-production-101-l04-c3",
          "title": "Humanizing Beats",
          "content": "When beats are perfectly aligned to the grid, they can sound robotic and lack the human touch that makes music feel alive. To give your beats a more natural and expressive quality, you can use two important techniques: (1) Swing, which involves slightly delaying every other hit in your rhythm. This creates a laid-back groove that feels more relaxed and organic. Swing is a popular technique in genres like hip-hop and jazz, where the rhythm flows smoothly. On the other hand, electronic dance music (EDM) often uses less swing to maintain a more driving beat. (2) Velocity variation is another key technique. This means that not every hit in your rhythm should be played at the same volume. By accenting certain beats, like the second and fourth beats in a measure, or by making some hi-hats softer than others, you can add depth and dynamics to your music. This variation helps your beats to breathe and feel more alive, making them more engaging for listeners. By incorporating these techniques, you can transform your beats from mechanical to something that truly resonates with the human experience of music-making.\nContext recap: When beats are perfectly aligned to the grid, they can sound robotic and lack the human touch that makes music feel alive. To give your beats a more natural and expressive quality, you can use two important techniques: (1) Swing, which involves slightly delaying every other hit in your rhythm. This creates a laid-back groove that feels more relaxed and organic. Swing is a popular technique in genres like hip-hop and jazz, where the rhythm flows smoothly.\nWhy this matters: Humanizing Beats helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        }
      ],
      "flashcards": [
        {
          "id": "music-production-101-l04-f1",
          "front": "Kick drum",
          "back": "The deep, low-frequency drum that drives the rhythm — typically on beats 1 and 3 (or every beat in EDM)"
        },
        {
          "id": "music-production-101-l04-f2",
          "front": "Snare / backbeat",
          "back": "The sharp, cracking hit on beats 2 and 4 — provides the rhythmic spine of pop, rock, and hip-hop"
        },
        {
          "id": "music-production-101-l04-f3",
          "front": "Swing",
          "back": "Slightly delaying every other note to create a laid-back, groovy feel — essential in hip-hop and jazz"
        },
        {
          "id": "music-production-101-l04-f4",
          "front": "Quantize",
          "back": "Snapping notes to the grid so they are perfectly on time — useful but can sound robotic if overdone"
        }
      ],
      "learningAids": [
        {
          "id": "music-production-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "music-production-101-l05",
      "title": "Building a Beat Workshop",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Construct a beat by placing kick, snare, and hi-hat hits in the correct positions",
        "Apply swing to a straight pattern",
        "Vary velocity for a more natural feel"
      ],
      "chunks": [
        {
          "id": "music-production-101-l05-c1",
          "title": "Step-by-Step Beat Building",
          "content": "Let's embark on an exciting journey to create a classic hip-hop beat in 4/4 time! This is a fun and interactive way to learn about rhythm and music production. Here’s how we can do it step by step:\n**Step 1:** Begin by placing the kick drum on the first beat of the measure. This is the strong beat that sets the foundation for our rhythm. Next, add another kick drum on the 'and' of beat 2. This placement gives our beat a syncopated bounce, making it feel lively and engaging.\n**Step 2:** Now, let’s introduce the snare drum! Place the snare on beats 2 and 4. This creates what we call the backbeat, which is essential in hip-hop music and helps to drive the rhythm forward.\n**Step 3:** It’s time to add some hi-hats! Place hi-hats on every eighth note, which means you will have a total of 8 hi-hat hits in each measure. This adds texture and keeps the beat moving.\n**Step 4:** For an extra boost of energy, let’s add a second kick drum on beat 3. This will enhance the drive of our beat and make it even more exciting!\n**Step 5:** To give our hi-hats a more relaxed and groovy feel, we can apply a swing of 50-60%. This means that the timing of the hi-hats will feel a bit more laid-back, which is a signature element in many hip-hop tracks.\n**Step 6:** Finally, let’s adjust the velocity of the off-beat hi-hats. Lowering their velocity to about 70% will create a dynamic rhythm, making the beat feel more interesting and varied.\nEnjoy the process of building your beat! Remember, music production is all about experimenting and having fun. Don’t be afraid to try different sounds and patterns to make your beat unique!\nContext recap: Let's embark on an exciting journey to create a classic hip-hop beat in 4/4 time! This is a fun and interactive way to learn about rhythm and music production. Here’s how we can do it step by step:\n**Step 1:** Begin by placing the kick drum on the first beat of the measure. This is the strong beat that sets the foundation for our rhythm.\nWhy this matters: Step-by-Step Beat Building helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "music-production-101-l05-c2",
          "title": "Adding Percussion and Fills",
          "content": "After you've successfully created your core beat, it's time to take your music to the next level by adding some extra percussion elements. Think about incorporating sounds like shakers, rim shots, tambourines, or congas into your track. These additional percussion sounds are like the icing on a cake; they can really enhance the overall flavor of your music. However, it's crucial to keep these sounds subtle. You want them to add depth and texture without overpowering the main elements of your beat, which typically consist of the kick, snare, and hi-hat.\nMoreover, every 4 or 8 bars, you have the opportunity to introduce a fill. A fill is a short rhythmic variation that helps signal a change in the music, keeping things interesting for your listeners. For example, you might use a simple snare roll or create a break in the kick pattern. These little surprises can capture the listener's attention and make them excited about what’s coming next in your song. Remember, the goal is to create a dynamic and engaging listening experience that keeps your audience wanting more!\nSo, as you layer your percussion and add fills, think about how each element contributes to the overall vibe of your track. Experiment with different sounds and rhythms to find what works best for your unique style.\nContext recap: After you've successfully created your core beat, it's time to take your music to the next level by adding some extra percussion elements. Think about incorporating sounds like shakers, rim shots, tambourines, or congas into your track. These additional percussion sounds are like the icing on a cake; they can really enhance the overall flavor of your music. However, it's crucial to keep these sounds subtle.\nWhy this matters: Adding Percussion and Fills helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-production-101-l05-a1",
          "title": "Drag and Drop",
          "type": "drag_and_drop",
          "prompt": "Place each drum sound on the correct beats for a basic rock beat in 4/4 time:",
          "items": [
            "Kick",
            "Kick",
            "Snare",
            "Snare",
            "Hi-hat ×8"
          ],
          "zones": [
            "Beat 1",
            "Beat 3",
            "Beat 2",
            "Beat 4",
            "Every eighth note"
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-production-101-l05-f1",
          "front": "Four-on-the-floor",
          "back": "A kick drum pattern hitting on every beat (1-2-3-4) — signature of EDM, disco, and house music"
        },
        {
          "id": "music-production-101-l05-f2",
          "front": "Fill",
          "back": "A short rhythmic variation that signals a transition between sections — keeps the beat from sounding repetitive"
        },
        {
          "id": "music-production-101-l05-f3",
          "front": "Velocity",
          "back": "How hard a MIDI note is played (0-127) — controls volume and often timbre of the triggered sound"
        }
      ],
      "learningAids": [
        {
          "id": "music-production-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "music-production-101-l06",
      "title": "Beat Making Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of beat construction"
      ],
      "questions": [
        {
          "id": "music-production-101-l06-q1",
          "text": "In most pop and rock music, the snare hits on which beats?",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "1 and 3"
            },
            {
              "id": "b",
              "text": "2 and 4"
            },
            {
              "id": "c",
              "text": "Every beat"
            },
            {
              "id": "d",
              "text": "Only beat 1"
            }
          ],
          "correctOptionId": "b",
          "explanation": ""
        },
        {
          "id": "music-production-101-l06-q2",
          "text": "What does 'swing' do to a beat?",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Removes all hi-hats"
            },
            {
              "id": "b",
              "text": "Slightly delays every other note for a laid-back feel"
            },
            {
              "id": "c",
              "text": "Doubles the tempo"
            },
            {
              "id": "d",
              "text": "Adds reverb to the snare"
            }
          ],
          "correctOptionId": "b",
          "explanation": ""
        },
        {
          "id": "music-production-101-l06-q3",
          "text": "'Four-on-the-floor' means the kick drum hits on:",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Beats 1 and 3 only"
            },
            {
              "id": "b",
              "text": "Every beat (1-2-3-4)"
            },
            {
              "id": "c",
              "text": "Only the offbeats"
            },
            {
              "id": "d",
              "text": "Beats 2 and 4 only"
            }
          ],
          "correctOptionId": "b",
          "explanation": ""
        },
        {
          "id": "music-production-101-l06-q4",
          "text": "Velocity variation helps a beat sound more:",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Robotic and precise"
            },
            {
              "id": "b",
              "text": "Natural and human"
            },
            {
              "id": "c",
              "text": "Distorted"
            },
            {
              "id": "d",
              "text": "Reverberant"
            }
          ],
          "correctOptionId": "b",
          "explanation": ""
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
          "id": "music-production-101-l06-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "music-production-101-l07",
      "title": "Recording Audio: Mics, Levels, and Signal Flow",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Describe the recording signal chain: mic → interface → DAW",
        "Set proper recording levels (avoid clipping)",
        "Explain the difference between dynamic and condenser microphones"
      ],
      "chunks": [
        {
          "id": "music-production-101-l07-c1",
          "title": "The Signal Chain",
          "content": "When we record audio, we follow a clear and simple process known as the signal chain. This process begins with the sound source, which can be anything from your own voice to an instrument like a guitar. The first step is capturing that sound with a microphone. The microphone's job is to take the sound waves—those vibrations in the air—and convert them into an electrical signal that can be processed.\nOnce the microphone has done its job, the electrical signal travels to an audio interface. This device is crucial because it transforms the analog signal (the electrical signal) into a digital format that your computer can understand. This transformation is important because computers work with digital data, allowing us to edit and manipulate the sound in various ways.\nFinally, the Digital Audio Workstation (DAW) comes into play. The DAW is the software where we can record, edit, and mix our audio. It captures the digital signal from the audio interface, enabling us to create our music.\nThink of the audio interface as a bridge connecting the analog world of sound to the digital world of music production. It includes a preamp, which amplifies the microphone signal to make it stronger, and an analog-to-digital converter that ensures the sound is accurately transformed. The audio interface connects to your computer using USB or Thunderbolt, making it easy to integrate into your music setup. Understanding this signal chain is essential for anyone interested in music production, as it lays the foundation for creating high-quality recordings.\nContext recap: When we record audio, we follow a clear and simple process known as the signal chain. This process begins with the sound source, which can be anything from your own voice to an instrument like a guitar. The first step is capturing that sound with a microphone. The microphone's job is to take the sound waves—those vibrations in the air—and convert them into an electrical signal that can be processed.\nWhy this matters: The Signal Chain helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        },
        {
          "id": "music-production-101-l07-c2",
          "title": "Setting Levels",
          "content": "One of the most important skills you can learn in music recording is how to set the right input level for your audio. This is crucial because if your recording level is too quiet, you might end up with unwanted background noise when you try to make it louder later on. Imagine trying to listen to a whisper; if you turn it up, you might hear all sorts of distracting sounds in the background. On the flip side, if your recording level is too loud, you risk something called clipping. Clipping is a type of distortion that happens when the audio signal is too strong, and unfortunately, once that happens, you can't fix it. A good rule of thumb is to aim for peaks around -12 to -6 dBFS on your Digital Audio Workstation (DAW) meter. This range helps ensure that your recordings sound clear and professional. Additionally, it's important to leave some headroom in your levels. This means you should allow a little extra space in your recordings. You can always turn up the volume later if needed, but once a recording is clipped, it’s permanently distorted. This careful management of your audio levels is known as 'gain staging,' and mastering this technique will greatly improve the quality of your recordings.\nContext recap: One of the most important skills you can learn in music recording is how to set the right input level for your audio. This is crucial because if your recording level is too quiet, you might end up with unwanted background noise when you try to make it louder later on. Imagine trying to listen to a whisper; if you turn it up, you might hear all sorts of distracting sounds in the background. On the flip side, if your recording level is too loud, you risk something called clipping.\nWhy this matters: Setting Levels helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        },
        {
          "id": "music-production-101-l07-c3",
          "title": "Microphone Types",
          "content": "Microphones are essential tools in music production, and there are several types, each with unique features suited for different recording situations. One popular type is the dynamic microphone, like the Shure SM58. These microphones are known for being tough and affordable, making them a favorite among performers. They excel at capturing loud sounds, which is why they are often used for live vocals, guitar amplifiers, and snare drums. Their durability means they can withstand the rigors of live performances without easily breaking.\nIn contrast, condenser microphones are designed to be more sensitive and can capture a wider range of sound details. This makes them perfect for studio recordings, especially for vocals and acoustic instruments, where clarity and nuance are important. However, condenser mics require phantom power, which is a special type of electrical power (usually 48V) that is provided by your audio interface to operate correctly.\nFor those just starting out in music production, USB microphones offer a fantastic option. They combine the microphone and audio interface into one easy-to-use device, which simplifies the recording process. This makes USB mics a great choice for beginners who want to get started without the complexity of setting up multiple pieces of equipment. Understanding these different types of microphones will help you choose the right one for your recording needs and improve your music production skills.\nContext recap: Microphones are essential tools in music production, and there are several types, each with unique features suited for different recording situations. One popular type is the dynamic microphone, like the Shure SM58. These microphones are known for being tough and affordable, making them a favorite among performers. They excel at capturing loud sounds, which is why they are often used for live vocals, guitar amplifiers, and snare drums.\nWhy this matters: Microphone Types helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "music-production-101-l07-f1",
          "front": "Audio interface",
          "back": "Hardware that converts analog audio to digital for the computer and vice versa — the bridge between mic and DAW"
        },
        {
          "id": "music-production-101-l07-f2",
          "front": "Clipping",
          "back": "Digital distortion that occurs when the signal is too loud — irreversible; avoid by leaving headroom"
        },
        {
          "id": "music-production-101-l07-f3",
          "front": "Gain staging",
          "back": "Setting proper volume levels at each stage of the signal chain to avoid noise and clipping"
        },
        {
          "id": "music-production-101-l07-f4",
          "front": "Phantom power (48V)",
          "back": "Electrical power sent from the interface to condenser microphones through the mic cable"
        }
      ],
      "learningAids": [
        {
          "id": "music-production-101-l07-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "music-production-101-l08",
      "title": "Mixing Fundamentals: EQ, Compression, Reverb",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Explain EQ (equalization) and use it to carve frequency space for each track",
        "Describe compression and when to use it",
        "Apply reverb to create spatial depth in a mix"
      ],
      "chunks": [
        {
          "id": "music-production-101-l08-c1",
          "title": "EQ: Sculpting Frequencies",
          "content": "Equalization, often referred to as EQ, is an essential tool in music production that allows you to fine-tune the sound of your audio tracks by adjusting specific frequency ranges. Understanding how to use EQ effectively can greatly enhance the quality of your mixes. Let's break down the different frequency ranges:\n- **Bass Frequencies (20-250 Hz)**: These lower frequencies provide warmth and depth to your sound. They are crucial for creating a solid foundation in your music, making it feel rich and full.\n- **Midrange Frequencies (250 Hz - 4 kHz)**: This range is where most of the melodic content and vocals reside. It’s important for clarity in your music, as it carries the main elements that listeners focus on.\n- **Treble Frequencies (4-20 kHz)**: These higher frequencies add brightness and clarity to your sound, giving it an airy feel. They help to make certain elements stand out in the mix.\nA fundamental principle to keep in mind when mixing is to cut frequencies before you boost them. For instance, if your vocals sound muddy or unclear, it’s often more effective to reduce the low-mid frequencies (around 200-400 Hz) rather than increasing the high frequencies. This approach helps to clean up the mix and allows each track to shine without competing for attention. Remember, each track should have its own unique frequency range to create a balanced and harmonious mix.\nContext recap: Equalization, often referred to as EQ, is an essential tool in music production that allows you to fine-tune the sound of your audio tracks by adjusting specific frequency ranges. Understanding how to use EQ effectively can greatly enhance the quality of your mixes. Let's break down the different frequency ranges:\n- **Bass Frequencies (20-250 Hz)**: These lower frequencies provide warmth and depth to your sound. They are crucial for creating a solid foundation in your music, making it feel rich and full.\nWhy this matters: EQ: Sculpting Frequencies helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        },
        {
          "id": "music-production-101-l08-c2",
          "title": "Compression: Controlling Dynamics",
          "content": "Compression is an important technique in music production that helps manage the dynamics of your audio tracks. Essentially, a compressor is a tool that automatically lowers the volume of a sound when it goes above a certain level, known as the threshold. This process helps to balance out the dynamics of your music. For example, it makes the quieter sections of your track a bit louder, while also keeping the louder sections from becoming overwhelming.\nWhen you start working with a compressor, you'll notice several key controls that are essential for effective use. The first is the Threshold, which determines the volume level at which the compressor begins to work. Next is the Ratio, which indicates how much compression is applied once the threshold is exceeded. Another important control is the Attack, which defines how quickly the compressor responds to a loud sound. Finally, there's the Release, which controls how quickly the compressor stops working after the sound falls below the threshold.\nFor elements like vocals and bass, it's often best to use gentle compression settings, typically in the range of 2:1 to 4:1. This helps to maintain a consistent sound in your mix, ensuring that these important elements are clear and balanced without sounding squashed or unnatural. Understanding and mastering compression can greatly enhance your music production skills, allowing you to create polished and professional-sounding tracks.\nContext recap: Compression is an important technique in music production that helps manage the dynamics of your audio tracks. Essentially, a compressor is a tool that automatically lowers the volume of a sound when it goes above a certain level, known as the threshold. This process helps to balance out the dynamics of your music. For example, it makes the quieter sections of your track a bit louder, while also keeping the louder sections from becoming overwhelming.\nWhy this matters: Compression: Controlling Dynamics helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "music-production-101-l08-c3",
          "title": "Reverb: Creating Space",
          "content": "Reverb is a fascinating audio effect that helps us understand how sound behaves in different environments. Imagine you're in a small room where your voice bounces off the walls, or in a grand cathedral where every note echoes beautifully. This effect is what we call reverb, and it adds a sense of space and richness to your music recordings, making them feel more alive and engaging. There are several types of reverb that you can use to achieve different sounds. For example, plate reverb is known for its bright and smooth quality, making it a classic choice for enhancing vocal tracks. Room reverb, on the other hand, offers a more natural and subtle sound, perfect for creating an intimate atmosphere. Then there's hall reverb, which gives a large and dramatic effect, ideal for orchestral music or powerful ballads. However, it's crucial to use reverb wisely. If you add too much, your mix can become muddy and unclear, losing its impact. A smart technique is to use sends, or auxiliary channels, for applying reverb. This method allows you to control the balance between the wet (the reverb effect) and dry (the original sound) signals, ensuring that your music remains clear and well-defined. By mastering reverb, you can create a more immersive listening experience that captivates your audience and enhances your musical storytelling.\nContext recap: Reverb is a fascinating audio effect that helps us understand how sound behaves in different environments. Imagine you're in a small room where your voice bounces off the walls, or in a grand cathedral where every note echoes beautifully. This effect is what we call reverb, and it adds a sense of space and richness to your music recordings, making them feel more alive and engaging. There are several types of reverb that you can use to achieve different sounds.\nWhy this matters: Reverb: Creating Space helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-production-101-l08-a1",
          "title": "Match the Pairs",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "EQ",
              "right": "Boosts or cuts specific frequency ranges"
            },
            {
              "left": "Compression",
              "right": "Reduces volume when signal exceeds a threshold"
            },
            {
              "left": "Reverb",
              "right": "Simulates sound reflections in a space"
            },
            {
              "left": "Threshold",
              "right": "The level at which compression begins"
            },
            {
              "left": "High-pass filter",
              "right": "Cuts frequencies below a set point (removes rumble)"
            },
            {
              "left": "Send / aux channel",
              "right": "Routes signal to a shared effect without replacing the dry sound"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-production-101-l08-f1",
          "front": "EQ (Equalization)",
          "back": "A tool that boosts or cuts specific frequency ranges — used to carve space in a mix so each instrument is clear"
        },
        {
          "id": "music-production-101-l08-f2",
          "front": "Compressor",
          "back": "Reduces dynamic range by attenuating signal above a threshold — evens out volume for consistency"
        },
        {
          "id": "music-production-101-l08-f3",
          "front": "Reverb",
          "back": "An effect simulating sound reflections in a physical space — adds depth and spatial dimension to a mix"
        },
        {
          "id": "music-production-101-l08-f4",
          "front": "High-pass filter",
          "back": "An EQ filter that removes frequencies below a set point — commonly used to cut rumble from non-bass tracks"
        }
      ],
      "learningAids": [
        {
          "id": "music-production-101-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "music-production-101-l09",
      "title": "Mixing Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of EQ, compression, and reverb"
      ],
      "questions": [
        {
          "id": "music-production-101-l09-q1",
          "text": "The EQ principle 'cut before you boost' means:",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Always cut frequencies from every track"
            },
            {
              "id": "b",
              "text": "Remove problem frequencies first rather than boosting others to compensate"
            },
            {
              "id": "c",
              "text": "Cut the volume of every track before mixing"
            },
            {
              "id": "d",
              "text": "Use a high-pass filter on every channel"
            }
          ],
          "correctOptionId": "b",
          "explanation": ""
        },
        {
          "id": "music-production-101-l09-q2",
          "text": "A compressor's 'threshold' controls:",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "How fast the compressor reacts"
            },
            {
              "id": "b",
              "text": "The level at which compression begins"
            },
            {
              "id": "c",
              "text": "The amount of reverb applied"
            },
            {
              "id": "d",
              "text": "The frequency range affected"
            }
          ],
          "correctOptionId": "b",
          "explanation": ""
        },
        {
          "id": "music-production-101-l09-q3",
          "text": "Reverb is best applied using a send/aux channel because:",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It uses less CPU"
            },
            {
              "id": "b",
              "text": "It lets you blend wet and dry independently and share one reverb across multiple tracks"
            },
            {
              "id": "c",
              "text": "It makes the reverb louder"
            },
            {
              "id": "d",
              "text": "It eliminates the need for EQ"
            }
          ],
          "correctOptionId": "b",
          "explanation": ""
        },
        {
          "id": "music-production-101-l09-q4",
          "text": "Clipping occurs when:",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The signal is too quiet"
            },
            {
              "id": "b",
              "text": "You use too much reverb"
            },
            {
              "id": "c",
              "text": "The signal exceeds the maximum digital level (0 dBFS)"
            },
            {
              "id": "d",
              "text": "The compressor ratio is too low"
            }
          ],
          "correctOptionId": "c",
          "explanation": ""
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "music-production-101-l10",
      "title": "Mastery Quiz: Production Foundations",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Synthesize all production concepts learned so far"
      ],
      "questions": [
        {
          "id": "music-production-101-l10-q1",
          "text": "The recording signal chain in order is:",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "DAW → Interface → Microphone → Sound"
            },
            {
              "id": "b",
              "text": "Sound → Microphone → Audio Interface → DAW"
            },
            {
              "id": "c",
              "text": "Microphone → DAW → Interface → Speaker"
            },
            {
              "id": "d",
              "text": "Sound → DAW → Microphone → Interface"
            }
          ],
          "correctOptionId": "b",
          "explanation": ""
        },
        {
          "id": "music-production-101-l10-q2",
          "text": "MIDI is preferable to audio when you need to:",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Record a vocalist's performance"
            },
            {
              "id": "b",
              "text": "Capture field recordings from nature"
            },
            {
              "id": "c",
              "text": "Change the instrument or fix notes after recording"
            },
            {
              "id": "d",
              "text": "Record a live drum kit"
            }
          ],
          "correctOptionId": "c",
          "explanation": ""
        },
        {
          "id": "music-production-101-l10-q3",
          "text": "Which microphone type requires phantom power?",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Dynamic"
            },
            {
              "id": "b",
              "text": "Condenser"
            },
            {
              "id": "c",
              "text": "Ribbon"
            },
            {
              "id": "d",
              "text": "USB"
            }
          ],
          "correctOptionId": "b",
          "explanation": ""
        },
        {
          "id": "music-production-101-l10-q4",
          "text": "In a mix, bass frequencies (20-250 Hz) provide:",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Clarity and air"
            },
            {
              "id": "b",
              "text": "Warmth and weight"
            },
            {
              "id": "c",
              "text": "Vocal presence"
            },
            {
              "id": "d",
              "text": "Stereo width"
            }
          ],
          "correctOptionId": "b",
          "explanation": ""
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "music-production-101-l11",
      "title": "Sound Design: Synths and Samplers",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Describe subtractive synthesis: oscillator → filter → amplifier",
        "Explain the role of ADSR envelopes in shaping sound",
        "Distinguish between synthesizers and samplers"
      ],
      "chunks": [
        {
          "id": "music-production-101-l11-c1",
          "title": "Subtractive Synthesis",
          "content": "Subtractive synthesis is a fundamental technique in sound design that many musicians and producers use to create unique sounds. This method starts with a raw waveform produced by an oscillator. There are several types of waveforms you can choose from, including saw, square, triangle, and sine waves. Each of these waveforms has its own distinct character. For instance, a sawtooth wave is known for its bright and buzzy sound, making it very lively and energetic. On the other hand, a sine wave is smooth and pure, often used for softer sounds. A square wave has a hollow quality that can add depth to your music.\nOnce you have selected your waveform, the next step is to shape the sound using a filter. This filter works by removing certain frequencies from the sound, much like an equalizer (EQ) but with a more focused approach. One common type of filter is the low-pass filter, which allows lower bass frequencies to pass through while cutting off higher treble frequencies. By adjusting the settings of this filter, you can create fascinating effects. For example, moving the filter can produce a 'wah' sound, which is often used in various music genres to add expression and movement to the sound. Understanding how to manipulate these elements is key to mastering sound design in music production.\nContext recap: Subtractive synthesis is a fundamental technique in sound design that many musicians and producers use to create unique sounds. This method starts with a raw waveform produced by an oscillator. There are several types of waveforms you can choose from, including saw, square, triangle, and sine waves. Each of these waveforms has its own distinct character.\nWhy this matters: Subtractive Synthesis helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "music-production-101-l11-c2",
          "title": "ADSR Envelopes",
          "content": "Every sound we hear has its own unique shape over time, and this shape is controlled by something called the ADSR envelope. The ADSR envelope is made up of four important stages: Attack, Decay, Sustain, and Release. Let's break these down one by one.\n1. **Attack**: This is the first stage, and it determines how quickly the sound reaches its maximum volume. For instance, if you hit a piano key, the sound comes on very quickly, which means it has a fast attack.\n2. **Decay**: After the sound reaches its peak volume, it doesn't stay there forever. The decay stage controls how fast the sound drops after that initial peak. A piano also has a fast decay, meaning it quickly decreases in volume after the initial sound.\n3. **Sustain**: This stage is all about the volume level that is maintained while you hold down the key. For a piano, this is usually at a medium level, which means it stays at a steady volume for as long as you keep the key pressed.\n4. **Release**: Finally, we have the release stage. This controls how quickly the sound fades away after you let go of the key. A piano has a medium release, so it doesn't stop abruptly but fades out gradually.\nNow, let's compare this to a pad sound, which is often used in electronic music. A pad typically has a slow attack, meaning it takes a while to reach full volume. It has no decay, which means it holds that volume steady without dropping. The sustain is full, so it maintains that sound for as long as you want, and it has a long release, creating a smooth and flowing sound that lingers in the air. Understanding these stages helps us create and manipulate sounds in exciting ways!\nBy learning about ADSR envelopes, you can start to think about how different instruments create their unique sounds and how you can use this knowledge in your own music production journey.\nContext recap: Every sound we hear has its own unique shape over time, and this shape is controlled by something called the ADSR envelope. The ADSR envelope is made up of four important stages: Attack, Decay, Sustain, and Release. Let's break these down one by one. 1.\nWhy this matters: ADSR Envelopes helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "music-production-101-l11-c3",
          "title": "Synthesizers vs. Samplers",
          "content": "Synthesizers and samplers are two essential tools in the world of music production, and each has its own unique role. A synthesizer is a device that creates sound from the ground up. It uses oscillators, which are electronic circuits that generate waveforms, along with mathematical principles to shape those sounds. This means that synthesizers can produce entirely new and innovative sounds that have never been heard before! On the other hand, a sampler is a tool that plays back recordings of real instruments or any other sounds you can think of. For example, when you use a 'realistic piano' plugin in your music software, it is typically a sampler that plays back recordings of a real piano being played at different volumes and notes. While synthesizers are fantastic for inventing new sounds, samplers excel at recreating sounds that already exist. Interestingly, many modern musical instruments combine both synthesizer and sampler features, using a sampled core sound enhanced with synthesized layers to create a richer and more dynamic audio experience. This blending of technologies allows musicians to explore a wide range of creative possibilities in their compositions.\nContext recap: Synthesizers and samplers are two essential tools in the world of music production, and each has its own unique role. A synthesizer is a device that creates sound from the ground up. It uses oscillators, which are electronic circuits that generate waveforms, along with mathematical principles to shape those sounds. This means that synthesizers can produce entirely new and innovative sounds that have never been heard before!\nWhy this matters: Synthesizers vs. Samplers helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-production-101-l11-a1",
          "title": "Sort into Categories",
          "type": "sorting_buckets",
          "buckets": [
            "Synthesizer",
            "Sampler"
          ],
          "items": [
            {
              "text": "Generates sound from oscillators",
              "bucket": "Synthesizer"
            },
            {
              "text": "Plays back recordings of real instruments",
              "bucket": "Sampler"
            },
            {
              "text": "Uses filters to sculpt raw waveforms",
              "bucket": "Synthesizer"
            },
            {
              "text": "Realistic piano plugin with recorded samples",
              "bucket": "Sampler"
            },
            {
              "text": "Creates entirely new sounds from math",
              "bucket": "Synthesizer"
            },
            {
              "text": "Drum kit plugin with recorded drum hits",
              "bucket": "Sampler"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-production-101-l11-f1",
          "front": "Oscillator",
          "back": "The sound source in a synthesizer — generates raw waveforms (saw, square, sine, triangle)"
        },
        {
          "id": "music-production-101-l11-f2",
          "front": "ADSR envelope",
          "back": "Attack, Decay, Sustain, Release — controls how a sound evolves over time from key press to key release"
        },
        {
          "id": "music-production-101-l11-f3",
          "front": "Low-pass filter",
          "back": "Removes frequencies above a cutoff point — the most common filter in subtractive synthesis"
        },
        {
          "id": "music-production-101-l11-f4",
          "front": "Sampler",
          "back": "A virtual instrument that plays back recordings of real sounds, mapped across the keyboard"
        }
      ]
    },
    {
      "id": "music-production-101-l12",
      "title": "Mastery Retest",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate comprehensive production knowledge"
      ],
      "questions": [
        {
          "id": "music-production-101-l12-q1",
          "text": "In subtractive synthesis, sound starts with a:",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Filter"
            },
            {
              "id": "b",
              "text": "Raw waveform from an oscillator"
            },
            {
              "id": "c",
              "text": "Recorded sample"
            },
            {
              "id": "d",
              "text": "Reverb effect"
            }
          ],
          "correctOptionId": "b",
          "explanation": ""
        },
        {
          "id": "music-production-101-l12-q2",
          "text": "The 'Attack' in an ADSR envelope controls:",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "How fast the sound reaches full volume"
            },
            {
              "id": "b",
              "text": "The volume while the key is held"
            },
            {
              "id": "c",
              "text": "How fast the sound fades after release"
            },
            {
              "id": "d",
              "text": "The frequency cutoff of the filter"
            }
          ],
          "correctOptionId": "a",
          "explanation": ""
        },
        {
          "id": "music-production-101-l12-q3",
          "text": "A high-pass filter removes:",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Frequencies above a cutoff point"
            },
            {
              "id": "b",
              "text": "Frequencies below a cutoff point"
            },
            {
              "id": "c",
              "text": "All mid-range frequencies"
            },
            {
              "id": "d",
              "text": "Reverb from the signal"
            }
          ],
          "correctOptionId": "b",
          "explanation": ""
        },
        {
          "id": "music-production-101-l12-q4",
          "text": "Gain staging is the practice of:",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Adding gain at every stage for maximum volume"
            },
            {
              "id": "b",
              "text": "Setting proper levels at each stage to avoid noise and clipping"
            },
            {
              "id": "c",
              "text": "Using a noise gate on every track"
            },
            {
              "id": "d",
              "text": "Boosting EQ at the final mix stage"
            }
          ],
          "correctOptionId": "b",
          "explanation": ""
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "music-production-101-l13",
      "title": "Song Arrangement: From Loop to Full Track",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Structure a song with intro, verse, chorus, bridge, and outro",
        "Use automation to create dynamic builds and drops",
        "Apply the 'add/subtract' arrangement principle"
      ],
      "chunks": [
        {
          "id": "music-production-101-l13-c1",
          "title": "Beyond the Loop",
          "content": "One common challenge that many beginners face in music production is creating an amazing 8-bar loop but then feeling stuck when it comes to turning that loop into a complete song. This is where the concept of arrangement comes into play. Arrangement is essentially the art of deciding which parts of your music will play at different times throughout the song. For example, a typical structure for a pop song might look like this: you start with an Intro that lasts for about 4 to 8 bars, then move into Verse 1, followed by the Chorus, then Verse 2, another Chorus, a Bridge, and finally, the Final Chorus before wrapping up with an Outro. On the other hand, electronic dance music (EDM) often follows a different structure, which might include an Intro, a Build-up, a Drop, a Break, another Build-up, another Drop, and then the Outro. The important thing to remember is that each section of your song should feel unique and different from the others, but they should all work together to create a cohesive piece of music. This way, listeners can enjoy the variety while still feeling connected to the overall song.\nContext recap: One common challenge that many beginners face in music production is creating an amazing 8-bar loop but then feeling stuck when it comes to turning that loop into a complete song. This is where the concept of arrangement comes into play. Arrangement is essentially the art of deciding which parts of your music will play at different times throughout the song. For example, a typical structure for a pop song might look like this: you start with an Intro that lasts for about 4 to 8 bars, then move into Verse 1, followed by the Chorus, then Verse 2, another Chorus, a Bridge, and finally, the Final Chorus before wrapping up with an Outro."
        },
        {
          "id": "music-production-101-l13-c2",
          "title": "The Add/Subtract Principle",
          "content": "One of the most effective techniques for arranging your music is known as the Add/Subtract Principle. This method is all about creating a dynamic listening experience by carefully choosing when to add or remove musical elements. You start with your complete loop, which is the full version of your song, and then you strategically take away certain instruments during quieter sections. This helps to create a sense of space and allows the listener to focus on the main elements of the music.\nFor instance, during the verse of your song, you might choose to use fewer instruments. A simple combination of bass, drums, and vocals can create a solid foundation. As you move into the pre-chorus, you can begin to add in additional sounds, like synths or strings, to build up the energy and excitement. When you reach the chorus, this is your moment to let everything play together, creating a powerful and full sound that really grabs the listener's attention.\nFinally, during the bridge, you can strip back the arrangement once again to provide contrast. This back-and-forth between adding and subtracting elements not only creates dynamics in your music but also keeps your audience engaged and interested throughout the entire track. By mastering this principle, you can enhance your songwriting and make your music more captivating!\nContext recap: One of the most effective techniques for arranging your music is known as the Add/Subtract Principle. This method is all about creating a dynamic listening experience by carefully choosing when to add or remove musical elements. You start with your complete loop, which is the full version of your song, and then you strategically take away certain instruments during quieter sections. This helps to create a sense of space and allows the listener to focus on the main elements of the music.\nWhy this matters: The Add/Subtract Principle helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        },
        {
          "id": "music-production-101-l13-c3",
          "title": "Automation",
          "content": "Automation is an essential and exciting tool in the world of music production. It allows you to program changes in your music over time, which can include things like volume fades, filter sweeps, panning movements, and effects sends. For example, imagine you have a big drop in your song; using a filter sweep right before that drop can create a sense of anticipation and excitement for the listener. Similarly, if you want to end your track smoothly, a volume fade at the end can help achieve that seamless outro. Another creative use of automation is during vocal phrases. By automating the reverb send, you can add emotional depth to certain key words, making them stand out and resonate more with your audience. Overall, automation is what helps turn a static mix into a lively and engaging production. It’s a technique that every professional music producer uses extensively to enhance the overall listening experience, making their tracks more captivating and enjoyable for everyone. Learning to master automation can take your music to the next level, so it's definitely worth exploring in your own productions!\nContext recap: Automation is an essential and exciting tool in the world of music production. It allows you to program changes in your music over time, which can include things like volume fades, filter sweeps, panning movements, and effects sends. For example, imagine you have a big drop in your song; using a filter sweep right before that drop can create a sense of anticipation and excitement for the listener. Similarly, if you want to end your track smoothly, a volume fade at the end can help achieve that seamless outro.\nWhy this matters: Automation helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        }
      ],
      "flashcards": [
        {
          "id": "music-production-101-l13-f1",
          "front": "Arrangement",
          "back": "The organization of a song's sections and instrumentation over time — deciding what plays when"
        },
        {
          "id": "music-production-101-l13-f2",
          "front": "Automation",
          "back": "Programming parameter changes over time in a DAW — volume, panning, filter cutoff, effects"
        },
        {
          "id": "music-production-101-l13-f3",
          "front": "Drop",
          "back": "In EDM, the moment after a build where the full beat and bass return with maximum energy"
        },
        {
          "id": "music-production-101-l13-f4",
          "front": "Add/subtract principle",
          "back": "Arranging by adding instruments for energy and removing them for contrast — the simplest way to create dynamics"
        }
      ]
    },
    {
      "id": "music-production-101-l14",
      "title": "Export, Mastering Basics, and Release",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Export a final mix in WAV and MP3 formats",
        "Understand basic mastering concepts: loudness, limiting, and LUFS",
        "Know the steps to release music on streaming platforms"
      ],
      "chunks": [
        {
          "id": "music-production-101-l14-c1",
          "title": "Exporting Your Mix",
          "content": "After you have finished mixing your song, the next important step is to export it. This process is sometimes called bouncing or rendering. To create a high-quality version of your music, you should export your mix as a stereo WAV file. Make sure to set the quality to 24-bit and choose either 44.1 kHz or 48 kHz for the best sound. This WAV file will be your master copy, which means it’s the best version of your song that you can use for further distribution.\nIf you want to share your music online, it’s also wise to create an MP3 version. When exporting to MP3, select a bitrate of 320 kbps, which is the highest quality for compressed audio files. This will help ensure that your music sounds great even when it’s shared on various platforms.\nBefore you click the export button, take a moment to double-check a few important details. First, make sure that none of your tracks are accidentally muted, as this could result in parts of your song being silent. Next, check for any clipping on the master bus, which can cause distortion in your audio. Finally, confirm that your song starts and ends cleanly, without any unwanted clicks or pops. These steps will help you create a polished final product that you can be proud of!\nContext recap: After you have finished mixing your song, the next important step is to export it. This process is sometimes called bouncing or rendering. To create a high-quality version of your music, you should export your mix as a stereo WAV file. Make sure to set the quality to 24-bit and choose either 44.1 kHz or 48 kHz for the best sound.\nWhy this matters: Exporting Your Mix helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "music-production-101-l14-c2",
          "title": "Basic Mastering",
          "content": "Mastering is a crucial step in the music production process that helps ensure your song sounds its absolute best. You can think of mastering like putting the final touches on a beautiful painting; it’s all about making sure every detail shines. During the mastering phase, your goal is to make your song loud enough so that it can be enjoyed clearly on any device, whether someone is listening on their phone, computer, or a big speaker system.\nTo begin mastering, you should first check for any tonal imbalances in your music. This is where EQ, or equalization, comes into play. EQ allows you to adjust the different frequencies in your track, helping to create a balanced sound where no particular element overpowers another. After you’ve balanced the tones, the next step is to use a limiter. A limiter is a special tool that helps increase the overall loudness of your track while preventing distortion. Distortion is when the sound becomes fuzzy or unclear, which is something you definitely want to avoid. For platforms like Spotify, the recommended loudness level is around -14 LUFS, which is a specific measurement of loudness that helps your music sound great in a streaming environment.\nIf you’re aiming for a truly professional sound, it can be very beneficial to hire a mastering engineer. These experts have trained ears and can provide valuable feedback, ensuring that your music is polished and ready for listeners everywhere. They can help take your track to the next level, making sure it stands out in the competitive world of music. Remember, mastering is not just about making your song loud; it’s about making it sound amazing!\nContext recap: Mastering is a crucial step in the music production process that helps ensure your song sounds its absolute best. You can think of mastering like putting the final touches on a beautiful painting; it’s all about making sure every detail shines. During the mastering phase, your goal is to make your song loud enough so that it can be enjoyed clearly on any device, whether someone is listening on their phone, computer, or a big speaker system. To begin mastering, you should first check for any tonal imbalances in your music.\nWhy this matters: Basic Mastering helps learners in Music connect ideas from Introduction to Music Production to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        },
        {
          "id": "music-production-101-l14-c3",
          "title": "Releasing Your Music",
          "content": "If you're excited about sharing your music with listeners around the globe on popular platforms like Spotify and Apple Music, you'll need to partner with a music distributor. Distributors such as DistroKid, TuneCore, CD Baby, and Amuse are here to help you! They will assist you in uploading your music along with important details about it, including the title of your song, your artist name, the genre of your music, and even your cover art. Speaking of cover art, it's really important to create an eye-catching image that meets the size requirement of 3000 by 3000 pixels, as this is the standard size that most streaming services expect. When you're planning to release your music, it's wise to start this process 2 to 4 weeks ahead of your desired release date. This extra time allows your music to gain some attention and increases the chances of it being featured in playlists, which can help you reach more listeners. Additionally, think about registering with a Performance Rights Organization, often called a PRO. This organization is crucial because it helps you collect royalties, which are payments you earn whenever your music is played in public spaces. By following these steps, you can successfully share your music and connect with a wider audience, making your musical dreams come true!\nContext recap: If you're excited about sharing your music with listeners around the globe on popular platforms like Spotify and Apple Music, you'll need to partner with a music distributor. Distributors such as DistroKid, TuneCore, CD Baby, and Amuse are here to help you! They will assist you in uploading your music along with important details about it, including the title of your song, your artist name, the genre of your music, and even your cover art. Speaking of cover art, it's really important to create an eye-catching image that meets the size requirement of 3000 by 3000 pixels, as this is the standard size that most streaming services expect."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-production-101-l14-a1",
          "title": "Drag and Drop",
          "type": "drag_and_drop",
          "prompt": "Put these production steps in the correct order from start to finish:",
          "items": [
            "Record / program MIDI tracks",
            "Mix (EQ, compression, reverb)",
            "Arrange song sections",
            "Master (limiter, loudness)",
            "Export final WAV/MP3"
          ],
          "zones": [
            "Step 1",
            "Step 2",
            "Step 3",
            "Step 4",
            "Step 5"
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-production-101-l14-f1",
          "front": "LUFS",
          "back": "Loudness Units relative to Full Scale — the standard loudness measurement for streaming (-14 LUFS target for Spotify)"
        },
        {
          "id": "music-production-101-l14-f2",
          "front": "Limiter",
          "back": "A compressor with a very high ratio that prevents signal from exceeding a ceiling — used in mastering to maximize loudness"
        },
        {
          "id": "music-production-101-l14-f3",
          "front": "Distributor",
          "back": "A service (DistroKid, TuneCore, etc.) that uploads your music to streaming platforms and manages royalties"
        },
        {
          "id": "music-production-101-l14-f4",
          "front": "Bounce / render / export",
          "back": "The process of converting your DAW project into a final audio file (WAV, MP3) for listening outside the DAW"
        }
      ]
    },
    {
      "id": "music-production-101-l15",
      "title": "Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate comprehensive mastery of music production fundamentals"
      ],
      "questions": [
        {
          "id": "music-production-101-l15-q1",
          "text": "The recommended loudness target for Spotify is approximately:",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "-6 LUFS"
            },
            {
              "id": "b",
              "text": "-14 LUFS"
            },
            {
              "id": "c",
              "text": "-24 LUFS"
            },
            {
              "id": "d",
              "text": "0 LUFS"
            }
          ],
          "correctOptionId": "b",
          "explanation": ""
        },
        {
          "id": "music-production-101-l15-q2",
          "text": "The 'add/subtract' arrangement principle means:",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Adding reverb to every track"
            },
            {
              "id": "b",
              "text": "Adding instruments for energy and removing them for contrast"
            },
            {
              "id": "c",
              "text": "Subtracting low frequencies from the master bus"
            },
            {
              "id": "d",
              "text": "Adding compression to the snare"
            }
          ],
          "correctOptionId": "b",
          "explanation": ""
        },
        {
          "id": "music-production-101-l15-q3",
          "text": "Before exporting your final mix, you should check for:",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Accidentally muted tracks and clipping on the master bus"
            },
            {
              "id": "b",
              "text": "The color of your DAW theme"
            },
            {
              "id": "c",
              "text": "How many plugins you used"
            },
            {
              "id": "d",
              "text": "The brand of your headphones"
            }
          ],
          "correctOptionId": "a",
          "explanation": ""
        },
        {
          "id": "music-production-101-l15-q4",
          "text": "A sawtooth waveform sounds:",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Pure and smooth like a flute"
            },
            {
              "id": "b",
              "text": "Bright and buzzy with rich harmonics"
            },
            {
              "id": "c",
              "text": "Hollow like a clarinet"
            },
            {
              "id": "d",
              "text": "Silent until filtered"
            }
          ],
          "correctOptionId": "b",
          "explanation": ""
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
