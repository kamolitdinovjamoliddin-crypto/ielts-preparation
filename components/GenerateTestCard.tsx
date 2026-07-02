"use client";

import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";

interface GenerateTestCardProps {
  apiEndpoint: string;
  moduleLabel: string;
  onGenerated: (data: unknown) => void;
  supportsDifficulty?: boolean;
  supportsTopic?: boolean;
}

export default function GenerateTestCard({
  apiEndpoint,
  moduleLabel,
  onGenerated,
  supportsDifficulty = true,
  supportsTopic = false,
}: GenerateTestCardProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("medium");
  const [topic, setTopic] = useState("");

  async function handleGenerate() {
    setIsGenerating(true);
    setError(null);
    try {
      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ difficulty, topic: topic.trim() || undefined }),
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Generatsiya qilishda xatolik");
      }
      const data = await res.json();
      onGenerated(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Noma'lum xatolik");
      setIsGenerating(false);
    }
  }

  return (
    <div className="rounded-lg border-2 border-dashed border-[var(--color-teal)]/40 bg-[var(--color-teal)]/5 p-5">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--color-teal)] text-white">
          <Sparkles size={18} />
        </div>
        <div>
          <p className="serif-display text-base font-semibold text-[var(--color-navy)]">
            AI yordamida yangi {moduleLabel} testi yarating
          </p>
          <p className="text-xs text-neutral-500">
            Har safar original, takrorlanmaydigan test generatsiya qilinadi
          </p>
        </div>
      </div>

      <div className="mb-3 flex flex-wrap items-center gap-3">
        {supportsDifficulty && (
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-neutral-500">Qiyinlik:</span>
            {(["easy", "medium", "hard"] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`rounded-md px-2.5 py-1 text-xs font-medium ${
                  difficulty === d
                    ? "bg-[var(--color-navy)] text-white"
                    : "bg-white text-neutral-500 hover:bg-neutral-100"
                }`}
              >
                {d === "easy" ? "Oson" : d === "medium" ? "O'rtacha" : "Qiyin"}
              </button>
            ))}
          </div>
        )}
        {supportsTopic && (
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Mavzu (ixtiyoriy, masalan: texnologiya)"
            className="rounded-md border border-[var(--color-line)] px-2.5 py-1 text-xs focus:border-[var(--color-teal)] focus:outline-none"
          />
        )}
      </div>

      {error && <p className="mb-3 text-xs text-[var(--color-red)]">{error}</p>}

      <button
        onClick={handleGenerate}
        disabled={isGenerating}
        className="flex items-center gap-2 rounded-md bg-[var(--color-teal)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-teal-dark)] disabled:opacity-60"
      >
        {isGenerating ? <Loader2 size={15} className="animate-spin" /> : <Sparkles size={15} />}
        {isGenerating ? "Generatsiya qilinmoqda... (30-60 soniya)" : "Yangi test yaratish"}
      </button>
    </div>
  );
}
