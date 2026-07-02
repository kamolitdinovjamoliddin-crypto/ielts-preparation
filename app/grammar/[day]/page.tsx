"use client";

import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRequireAuth } from "@/lib/useRequireAuth";
import { GrammarLesson } from "@/lib/dbTypes";
import GrammarFormulaBox from "@/components/GrammarFormulaBox";
import {
  ArrowLeft,
  Home,
  Loader2,
  RotateCcw,
  CheckCircle2,
  XCircle,
  BookOpen,
} from "lucide-react";

function isCorrect(correctAnswer: string | string[], userAnswer: string): boolean {
  const normalize = (s: string) => s.trim().toLowerCase().replace(/[.,!?]/g, "");
  if (Array.isArray(correctAnswer)) {
    return correctAnswer.some((a) => normalize(a) === normalize(userAnswer));
  }
  return normalize(correctAnswer) === normalize(userAnswer);
}

export default function GrammarLessonPage({ params }: { params: Promise<{ day: string }> }) {
  const { day } = use(params);
  const dayNumber = Number(day);
  const session = useRequireAuth();
  const router = useRouter();

  const [lesson, setLesson] = useState<GrammarLesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await fetch(`/api/grammar-lesson?dayNumber=${dayNumber}`);
      if (res.ok) {
        const data = await res.json();
        setLesson(data);
      }
      setLoading(false);
    }
    load();
  }, [dayNumber]);

  if (!session || loading) {
    return (
      <div className="exam-shell flex min-h-screen items-center justify-center">
        <p className="text-neutral-400">Loading...</p>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="exam-shell flex min-h-screen items-center justify-center px-4">
        <p className="text-center text-neutral-400">
          This grammar lesson is not available yet.
        </p>
      </div>
    );
  }

  const questions = lesson.questions;
  const allAnswered = questions.every((q) => answers[q.id]);
  const correctCount = questions.filter((q) => isCorrect(q.correctAnswer, answers[q.id] || "")).length;

  function handleCheck() {
    setSubmitted(true);
  }

  function handleRetry() {
    setSubmitted(false);
    setAnswers({});
  }

  async function handleFinish() {
    setIsSaving(true);
    await fetch("/api/grammar-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentId: session!.id,
        dayNumber,
        score: correctCount,
        totalQuestions: questions.length,
      }),
    });
    router.push("/grammar");
  }

  return (
    <div className="exam-shell min-h-screen">
      <header className="exam-topbar">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <button onClick={() => router.push("/grammar")} className="text-white/70 hover:text-white">
              <ArrowLeft size={18} />
            </button>
            <div>
              <p className="serif-display text-lg font-semibold">{lesson.title}</p>
              <p className="text-[11px] text-white/60">Grammar &middot; Lesson {dayNumber}</p>
            </div>
          </div>
          <Link href="/dashboard" className="text-white/70 hover:text-white" title="Home">
            <Home size={18} />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-8">
        {/* Formula */}
        <GrammarFormulaBox formula={lesson.formula} formulaLabels={lesson.formula_labels} />

        {/* Explanation */}
        <div className="mb-5 rounded-lg border border-[var(--color-line)] bg-white p-5">
          <div className="mb-3 flex items-center gap-2">
            <BookOpen size={16} className="text-[var(--color-teal)]" />
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-teal)]">
              Rule
            </p>
          </div>
          <div className="space-y-2.5 text-[15px] leading-relaxed text-neutral-700">
            {lesson.explanation.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Examples */}
        <div className="mb-5 rounded-lg border border-[var(--color-line)] bg-[var(--color-paper-dim)] p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-400">
            Examples
          </p>
          <div className="space-y-2">
            {lesson.examples.map((ex, i) => (
              <div key={i} className="rounded-md bg-white px-3 py-2">
                <p className="text-sm font-medium text-[var(--color-navy)]">{ex.sentence}</p>
                <p className="text-xs text-neutral-400">{ex.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Questions */}
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-400">
          Practice
        </p>
        <div className="space-y-3">
          {questions.map((q, i) => {
            const userAnswer = answers[q.id] || "";
            const correct = submitted && isCorrect(q.correctAnswer, userAnswer);
            const wrong = submitted && userAnswer && !correct;

            return (
              <div
                key={q.id}
                className={`rounded-lg border bg-white p-4 ${
                  correct
                    ? "border-[var(--color-teal)]/40"
                    : wrong
                    ? "border-[var(--color-red)]/40"
                    : "border-[var(--color-line)]"
                }`}
              >
                <div className="mb-2 flex items-start gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-navy)] text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="pt-0.5 text-sm text-[var(--color-ink)]">{q.text}</p>
                  {submitted &&
                    (correct ? (
                      <CheckCircle2 size={16} className="ml-auto shrink-0 text-[var(--color-teal)]" />
                    ) : wrong ? (
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
                    <input
                      type="text"
                      disabled={submitted}
                      value={userAnswer}
                      onChange={(e) => setAnswers((p) => ({ ...p, [q.id]: e.target.value }))}
                      placeholder="Your answer..."
                      className="w-full max-w-xs rounded-md border border-[var(--color-line)] px-3 py-1.5 text-sm focus:border-[var(--color-teal)] focus:outline-none"
                    />
                  )}
                  {wrong && (
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
                onClick={handleFinish}
                disabled={isSaving}
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[var(--color-teal)] py-2.5 text-sm font-medium text-white hover:bg-[var(--color-teal-dark)] disabled:opacity-50"
              >
                {isSaving && <Loader2 size={15} className="animate-spin" />}
                Finish Lesson
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
