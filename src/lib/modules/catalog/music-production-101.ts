import type { LearningModule } from "@/lib/modules/types";

export const MusicProduction101Module: LearningModule = {
  id: "music-production-101",
  title: "Introduction to Music Production",
  description:
    "Learn to create music with digital tools — from setting up a DAW and recording audio to mixing, beat making, and sound design. No instruments required.",
  subject: "Music",
  tags: ["core", "curriculum", "interactive", "music", "technology"],
  minAge: 13,
  maxAge: 18,
  version: "2.0.0",
  learningObjectives: [
    "Navigate a DAW (Digital Audio Workstation) interface and its core features",
    "Record audio using a microphone and understand signal flow",
    "Build a beat using drum machines and virtual instruments",
    "Apply EQ, compression, and reverb to shape a mix",
    "Arrange a song with intro, verse, chorus, and outro sections",
    "Understand basic sound design with synthesizers",
    "Export a finished track in standard audio formats"
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  What Is a DAW?  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-production-101-l01",
      title: "What Is a DAW?",
      type: "video",
      duration: 11,
      objectives: [
        "Define a DAW and explain its role in modern music production",
        "Identify the main components: timeline, mixer, piano roll, browser",
        "Compare popular DAWs and their strengths"
      ],
      chunks: [
        {
          id: "music-production-101-l01-c1",
          title: "The Digital Audio Workstation",
          content:
            "A DAW (Digital Audio Workstation) is software that lets you record, edit, arrange, mix, and export music — all on a computer. Before DAWs, studios needed rooms full of hardware: tape machines, mixing consoles, effects racks. Today, a laptop and a DAW give you more power than a million-dollar studio from the 1980s. Every hit song you hear was made in a DAW."
        },
        {
          id: "music-production-101-l01-c2",
          title: "Core Interface Elements",
          content:
            "Every DAW has: (1) The Timeline/Arrangement view — where you see your song laid out in tracks from left to right. (2) The Mixer — where you control volume, panning, and effects for each track. (3) The Piano Roll/MIDI Editor — where you draw or edit notes for virtual instruments. (4) The Browser — where you find sounds, samples, and plugins. Learning these four areas is like learning the rooms of a new house."
        },
        {
          id: "music-production-101-l01-c3",
          title: "Choosing a DAW",
          content:
            "Popular DAWs include: Ableton Live (great for beat making and live performance), Logic Pro (Mac only; powerful for songwriting), FL Studio (Windows/Mac; popular in hip-hop/EDM), GarageBand (free on Mac/iOS; perfect for beginners), Reaper (affordable; highly customizable). They all do the same core things — pick one and master it. The best DAW is the one you'll actually use."
        }
      ],
      flashcards: [
        { id: "music-production-101-l01-f1", front: "DAW", back: "Digital Audio Workstation — software for recording, editing, arranging, mixing, and exporting music" },
        { id: "music-production-101-l01-f2", front: "Timeline / Arrangement view", back: "The main view in a DAW showing tracks laid out horizontally over time" },
        { id: "music-production-101-l01-f3", front: "Piano roll", back: "A grid editor in a DAW where you draw and edit MIDI notes for virtual instruments" },
        { id: "music-production-101-l01-f4", front: "MIDI", back: "Musical Instrument Digital Interface — a protocol that transmits note data (pitch, velocity, duration) rather than audio" }
      ]
    },

    /* ──────────────────────────────────────────────
       L02  Audio vs. MIDI  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-production-101-l02",
      title: "Audio vs. MIDI",
      type: "interactive",
      duration: 12,
      objectives: [
        "Distinguish between audio recordings and MIDI data",
        "Explain when to use audio vs. MIDI in a project",
        "Record a simple MIDI pattern and an audio clip"
      ],
      chunks: [
        {
          id: "music-production-101-l02-c1",
          title: "Audio: Capturing Sound",
          content:
            "An audio recording captures actual sound waves — a microphone converts air vibrations into an electrical signal, which the DAW stores as a digital file (WAV, AIFF, MP3). Audio recordings are fixed: once recorded, the pitch and timing of each note can't be easily changed (without special tools like Flex Time or Melodyne). Audio is perfect for vocals, live instruments, and sound effects."
        },
        {
          id: "music-production-101-l02-c2",
          title: "MIDI: Capturing Performance",
          content:
            "MIDI doesn't record sound — it records your performance as data: which notes you played, how hard, how long. This data then triggers a virtual instrument (a software synth, piano, drum machine). The magic of MIDI: you can change the instrument after recording, fix wrong notes, adjust timing, and even change the key — all without re-recording. MIDI is ideal for beats, synths, and virtual orchestras."
        },
        {
          id: "music-production-101-l02-c3",
          title: "When to Use Each",
          content:
            "Use audio for: vocals, acoustic guitar, live drums, field recordings — anything where the unique sound of the performance matters. Use MIDI for: drum beats, synth pads, piano parts, orchestral arrangements — anything where you want flexibility to edit after recording. Most professional productions use both: MIDI for programmed elements, audio for live performances, all mixed together in the DAW."
        }
      ],
      interactiveActivities: [
        {
          id: "music-production-101-l02-a1",
          title: "Sort into Categories",
          type: "sorting_buckets",
          buckets: ["Audio Recording", "MIDI Recording"],
          items: [
            { text: "Captures actual sound waves", bucket: "Audio Recording" },
            { text: "Stores note data (pitch, velocity, duration)", bucket: "MIDI Recording" },
            { text: "Can change the instrument after recording", bucket: "MIDI Recording" },
            { text: "Best for vocals and live instruments", bucket: "Audio Recording" },
            { text: "Stored as WAV, AIFF, or MP3", bucket: "Audio Recording" },
            { text: "Can fix wrong notes easily", bucket: "MIDI Recording" },
            { text: "Best for drum beats and synth parts", bucket: "MIDI Recording" },
            { text: "Requires a microphone to record", bucket: "Audio Recording" }
          ]
        }
      ],
      flashcards: [
        { id: "music-production-101-l02-f1", front: "Audio recording", back: "A digital capture of actual sound waves — fixed once recorded; used for vocals and live instruments" },
        { id: "music-production-101-l02-f2", front: "MIDI recording", back: "A capture of performance data (notes, velocity, duration) — fully editable; triggers virtual instruments" },
        { id: "music-production-101-l02-f3", front: "Virtual instrument (VSTi)", back: "Software that generates sound from MIDI data — synthesizers, samplers, drum machines" }
      ]
    },

    /* ──────────────────────────────────────────────
       L03  DAW Basics Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-production-101-l03",
      title: "DAW Basics Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: [
        "Demonstrate understanding of DAW fundamentals and audio vs. MIDI"
      ],
      questions: [
        {
          id: "music-production-101-l03-q1",
          text: "What does MIDI record?",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "Actual sound waves from a microphone" },
            { id: "b", text: "Note data — pitch, velocity, and duration" },
            { id: "c", text: "The electrical signal from an amplifier" },
            { id: "d", text: "The volume level of a speaker" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-production-101-l03-q2",
          text: "Which DAW view shows tracks laid out horizontally over time?",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "Piano roll" },
            { id: "b", text: "Mixer" },
            { id: "c", text: "Timeline / Arrangement" },
            { id: "d", text: "Browser" }
          ],
          correctOptionId: "c",
          explanation: ""
        },
        {
          id: "music-production-101-l03-q3",
          text: "Audio recordings are best used for:",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "Synth pads and drum machine beats" },
            { id: "b", text: "Vocals and live instruments" },
            { id: "c", text: "Changing the instrument after recording" },
            { id: "d", text: "Programming MIDI patterns" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-production-101-l03-q4",
          text: "A key advantage of MIDI over audio is:",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "Higher sound quality" },
            { id: "b", text: "Ability to edit notes, timing, and instrument after recording" },
            { id: "c", text: "No computer required" },
            { id: "d", text: "It captures microphone input" }
          ],
          correctOptionId: "b",
          explanation: ""
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      }
    },

    /* ──────────────────────────────────────────────
       L04  Beat Making  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-production-101-l04",
      title: "Beat Making: Drums and Rhythm",
      type: "video",
      duration: 12,
      objectives: [
        "Program a basic drum pattern using a step sequencer or piano roll",
        "Understand the roles of kick, snare, hi-hat, and percussion",
        "Apply swing and velocity variation to humanize a beat"
      ],
      chunks: [
        {
          id: "music-production-101-l04-c1",
          title: "The Drum Kit Breakdown",
          content:
            "Every beat starts with three core sounds: Kick (bass drum) — the deep, low thump that drives the rhythm, usually on beats 1 and 3. Snare — the sharp, cracking hit that provides backbeat, usually on beats 2 and 4. Hi-hat — the sizzling metallic pulse that keeps time, often playing eighth or sixteenth notes. Together, these three create the rhythmic skeleton of nearly every genre."
        },
        {
          id: "music-production-101-l04-c2",
          title: "Programming Patterns",
          content:
            "Most DAWs offer a step sequencer (a grid where you click to place hits) or a piano roll for drums. A basic hip-hop beat: kick on 1 and 3, snare on 2 and 4, hi-hats on every eighth note. A basic EDM four-on-the-floor: kick on every beat (1-2-3-4), snare/clap on 2 and 4, hi-hats on every eighth note with open hat on the 'and' of beat 4. Start simple, then add fills and variations."
        },
        {
          id: "music-production-101-l04-c3",
          title: "Humanizing Beats",
          content:
            "Perfectly quantized (grid-locked) beats sound robotic. Two techniques humanize them: (1) Swing — slightly delays every other hit, creating a laid-back groove. Hip-hop and jazz use heavy swing; EDM uses little or none. (2) Velocity variation — not every hit should be the same volume. Accenting beats 2 and 4, or making some hi-hats softer than others, creates a natural, breathing feel."
        }
      ],
      flashcards: [
        { id: "music-production-101-l04-f1", front: "Kick drum", back: "The deep, low-frequency drum that drives the rhythm — typically on beats 1 and 3 (or every beat in EDM)" },
        { id: "music-production-101-l04-f2", front: "Snare / backbeat", back: "The sharp, cracking hit on beats 2 and 4 — provides the rhythmic spine of pop, rock, and hip-hop" },
        { id: "music-production-101-l04-f3", front: "Swing", back: "Slightly delaying every other note to create a laid-back, groovy feel — essential in hip-hop and jazz" },
        { id: "music-production-101-l04-f4", front: "Quantize", back: "Snapping notes to the grid so they are perfectly on time — useful but can sound robotic if overdone" }
      ]
    },

    /* ──────────────────────────────────────────────
       L05  Building a Beat  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-production-101-l05",
      title: "Building a Beat Workshop",
      type: "interactive",
      duration: 14,
      objectives: [
        "Construct a beat by placing kick, snare, and hi-hat hits in the correct positions",
        "Apply swing to a straight pattern",
        "Vary velocity for a more natural feel"
      ],
      chunks: [
        {
          id: "music-production-101-l05-c1",
          title: "Step-by-Step Beat Building",
          content:
            "Let's build a classic hip-hop beat in 4/4 time. Step 1: Place the kick on beat 1 and the 'and' of beat 2 (gives it a syncopated bounce). Step 2: Place the snare on beats 2 and 4. Step 3: Add hi-hats on every eighth note (8 hits per bar). Step 4: Add a second kick on beat 3 for extra drive. Step 5: Apply 50-60% swing to the hi-hats. Step 6: Lower the velocity of off-beat hi-hats to 70%."
        },
        {
          id: "music-production-101-l05-c2",
          title: "Adding Percussion and Fills",
          content:
            "Once your core beat works, layer additional percussion: shakers, rim shots, tambourine, congas. Keep them subtle — they add texture without competing with the kick-snare-hat foundation. Every 4 or 8 bars, add a fill — a short rhythmic variation that signals a section change. A simple snare roll or a kick pattern break keeps the listener's attention."
        }
      ],
      interactiveActivities: [
        {
          id: "music-production-101-l05-a1",
          title: "Drag and Drop",
          type: "drag_and_drop",
          prompt: "Place each drum sound on the correct beats for a basic rock beat in 4/4 time:",
          items: ["Kick", "Kick", "Snare", "Snare", "Hi-hat ×8"],
          zones: ["Beat 1", "Beat 3", "Beat 2", "Beat 4", "Every eighth note"]
        }
      ],
      flashcards: [
        { id: "music-production-101-l05-f1", front: "Four-on-the-floor", back: "A kick drum pattern hitting on every beat (1-2-3-4) — signature of EDM, disco, and house music" },
        { id: "music-production-101-l05-f2", front: "Fill", back: "A short rhythmic variation that signals a transition between sections — keeps the beat from sounding repetitive" },
        { id: "music-production-101-l05-f3", front: "Velocity", back: "How hard a MIDI note is played (0-127) — controls volume and often timbre of the triggered sound" }
      ]
    },

    /* ──────────────────────────────────────────────
       L06  Beat Making Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-production-101-l06",
      title: "Beat Making Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: [
        "Demonstrate understanding of beat construction"
      ],
      questions: [
        {
          id: "music-production-101-l06-q1",
          text: "In most pop and rock music, the snare hits on which beats?",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "1 and 3" },
            { id: "b", text: "2 and 4" },
            { id: "c", text: "Every beat" },
            { id: "d", text: "Only beat 1" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-production-101-l06-q2",
          text: "What does 'swing' do to a beat?",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "Removes all hi-hats" },
            { id: "b", text: "Slightly delays every other note for a laid-back feel" },
            { id: "c", text: "Doubles the tempo" },
            { id: "d", text: "Adds reverb to the snare" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-production-101-l06-q3",
          text: "'Four-on-the-floor' means the kick drum hits on:",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "Beats 1 and 3 only" },
            { id: "b", text: "Every beat (1-2-3-4)" },
            { id: "c", text: "Only the offbeats" },
            { id: "d", text: "Beats 2 and 4 only" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-production-101-l06-q4",
          text: "Velocity variation helps a beat sound more:",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "Robotic and precise" },
            { id: "b", text: "Natural and human" },
            { id: "c", text: "Distorted" },
            { id: "d", text: "Reverberant" }
          ],
          correctOptionId: "b",
          explanation: ""
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      }
    },

    /* ──────────────────────────────────────────────
       L07  Recording Audio  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-production-101-l07",
      title: "Recording Audio: Mics, Levels, and Signal Flow",
      type: "video",
      duration: 12,
      objectives: [
        "Describe the recording signal chain: mic → interface → DAW",
        "Set proper recording levels (avoid clipping)",
        "Explain the difference between dynamic and condenser microphones"
      ],
      chunks: [
        {
          id: "music-production-101-l07-c1",
          title: "The Signal Chain",
          content:
            "Recording audio follows a simple chain: Sound source (voice, guitar) → Microphone (converts sound to electrical signal) → Audio Interface (converts analog to digital) → DAW (records the digital signal). The audio interface is the bridge between the analog and digital worlds. It has a preamp (amplifies the mic signal), an A/D converter, and connects to your computer via USB or Thunderbolt."
        },
        {
          id: "music-production-101-l07-c2",
          title: "Setting Levels",
          content:
            "The most important recording skill: setting the right input level. Too quiet = noisy recordings when you boost later. Too loud = clipping (digital distortion that can't be fixed). Aim for peaks around -12 to -6 dBFS on your DAW's meter. Leave headroom — you can always turn it up later, but you can't un-clip a distorted recording. This is called 'gain staging.'"
        },
        {
          id: "music-production-101-l07-c3",
          title: "Microphone Types",
          content:
            "Dynamic mics (like the Shure SM58) are tough, affordable, and handle loud sources well — great for live vocals, guitar amps, and snare drums. Condenser mics are more sensitive and detailed — great for studio vocals, acoustic instruments, and overhead drum captures, but they need phantom power (48V from the interface). USB mics combine the mic and interface in one device — convenient for beginners."
        }
      ],
      flashcards: [
        { id: "music-production-101-l07-f1", front: "Audio interface", back: "Hardware that converts analog audio to digital for the computer and vice versa — the bridge between mic and DAW" },
        { id: "music-production-101-l07-f2", front: "Clipping", back: "Digital distortion that occurs when the signal is too loud — irreversible; avoid by leaving headroom" },
        { id: "music-production-101-l07-f3", front: "Gain staging", back: "Setting proper volume levels at each stage of the signal chain to avoid noise and clipping" },
        { id: "music-production-101-l07-f4", front: "Phantom power (48V)", back: "Electrical power sent from the interface to condenser microphones through the mic cable" }
      ]
    },

    /* ──────────────────────────────────────────────
       L08  Mixing Fundamentals  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-production-101-l08",
      title: "Mixing Fundamentals: EQ, Compression, Reverb",
      type: "interactive",
      duration: 14,
      objectives: [
        "Explain EQ (equalization) and use it to carve frequency space for each track",
        "Describe compression and when to use it",
        "Apply reverb to create spatial depth in a mix"
      ],
      chunks: [
        {
          id: "music-production-101-l08-c1",
          title: "EQ: Sculpting Frequencies",
          content:
            "EQ (equalization) lets you boost or cut specific frequency ranges. Bass frequencies (20-250 Hz) give warmth and weight. Midrange (250 Hz-4 kHz) carries most melodic and vocal content. Treble/presence (4-20 kHz) adds clarity and air. The key mixing principle: cut before you boost. If vocals sound muddy, cut low-mids (200-400 Hz) rather than boosting highs. Each track should 'own' a frequency range so nothing competes."
        },
        {
          id: "music-production-101-l08-c2",
          title: "Compression: Controlling Dynamics",
          content:
            "A compressor automatically reduces volume when the signal exceeds a threshold. This evens out dynamics — quiet parts get relatively louder, loud parts get tamed. Key controls: Threshold (when compression starts), Ratio (how much compression), Attack (how fast it reacts), Release (how fast it lets go). Use gentle compression (2:1 to 4:1) on vocals and bass to keep them consistent in the mix."
        },
        {
          id: "music-production-101-l08-c3",
          title: "Reverb: Creating Space",
          content:
            "Reverb simulates the reflections of sound in a space — from a small room to a cathedral. It adds depth and dimension to a dry recording. Types: plate reverb (bright, smooth — classic for vocals), room reverb (natural, subtle), hall reverb (large, dramatic). Too much reverb makes a mix washy and unclear. Use sends (aux channels) rather than inserting reverb directly on a track — this lets you blend the wet/dry balance."
        }
      ],
      interactiveActivities: [
        {
          id: "music-production-101-l08-a1",
          title: "Match the Pairs",
          type: "matching_pairs",
          pairs: [
            { left: "EQ", right: "Boosts or cuts specific frequency ranges" },
            { left: "Compression", right: "Reduces volume when signal exceeds a threshold" },
            { left: "Reverb", right: "Simulates sound reflections in a space" },
            { left: "Threshold", right: "The level at which compression begins" },
            { left: "High-pass filter", right: "Cuts frequencies below a set point (removes rumble)" },
            { left: "Send / aux channel", right: "Routes signal to a shared effect without replacing the dry sound" }
          ]
        }
      ],
      flashcards: [
        { id: "music-production-101-l08-f1", front: "EQ (Equalization)", back: "A tool that boosts or cuts specific frequency ranges — used to carve space in a mix so each instrument is clear" },
        { id: "music-production-101-l08-f2", front: "Compressor", back: "Reduces dynamic range by attenuating signal above a threshold — evens out volume for consistency" },
        { id: "music-production-101-l08-f3", front: "Reverb", back: "An effect simulating sound reflections in a physical space — adds depth and spatial dimension to a mix" },
        { id: "music-production-101-l08-f4", front: "High-pass filter", back: "An EQ filter that removes frequencies below a set point — commonly used to cut rumble from non-bass tracks" }
      ]
    },

    /* ──────────────────────────────────────────────
       L09  Mixing Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-production-101-l09",
      title: "Mixing Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: [
        "Demonstrate understanding of EQ, compression, and reverb"
      ],
      questions: [
        {
          id: "music-production-101-l09-q1",
          text: "The EQ principle 'cut before you boost' means:",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "Always cut frequencies from every track" },
            { id: "b", text: "Remove problem frequencies first rather than boosting others to compensate" },
            { id: "c", text: "Cut the volume of every track before mixing" },
            { id: "d", text: "Use a high-pass filter on every channel" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-production-101-l09-q2",
          text: "A compressor's 'threshold' controls:",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "How fast the compressor reacts" },
            { id: "b", text: "The level at which compression begins" },
            { id: "c", text: "The amount of reverb applied" },
            { id: "d", text: "The frequency range affected" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-production-101-l09-q3",
          text: "Reverb is best applied using a send/aux channel because:",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "It uses less CPU" },
            { id: "b", text: "It lets you blend wet and dry independently and share one reverb across multiple tracks" },
            { id: "c", text: "It makes the reverb louder" },
            { id: "d", text: "It eliminates the need for EQ" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-production-101-l09-q4",
          text: "Clipping occurs when:",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "The signal is too quiet" },
            { id: "b", text: "You use too much reverb" },
            { id: "c", text: "The signal exceeds the maximum digital level (0 dBFS)" },
            { id: "d", text: "The compressor ratio is too low" }
          ],
          correctOptionId: "c",
          explanation: ""
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L10  Mastery Quiz: Production Foundations  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-production-101-l10",
      title: "Mastery Quiz: Production Foundations",
      type: "quiz",
      duration: 12,
      objectives: [
        "Synthesize all production concepts learned so far"
      ],
      questions: [
        {
          id: "music-production-101-l10-q1",
          text: "The recording signal chain in order is:",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "DAW → Interface → Microphone → Sound" },
            { id: "b", text: "Sound → Microphone → Audio Interface → DAW" },
            { id: "c", text: "Microphone → DAW → Interface → Speaker" },
            { id: "d", text: "Sound → DAW → Microphone → Interface" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-production-101-l10-q2",
          text: "MIDI is preferable to audio when you need to:",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "Record a vocalist's performance" },
            { id: "b", text: "Capture field recordings from nature" },
            { id: "c", text: "Change the instrument or fix notes after recording" },
            { id: "d", text: "Record a live drum kit" }
          ],
          correctOptionId: "c",
          explanation: ""
        },
        {
          id: "music-production-101-l10-q3",
          text: "Which microphone type requires phantom power?",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "Dynamic" },
            { id: "b", text: "Condenser" },
            { id: "c", text: "Ribbon" },
            { id: "d", text: "USB" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-production-101-l10-q4",
          text: "In a mix, bass frequencies (20-250 Hz) provide:",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "Clarity and air" },
            { id: "b", text: "Warmth and weight" },
            { id: "c", text: "Vocal presence" },
            { id: "d", text: "Stereo width" }
          ],
          correctOptionId: "b",
          explanation: ""
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L11  Sound Design Basics  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-production-101-l11",
      title: "Sound Design: Synths and Samplers",
      type: "interactive",
      duration: 14,
      objectives: [
        "Describe subtractive synthesis: oscillator → filter → amplifier",
        "Explain the role of ADSR envelopes in shaping sound",
        "Distinguish between synthesizers and samplers"
      ],
      chunks: [
        {
          id: "music-production-101-l11-c1",
          title: "Subtractive Synthesis",
          content:
            "The most common synth architecture: start with a raw waveform from an oscillator (saw, square, triangle, sine). Each waveform has a different character — sawtooth is bright and buzzy, sine is pure, square is hollow. Then sculpt it with a filter that removes frequencies (like an EQ with an attitude). A low-pass filter lets bass through and cuts treble — opening and closing this filter is what makes synths go 'wah.'"
        },
        {
          id: "music-production-101-l11-c2",
          title: "ADSR Envelopes",
          content:
            "Every sound has a shape over time, controlled by the ADSR envelope: Attack (how fast the sound reaches full volume), Decay (how fast it drops after the initial peak), Sustain (the volume level while the key is held), Release (how fast the sound fades after the key is released). A piano has fast attack, fast decay, medium sustain, medium release. A pad has slow attack, no decay, full sustain, long release."
        },
        {
          id: "music-production-101-l11-c3",
          title: "Synthesizers vs. Samplers",
          content:
            "A synthesizer generates sound from scratch using oscillators and math. A sampler plays back recordings of real instruments (or any sound). When you load a 'realistic piano' plugin, it's usually a sampler playing recordings of a real piano at different velocities and notes. Synths create new sounds; samplers recreate existing ones. Many modern instruments combine both: sampled core + synthesized layers."
        }
      ],
      interactiveActivities: [
        {
          id: "music-production-101-l11-a1",
          title: "Sort into Categories",
          type: "sorting_buckets",
          buckets: ["Synthesizer", "Sampler"],
          items: [
            { text: "Generates sound from oscillators", bucket: "Synthesizer" },
            { text: "Plays back recordings of real instruments", bucket: "Sampler" },
            { text: "Uses filters to sculpt raw waveforms", bucket: "Synthesizer" },
            { text: "Realistic piano plugin with recorded samples", bucket: "Sampler" },
            { text: "Creates entirely new sounds from math", bucket: "Synthesizer" },
            { text: "Drum kit plugin with recorded drum hits", bucket: "Sampler" }
          ]
        }
      ],
      flashcards: [
        { id: "music-production-101-l11-f1", front: "Oscillator", back: "The sound source in a synthesizer — generates raw waveforms (saw, square, sine, triangle)" },
        { id: "music-production-101-l11-f2", front: "ADSR envelope", back: "Attack, Decay, Sustain, Release — controls how a sound evolves over time from key press to key release" },
        { id: "music-production-101-l11-f3", front: "Low-pass filter", back: "Removes frequencies above a cutoff point — the most common filter in subtractive synthesis" },
        { id: "music-production-101-l11-f4", front: "Sampler", back: "A virtual instrument that plays back recordings of real sounds, mapped across the keyboard" }
      ]
    },

    /* ──────────────────────────────────────────────
       L12  Mastery Retest  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-production-101-l12",
      title: "Mastery Retest",
      type: "quiz",
      duration: 10,
      objectives: [
        "Demonstrate comprehensive production knowledge"
      ],
      questions: [
        {
          id: "music-production-101-l12-q1",
          text: "In subtractive synthesis, sound starts with a:",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "Filter" },
            { id: "b", text: "Raw waveform from an oscillator" },
            { id: "c", text: "Recorded sample" },
            { id: "d", text: "Reverb effect" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-production-101-l12-q2",
          text: "The 'Attack' in an ADSR envelope controls:",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "How fast the sound reaches full volume" },
            { id: "b", text: "The volume while the key is held" },
            { id: "c", text: "How fast the sound fades after release" },
            { id: "d", text: "The frequency cutoff of the filter" }
          ],
          correctOptionId: "a",
          explanation: ""
        },
        {
          id: "music-production-101-l12-q3",
          text: "A high-pass filter removes:",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "Frequencies above a cutoff point" },
            { id: "b", text: "Frequencies below a cutoff point" },
            { id: "c", text: "All mid-range frequencies" },
            { id: "d", text: "Reverb from the signal" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-production-101-l12-q4",
          text: "Gain staging is the practice of:",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "Adding gain at every stage for maximum volume" },
            { id: "b", text: "Setting proper levels at each stage to avoid noise and clipping" },
            { id: "c", text: "Using a noise gate on every track" },
            { id: "d", text: "Boosting EQ at the final mix stage" }
          ],
          correctOptionId: "b",
          explanation: ""
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L13  Song Arrangement  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-production-101-l13",
      title: "Song Arrangement: From Loop to Full Track",
      type: "video",
      duration: 12,
      objectives: [
        "Structure a song with intro, verse, chorus, bridge, and outro",
        "Use automation to create dynamic builds and drops",
        "Apply the 'add/subtract' arrangement principle"
      ],
      chunks: [
        {
          id: "music-production-101-l13-c1",
          title: "Beyond the Loop",
          content:
            "A common beginner trap: making a great 8-bar loop and not knowing how to turn it into a full song. Arrangement is the art of deciding what plays when. Standard pop structure: Intro (4-8 bars) → Verse 1 → Chorus → Verse 2 → Chorus → Bridge → Final Chorus → Outro. EDM structure: Intro → Build → Drop → Break → Build → Drop → Outro. The key: each section should feel different while belonging to the same song."
        },
        {
          id: "music-production-101-l13-c2",
          title: "The Add/Subtract Principle",
          content:
            "The simplest arrangement technique: start with your full loop, then strip away elements for quieter sections and add them back for big moments. Verse = fewer instruments (maybe just bass, drums, and vocal). Pre-chorus = start adding synths or strings for building energy. Chorus = everything plays — full power. Bridge = strip back again for contrast. This creates dynamics and keeps the listener engaged."
        },
        {
          id: "music-production-101-l13-c3",
          title: "Automation",
          content:
            "Automation means programming changes over time — volume fades, filter sweeps, panning movements, effect sends. A filter sweep before a drop builds tension. A volume fade at the end creates a smooth outro. Automating reverb send during a vocal phrase adds emotion to key words. Automation transforms a static mix into a living, breathing production. Every professional track uses it extensively."
        }
      ],
      flashcards: [
        { id: "music-production-101-l13-f1", front: "Arrangement", back: "The organization of a song's sections and instrumentation over time — deciding what plays when" },
        { id: "music-production-101-l13-f2", front: "Automation", back: "Programming parameter changes over time in a DAW — volume, panning, filter cutoff, effects" },
        { id: "music-production-101-l13-f3", front: "Drop", back: "In EDM, the moment after a build where the full beat and bass return with maximum energy" },
        { id: "music-production-101-l13-f4", front: "Add/subtract principle", back: "Arranging by adding instruments for energy and removing them for contrast — the simplest way to create dynamics" }
      ]
    },

    /* ──────────────────────────────────────────────
       L14  Export and Release Coaching Clinic  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-production-101-l14",
      title: "Export, Mastering Basics, and Release",
      type: "interactive",
      duration: 13,
      objectives: [
        "Export a final mix in WAV and MP3 formats",
        "Understand basic mastering concepts: loudness, limiting, and LUFS",
        "Know the steps to release music on streaming platforms"
      ],
      chunks: [
        {
          id: "music-production-101-l14-c1",
          title: "Exporting Your Mix",
          content:
            "When your mix is done, export (bounce/render) it as a stereo WAV file at 24-bit, 44.1 kHz or 48 kHz. This is your high-quality master file. For sharing online, also export MP3 at 320 kbps (the highest quality lossy format). Before exporting, check: no tracks muted accidentally, no clipping on the master bus, and the song starts and ends cleanly (no clicks or pops)."
        },
        {
          id: "music-production-101-l14-c2",
          title: "Basic Mastering",
          content:
            "Mastering is the final polish: making your song loud enough, consistent, and ready for all playback systems. At a minimum: (1) EQ any final tonal imbalances, (2) Apply a limiter to bring the loudness up to streaming standards (around -14 LUFS for Spotify). The limiter catches peaks and boosts overall volume without clipping. For professional releases, consider hiring a mastering engineer — fresh ears make a big difference."
        },
        {
          id: "music-production-101-l14-c3",
          title: "Releasing Your Music",
          content:
            "To get music on Spotify, Apple Music, and other streaming platforms, you need a distributor (DistroKid, TuneCore, CD Baby, Amuse). They upload your music and metadata (title, artist name, genre, cover art) to all platforms for a small fee. Cover art must be 3000×3000 pixels. Plan your release 2-4 weeks ahead for playlist consideration. Register with a PRO (performance rights organization) to collect royalties."
        }
      ],
      interactiveActivities: [
        {
          id: "music-production-101-l14-a1",
          title: "Drag and Drop",
          type: "drag_and_drop",
          prompt: "Put these production steps in the correct order from start to finish:",
          items: [
            "Record / program MIDI tracks",
            "Mix (EQ, compression, reverb)",
            "Arrange song sections",
            "Master (limiter, loudness)",
            "Export final WAV/MP3"
          ],
          zones: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]
        }
      ],
      flashcards: [
        { id: "music-production-101-l14-f1", front: "LUFS", back: "Loudness Units relative to Full Scale — the standard loudness measurement for streaming (-14 LUFS target for Spotify)" },
        { id: "music-production-101-l14-f2", front: "Limiter", back: "A compressor with a very high ratio that prevents signal from exceeding a ceiling — used in mastering to maximize loudness" },
        { id: "music-production-101-l14-f3", front: "Distributor", back: "A service (DistroKid, TuneCore, etc.) that uploads your music to streaming platforms and manages royalties" },
        { id: "music-production-101-l14-f4", front: "Bounce / render / export", back: "The process of converting your DAW project into a final audio file (WAV, MP3) for listening outside the DAW" }
      ]
    },

    /* ──────────────────────────────────────────────
       L15  Mastery Sprint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-production-101-l15",
      title: "Mastery Sprint",
      type: "quiz",
      duration: 10,
      objectives: [
        "Demonstrate comprehensive mastery of music production fundamentals"
      ],
      questions: [
        {
          id: "music-production-101-l15-q1",
          text: "The recommended loudness target for Spotify is approximately:",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "-6 LUFS" },
            { id: "b", text: "-14 LUFS" },
            { id: "c", text: "-24 LUFS" },
            { id: "d", text: "0 LUFS" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-production-101-l15-q2",
          text: "The 'add/subtract' arrangement principle means:",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "Adding reverb to every track" },
            { id: "b", text: "Adding instruments for energy and removing them for contrast" },
            { id: "c", text: "Subtracting low frequencies from the master bus" },
            { id: "d", text: "Adding compression to the snare" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-production-101-l15-q3",
          text: "Before exporting your final mix, you should check for:",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "Accidentally muted tracks and clipping on the master bus" },
            { id: "b", text: "The color of your DAW theme" },
            { id: "c", text: "How many plugins you used" },
            { id: "d", text: "The brand of your headphones" }
          ],
          correctOptionId: "a",
          explanation: ""
        },
        {
          id: "music-production-101-l15-q4",
          text: "A sawtooth waveform sounds:",
          skillId: "music-production-101-skill-core",
          options: [
            { id: "a", text: "Pure and smooth like a flute" },
            { id: "b", text: "Bright and buzzy with rich harmonics" },
            { id: "c", text: "Hollow like a clarinet" },
            { id: "d", text: "Silent until filtered" }
          ],
          correctOptionId: "b",
          explanation: ""
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 1, apply: 1, analyze: 1 }
      }
    }
  ]
};
