"use client";

import { use, useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRequireAuth } from "@/lib/useRequireAuth";
import { useDailyTask, markTaskDone } from "@/lib/useDailyTask";
import { isAnswerCorrect } from "@/lib/scoring";
import { ArrowLeft, Home, Loader2, RotateCcw, Play, Square, CheckCircle2, XCircle } from "lucide-react";

export default function ListeningPage({ params }: { params: Promise<{ day: string }> }) {
  const { day } = use(params);
  const dayNumber = Number(day);
  const session = useRequireAuth();
  const router = useRouter();
  const { task, loading } = useDailyTask(dayNumber);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  if (!session || loading) {
    return (
      <div className="exam-shell flex min-h-screen items-center justify-center">
        <p className="text-neutral-400">Loading...</p>
      </div>
    );
  }

  if (!task || !task.podcast_questions) {
    return (
      <div className="exam-shell flex min-h-screen items-center justify-center">
        <p className="text-neutral-400">No listening task found for this day.</p>
      </div>
    );
  }

  const questions = task.podcast_questions;
  const allAnswered = questions.every((q) => answers[q.id]);

  function handlePlay() {
    if (!window.speechSynthesis) {
      alert("Your browser does not support text-to-speech.");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(task!.podcast_transcript || "");
    utterance.lang = "en-US";
    utterance.rate = 0.95;
    utterance.onend = () => {
      setIsPlaying(false);
      setHasPlayedOnce(true);
    };
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  }

  function handleStop() {
    window.speechSynthesis?.cancel();
    setIsPlaying(false);
    setHasPlayedOnce(true);
  }

  function handleCheck() {
    setSubmitted(true);
  }

  function handleRetry() {
    setSubmitted(false);
    setAnswers({});
  }

  async function handleComplete() {
    const correct = questions.filter((q) => isAnswerCorrect(q, answers[q.id] || "")).length;
    setIsSaving(true);
    await markTaskDone(session!.id, dayNumber, "listening_done", {
      listening_score: correct,
    });
    router.push("/dashboard");
  }

  const correctCount = submitted
    ? questions.filter((q) => isAnswerCorrect(q, answers[q.id] || "")).length
    : 0;

  return (
    <div className="exam-shell min-h-screen">
      <header className="exam-topbar">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <button onClick={() => router.push("/dashboard")} className="text-white/70 hover:text-white">
              <ArrowLeft size={18} />
            </button>
            <div>
              <p className="serif-display text-lg font-semibold">{task.podcast_title}</p>
              <p className="text-[11px] text-white/60">Day {dayNumber} &middot; Listening / Podcast</p>
            </div>
          </div>
          <Link href="/dashboard" className="text-white/70 hover:text-white" title="Home">
            <Home size={18} />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-8">
        <div className="mb-5 flex flex-col items-center rounded-lg border border-[var(--color-line)] bg-white p-6">
          <button
            onClick={isPlaying ? handleStop : handlePlay}
            className={`flex h-16 w-16 items-center justify-center rounded-full transition-colors ${
              isPlaying
                ? "bg-[var(--color-red)]"
                : "bg-[var(--color-teal)] hover:bg-[var(--color-teal-dark)]"
            }`}
          >
            {isPlaying ? <Square size={22} className="text-white" /> : <Play size={22} className="text-white" />}
          </button>
          <p className="mt-3 text-sm font-medium text-neutral-600">
            {isPlaying ? "Playing..." : "Tap to listen to the podcast"}
          </p>
          {!hasPlayedOnce && (
            <p className="mt-1 text-xs text-neutral-400">
              Listen before answering the questions
            </p>
          )}
        </div>

        <div className="space-y-3">
          {questions.map((q, i) => {
            const userAnswer = answers[q.id] || "";
            const isCorrect = submitted && isAnswerCorrect(q, userAnswer);
            const isWrong = submitted && userAnswer && !isCorrect;

            return (
              <div
                key={q.id}
                className={`rounded-lg border bg-white p-4 ${
                  isCorrect
                    ? "border-[var(--color-teal)]/40"
                    : isWrong
                    ? "border-[var(--color-red)]/40"
                    : "border-[var(--color-line)]"
                }`}
              >
                <div className="mb-2 flex items-start gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-navy)] text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="pt-0.5 text-sm text-[var(--color-ink)]">{q.text}</p>
                  {submitted && (isCorrect ? (
                    <CheckCircle2 size={16} className="ml-auto shrink-0 text-[var(--color-teal)]" />
                  ) : isWrong ? (
                    <XCircle size={16} className="ml-auto shrink-0 text-[var(--color-red)]" />
                  ) : null)}
                </div>
                <div className="pl-8">
                  {q.type === "multiple-choice" && q.options ? (
                    <div className="space-y-1.5">
                      {q.options.map((opt) => (
                        <label
                          key={opt}
                          className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-1.5 text-sm ${
                            userAnswer === opt
                              ? "border-[var(--color-teal)] bg-[var(--color-teal)]/8"
                              : "border-[var(--color-line)]"
                          }`}
                        >
                          <input
                            type="radio"
                            name={q.id}
                            disabled={submitted}
                            checked={userAnswer === opt}
                            onChange={() => setAnswers((p) => ({ ...p, [q.id]: opt }))}
                            className="h-3.5 w-3.5 accent-[var(--color-teal)]"
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <input
                        type="text"
                        disabled={submitted}
                        value={userAnswer}
                        onChange={(e) => setAnswers((p) => ({ ...p, [q.id]: e.target.value }))}
                        placeholder="Your answer..."
                        className="w-full max-w-xs rounded-md border border-[var(--color-line)] px-3 py-1.5 text-sm focus:border-[var(--color-teal)] focus:outline-none"
                      />
                      {q.wordLimit && (
                        <p className="mt-1 text-[11px] font-semibold uppercase text-[var(--color-teal)]">
                          {q.wordLimit}
                        </p>
                      )}
                    </div>
                  )}
                  {isWrong && (
                    <p className="mt-1.5 text-xs text-neutral-500">
                      Correct answer:{" "}
                      <strong>
                        {Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer}
                      </strong>
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {!submitted ? (
          <button
            onClick={handleCheck}
            disabled={!allAnswered}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[var(--color-teal)] py-2.5 text-sm font-medium text-white hover:bg-[var(--color-teal-dark)] disabled:opacity-50"
          >
            Check Answers
          </button>
        ) : (
          <div className="mt-6 space-y-3">
            <p className="text-center text-sm text-neutral-600">
              Score: <strong>{correctCount}</strong> / {questions.length} correct
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleRetry}
                className="flex flex-1 items-center justify-center gap-2 rounded-md border border-[var(--color-line)] bg-white py-2.5 text-sm font-medium text-neutral-600 hover:bg-[var(--color-paper-dim)]"
              >
                <RotateCcw size={14} /> Try Again
              </button>
              <button
                onClick={handleComplete}
                disabled={isSaving}
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[var(--color-teal)] py-2.5 text-sm font-medium text-white hover:bg-[var(--color-teal-dark)] disabled:opacity-50"
              >
                {isSaving && <Loader2 size={15} className="animate-spin" />}
                Finish Exercise
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
