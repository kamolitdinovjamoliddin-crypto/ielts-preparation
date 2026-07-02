-- ===================================================================
-- word_entries jadvali - Essential Words 1 kitobining 30 kunlik (600 so'z) bazasi
-- Bu skriptni Supabase SQL Editor'da ishga tushiring (boshqa SQL skriptlardan oldin yoki keyin - mustaqil ishlaydi)
-- ===================================================================

CREATE TABLE IF NOT EXISTS word_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  word text NOT NULL,
  day_number int NOT NULL,
  meaning text NOT NULL,        -- o'zbekcha ma'no
  example text NOT NULL,        -- ingliz tilidagi misol jumla
  synonym text,                 -- qisqa o'zbekcha sinonim/asosiy ma'no (filtrlash uchun)
  image_url text,               -- kitobdan olingan rasm URL (keyinroq to'ldiriladi)
  part_of_speech text,          -- n. / v. / adj. / adv. (keyinroq to'ldiriladi)
  created_at timestamptz NOT NULL DEFAULT now()
);

-- day_number bo'yicha tezkor qidirish uchun indeks
CREATE INDEX IF NOT EXISTS idx_word_entries_day ON word_entries(day_number);

-- Row Level Security
ALTER TABLE word_entries ENABLE ROW LEVEL SECURITY;

-- Hamma o'qiy oladi (bu ochiq o'quv kontenti)
CREATE POLICY "Anyone can read word_entries" ON word_entries
  FOR SELECT USING (true);

-- ===================================================================
-- Shaxsiy lug'at (Word Bank) jadvali - o'quvchi belgilagan "yangi so'zlar"
-- (Reading paytida so'zga bosib, shaxsiy lug'atga qo'shish funksiyasi uchun)
-- ===================================================================

CREATE TABLE IF NOT EXISTS saved_words (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  word text NOT NULL,
  context_sentence text,        -- so'z qaysi jumladan olingani
  source text,                  -- masalan 'reading-day-5' - qayerdan saqlangani
  is_learned boolean NOT NULL DEFAULT false,  -- o'quvchi "o'rgandim" deb belgilagan-belgilamagani
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(student_id, word)
);

CREATE INDEX IF NOT EXISTS idx_saved_words_student ON saved_words(student_id);

ALTER TABLE saved_words ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow read saved_words" ON saved_words
  FOR SELECT USING (true);
CREATE POLICY "Allow insert saved_words" ON saved_words
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow update saved_words" ON saved_words
  FOR UPDATE USING (true);
CREATE POLICY "Allow delete saved_words" ON saved_words
  FOR DELETE USING (true);
