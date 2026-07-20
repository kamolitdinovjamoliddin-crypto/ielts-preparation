"use client";

import { use, useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRequireAuth } from "@/lib/useRequireAuth";
import { useDailyTask, markTaskDone } from "@/lib/useDailyTask";
import { isAnswerCorrect } from "@/lib/scoring";
import {
  ArrowLeft, Home, Loader2, RotateCcw,
  CheckCircle2, XCircle, BookmarkPlus, Check, Play, Pause
} from "lucide-react";

interface WordPopup { word: string; x: number; y: number; }

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running]);

  const mm = Math.floor(seconds / 60).toString().padStart(2, "0");
  const ss = (seconds % 60).toString().padStart(2, "0");

  return (
    <button
      onClick={() => setRunning((r) => !r)}
      className="flex items-center gap-1.5 rounded-md border border-white/20 px-3 py-1.5 text-sm hover:bg-white/10"
    >
      {running
        ? <Pause size={13} className="text-[var(--color-teal)]" />
        : <Play size={13} className="text-white/60" />}
      <span className="timer-mono font-semibold text-white">{mm}:{ss}</span>
    </button>
  );
}

export default function ReadingPage({ params }: { params: Promise<{ day: string }> }) {
  const { day } = use(params);
  const dayNumber = Number(day);
  const session = useRequireAuth();
  const router = useRouter();
  const { task, loading } = useDailyTask(dayNumber);

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [popup, setPopup] = useState<WordPopup | null>(null);
  const [savedWords, setSavedWords] = useState<Set<string>>(new Set());
  const [savingWord, setSavingWord] = useState<string | null>(null);
  const passageRef = useRef<HTMLDivElement>(null);

  const handleTextMouseUp = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) { setPopup(null); return; }
    const raw = selection.toString().trim();
    const word = raw.replace(/[^a-zA-Z'-]/g, "").toLowerCase();
    if (!word || word.length < 2 || raw.includes(" ")) { setPopup(null); return; }
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    const containerRect = passageRef.current?.getBoundingClientRect();
    if (!containerRect) return;
    setPopup({ word, x: rect.left - containerRect.left + rect.width / 2, y: rect.top - containerRect.top - 8 });
  }, []);

  async function handleSaveWord(word: string) {
    if (!session || savedWords.has(word)) return;
    setSavingWord(word);
    try {
      await fetch("/api/word-bank", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId: session.id, word, source: `Day ${dayNumber} Reading` }),
      });
      setSavedWords((prev) => new Set(prev).add(word));
    } catch { /* silent */ }
    setSavingWord(null);
    setPopup(null);
    window.getSelection()?.removeAllRanges();
  }

  function renderPassage(text: string) {
    return text.split(/(\s+)/).map((token, i) => {
      const clean = token.replace(/[^a-zA-Z'-]/g, "").toLowerCase();
      if (clean && savedWords.has(clean)) {
        return <mark key={i} className="rounded bg-yellow-200 px-0.5 text-neutral-800">{token}</mark>;
      }
      return <span key={i}>{token}</span>;
    });
  }

  if (!session || loading) return <div className="exam-shell flex min-h-screen items-center justify-center"><p className="text-neutral-400">Loading...</p></div>;
  if (!task || !task.reading_questions) return <div className="exam-shell flex min-h-screen items-center justify-center"><p className="text-neutral-400">No reading task found.</p></div>;

  const questions = task.reading_questions;
  const allAnswered = questions.every((q) => answers[q.id]);
  const correctCount = submitted ? questions.filter((q) => isAnswerCorrect(q, answers[q.id] || "")).length : 0;

  async function handleComplete() {
    const correct = questions.filter((q) => isAnswerCorrect(q, answers[q.id] || "")).length;
    setIsSaving(true);
    await markTaskDone(session!.id, dayNumber, "reading_done", { reading_score: correct });
    router.push("/dashboard");
  }

  return (
    <div className="exam-shell min-h-screen" onClick={() => setPopup(null)}>
      <header className="exam-topbar">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <button onClick={() => router.push("/dashboard")} className="text-white/70 hover:text-white"><ArrowLeft size={18} /></button>
            <div>
              <p className="serif-display text-lg font-semibold">{task.reading_title}</p>
              <p className="text-[11px] text-white/60">Day {dayNumber} · Reading</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Stopwatch />
            <Link href="/dashboard" className="text-white/70 hover:text-white"><Home size={18} /></Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-8">
        <p className="mb-3 text-xs text-neutral-400">Tip: Select a single word to save it to your Word Bank.</p>

        <div ref={passageRef} className="relative mb-5 rounded-lg border border-[var(--color-line)] bg-white p-5"
          onMouseUp={handleTextMouseUp} onClick={(e) => e.stopPropagation()}>
          <p className="passage-text select-text text-[15px] leading-relaxed text-neutral-800">
            {renderPassage(task.reading_text)}
          </p>
          {popup && (
            <div className="absolute z-20 -translate-x-1/2 -translate-y-full" style={{ left: popup.x, top: popup.y }}
              onClick={(e) => e.stopPropagation()}>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-3 py-2 shadow-lg">
                  <span className="text-sm font-semibold text-[var(--color-navy)]">&ldquo;{popup.word}&rdquo;</span>
                  <button onClick={() => handleSaveWord(popup.word)}
                    disabled={savingWord === popup.word || savedWords.has(popup.word)}
                    className="flex items-center gap-1 rounded-md bg-yellow-400 px-2 py-1 text-xs font-semibold text-yellow-900 hover:bg-yellow-500 disabled:opacity-60">
                    {savedWords.has(popup.word) ? <><Check size={11} /> Saved</> : savingWord === popup.word ? <Loader2 size={11} className="animate-spin" /> : <><BookmarkPlus size={11} /> Save</>}
                  </button>
                </div>
                <div className="h-2 w-2 rotate-45 border-b border-r border-[var(--color-line)] bg-white -mt-1" />
              </div>
            </div>
          )}
        </div>

        <div className="space-y-3">
          {questions.map((q, i) => {
            const userAnswer = answers[q.id] || "";
            const isCorrect = submitted && isAnswerCorrect(q, userAnswer);
            const isWrong = submitted && !!userAnswer && !isCorrect;
            return (
              <div key={q.id} className={`rounded-lg border bg-white p-4 ${isCorrect ? "border-[var(--color-teal)]/40" : isWrong ? "border-[var(--color-red)]/40" : "border-[var(--color-line)]"}`}>
                <div className="mb-2 flex items-start gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-navy)] text-xs font-bold text-white">{i + 1}</span>
                  <p className="pt-0.5 text-sm text-[var(--color-ink)]">{q.text}</p>
                  {submitted && (isCorrect ? <CheckCircle2 size={16} className="ml-auto shrink-0 text-[var(--color-teal)]" /> : isWrong ? <XCircle size={16} className="ml-auto shrink-0 text-[var(--color-red)]" /> : null)}
                </div>
                <div className="pl-8">
                  {q.type === "multiple-choice" && q.options ? (
                    <div className="space-y-1.5">
                      {q.options.map((opt) => (
                        <label key={opt} className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-1.5 text-sm ${userAnswer === opt ? "border-[var(--color-teal)] bg-[var(--color-teal)]/8" : "border-[var(--color-line)]"}`}>
                          <input type="radio" name={q.id} disabled={submitted} checked={userAnswer === opt}
                            onChange={() => setAnswers((p) => ({ ...p, [q.id]: opt }))}
                            className="h-3.5 w-3.5 accent-[var(--color-teal)]" />
                          {opt}
                        </label>
                      ))}
                    </div>
                  ) : q.type === "true-false-not-given" ? (
                    <div className="flex flex-wrap gap-2">
                      {["True", "False", "Not Given"].map((opt) => (
                        <button key={opt} disabled={submitted} onClick={() => setAnswers((p) => ({ ...p, [q.id]: opt }))}
                          className={`rounded-md border px-3 py-1 text-xs font-medium ${userAnswer === opt ? "border-[var(--color-teal)] bg-[var(--color-teal)] text-white" : "border-[var(--color-line)] bg-white"}`}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <input type="text" disabled={submitted} value={userAnswer}
                      onChange={(e) => setAnswers((p) => ({ ...p, [q.id]: e.target.value }))}
                      placeholder="Your answer..."
                      className="w-full max-w-xs rounded-md border border-[var(--color-line)] px-3 py-1.5 text-sm focus:border-[var(--color-teal)] focus:outline-none" />
                  )}
                  {isWrong && <p className="mt-1.5 text-xs text-neutral-500">Correct: <strong>{Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer}</strong></p>}
                </div>
              </div>
            );
          })}
        </div>

        {!submitted ? (
          <button onClick={() => setSubmitted(true)} disabled={!allAnswered}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[var(--color-teal)] py-2.5 text-sm font-medium text-white hover:bg-[var(--color-teal-dark)] disabled:opacity-50">
            Check Answers
          </button>
        ) : (
          <div className="mt-6 space-y-3">
            <p className="text-center text-sm text-neutral-600">Score: <strong>{correctCount}</strong> / {questions.length} correct</p>
            <div className="flex gap-3">
              <button onClick={() => { setSubmitted(false); setAnswers({}); }}
                className="flex flex-1 items-center justify-center gap-2 rounded-md border border-[var(--color-line)] bg-white py-2.5 text-sm font-medium text-neutral-600">
                <RotateCcw size={14} /> Try Again
              </button>
              <button onClick={handleComplete} disabled={isSaving}
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[var(--color-teal)] py-2.5 text-sm font-medium text-white disabled:opacity-50">
                {isSaving && <Loader2 size={15} className="animate-spin" />} Finish
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
