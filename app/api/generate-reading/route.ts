import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { extractJson } from "@/lib/extractJson";
import { ReadingTest } from "@/lib/types";

export const maxDuration = 60;

const SYSTEM_PROMPT = `Siz IELTS Academic Reading test yaratuvchi mutaxassissiz. Sizning vazifangiz - Cambridge IELTS kitoblariga USLUB, FORMAT va QIYINLIK DARAJASI jihatidan juda o'xshash, LEKIN 100% ORIGINAL (hech qayerdan ko'chirilmagan) Reading test yaratish.

Talablar:
- 3 ta passage yaratish kerak, har biri 600-850 so'zdan iborat akademik uslubdagi original matn (ilm-fan, tarix, ekologiya, psixologiya, texnologiya, jamiyat kabi mavzularda - Cambridge IELTS uslubida)
- Har bir passage 5-7 ta savoldan iborat bo'lsin
- Savol turlari aralash bo'lsin: multiple-choice, true-false-not-given, fill-blank (sentence completion), short-answer
- Passage qiyinligi B2-C1 darajasida (IELTS Academic darajasiga mos)
- Har bir passage 4-6 paragrafdan iborat bo'lsin
- MUHIM: har bir "fill-blank" va "short-answer" savoliga albatta "wordLimit" maydonini qo'shing - "ONE WORD ONLY", "NO MORE THAN TWO WORDS" yoki "NO MORE THAN THREE WORDS" qiymatlaridan birini tanlang (real IELTS qoidasiga mos, javob shu so'z sonidan oshmasligi kerak)

Javobni FAQAT quyidagi JSON formatida qaytaring, hech qanday qo'shimcha matn, izoh yoki markdown belgilarisiz:

{
  "title": "Reading Test - AI Generated",
  "durationMinutes": 60,
  "passages": [
    {
      "id": "passage-1",
      "title": "<passage sarlavhasi>",
      "paragraphs": ["<paragraf 1>", "<paragraf 2>", "..."],
      "questions": [
        {
          "id": "p1-q1",
          "type": "multiple-choice" | "true-false-not-given" | "fill-blank" | "short-answer",
          "text": "<savol matni>",
          "options": ["<variant1>", "..."] (faqat multiple-choice uchun),
          "correctAnswer": "<to'g'ri javob>" | ["<variant1>", "<variant2>"],
          "wordLimit": "ONE WORD ONLY" | "NO MORE THAN TWO WORDS" | "NO MORE THAN THREE WORDS" (faqat fill-blank/short-answer uchun)
        }
      ]
    }
  ]
}

MUHIM: id qiymatlari unique bo'lsin (p1-q1, p1-q2, p2-q1, va h.k.). true-false-not-given uchun correctAnswer faqat "True", "False" yoki "Not Given" bo'lishi kerak.`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const difficulty = body.difficulty || "medium"; // easy, medium, hard
    const topic = body.topic || "";

    const anthropic = new Anthropic();

    const userMessage = `Yangi IELTS Academic Reading test yarat.
Qiyinlik darajasi: ${difficulty === "easy" ? "Band 5-6 (oson)" : difficulty === "hard" ? "Band 7.5-9 (qiyin)" : "Band 6-7 (o'rtacha)"}
${topic ? `Mavzularga ${topic} mavzusi ham kiritilsin (kamida bitta passage).` : "Mavzular har xil va qiziqarli bo'lsin."}

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

    const parsed = extractJson<ReadingTest>(textBlock.text);
    parsed.id = `reading-generated-${Date.now()}`;

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Reading generation error:", error);
    return NextResponse.json(
      { error: "Test generatsiya qilishda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring." },
      { status: 500 }
    );
  }
}
