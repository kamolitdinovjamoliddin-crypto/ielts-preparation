"use client";

import { useState, useMemo, use } from "react";
import { useRouter } from "next/navigation";
import { writingTests } from "@/data/writingTests";
import ExamTimer from "@/components/ExamTimer";
import { saveResult, generateId } from "@/lib/storage";
import { WritingFeedback, WritingTest } from "@/lib/types";
import { getGeneratedTest } from "@/lib/generatedTestStorage";
import { Loader2 } from "lucide-react";

function resolveTest(testId: string): WritingTest {
  const staticTest = writingTests.find((t) => t.id === testId);
  if (staticTest) return staticTest;
  const generated = getGeneratedTest<WritingTest>(testId);
  if (generated) return generated;
  return writingTests[0];
}

export default function WritingExamPage({ params }: { params: Promise<{ testId: string }> }) {
  const { testId } = use(params);
  const router = useRouter();
  const test: WritingTest = useMemo(() => resolveTest(testId), [testId]);

  const [currentTaskIdx, setCurrentTaskIdx] = useState(0);
  const [essays, setEssays] = useState<Record<string, string>>({});
  const [startTime] = useState(Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentTask = test.tasks[currentTaskIdx];
  const currentEssay = essays[currentTask.id] || "";
  const wordCount = currentEssay.trim().split(/\s+/).filter(Boolean).length;

  async function handleFinalSubmit() {
    setIsSubmitting(true);
    setError(null);

    try {
      // Har bir task uchun AI baholashni so'rovga yuboramiz
      const feedbacks: WritingFeedback[] = [];

      for (const task of test.tasks) {
        const essay = essays[task.id] || "";
        if (essay.trim().split(/\s+/).filter(Boolean).length < 20) {
          feedbacks.push({
            taskAchievement: 0,
            coherenceCohesion: 0,
            lexicalResource: 0,
            grammaticalRange: 0,
            overallBand: 0,
            strengths: [],
            weaknesses: ["Javob yozilmagan yoki juda qisqa"],
            detailedFeedback: "Bu topshiriqqa javob yozilmadi yoki juda qisqa edi.",
            wordCount: 0,
          });
          continue;
        }

        const res = await fetch("/api/evaluate-writing", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            taskNumber: task.taskNumber,
            prompt: task.prompt,
            imageDescription: task.imageDescription,
            essay,
            minWords: task.minWords,
          }),
        });

        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.error || "Baholashda xatolik");
        }

        const feedback: WritingFeedback = await res.json();
        feedbacks.push(feedback);
      }

      // Umumiy band - ikkita task'ning og'irlik bilan o'rtachasi (Task1: 1/3, Task2: 2/3 - rasmiy IELTS formula)
      const task1Feedback = feedbacks[0];
      const task2Feedback = feedbacks[1];
      const overallBand =
        Math.round(((task1Feedback.overallBand * 1 + task2Feedback.overallBand * 2) / 3) * 2) / 2;

      const durationTakenSeconds = Math.round((Date.now() - startTime) / 1000);
      const resultId = generateId();

      saveResult({
        id: resultId,
        module: "writing",
        testId: test.id,
        testTitle: test.title,
        date: new Date().toISOString(),
        durationTakenSeconds,
        bandScore: overallBand,
        rawAnswers: essays,
        feedback: task2Feedback, // asosiy feedback Task 2 dan (kattaroq vazn)
      });

      // Ikkala task feedback'ini ham saqlash uchun localStorage'ga alohida yozamiz
      if (typeof window !== "undefined") {
        localStorage.setItem(
          `writing_full_feedback_${resultId}`,
          JSON.stringify({ task1: task1Feedback, task2: task2Feedback })
        );
      }

      router.push(`/results/${resultId}?type=writing`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Noma'lum xatolik yuz berdi");
      setIsSubmitting(false);
    }
  }

  return (
    <div className="exam-shell flex h-screen flex-col overflow-hidden">
      <header className="exam-topbar flex items-center justify-between px-4 py-2.5">
        <div>
          <p className="serif-display text-sm font-semibold">{test.title}</p>
          <p className="text-[11px] text-white/60">
            Task {currentTask.taskNumber} / 2 &middot; Minimal {currentTask.minWords} so&apos;z
          </p>
        </div>
        <div className="flex items-center gap-3">
          <ExamTimer
            durationSeconds={test.tasks.reduce((a, t) => a + t.durationMinutes * 60, 0)}
            onExpire={handleFinalSubmit}
            paused={isSubmitting}
          />
          <button
            onClick={handleFinalSubmit}
            disabled={isSubmitting}
            className="flex items-center gap-2 rounded-md bg-[var(--color-teal)] px-4 py-1.5 text-sm font-medium text-white hover:bg-[var(--color-teal-dark)] disabled:opacity-60"
          >
            {isSubmitting && <Loader2 size={14} className="animate-spin" />}
            {isSubmitting ? "Baholanmoqda..." : "Testni yakunlash va baholash"}
          </button>
        </div>
      </header>

      {error && (
        <div className="bg-[var(--color-red)]/10 px-6 py-2 text-sm text-[var(--color-red)]">
          {error}
        </div>
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Prompt panel */}
        <div className="w-2/5 overflow-y-auto border-r border-[var(--color-line)] bg-white px-7 py-6">
          <div className="mb-3 flex gap-2">
            {test.tasks.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setCurrentTaskIdx(i)}
                className={`rounded-md px-3 py-1 text-xs font-semibold ${
                  i === currentTaskIdx
                    ? "bg-[var(--color-navy)] text-white"
                    : "bg-[var(--color-paper-dim)] text-neutral-500 hover:bg-neutral-200"
                }`}
              >
                Task {t.taskNumber}
              </button>
            ))}
          </div>
          <p className="passage-text text-[15px] leading-relaxed text-neutral-800">
            {currentTask.prompt}
          </p>

          {currentTask.imageDescription && (
            <div className="mt-4 rounded-md border border-[var(--color-line)] bg-[var(--color-paper-dim)] p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                Grafik / Diagramma tavsifi
              </p>
              <pre className="whitespace-pre-wrap text-sm text-neutral-700">
                {currentTask.imageDescription}
              </pre>
            </div>
          )}
        </div>

        {/* Essay editor */}
        <div className="flex w-3/5 flex-col bg-[var(--color-paper-dim)] px-7 py-6">
          <textarea
            value={currentEssay}
            onChange={(e) =>
              setEssays((prev) => ({ ...prev, [currentTask.id]: e.target.value }))
            }
            placeholder="Javobingizni shu yerga yozing..."
            className="flex-1 resize-none rounded-lg border border-[var(--color-line)] bg-white p-5 text-[15px] leading-relaxed focus:border-[var(--color-teal)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]/20"
          />
          <div className="mt-3 flex items-center justify-between text-sm">
            <span
              className={
                wordCount < currentTask.minWords ? "font-medium text-[var(--color-red)]" : "text-neutral-500"
              }
            >
              So&apos;zlar soni: {wordCount} / {currentTask.minWords} (minimal)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
