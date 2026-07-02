"use client";

import { useState, useMemo, use } from "react";
import { useRouter } from "next/navigation";
import { listeningTests } from "@/data/listeningTests";
import { ListeningTest, Question } from "@/lib/types";
import { getGeneratedTest } from "@/lib/generatedTestStorage";
import ExamTimer from "@/components/ExamTimer";
import QuestionNav from "@/components/QuestionNav";
import QuestionRenderer from "@/components/QuestionRenderer";
import { scoreQuestions } from "@/lib/scoring";
import { calculateListeningBand } from "@/lib/bandCalculator";
import { saveResult, generateId } from "@/lib/storage";
import { ChevronLeft, ChevronRight, Eye, EyeOff } from "lucide-react";

function resolveTest(testId: string): ListeningTest {
  const staticTest = listeningTests.find((t) => t.id === testId);
  if (staticTest) return staticTest;
  const generated = getGeneratedTest<ListeningTest>(testId);
  if (generated) return generated;
  return listeningTests[0];
}

export default function ListeningExamPage({ params }: { params: Promise<{ testId: string }> }) {
  const { testId } = use(params);
  const router = useRouter();
  const test: ListeningTest = useMemo(() => resolveTest(testId), [testId]);

  const allQuestions = useMemo(() => {
    const flat: (Question & { sectionId: string })[] = [];
    for (const s of test.sections) {
      for (const q of s.questions) {
        flat.push({ ...q, sectionId: s.id });
      }
    }
    return flat;
  }, [test]);

  const [currentSectionIdx, setCurrentSectionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [startTime] = useState(Date.now());
  const [showTranscript, setShowTranscript] = useState(false);

  const currentSection = test.sections[currentSectionIdx];

  const globalQuestionIndex = (sectionIdx: number, localIdx: number) => {
    let idx = 0;
    for (let i = 0; i < sectionIdx; i++) idx += test.sections[i].questions.length;
    return idx + localIdx;
  };

  const answeredIds = new Set(
    allQuestions.map((q, i) => (answers[q.id] ? i : -1)).filter((i) => i !== -1)
  );

  function handleSubmit() {
    const { correct, total } = scoreQuestions(allQuestions, answers);
    const band = calculateListeningBand(correct, total);
    const durationTakenSeconds = Math.round((Date.now() - startTime) / 1000);

    const resultId = generateId();
    saveResult({
      id: resultId,
      module: "listening",
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
    for (let i = 0; i < test.sections.length; i++) {
      if (remaining < test.sections[i].questions.length) {
        setCurrentSectionIdx(i);
        return;
      }
      remaining -= test.sections[i].questions.length;
    }
  }

  return (
    <div className="exam-shell flex h-screen flex-col overflow-hidden">
      <header className="exam-topbar flex items-center justify-between px-4 py-2.5">
        <div>
          <p className="serif-display text-sm font-semibold">{test.title}</p>
          <p className="text-[11px] text-white/60">
            Section {currentSectionIdx + 1} / {test.sections.length}: {currentSection.title}
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

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/2 overflow-y-auto border-r border-[var(--color-line)] bg-white px-8 py-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="serif-display text-xl font-semibold text-[var(--color-navy)]">
              {currentSection.title}
            </h2>
            <button
              onClick={() => setShowTranscript((v) => !v)}
              className="flex items-center gap-1.5 rounded-md border border-[var(--color-line)] px-3 py-1.5 text-xs font-medium text-neutral-600 hover:bg-[var(--color-paper-dim)]"
            >
              {showTranscript ? <EyeOff size={14} /> : <Eye size={14} />}
              {showTranscript ? "Matnni yashirish" : "Matnni ko'rsatish"}
            </button>
          </div>

          {!showTranscript ? (
            <div className="flex h-64 flex-col items-center justify-center rounded-lg border-2 border-dashed border-[var(--color-line)] bg-[var(--color-paper-dim)] text-center">
              <p className="mb-1 text-sm font-medium text-neutral-500">
                🎧 Audio versiyasi tez orada qo'shiladi
              </p>
              <p className="max-w-xs text-xs text-neutral-400">
                Hozircha mashq qilish uchun &quot;Matnni ko&apos;rsatish&quot; tugmasini bosib,
                suhbatni o&apos;qing va savollarga javob bering.
              </p>
            </div>
          ) : (
            <div className="passage-text whitespace-pre-line text-[15px] text-neutral-800">
              {currentSection.transcript}
            </div>
          )}
        </div>

        <div className="w-1/2 overflow-y-auto bg-[var(--color-paper-dim)] px-6 py-6">
          <div className="space-y-3">
            {currentSection.questions.map((q: Question, localIdx: number) => {
              const globalIdx = globalQuestionIndex(currentSectionIdx, localIdx);
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

          <div className="mt-6 flex items-center justify-between">
            <button
              disabled={currentSectionIdx === 0}
              onClick={() => setCurrentSectionIdx((i) => Math.max(0, i - 1))}
              className="flex items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-3 py-1.5 text-sm font-medium text-neutral-600 disabled:opacity-40"
            >
              <ChevronLeft size={15} /> Oldingi qism
            </button>
            <button
              disabled={currentSectionIdx === test.sections.length - 1}
              onClick={() => setCurrentSectionIdx((i) => Math.min(test.sections.length - 1, i + 1))}
              className="flex items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-3 py-1.5 text-sm font-medium text-neutral-600 disabled:opacity-40"
            >
              Keyingi qism <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>

      <QuestionNav
        totalQuestions={allQuestions.length}
        currentIndex={globalQuestionIndex(currentSectionIdx, 0)}
        answeredIds={answeredIds}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
