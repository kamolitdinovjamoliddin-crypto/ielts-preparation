import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { extractJson } from "@/lib/extractJson";
import { WritingFeedback } from "@/lib/types";

export const maxDuration = 60;

interface EvaluateWritingBody {
  taskNumber: 1 | 2;
  prompt: string;
  imageDescription?: string;
  essay: string;
  minWords: number;
}

const SYSTEM_PROMPT = `Siz tajribali IELTS Writing examiner (sertifikatlangan baholovchi) sifatida ishlaysiz. Foydalanuvchi yozgan IELTS Writing Task javobini rasmiy IELTS baholash mezonlari asosida baholaysiz:

Task 1 uchun mezonlar: Task Achievement, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy.
Task 2 uchun mezonlar: Task Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy.

Har bir mezon bo'yicha 0-9 band oralig'ida (0.5 qadam bilan) baho bering, so'ngra umumiy band score'ni hisoblang (4 mezonning o'rtachasi, eng yaqin 0.5 ga yaxlitlangan).

Javobni FAQAT quyidagi JSON formatida qaytaring, hech qanday qo'shimcha matn, izoh yoki markdown belgilarisiz:

{
  "taskAchievement": <raqam>,
  "coherenceCohesion": <raqam>,
  "lexicalResource": <raqam>,
  "grammaticalRange": <raqam>,
  "overallBand": <raqam>,
  "strengths": ["...", "...", "..."],
  "weaknesses": ["...", "...", "..."],
  "detailedFeedback": "<batafsil, konstruktiv feedback, kamida 150 so'z, o'zbek tilida>",
  "correctedHighlights": [
    {"original": "<matndan parcha>", "suggestion": "<tuzatilgan variant>", "reason": "<nima uchun, o'zbek tilida>"}
  ]
}

correctedHighlights da matndagi 3-5 ta eng muhim xato/yaxshilash mumkin bo'lgan joylarni ko'rsating. strengths va weaknesses o'zbek tilida, har biri 2-4 ta band bo'lsin. detailedFeedback batafsil, lekin tushunarli o'zbek tilida yozilishi kerak - foydalanuvchiga aniq nima qilishi kerakligini tushuntirsin.`;

export async function POST(req: NextRequest) {
  try {
    const body: EvaluateWritingBody = await req.json();
    const { taskNumber, prompt, imageDescription, essay, minWords } = body;

    if (!essay || essay.trim().split(/\s+/).length < 20) {
      return NextResponse.json(
        { error: "Essay juda qisqa. Iltimos, to'liq javob yozing." },
        { status: 400 }
      );
    }

    const wordCount = essay.trim().split(/\s+/).filter(Boolean).length;

    const anthropic = new Anthropic();

    const userMessage = `IELTS Writing Task ${taskNumber}

Topshiriq matni:
${prompt}

${imageDescription ? `Grafik/diagram tavsifi:\n${imageDescription}\n` : ""}

Minimal so'z soni talabi: ${minWords}
Foydalanuvchi yozgan so'zlar soni: ${wordCount}

Foydalanuvchining javobi:
"""
${essay}
"""

Yuqoridagi javobni IELTS mezonlari asosida baholang va faqat JSON formatda javob qaytaring.`;

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 2000,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userMessage }],
    });

    const textBlock = response.content.find((b) => b.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      throw new Error("AI javob bermadi");
    }

    const parsed = extractJson<WritingFeedback>(textBlock.text);
    parsed.wordCount = wordCount;

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Writing evaluation error:", error);
    return NextResponse.json(
      { error: "Baholashda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring." },
      { status: 500 }
    );
  }
}
