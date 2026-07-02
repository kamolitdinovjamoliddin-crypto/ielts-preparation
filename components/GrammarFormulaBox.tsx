"use client";

import { GrammarFormulaPart } from "@/lib/dbTypes";

const COLOR_MAP: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  green: { bg: "bg-[var(--color-teal)]/10", text: "text-[var(--color-teal-dark)]", border: "border-[var(--color-teal)]/30" },
  amber: { bg: "bg-[var(--color-amber)]/10", text: "text-[var(--color-amber)]", border: "border-[var(--color-amber)]/30" },
  red: { bg: "bg-[var(--color-red)]/10", text: "text-[var(--color-red)]", border: "border-[var(--color-red)]/30" },
  purple: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
};

interface FormulaRowProps {
  label: string;
  parts: GrammarFormulaPart[];
}

function FormulaRow({ label, parts }: FormulaRowProps) {
  return (
    <div className="mb-3 last:mb-0">
      <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-400">
        {label}
      </p>
      <div className="flex flex-wrap items-center gap-1.5">
        {parts.map((p, i) => {
          const colors = COLOR_MAP[p.color] || COLOR_MAP.blue;
          return (
            <div key={i} className="flex items-center gap-1.5">
              <div
                className={`rounded-md border px-3 py-1.5 ${colors.bg} ${colors.border}`}
              >
                <p className={`font-mono text-sm font-bold ${colors.text}`}>{p.part}</p>
                <p className={`text-[10px] ${colors.text} opacity-70`}>{p.label}</p>
              </div>
              {i < parts.length - 1 && <span className="text-neutral-300">+</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface GrammarFormulaBoxProps {
  formula: GrammarFormulaPart[][];
  formulaLabels: string[];
}

export default function GrammarFormulaBox({ formula, formulaLabels }: GrammarFormulaBoxProps) {
  if (!formula || formula.length === 0) return null;

  return (
    <div className="mb-5 rounded-lg border-2 border-dashed border-[var(--color-navy)]/20 bg-[var(--color-navy)]/[0.03] p-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--color-navy)]">
        Formula
      </p>
      {formula.map((row, i) => (
        <FormulaRow key={i} label={formulaLabels[i] || ""} parts={row} />
      ))}
    </div>
  );
}
