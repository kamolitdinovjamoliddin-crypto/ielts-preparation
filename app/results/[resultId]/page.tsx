"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { getResultById } from "@/lib/storage";
import { TestResult, WritingFeedback, SpeakingFeedback } from "@/lib/types";
import { formatBand } from "@/lib/bandCalculator";
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  ThumbsUp,
  ThumbsDown,
  Clock,
  Home,
} from "lucide-react";

function BandBadge({ band }: { band: number }) {
  const color =
    band >= 7 ? "var(--color-teal)" : band >= 5.5 ? "var(--color-amber)" : "var(--color-red)";
  return (
    <div
      className="flex h-24 w-24 flex-col items-center justify-center rounded-full border-4"
      style={{ borderColor: color }}
    >
      <span className="serif-display text-3xl font-bold" style={{ color }}>
        {formatBand(band)}
      </span>
      <span className="text-[10px] uppercase tracking-wide text-neutral-400">band</span>
    </div>
  );
}

function CriteriaBar({ label, score }: { label: string; score: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="text-neutral-600">{label}</span>
        <span className="font-semibold text-[var(--color-navy)]">{formatBand(score)}</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-[var(--color-paper-dim)]">
        <div
          className="h-1.5 rounded-full bg-[var(--color-teal)]"
          style={{ width: `${(score / 9) * 100}%` }}
        />
      </div>
    </div>
  );
}

