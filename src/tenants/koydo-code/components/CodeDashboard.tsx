"use client";

import { useState } from "react";
import Link from "next/link";
import CodeButton from "./CodeButton";

const LANGUAGES_TRACKS = [
  { id: "python", label: "Python", icon: "\uD83D\uDC0D", color: "#3572A5", progress: 72, projects: 8 },
  { id: "javascript", label: "JavaScript", icon: "\uD83D\uDFE8", color: "#f1e05a", progress: 55, projects: 5 },
  { id: "typescript", label: "TypeScript", icon: "\uD83D\uDD35", color: "#3178c6", progress: 30, projects: 3 },
  { id: "rust", label: "Rust", icon: "\u2699\uFE0F", color: "#dea584", progress: 10, projects: 1 },
  { id: "go", label: "Go", icon: "\uD83D\uDC39", color: "#00ADD8", progress: 5, projects: 0 },
  { id: "sql", label: "SQL", icon: "\uD83D\uDDC3\uFE0F", color: "#e38c00", progress: 40, projects: 2 },
];

const COURSE_PATHS = [
  { id: "web-dev", title: "Web Development", lessons: 48, progress: 60, icon: "\uD83C\uDF10" },
  { id: "data-science", title: "Data Science", lessons: 36, progress: 25, icon: "\uD83D\uDCCA" },
  { id: "algorithms", title: "Algorithms & DS", lessons: 42, progress: 15, icon: "\uD83C\uDFCB\uFE0F" },
  { id: "devops", title: "DevOps & Cloud", lessons: 30, progress: 8, icon: "\u2601\uFE0F" },
  { id: "mobile", title: "Mobile Development", lessons: 24, progress: 0, icon: "\uD83D\uDCF1" },
  { id: "ai-ml", title: "AI & Machine Learning", lessons: 40, progress: 12, icon: "\uD83E\uDD16" },
];

const DAILY_CHALLENGES = [
  { title: "Two Sum", difficulty: "Easy", lang: "Python", xp: 50 },
  { title: "Merge Intervals", difficulty: "Medium", lang: "JavaScript", xp: 100 },
  { title: "LRU Cache", difficulty: "Hard", lang: "TypeScript", xp: 200 },
];

