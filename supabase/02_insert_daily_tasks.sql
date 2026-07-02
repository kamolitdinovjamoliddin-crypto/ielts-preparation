-- ===================================================================
-- IELTS Platform - 8 kunlik Daily Tasks kontenti
-- Bu skriptni Supabase SQL Editor'da "01_create_tables.sql" dan KEYIN ishga tushiring
-- ===================================================================

insert into daily_tasks (
  day_number, title, words_page_title, words_content,
  writing_prompt, writing_min_words,
  reading_title, reading_text, reading_questions,
  podcast_title, podcast_transcript, podcast_questions,
  dictation_text
) values

-- ===================== KUN 1 =====================
(
  1, 'Kun 1: Boshlanish',
  'Essential Words - Page 1: Education',
  '[
    {"word": "achieve", "meaning": "erishmoq, qo''lga keltirmoq", "example": "She worked hard to achieve her goals."},
    {"word": "academic", "meaning": "ilmiy, o''quv", "example": "His academic performance improved this year."},
    {"word": "curriculum", "meaning": "o''quv dasturi", "example": "The school updated its curriculum last year."},
    {"word": "knowledge", "meaning": "bilim", "example": "Reading books increases your knowledge."},
    {"word": "lecture", "meaning": "ma''ruza", "example": "The professor gave an interesting lecture."},
    {"word": "scholarship", "meaning": "stipendiya", "example": "She received a scholarship to study abroad."},
    {"word": "qualification", "meaning": "malaka, kvalifikatsiya", "example": "He has the right qualifications for this job."},
    {"word": "institution", "meaning": "muassasa", "example": "This is one of the oldest institutions in the country."},
    {"word": "graduate", "meaning": "bitiruvchi / bitirmoq", "example": "She will graduate from university next year."},
    {"word": "literacy", "meaning": "savodxonlik", "example": "Literacy rates have improved significantly."}
  ]',
  'Write about a teacher who had a positive influence on your life. Describe who they were and explain why they were important to you.',
  80,
  'The Benefits of Bilingual Education',
  'Research increasingly shows that learning a second language from an early age provides children with significant cognitive advantages. Bilingual children often demonstrate better problem-solving skills and greater mental flexibility than their monolingual peers. This is because switching between languages requires the brain to constantly manage two systems, which strengthens executive function. Additionally, bilingual education has been linked to improved memory and a delayed onset of age-related cognitive decline in later life. Despite these benefits, many education systems still prioritize a single language of instruction, often due to limited resources or trained staff.',
  '[
    {"id": "d1r1", "type": "true-false-not-given", "text": "Bilingual children always perform better academically than monolingual children.", "correctAnswer": "Not Given"},
    {"id": "d1r2", "type": "multiple-choice", "text": "What does switching between languages strengthen, according to the passage?", "options": ["Memory only", "Executive function", "Vocabulary size", "Reading speed"], "correctAnswer": "Executive function"},
    {"id": "d1r3", "type": "true-false-not-given", "text": "Most education systems currently prioritize bilingual instruction.", "correctAnswer": "False"}
  ]',
  'Daily Podcast: Morning Routines',
  'Host: Good morning, listeners! Today we are talking about morning routines. Did you know that many successful people wake up before 6 AM? Research suggests that having a consistent morning routine can reduce stress and improve focus throughout the day. Some experts recommend starting the day with light exercise, followed by a healthy breakfast. Others suggest spending the first ten minutes journaling or planning the day ahead. Whatever routine you choose, consistency seems to be the key factor in long-term success.',
  '[
    {"id": "d1l1", "type": "fill-blank", "text": "Many successful people wake up before ______ AM.", "correctAnswer": ["6"], "wordLimit": "ONE WORD ONLY"},
    {"id": "d1l2", "type": "multiple-choice", "text": "What is suggested as the key factor for long-term success?", "options": ["Waking up early", "Consistency", "Exercise", "Journaling"], "correctAnswer": "Consistency"}
  ]',
  'A consistent morning routine can reduce stress and improve focus throughout the day.'
),

