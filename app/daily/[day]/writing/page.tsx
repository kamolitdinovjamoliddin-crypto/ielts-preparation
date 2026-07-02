"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRequireAuth } from "@/lib/useRequireAuth";
import { useDailyTask, markTaskDone } from "@/lib/useDailyTask";
import { ArrowLeft, Home, Loader2 } from "lucide-react";

export default function WritingPage({ params }: { params: Promise<{ day: string }> }) {
  const { day } = use(params);
  const dayNumber = Number(day);
  const session = useRequireAuth();
  const router = useRouter();
  const { task, loading } = useDailyTask(dayNumber);
  const [essay, setEssay] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  if (!session || loading) {
    return (
      <div className="exam-shell flex min-h-screen items-center justify-center">
        <p className="text-neutral-400">Loading...</p>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="exam-shell flex min-h-screen items-center justify-center">
        <p className="text-neutral-400">No task found for this day.</p>
      </div>
    );
  }

  const wordCount = essay.trim().split(/\s+/).filter(Boolean).length;
  const minWords = task.writing_min_words || 50;
  const canSubmit = wordCount >= minWords;

  async function handleComplete() {
    if (!canSubmit) return;
    setIsSaving(true);
    // Note: this is a one-time submission - cannot be edited once completed
    await markTaskDone(session!.id, dayNumber, "writing_done", { writing_answer: essay });
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
              <p className="serif-display text-lg font-semibold">Writing Exercise</p>
              <p className="text-[11px] text-white/60">Day {dayNumber}</p>
            </div>
          </div>
          <Link href="/dashboard" className="text-white/70 hover:text-white" title="Home">
            <Home size={18} />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-8">
        <div className="mb-4 rounded-lg border border-[var(--color-line)] bg-white p-5">
          <p className="passage-text text-[15px] leading-relaxed text-neutral-800">
            {task.writing_prompt}
          </p>
        </div>

        <div className="mb-3 rounded-md border border-[var(--color-amber)]/30 bg-[var(--color-amber)]/10 px-4 py-2.5 text-xs text-[var(--color-ink)]">
          <strong>Note:</strong> You can only submit this exercise once. Please review your
          answer carefully before submitting.
        </div>

        <textarea
          value={essay}
          onChange={(e) => setEssay(e.target.value)}
          placeholder="Write your answer here..."
          rows={10}
          className="w-full resize-none rounded-lg border border-[var(--color-line)] bg-white p-4 text-[15px] leading-relaxed focus:border-[var(--color-teal)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]/20"
        />

        <div className="mt-2 flex items-center justify-between text-sm">
          <span className={wordCount < minWords ? "font-medium text-[var(--color-red)]" : "text-neutral-500"}>
            Word count: {wordCount} / {minWords} (minimum)
          </span>
        </div>

        <button
          onClick={handleComplete}
          disabled={!canSubmit || isSaving}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[var(--color-teal)] py-2.5 text-sm font-medium text-white hover:bg-[var(--color-teal-dark)] disabled:opacity-50"
        >
          {isSaving && <Loader2 size={15} className="animate-spin" />}
          {isSaving ? "Saving..." : "Final Submit"}
        </button>
      </main>
    </div>
  );
}
