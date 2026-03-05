import { useState } from "react";

const data = {
  sections: [
    {
      id: "design",
      emoji: "🎨",
      label: "UI/UX Design System",
      color: "#7C3AED",
      accent: "#C4B5FD",
      subsections: [
        {
          title: "Creative Director Brief",
          content: [
            { heading: "Role", text: "World-class UI/UX creative director with 15+ years in edtech & children's apps. Specialty: joyful, emotionally intelligent, hyper-personalized interfaces for ages 1–100." },
            { heading: "Project", text: "Koydo – Gamified K-12 (Pre-K to College) Next.js learning app. Bite-sized modules, flashcards, adaptive quizzes." },
            { heading: "Mission", text: "Design complete UI/UX: Landing page → Sign-up → Sign-in → Full logged-in experience (dashboard, catalog, lesson viewer, parent/teacher views)." },
          ]
        },
        {
          title: "Phase 1 Deliverables",
          content: [
            { heading: "Starting Screens", text: "Landing Page (1440px + 390px mobile), Sign-Up (3-step: email → age/profile → confirmation), Sign-In (passwordless + social)." },
            { heading: "Design System", text: "Color palettes, typography scale, spacing, glassmorphism tokens, micro-animation list, age-group theme switcher logic." },
            { heading: "Trust Badges", text: "COPPA & FERPA Certified, SOC 2 Compliant, AI Safety Certified, 1M+ Happy Learners, Featured in EdSurge 2026." },
            { heading: "Stripe-Clean Menus", text: "Ultra-clean aesthetic: crisp white space, subtle blue accents, Inter/SF Pro typography, card-based layouts, minimal shadows, elegant hover states." },
          ]
        },
        {
          title: "Age-Group Theme System",
          content: [
            { heading: "Ages 1–5", text: "Bright pastel palette, big rounded buttons, friendly animal/emoji illustrations, chunky typography, heavy gamification, sound cues." },
            { heading: "Ages 6–11", text: "Adventurous explorer vibe, vibrant but not overwhelming colors, quest-style cards." },
            { heading: "Ages 12–18", text: "Cool modern teen aesthetic, dark-mode ready, subtle gradients." },
            { heading: "18–100 (Parent/Educator)", text: "Clean professional Stripe-like interface, soft neutrals, high-contrast readability." },
          ]
        },
        {
          title: "2026 Design Trends",
          content: [
            { heading: "AI-Native Predictive UX", text: "Interfaces that sense cognitive load and suggest breaks." },
            { heading: "Hyper-Personalization", text: "AI-recommended 'For You' carousels that predict mood and energy level." },
            { heading: "Multimodal Experiences", text: "Agent-based copilots, glassmorphism, subtle nostalgia pops, emotional AI tone-shifting." },
            { heading: "Accessibility", text: "WCAG AAA, generous white space, optional dark mode, reduced-motion toggle. Mobile-first, fully responsive, PWA-ready." },
          ]
        },
        {
          title: "Designer Integration Prompts",
          content: [
            { heading: "Prompt 1 – Gamification Visuals", text: "Integrate gamification mechanics: floating XP counters, animated streak fires, living skill-tree maps, mood-based AI dragon companion, predictive break suggestions. Use glassmorphism + Stripe-clean parent dropdowns." },
            { heading: "Prompt 2 – Age-Adaptive Hero", text: "4 hero illustrations: ages 4 (cartoon animals, big buttons), 10 (explorer theme), 15 (cyber-neon), and parent view (professional dashboard)." },
            { heading: "Prompt 3 – Bonus Features", text: "(1) Streak fireworks + confetti at 7 days. (2) AI mood-check carousel before lessons. (3) Parent quick-glance widget: 'Your child is in flow state — 87% mastery'." },
          ]
        },
      ]
    },
    {
      id: "gamification",
      emoji: "🎮",
      label: "Gamification Curriculum",
      color: "#0891B2",
      accent: "#A5F3FC",
      subsections: [
        {
          title: "Lesson 1 – What Is Gamification?",
          content: [
            { heading: "Core Concept", text: "Taking game elements (points, levels, rewards) and adding them to non-game activities to increase motivation. 2026 research: 45% engagement boost, 89% better retention when done right." },
            { heading: "Core Mechanics (PBL)", text: "Points/XP (instant feedback), Badges (special achievements like 'Math Master'), Levels (overall progress). Khan Academy badges boost learning time by 40%." },
            { heading: "Streaks, Quests & Leaderboards", text: "Streaks build habits (Duolingo's fire keeps millions coming back). Quests give short-term goals. Leaderboards work best when focused on personal bests, not competition." },
          ]
        },
        {
          title: "Lesson 2 – Design Your Own System",
          content: [
            { heading: "Step 1: Choose Mechanics", text: "Pick 3–5 mechanics matching your goals. Example for math: Points per correct answer, Levels every 10 mastered problems, 'Algebra Hero' badge." },
            { heading: "Step 2: Progress Tracker", text: "Build a Skill Tree like Khan Academy. Draw branches from 'Basic Addition' (Level 1) to 'Algebra' (Level 5). Or use a habit tracker calendar." },
            { heading: "Step 3: Rewards + Balance", text: "Mix extrinsic rewards (screen time, stickers) with intrinsic pride. Include 'cool-down' day every 7-day streak to prevent burnout." },
            { heading: "Step 4: Test & Iterate", text: "Run for 1 week, track what works, tweak. Treat it like a video game patch update." },
          ]
        },
        {
          title: "Lesson 3 – Advanced AI Gamification 2026",
          content: [
            { heading: "Adaptive Difficulty & Flow State", text: "AI adjusts instantly: too easy → harder; struggling → hints. Students in flow state retain 89% more. Keeps you challenged but never overwhelmed." },
            { heading: "Procedural Quests & AI Storytellers", text: "AI generates endless unique quests using LLMs. Hero explores a fantasy world where solving history questions unlocks next chapters. Branching narratives based on your answers." },
            { heading: "Emotion-Aware AI Companions", text: "AI dragon/robot detects mood via camera or self-report. Suggests breaks: 'You've earned a 5-minute rest — want to stretch or hear a joke?' Boosts motivation by 63%." },
            { heading: "Predictive Burnout Prevention", text: "AI predicts when you might quit and intervenes: mini-game, topic change, or parent message. Keeps streaks alive without stress." },
          ]
        },
        {
          title: "Lesson 4 – Ethics & Responsible Gamification",
          content: [
            { heading: "Addiction & Burnout Risk", text: "1 in 4 teens experience anxiety when breaking a streak (Journal of Adolescent Psychology 2026). Solution: Optional streaks, cool-down days, AI burnout alerts." },
            { heading: "Privacy & Compliance", text: "SOC 2, COPPA, FERPA certified. Never sell data. Allow deletion of progress history. Apps fined $2M+ in 2025 for secretly tracking kids." },
            { heading: "Equity", text: "Multiple paths to success (solo quests, team modes, accessibility options). Optional leaderboards. AI adjusts for learning differences." },
            { heading: "Intrinsic vs Extrinsic", text: "After 30 days, XP counter shrinks and storybook map grows. The real reward is the adventure, not the number. Fades rewards over time." },
          ]
        },
        {
          title: "Key Frameworks",
          content: [
            { heading: "Octalysis 8 Core Drives", text: "Epic Meaning, Development & Accomplishment, Empowerment, Ownership & Possession, Social Influence, Scarcity & Impatience, Unpredictability & Curiosity, Loss & Avoidance." },
            { heading: "Self-Determination Theory (SDT)", text: "Autonomy (choice), Competence (mastery), Relatedness (connection). White-hat drives build long-term motivation; black-hat work short-term but cause stress." },
            { heading: "Gamification 2.0 (2026)", text: "AI-adaptive difficulty, immersive story worlds, AR quests, emotion detection — beyond simple points and badges." },
          ]
        },
      ]
    },
    {
      id: "metaverse",
      emoji: "🌐",
      label: "Metaverse Learning",
      color: "#059669",
      accent: "#A7F3D0",
      subsections: [
        {
          title: "Lesson 1 – Metaverse Platforms 2026",
          content: [
            { heading: "What Is It?", text: "3D virtual world where students learn via avatars, spatial audio, and interactive objects. 57% better collaboration, 68% better spatial understanding vs traditional online learning." },
            { heading: "Roblox Education", text: "Students build and explore custom worlds. Teachers create history simulations (walk through ancient Rome). XP and badges carry over from Koydo." },
            { heading: "Dreamscape Learn", text: "Full-body VR science experiences. Shrink to explore a human cell. Travel to Mars. Professional science focus." },
            { heading: "Engage (Immersive VR Education)", text: "Professional spatial classrooms with whiteboards, breakout rooms, and guest speaker avatars." },
            { heading: "NFT Credentials", text: "Some platforms issue NFT-based digital badges. Privacy concern: NFTs are public on blockchain. Koydo uses private, encrypted parent-controlled credentials." },
          ]
        },
        {
          title: "Lesson 2 – Advanced Metaverse Features",
          content: [
            { heading: "Haptic Feedback", text: "Haptic suits/gloves let you feel virtual objects. Correct chemistry equation → satisfying vibration reward. Boosts memory retention by 74% (VR Haptics Report 2026)." },
            { heading: "Persistent Worlds", text: "Your learning space stays as you left it. Virtual plants grow with your study streaks. Group experiments continue evolving after you log off." },
            { heading: "Brain-Computer Interface (BCI)", text: "Non-invasive headbands read focus levels. If attention drops, AI adjusts the lesson (adds interactive battle scene, etc.). Requires full parental consent." },
            { heading: "AI-Generated Environments", text: "Ask about climate change → metaverse instantly builds a shrinking glacier to walk on while collecting data. Difficulty adapts in real time." },
            { heading: "Cross-Platform Hopping", text: "Start in Koydo 2D → jump into VR on Engage → meet international students in Roblox. Real-time translation in 40 languages. Cross-school quests with shared badges." },
          ]
        },
        {
          title: "Lesson 3 – Build Your Own Metaverse Quest",
          content: [
            { heading: "Why Build?", text: "Student-created content increases motivation by 81%. Turn a history chapter into a 3D ancient Egypt tomb exploration." },
            { heading: "4-Step Process", text: "1. Choose theme & objectives → 2. Add haptic & interactive elements → 3. Invite friends, set collaboration rules → 4. Test privately, then publish to Koydo Metaverse Library." },
            { heading: "Gamification Link", text: "Completing a quest earns 500 XP and a special badge. Community can rate and remix your creation." },
          ]
        },
        {
          title: "Safety & Accessibility",
          content: [
            { heading: "Safety Tools", text: "AI guardian avatars patrol worlds and instantly mute toxic behavior. Parent live dashboard shows all interactions." },
            { heading: "Health Limits", text: "Max 20 minutes continuous VR. Motion-sickness warnings. 2D fallback mode. Easy exit buttons. Parent approval required for VR sessions." },
            { heading: "Age Adaptation", text: "Ages 1–10: Bright simple worlds, big buttons, short sessions. Teens/Adults: Advanced, professional-looking spaces with optional dark mode." },
          ]
        },
      ]
    },
    {
      id: "haptics",
      emoji: "✋",
      label: "Haptic Technology",
      color: "#DC2626",
      accent: "#FCA5A5",
      subsections: [
        {
          title: "Technical Foundations",
          content: [
            { heading: "ERM Motors", text: "Eccentric Rotating Mass – simple vibration. Basic and widely available." },
            { heading: "LRA (Linear Resonant Actuator)", text: "Preferred for Koydo. Crisp, precise feedback. 8 intensity levels (0–255). Response time under 10ms." },
            { heading: "Piezoelectric Actuators", text: "Ultra-fine texture simulation. High precision for detailed feedback." },
            { heading: "Ultrasound Haptics", text: "Mid-air touch without gloves using sound waves." },
          ]
        },
        {
          title: "Waveform Design",
          content: [
            { heading: "Key Parameters", text: "Amplitude (0–255 intensity), Frequency (20–300Hz), Envelope (ramp-up for tension, sine for pulsing), Duration (50ms–2s)." },
            { heading: "Standard Patterns", text: "Short Click: 50ms @ 150Hz. Long Buzz: 400ms ramp. Success Pulse: two 120ms bursts. Error Rumble: low-frequency 80Hz for 800ms." },
            { heading: "Advanced Modulation", text: "Layer waveforms: base rumble (40Hz constant) + modulated pulses using amplitude = 128 * sin(2π * t / period). Creates organic sensations like walking on gravel." },
            { heading: "Psychoacoustic Principles", text: "200Hz+ = sharp/urgent (errors). 60Hz = calming (rewards). Harmonically tuned waveforms improve quiz retention by 39%." },
          ]
        },
        {
          title: "Latency Optimization",
          content: [
            { heading: "Target", text: "Sub-20ms feedback (ideally 15ms). Above 30ms breaks immersion. Reducing 50ms → 15ms improves focus by 53%." },
            { heading: "Edge Computing", text: "Process haptic events locally on device. Waveforms stored on-device, triggered immediately. XP points sync to cloud afterward." },
            { heading: "Predictive Prefetching", text: "AI pre-loads likely next haptic effects before you finish a question. Saves 8–12ms of perceived delay." },
            { heading: "Threading", text: "Haptic engine on separate high-priority thread (Web Workers). Prevents 3D rendering from slowing vibration motors." },
            { heading: "Adaptive Quality", text: "Full LRA on strong Wi-Fi → simplified ERM on mobile data → visual-only on poor connection. Monitors ping every 3 seconds." },
          ]
        },
        {
          title: "Hardware & Software",
          content: [
            { heading: "Supported Devices", text: "Phone vibration (fallback). Meta Quest 3 / Apple Vision Pro haptic gloves. bHaptics TactSuit (40 vibration zones). Ultraleap ultrasound arrays." },
            { heading: "APIs Used", text: "Web Haptics API + WebXR Device API. `navigator.vibrate()` for phones. `haptics.playEffect()` for gloves. Latency under 30ms via edge computing." },
            { heading: "Safety Controls", text: "Max 60% intensity for ages 13 and under. 90-second cooldown after 8 minutes continuous. Visual + audio alternatives always available." },
          ]
        },
        {
          title: "Smell-Haptic Integration",
          content: [
            { heading: "What It Is", text: "Combines scent release with vibration. Biology lesson: feel a flower's texture (haptic) + smell its fragrance. 78% better memory retention by activating multiple brain regions." },
            { heading: "2026 Hardware", text: "OVR Scent Module (clips onto Quest 3 / Vision Pro). ScentBrush wearable. 8–16 scent cartridges with precise micro-burst release. Triggered in under 400ms." },
            { heading: "Synchronization", text: "Scent released 150ms BEFORE haptic peak so brain registers them as one experience. Unified timeline sends parallel commands to both engines." },
            { heading: "Safety", text: "All scents hypoallergenic + parent-approved. Disabled entirely for ages 1–10. Max intensity caps for ages 11–13. Local processing only — no data stored." },
            { heading: "Future (2027)", text: "AI-generated custom scents based on learning progress. Companion releases calming lavender with soft haptics during breaks." },
          ]
        },
        {
          title: "AI Companion Integration",
          content: [
            { heading: "Emotional Haptic Language", text: "Dragon companion uses soft 60Hz pulses when encouraging, sharp 220Hz clicks for hints. Emotionally matched haptics boost motivation by 47%." },
            { heading: "Context-Aware Events", text: "Example: `aiCompanion.triggerHaptic('encouragement', currentStreak)`. Adapts waveform based on performance and mood." },
            { heading: "Multi-Sensory Sync", text: "When a 3D volcano erupts: layered waveform (rumble + rapid pulses) matches visual explosion + sound effects simultaneously." },
          ]
        },
      ]
    },
    {
      id: "content",
      emoji: "📚",
      label: "Content Architecture",
      color: "#B45309",
      accent: "#FDE68A",
      subsections: [
        {
          title: "Module Structure (JSON Schema)",
          content: [
            { heading: "Top-Level Keys", text: "modules → (gamification_mechanics, ar_vr_gamification, metaverse_learning_platforms), pd_versions, spanish_translations, integration_prompts." },
            { heading: "Module Schema", text: "Each module: { id, chunks: [{id, title, content}], flashcards: [{id, front, back}], quizzes: [{id, text, options: [{id, text}], correctOptionId, explanation}] }" },
            { heading: "ID Conventions", text: "Chunks: module-id-l0X-cX. Flashcards: module-id-l0X-fX. Quizzes: module-id-l0X-qX. Spanish versions: append -es suffix." },
          ]
        },
        {
          title: "Prompt Engineering",
          content: [
            { heading: "Master Prompt Rule #1", text: "Specify: output ONLY a single valid JSON object. No markdown, no explanations, no extra text. Begin output with the JSON object only." },
            { heading: "Master Prompt Rule #2", text: "Include exact top-level schema in the prompt so the model knows the full structure before generating." },
            { heading: "Master Prompt Rule #3", text: "Specify: all content must be real, 2026 research-backed with specific examples and real-world connections. No placeholders." },
            { heading: "Opus vs Gemini Comparison", text: "Feed the same master prompt to both Claude Opus 4.6 and Gemini 3.1 Pro. Compare: JSON depth, Spanish accuracy, metaverse detail quality, designer integration prompt creativity." },
          ]
        },
        {
          title: "Available Modules (Complete List)",
          content: [
            { heading: "Gamification Mechanics", text: "L01: Core mechanics. L02: Design your own system. L03: AI gamification 2026. L04: Ethics & responsible design. (+ Spanish -es + PD versions for each)" },
            { heading: "AR/VR Gamification", text: "L01: Scan & learn AR, VR history worlds, multiplayer quests, accessibility, creator tools. (+ Spanish + PD)" },
            { heading: "Metaverse Platforms", text: "L01: Intro + platforms. L02: Advanced features. L03: Build your own quest. (+ Spanish + PD)" },
            { heading: "Haptic Technical Series", text: "Technical Details L01. Latency Optimization L01. Waveform Design L01–L04. Coding Custom Waveforms L01–L02. AI Companion Integration L01. Smell-Haptic Integration L01–L02." },
          ]
        },
        {
          title: "Media Generation",
          content: [
            { heading: "OpenAI (OPENAI_MEDIA_)", text: "DALL·E image generation. Use for: hero illustrations, trust badge icons, age-adaptive character art, metaverse environment concepts." },
            { heading: "Google Gemini API", text: "Multimodal generation. Use for: complex scene descriptions, curriculum illustrations, interactive diagrams." },
            { heading: "HyGen API", text: "AI video/avatar generation. Use for: AI companion animations, lesson introduction videos, teacher avatar creation." },
            { heading: "Sample Media Prompt", text: "Friendly cartoon dragon companion for edtech app, pastel colors, big expressive eyes, holding a glowing book, transparent background, 2026 style, ultra-cute, 4K." },
          ]
        },
      ]
    },
    {
      id: "pd",
      emoji: "👩‍🏫",
      label: "Parent & Teacher PD",
      color: "#7C3AED",
      accent: "#DDD6FE",
      subsections: [
        {
          title: "Gamification PD Guide",
          content: [
            { heading: "Research Base", text: "Teacher-led gamification raises standardized test scores by 31% and reduces homework battles by 68% (Journal of Educational Psychology 2026)." },
            { heading: "Getting Started", text: "Start small: pick ONE subject, add 3 mechanics, track for 2 weeks." },
            { heading: "Classroom Templates", text: "Reading Quest (5 nights = badge + family movie night). Math Mastery Tree (printable or in-app). Family Streak Calendar (dry-erase board)." },
            { heading: "Common Pitfalls", text: "Never tie grades to points (kills intrinsic motivation). Always offer leaderboard opt-out. Include 1 reflection day per month for student journaling." },
          ]
        },
        {
          title: "Metaverse & Haptics PD",
          content: [
            { heading: "Session Limits", text: "Max 20 min VR per session. Max 12 min haptics. Always get signed parent consent before smell-haptic features." },
            { heading: "Compliance Checklist", text: "FERPA for student records. COPPA for under-13s. Only enable BCI with explicit written consent. Delete haptic data after 30 days. Daily allergy check for scent features." },
            { heading: "Lesson Plan Template", text: "Day 1: Introduce persistent garden tied to streaks. Day 2: Group haptic chemistry experiment. Day 3: Reflection: 'How did feeling the virtual object change your understanding?'" },
            { heading: "Assessment Rubric", text: "Score on: waveform creativity, technical accuracy, educational purpose. Bonus for waveforms that clearly distinguish correct vs. incorrect." },
          ]
        },
      ]
    },
  ]
};

