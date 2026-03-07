import type { LearningModule } from "@/lib/modules/types";

export const music_production_101_Module: LearningModule = {
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
  "version": "1.1.0",
  "learningObjectives": [
    "Navigate a DAW (Digital Audio Workstation) interface and its core features",
    "Record audio using a microphone and understand signal flow",
    "Build a beat using drum machines and virtual instruments",
    "Apply EQ, compression, and reverb to shape a mix",
    "Arrange a song with intro, verse, chorus, and outro sections",
    "Understand basic sound design with synthesizers",
    "Export a finished track in standard audio formats",
    "Produce and export a short, original musical piece combining beats, audio/MIDI, and mixing techniques"
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
          "content": "A Digital Audio Workstation, or DAW, is the software that lets you create and produce music on your computer. With a DAW, you can record sounds, edit them, arrange them into a song, mix all the parts together for a polished sound, and export your finished music to share with the world. In the past, this required a large studio full of expensive equipment like tape machines and mixing consoles. Today, a modern DAW on a laptop can do everything a million-dollar studio from the 1980s could do, and more! Nearly every popular song you hear today was made using a DAW, making it the essential tool for modern music production."
        },
        {
          "id": "music-production-101-l01-c2",
          "title": "Core Interface Elements",
          "content": "Every DAW has four main parts. First is the Timeline or Arrangement View, where you see your song laid out in tracks from left to right, like a blueprint for your music. Next is the Mixer, which is the control center for adjusting the volume, panning (left/right placement), and effects for each track. The third part is the Piano Roll or MIDI Editor, a grid where you can draw or edit musical notes for virtual instruments to create melodies and harmonies. Finally, there's the Browser, which is your library for finding sounds, samples, and plugins to use in your music. Learning these four areas is like getting to know the rooms in a new house; each has a purpose in helping you build your song."
        },
        {
          "id": "music-production-101-l01-c3",
          "title": "Choosing a DAW",
          "content": "There are many popular DAWs, each with its own strengths. Ableton Live is great for beat making and live performance. Logic Pro is a powerful choice for Mac users who want to write and produce songs. FL Studio is a favorite among hip-hop and electronic producers and works on both Windows and Mac. For beginners, GarageBand is a fantastic free option for Mac and iOS users. Reaper is an affordable and highly customizable choice. While they all share the same core functions, the best DAW is the one you enjoy using and feel inspired to master."
        }
      ],
      "flashcards": [
        {
          "id": "music-production-101-l01-f1",
          "front": "DAW",
          "back": "Digital Audio Workstation — software for recording, editing, arranging, mixing, and exporting music."
        },
        {
          "id": "music-production-101-l01-f2",
          "front": "Timeline / Arrangement View",
          "back": "The main view in a DAW showing tracks laid out horizontally over time."
        },
        {
          "id": "music-production-101-l01-f3",
          "front": "Piano Roll",
          "back": "A grid editor in a DAW where you draw and edit MIDI notes for virtual instruments."
        },
        {
          "id": "music-production-101-l01-f4",
          "front": "Mixer",
          "back": "A view in a DAW with faders and knobs to control the volume, panning, and effects for each track."
        }
      ],
      "learningAids": [
        {
          "id": "music-production-101-l01-a1",
          "type": "image",
          "title": "DAW Interface Diagram",
          "content": "An annotated screenshot of a typical DAW, highlighting the Timeline, Mixer, Piano Roll, and Browser."
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
          "content": "Audio recording is the process of capturing real sound waves. A microphone picks up vibrations in the air and converts them into an electrical signal. Your DAW then stores this signal as a digital file, like a WAV or MP3. Think of it like taking a photograph of a sound. Once an audio recording is made, it's fixed. Changing the pitch or timing of a note is difficult without special tools. Audio is perfect for capturing the unique character of vocals, live instruments like guitars, and real-world sound effects."
        },
        {
          "id": "music-production-101-l02-c2",
          "title": "MIDI: Capturing Instructions",
          "content": "MIDI, which stands for Musical Instrument Digital Interface, doesn't record sound. Instead, it records performance data—the instructions for what to play. This data includes which notes you played, how hard you pressed the keys (velocity), and how long you held them. This MIDI data then triggers a virtual instrument, like a software synthesizer or a digital piano. The biggest advantage of MIDI is its flexibility. After recording, you can easily fix wrong notes, change the timing, or even switch the instrument entirely without re-recording. MIDI is ideal for creating beats, synthesizer parts, and basslines."
        },
        {
          "id": "music-production-101-l02-c3",
          "title": "When to Use Each",
          "content": "Knowing when to use audio or MIDI is key. Use audio for capturing unique, real-world performances: vocals, acoustic guitars, live drums, or environmental sounds. Use MIDI when you want flexibility and control over programmed elements: drum machine beats, synthesizer pads, piano parts, and orchestral arrangements. Most professional productions use a hybrid approach, combining the organic feel of recorded audio with the editable power of MIDI to get the best of both worlds."
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
          "front": "Audio Recording",
          "back": "A digital capture of actual sound waves. It's fixed once recorded and is used for vocals and live instruments."
        },
        {
          "id": "music-production-101-l02-f2",
          "front": "MIDI",
          "back": "Musical Instrument Digital Interface. A capture of performance data (notes, velocity, duration) that is fully editable and triggers virtual instruments."
        },
        {
          "id": "music-production-101-l02-f3",
          "front": "Virtual Instrument (VSTi)",
          "back": "Software that generates sound from MIDI data, such as synthesizers, samplers, and drum machines."
        }
      ],
      "learningAids": [
        {
          "id": "music-production-101-l02-a2",
          "type": "diagram",
          "title": "Audio vs. MIDI Comparison",
          "content": "A side-by-side visual chart comparing the properties of audio waveforms and MIDI note data."
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
          "explanation": "MIDI doesn't record sound itself, but the instructions for playing a sound: which note, how hard (velocity), and for how long (duration)."
        },
        {
          "id": "music-production-101-l03-q2",
          "text": "Which DAW view shows tracks laid out horizontally over time?",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Piano Roll"
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
          "explanation": "The Timeline, also called the Arrangement view, is the main workspace where you see all your audio and MIDI tracks laid out horizontally, representing the progression of the song over time."
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
          "explanation": "Audio recording is the process of capturing actual sound waves. This makes it ideal for sources with unique, complex nuances like the human voice or an acoustic instrument."
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
          "explanation": "Because MIDI is just data, you can easily change any aspect of the performance—the notes, the timing, or even the virtual instrument playing the notes—without having to re-record."
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
          "content": "Every great beat starts with three core sounds. The Kick is the deep, low thump that drives the rhythm, often landing on beats 1 and 3. The Snare is the sharp, cracking sound that provides the 'backbeat,' typically hitting on beats 2 and 4. Finally, the Hi-hat creates a sizzling metallic pulse that keeps time, often playing faster eighth or sixteenth notes. Together, the kick, snare, and hi-hat form the rhythmic skeleton that supports nearly every genre of modern music."
        },
        {
          "id": "music-production-101-l04-c2",
          "title": "Programming Patterns",
          "content": "You can program drum patterns using a step sequencer (a simple grid) or the piano roll. A basic hip-hop beat might have the kick on 1 and 3, the snare on 2 and 4, and hi-hats on every eighth note. A classic electronic dance music (EDM) beat is 'four-on-the-floor,' where the kick hits on every beat (1, 2, 3, and 4), with a snare or clap on 2 and 4. Starting with these simple patterns is a great way to learn, and you can add your own fills and variations as you get more comfortable."
        },
        {
          "id": "music-production-101-l04-c3",
          "title": "Humanizing Your Beats",
          "content": "Beats that are perfectly aligned to the grid can sound robotic. To make them feel more natural, use two key techniques. First, Swing slightly delays every other note, creating a laid-back, groovy feel common in hip-hop and jazz. Second, Velocity Variation means that not every hit should have the same volume. By making some hi-hats softer than others or accenting the main snare hits, you add dynamics and life to your beat, making it feel like it was played by a real person."
        }
      ],
      "flashcards": [
        {
          "id": "music-production-101-l04-f1",
          "front": "Kick Drum",
          "back": "The deep, low-frequency drum that drives the rhythm — typically on beats 1 and 3 (or every beat in EDM)."
        },
        {
          "id": "music-production-101-l04-f2",
          "front": "Snare / Backbeat",
          "back": "The sharp, cracking hit on beats 2 and 4 that provides the rhythmic spine of pop, rock, and hip-hop."
        },
        {
          "id": "music-production-101-l04-f3",
          "front": "Swing",
          "back": "Slightly delaying every other note to create a laid-back, groovy feel. Essential in hip-hop and jazz."
        },
        {
          "id": "music-production-101-l04-f4",
          "front": "Quantize",
          "back": "Snapping notes to the grid so they are perfectly on time. Useful, but can sound robotic if overused."
        }
      ],
      "learningAids": [
        {
          "id": "music-production-101-l04-a1",
          "type": "image",
          "title": "Basic Drum Pattern Grid",
          "content": "A visual grid (step sequencer) showing a common rock/pop beat with kick on 1 & 3, snare on 2 & 4, and eighth-note hi-hats."
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
          "content": "Let's build a classic hip-hop beat in 4/4 time. Step 1: Place a kick drum on beat 1 and another on the 'and' of beat 2 for a syncopated bounce. Step 2: Place the snare on beats 2 and 4 to create the backbeat. Step 3: Add hi-hats on every eighth note (8 hits per measure). Step 4: Add a second kick on beat 3 for more drive. Step 5: Apply 50-60% swing to the hi-hats for a groovy feel. Step 6: Lower the velocity of the off-beat hi-hats to about 70% to create a more dynamic rhythm. Experiment and have fun!"
        },
        {
          "id": "music-production-101-l05-c2",
          "title": "Adding Percussion and Fills",
          "content": "Once your core beat is solid, add extra percussion like shakers, tambourines, or congas to add texture. Keep these sounds subtle so they don't overpower the main kick, snare, and hi-hat. To keep your beat interesting, add a fill every 4 or 8 bars. A fill is a short rhythmic variation, like a simple snare roll or a break in the kick pattern, that signals a change in the music and keeps the listener engaged."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-production-101-l05-a1",
          "title": "Drag and Drop Beat Builder",
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
          "back": "A kick drum pattern hitting on every beat (1-2-3-4). The signature of EDM, disco, and house music."
        },
        {
          "id": "music-production-101-l05-f2",
          "front": "Fill",
          "back": "A short rhythmic variation that signals a transition between sections and keeps the beat from sounding repetitive."
        },
        {
          "id": "music-production-101-l05-f3",
          "front": "Velocity",
          "back": "How hard a MIDI note is played (0-127). It controls the volume and often the character of the triggered sound."
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
          "explanation": "This pattern, with the snare on beats 2 and 4, is called the 'backbeat' and is the rhythmic foundation of countless songs in popular music."
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
          "explanation": "Swing nudges every second note (the 'off-beat') slightly later, creating a less rigid, more groovy or 'shuffled' feel common in jazz and hip-hop."
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
          "explanation": "'Four-on-the-floor' is a driving rhythm pattern where the kick drum plays on every quarter note (1, 2, 3, and 4), characteristic of disco and electronic dance music."
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
          "explanation": "By varying the velocity (how hard each note is hit), you mimic the natural inconsistencies of a human drummer, making the beat sound more dynamic and less mechanical."
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
          "content": "The path your audio takes is called the signal chain. It starts with the sound source (your voice or instrument). A microphone captures the sound waves and turns them into an electrical signal. This signal travels to an audio interface, which acts as a bridge to your computer. The interface uses a preamp to boost the signal and an analog-to-digital converter to change it into a digital format the computer understands. Finally, the digital signal is recorded in your DAW. Understanding this flow is key to troubleshooting any recording issues."
        },
        {
          "id": "music-production-101-l07-c2",
          "title": "Setting Levels",
          "content": "Setting the right recording level is critical. If it's too quiet, you'll hear background noise when you turn it up later. If it's too loud, you'll get clipping—a harsh digital distortion that can't be fixed. This is called 'gain staging.' A good rule is to aim for your signal to peak around -12 to -6 dBFS on your DAW's meter. This leaves plenty of 'headroom' and ensures a clean, professional recording. You can always make it louder later, but you can never undo clipping."
        },
        {
          "id": "music-production-101-l07-c3",
          "title": "Microphone Types",
          "content": "The two most common microphone types are dynamic and condenser. Dynamic mics (like the Shure SM58) are durable, affordable, and great for loud sources like guitar amps, snare drums, and live vocals. Condenser mics are more sensitive and detailed, making them ideal for studio vocals and acoustic instruments. They require 'phantom power,' a 48V charge supplied by your audio interface. For beginners, a USB microphone is a great all-in-one option that combines a mic and interface into one device."
        }
      ],
      "flashcards": [
        {
          "id": "music-production-101-l07-f1",
          "front": "Audio Interface",
          "back": "Hardware that converts analog audio to digital for the computer and vice versa. The bridge between your mic and DAW."
        },
        {
          "id": "music-production-101-l07-f2",
          "front": "Clipping",
          "back": "Digital distortion that occurs when the signal is too loud. It's irreversible, so always avoid it by leaving headroom."
        },
        {
          "id": "music-production-101-l07-f3",
          "front": "Gain Staging",
          "back": "The process of setting proper volume levels at each stage of the signal chain to avoid noise and clipping."
        },
        {
          "id": "music-production-101-l07-f4",
          "front": "Phantom Power (48V)",
          "back": "Electrical power sent from the audio interface to power condenser microphones through the mic cable."
        }
      ],
      "learningAids": [
        {
          "id": "music-production-101-l07-a1",
          "type": "diagram",
          "title": "Signal Flow Diagram",
          "content": "A simple flowchart: Sound Source -> Microphone -> Audio Interface (Preamp & A/D Converter) -> USB/Thunderbolt -> DAW."
        },
        {
          "id": "music-production-101-l07-a2",
          "type": "image",
          "title": "DAW Meter Showing Clipping",
          "content": "A visual of a DAW's master fader, one side showing a healthy level (peaking at -6dB) and the other showing a clipped signal (hitting 0dB and red)."
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
          "content": "Equalization, or EQ, is like a volume control for specific frequencies. It lets you shape the tone of an instrument. Frequencies are split into Bass (20-250 Hz) for warmth and weight, Mids (250 Hz - 4 kHz) for body and presence, and Treble (4-20 kHz) for brightness and air. The goal of EQ in a mix is to give each instrument its own space so they don't clash. A key principle is to 'cut before you boost.' If a vocal sounds muddy, try cutting the low-mid frequencies from it instead of just boosting the highs. This creates a cleaner mix."
        },
        {
          "id": "music-production-101-l08-c2",
          "title": "Compression: Controlling Dynamics",
          "content": "Compression is an automatic volume controller. It reduces the dynamic range of a sound, making the quiet parts louder and the loud parts quieter. This creates a more consistent and punchy sound. Key controls are Threshold (the level at which compression starts) and Ratio (how much the volume is reduced). Gentle compression (2:1 to 4:1 ratio) is great for evening out vocals and bass, helping them sit perfectly in the mix without jumping out or getting lost."
        },
        {
          "id": "music-production-101-l08-c3",
          "title": "Reverb: Creating Space",
          "content": "Reverb simulates the sound of a room or space, adding depth and dimension to your mix. It makes your music sound like it's happening in a real environment, not a vacuum. Different types of reverb create different feelings: Room reverb is subtle and natural, Plate reverb is bright and smooth (great for vocals), and Hall reverb is large and epic. It's best to use reverb on a 'send' or 'aux' channel. This lets you send multiple instruments to the same reverb, creating a cohesive space and giving you better control over the wet (effect) and dry (original) signal balance."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-production-101-l08-a1",
          "title": "Match the Mixing Tool to its Job",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "EQ",
              "right": "Boosts or cuts specific frequency ranges to shape tone."
            },
            {
              "left": "Compression",
              "right": "Reduces the volume of loud sounds to even out dynamics."
            },
            {
              "left": "Reverb",
              "right": "Simulates sound reflections in a space to add depth."
            },
            {
              "left": "Threshold",
              "right": "The volume level at which a compressor begins to work."
            },
            {
              "left": "High-Pass Filter",
              "right": "An EQ that cuts low frequencies (rumble) below a set point."
            },
            {
              "left": "Send / Aux Channel",
              "right": "A way to route signal to a shared effect like reverb."
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-production-101-l08-f1",
          "front": "EQ (Equalization)",
          "back": "A tool that boosts or cuts specific frequency ranges, used to carve space in a mix so each instrument is clear."
        },
        {
          "id": "music-production-101-l08-f2",
          "front": "Compressor",
          "back": "Reduces dynamic range by turning down signal above a threshold. Evens out volume for consistency."
        },
        {
          "id": "music-production-101-l08-f3",
          "front": "Reverb",
          "back": "An effect simulating sound reflections in a physical space. Adds depth and spatial dimension to a mix."
        },
        {
          "id": "music-production-101-l08-f4",
          "front": "High-Pass Filter (HPF)",
          "back": "An EQ filter that removes frequencies below a set point. Commonly used to cut rumble from non-bass tracks."
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
          "explanation": "It's often better to 'carve out' space for an instrument by cutting clashing frequencies from another track, rather than just boosting the frequencies you want to hear. This leads to a cleaner, less cluttered mix."
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
          "explanation": "The threshold is the volume level you set. Any part of the audio signal that is louder than the threshold will be turned down (compressed) by the compressor."
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
              "text": "It lets you blend wet and dry signals and share one reverb across multiple tracks"
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
          "explanation": "Using a send allows multiple tracks to share the same reverb effect, saving CPU power and creating a cohesive sense of space. It also lets you control the wet/dry balance for each track independently."
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
          "explanation": "Clipping is a harsh digital distortion that happens when an audio signal's level tries to go above the maximum possible level in a digital system, which is 0 decibels Full Scale (dBFS)."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 3
        }
      }
    },
    {
      "id": "music-production-101-l10",
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
          "id": "music-production-101-l10-c1",
          "title": "Subtractive Synthesis",
          "content": "Subtractive synthesis is a way to create sounds by starting with a harmonically rich waveform and carving parts of it away. It begins with an Oscillator, which generates a raw waveform like a bright, buzzy Saw wave or a hollow Square wave. Next, that sound passes through a Filter, which 'subtracts' or removes certain frequencies. A low-pass filter, for example, cuts high frequencies, making the sound darker or more muffled. By moving the filter's cutoff point, you can create expressive, evolving sounds."
        },
        {
          "id": "music-production-101-l10-c2",
          "title": "ADSR Envelopes",
          "content": "The ADSR envelope shapes a sound's volume over time. It has four stages: Attack (how quickly the sound fades in), Decay (how it drops from the initial peak), Sustain (the level it holds at while a key is pressed), and Release (how long it takes to fade out after the key is let go). A percussive sound like a piano has a fast attack and decay. A soft, atmospheric pad sound has a slow attack and a long release. ADSR gives sounds their unique character and shape."
        },
        {
          "id": "music-production-101-l10-c3",
          "title": "Synthesizers vs. Samplers",
          "content": "A synthesizer creates sound from the ground up using oscillators and math. It's for designing new, electronic sounds. A sampler, on the other hand, plays back pre-recorded audio files, called samples. A 'realistic piano' plugin is a sampler playing back recordings of a real piano. A drum machine plugin is often a sampler playing back recordings of real drum hits. Synthesizers invent sounds; samplers recreate them."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-production-101-l10-a1",
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
          "id": "music-production-101-l10-f1",
          "front": "Oscillator",
          "back": "The sound source in a synthesizer that generates raw waveforms (saw, square, sine, triangle)."
        },
        {
          "id": "music-production-101-l10-f2",
          "front": "ADSR Envelope",
          "back": "Attack, Decay, Sustain, Release. Controls how a sound's volume evolves over time from key press to key release."
        },
        {
          "id": "music-production-101-l10-f3",
          "front": "Low-Pass Filter",
          "back": "Removes frequencies above a cutoff point. The most common filter in subtractive synthesis."
        },
        {
          "id": "music-production-101-l10-f4",
          "front": "Sampler",
          "back": "A virtual instrument that plays back recordings of real sounds, mapped across a keyboard."
        }
      ],
      "learningAids": [
        {
          "id": "music-production-101-l10-a2",
          "type": "diagram",
          "title": "Subtractive Synthesis Flowchart",
          "content": "A visual flowchart: Oscillator (generates rich waveform) -> Filter (subtracts frequencies) -> Amplifier (controls volume via ADSR) -> Output."
        },
        {
          "id": "music-production-101-l10-a3",
          "type": "image",
          "title": "Visual ADSR Envelope",
          "content": "A graph showing the four stages of an ADSR envelope shaping a sound over time."
        }
      ]
    },
    {
      "id": "music-production-101-l11",
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
          "id": "music-production-101-l11-c1",
          "title": "Beyond the 8-Bar Loop",
          "content": "A common challenge is turning a great loop into a full song. This is where arrangement comes in—deciding what plays when. A typical pop song structure is Intro -> Verse -> Chorus -> Verse -> Chorus -> Bridge -> Final Chorus -> Outro. Each section serves a different purpose to tell a story and keep the listener engaged. The key is to create contrast and momentum, so the song feels like it's going somewhere."
        },
        {
          "id": "music-production-101-l11-c2",
          "title": "The Add/Subtract Principle",
          "content": "The simplest way to arrange is the Add/Subtract Principle. Start with your full loop, which will be your high-energy section, like the chorus. For the verse, subtract elements—maybe take out the main melody and some percussion to make it sparser. For the intro, start with even fewer elements. As you move from verse to chorus, add elements back in to build energy. This creates natural dynamics and makes your chorus hit harder."
        },
        {
          "id": "music-production-101-l11-c3",
          "title": "Automation: Bringing Your Mix to Life",
          "content": "Automation lets you program changes to almost any parameter over time. This is what turns a static mix into a dynamic performance. You can automate volume for fade-ins and fade-outs. You can automate a filter sweep to build tension before a drop. You can automate panning to make sounds move around the listener. Subtle automation on things like reverb sends or synth parameters can add constant, subtle movement that keeps the track feeling alive."
        }
      ],
      "flashcards": [
        {
          "id": "music-production-101-l11-f1",
          "front": "Arrangement",
          "back": "The organization of a song's sections and instrumentation over time—deciding what plays when."
        },
        {
          "id": "music-production-101-l11-f2",
          "front": "Automation",
          "back": "Programming parameter changes over time in a DAW, such as volume, panning, filter cutoff, and effects."
        },
        {
          "id": "music-production-101-l11-f3",
          "front": "Drop",
          "back": "In EDM, the moment after a build-up where the full beat and bass return with maximum energy."
        },
        {
          "id": "music-production-101-l11-f4",
          "front": "Add/Subtract Principle",
          "back": "Arranging by adding instruments for energy and removing them for contrast. The simplest way to create dynamics."
        }
      ],
      "learningAids": [
        {
          "id": "music-production-101-l11-a1",
          "type": "diagram",
          "title": "Common Song Structures",
          "content": "Visual timelines for a typical Pop song (Verse-Chorus-Verse-Chorus-Bridge-Chorus) and an EDM track (Intro-Build-Drop-Breakdown-Build-Drop-Outro)."
        }
      ]
    },
    {
      "id": "music-production-101-l12",
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
          "id": "music-production-101-l12-c1",
          "title": "Exporting Your Mix",
          "content": "When your song is finished, you need to export it (also called bouncing or rendering) into a single audio file. For your high-quality master copy, export a 24-bit, 44.1 kHz WAV file. For sharing online, also create a high-quality MP3 (320 kbps). Before you export, do a final check: make sure no tracks are accidentally muted, check that your master fader isn't clipping, and ensure your song starts and ends cleanly."
        },
        {
          "id": "music-production-101-l12-c2",
          "title": "Basic Mastering",
          "content": "Mastering is the final step of quality control. Its main goals are to make your song commercially loud and ensure it sounds good on all playback systems. The main tool for loudness is a Limiter, a type of compressor that prevents the signal from ever going over 0 dBFS while raising the overall level. Streaming services like Spotify have loudness targets (around -14 LUFS) to ensure a consistent listening experience. Mastering also involves final EQ tweaks to correct any tonal imbalances."
        },
        {
          "id": "music-production-101-l12-c3",
          "title": "Releasing Your Music",
          "content": "To get your music on platforms like Spotify and Apple Music, you need a digital distributor (e.g., DistroKid, TuneCore, CD Baby). You upload your master WAV file, cover art (typically 3000x3000 pixels), and metadata (artist name, song title). The distributor sends your music to all the stores and collects royalties for you. It's best to upload your music 2-4 weeks before your release date to allow time for processing and potential playlist pitching."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-production-101-l12-a1",
          "title": "Order the Production Steps",
          "type": "drag_and_drop",
          "prompt": "Put these production steps in the correct order from start to finish:",
          "items": [
            "Record / program MIDI & audio tracks",
            "Arrange song sections",
            "Mix (EQ, compression, reverb)",
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
          "id": "music-production-101-l12-f1",
          "front": "LUFS",
          "back": "Loudness Units relative to Full Scale. The standard loudness measurement for streaming (-14 LUFS is the target for Spotify)."
        },
        {
          "id": "music-production-101-l12-f2",
          "front": "Limiter",
          "back": "A compressor with a very high ratio that prevents a signal from exceeding a set ceiling. Used in mastering to maximize loudness without clipping."
        },
        {
          "id": "music-production-101-l12-f3",
          "front": "Distributor",
          "back": "A service (like DistroKid or TuneCore) that uploads your music to streaming platforms and manages royalties."
        },
        {
          "id": "music-production-101-l12-f4",
          "front": "Bounce / Render / Export",
          "back": "The process of converting your DAW project into a final audio file (like WAV or MP3) for listening outside the DAW."
        }
      ]
    },
    {
      "id": "music-production-101-l13",
      "title": "Final Project: Create Your First Track",
      "type": "interactive",
      "duration": 25,
      "objectives": [
        "Synthesize all learned skills to produce a 1-minute musical piece",
        "Arrange the piece with at least three distinct sections",
        "Apply basic mixing and automation to enhance the track"
      ],
      "chunks": [
        {
          "id": "music-production-101-l13-c1",
          "title": "Project Brief: Your Mission",
          "content": "Your challenge is to create a 1-minute song from scratch. It must include: a core drum beat, at least one MIDI instrument (like a bassline or synth melody), and one audio element (this can be a recorded sound, a vocal, or a downloaded sample). Your song should have an intro, a main section (like a verse/chorus), and an outro."
        },
        {
          "id": "music-production-101-l13-c2",
          "title": "Step 1: Lay the Foundation",
          "content": "Start by creating your drum beat. Use the techniques from the beat making lessons. Program a 4 or 8-bar loop with a kick, snare, and hi-hats. Don't forget to add a little swing or velocity variation to make it feel human."
        },
        {
          "id": "music-production-101-l13-c3",
          "title": "Step 2: Add Musical Layers",
          "content": "Now, add your MIDI instruments. Create a new track with a virtual instrument. Program a simple bassline that complements your kick drum pattern. Then, add another instrument for a melody or chords. Use the piano roll to edit your notes until you have a loop you like."
        },
        {
          "id": "music-production-101-l13-c4",
          "title": "Step 3: Arrange Your Track",
          "content": "It's time to break out of the loop! Use the Add/Subtract principle. Copy your loop across the timeline for one minute. Create an intro by starting with just one or two elements. Build energy by adding more parts for the main section. Create an outro by fading elements out."
        },
        {
          "id": "music-production-101-l13-c5",
          "title": "Step 4: Mix and Polish",
          "content": "Balance the volume levels of your tracks. Use EQ to give each instrument its own space. Apply light compression to your drums or bass to even them out. Add a touch of reverb to your melody to give it depth. Use automation to create a filter sweep into your main section or a fade-out at the end."
        },
        {
          "id": "music-production-101-l13-c6",
          "title": "Step 5: Export and Share",
          "content": "Follow the steps from the previous lesson to export your finished track as a high-quality WAV file and a 320kbps MP3. Congratulations, you've produced your first track!"
        }
      ],
      "learningAids": [
        {
          "id": "music-production-101-l13-a1",
          "type": "checklist",
          "title": "Project Checklist",
          "content": "A checklist of all required elements for the final project: 1-minute length, drum beat, MIDI instrument, audio element, intro/main/outro structure, basic mixing, automation, and final export."
        }
      ]
    },
    {
      "id": "music-production-101-l14",
      "title": "Final Mastery Quiz",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Demonstrate comprehensive mastery of music production fundamentals"
      ],
      "questions": [
        {
          "id": "music-production-101-l14-q1",
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
          "explanation": "Streaming services normalize audio to a standard loudness level to provide a consistent listening experience. For Spotify, the target is approximately -14 LUFS (Loudness Units Full Scale)."
        },
        {
          "id": "music-production-101-l14-q2",
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
          "explanation": "This technique creates dynamic interest by building energy when instruments are added (e.g., in a chorus) and creating space or tension when they are removed (e.g., in a verse or bridge)."
        },
        {
          "id": "music-production-101-l14-q3",
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
          "explanation": "These are crucial final checks. Muted tracks mean parts of your song will be missing, and clipping on the master bus will cause irreversible digital distortion in your final exported file."
        },
        {
          "id": "music-production-101-l14-q4",
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
          "explanation": "A sawtooth wave is rich in both even and odd harmonics, giving it a full, bright, and often aggressive or 'buzzy' character, making it a versatile starting point for synthesis."
        },
        {
          "id": "music-production-101-l14-q5",
          "text": "The recording signal chain, in the correct order, is:",
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
          "explanation": "The sound wave is captured by the microphone, converted from analog to digital by the audio interface, and then recorded and manipulated in the Digital Audio Workstation (DAW)."
        },
        {
          "id": "music-production-101-l14-q6",
          "text": "A key advantage of MIDI over audio is:",
          "skillId": "music-production-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It always has higher sound quality"
            },
            {
              "id": "b",
              "text": "The ability to edit notes, timing, and instrument after recording"
            },
            {
              "id": "c",
              "text": "It captures the sound of the room"
            },
            {
              "id": "d",
              "text": "It requires less hard drive space than a text file"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Since MIDI is instructional data and not a fixed audio recording, you have complete flexibility to change every aspect of the performance non-destructively."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 6,
        "bloomProfile": {
          "remember": 2,
          "understand": 2,
          "apply": 1,
          "analyze": 1
        }
      }
    }
  ]
};
