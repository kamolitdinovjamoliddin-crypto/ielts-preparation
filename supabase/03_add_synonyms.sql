-- ===================================================================
-- IELTS Platform - Essential Words ga inglizcha sinonim qo'shish
-- Bu skriptni 01 va 02 dan KEYIN ishga tushiring
-- ===================================================================

-- Kun 1 uchun sinonimlarni qo'shish
UPDATE daily_tasks
SET words_content = (
  SELECT jsonb_agg(
    elem || jsonb_build_object('synonym', (
      CASE elem->>'word'
        WHEN 'achieve' THEN 'to accomplish, to attain'
        WHEN 'academic' THEN 'scholarly, relating to education'
        WHEN 'curriculum' THEN 'course of study, syllabus'
        WHEN 'knowledge' THEN 'understanding, awareness, information'
        WHEN 'lecture' THEN 'talk, presentation, speech'
        WHEN 'scholarship' THEN 'grant, financial award for study'
        WHEN 'qualification' THEN 'credential, certification, skill'
        WHEN 'institution' THEN 'organization, establishment'
        WHEN 'graduate' THEN 'person who completes a degree'
        WHEN 'literacy' THEN 'ability to read and write'
        ELSE NULL
      END
    ))
  )
  FROM jsonb_array_elements(words_content) AS elem
)
WHERE day_number = 1;


-- Kun 2 uchun sinonimlarni qo'shish
UPDATE daily_tasks
SET words_content = (
  SELECT jsonb_agg(
    elem || jsonb_build_object('synonym', (
      CASE elem->>'word'
        WHEN 'innovative' THEN 'creative, groundbreaking, original'
        WHEN 'device' THEN 'gadget, apparatus, tool'
        WHEN 'artificial' THEN 'man-made, synthetic, not natural'
        WHEN 'upgrade' THEN 'to improve, to enhance'
        WHEN 'efficient' THEN 'effective, productive, not wasteful'
        WHEN 'network' THEN 'system of connections, web'
        WHEN 'automation' THEN 'mechanization, use of automatic equipment'
        WHEN 'sustainable' THEN 'able to continue, eco-friendly'
        WHEN 'breakthrough' THEN 'major discovery, significant advance'
        WHEN 'obsolete' THEN 'outdated, no longer used'
        ELSE NULL
      END
    ))
  )
  FROM jsonb_array_elements(words_content) AS elem
)
WHERE day_number = 2;


-- Kun 3 uchun sinonimlarni qo'shish
UPDATE daily_tasks
SET words_content = (
  SELECT jsonb_agg(
    elem || jsonb_build_object('synonym', (
      CASE elem->>'word'
        WHEN 'pollution' THEN 'contamination, dirtying of the environment'
        WHEN 'renewable' THEN 'able to be replenished, sustainable'
        WHEN 'ecosystem' THEN 'biological community, natural system'
        WHEN 'emission' THEN 'discharge, release of gas or substance'
        WHEN 'conservation' THEN 'preservation, protection of nature'
        WHEN 'deforestation' THEN 'clearing of forests, removal of trees'
        WHEN 'drought' THEN 'prolonged dry period, water shortage'
        WHEN 'biodiversity' THEN 'variety of plant and animal life'
        WHEN 'carbon footprint' THEN 'amount of carbon dioxide produced by activities'
        WHEN 'habitat' THEN 'natural home, environment of a species'
        ELSE NULL
      END
    ))
  )
  FROM jsonb_array_elements(words_content) AS elem
)
WHERE day_number = 3;


-- Kun 4 uchun sinonimlarni qo'shish
UPDATE daily_tasks
SET words_content = (
  SELECT jsonb_agg(
    elem || jsonb_build_object('synonym', (
      CASE elem->>'word'
        WHEN 'nutrition' THEN 'diet, nourishment'
        WHEN 'exercise' THEN 'physical activity, workout'
        WHEN 'immune system' THEN 'body''s defense system against disease'
        WHEN 'chronic' THEN 'long-lasting, persistent'
        WHEN 'diagnosis' THEN 'identification of an illness'
        WHEN 'wellbeing' THEN 'welfare, state of being healthy and happy'
        WHEN 'symptom' THEN 'sign of illness, indication'
        WHEN 'prevent' THEN 'to stop, to avoid'
        WHEN 'recovery' THEN 'healing, return to health'
        WHEN 'lifestyle' THEN 'way of living, habits'
        ELSE NULL
      END
    ))
  )
  FROM jsonb_array_elements(words_content) AS elem
)
WHERE day_number = 4;


