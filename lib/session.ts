import { StudentSession } from "./dbTypes";

const SESSION_KEY = "ielts_student_session";

export function saveSession(session: StudentSession): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function getSession(): StudentSession | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as StudentSession;
  } catch {
    return null;
  }
}

export function clearSession(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SESSION_KEY);
}

export function updateSessionField<K extends keyof StudentSession>(
  key: K,
  value: StudentSession[K]
): void {
  const session = getSession();
  if (!session) return;
  session[key] = value;
  saveSession(session);
}
