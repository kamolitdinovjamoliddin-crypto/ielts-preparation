"use client";

import { Question } from "@/lib/types";
import { exceedsWordLimit, countWords } from "@/lib/scoring";
import { AlertTriangle } from "lucide-react";

interface QuestionRendererProps {
  question: Question;
  questionNumber: number;
  value: string;
  onChange: (value: string) => void;
}

export default function QuestionRenderer({
  question,
  questionNumber,
  value,
  onChange,
}: QuestionRendererProps) {
  const isOverLimit = exceedsWordLimit(value, question.wordLimit);

  return (
    <div className="rounded-lg border border-[var(--color-line)] bg-white p-5">
      <div className="mb-1 flex gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-navy)] text-xs font-bold text-white">
          {questionNumber}
        </span>
        <p className="pt-0.5 text-[15px] leading-relaxed text-[var(--color-ink)]">{question.text}</p>
      </div>

      {question.wordLimit && (
        <p className="mb-3 pl-10 text-xs font-semibold uppercase tracking-wide text-[var(--color-teal)]">
          {question.wordLimit}
        </p>
      )}

      <div className="pl-10">
        {question.type === "multiple-choice" && question.options && (
          <div className="space-y-2">
            {question.options.map((opt) => (
              <label
                key={opt}
                className={`flex cursor-pointer items-center gap-3 rounded-md border px-3 py-2 text-sm transition-colors ${
                  value === opt
                    ? "border-[var(--color-teal)] bg-[var(--color-teal)]/8"
                    : "border-[var(--color-line)] hover:bg-[var(--color-paper-dim)]"
                }`}
              >
                <input
                  type="radio"
                  name={question.id}
                  checked={value === opt}
                  onChange={() => onChange(opt)}
                  className="h-4 w-4 accent-[var(--color-teal)]"
                />
                {opt}
              </label>
            ))}
          </div>
        )}

        {question.type === "true-false-not-given" && (
          <div className="flex flex-wrap gap-2">
            {["True", "False", "Not Given"].map((opt) => (
              <button
                key={opt}
                onClick={() => onChange(opt)}
                className={`rounded-md border px-4 py-1.5 text-sm font-medium transition-colors ${
                  value === opt
                    ? "border-[var(--color-teal)] bg-[var(--color-teal)] text-white"
                    : "border-[var(--color-line)] bg-white hover:bg-[var(--color-paper-dim)]"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {(question.type === "fill-blank" || question.type === "short-answer") && (
          <div>
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Javobingizni shu yerga yozing..."
              className={`w-full max-w-md rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                isOverLimit
                  ? "border-[var(--color-red)] focus:ring-[var(--color-red)]/20"
                  : "border-[var(--color-line)] focus:border-[var(--color-teal)] focus:ring-[var(--color-teal)]/20"
              }`}
            />
            {isOverLimit && (
              <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[var(--color-red)]">
                <AlertTriangle size={13} />
                {countWords(value)} so&apos;z yozdingiz, lekin limit: {question.wordLimit}. Bu
                haqiqiy imtihonda javob noto&apos;g&apos;ri hisoblanadi.
              </p>
            )}
          </div>
        )}

        {question.type === "matching" && question.options && (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full max-w-md rounded-md border border-[var(--color-line)] px-3 py-2 text-sm focus:border-[var(--color-teal)] focus:outline-none"
          >
            <option value="">Variantni tanlang...</option>
            {question.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}