-- ===================== KUN 2 =====================
(
  2, 'Kun 2: Texnologiya',
  'Essential Words - Page 2: Technology',
  '[
    {"word": "innovative", "meaning": "innovatsion, yangilik kirituvchi", "example": "The company is known for its innovative products."},
    {"word": "device", "meaning": "qurilma", "example": "This device can track your sleep patterns."},
    {"word": "artificial", "meaning": "sun''iy", "example": "Artificial intelligence is changing many industries."},
    {"word": "upgrade", "meaning": "yangilamoq, takomillashtirmoq", "example": "I need to upgrade my computer software."},
    {"word": "efficient", "meaning": "samarali", "example": "Solar panels are becoming more efficient every year."},
    {"word": "network", "meaning": "tarmoq", "example": "The company has a strong network of suppliers."},
    {"word": "automation", "meaning": "avtomatlashtirish", "example": "Automation has reduced manual labor in factories."},
    {"word": "sustainable", "meaning": "barqaror, davom etadigan", "example": "We need more sustainable energy sources."},
    {"word": "breakthrough", "meaning": "yutuq, kashfiyot", "example": "Scientists made a major breakthrough in cancer research."},
    {"word": "obsolete", "meaning": "eskirgan", "example": "Many old technologies have become obsolete."}
  ]',
  'Do you think technology has made people more or less social? Give reasons for your opinion with examples.',
  80,
  'The Rise of Remote Work',
  'Over the past decade, advances in communication technology have made remote work increasingly viable for many industries. Cloud-based tools allow employees to collaborate on documents in real time, regardless of their physical location. Video conferencing software has also become significantly more reliable, reducing the need for face-to-face meetings. While some companies have embraced this shift fully, others remain hesitant, citing concerns about productivity and team cohesion. Studies on this topic have produced mixed results, with some showing increased output among remote workers and others highlighting challenges related to isolation and communication.',
  '[
    {"id": "d2r1", "type": "true-false-not-given", "text": "All companies have fully embraced remote work.", "correctAnswer": "False"},
    {"id": "d2r2", "type": "multiple-choice", "text": "What concern do hesitant companies cite about remote work?", "options": ["Cost", "Productivity and team cohesion", "Internet speed", "Employee salaries"], "correctAnswer": "Productivity and team cohesion"},
    {"id": "d2r3", "type": "true-false-not-given", "text": "Research has consistently shown remote work increases productivity.", "correctAnswer": "False"}
  ]',
  'Daily Podcast: Smart Homes',
  'Host: Today we are exploring smart home technology. Smart homes use connected devices to automate everyday tasks, such as adjusting lighting or temperature based on the time of day. One major advantage is energy efficiency: smart thermostats can learn your habits and reduce energy waste significantly. However, experts warn that with more connected devices comes a greater risk of security vulnerabilities. As this technology becomes more affordable, more households around the world are expected to adopt it within the next five years.',
  '[
    {"id": "d2l1", "type": "fill-blank", "text": "Smart thermostats can reduce energy ______.", "correctAnswer": ["waste"], "wordLimit": "ONE WORD ONLY"},
    {"id": "d2l2", "type": "multiple-choice", "text": "What risk do experts warn about?", "options": ["High cost", "Security vulnerabilities", "Slow internet", "Difficult installation"], "correctAnswer": "Security vulnerabilities"}
  ]',
  'Smart thermostats can learn your habits and reduce energy waste significantly.'
),

