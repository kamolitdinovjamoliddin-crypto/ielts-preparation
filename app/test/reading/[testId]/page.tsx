"use client";

import { useState, useMemo, use } from "react";
import { useRouter } from "next/navigation";
import { readingTests } from "@/data/readingTests";
import { ReadingTest } from "@/lib/types";
import { getGeneratedTest } from "@/lib/generatedTestStorage";
import ExamTimer from "@/components/ExamTimer";
import QuestionNav from "@/components/QuestionNav";
import QuestionRenderer from "@/components/QuestionRenderer";
import { scoreQuestions } from "@/lib/scoring";
import { calculateReadingBand } from "@/lib/bandCalculator";
import { saveResult, generateId } from "@/lib/storage";
import { ChevronLeft, ChevronRight, Flag } from "lucide-react";

function resolveTest(testId: string): ReadingTest {
  const staticTest = readingTests.find((t) => t.id === testId);
  if (staticTest) return staticTest;
  const generated = getGeneratedTest<ReadingTest>(testId);
  if (generated) return generated;
  return readingTests[0];
}

export default function ReadingExamPage({ params }: { params: Promise<{ testId: string }> }) {
  const { testId } = use(params);
  const router = useRouter();
  const test: ReadingTest = useMemo(() => resolveTest(testId), [testId]);

  // Barcha savollarni passage bo'yicha tekis ro'yxatga aylantiramiz, lekin passage bilan bog'liqligini saqlaymiz
  const allQuestions = useMemo(
    () =>
      test.passages.flatMap((p) =>
        p.questions.map((q) => ({ ...q, passageId: p.id, passageTitle: p.title }))
      ),
    [test]
  );

  const [currentPassageIdx, setCurrentPassageIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [startTime] = useState(Date.now());
  const [submitted, setSubmitted] = useState(false);

  const currentPassage = test.passages[currentPassageIdx];

  // Global savol indeksini hisoblash (navigatsiya uchun)
  const globalQuestionIndex = (passageIdx: number, localIdx: number) => {
    let idx = 0;
    for (let i = 0; i < passageIdx; i++) idx += test.passages[i].questions.length;
    return idx + localIdx;
  };

  const answeredIds = new Set(
    allQuestions
      .map((q, i) => (answers[q.id] ? i : -1))
      .filter((i) => i !== -1)
  );

  function handleSubmit() {
    const { correct, total } = scoreQuestions(allQuestions, answers);
    const band = calculateReadingBand(correct, total);
    const durationTakenSeconds = Math.round((Date.now() - startTime) / 1000);

    const resultId = generateId();
    saveResult({
      id: resultId,
      module: "reading",
      testId: test.id,
      testTitle: test.title,
      date: new Date().toISOString(),
      durationTakenSeconds,
      score: correct,
      totalQuestions: total,
      bandScore: band,
      rawAnswers: answers,
    });

    router.push(`/results/${resultId}`);
  }

  function handleNavigate(globalIdx: number) {
    let remaining = globalIdx;
    for (let i = 0; i < test.passages.length; i++) {
      if (remaining < test.passages[i].questions.length) {
        setCurrentPassageIdx(i);
        return;
      }
      remaining -= test.passages[i].questions.length;
    }
  }

  return (
    <div className="exam-shell flex h-screen flex-col overflow-hidden">
      {/* Top bar */}
      <header className="exam-topbar flex items-center justify-between px-4 py-2.5">
        <div>
          <p className="serif-display text-sm font-semibold">{test.title}</p>
          <p className="text-[11px] text-white/60">
            Passage {currentPassageIdx + 1} / {test.passages.length}: {currentPassage.title}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <ExamTimer durationSeconds={test.durationMinutes * 60} onExpire={handleSubmit} />
          <button
            onClick={() => {
              if (confirm("Testni yakunlab, natijani ko'rishni xohlaysizmi?")) handleSubmit();
            }}
            className="rounded-md bg-[var(--color-teal)] px-4 py-1.5 text-sm font-medium text-white hover:bg-[var(--color-teal-dark)]"
          >
            Testni yakunlash
          </button>
        </div>
      </header>

      {/* Split content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Passage panel */}
        <div className="w-1/2 overflow-y-auto border-r border-[var(--color-line)] bg-white px-8 py-6">
          <h2 className="serif-display mb-4 text-xl font-semibold text-[var(--color-navy)]">
            {currentPassage.title}
          </h2>
          <div className="passage-text space-y-4 text-[15px] text-neutral-800">
            {currentPassage.paragraphs.map((p, i) => (
              <p key={i}>
                <span className="mr-1 font-semibold text-neutral-400">{String.fromCharCode(65 + i)}</span>
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Questions panel */}
        <div className="w-1/2 overflow-y-auto bg-[var(--color-paper-dim)] px-6 py-6">
          <div className="space-y-3">
            {currentPassage.questions.map((q, localIdx) => {
              const globalIdx = globalQuestionIndex(currentPassageIdx, localIdx);
              return (
                <QuestionRenderer
                  key={q.id}
                  question={q}
                  questionNumber={globalIdx + 1}
                  value={answers[q.id] || ""}
                  onChange={(val) => setAnswers((prev) => ({ ...prev, [q.id]: val }))}
                />
              );
            })}
          </div>

          {/* Passage navigation */}
          <div className="mt-6 flex items-center justify-between">
            <button
              disabled={currentPassageIdx === 0}
              onClick={() => setCurrentPassageIdx((i) => Math.max(0, i - 1))}
              className="flex items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-3 py-1.5 text-sm font-medium text-neutral-600 disabled:opacity-40"
            >
              <ChevronLeft size={15} /> Oldingi passage
            </button>
            <button
              disabled={currentPassageIdx === test.passages.length - 1}
              onClick={() => setCurrentPassageIdx((i) => Math.min(test.passages.length - 1, i + 1))}
              className="flex items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-3 py-1.5 text-sm font-medium text-neutral-600 disabled:opacity-40"
            >
              Keyingi passage <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom question nav */}
      <QuestionNav
        totalQuestions={allQuestions.length}
        currentIndex={globalQuestionIndex(currentPassageIdx, 0)}
        answeredIds={answeredIds}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
