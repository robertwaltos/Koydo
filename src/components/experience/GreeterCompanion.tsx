"use client";

import {
  useEffect,
  useRef,
  useState,
  useCallback,
  FormEvent,
} from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import CompanionAvatarSVG from "@/components/experience/CompanionAvatarSVG";
import CompanionIntroVideo from "@/components/experience/CompanionIntroVideo";
import CompanionPicker from "@/components/experience/CompanionPicker";
import { useTTS } from "@/hooks/useTTS";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { getGreeterConfig, getRouteSlug, getRouteMessageCount } from "@/lib/greeter/messages";
import {
  COMPANIONS,
  COMPANION_STORAGE_KEY,
  COMPANION_CHAT_KEY,
  type CompanionGender,
} from "@/lib/greeter/companion-config";
import type { ChatMessage } from "@/app/api/companion/chat/route";
import { useCompanionPreferences } from "@/lib/greeter/companion-preferences";

const DISMISSED_KEY = "koydo.greeter.dismissed";
const MINIMIZED_KEY = "koydo.greeter.minimized";
const EXCLUDED_PREFIXES = ["/api"];
const EXCLUDED_EXACT: string[] = [];
const GREETING_SHOW_DELAY = 1_200;
const GREETING_AUTO_HIDE = 7_000;
const GREETING_COOLDOWN = 25_000;

type UIMode = "hidden" | "minimized" | "greeting" | "chat";