-- ===================== KUN 3 =====================
(
  3, 'Kun 3: Atrof-muhit',
  'Essential Words - Page 3: Environment',
  '[
    {"word": "pollution", "meaning": "ifloslanish", "example": "Air pollution is a serious problem in big cities."},
    {"word": "renewable", "meaning": "qayta tiklanuvchan", "example": "Wind is a renewable source of energy."},
    {"word": "ecosystem", "meaning": "ekotizim", "example": "Coral reefs support a diverse ecosystem."},
    {"word": "emission", "meaning": "chiqindi (gaz)", "example": "Car emissions contribute to climate change."},
    {"word": "conservation", "meaning": "muhofaza qilish", "example": "Conservation efforts have saved several species."},
    {"word": "deforestation", "meaning": "o''rmonlarni yo''qotish", "example": "Deforestation is destroying natural habitats."},
    {"word": "drought", "meaning": "qurg''oqchilik", "example": "The region suffered a severe drought last summer."},
    {"word": "biodiversity", "meaning": "biologik xilma-xillik", "example": "Rainforests have incredible biodiversity."},
    {"word": "carbon footprint", "meaning": "karbon izi", "example": "Flying often increases your carbon footprint."},
    {"word": "habitat", "meaning": "yashash muhiti", "example": "Many animals lost their habitat due to construction."}
  ]',
  'Some people think individuals can do little to fight climate change, while others believe personal actions matter. Discuss both views and give your opinion.',
  80,
  'Urban Green Spaces',
  'City planners increasingly recognize the value of green spaces, such as parks and rooftop gardens, in urban environments. These spaces not only improve air quality but also provide residents with areas for physical activity and relaxation. Research has shown that access to green spaces is linked to lower stress levels and improved mental health among city dwellers. However, as urban populations grow, the pressure to use available land for housing often competes directly with plans for new parks and gardens, creating a difficult balance for local governments to manage.',
  '[
    {"id": "d3r1", "type": "true-false-not-given", "text": "Green spaces only improve air quality, with no effect on mental health.", "correctAnswer": "False"},
    {"id": "d3r2", "type": "multiple-choice", "text": "What competes with plans for new green spaces?", "options": ["Tourism", "Housing needs", "Industry", "Agriculture"], "correctAnswer": "Housing needs"},
    {"id": "d3r3", "type": "true-false-not-given", "text": "All city planners agree on how much land to use for parks.", "correctAnswer": "Not Given"}
  ]',
  'Daily Podcast: Ocean Cleanup',
  'Host: Plastic pollution in our oceans remains a critical environmental issue. Every year, millions of tons of plastic waste enter the ocean, harming marine life and ecosystems. Several organizations are now developing technology to remove plastic from the water, including large floating barriers that collect debris as it drifts. While these projects have shown promising early results, experts agree that reducing plastic production at the source is equally, if not more, important for solving this problem long-term.',
  '[
    {"id": "d3l1", "type": "fill-blank", "text": "Millions of tons of plastic ______ enter the ocean every year.", "correctAnswer": ["waste"], "wordLimit": "ONE WORD ONLY"},
    {"id": "d3l2", "type": "multiple-choice", "text": "What do experts say is equally important?", "options": ["Building more barriers", "Reducing plastic production", "Cleaning beaches", "Banning fishing"], "correctAnswer": "Reducing plastic production"}
  ]',
  'Reducing plastic production at the source is equally important for solving this problem.'
),

