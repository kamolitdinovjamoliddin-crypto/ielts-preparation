import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const dayNumber = req.nextUrl.searchParams.get("dayNumber");

  if (!dayNumber) {
    return NextResponse.json({ error: "dayNumber kerak" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("daily_tasks")
    .select("*")
    .eq("day_number", Number(dayNumber))
    .single();

  if (error || !data) {
    return NextResponse.json({ error: "Bu kun uchun vazifa topilmadi" }, { status: 404 });
  }

  return NextResponse.json(data);
}