export default function ResultPage({ params }: { params: Promise<{ resultId: string }> }) {
  const { resultId } = use(params);
  const [result, setResult] = useState<TestResult | null | undefined>(undefined);
  const [fullWritingFeedback, setFullWritingFeedback] = useState<{
    task1: WritingFeedback;
    task2: WritingFeedback;
  } | null>(null);

  useEffect(() => {
    const r = getResultById(resultId);
    setResult(r ?? null);

    if (r?.module === "writing") {
      const raw = localStorage.getItem(`writing_full_feedback_${resultId}`);
      if (raw) setFullWritingFeedback(JSON.parse(raw));
    }
  }, [resultId]);

  if (result === undefined) {
    return <div className="exam-shell flex min-h-screen items-center justify-center">Yuklanmoqda...</div>;
  }

  if (result === null) {
    return (
      <div className="exam-shell flex min-h-screen flex-col items-center justify-center gap-4">
        <p className="text-neutral-500">Natija topilmadi.</p>
        <Link href="/" className="text-[var(--color-teal)] hover:underline">
          Bosh sahifaga qaytish
        </Link>
      </div>
    );
  }

  const minutes = Math.floor(result.durationTakenSeconds / 60);
  const seconds = result.durationTakenSeconds % 60;

  return (
    <div className="exam-shell min-h-screen">
      <header className="exam-topbar">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-white/70 hover:text-white">
              <ArrowLeft size={18} />
            </Link>
            <p className="serif-display text-lg font-semibold">Natija</p>
          </div>
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-md border border-white/20 px-3 py-1.5 text-sm hover:bg-white/10"
          >
            <Home size={14} /> Bosh sahifa
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-10">
        {/* Summary card */}
        <div className="mb-6 flex flex-col items-center gap-4 rounded-lg border border-[var(--color-line)] bg-white p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="serif-display text-xl font-semibold text-[var(--color-navy)] capitalize">
              {result.testTitle}
            </p>
            <p className="mt-1 text-sm text-neutral-500 capitalize">{result.module} moduli</p>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-neutral-400">
              <Clock size={13} />
              {minutes} daq {seconds} son sarflandi
            </div>
            {typeof result.score === "number" && (
              <p className="mt-2 text-sm text-neutral-600">
                To&apos;g&apos;ri javoblar: <strong>{result.score}</strong> /{" "}
                {result.totalQuestions}
              </p>
            )}
          </div>
          {typeof result.bandScore === "number" && <BandBadge band={result.bandScore} />}
        </div>

        {/* Writing detailed feedback */}
        {result.module === "writing" && fullWritingFeedback && (
          <div className="space-y-6">
            {(["task1", "task2"] as const).map((key) => {
              const fb = fullWritingFeedback[key];
              return (
                <div key={key} className="rounded-lg border border-[var(--color-line)] bg-white p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="serif-display text-lg font-semibold text-[var(--color-navy)]">
                      {key === "task1" ? "Task 1" : "Task 2"} natijasi
                    </h3>
                    <span className="serif-display text-2xl font-bold text-[var(--color-teal)]">
                      {formatBand(fb.overallBand)}
                    </span>
                  </div>

                  <div className="mb-5 grid gap-3 sm:grid-cols-2">
                    <CriteriaBar
                      label={key === "task1" ? "Task Achievement" : "Task Response"}
                      score={fb.taskAchievement}
                    />
                    <CriteriaBar label="Coherence & Cohesion" score={fb.coherenceCohesion} />
                    <CriteriaBar label="Lexical Resource" score={fb.lexicalResource} />
                    <CriteriaBar label="Grammatical Range" score={fb.grammaticalRange} />
                  </div>

                  <p className="mb-4 text-xs text-neutral-400">So&apos;zlar soni: {fb.wordCount}</p>

                  <div className="mb-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-[var(--color-teal)]">
                        <ThumbsUp size={14} /> Kuchli tomonlar
                      </p>
                      <ul className="space-y-1 text-sm text-neutral-600">
                        {fb.strengths.map((s, i) => (
                          <li key={i} className="flex gap-1.5">
                            <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[var(--color-teal)]" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-[var(--color-red)]">
                        <ThumbsDown size={14} /> Yaxshilash kerak
                      </p>
                      <ul className="space-y-1 text-sm text-neutral-600">
                        {fb.weaknesses.map((w, i) => (
                          <li key={i} className="flex gap-1.5">
                            <XCircle size={14} className="mt-0.5 shrink-0 text-[var(--color-red)]" />
                            {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-4 rounded-md bg-[var(--color-paper-dim)] p-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                      Batafsil feedback
                    </p>
                    <p className="text-sm leading-relaxed text-neutral-700">{fb.detailedFeedback}</p>
                  </div>

                  {fb.correctedHighlights && fb.correctedHighlights.length > 0 && (
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                        Tuzatish tavsiyalari
                      </p>
                      <div className="space-y-2">
                        {fb.correctedHighlights.map((h, i) => (
                          <div key={i} className="rounded-md border border-[var(--color-line)] p-3 text-sm">
                            <p className="text-neutral-500 line-through">{h.original}</p>
                            <p className="font-medium text-[var(--color-teal-dark)]">→ {h.suggestion}</p>
                            <p className="mt-1 text-xs text-neutral-400">{h.reason}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Speaking feedback */}
        {result.module === "speaking" && result.feedback && (
          <div className="rounded-lg border border-[var(--color-line)] bg-white p-6">
            <div className="mb-5 grid gap-3 sm:grid-cols-2">
              <CriteriaBar
                label="Fluency & Coherence"
                score={(result.feedback as SpeakingFeedback).fluencyCoherence}
              />
              <CriteriaBar
                label="Lexical Resource"
                score={(result.feedback as SpeakingFeedback).lexicalResource}
              />
              <CriteriaBar
                label="Grammatical Range"
                score={(result.feedback as SpeakingFeedback).grammaticalRange}
              />
              <CriteriaBar
                label="Pronunciation (taxminiy)"
                score={(result.feedback as SpeakingFeedback).pronunciation}
              />
            </div>

            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-[var(--color-teal)]">
                  <ThumbsUp size={14} /> Kuchli tomonlar
                </p>
                <ul className="space-y-1 text-sm text-neutral-600">
                  {(result.feedback as SpeakingFeedback).strengths.map((s, i) => (
                    <li key={i} className="flex gap-1.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[var(--color-teal)]" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-[var(--color-red)]">
                  <ThumbsDown size={14} /> Yaxshilash kerak
                </p>
                <ul className="space-y-1 text-sm text-neutral-600">
                  {(result.feedback as SpeakingFeedback).weaknesses.map((w, i) => (
                    <li key={i} className="flex gap-1.5">
                      <XCircle size={14} className="mt-0.5 shrink-0 text-[var(--color-red)]" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-md bg-[var(--color-paper-dim)] p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                Batafsil feedback
              </p>
              <p className="text-sm leading-relaxed text-neutral-700">
                {(result.feedback as SpeakingFeedback).detailedFeedback}
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/history"
            className="rounded-md border border-[var(--color-line)] bg-white px-5 py-2.5 text-sm font-medium text-neutral-600 hover:bg-[var(--color-paper-dim)]"
          >
            Barcha natijalar
          </Link>
          <Link
            href="/"
            className="rounded-md bg-[var(--color-teal)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--color-teal-dark)]"
          >
            Yana mashq qilish
          </Link>
        </div>
      </main>
    </div>
  );
}