-- ===================== KUN 4 =====================
(
  4, 'Kun 4: Sog''liq',
  'Essential Words - Page 4: Health',
  '[
    {"word": "nutrition", "meaning": "ovqatlanish, oziqlanish", "example": "Good nutrition is essential for children''s growth."},
    {"word": "exercise", "meaning": "mashq qilish", "example": "Regular exercise improves cardiovascular health."},
    {"word": "immune system", "meaning": "immun tizimi", "example": "Vitamin C supports the immune system."},
    {"word": "chronic", "meaning": "surunkali", "example": "Chronic stress can lead to serious health problems."},
    {"word": "diagnosis", "meaning": "tashxis", "example": "An early diagnosis can improve treatment outcomes."},
    {"word": "wellbeing", "meaning": "farovonlik, sog''lik holati", "example": "Mental wellbeing is just as important as physical health."},
    {"word": "symptom", "meaning": "alomat", "example": "Fatigue is a common symptom of many illnesses."},
    {"word": "prevent", "meaning": "oldini olmoq", "example": "Vaccines help prevent the spread of disease."},
    {"word": "recovery", "meaning": "tuzalish, sog''ayish", "example": "Her recovery after surgery was faster than expected."},
    {"word": "lifestyle", "meaning": "turmush tarzi", "example": "A healthy lifestyle reduces the risk of many diseases."}
  ]',
  'Discuss the advantages and disadvantages of working long hours for a person''s health and family life.',
  80,
  'The Importance of Sleep',
  'Sleep plays a crucial role in maintaining both physical and mental health, yet many people in modern society routinely fail to get enough of it. During sleep, the brain consolidates memories and clears out toxins that accumulate during waking hours. Chronic sleep deprivation has been linked to a range of health issues, including weakened immune function, weight gain, and an increased risk of heart disease. Despite this evidence, cultural attitudes in many countries continue to glorify busy schedules and minimal sleep as signs of productivity and success.',
  '[
    {"id": "d4r1", "type": "true-false-not-given", "text": "Sleep helps the brain remove toxins.", "correctAnswer": "True"},
    {"id": "d4r2", "type": "multiple-choice", "text": "What is NOT mentioned as a risk of sleep deprivation?", "options": ["Weight gain", "Heart disease", "Hair loss", "Weakened immune function"], "correctAnswer": "Hair loss"},
    {"id": "d4r3", "type": "true-false-not-given", "text": "All cultures view minimal sleep negatively.", "correctAnswer": "False"}
  ]',
  'Daily Podcast: The Power of Walking',
  'Host: Walking is often overlooked as a form of exercise, but its health benefits are substantial. Just thirty minutes of brisk walking a day can improve cardiovascular health, boost mood, and help with weight management. Unlike more intense forms of exercise, walking is low-impact, making it accessible to people of almost any age or fitness level. Some researchers even suggest that walking outdoors, surrounded by nature, provides additional mental health benefits compared to walking indoors on a treadmill.',
  '[
    {"id": "d4l1", "type": "fill-blank", "text": "Just ______ minutes of brisk walking a day can improve health.", "correctAnswer": ["30", "thirty"], "wordLimit": "ONE WORD ONLY"},
    {"id": "d4l2", "type": "multiple-choice", "text": "What makes walking accessible to most people?", "options": ["It is low-impact", "It requires equipment", "It is fast", "It is competitive"], "correctAnswer": "It is low-impact"}
  ]',
  'Walking outdoors provides additional mental health benefits compared to walking indoors.'
),

-- ===================== KUN 5 =====================
(
  5, 'Kun 5: Jamiyat',
  'Essential Words - Page 5: Society',
  '[
    {"word": "community", "meaning": "jamoa, hamjamiyat", "example": "The community came together to clean the park."},
    {"word": "diverse", "meaning": "xilma-xil", "example": "The city has a diverse population."},
    {"word": "inequality", "meaning": "tengsizlik", "example": "Income inequality remains a major social issue."},
    {"word": "tradition", "meaning": "an''ana", "example": "This festival is an important local tradition."},
    {"word": "generation", "meaning": "avlod", "example": "Younger generations use social media more often."},
    {"word": "urbanization", "meaning": "shaharlashish", "example": "Rapid urbanization has changed the city''s landscape."},
    {"word": "migration", "meaning": "migratsiya, ko''chish", "example": "Migration patterns have shifted in recent decades."},
    {"word": "welfare", "meaning": "ijtimoiy ta''minot", "example": "The welfare system supports low-income families."},
    {"word": "discrimination", "meaning": "kamsitish", "example": "Laws exist to prevent workplace discrimination."},
    {"word": "civic", "meaning": "fuqarolik", "example": "Voting is an important civic duty."}
  ]',
  'Some people believe that traditional customs should be preserved, while others think societies must change with the times. Discuss both views and give your opinion.',
  80,
  'The Changing Structure of Families',
  'Family structures have evolved significantly over the past century, particularly in industrialized nations. The traditional extended family, where multiple generations lived under one roof, has largely been replaced by smaller, nuclear family units in many urban areas. This shift has been driven by various factors, including increased mobility for work, rising living costs, and changing cultural attitudes toward independence. Sociologists note that while this change offers individuals greater personal freedom, it has also reduced the built-in support systems that extended families traditionally provided, particularly for childcare and elderly care.',
  '[
    {"id": "d5r1", "type": "true-false-not-given", "text": "Extended families are now more common than nuclear families in cities.", "correctAnswer": "False"},
    {"id": "d5r2", "type": "multiple-choice", "text": "What has the shift to nuclear families reduced, according to sociologists?", "options": ["Personal freedom", "Built-in support systems", "Living costs", "Cultural traditions"], "correctAnswer": "Built-in support systems"},
    {"id": "d5r3", "type": "true-false-not-given", "text": "This change has happened equally in all countries around the world.", "correctAnswer": "Not Given"}
  ]',
  'Daily Podcast: Volunteering Trends',
  'Host: Volunteering rates have shifted noticeably over the past decade. Surveys suggest that younger generations are more likely to volunteer for short-term, project-based causes rather than committing to long-term roles with a single organization. Experts attribute this trend partly to busier lifestyles and partly to a preference for seeing immediate, visible results from their efforts. Despite this shift in style, overall interest in giving back to local communities appears to remain strong across most age groups.',
  '[
    {"id": "d5l1", "type": "fill-blank", "text": "Younger generations prefer ______ -based volunteering causes.", "correctAnswer": ["project"], "wordLimit": "ONE WORD ONLY"},
    {"id": "d5l2", "type": "multiple-choice", "text": "What do younger volunteers prefer to see?", "options": ["Long-term commitments", "Immediate, visible results", "Financial rewards", "Certificates"], "correctAnswer": "Immediate, visible results"}
  ]',
  'Overall interest in giving back to local communities appears to remain strong.'
),