-- Kun 5 uchun sinonimlarni qo'shish
UPDATE daily_tasks
SET words_content = (
  SELECT jsonb_agg(
    elem || jsonb_build_object('synonym', (
      CASE elem->>'word'
        WHEN 'community' THEN 'group of people, society'
        WHEN 'diverse' THEN 'varied, different, mixed'
        WHEN 'inequality' THEN 'unfairness, disparity'
        WHEN 'tradition' THEN 'custom, established practice'
        WHEN 'generation' THEN 'age group, cohort'
        WHEN 'urbanization' THEN 'growth of cities, city development'
        WHEN 'migration' THEN 'movement of people, relocation'
        WHEN 'welfare' THEN 'social support, wellbeing assistance'
        WHEN 'discrimination' THEN 'unfair treatment, bias'
        WHEN 'civic' THEN 'related to citizenship, public'
        ELSE NULL
      END
    ))
  )
  FROM jsonb_array_elements(words_content) AS elem
)
WHERE day_number = 5;


-- Kun 6 uchun sinonimlarni qo'shish
UPDATE daily_tasks
SET words_content = (
  SELECT jsonb_agg(
    elem || jsonb_build_object('synonym', (
      CASE elem->>'word'
        WHEN 'economy' THEN 'financial system, market'
        WHEN 'investment' THEN 'funding, capital put into something'
        WHEN 'inflation' THEN 'rise in prices, decrease in purchasing power'
        WHEN 'revenue' THEN 'income, earnings'
        WHEN 'consumer' THEN 'buyer, customer'
        WHEN 'entrepreneur' THEN 'business founder, innovator'
        WHEN 'trade' THEN 'commerce, exchange of goods'
        WHEN 'competitive' THEN 'rivalrous, characterized by competition'
        WHEN 'unemployment' THEN 'joblessness, lack of work'
        WHEN 'subsidy' THEN 'financial aid, government grant'
        ELSE NULL
      END
    ))
  )
  FROM jsonb_array_elements(words_content) AS elem
)
WHERE day_number = 6;


-- Kun 7 uchun sinonimlarni qo'shish
UPDATE daily_tasks
SET words_content = (
  SELECT jsonb_agg(
    elem || jsonb_build_object('synonym', (
      CASE elem->>'word'
        WHEN 'heritage' THEN 'legacy, cultural inheritance'
        WHEN 'custom' THEN 'tradition, established practice'
        WHEN 'globalization' THEN 'worldwide integration, interconnectedness'
        WHEN 'identity' THEN 'sense of self, individuality'
        WHEN 'festival' THEN 'celebration, public event'
        WHEN 'preserve' THEN 'to protect, to maintain'
        WHEN 'influence' THEN 'effect, impact'
        WHEN 'diversity' THEN 'variety, range of differences'
        WHEN 'authentic' THEN 'genuine, real, original'
        WHEN 'ritual' THEN 'ceremony, established procedure'
        ELSE NULL
      END
    ))
  )
  FROM jsonb_array_elements(words_content) AS elem
)
WHERE day_number = 7;


-- Kun 8 uchun sinonimlarni qo'shish
UPDATE daily_tasks
SET words_content = (
  SELECT jsonb_agg(
    elem || jsonb_build_object('synonym', (
      CASE elem->>'word'
        WHEN 'assess' THEN 'to evaluate, to judge'
        WHEN 'criteria' THEN 'standards, benchmarks'
        WHEN 'coherent' THEN 'logical, well-organized'
        WHEN 'paraphrase' THEN 'to reword, to restate'
        WHEN 'fluency' THEN 'smoothness of speech, ease of expression'
        WHEN 'vocabulary' THEN 'word knowledge, lexicon'
        WHEN 'accuracy' THEN 'correctness, precision'
        WHEN 'strategy' THEN 'plan, approach'
        WHEN 'confidence' THEN 'self-assurance, certainty'
        WHEN 'achievement' THEN 'accomplishment, success'
        ELSE NULL
      END
    ))
  )
  FROM jsonb_array_elements(words_content) AS elem
)
WHERE day_number = 8;
