import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koydo Certify — Professional Trade Licensing",
  description: "Accelerate your professional certification with focused, AI-driven study paths.",
};

export default function CertifyDashboard() {
  const popularCertifications = [
    {
      id: "hvac",
      title: "HVAC Technician",
      description: "Master thermodynamics, airflow, and EPA Section 608 regulations.",
      modules: 24,
      accent: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      id: "plumbing",
      title: "Master Plumber",
      description: "Advanced pipefitting, municipal code, and fluid mechanics.",
      modules: 18,
      accent: "text-cyan-600 bg-cyan-50 border-cyan-100",
    },
    {
      id: "electrician",
      title: "Journeyman Electrician",
      description: "NEC codes, circuit theory, and advanced commercial wiring.",
      modules: 32,
      accent: "text-amber-600 bg-amber-50 border-amber-100",
    },
    {
      id: "nursing",
      title: "CNA & Nursing Prep",
      description: "Patient care, anatomy, and clinical protocol mastery.",
      modules: 40,
      accent: "text-rose-600 bg-rose-50 border-rose-100",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 font-sans selection:bg-black selection:text-white">
      {/* ── Top Navigation (Zen Minimalist) ── */}
      <header className="flex h-20 items-center justify-between px-8 md:px-16 border-b border-zinc-200/60">
        <div className="flex items-center gap-4">
          <div className="h-4 w-4 bg-black rounded-sm" />
          <span className="text-sm font-bold tracking-tight uppercase">Koydo Certify</span>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="/dashboard" className="text-xs font-medium text-zinc-500 hover:text-black transition-colors">
            Main Platform
          </Link>
          <div className="h-8 w-8 rounded-full bg-zinc-200 border border-zinc-300" />
        </nav>
      </header>

      {/* ── Hero Section ── */}
      <section className="px-8 md:px-16 py-20 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-black mb-6 leading-tight">
          Pass your exam. <br />
          <span className="text-zinc-400">Advance your career.</span>
        </h1>
        <p className="text-lg text-zinc-600 max-w-xl mb-12 leading-relaxed">
          Zero fluff. Just the exact technical knowledge, code compliance, and simulated testing you need to walk into your licensing exam with absolute confidence.
        </p>
        
        <div className="flex items-center gap-4">
          <button className="px-8 py-4 bg-black text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors">
            Resume HVAC Study
          </button>
          <button className="px-8 py-4 bg-white text-black border border-zinc-200 text-sm font-medium rounded-lg hover:bg-zinc-50 transition-colors">
            View Analytics
          </button>
        </div>
      </section>

      {/* ── Certification Tracks ── */}
      <section className="px-8 md:px-16 py-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400">
            Available Tracks
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {popularCertifications.map((cert) => (
            <div 
              key={cert.id} 
              className="group p-8 bg-white border border-zinc-200 rounded-2xl hover:border-black hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-6 border ${cert.accent}`}>
                  {cert.modules} Modules
                </div>
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:underline decoration-2 underline-offset-4">
                  {cert.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-8">
                  {cert.description}
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-zinc-100">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-16 bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-black w-[0%]" />
                  </div>
                  <span className="text-xs font-medium text-zinc-400">0% Mastered</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-zinc-400 group-hover:text-black transition-colors transform group-hover:translate-x-1 duration-200">
                  <path d="M3.33334 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="mt-20 py-8 px-8 md:px-16 border-t border-zinc-200/60 flex items-center justify-between text-xs font-medium text-zinc-400">
        <p>© 2026 Koydo Education</p>
        <p>Pro Certification Tier</p>
      </footer>
    </main>
  );
}