export default function CodeDashboard() {
  const [activeTab, setActiveTab] = useState<"learn" | "practice" | "projects">("learn");

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc]">
      {/* Header */}
      <header className="border-b border-[#21262d] bg-[#161b22] sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#238636] flex items-center justify-center text-white font-mono font-bold text-sm">
              {"</>"}
            </div>
            <div>
              <h1 className="text-lg font-bold">Koydo Code</h1>
              <p className="text-xs text-[#8b949e]">Learn to code, build real projects</p>
            </div>
          </div>
          <div className="flex gap-1">
            {(["learn", "practice", "projects"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={[
                  "px-3 py-1.5 rounded-md text-sm font-medium capitalize transition-all",
                  activeTab === tab
                    ? "bg-[#21262d] text-[#f0f6fc]"
                    : "text-[#8b949e] hover:text-[#f0f6fc]",
                ].join(" ")}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 space-y-6">
        {/* Stats */}
        <section className="rounded-lg border border-[#30363d] bg-[#161b22] p-5">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#238636] to-[#3fb950] flex items-center justify-center text-xl font-bold">
                  42
                </div>
                <div>
                  <div className="text-sm text-[#8b949e]">Coding Level</div>
                  <div className="text-lg font-bold">Intermediate Developer</div>
                </div>
              </div>
            </div>
            <div className="flex gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-[#3fb950]">1,247</div>
                <div className="text-xs text-[#8b949e]">Lines Written</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#58a6ff]">89</div>
                <div className="text-xs text-[#8b949e]">Problems Solved</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#d29922]">19</div>
                <div className="text-xs text-[#8b949e]">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#bc8cff]">23</div>
                <div className="text-xs text-[#8b949e]">Day Streak</div>
              </div>
            </div>
          </div>
          {/* Contribution graph placeholder */}
          <div className="mt-4 flex gap-0.5 flex-wrap">
            {Array.from({ length: 52 }).map((_, week) => (
              <div key={week} className="flex flex-col gap-0.5">
                {Array.from({ length: 7 }).map((_, day) => {
                  const intensity = Math.random();
                  return (
                    <div
                      key={day}
                      className="w-2.5 h-2.5 rounded-sm"
                      style={{
                        backgroundColor:
                          intensity > 0.7 ? "#3fb950"
                          : intensity > 0.4 ? "#238636"
                          : intensity > 0.2 ? "#0e4429"
                          : "#161b22",
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </section>

        {activeTab === "learn" && (
          <>
            {/* Language Tracks */}
            <section>
              <h3 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-3">Languages</h3>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {LANGUAGES_TRACKS.map((lang) => (
                  <Link
                    key={lang.id}
                    href={`/explore?lang=${lang.id}`}
                    className="rounded-lg border border-[#30363d] bg-[#161b22] p-4 hover:border-[#8b949e] transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{lang.icon}</span>
                      <span className="font-medium text-sm">{lang.label}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[#21262d] overflow-hidden mb-1">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${lang.progress}%`, backgroundColor: lang.color }}
                      />
                    </div>
                    <div className="text-xs text-[#8b949e]">{lang.progress}% &middot; {lang.projects} projects</div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Course Paths */}
            <section>
              <h3 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-3">Learning Paths</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {COURSE_PATHS.map((course) => (
                  <Link
                    key={course.id}
                    href={`/explore?path=${course.id}`}
                    className="rounded-lg border border-[#30363d] bg-[#161b22] p-4 hover:border-[#8b949e] transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{course.icon}</span>
                      <div>
                        <h4 className="font-medium">{course.title}</h4>
                        <p className="text-xs text-[#8b949e]">{course.lessons} lessons</p>
                      </div>
                    </div>
                    <div className="h-1.5 rounded-full bg-[#21262d] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#238636]"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <div className="text-xs text-[#8b949e] mt-1">{course.progress}% complete</div>
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === "practice" && (
          <>
            {/* Daily Challenges */}
            <section>
              <h3 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-3">Daily Challenges</h3>
              <div className="space-y-2">
                {DAILY_CHALLENGES.map((challenge) => (
                  <div
                    key={challenge.title}
                    className="flex items-center justify-between rounded-lg border border-[#30363d] bg-[#161b22] p-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className={[
                        "px-2 py-0.5 rounded text-xs font-bold",
                        challenge.difficulty === "Easy" ? "bg-[#238636]/20 text-[#3fb950]"
                        : challenge.difficulty === "Medium" ? "bg-[#d29922]/20 text-[#d29922]"
                        : "bg-[#f85149]/20 text-[#f85149]",
                      ].join(" ")}>
                        {challenge.difficulty}
                      </span>
                      <div>
                        <div className="font-medium">{challenge.title}</div>
                        <div className="text-xs text-[#8b949e]">{challenge.lang} &middot; {challenge.xp} XP</div>
                      </div>
                    </div>
                    <CodeButton tone="primary" size="sm">Solve</CodeButton>
                  </div>
                ))}
              </div>
            </section>

            {/* Code Playground */}
            <section className="rounded-lg border border-[#30363d] bg-[#161b22] p-5">
              <h3 className="font-medium mb-3">Code Playground</h3>
              <div className="rounded-md bg-[#0d1117] border border-[#30363d] p-4 font-mono text-sm text-[#8b949e]">
                <div><span className="text-[#bc8cff]">def</span> <span className="text-[#d2a8ff]">hello</span>():</div>
                <div className="pl-4"><span className="text-[#79c0ff]">print</span>(<span className="text-[#a5d6ff]">&quot;Hello, World!&quot;</span>)</div>
                <div className="mt-2 text-[#484f58]"># Start coding here...</div>
              </div>
              <div className="mt-3 flex gap-2">
                <CodeButton tone="primary" size="sm">Run Code</CodeButton>
                <CodeButton tone="outline" size="sm">Reset</CodeButton>
              </div>
            </section>
          </>
        )}

        {activeTab === "projects" && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider">Your Projects</h3>
              <CodeButton tone="primary" size="sm">New Project</CodeButton>
            </div>
            {[
              { name: "todo-app", lang: "TypeScript", desc: "Full-stack todo list with React + Express", status: "complete" },
              { name: "weather-cli", lang: "Python", desc: "CLI weather app using OpenWeatherMap API", status: "complete" },
              { name: "portfolio-site", lang: "HTML/CSS", desc: "Personal portfolio with responsive design", status: "in-progress" },
              { name: "chat-bot", lang: "Python", desc: "Discord bot with AI responses", status: "in-progress" },
            ].map((project) => (
              <div
                key={project.name}
                className="rounded-lg border border-[#30363d] bg-[#161b22] p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-[#58a6ff] font-mono font-medium">{project.name}</span>
                    <span className="px-2 py-0.5 rounded-full text-xs border border-[#30363d] text-[#8b949e]">
                      {project.lang}
                    </span>
                  </div>
                  <span className={[
                    "text-xs font-medium",
                    project.status === "complete" ? "text-[#3fb950]" : "text-[#d29922]",
                  ].join(" ")}>
                    {project.status === "complete" ? "Complete" : "In Progress"}
                  </span>
                </div>
                <p className="text-sm text-[#8b949e] mt-1">{project.desc}</p>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