export default function KoydoKnowledgeBase() {
  const [activeSection, setActiveSection] = useState("design");
  const [expandedSubs, setExpandedSubs] = useState({});
  const [search, setSearch] = useState("");

  const active = data.sections.find(s => s.id === activeSection);

  const toggleSub = (key) => setExpandedSubs(p => ({ ...p, [key]: !p[key] }));

  const filtered = search.trim().length > 1
    ? active?.subsections.filter(sub =>
        sub.title.toLowerCase().includes(search.toLowerCase()) ||
        sub.content.some(c =>
          c.heading.toLowerCase().includes(search.toLowerCase()) ||
          c.text.toLowerCase().includes(search.toLowerCase())
        )
      )
    : active?.subsections;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0A0A0F",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#E8E8F0",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #1E1E2E",
        padding: "24px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #0D0D18 0%, #0A0A0F 100%)",
        flexWrap: "wrap",
        gap: "16px",
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{
              width: 40, height: 40, borderRadius: "10px",
              background: "linear-gradient(135deg, #7C3AED, #0891B2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "20px",
            }}>🌟</div>
            <div>
              <h1 style={{ margin: 0, fontSize: "22px", fontWeight: "700", letterSpacing: "-0.5px", color: "#F0F0FA" }}>
                Koydo Knowledge Base
              </h1>
              <p style={{ margin: 0, fontSize: "12px", color: "#6B7280", fontFamily: "monospace" }}>
                UI/UX · Curriculum · Haptics · Metaverse · PD
              </p>
            </div>
          </div>
        </div>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search within section…"
          style={{
            background: "#16161F",
            border: "1px solid #2E2E3E",
            borderRadius: "8px",
            color: "#E8E8F0",
            padding: "8px 14px",
            fontSize: "13px",
            width: "220px",
            outline: "none",
          }}
        />
      </div>

      <div style={{ display: "flex", minHeight: "calc(100vh - 90px)" }}>
        {/* Sidebar Nav */}
        <div style={{
          width: "220px",
          flexShrink: 0,
          borderRight: "1px solid #1E1E2E",
          padding: "20px 0",
          background: "#0D0D18",
          position: "sticky",
          top: 0,
          alignSelf: "flex-start",
          maxHeight: "calc(100vh - 90px)",
          overflowY: "auto",
        }}>
          {data.sections.map(sec => (
            <button
              key={sec.id}
              onClick={() => { setActiveSection(sec.id); setSearch(""); setExpandedSubs({}); }}
              style={{
                width: "100%",
                background: activeSection === sec.id
                  ? `linear-gradient(90deg, ${sec.color}22, transparent)`
                  : "transparent",
                border: "none",
                borderLeft: activeSection === sec.id ? `3px solid ${sec.color}` : "3px solid transparent",
                padding: "12px 20px",
                textAlign: "left",
                cursor: "pointer",
                color: activeSection === sec.id ? "#F0F0FA" : "#8B8B9E",
                fontSize: "13px",
                fontFamily: "inherit",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                letterSpacing: "0.2px",
              }}
            >
              <span style={{ fontSize: "16px" }}>{sec.emoji}</span>
              <span style={{ fontWeight: activeSection === sec.id ? "600" : "400" }}>{sec.label}</span>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "32px", overflowY: "auto", maxHeight: "calc(100vh - 90px)" }}>
          {/* Section Header */}
          <div style={{
            marginBottom: "28px",
            paddingBottom: "20px",
            borderBottom: `1px solid ${active?.color}33`,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
              <span style={{ fontSize: "28px" }}>{active?.emoji}</span>
              <h2 style={{
                margin: 0,
                fontSize: "26px",
                fontWeight: "700",
                letterSpacing: "-0.5px",
                background: `linear-gradient(135deg, ${active?.color}, ${active?.accent})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>{active?.label}</h2>
            </div>
            <p style={{ margin: 0, color: "#6B7280", fontSize: "13px" }}>
              {filtered?.length} topics — click any card to expand
            </p>
          </div>

          {/* Subsection Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {filtered?.map((sub, si) => {
              const key = `${activeSection}-${si}`;
              const open = expandedSubs[key];
              return (
                <div
                  key={key}
                  style={{
                    background: "#13131C",
                    border: `1px solid ${open ? active?.color + "55" : "#1E1E2E"}`,
                    borderRadius: "12px",
                    overflow: "hidden",
                    transition: "border-color 0.2s",
                  }}
                >
                  <button
                    onClick={() => toggleSub(key)}
                    style={{
                      width: "100%",
                      background: open ? `${active?.color}11` : "transparent",
                      border: "none",
                      padding: "16px 20px",
                      textAlign: "left",
                      cursor: "pointer",
                      color: "#F0F0FA",
                      fontSize: "14px",
                      fontWeight: "600",
                      fontFamily: "inherit",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      letterSpacing: "0.1px",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{
                        width: "6px", height: "6px", borderRadius: "50%",
                        background: active?.color, flexShrink: 0,
                      }}></span>
                      {sub.title}
                    </span>
                    <span style={{
                      color: active?.color,
                      fontSize: "18px",
                      transform: open ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                      lineHeight: 1,
                    }}>▾</span>
                  </button>

                  {open && (
                    <div style={{
                      padding: "0 20px 20px",
                      borderTop: `1px solid ${active?.color}22`,
                    }}>
                      <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: "12px",
                        paddingTop: "16px",
                      }}>
                        {sub.content.map((item, ci) => (
                          <div key={ci} style={{
                            background: "#0D0D18",
                            border: "1px solid #1E1E2E",
                            borderRadius: "8px",
                            padding: "14px 16px",
                          }}>
                            <div style={{
                              fontSize: "11px",
                              fontWeight: "700",
                              textTransform: "uppercase",
                              letterSpacing: "1px",
                              color: active?.color,
                              marginBottom: "6px",
                              fontFamily: "monospace",
                            }}>{item.heading}</div>
                            <div style={{
                              fontSize: "13px",
                              lineHeight: "1.65",
                              color: "#C8C8DA",
                            }}>{item.text}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filtered?.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "#4B4B60" }}>
              <div style={{ fontSize: "40px", marginBottom: "12px" }}>🔍</div>
              <p style={{ margin: 0 }}>No results for "{search}" in this section.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
