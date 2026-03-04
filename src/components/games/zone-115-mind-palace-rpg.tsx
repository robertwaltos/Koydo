"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, MessageSquare, RotateCcw, Eye, Lightbulb } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticSelection, hapticSuccess, hapticError } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

const SESSION_ID = createLegacySessionId();

type Phase = "ready" | "playing" | "dialogue" | "check" | "complete";

interface Skill {
  name: string; icon: string; value: number;
  desc: string; color: string;
}

interface DialogueOption {
  text: string; skill: string; dc: number;
  successText: string; failText: string;
  xp: number; clue?: string;
}

interface CaseNode {
  id: number; title: string; description: string; icon: string;
  dialogue: DialogueOption[];
  resolved: boolean;
}

export default function Zone115MindPalaceRpg() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [skills, setSkills] = useState<Skill[]>([
    { name: "Logic", icon: "🧠", value: 3, desc: "Deduction & reasoning", color: "text-blue-400" },
    { name: "Empathy", icon: "💗", value: 3, desc: "Reading emotions", color: "text-pink-400" },
    { name: "Authority", icon: "👊", value: 3, desc: "Force of presence", color: "text-red-400" },
    { name: "Perception", icon: "👁️", value: 3, desc: "Notice the unseen", color: "text-green-400" },
    { name: "Rhetoric", icon: "💬", value: 3, desc: "Persuasion & charm", color: "text-yellow-400" },
    { name: "Composure", icon: "😎", value: 3, desc: "Stay cool", color: "text-purple-400" },
  ]);
  const [skillPoints, setSkillPoints] = useState(4);
  const [xp, setXp] = useState(0);
  const [clues, setClues] = useState<string[]>([]);
  const [log, setLog] = useState<string[]>([]);
  const [currentNode, setCurrentNode] = useState(0);
  const [checkResult, setCheckResult] = useState<{ success: boolean; text: string; roll: number; dc: number; skill: string } | null>(null);
  const [caseNodes, setCaseNodes] = useState<CaseNode[]>([
    {
      id: 0, title: "The Body", icon: "🔍", resolved: false,
      description: "A man lies dead in the hostel. No ID, no wallet. Your mind races with possibilities.",
      dialogue: [
        { text: "[Logic] Examine the body methodically", skill: "Logic", dc: 8, successText: "Bruising on wrists — he was restrained before death.", failText: "Your thoughts scatter. Nothing stands out.", xp: 15, clue: "Restraint marks on wrists" },
        { text: "[Perception] Search the room for hidden items", skill: "Perception", dc: 10, successText: "Behind the radiator — a folded business card. 'La Perle Imports'.", failText: "The room reveals nothing to your unfocused eyes.", xp: 15, clue: "La Perle Imports card" },
        { text: "[Empathy] Feel the residual emotion in the room", skill: "Empathy", dc: 12, successText: "Fear. Thick, palpable fear. This man knew his killer.", failText: "The room's emotions blur into white noise.", xp: 20, clue: "Victim knew the killer" },
      ],
    },
    {
      id: 1, title: "The Witness", icon: "👤", resolved: false,
      description: "A nervous woman on the balcony. She's seen something but won't talk easily.",
      dialogue: [
        { text: "[Rhetoric] Persuade her gently with reason", skill: "Rhetoric", dc: 9, successText: "'I saw a tall man leave around 3 AM. Wore a dock worker coat.'", failText: "She clams up. 'I don't know anything, officer.'", xp: 15, clue: "Tall man in dock coat at 3 AM" },
        { text: "[Authority] Flash your badge, demand answers", skill: "Authority", dc: 11, successText: "Intimidated, she blurts 'He had a scar on his left cheek!'", failText: "'You can't bully me. I have rights.' She pushes past.", xp: 15, clue: "Scar on left cheek" },
        { text: "[Empathy] Show genuine concern for her safety", skill: "Empathy", dc: 8, successText: "She breaks down. 'He threatened me too. Said he'd come back for the package.'", failText: "She sees through your sympathy as a technique.", xp: 20, clue: "Killer wants 'the package'" },
      ],
    },
    {
      id: 2, title: "The Docks", icon: "🚢", resolved: false,
      description: "La Perle Imports — a grimy warehouse on the docks. Two guards at the door.",
      dialogue: [
        { text: "[Composure] Walk in like you own the place", skill: "Composure", dc: 12, successText: "Your unshakeable demeanor fools them. 'Go right in, boss.'", failText: "You stumble. 'Who the hell are you?' one growls.", xp: 20, clue: "Inside: crates labeled 'machinery'" },
        { text: "[Authority] Demand entry as a police investigation", skill: "Authority", dc: 10, successText: "They buckle under your authority. The warehouse is full of suspicious crates.", failText: "'This is private property. Come back with a warrant.'", xp: 15, clue: "Smuggling operation confirmed" },
        { text: "[Logic] Find another way in around back", skill: "Logic", dc: 9, successText: "A loading dock with a broken lock. You slip inside unnoticed.", failText: "Dead end. The alley leads nowhere useful.", xp: 15, clue: "Shipping manifest to offshore account" },
      ],
    },
    {
      id: 3, title: "The Office", icon: "🗃️", resolved: false,
      description: "An office on the second floor. A safe behind a painting, and a ledger on the desk.",
      dialogue: [
        { text: "[Perception] Examine every surface carefully", skill: "Perception", dc: 10, successText: "Hidden compartment under the desk drawer — a coded note.", failText: "The office seems ordinary. Too ordinary.", xp: 20, clue: "Coded note with drop locations" },
        { text: "[Logic] Crack the safe combination", skill: "Logic", dc: 14, successText: "3-17-42. The safe clicks open: photos, money, a revolver.", failText: "The combination eludes you. Numbers swim in your head.", xp: 25, clue: "Photos link smuggling ring to city officials" },
        { text: "[Rhetoric] Charm the secretary working late", skill: "Rhetoric", dc: 11, successText: "'Marcel handles the 'special shipments'. He's the boss's fixer.'", failText: "She sees right through your act and calls security.", xp: 20, clue: "Marcel is the fixer" },
      ],
    },
    {
      id: 4, title: "The Confrontation", icon: "⚡", resolved: false,
      description: "You face Marcel in the rain-slicked alley. He has a gun. You have your wits.",
      dialogue: [
        { text: "[Composure] Stay calm and present your evidence", skill: "Composure", dc: 13, successText: "Your ironclad calm breaks his nerve. He drops the gun.", failText: "Your hands tremble. He sees your fear.", xp: 25, clue: "Marcel confesses to murder" },
        { text: "[Rhetoric] Talk him down — offer a deal", skill: "Rhetoric", dc: 14, successText: "'Fine. I'll talk. But I want witness protection.' He holsters the weapon.", failText: "'No deals, detective.' He raises the gun.", xp: 25, clue: "Marcel names the mastermind" },
        { text: "[Authority] Command him to surrender NOW", skill: "Authority", dc: 15, successText: "Your voice booms like thunder. He flinches, drops to his knees.", failText: "He laughs. 'You don't scare me, cop.'", xp: 30, clue: "Case solved — full arrest" },
      ],
    },
  ]);

  const addLog = useCallback((msg: string) => setLog((p) => [...p.slice(-8), msg]), []);

  const startGame = useCallback(() => {
    setPhase("playing");
    setSkills([
      { name: "Logic", icon: "🧠", value: 3, desc: "Deduction & reasoning", color: "text-blue-400" },
      { name: "Empathy", icon: "💗", value: 3, desc: "Reading emotions", color: "text-pink-400" },
      { name: "Authority", icon: "👊", value: 3, desc: "Force of presence", color: "text-red-400" },
      { name: "Perception", icon: "👁️", value: 3, desc: "Notice the unseen", color: "text-green-400" },
      { name: "Rhetoric", icon: "💬", value: 3, desc: "Persuasion & charm", color: "text-yellow-400" },
      { name: "Composure", icon: "😎", value: 3, desc: "Stay cool", color: "text-purple-400" },
    ]);
    setSkillPoints(4);
    setXp(0); setClues([]);
    setCaseNodes((c) => c.map((n) => ({ ...n, resolved: false })));
    setCurrentNode(0);
    setLog(["🕵️ Case opened. A body in the old hostel. Time to work."]);
    mascot.setMood("thinking");
  }, [mascot]);

  const upgradeSkill = useCallback((name: string) => {
    if (skillPoints <= 0) return;
    setSkills((s) => s.map((sk) => sk.name === name ? { ...sk, value: sk.value + 1 } : sk));
    setSkillPoints((p) => p - 1);
    hapticSelection();
  }, [skillPoints]);

  const attemptCheck = useCallback((option: DialogueOption) => {
    const skill = skills.find((s) => s.name === option.skill);
    if (!skill) return;

    const roll = Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2; // 2d6 (2-12)
    const total = roll + skill.value;
    const success = total >= option.dc;

    if (success) {
      hapticSuccess();
      setXp((p) => p + option.xp);
      if (option.clue && !clues.includes(option.clue)) {
        setClues((c) => [...c, option.clue!]);
      }
      addLog(`✅ [${option.skill}] ${roll}+${skill.value}=${total} vs DC ${option.dc} — SUCCESS!`);
      addLog(option.successText);
      // Check for level up (every 40 xp)
      if ((xp + option.xp) % 40 < option.xp) {
        setSkillPoints((p) => p + 1);
        addLog("🆙 Skill point earned!");
      }
    } else {
      hapticError();
      addLog(`❌ [${option.skill}] ${roll}+${skill.value}=${total} vs DC ${option.dc} — FAILED`);
      addLog(option.failText);
    }

    setCheckResult({
      success,
      text: success ? option.successText : option.failText,
      roll: total,
      dc: option.dc,
      skill: option.skill,
    });
    setPhase("check");

    setCaseNodes((nodes) => nodes.map((n) => n.id === currentNode ? { ...n, resolved: true } : n));
  }, [skills, clues, xp, currentNode, addLog]);

  const continueFromCheck = useCallback(() => {
    // Find next unresolved node
    const nextIdx = caseNodes.findIndex((n, i) => i > currentNode && !n.resolved);
    if (nextIdx >= 0) {
      setCurrentNode(nextIdx);
      setPhase("playing");
    } else {
      // All done
      const solved = clues.length;
      const finalScore = Math.min(500, xp + solved * 25);
      setPhase("complete");
      mascot.setMood("cheering");
      emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-115",
          difficulty: "medium", score: finalScore, maxScore: 500, interactions: 1, elapsedMs: 0, source: "component", occurredAt: new Date().toISOString(), });
    }
  }, [caseNodes, currentNode, clues, xp, mascot]);

  const node = caseNodes[currentNode];

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-zinc-900 to-slate-950 p-4">
      <MascotFriend id="pixel" mood={phase === "complete" ? "cheering" : "idle"} />

      <motion.h1 className="mb-3 text-3xl font-black tracking-tight text-emerald-400 drop-shadow-lg" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Brain className="mr-2 inline h-8 w-8" /> Mind Palace RPG
      </motion.h1>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="max-w-md text-center text-lg text-white/70">
              Skill-based detective RPG. Roll against skill checks, gather clues, and solve a murder. Every conversation is a dice roll. Invest your skill points wisely.
            </p>
            <PhysicalButton onClick={startGame}><Brain className="mr-2 h-5 w-5" /> Open the Case</PhysicalButton>
          </motion.div>
        )}

        {phase === "playing" && node && (
          <motion.div key="playing" className="flex w-full max-w-lg flex-col gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Skills bar */}
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((s) => (
                <button key={s.name} onClick={() => upgradeSkill(s.name)}
                  className={`rounded-lg bg-black/30 px-2 py-1 text-xs ${s.color} ${skillPoints > 0 ? "ring-1 ring-emerald-500/50 hover:bg-black/50" : ""}`}>
                  {s.icon} {s.name}: {s.value} {skillPoints > 0 && <span className="text-emerald-400">+</span>}
                </button>
              ))}
              {skillPoints > 0 && <span className="text-xs text-emerald-400">({skillPoints} points)</span>}
            </div>

            {/* Status */}
            <div className="flex justify-between text-xs text-white/50">
              <span>🔍 Clues: {clues.length}</span>
              <span>⭐ XP: {xp}</span>
              <span>📋 Case {currentNode + 1}/{caseNodes.length}</span>
            </div>

            {/* Scene */}
            <div className="rounded-xl bg-black/40 p-4 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-white">{node.icon} {node.title}</h2>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{node.description}</p>
            </div>

            {/* Dialogue options */}
            <div className="flex flex-col gap-2">
              {node.dialogue.map((opt, i) => {
                const sk = skills.find((s) => s.name === opt.skill);
                return (
                  <PhysicalButton key={i} onClick={() => attemptCheck(opt)} variant="secondary">
                    <span className="text-left text-sm">{opt.text} <span className="ml-1 text-[10px] opacity-50">(DC {opt.dc}, yours: {sk?.value ?? 0})</span></span>
                  </PhysicalButton>
                );
              })}
            </div>

            {/* Clues */}
            {clues.length > 0 && (
              <details className="text-xs text-white/40">
                <summary className="cursor-pointer text-emerald-400">📎 Clues ({clues.length})</summary>
                <ul className="mt-1 space-y-1 pl-4">{clues.map((c, i) => <li key={i}>• {c}</li>)}</ul>
              </details>
            )}

            {/* Log */}
            <div className="h-16 overflow-y-auto rounded-lg bg-black/30 p-2 text-xs text-white/50">
              {log.map((l, i) => <div key={i}>{l}</div>)}
            </div>
          </motion.div>
        )}

        {phase === "check" && checkResult && (
          <motion.div key="check" className="flex w-full max-w-md flex-col items-center gap-4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <div className={`rounded-2xl p-6 text-center backdrop-blur-sm ${checkResult.success ? "bg-emerald-900/60" : "bg-red-900/60"}`}>
              <p className="text-5xl">{checkResult.success ? "✅" : "❌"}</p>
              <h2 className="mt-2 text-xl font-bold text-white">
                [{checkResult.skill}] {checkResult.roll} vs DC {checkResult.dc}
              </h2>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">{checkResult.text}</p>
            </div>
            <PhysicalButton onClick={continueFromCheck}>Continue Investigation →</PhysicalButton>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div key="complete" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl bg-black/50 p-8 text-center backdrop-blur-sm">
              <p className="text-5xl">🕵️</p>
              <h2 className="mt-3 text-2xl font-black text-emerald-400">Case Closed</h2>
              <p className="mt-2 text-white/60">Clues gathered: {clues.length}/{caseNodes.length * 3}</p>
              <p className="text-white/60">XP earned: {xp}</p>
              <p className="text-sm text-white/40 mt-2">Resolved {caseNodes.filter((n) => n.resolved).length}/{caseNodes.length} scenes</p>
            </div>
            <PhysicalButton onClick={() => { setPhase("ready"); mascot.setMood("idle"); }}>
              <RotateCcw className="mr-1 h-4 w-4" /> New Case
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
