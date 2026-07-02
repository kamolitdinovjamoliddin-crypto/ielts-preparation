import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { extractJson } from "@/lib/extractJson";
import { SpeakingTest } from "@/lib/types";

export const maxDuration = 30;

const SYSTEM_PROMPT = `Siz IELTS Speaking test yaratuvchi mutaxassissiz. Cambridge/rasmiy IELTS Speaking formatiga mos, lekin original Speaking savollarini yaratasiz.

Part 1: Tanish mavzu bo'yicha 4-5 ta oddiy savol (masalan, ish, oila, hobbi, shahar haqida).
Part 2: Cue Card - bitta mavzu va 4 ta bullet point (nima haqida gapirish kerakligi).
Part 3: Part 2 mavzusi bilan bog'liq, lekin chuqurroq, abstrakt fikr-mulohaza talab qiluvchi 4-5 ta savol.

Javobni FAQAT quyidagi JSON formatida qaytaring:

{
  "title": "Speaking Test - AI Generated",
  "parts": [
    {
      "id": "part-1",
      "partNumber": 1,
      "title": "Part 1: Introduction and Interview",
      "prompt": "<mavzu nomi va savollar ro'yxati matn shaklida, har bir savol yangi qatorda raqamlangan>",
      "speakSeconds": 240
    },
    {
      "id": "part-2",
      "partNumber": 2,
      "title": "Part 2: Long Turn (Cue Card)",
      "prompt": "<cue card mavzusi qisqacha>",
      "cueCard": {
        "topic": "<to'liq mavzu matni>",
        "bulletPoints": ["<punkt1>", "<punkt2>", "<punkt3>", "<punkt4>"]
      },
      "prepSeconds": 60,
      "speakSeconds": 120
    },
    {
      "id": "part-3",
      "partNumber": 3,
      "title": "Part 3: Discussion",
      "prompt": "<savollar ro'yxati matn shaklida, har biri raqamlangan>",
      "speakSeconds": 300
    }
  ]
}`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const topic = body.topic || "";

    const anthropic = new Anthropic();

    const userMessage = `Yangi IELTS Speaking testi (3 qism) yarat.
${topic ? `Asosiy mavzu ${topic} bilan bog'liq bo'lsin.` : "Mavzu qiziqarli va kundalik hayotga oid bo'lsin."}
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

    const parsed = extractJson<SpeakingTest>(textBlock.text);
    parsed.id = `speaking-generated-${Date.now()}`;

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Speaking prompt generation error:", error);
    return NextResponse.json(
      { error: "Topshiriq generatsiya qilishda xatolik yuz berdi." },
      { status: 500 }
    );
  }
}
