"use client";
import { useState, useEffect, useRef } from "react";
import {
  Check, ChevronDown, ChevronRight, Lock, Eye, Lightbulb,
  Timer, Play, Pause, RotateCcw, Copy, CheckCheck,
  Globe, FileText, Zap, Sparkles,
} from "lucide-react";

interface PhaseContent {
  scenario?: string;
  context?: string;
  plugin?: string;
  doThis?: string;
  prompt?: string;
  prompt2?: string;
  skillChain?: string;
  checkpoint?: string;
  tip?: string;
  revealGood?: string;
  revealTakeaway?: string;
}

interface PhaseInfo {
  number: number;
  key: string;
  title: string;
  subtitle: string;
  content: PhaseContent;
}

interface DataFile {
  filename: string;
  display_name: string;
  type: string;
  role: string;
}

interface Props {
  slug: string;
  phases: PhaseInfo[];
  dataFiles?: DataFile[];
  durationMinutes: number;
}

type PhaseStatus = "locked" | "active" | "complete";

export function ActivityPhases({ slug, phases, dataFiles = [], durationMinutes }: Props) {
  const [phaseStates, setPhaseStates] = useState<PhaseStatus[]>(() =>
    phases.map((_, i) => (i === 0 ? "active" : "locked"))
  );
  const [revealOpen, setRevealOpen] = useState(false);
  const [unlockedPrompts, setUnlockedPrompts] = useState<Set<string>>(new Set());
  const [draftPrompts, setDraftPrompts] = useState<Record<string, string>>({});
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [timerSeconds, setTimerSeconds] = useState(durationMinutes * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`vibe-progress-${slug}`);
      if (saved) {
        const parsed = JSON.parse(saved) as PhaseStatus[];
        if (Array.isArray(parsed) && parsed.length === phases.length) setPhaseStates(parsed);
      }
      const savedTimer = localStorage.getItem(`vibe-timer-${slug}`);
      if (savedTimer) {
        const t = JSON.parse(savedTimer);
        if (t.seconds != null) setTimerSeconds(t.seconds);
        if (t.started) setTimerStarted(true);
      }
    } catch {}
  }, [slug, phases.length]);

  useEffect(() => {
    try { localStorage.setItem(`vibe-progress-${slug}`, JSON.stringify(phaseStates)); } catch {}
  }, [phaseStates, slug]);

  useEffect(() => {
    if (!timerRunning) return;
    const interval = setInterval(() => {
      setTimerSeconds((prev) => {
        const next = prev - 1;
        try { localStorage.setItem(`vibe-timer-${slug}`, JSON.stringify({ seconds: next, started: true })); } catch {}
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerRunning, slug]);

  function startTimer() { setTimerRunning(true); setTimerStarted(true); }
  function pauseTimer() { setTimerRunning(false); }
  function resetTimer() {
    setTimerRunning(false);
    setTimerStarted(false);
    setTimerSeconds(durationMinutes * 60);
    try { localStorage.removeItem(`vibe-timer-${slug}`); } catch {}
  }

  function unlockNext(currentIndex: number) {
    setPhaseStates((prev) => {
      const next = [...prev];
      next[currentIndex] = "complete";
      if (currentIndex + 1 < next.length) next[currentIndex + 1] = "active";
      return next;
    });
    if (currentIndex + 1 < phases.length) {
      setTimeout(() => {
        phaseRefs.current[currentIndex + 1]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }

  function resetProgress() {
    setPhaseStates(phases.map((_, i) => (i === 0 ? "active" : "locked")));
    setRevealOpen(false);
    resetTimer();
    try { localStorage.removeItem(`vibe-progress-${slug}`); } catch {}
    phaseRefs.current[0]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const mins = Math.floor(Math.abs(timerSeconds) / 60);
  const secs = Math.abs(timerSeconds) % 60;
  const isOvertime = timerSeconds < 0;

  return (
    <div className="space-y-4">
      {/* Timer bar */}
      <div className={`sticky top-14 z-40 flex items-center justify-between rounded-xl border px-5 py-3 backdrop-blur-sm ${
        isOvertime ? "border-red-500/40 bg-red-900/20"
        : timerSeconds < 300 ? "border-amber-500/40 bg-amber-900/10"
        : "border-border bg-surface/90"
      }`}>
        <div className="flex items-center gap-3">
          <Timer size={18} className={isOvertime ? "text-red-400" : "text-accent"} />
          <span className={`font-mono text-xl font-bold tabular-nums ${
            isOvertime ? "text-red-400" : timerSeconds < 300 ? "text-amber-400" : "text-text-primary"
          }`}>
            {isOvertime && "−"}{String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
          </span>
          {isOvertime && <span className="text-xs font-medium text-red-400">OVERTIME</span>}
          {!isOvertime && timerSeconds < 300 && timerStarted && (
            <span className="text-xs font-medium text-amber-400">WRAPPING UP</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {!timerStarted ? (
            <button onClick={startTimer} className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent/90 transition-colors">
              <Play size={14} /> Start Timer
            </button>
          ) : (
            <>
              <button onClick={timerRunning ? pauseTimer : startTimer} className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm text-text-primary hover:bg-surface-alt transition-colors">
                {timerRunning ? <Pause size={14} /> : <Play size={14} />}
                {timerRunning ? "Pause" : "Resume"}
              </button>
              <button onClick={resetTimer} className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm text-text-muted hover:text-text-primary hover:bg-surface-alt transition-colors">
                <RotateCcw size={14} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* 4-Layer progress bar */}
      <LayerProgressBar phaseStates={phaseStates} phases={phases} />

      {phases.map((phase, idx) => {
        const status = phaseStates[idx];
        const isLast = idx === phases.length - 1;
        const isHumanize = phase.key === "humanize";

        return (
          <div
            key={phase.key}
            ref={(el) => { phaseRefs.current[idx] = el; }}
            className={`rounded-xl border transition-all ${
              status === "locked" ? "border-border/50 bg-surface/50 opacity-60"
              : isHumanize && status === "active" ? "border-amber-400/60 bg-surface shadow-sm"
              : status === "active" ? "border-accent/40 bg-surface shadow-sm"
              : "border-green-500/30 bg-surface"
            }`}
          >
            {/* Phase header */}
            <div className={`flex items-center gap-4 p-5 ${status !== "locked" ? "pb-3" : ""}`}>
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${
                status === "complete" ? "bg-green-500"
                : isHumanize && status === "active" ? "bg-amber-500"
                : status === "active" ? "bg-accent"
                : "bg-text-muted/30"
              }`}>
                {status === "complete" ? <Check size={18} /> : isHumanize ? <Sparkles size={16} /> : phase.number}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className={`text-lg font-semibold ${status === "locked" ? "text-text-muted" : "text-text-primary"}`}>
                    {phase.title}
                  </h3>
                  {phase.content.plugin && status !== "locked" && (
                    <PluginBadge name={phase.content.plugin} />
                  )}
                </div>
                {phase.subtitle && <p className="text-sm text-text-muted mt-0.5">{phase.subtitle}</p>}
              </div>
              <StatusBadge status={status} isHumanize={isHumanize} />
            </div>

            {/* Phase content */}
            {status !== "locked" && (
              <div className="px-5 pb-5 space-y-5">

                {phase.content.scenario && (
                  <div className="rounded-lg bg-slate-100 dark:bg-[#1a1a2e] border-l-4 border-l-accent p-5">
                    <div className="prose text-slate-700 dark:text-gray-200 text-[15px] leading-relaxed" dangerouslySetInnerHTML={{ __html: phase.content.scenario }} />
                  </div>
                )}

                {phase.content.context && !phase.content.prompt && (
                  <div className="prose text-text-secondary" dangerouslySetInnerHTML={{ __html: phase.content.context }} />
                )}

                {phase.content.prompt && (
                  <>
                    <PromptTabs
                      context={phase.content.context ?? ""}
                      prompt={phase.content.prompt}
                      prompt2={phase.content.prompt2}
                      phaseKey={phase.key}
                      isUnlocked={unlockedPrompts.has(phase.key)}
                      onUnlock={() => setUnlockedPrompts((prev) => new Set([...prev, phase.key]))}
                    />
                    <DraftPromptBox
                      value={draftPrompts[phase.key] ?? ""}
                      onChange={(val) => setDraftPrompts((prev) => ({ ...prev, [phase.key]: val }))}
                    />
                  </>
                )}

                {phase.content.doThis && (
                  <div>
                    <h4 className="text-base font-semibold text-text-primary mb-3">Do this</h4>
                    <div className="prose text-text-secondary" dangerouslySetInnerHTML={{ __html: phase.content.doThis }} />
                  </div>
                )}

                {phase.content.skillChain && (
                  <SkillChainDisplay raw={phase.content.skillChain} />
                )}


                {phase.content.tip && (
                  <div className="rounded-lg border-2 border-emerald-300 bg-emerald-50 dark:border-emerald-500/30 dark:bg-emerald-950/40 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
                      <Lightbulb size={14} /> Tip
                    </div>
                    <div className="prose text-emerald-900 dark:text-emerald-100 text-sm" dangerouslySetInnerHTML={{ __html: phase.content.tip }} />
                  </div>
                )}

                {phase.content.checkpoint && !phase.content.prompt && (
                  <div className="rounded-lg border-2 border-blue-300 bg-blue-50 dark:border-blue-500/30 dark:bg-blue-950/40 p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">Before You Move On</div>
                    <div className="prose text-blue-900 dark:text-blue-100 text-sm" dangerouslySetInnerHTML={{ __html: phase.content.checkpoint }} />
                  </div>
                )}

                {isLast && (phase.content.revealGood || phase.content.revealTakeaway) && (
                  <div className="space-y-4">
                    <button
                      onClick={() => setRevealOpen(!revealOpen)}
                      className="inline-flex items-center gap-2 rounded-lg border-2 border-accent/50 px-5 py-3 text-sm font-semibold text-accent hover:bg-accent/5 transition-colors"
                    >
                      <Eye size={16} />
                      {revealOpen ? "Hide the standard" : "Reveal: What Good Looks Like — only after you are done"}
                      {revealOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    </button>

                    {revealOpen && (
                      <div className="space-y-5 rounded-lg border border-accent/20 bg-accent/5 p-5">
                        {phase.content.revealGood && (
                          <div>
                            <h4 className="text-base font-semibold text-text-primary mb-3">Strong output indicators</h4>
                            <div className="prose text-text-secondary text-sm" dangerouslySetInnerHTML={{ __html: phase.content.revealGood }} />
                          </div>
                        )}
                        {phase.content.revealTakeaway && (
                          <div className="rounded-lg bg-accent/10 border border-accent/20 p-4">
                            <h4 className="text-sm font-semibold text-accent mb-2">The compound intelligence test</h4>
                            <div className="prose text-text-secondary text-sm" dangerouslySetInnerHTML={{ __html: phase.content.revealTakeaway }} />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {status === "active" && (
                  <div className="pt-2">
                    {isLast ? (
                      <button onClick={() => unlockNext(idx)} className={`rounded-lg px-6 py-3 text-sm font-semibold text-white transition-colors ${isHumanize ? "bg-amber-500 hover:bg-amber-500/90" : "bg-accent hover:bg-accent/90"}`}>
                        Close the build
                      </button>
                    ) : (
                      <button onClick={() => unlockNext(idx)} className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors">
                        Done — move to {phases[idx + 1]?.title ?? `phase ${phase.number + 1}`} →
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}

      {phaseStates.some((s) => s === "complete") && (
        <div className="pt-4 text-center">
          <button onClick={resetProgress} className="text-sm text-text-muted hover:text-text-primary transition-colors underline underline-offset-2">
            Reset progress
          </button>
        </div>
      )}

    </div>
  );
}

function LayerProgressBar({ phaseStates, phases }: { phaseStates: PhaseStatus[]; phases: PhaseInfo[] }) {
  const icons = [Globe, FileText, Zap, Sparkles];
  const colors = ["text-blue-500", "text-purple-500", "text-orange-500", "text-amber-500"];

  return (
    <div className="rounded-xl border border-border bg-surface-alt px-5 py-3">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-2">Build progress</p>
      <div className="flex items-center gap-2">
        {phases.map((phase, i) => {
          const done = phaseStates[i] === "complete";
          const active = phaseStates[i] === "active";
          const Icon = icons[i % icons.length];
          const color = colors[i % colors.length];
          return (
            <div key={phase.key} className="flex items-center gap-2 flex-1 min-w-0">
              <div className={`flex items-center gap-1.5 ${done || active ? "opacity-100" : "opacity-30"}`}>
                <Icon size={14} className={done ? "text-green-500" : color} />
                <span className={`text-xs font-medium hidden sm:inline truncate ${done ? "text-green-600 dark:text-green-400" : active ? "text-text-primary" : "text-text-muted"}`}>
                  {phase.title}
                </span>
              </div>
              {i < phases.length - 1 && <ChevronRight size={12} className="text-border shrink-0" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PluginBadge({ name }: { name: string }) {
  const isFile = name.toLowerCase().includes("file");
  return (
    <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
      isFile
        ? "bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300"
        : "bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
    }`}>
      {isFile ? <FileText size={11} /> : <Globe size={11} />}
      {name} Plugin
    </span>
  );
}

function SkillChainDisplay({ raw }: { raw: string }) {
  const skills = raw.split("→").map((s) => s.trim()).filter(Boolean);
  return (
    <div className="rounded-lg border border-purple-200 dark:border-purple-800/50 bg-purple-50/50 dark:bg-purple-950/20 p-4">
      <div className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 mb-3">Skill chain — run in order</div>
      <div className="flex flex-wrap items-center gap-2">
        {skills.map((skill, i) => (
          <span key={`${skill}-${i}`} className="flex items-center gap-2">
            <span className={`inline-flex items-center rounded-md px-3 py-1.5 text-sm font-mono font-bold ${
              skill === "/human"
                ? "bg-amber-100 dark:bg-amber-900/40 border border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-200"
                : "bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-700 text-purple-800 dark:text-purple-200"
            }`}>
              {skill === "/human" && <Sparkles size={13} className="mr-1.5" />}
              {skill}
            </span>
            {i < skills.length - 1 && <ChevronRight size={16} className="text-text-muted" />}
          </span>
        ))}
      </div>
      <p className="mt-2 text-xs text-text-muted">Run each skill in the <strong className="text-text-secondary">same AI conversation</strong> — context compounds across each step.</p>
    </div>
  );
}

function DraftPromptBox({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  const [copied, setCopied] = useState(false);

  function copyDraft() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-text-secondary">Draft your prompt here</label>
        <button
          onClick={copyDraft}
          disabled={!value.trim()}
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-alt px-3 py-1 text-xs font-semibold text-text-secondary transition-colors hover:bg-surface disabled:opacity-40"
        >
          {copied ? <CheckCheck size={13} className="text-green-400" /> : <Copy size={13} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your prompt here, then copy it into Claude / GitHub Copilot..."
        rows={8}
        className="w-full resize-y rounded-lg border border-border bg-[#111827] px-4 py-3 font-mono text-sm leading-relaxed text-gray-200 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-accent"
      />
    </div>
  );
}

function PromptTabs({ context, prompt, prompt2, phaseKey, isUnlocked, onUnlock }: {
  context: string;
  prompt: string;
  prompt2?: string;
  phaseKey: string;
  isUnlocked: boolean;
  onUnlock: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"guide" | "prompt">("guide");

  return (
    <div>
      <div className="flex border-b border-border mb-4">
        <button
          onClick={() => setActiveTab("guide")}
          className={`px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
            activeTab === "guide"
              ? "border-accent text-accent"
              : "border-transparent text-text-muted hover:text-text-primary"
          }`}
        >
          Guide
        </button>
        <button
          onClick={() => setActiveTab("prompt")}
          className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
            activeTab === "prompt"
              ? "border-accent text-accent"
              : "border-transparent text-text-muted hover:text-text-primary"
          }`}
        >
          {!isUnlocked && <Lock size={12} />}
          {isUnlocked ? "Prompt scaffold" : "Unlock prompt"}
        </button>
      </div>

      {activeTab === "guide" && (
        <div className="prose text-text-secondary" dangerouslySetInnerHTML={{ __html: context }} />
      )}

      {activeTab === "prompt" && !isUnlocked && (
        <div className="flex flex-col items-center py-8 gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-alt border border-border">
            <Lock size={20} className="text-accent" />
          </div>
          <p className="text-sm text-text-secondary text-center max-w-xs">
            Made your decisions? Reveal the full prompt scaffold.
          </p>
          <button
            onClick={onUnlock}
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
          >
            Reveal prompt
          </button>
        </div>
      )}

      {activeTab === "prompt" && isUnlocked && (
        <>
          <PromptBox text={prompt} label={prompt2 ? "Prompt 1" : "Copy this prompt"} />
          {prompt2 && <PromptBox text={prompt2} label="Prompt 2" />}
        </>
      )}
    </div>
  );
}

function PromptBox({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  }

  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <div className="flex items-center justify-between bg-[#1a1d2e] px-4 py-2.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{label}</span>
        <button
          onClick={copyToClipboard}
          className="inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold transition-colors bg-white/10 hover:bg-white/20 text-gray-200"
        >
          {copied ? <CheckCheck size={13} className="text-green-400" /> : <Copy size={13} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="bg-[#111827] px-4 py-4 text-sm text-gray-200 font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto">{text}</pre>
    </div>
  );
}

function StatusBadge({ status, isHumanize }: { status: PhaseStatus; isHumanize: boolean }) {
  if (status === "locked") return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-text-muted/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
      <Lock size={12} /> Locked
    </span>
  );
  if (status === "active") return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
      isHumanize ? "bg-amber-500/10 text-amber-600 dark:text-amber-400" : "bg-accent/10 text-accent"
    }`}>
      In Progress
    </span>
  );
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
      <Check size={12} /> Complete
    </span>
  );
}
