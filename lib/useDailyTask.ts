"use client";

import { useEffect, useState } from "react";
import { DailyTask } from "./dbTypes";

export function useDailyTask(dayNumber: number) {
  const [task, setTask] = useState<DailyTask | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/daily-task?dayNumber=${dayNumber}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) setTask(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [dayNumber]);

  return { task, loading };
}

export async function markTaskDone(
  studentId: string,
  dayNumber: number,
  field: string,
  extra: Record<string, unknown> = {}
) {
  await fetch("/api/daily-progress", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      studentId,
      dayNumber,
      updates: { [field]: true, ...extra },
    }),
  });
}