-- ===================== KUN 6 =====================
(
  6, 'Kun 6: Iqtisodiyot',
  'Essential Words - Page 6: Economy',
  '[
    {"word": "economy", "meaning": "iqtisodiyot", "example": "The global economy is recovering slowly."},
    {"word": "investment", "meaning": "investitsiya", "example": "Foreign investment has increased this year."},
    {"word": "inflation", "meaning": "inflyatsiya", "example": "Inflation has made everyday goods more expensive."},
    {"word": "revenue", "meaning": "daromad", "example": "The company''s revenue grew by 20 percent."},
    {"word": "consumer", "meaning": "iste''molchi", "example": "Consumer spending drives much of the economy."},
    {"word": "entrepreneur", "meaning": "tadbirkor", "example": "She became a successful entrepreneur at a young age."},
    {"word": "trade", "meaning": "savdo", "example": "International trade benefits both countries involved."},
    {"word": "competitive", "meaning": "raqobatbardosh", "example": "The job market is becoming more competitive."},
    {"word": "unemployment", "meaning": "ishsizlik", "example": "Unemployment rates dropped last quarter."},
    {"word": "subsidy", "meaning": "subsidiya", "example": "The government provides subsidies for farmers."}
  ]',
  'Some people think the government should support small businesses with subsidies, while others believe businesses should succeed without help. Discuss both views and give your opinion.',
  80,
  'The Gig Economy',
  'The gig economy, characterized by short-term contracts and freelance work rather than permanent jobs, has expanded rapidly with the rise of digital platforms. Proponents argue that this model offers workers greater flexibility and control over their schedules, allowing them to balance multiple income sources or personal commitments. Critics, however, point out that gig workers often lack the job security, healthcare benefits, and retirement plans typically associated with traditional employment. As this sector continues to grow, governments in several countries are debating how labor laws should be updated to protect these workers.',
  '[
    {"id": "d6r1", "type": "true-false-not-given", "text": "The gig economy offers workers more schedule flexibility.", "correctAnswer": "True"},
    {"id": "d6r2", "type": "multiple-choice", "text": "What do critics say gig workers often lack?", "options": ["Flexibility", "Job security and benefits", "Digital skills", "Education"], "correctAnswer": "Job security and benefits"},
    {"id": "d6r3", "type": "true-false-not-given", "text": "All governments have already updated labor laws for gig workers.", "correctAnswer": "False"}
  ]',
  'Daily Podcast: The Cashless Society',
  'Host: More and more countries are moving toward a cashless society, where digital payments dominate everyday transactions. Mobile payment apps and contactless cards have made transactions faster and more convenient for consumers. However, this shift raises concerns about financial inclusion, particularly for elderly individuals or those in rural areas without reliable access to banking technology. Some governments are now exploring policies to ensure cash remains available as an option, even as digital payments become the norm.',
  '[
    {"id": "d6l1", "type": "fill-blank", "text": "Mobile payment apps make transactions faster and more ______.", "correctAnswer": ["convenient"], "wordLimit": "ONE WORD ONLY"},
    {"id": "d6l2", "type": "multiple-choice", "text": "Who might be disadvantaged by a cashless society?", "options": ["Young professionals", "Elderly people in rural areas", "Bank employees", "Tech companies"], "correctAnswer": "Elderly people in rural areas"}
  ]',
  'Some governments are exploring policies to ensure cash remains available as an option.'
),

