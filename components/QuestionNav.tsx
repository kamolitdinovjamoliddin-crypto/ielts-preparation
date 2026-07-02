"use client";

interface QuestionNavProps {
  totalQuestions: number;
  currentIndex: number;
  answeredIds: Set<number>;
  onNavigate: (index: number) => void;
}

export default function QuestionNav({
  totalQuestions,
  currentIndex,
  answeredIds,
  onNavigate,
}: QuestionNavProps) {
  return (
    <div className="exam-topbar border-t border-white/10 px-4 py-2">
      <div className="flex items-center gap-1.5 overflow-x-auto">
        {Array.from({ length: totalQuestions }, (_, i) => {
          const isAnswered = answeredIds.has(i);
          const isCurrent = i === currentIndex;
          return (
            <button
              key={i}
              onClick={() => onNavigate(i)}
              className={`question-nav-btn flex h-8 w-8 shrink-0 items-center justify-center rounded text-xs font-semibold ${
                isCurrent
                  ? "bg-[var(--color-teal)] text-white ring-2 ring-white"
                  : isAnswered
                  ? "bg-white/25 text-white"
                  : "bg-white/5 text-white/60 hover:bg-white/15"
              }`}
              aria-label={`Savol ${i + 1}${isAnswered ? " (javob berilgan)" : ""}`}
              aria-current={isCurrent}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
