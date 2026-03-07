"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/**
 * Koydo Glass Calculator
 * 
 * Built strictly following the "Aura" Glassmorphic Utility Specialist Persona.
 * Features deep depth, vibrant backgrounds, and translucent foregrounds.
 */
export default function GlassCalculatorPage() {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  const clearAll = () => {
    setDisplay("0");
    setEquation("");
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(display);
    
    if (equation === "") {
      setEquation(inputValue + " " + nextOperator);
    } else if (!waitingForOperand) {
      // Basic evaluation for demo purposes
      try {
        const parts = equation.split(" ");
        const previousValue = parseFloat(parts[0]);
        const operator = parts[1];
        let result = inputValue;
        
        if (operator === "+") result = previousValue + inputValue;
        if (operator === "-") result = previousValue - inputValue;
        if (operator === "×") result = previousValue * inputValue;
        if (operator === "÷") result = previousValue / inputValue;

        setDisplay(String(result));
        setEquation(result + " " + nextOperator);
      } catch (e) {
        setDisplay("Error");
      }
    }
    setWaitingForOperand(true);
  };

  const calculateTotal = () => {
    if (equation && !waitingForOperand) {
      const parts = equation.split(" ");
      const previousValue = parseFloat(parts[0]);
      const operator = parts[1];
      const inputValue = parseFloat(display);
      let result = inputValue;
      
      if (operator === "+") result = previousValue + inputValue;
      if (operator === "-") result = previousValue - inputValue;
      if (operator === "×") result = previousValue * inputValue;
      if (operator === "÷") result = previousValue / inputValue;

      setDisplay(String(result));
      setEquation("");
      setWaitingForOperand(true);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black selection:bg-white/30">
      {/* ── Immersive Background ── */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Animated Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-indigo-500/40 via-purple-500/20 to-transparent blur-3xl mix-blend-screen" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] h-[700px] w-[700px] rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-pink-500/20 to-transparent blur-3xl mix-blend-screen" 
        />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* ── Main Glass Container ── */}
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[340px] rounded-[2.5rem] border border-white/20 bg-white/10 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-2xl"
      >
        {/* Top Brand Hook */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
            Glass Calculator
          </span>
          <Link 
            href="/dashboard"
            className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold tracking-wide text-white transition-colors hover:bg-white/20 hover:text-indigo-200"
          >
            <span>by KOYDO</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>

        {/* Display Area */}
        <div className="mb-6 flex h-24 w-full flex-col items-end justify-end rounded-2xl bg-black/20 p-4 shadow-inner ring-1 ring-inset ring-white/10">
          <div className="h-6 text-sm font-medium tracking-wider text-white/60">
            {equation}
          </div>
          <div className="w-full truncate text-right text-5xl font-light tracking-tighter text-white">
            {display}
          </div>
        </div>

        {/* Keypad Grid */}
        <div className="grid grid-cols-4 gap-3">
          {/* Row 1 */}
          <GlassButton label="C" onClick={clearAll} isAction />
          <GlassButton label="±" onClick={() => setDisplay(String(-parseFloat(display)))} isAction />
          <GlassButton label="%" onClick={() => setDisplay(String(parseFloat(display) / 100))} isAction />
          <GlassButton label="÷" onClick={() => performOperation("÷")} isOperator />

          {/* Row 2 */}
          <GlassButton label="7" onClick={() => inputDigit("7")} />
          <GlassButton label="8" onClick={() => inputDigit("8")} />
          <GlassButton label="9" onClick={() => inputDigit("9")} />
          <GlassButton label="×" onClick={() => performOperation("×")} isOperator />

          {/* Row 3 */}
          <GlassButton label="4" onClick={() => inputDigit("4")} />
          <GlassButton label="5" onClick={() => inputDigit("5")} />
          <GlassButton label="6" onClick={() => inputDigit("6")} />
          <GlassButton label="-" onClick={() => performOperation("-")} isOperator />

          {/* Row 4 */}
          <GlassButton label="1" onClick={() => inputDigit("1")} />
          <GlassButton label="2" onClick={() => inputDigit("2")} />
          <GlassButton label="3" onClick={() => inputDigit("3")} />
          <GlassButton label="+" onClick={() => performOperation("+")} isOperator />

          {/* Row 5 */}
          <GlassButton label="0" onClick={() => inputDigit("0")} className="col-span-2 aspect-auto h-[60px]" />
          <GlassButton label="." onClick={inputDot} />
          <GlassButton label="=" onClick={calculateTotal} isOperator />
        </div>
      </motion.div>

      {/* Ecosystem Teaser / Hook */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 text-center"
      >
        <p className="text-[11px] font-medium tracking-wide text-white/40">
          Unlock the full Math Mastery curriculum inside <span className="text-white/80 font-bold">Koydo</span>
        </p>
      </motion.div>
    </div>
  );
}

function GlassButton({ 
  label, 
  onClick, 
  isOperator, 
  isAction,
  className = "" 
}: { 
  label: string; 
  onClick: () => void; 
  isOperator?: boolean; 
  isAction?: boolean;
  className?: string;
}) {
  let baseColor = "bg-white/5 text-white hover:bg-white/15 active:bg-white/20";
  
  if (isOperator) {
    baseColor = "bg-indigo-500/60 text-white hover:bg-indigo-500/80 active:bg-indigo-400 border-indigo-400/50";
  } else if (isAction) {
    baseColor = "bg-white/10 text-white/80 hover:bg-white/20 active:bg-white/30";
  }

  return (
    <button
      onClick={onClick}
      className={`relative flex aspect-square w-full items-center justify-center rounded-2xl border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-200 ui-focus-ring ${baseColor} ${className}`}
    >
      <span className="text-xl font-medium">{label}</span>
      {/* Subtle top highlight for glass 3D effect */}
      <div className="absolute inset-x-2 top-0.5 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </button>
  );
}