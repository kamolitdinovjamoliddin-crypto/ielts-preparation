import { TestResult } from "./types";

const STORAGE_KEY = "ielts_mock_results";

export function getAllResults(): TestResult[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as TestResult[];
  } catch {
    return [];
  }
}

export function saveResult(result: TestResult): void {
  if (typeof window === "undefined") return;
  const results = getAllResults();
  results.unshift(result); // eng yangisi tepada
  localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
}

export function getResultById(id: string): TestResult | undefined {
  return getAllResults().find((r) => r.id === id);
}

export function clearAllResults(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

export function getOverallAverageBand(): number | null {
  const results = getAllResults().filter((r) => typeof r.bandScore === "number");
  if (results.length === 0) return null;
  const sum = results.reduce((acc, r) => acc + (r.bandScore || 0), 0);
  return Math.round((sum / results.length) * 2) / 2;
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
