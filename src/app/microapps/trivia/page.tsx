"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";

/**
 * Koydo Trivia Swipe (Ad-Monetized Hypercasual)
 * 
 * Built strictly following the "Pixel" Gamified Kid-Core Persona.
 * Features vibrant colors, bouncy animations, "squircle" buttons, and Tinder-style swipe.
 */
export default function TriviaSwipePage() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showRevive, setShowRevive] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchQuestion = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/microapps/trivia/question");
      const data = await res.json();
      setCurrentQuestion(data);
    } catch (err) {
      console.error("Failed to fetch question:", err);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchQuestion();
  }, []);

  const handleSwipe = (direction: "left" | "right") => {
    const isTrue = direction === "right";
    
    if (isTrue === currentQuestion.answer) {
      setScore(s => s + 10);
      setStreak(s => s + 1);
      fetchQuestion();
    } else {
      setStreak(0);
      setShowRevive(true);
    }
  };

  const handleRevive = () => {
    setShowRevive(false);
    fetchQuestion();
  };

  return (
    <div className="relative min-h-screen bg-[#FFD93D] flex flex-col items-center justify-between p-6 overflow-hidden font-sans selection:bg-pink-500/30">
      
      {/* ── Top Bar ── */}
      <header className="w-full flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#6B4F00] opacity-50">Score</span>
          <span className="text-3xl font-black text-[#6B4F00] tracking-tighter">{score}</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 rounded-2xl bg-white border-b-4 border-r-4 border-zinc-200 flex items-center justify-center text-2xl shadow-sm">
            🔥
          </div>
          <span className="text-[10px] font-black text-[#6B4F00] mt-1">{streak} Streak</span>
        </div>

        <Link href="/dashboard" className="h-10 w-10 rounded-xl bg-[#FF6B6B] border-b-4 border-zinc-900/10 flex items-center justify-center text-white text-xl">
          ✕
        </Link>
      </header>

      {/* ── Swipe Card Area ── */}
      <div className="relative w-full max-w-[340px] aspect-[3/4] flex-1 flex items-center justify-center">
        {isLoading ? (
          <div className="h-full w-full rounded-[3rem] bg-white/20 animate-pulse border-4 border-white/30" />
        ) : (
          <AnimatePresence mode="popLayout">
            <TriviaCard 
              key={currentQuestion.id}
              question={currentQuestion} 
              onSwipe={handleSwipe}
            />
          </AnimatePresence>
        )}
      </div>

      {/* ── Ad Banner Mock ── */}
      <footer className="w-full max-w-[320px] h-12 bg-zinc-800/10 border-2 border-dashed border-zinc-800/20 rounded-lg flex items-center justify-center mb-4">
        <span className="text-[10px] font-bold text-zinc-800/30 uppercase tracking-[0.2em]">Ad Banner Space</span>
      </footer>

      {/* ── Revive Modal (Interstitial Ad Funnel) ── */}
      <AnimatePresence>
        {showRevive && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#2D3436]/90 backdrop-blur-sm flex items-center justify-center p-8 text-center"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_0_rgba(0,0,0,0.1)] border-b-8 border-zinc-100 max-w-sm"
            >
              <div className="text-6xl mb-6">💔</div>
              <h2 className="text-3xl font-black text-[#2D3436] mb-4 tracking-tighter leading-none">Oh No!</h2>
              <p className="text-zinc-500 font-medium mb-8">You lost your streak. Want to keep going?</p>
              
              <div className="flex flex-col gap-4">
                <button 
                  onClick={handleRevive}
                  className="w-full py-5 bg-[#6BCB77] rounded-3xl border-b-8 border-[#4E9F59] text-white font-black text-xl hover:translate-y-1 active:translate-y-2 active:border-b-0 transition-all shadow-lg"
                >
                  📺 Watch Ad to Revive
                </button>
                <button 
                  onClick={() => { setScore(0); setIndex(0); setShowRevive(false); }}
                  className="w-full py-4 text-zinc-400 font-bold hover:text-zinc-600"
                >
                  Restart Game
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Swipe Instructions ── */}
      <div className="flex justify-between w-full max-w-[280px] mb-8">
        <div className="flex flex-col items-center">
          <div className="text-sm font-black text-[#FF6B6B] uppercase tracking-widest mb-2">False</div>
          <div className="h-2 w-12 bg-[#FF6B6B] rounded-full" />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-sm font-black text-[#6BCB77] uppercase tracking-widest mb-2">True</div>
          <div className="h-2 w-12 bg-[#6BCB77] rounded-full" />
        </div>
      </div>
    </div>
  );
}

function TriviaCard({ question, onSwipe }: { question: any, onSwipe: (dir: "left" | "right") => void }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
  const color = useTransform(x, [-100, 0, 100], ["#FF6B6B", "#FFFFFF", "#6BCB77"]);

  return (
    <motion.div
      style={{ x, rotate, opacity, backgroundColor: color }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(e, { offset, velocity }) => {
        if (Math.abs(offset.x) > 100) {
          onSwipe(offset.x > 0 ? "right" : "left");
        }
      }}
      className="absolute w-full h-full rounded-[3rem] border-b-[12px] border-zinc-200/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center p-10 cursor-grab active:cursor-grabbing select-none"
    >
      <div className="text-[12px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-6">{question.category}</div>
      <h3 className="text-3xl font-black text-zinc-900 leading-[1.1] text-center tracking-tighter">
        {question.question}
      </h3>
      
      <div className="mt-12 flex items-center gap-2">
        <span className="text-[10px] font-black text-zinc-300">Swipe Left for No</span>
        <div className="h-1 w-4 bg-zinc-100 rounded-full" />
        <span className="text-[10px] font-black text-zinc-300">Swipe Right for Yes</span>
      </div>
    </motion.div>
  );
}
