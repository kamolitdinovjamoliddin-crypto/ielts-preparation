"use client";

import { useEffect, useRef, useState } from "react";

interface ExamTimerProps {
  durationSeconds: number;
  onExpire: () => void;
  paused?: boolean;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

export default function ExamTimer({ durationSeconds, onExpire, paused = false }: ExamTimerProps) {
  const [remaining, setRemaining] = useState(durationSeconds);
  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  useEffect(() => {
    if (paused) return;
    if (remaining <= 0) {
      onExpireRef.current();
      return;
    }
    const interval = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onExpireRef.current();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [paused, remaining === durationSeconds]);

  const isLow = remaining <= 300; // 5 daqiqadan kam
  const isCritical = remaining <= 60;

  return (
    <div
      className={`timer-mono flex items-center gap-2 rounded px-3 py-1.5 text-sm font-medium ${
        isCritical
          ? "bg-[var(--color-red)] text-white"
          : isLow
          ? "bg-[var(--color-amber)] text-white"
          : "bg-white/10 text-white"
      }`}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
      {formatTime(remaining)}
    </div>
  );
}