-- ===================== KUN 7 =====================
(
  7, 'Kun 7: Madaniyat',
  'Essential Words - Page 7: Culture',
  '[
    {"word": "heritage", "meaning": "meros", "example": "The old town is part of the country''s cultural heritage."},
    {"word": "custom", "meaning": "odat, urf-odat", "example": "It is a local custom to remove shoes before entering."},
    {"word": "globalization", "meaning": "globallashuv", "example": "Globalization has connected economies around the world."},
    {"word": "identity", "meaning": "o''ziga xoslik, identifikatsiya", "example": "Language plays a key role in cultural identity."},
    {"word": "festival", "meaning": "festival, bayram", "example": "The town hosts a music festival every summer."},
    {"word": "preserve", "meaning": "saqlab qolmoq", "example": "Museums help preserve historical artifacts."},
    {"word": "influence", "meaning": "ta''sir", "example": "Western media has influenced fashion trends worldwide."},
    {"word": "diversity", "meaning": "xilma-xillik", "example": "The festival celebrates the diversity of local cultures."},
    {"word": "authentic", "meaning": "haqiqiy, asl", "example": "This restaurant serves authentic regional dishes."},
    {"word": "ritual", "meaning": "marosim", "example": "The ceremony involves several traditional rituals."}
  ]',
  'Some people think that globalization is destroying local cultures, while others believe it helps cultures share and grow. Discuss both views and give your opinion.',
  80,
  'The Revival of Traditional Crafts',
  'In recent years, there has been a noticeable resurgence of interest in traditional crafts, such as pottery, weaving, and woodworking, particularly among younger generations in urban areas. This trend appears to be partly a reaction against mass-produced, disposable goods, with consumers increasingly valuing handmade items for their uniqueness and connection to cultural heritage. Online marketplaces have played a significant role in this revival, allowing artisans to reach global audiences without relying on physical retail spaces. Nevertheless, many traditional craftspeople still struggle to earn a sustainable income from their work.',
  '[
    {"id": "d7r1", "type": "true-false-not-given", "text": "Interest in traditional crafts has decreased among younger people.", "correctAnswer": "False"},
    {"id": "d7r2", "type": "multiple-choice", "text": "What has helped artisans reach global audiences?", "options": ["Television advertising", "Online marketplaces", "Government grants", "Physical retail stores"], "correctAnswer": "Online marketplaces"},
    {"id": "d7r3", "type": "true-false-not-given", "text": "All traditional craftspeople now earn a comfortable income.", "correctAnswer": "False"}
  ]',
  'Daily Podcast: Food and Identity',
  'Host: Food is often deeply connected to a person''s cultural identity. Traditional recipes are frequently passed down through generations, carrying with them stories and memories from the past. In multicultural cities, food markets and restaurants have become spaces where different culinary traditions blend, creating entirely new fusion dishes. While some purists worry that this blending dilutes authentic culinary traditions, others see it as a natural and positive evolution of culture in a connected world.',
  '[
    {"id": "d7l1", "type": "fill-blank", "text": "Traditional recipes are passed down through ______.", "correctAnswer": ["generations"], "wordLimit": "ONE WORD ONLY"},
    {"id": "d7l2", "type": "multiple-choice", "text": "What do some purists worry about?", "options": ["Higher food prices", "Diluting authentic traditions", "Lack of restaurants", "Food safety"], "correctAnswer": "Diluting authentic traditions"}
  ]',
  'Food markets have become spaces where different culinary traditions blend together.'
),

