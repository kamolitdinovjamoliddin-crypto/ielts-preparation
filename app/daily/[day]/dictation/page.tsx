"use client";

import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRequireAuth } from "@/lib/useRequireAuth";
import { useDailyTask, markTaskDone } from "@/lib/useDailyTask";
import { ArrowLeft, Home, Loader2, Play, RotateCcw } from "lucide-react";

// Word-level similarity between original and attempt text (simple percentage)
function calculateAccuracy(original: string, attempt: string): number {
  const normalize = (s: string) =>
    s
      .toLowerCase()
      .replace(/[.,!?;:'"]/g, "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);

  const originalWords = normalize(original);
  const attemptWords = normalize(attempt);

  if (originalWords.length === 0) return 0;

  let matches = 0;
  const used = new Array(attemptWords.length).fill(false);
  for (const word of originalWords) {
    const idx = attemptWords.findIndex((w, i) => !used[i] && w === word);
    if (idx !== -1) {
      matches++;
      used[idx] = true;
    }
  }

  return Math.round((matches / originalWords.length) * 100);
}

export default function DictationPage({ params }: { params: Promise<{ day: string }> }) {
  const { day } = use(params);
  const dayNumber = Number(day);
  const session = useRequireAuth();
  const router = useRouter();
  const { task, loading } = useDailyTask(dayNumber);
  const [attempt, setAttempt] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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

  if (!task || !task.dictation_text) {
    return (
      <div className="exam-shell flex min-h-screen items-center justify-center">
        <p className="text-neutral-400">No dictation task found for this day.</p>
      </div>
    );
  }

  function handlePlay() {
    if (!window.speechSynthesis) {
      alert("Your browser does not support text-to-speech.");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(task!.dictation_text || "");
    utterance.lang = "en-US";
    utterance.rate = 0.85; // slower for dictation
    utterance.onend = () => setIsPlaying(false);
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  }

  const accuracy = checked ? calculateAccuracy(task.dictation_text, attempt) : 0;
  const isGoodEnough = accuracy >= 70;

  function handleCheck() {
    setChecked(true);
  }

  function handleRetry() {
    setChecked(false);
    setAttempt("");
  }

  async function handleComplete() {
    setIsSaving(true);
    await markTaskDone(session!.id, dayNumber, "dictation_done", {
      dictation_answer: attempt,
      dictation_accuracy: accuracy,
    });
    router.push("/dashboard");
  }

  return (
    <div className="exam-shell min-h-screen">
      <header className="exam-topbar">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <button onClick={() => router.push("/dashboard")} className="text-white/70 hover:text-white">
              <ArrowLeft size={18} />
            </button>
            <div>
              <p className="serif-display text-lg font-semibold">Dictation Exercise</p>
              <p className="text-[11px] text-white/60">Day {dayNumber} &middot; Listen and Write</p>
            </div>
          </div>
          <Link href="/dashboard" className="text-white/70 hover:text-white" title="Home">
            <Home size={18} />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-8">
        <p className="mb-4 text-sm text-neutral-500">
          Listen to the sentence and write down exactly what you hear. You can replay it as many
          times as you need.
        </p>

        <div className="mb-5 flex flex-col items-center rounded-lg border border-[var(--color-line)] bg-white p-6">
          <button
            onClick={handlePlay}
            disabled={isPlaying}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-teal)] hover:bg-[var(--color-teal-dark)] disabled:opacity-60"
          >
            <Play size={22} className="text-white" />
          </button>
          <p className="mt-3 text-sm font-medium text-neutral-600">
            {isPlaying ? "Playing..." : "Tap to listen"}
          </p>
        </div>

        <textarea
          value={attempt}
          onChange={(e) => setAttempt(e.target.value)}
          disabled={checked}
          placeholder="Write what you hear here..."
          rows={4}
          className="w-full resize-none rounded-lg border border-[var(--color-line)] bg-white p-4 text-[15px] leading-relaxed focus:border-[var(--color-teal)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]/20"
        />

        {!checked ? (
          <button
            onClick={handleCheck}
            disabled={!attempt.trim()}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[var(--color-teal)] py-2.5 text-sm font-medium text-white hover:bg-[var(--color-teal-dark)] disabled:opacity-50"
          >
            Check
          </button>
        ) : (
          <div className="mt-4 space-y-3">
            <div
              className={`rounded-lg border p-4 text-center ${
                isGoodEnough
                  ? "border-[var(--color-teal)]/40 bg-[var(--color-teal)]/5"
                  : "border-[var(--color-amber)]/40 bg-[var(--color-amber)]/5"
              }`}
            >
              <p className="text-sm text-neutral-600">Match Accuracy</p>
              <p className="serif-display text-2xl font-bold text-[var(--color-navy)]">
                {accuracy}%
              </p>
            </div>

            <div className="rounded-md bg-[var(--color-paper-dim)] p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                Correct Text
              </p>
              <p className="text-sm text-neutral-700">{task.dictation_text}</p>
            </div>

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
