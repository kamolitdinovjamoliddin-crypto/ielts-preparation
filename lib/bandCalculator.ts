// IELTS Academic uchun taxminiy band score konvertatsiya jadvali (40 savol asosida)
// Bu rasmiy IELTS jadvaliga yaqinlashtirilgan, lekin rasmiy emas - faqat mock maqsadda

interface BandRange {
  minCorrect: number;
  band: number;
}

// Reading (Academic) uchun taxminiy jadval
const READING_BAND_TABLE: BandRange[] = [
  { minCorrect: 39, band: 9 },
  { minCorrect: 37, band: 8.5 },
  { minCorrect: 35, band: 8 },
  { minCorrect: 33, band: 7.5 },
  { minCorrect: 30, band: 7 },
  { minCorrect: 27, band: 6.5 },
  { minCorrect: 23, band: 6 },
  { minCorrect: 19, band: 5.5 },
  { minCorrect: 15, band: 5 },
  { minCorrect: 13, band: 4.5 },
  { minCorrect: 10, band: 4 },
  { minCorrect: 8, band: 3.5 },
  { minCorrect: 6, band: 3 },
  { minCorrect: 4, band: 2.5 },
  { minCorrect: 0, band: 2 },
];

// Listening uchun taxminiy jadval
const LISTENING_BAND_TABLE: BandRange[] = [
  { minCorrect: 39, band: 9 },
  { minCorrect: 37, band: 8.5 },
  { minCorrect: 35, band: 8 },
  { minCorrect: 32, band: 7.5 },
  { minCorrect: 30, band: 7 },
  { minCorrect: 26, band: 6.5 },
  { minCorrect: 23, band: 6 },
  { minCorrect: 18, band: 5.5 },
  { minCorrect: 16, band: 5 },
  { minCorrect: 13, band: 4.5 },
  { minCorrect: 11, band: 4 },
  { minCorrect: 8, band: 3.5 },
  { minCorrect: 6, band: 3 },
  { minCorrect: 4, band: 2.5 },
  { minCorrect: 0, band: 2 },
];

function scaleToBand(correctOutOf40: number, table: BandRange[]): number {
  for (const range of table) {
    if (correctOutOf40 >= range.minCorrect) {
      return range.band;
    }
  }
  return 1;
}

export function calculateReadingBand(correct: number, total: number): number {
  // Agar savollar soni 40 dan farq qilsa, 40 ga proportsional o'tkazamiz
  const scaled = Math.round((correct / total) * 40);
  return scaleToBand(scaled, READING_BAND_TABLE);
}

export function calculateListeningBand(correct: number, total: number): number {
  const scaled = Math.round((correct / total) * 40);
  return scaleToBand(scaled, LISTENING_BAND_TABLE);
}

export function roundToHalfBand(value: number): number {
  return Math.round(value * 2) / 2;
}

export function formatBand(band: number): string {
  return band.toFixed(1);
}