export default function GreeterCompanion() {
  const pathname = usePathname();
  const { avatarStyle } = useCompanionPreferences();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [displayName, setDisplayName] = useState("Friend");
  const [companionGender, setCompanionGender] = useState<CompanionGender | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true);
  const [uiMode, setUiMode] = useState<UIMode>("hidden");
  const [greetingMessage, setGreetingMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [speakEnabled, setSpeakEnabled] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [introVideoUrl, setIntroVideoUrl] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const tts = useTTS({
    voice: companionGender === "female" ? "nova" : "echo",
    lessonId: "companion",
    disableBrowserFallback: true,
  });
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastGreetedAt = useRef(0);
  const staticAudioRef = useRef<HTMLAudioElement | null>(null);
  const companion = companionGender ? COMPANIONS[companionGender] : null;

  const isExcluded = useCallback(
    (p: string) => EXCLUDED_EXACT.includes(p) || EXCLUDED_PREFIXES.some((x) => p.startsWith(x)),
    [],
  );
  const clearTimers = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    if (showTimer.current) clearTimeout(showTimer.current);
  }, []);
  const showGreeting = useCallback(() => {
    setUiMode("greeting");
    lastGreetedAt.current = Date.now();
    hideTimer.current = setTimeout(() => {
      setUiMode((m) => (m === "greeting" ? "minimized" : m));
    }, GREETING_AUTO_HIDE);
  }, []);

  // Speak greeting message when bubble appears — try pre-recorded static audio first
  useEffect(() => {
    if (uiMode === "greeting" && greetingMessage && speakEnabled && companionGender) {
      // Stop any previous static audio
      if (staticAudioRef.current) {
        staticAudioRef.current.pause();
        staticAudioRef.current = null;
      }

      const slug = getRouteSlug(pathname);
      const count = getRouteMessageCount(slug);
      const idx = Math.floor(Math.random() * count);
      const staticUrl = `/audio/greetings/${companionGender}-${slug}-${idx}.mp3`;
      const audio = new Audio(staticUrl);
      staticAudioRef.current = audio;

      audio.play()
        .then(() => {
          audio.onended = () => { staticAudioRef.current = null; };
        })
        .catch(() => {
          // Static audio not available — fall back to cloud TTS
          staticAudioRef.current = null;
          tts.speak(greetingMessage);
        });
    }
    if (uiMode !== "greeting" && uiMode !== "chat") {
      if (staticAudioRef.current) {
        staticAudioRef.current.pause();
        staticAudioRef.current = null;
      }
      tts.stop();
    }
  }, [uiMode, greetingMessage]);

  useEffect(() => {
    let mounted = true;
    const supabase = createSupabaseBrowserClient();
    const extractName = (meta?: Record<string, unknown>, email?: string) =>
      (meta?.display_name as string) || (meta?.full_name as string) || (meta?.name as string) || email?.split("@")[0] || "";
    
    // Default to false, allow local storage companion to show up for unauthenticated users
    setIsAuthenticated(false);

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!mounted) return;
      if (session?.user) {
        setIsAuthenticated(true);
        setDisplayName(extractName(session.user.user_metadata, session.user.email ?? "") || "Friend");
      }
    });
    
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      if (session?.user) {
        setIsAuthenticated(true);
        setDisplayName(extractName(session.user.user_metadata, session.user.email ?? "") || "Friend");
        if (_event === "SIGNED_IN") {
          localStorage.removeItem(DISMISSED_KEY);
          setIsDismissed(false);
          // Carry over landing page companion pick if no companion selected yet
          const existingGender = localStorage.getItem(COMPANION_STORAGE_KEY);
          if (!existingGender) {
            const landingPick = typeof sessionStorage !== "undefined"
              ? sessionStorage.getItem("koydo.landing.companion") as CompanionGender | null
              : null;
            if (landingPick === "female" || landingPick === "male") {
              setCompanionGender(landingPick);
              localStorage.setItem(COMPANION_STORAGE_KEY, landingPick);
            }
          }
        }
      } else {
        setIsAuthenticated(false); setDisplayName("Friend"); setChatHistory([]);
      }
    });
    return () => { mounted = false; listener.subscription.unsubscribe(); };
  }, []);

  useEffect(() => {
    const dismissed = localStorage.getItem(DISMISSED_KEY) === "true";
    const minimized = localStorage.getItem(MINIMIZED_KEY) === "true";
    const gender = localStorage.getItem(COMPANION_STORAGE_KEY) as CompanionGender | null;
    const savedChat = localStorage.getItem(COMPANION_CHAT_KEY);
    
    // We want the companion on the landing page even if dismissed previously, 
    // unless they specifically dismissed it in this session.
    const isLobbyOrAuth = pathname === "/" || pathname?.startsWith("/auth");
    setIsDismissed(isLobbyOrAuth ? false : dismissed);

    if (gender === "female" || gender === "male") setCompanionGender(gender);
    if (savedChat) { try { setChatHistory(JSON.parse(savedChat)); } catch { /* */ } }
    if ((!dismissed || isLobbyOrAuth) && gender) setUiMode(minimized ? "minimized" : "hidden");
  }, [pathname]);

  useEffect(() => {
    if (isDismissed || isExcluded(pathname)) return;
    if (companionGender === null) {
      const t = setTimeout(() => setShowPicker(true), 2_500); // Wait longer on landing
      return () => clearTimeout(t);
    }
  }, [isDismissed, companionGender, pathname, isExcluded]);

  useEffect(() => {
    if (!companionGender || isDismissed || isExcluded(pathname)) return;
    const { message } = getGreeterConfig(pathname, displayName);
    setGreetingMessage(message);
  }, [pathname, displayName, companionGender, isDismissed, isExcluded]);

  useEffect(() => {
    if (!companionGender || isDismissed || uiMode === "chat" || isExcluded(pathname)) return;
    const sinceLastGreet = Date.now() - lastGreetedAt.current;
    if (sinceLastGreet < GREETING_COOLDOWN) return;
    clearTimers();
    showTimer.current = setTimeout(showGreeting, GREETING_SHOW_DELAY);
    return () => clearTimers();
  }, [pathname, companionGender, isDismissed]);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chatHistory]);
  useEffect(() => { if (uiMode === "chat") setTimeout(() => inputRef.current?.focus(), 100); }, [uiMode]);

  const handlePickerSelect = useCallback(async (gender: CompanionGender) => {
    setCompanionGender(gender);
    localStorage.setItem(COMPANION_STORAGE_KEY, gender);
    setShowPicker(false);
    setUiMode("hidden");
    const hasSeenIntro = localStorage.getItem(`koydo.companion.intro-seen.${gender}`) === "true";
    if (!hasSeenIntro) {
      try {
        const videoId = COMPANIONS[gender].introVideoId;
        const res = await fetch(`/api/companion/intro-video?videoId=${encodeURIComponent(videoId)}`);
        const data = await res.json() as { videoUrl?: string };
        if (data.videoUrl) {
          setIntroVideoUrl(data.videoUrl);
          setTimeout(() => setShowIntro(true), 600);
          return;
        }
      } catch { /* fall through to regular greeting */ }
    }
    setTimeout(() => showGreeting(), 600);
  }, [showGreeting]);

  const handleIntroClose = useCallback(() => {
    if (companionGender) {
      localStorage.setItem(`koydo.companion.intro-seen.${companionGender}`, "true");
    }
    setShowIntro(false);
    showGreeting();
  }, [companionGender, showGreeting]);

  const handleDismiss = useCallback(() => {
    if (staticAudioRef.current) { staticAudioRef.current.pause(); staticAudioRef.current = null; }
    tts.stop(); clearTimers(); setUiMode("hidden"); setIsDismissed(true); localStorage.setItem(DISMISSED_KEY, "true");
  }, [clearTimers, tts]);

  const handleMinimize = useCallback(() => {
    if (staticAudioRef.current) { staticAudioRef.current.pause(); staticAudioRef.current = null; }
    tts.stop(); clearTimers(); setUiMode("minimized"); localStorage.setItem(MINIMIZED_KEY, "true");
  }, [clearTimers, tts]);

  const handleAvatarClick = useCallback(() => {
    clearTimers();
    if (uiMode === "minimized") { setUiMode("hidden"); localStorage.setItem(MINIMIZED_KEY, "false"); setTimeout(showGreeting, 300); }
    else if (uiMode === "greeting") { setUiMode("chat"); }
    else if (uiMode === "chat") { showGreeting(); }
    else { showGreeting(); }
  }, [uiMode, clearTimers, showGreeting]);

  const handleSendMessage = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isChatLoading || !companionGender) return;
    const userMessage = chatInput.trim();
    setChatInput("");
    const newHistory: ChatMessage[] = [...chatHistory, { role: "user", content: userMessage }];
    setChatHistory(newHistory);
    setIsChatLoading(true);
    try {
      const res = await fetch("/api/companion/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, companionGender, history: chatHistory.slice(-8) }),
      });
      const data = await res.json();
      const reply = data.reply || "I am having a little trouble! Let us try again. 😊";
      const updated: ChatMessage[] = [...newHistory, { role: "assistant", content: reply }];
      setChatHistory(updated);
      localStorage.setItem(COMPANION_CHAT_KEY, JSON.stringify(updated.slice(-20)));
      if (speakEnabled) tts.speak(reply);
    } catch {
      setChatHistory((h) => [...h, { role: "assistant", content: "Oops! Something went wrong. Try again! 😊" }]);
    } finally { setIsChatLoading(false); }
  }, [chatInput, isChatLoading, companionGender, chatHistory]);

  if (isExcluded(pathname)) return null;
  const colorScheme = companion?.colorScheme;

  return (
    <>
      {showPicker && !isDismissed && <CompanionPicker onSelect={handlePickerSelect} />}
      {showIntro && companionGender && introVideoUrl && (
        <div className="fixed bottom-5 right-5 z-50">
          <CompanionIntroVideo
            gender={companionGender}
            videoUrl={introVideoUrl}
            onClose={handleIntroClose}
          />
        </div>
      )}
      {!isDismissed && companionGender && !showIntro && (
        <div className="fixed bottom-5 right-5 z-50 flex select-none flex-col items-end gap-2" role="complementary" aria-label={`${companion?.name}, your learning companion`}>
          <AnimatePresence>
            {uiMode === "chat" && companion && (
              <motion.div key="chat-panel" initial={{ opacity: 0, y: 16, scale: 0.92 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.94 }} transition={{ type: "spring", stiffness: 300, damping: 24 }} className={`w-72 overflow-hidden rounded-2xl border shadow-2xl ${colorScheme?.border} bg-white`}>
                <div className={`flex items-center gap-2 px-4 py-3 ${colorScheme?.bg}`}>
                  <CompanionAvatarSVG gender={companionGender} size={32} pulse={isChatLoading} previewImageUrl={companion?.previewImageUrl} avatarStyle={avatarStyle} />
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-bold leading-none ${colorScheme?.text}`}>{companion.name}</p>
                    <p className="text-xs text-zinc-400 truncate">Koydo learning companion</p>
                  </div>
                  <div className="flex gap-1">
                    <button onClick={() => { tts.stop(); setSpeakEnabled((v) => !v); }} className={`flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/60 ${speakEnabled ? colorScheme?.text : "text-zinc-300"}`} aria-label={speakEnabled ? "Mute voice" : "Unmute voice"} title={speakEnabled ? "Mute" : "Unmute"}>{speakEnabled ? <SpeakerIcon /> : <SpeakerMutedIcon />}</button>
                    <button onClick={() => { clearTimers(); showGreeting(); }} className="flex h-6 w-6 items-center justify-center rounded-full text-zinc-400 hover:bg-white/60 hover:text-zinc-600" aria-label="Back to greeting"><ChevronDownIcon /></button>
                    <button onClick={handleMinimize} className="flex h-6 w-6 items-center justify-center rounded-full text-zinc-400 hover:bg-white/60 hover:text-zinc-600" aria-label="Minimize"><MinusIcon /></button>
                  </div>
                </div>
                <div className={`border-b px-3 py-1.5 text-center text-xs ${colorScheme?.text} ${colorScheme?.bg} opacity-80`}>📚 I only know Koydo curriculum topics!</div>
                <div className="flex h-56 flex-col gap-2 overflow-y-auto p-3 scroll-smooth">
                  {chatHistory.length === 0 && (
                    <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
                      <CompanionAvatarSVG gender={companionGender} size={44} previewImageUrl={companion?.previewImageUrl} avatarStyle={avatarStyle} />
                      <p className="text-xs text-zinc-400 max-w-45">Hi, I am {companion.name}! Ask me anything about what you are learning on Koydo! 🌟</p>
                    </div>
                  )}
                  {chatHistory.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-1.5`}>
                      {msg.role === "assistant" && <CompanionAvatarSVG gender={companionGender} size={22} className="mt-0.5 shrink-0" previewImageUrl={companion?.previewImageUrl} avatarStyle={avatarStyle} />}
                      <div className={`max-w-[78%] rounded-2xl px-3 py-2 text-xs leading-snug ${msg.role === "user" ? "rounded-br-sm bg-zinc-100 text-zinc-800" : `rounded-bl-sm text-white ${companionGender === "female" ? "bg-violet-500" : "bg-cyan-600"}`}`}>
                        {msg.content}
                        {msg.role === "assistant" && speakEnabled && (
                          <button onClick={() => tts.speak(msg.content)} className="ml-1.5 inline-flex items-center opacity-60 hover:opacity-100 align-middle" aria-label="Replay message" title="Hear again"><SpeakerSmallIcon /></button>
                        )}
                      </div>
                    </div>
                  ))}
                  {isChatLoading && (
                    <div className="flex justify-start gap-1.5">
                      <CompanionAvatarSVG gender={companionGender} size={22} pulse className="mt-0.5" previewImageUrl={companion?.previewImageUrl} avatarStyle={avatarStyle} />
                      <div className={`flex items-center gap-1 rounded-2xl rounded-bl-sm px-3 py-2 text-white ${companionGender === "female" ? "bg-violet-500" : "bg-cyan-600"}`}>
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white [animation-delay:0ms]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white [animation-delay:150ms]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white [animation-delay:300ms]" />
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>
                <form onSubmit={handleSendMessage} className={`flex items-center gap-2 border-t px-3 py-2 ${colorScheme?.border}`}>
                  <input ref={inputRef} value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder={`Ask ${companion.name}...`} maxLength={500} disabled={isChatLoading} className="flex-1 min-w-0 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs outline-none focus:border-zinc-400 disabled:opacity-50" aria-label="Type your question" />
                  <button type="submit" disabled={!chatInput.trim() || isChatLoading} className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white transition-opacity disabled:opacity-40 ${companionGender === "female" ? "bg-violet-500 hover:bg-violet-600" : "bg-cyan-500 hover:bg-cyan-600"}`} aria-label="Send"><SendIcon /></button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {uiMode === "greeting" && greetingMessage && (
              <motion.div key="bubble" initial={{ opacity: 0, y: 10, scale: 0.88 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.92 }} transition={{ type: "spring", stiffness: 320, damping: 26 }} className={`relative max-w-55 rounded-2xl border px-4 py-3 shadow-xl cursor-pointer ${colorScheme?.bubbleBorder} ${colorScheme?.bubble}`} onClick={() => { clearTimers(); setUiMode("chat"); }} title="Click to chat!">
                <button onClick={(e) => { e.stopPropagation(); clearTimers(); setUiMode("minimized"); localStorage.setItem(MINIMIZED_KEY, "true"); }} className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-400 shadow-sm hover:bg-zinc-100" aria-label="Close"><SmallXIcon /></button>
                <p className="text-sm font-semibold leading-snug text-zinc-800">{greetingMessage}</p>
                <p className={`mt-1 text-xs font-medium ${colorScheme?.text}`}>Tap to chat with me! 💬</p>
                <div className={`absolute -bottom-2.25 right-7 h-4 w-4 rotate-45 border-b border-r bg-white ${colorScheme?.bubbleBorder}`} />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-end gap-1.5">
            <AnimatePresence>
              {uiMode !== "minimized" && companion && (
                <motion.div key="controls" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 8 }} transition={{ duration: 0.15 }} className="mb-1 flex flex-col items-center gap-1">
                  <button onClick={() => { clearTimers(); setUiMode(uiMode === "chat" ? "greeting" : "chat"); }} className={`flex h-7 w-7 items-center justify-center rounded-full border text-white shadow-sm ${companionGender === "female" ? "border-violet-300 bg-violet-500 hover:bg-violet-600" : "border-cyan-300 bg-cyan-500 hover:bg-cyan-600"}`} aria-label={uiMode === "chat" ? "Close chat" : "Open chat"} title={uiMode === "chat" ? "Close chat" : `Chat with ${companion.name}`}><ChatIcon /></button>
                  <button onClick={handleMinimize} className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-400 shadow-sm hover:bg-zinc-50" aria-label="Minimize" title="Minimize"><MinusIcon /></button>
                  <button onClick={handleDismiss} className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-400 shadow-sm hover:border-red-200 hover:bg-red-50 hover:text-red-400" aria-label="Close companion" title="Say goodbye for now"><SmallXIcon /></button>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.button onClick={handleAvatarClick} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.93 }} className={`rounded-full shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${companionGender === "female" ? "shadow-violet-200/60 focus-visible:ring-violet-400" : "shadow-cyan-200/60 focus-visible:ring-cyan-400"}`} aria-label={uiMode === "minimized" ? `Open ${companion?.name}` : `${companion?.name}`}>
              <CompanionAvatarSVG gender={companionGender} size={uiMode === "minimized" ? 44 : 60} pulse={isChatLoading} previewImageUrl={companion?.previewImageUrl} avatarStyle={avatarStyle} />
            </motion.button>
          </div>
        </div>
      )}

      <AnimatePresence>
        {isDismissed && !isExcluded(pathname) && (
          <motion.button key="reopen" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} onClick={() => { localStorage.removeItem(DISMISSED_KEY); setIsDismissed(false); setUiMode("hidden"); if (!companionGender) setShowPicker(true); }} className="fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-md hover:bg-zinc-50 hover:text-zinc-700" aria-label="Open learning companion" title="Bring back your learning companion"><CompanionIcon /></motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

function SmallXIcon() { return <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden><path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>; }
function MinusIcon() { return <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden><path d="M1 5h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>; }
function ChatIcon() { return <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden><path d="M10.5 1.5h-9A.5.5 0 001 2v7a.5.5 0 00.5.5H4l2 2 2-2h2.5A.5.5 0 0011 9V2a.5.5 0 00-.5-.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" /><path d="M3.5 5h5M3.5 7h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" /></svg>; }
function SendIcon() { return <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden><path d="M10.5 6L1.5 1.5l2.25 4.5-2.25 4.5L10.5 6Z" fill="currentColor" /></svg>; }
function ChevronDownIcon() { return <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
function CompanionIcon() { return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden><circle cx="10" cy="8" r="4.5" stroke="currentColor" strokeWidth="1.5" /><path d="M3 18c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>; }
function SpeakerIcon() { return <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden><path d="M2 4.5h2l3-2.5v7.5L4 7H2a.5.5 0 01-.5-.5v-2A.5.5 0 012 4.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" /><path d="M9 3.5a3.5 3.5 0 010 5M7.5 4.5a2 2 0 010 3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" /></svg>; }
function SpeakerMutedIcon() { return <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden><path d="M2 4.5h2l3-2.5v7.5L4 7H2a.5.5 0 01-.5-.5v-2A.5.5 0 012 4.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" /><path d="M8 4.5l3 3m0-3l-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>; }
function SpeakerSmallIcon() { return <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden><path d="M1.5 3.75h1.5l2.5-2v4.5L3 6.25H1.5a.4.4 0 01-.4-.4V4.15a.4.4 0 01.4-.4z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" /><path d="M7.5 3a2.5 2.5 0 010 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" /></svg>; }


