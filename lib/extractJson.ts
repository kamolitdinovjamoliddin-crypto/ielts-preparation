// Claude javobidan JSON qismini ishonchli ajratib olish.
// AI ba'zan ```json fence bilan, ba'zan qo'shimcha izoh bilan, ba'zan toza JSON qaytarishi mumkin.

export function extractJson<T>(rawText: string): T {
  let text = rawText.trim();

  // Markdown code fence'larni olib tashlash
  text = text.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "");

  // Agar matnda JSON obyektidan oldin/keyin qo'shimcha so'zlar bo'lsa,
  // birinchi '{' va oxirgi '}' orasidagi qismni olamiz.
  const firstBrace = text.indexOf("{");
  const lastBrace = text.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    text = text.slice(firstBrace, lastBrace + 1);
  }

  return JSON.parse(text) as T;
}
