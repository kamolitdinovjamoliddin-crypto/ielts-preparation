import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { extractJson } from "@/lib/extractJson";
import { SpeakingFeedback } from "@/lib/types";

export const maxDuration = 60;

interface PartTranscript {
  partNumber: number;
  title: string;
  prompt: string;
  transcript: string;
}

interface EvaluateSpeakingBody {
  parts: PartTranscript[];
}

const SYSTEM_PROMPT = `Siz tajribali IELTS Speaking examiner sifatida ishlaysiz. Foydalanuvchining IELTS Speaking testidagi barcha 3 qism (Part 1, 2, 3) bo'yicha gapirgan so'zlarining matnga aylantirilgan (transcript) variantini ko'rib chiqasiz va rasmiy IELTS mezonlari asosida baholaysiz:

Mezonlar: Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, Pronunciation.

MUHIM ESLATMA: Sizga faqat matn (transcript) berilgan, audio emas. Shuning uchun Pronunciation bahosini so'z tanlovi, jumla tuzilishi va matnning tabiiyligidan kelib chiqib TAXMINIY tarzda baholang, va detailedFeedback ichida buni eslatib o'ting - haqiqiy talaffuzni faqat audio orqali to'liq baholash mumkinligini aytib o'ting.

Har bir mezon bo'yicha 0-9 band oralig'ida (0.5 qadam bilan) baho bering, so'ngra umumiy band score'ni hisoblang (4 mezonning o'rtachasi, eng yaqin 0.5 ga yaxlitlangan).

Javobni FAQAT quyidagi JSON formatida qaytaring, hech qanday qo'shimcha matn yoki markdown belgilarisiz:

{
  "fluencyCoherence": <raqam>,
  "lexicalResource": <raqam>,
  "grammaticalRange": <raqam>,
  "pronunciation": <raqam>,
  "overallBand": <raqam>,
  "strengths": ["...", "...", "..."],
  "weaknesses": ["...", "...", "..."],
  "detailedFeedback": "<batafsil, konstruktiv feedback, kamida 150 so'z, o'zbek tilida, pronunciation haqida eslatma bilan>"
}`;

export async function POST(req: NextRequest) {
  try {
    const body: EvaluateSpeakingBody = await req.json();
    const { parts } = body;

    const validParts = parts.filter((p) => p.transcript && p.transcript.trim().length > 5);
    if (validParts.length === 0) {
      return NextResponse.json(
        { error: "Hech qanday javob topilmadi. Iltimos, gapirib ko'ring." },
        { status: 400 }
      );
    }

    const anthropic = new Anthropic();

    const partsText = parts
      .map(
        (p) =>
          `--- Part ${p.partNumber}: ${p.title} ---\nSavol/Topshiriq: ${p.prompt}\n\nFoydalanuvchi javobi (transcript):\n"${p.transcript || "(javob berilmadi)"}"`
      )
      .join("\n\n");

    const userMessage = `IELTS Speaking testi - barcha qismlar:\n\n${partsText}\n\nYuqoridagi javoblarni IELTS Speaking mezonlari asosida baholang va faqat JSON formatda javob qaytaring.`;

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

    const parsed = extractJson<SpeakingFeedback>(textBlock.text);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Speaking evaluation error:", error);
    return NextResponse.json(
      { error: "Baholashda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring." },
      { status: 500 }
    );
  }
}
