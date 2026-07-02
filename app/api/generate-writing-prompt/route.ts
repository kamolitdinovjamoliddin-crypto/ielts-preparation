import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { extractJson } from "@/lib/extractJson";
import { WritingTest } from "@/lib/types";

export const maxDuration = 30;

const SYSTEM_PROMPT = `Siz IELTS Writing test yaratuvchi mutaxassissiz. Cambridge IELTS uslubida, lekin original Writing Task 1 va Task 2 topshiriqlarini yaratasiz.

Task 1: Grafik, jadval, diagramma yoki jarayonni tasvirlash (Academic format). Bunda haqiqiy rasm yo'q, shuning uchun siz "imageDescription" maydonida grafik/jarayon ma'lumotlarini batafsil matn shaklida bering (masalan, raqamlar, foizlar, bosqichlar) - foydalanuvchi shu ma'lumotlar asosida yozadi.

Task 2: Fikr-mulohaza/insho mavzusi (opinion, discussion, problem-solution, advantages-disadvantages turlaridan biri).

Javobni FAQAT quyidagi JSON formatida qaytaring:

{
  "title": "Writing Test - AI Generated",
  "tasks": [
    {
      "id": "task-1",
      "taskNumber": 1,
      "prompt": "<topshiriq matni>",
      "imageDescription": "<grafik/jarayon ma'lumotlari batafsil matn shaklida>",
      "minWords": 150,
      "durationMinutes": 20
    },
    {
      "id": "task-2",
      "taskNumber": 2,
      "prompt": "<insho mavzusi>",
      "minWords": 250,
      "durationMinutes": 40
    }
  ]
}`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const topic = body.topic || "";

    const anthropic = new Anthropic();

    const userMessage = `Yangi IELTS Writing Task 1 va Task 2 topshiriqlarini yarat.
${topic ? `Task 2 mavzusi ${topic} sohasiga tegishli bo'lsin.` : "Mavzu qiziqarli va turli-tuman bo'lsin."}
Faqat JSON formatda javob qaytar.`;

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

    const parsed = extractJson<WritingTest>(textBlock.text);
    parsed.id = `writing-generated-${Date.now()}`;

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Writing prompt generation error:", error);
    return NextResponse.json(
      { error: "Topshiriq generatsiya qilishda xatolik yuz berdi." },
      { status: 500 }
    );
  }
}
