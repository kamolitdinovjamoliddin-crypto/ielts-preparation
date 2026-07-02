import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { extractJson } from "@/lib/extractJson";
import { ListeningTest } from "@/lib/types";

export const maxDuration = 60;

const SYSTEM_PROMPT = `Siz IELTS Listening test yaratuvchi mutaxassissiz. Sizning vazifangiz - Cambridge IELTS kitoblariga USLUB, FORMAT va QIYINLIK DARAJASI jihatidan o'xshash, LEKIN 100% ORIGINAL Listening test (transcript ko'rinishida) yaratish.

Talablar - 4 ta section yaratish kerak (rasmiy IELTS Listening formatiga mos):
- Section 1: Ikki kishi orasidagi kundalik suhbat (masalan, bron qilish, ma'lumot so'rash) - 6 savol
- Section 2: Bir kishining monologi (masalan, joy haqida ma'lumot, qoidalar tushuntirish) - 6 savol
- Section 3: Ikki yoki uch kishi orasidagi akademik suhbat (masalan, talaba va o'qituvchi, loyiha muhokamasi) - 5 savol
- Section 4: Akademik ma'ruza/lektsiya (bir kishi monologi, ilmiy mavzu) - 5 savol

Har bir section uchun transcript (dialog yoki monolog matni) va unga mos savollar yaratilsin. Savol turlari: fill-blank, multiple-choice, short-answer, true-false-not-given.

MUHIM: har bir "fill-blank" va "short-answer" savoliga albatta "wordLimit" maydonini qo'shing - "ONE WORD ONLY", "NO MORE THAN TWO WORDS" yoki "NO MORE THAN THREE WORDS" qiymatlaridan birini tanlang (real IELTS qoidasiga mos).

Javobni FAQAT quyidagi JSON formatida qaytaring, hech qanday qo'shimcha matn yoki markdown belgilarisiz:

{
  "title": "Listening Test - AI Generated",
  "durationMinutes": 30,
  "sections": [
    {
      "id": "section-1",
      "title": "Section 1: <qisqa tavsif>",
      "transcript": "<to'liq dialog/monolog matni, agar dialog bo'lsa 'Speaker1: ...\\nSpeaker2: ...' formatida>",
      "questions": [
        {
          "id": "l1-q1",
          "type": "fill-blank" | "multiple-choice" | "short-answer" | "true-false-not-given",
          "text": "<savol matni>",
          "options": ["..."] (faqat multiple-choice uchun),
          "correctAnswer": "<javob>" | ["<variant1>", "<variant2>"],
          "wordLimit": "ONE WORD ONLY" | "NO MORE THAN TWO WORDS" | "NO MORE THAN THREE WORDS" (faqat fill-blank/short-answer uchun)
        }
      ]
    }
  ]
}

MUHIM: id qiymatlari unique bo'lsin (l1-q1, l2-q1, va h.k.).`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const difficulty = body.difficulty || "medium";

    const anthropic = new Anthropic();

    const userMessage = `Yangi IELTS Listening test yarat.
Qiyinlik darajasi: ${difficulty === "easy" ? "Band 5-6 (oddiy so'z boyligi, sekin tushuniladigan)" : difficulty === "hard" ? "Band 7.5-9 (murakkab so'z boyligi, tezroq sur'at)" : "Band 6-7 (o'rtacha)"}

Faqat JSON formatda javob qaytar.`;

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 8000,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userMessage }],
    });

    const textBlock = response.content.find((b) => b.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      throw new Error("AI javob bermadi");
    }

    const parsed = extractJson<ListeningTest>(textBlock.text);
    parsed.id = `listening-generated-${Date.now()}`;

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Listening generation error:", error);
    return NextResponse.json(
      { error: "Test generatsiya qilishda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring." },
      { status: 500 }
    );
  }
}