-- ===================== KUN 8 =====================
(
  8, 'Kun 8: Yakuniy tayyorgarlik',
  'Essential Words - Page 8: Review and Exam Skills',
  '[
    {"word": "assess", "meaning": "baholamoq", "example": "Teachers assess students through various methods."},
    {"word": "criteria", "meaning": "mezon", "example": "The judges used clear criteria to score participants."},
    {"word": "coherent", "meaning": "izchil, mantiqiy", "example": "Her essay was well-organized and coherent."},
    {"word": "paraphrase", "meaning": "boshqacha so''z bilan ifodalash", "example": "Try to paraphrase the question in your answer."},
    {"word": "fluency", "meaning": "ravonlik", "example": "His fluency in English improved after living abroad."},
    {"word": "vocabulary", "meaning": "lug''at boyligi", "example": "Reading widely helps expand your vocabulary."},
    {"word": "accuracy", "meaning": "aniqlik, to''g''rilik", "example": "Grammatical accuracy is important in formal writing."},
    {"word": "strategy", "meaning": "strategiya", "example": "Having a clear strategy helps during exams."},
    {"word": "confidence", "meaning": "ishonch", "example": "Practice builds confidence before a real exam."},
    {"word": "achievement", "meaning": "yutuq", "example": "Completing this course is a great achievement."}
  ]',
  'Reflect on what you have learned this week. Describe one skill you have improved and explain how you plan to continue improving it before your IELTS exam.',
  80,
  'Effective Exam Preparation Strategies',
  'Research into learning and memory suggests that spaced repetition, where information is reviewed at increasing intervals over time, is significantly more effective than cramming the night before an exam. This approach allows the brain to consolidate information into long-term memory rather than short-term recall, which fades quickly. Additionally, practicing under timed, exam-like conditions has been shown to reduce anxiety and improve performance, as it familiarizes the test-taker with the pressure of real exam scenarios. Combining these strategies with adequate sleep and regular breaks tends to produce the best overall results.',
  '[
    {"id": "d8r1", "type": "true-false-not-given", "text": "Cramming the night before an exam is more effective than spaced repetition.", "correctAnswer": "False"},
    {"id": "d8r2", "type": "multiple-choice", "text": "What does practicing under timed conditions help reduce?", "options": ["Vocabulary errors", "Anxiety", "Reading speed", "Motivation"], "correctAnswer": "Anxiety"},
    {"id": "d8r3", "type": "true-false-not-given", "text": "Sleep has no effect on exam performance.", "correctAnswer": "False"}
  ]',
  'Daily Podcast: Staying Calm Under Pressure',
  'Host: Many test-takers experience anxiety before important exams, and this stress can sometimes affect performance more than a lack of preparation. Experts recommend simple breathing techniques to calm the nervous system in the minutes before an exam begins. Visualization, where a person imagines themselves successfully completing the task ahead, has also been shown to boost confidence. Ultimately, consistent practice over time remains the most reliable way to reduce exam-day nerves, since familiarity with the format naturally lowers uncertainty.',
  '[
    {"id": "d8l1", "type": "fill-blank", "text": "Breathing techniques can calm the nervous ______.", "correctAnswer": ["system"], "wordLimit": "ONE WORD ONLY"},
    {"id": "d8l2", "type": "multiple-choice", "text": "What remains the most reliable way to reduce exam-day nerves?", "options": ["Visualization", "Consistent practice", "Sleeping more", "Avoiding caffeine"], "correctAnswer": "Consistent practice"}
  ]',
  'Consistent practice over time remains the most reliable way to reduce exam-day nerves.'
)

on conflict (day_number) do update set
  title = excluded.title,
  words_page_title = excluded.words_page_title,
  words_content = excluded.words_content,
  writing_prompt = excluded.writing_prompt,
  writing_min_words = excluded.writing_min_words,
  reading_title = excluded.reading_title,
  reading_text = excluded.reading_text,
  reading_questions = excluded.reading_questions,
  podcast_title = excluded.podcast_title,
  podcast_transcript = excluded.podcast_transcript,
  podcast_questions = excluded.podcast_questions,
  dictation_text = excluded.dictation_text;
