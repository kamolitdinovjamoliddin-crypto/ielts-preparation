# IELTS CD Mock Platform — O'rnatish va Deploy qo'llanmasi

## 1. Loyihani ochish

```bash
unzip ielts-mock-project.zip
cd ielts-mock-export
npm install
```

## 2. Lokal test qilish

```bash
npm run dev
```

Brauzerda `http://localhost:3000` ni oching.

**Eslatma:** AI baholash (Writing/Speaking) va AI test generatsiya funksiyalari ishlashi uchun
`ANTHROPIC_API_KEY` kerak. Loyiha papkasida `.env.local` fayl yarating:

```
ANTHROPIC_API_KEY=sk-ant-...
```

API key ni https://console.anthropic.com dan olishingiz mumkin.

## 3. Shriftlar haqida

Ishlab chiqarish (sandbox) muhitida Google Fonts'ga internet orqali ulanish cheklangani uchun,
`app/layout.tsx` va `app/globals.css` da hozircha system font'lar (`-apple-system`, `Georgia` va h.k.)
ishlatilgan. Vercel'da bu muammo bo'lmaydi, shuning uchun chiroyliroq tipografika uchun quyidagini
qilishingiz mumkin (ixtiyoriy):

`app/layout.tsx` boshiga qaytaring:
```tsx
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";

const inter = Inter({ variable: "--font-inter", subsets: ["latin", "cyrillic"] });
const sourceSerif = Source_Serif_4({ variable: "--font-source-serif", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });
```//
va `<html>` tagiga `className={`${inter.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}` qaytaring.

Bu ixtiyoriy — hozirgi holatida ham loyiha to'liq ishlaydi va professional ko'rinadi.

## 4. Vercel'ga deploy qilish

1. GitHub'da yangi repository yarating va loyihani push qiling:
```bash
git init
git add .
git commit -m "IELTS CD Mock platform"
git remote add origin <your-repo-url>
git push -u origin main
```

2. https://vercel.com ga kiring, "New Project" tugmasini bosing, GitHub repo'ni tanlang.

3. **Environment Variables** bo'limida qo'shing:
   - `ANTHROPIC_API_KEY` = sizning API key'ingiz

4. "Deploy" tugmasini bosing. Bir necha daqiqadan keyin sayt tayyor bo'ladi
   (masalan: `https://your-project.vercel.app`).

5. Bu havolani do'stlaringiz bilan bepul ulashishingiz mumkin.

## 5. Loyiha tuzilishi

```
app/
  page.tsx                  - Bosh sahifa (4 modul tanlash)
  history/                  - Natijalar tarixi
  results/[resultId]/       - Natija va AI feedback ko'rsatish
  test/
    reading/                - Reading testlari (ro'yxat + imtihon sahifasi)
    listening/               - Listening testlari
    writing/                 - Writing testlari
    speaking/                - Speaking testlari (mikrofon orqali)
  api/
    evaluate-writing/        - AI orqali Writing baholash
    evaluate-speaking/       - AI orqali Speaking baholash
    generate-reading/        - AI orqali yangi Reading test yaratish
    generate-listening/      - AI orqali yangi Listening test yaratish
    generate-writing-prompt/ - AI orqali yangi Writing mavzusi yaratish
    generate-speaking-prompt/- AI orqali yangi Speaking mavzusi yaratish

components/
  ExamTimer.tsx             - Imtihon taymeri
  QuestionNav.tsx           - Pastdagi savol navigatsiyasi
  QuestionRenderer.tsx      - Har xil savol turlarini ko'rsatish
  GenerateTestCard.tsx      - "AI bilan yangi test yarat" kartasi

lib/
  types.ts                  - Barcha TypeScript tiplar
  bandCalculator.ts         - Band score hisoblash formulalari
  scoring.ts                - Reading/Listening avtomatik tekshirish
  storage.ts                - Natijalarni saqlash (localStorage)
  generatedTestStorage.ts   - AI generatsiya qilingan testlarni saqlash (sessionStorage)
  useSpeechRecognition.ts   - Mikrofon orqali nutqni matnga aylantirish

data/
  readingTests.ts            - Namuna Reading testlar
  listeningTests.ts           - Namuna Listening testlar
  writingTests.ts              - Namuna Writing testlar
  speakingTests.ts             - Namuna Speaking testlar
```

## 6. Keyingi qadamlar uchun g'oyalar (ixtiyoriy)

- **Haqiqiy audio**: Listening uchun matnni TTS (text-to-speech) orqali ovozga aylantirish
  (masalan, ElevenLabs yoki brauzer ichidagi Web Speech API SpeechSynthesis)
- **Foydalanuvchi hisoblari**: Hozir natijalar faqat brauzerda (localStorage) saqlanadi.
  Ko'p qurilmada ishlatish uchun database (Postgres/Supabase) va login tizimi qo'shish mumkin
- **Progress grafiklari**: Har bir modul bo'yicha vaqt o'tishi bilan band score o'zgarishini
  grafik orqali ko'rsatish (recharts kutubxonasi yordamida)
- **Speaking uchun haqiqiy talaffuz tahlili**: Hozir Speaking baholash faqat matnga
  (transcript) asoslangan; haqiqiy audio fayl yuborib, talaffuzni alohida tahlil qilish mumkin
