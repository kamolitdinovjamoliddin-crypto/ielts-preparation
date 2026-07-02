-- Grammar Lessons - Kunlar 21-30
-- Bu faylni Supabase SQL Editor'da alohida ishga tushiring
-- MUHIM: avval 06_create_grammar_tables.sql ni ishga tushirgan bo'lishingiz kerak

INSERT INTO grammar_lessons (day_number, title, explanation, examples, questions) VALUES
(
  21,
  'Prepositions of Time (in, on, at)',
  'Prepositions of time tell us when something happens.

''In'' is used for months, years, seasons, and longer periods: in May, in 2020, in summer, in the morning.

''On'' is used for specific days and dates: on Monday, on my birthday, on 5th May.

''At'' is used for specific times and certain fixed expressions: at 7 o''clock, at night, at the weekend, at Christmas.',
  '[{"sentence": "I was born in 2005.", "note": "in + year"}, {"sentence": "We have class on Mondays.", "note": "on + day"}, {"sentence": "The meeting starts at 9 o''clock.", "note": "at + clock time"}, {"sentence": "She studies in the evening.", "note": "in + part of day"}, {"sentence": "They go to the village at the weekend.", "note": "at + the weekend"}]'::jsonb,
  '[{"id": "g21q1", "type": "multiple-choice", "text": "My birthday is ___ June.", "options": ["in", "on", "at"], "correctAnswer": "in"}, {"id": "g21q2", "type": "multiple-choice", "text": "We meet ___ Fridays.", "options": ["in", "on", "at"], "correctAnswer": "on"}, {"id": "g21q3", "type": "multiple-choice", "text": "The film starts ___ 8 pm.", "options": ["in", "on", "at"], "correctAnswer": "at"}, {"id": "g21q4", "type": "fill-blank", "text": "I usually study ___ the morning.", "correctAnswer": ["in"]}, {"id": "g21q5", "type": "fill-blank", "text": "She was born ___ 2002.", "correctAnswer": ["in"]}, {"id": "g21q6", "type": "multiple-choice", "text": "We don''t have school ___ the weekend.", "options": ["in", "on", "at"], "correctAnswer": "at"}, {"id": "g21q7", "type": "fill-blank", "text": "The shop closes ___ midnight.", "correctAnswer": ["at"]}, {"id": "g21q8", "type": "multiple-choice", "text": "I will see you ___ Sunday.", "options": ["in", "on", "at"], "correctAnswer": "on"}, {"id": "g21q9", "type": "fill-blank", "text": "It often snows ___ winter.", "correctAnswer": ["in"]}, {"id": "g21q10", "type": "multiple-choice", "text": "We celebrate ___ Christmas every year.", "options": ["in", "on", "at"], "correctAnswer": "at"}]'::jsonb
),
(
  22,
  'Adverbs of Manner (quickly, well, carefully, slowly)',
  'Adverbs of manner describe how an action happens. They often answer the question ''How?''

Most adverbs of manner are formed by adding -ly to an adjective: quick -> quickly, slow -> slowly, careful -> carefully.

Some adverbs are irregular: good -> well, fast -> fast (no change).

Adverbs of manner usually come after the verb, or after the object if there is one: She speaks English fluently. He drives carefully.',
  '[{"sentence": "She speaks English fluently.", "note": "fluent -> fluently"}, {"sentence": "He drives very carefully.", "note": "careful -> carefully"}, {"sentence": "They walked slowly through the park.", "note": "slow -> slowly"}, {"sentence": "My sister sings well.", "note": "good -> well (irregular)"}, {"sentence": "He runs fast.", "note": "fast stays the same"}]'::jsonb,
  '[{"id": "g22q1", "type": "fill-blank", "text": "She walks ___ (quick).", "correctAnswer": ["quickly"]}, {"id": "g22q2", "type": "fill-blank", "text": "He plays the piano very ___ (good).", "correctAnswer": ["well"]}, {"id": "g22q3", "type": "multiple-choice", "text": "What is the adverb form of ''careful''?", "options": ["carefuly", "carefully", "carefulley"], "correctAnswer": "carefully"}, {"id": "g22q4", "type": "fill-blank", "text": "Please speak ___ (slow), I don''t understand.", "correctAnswer": ["slowly"]}, {"id": "g22q5", "type": "multiple-choice", "text": "He answered the question ___.", "options": ["correct", "correctly", "correctness"], "correctAnswer": "correctly"}, {"id": "g22q6", "type": "fill-blank", "text": "She did her homework ___ (quiet).", "correctAnswer": ["quietly"]}, {"id": "g22q7", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["He runs very fastly.", "He runs very fast.", "He runs very fasted."], "correctAnswer": "He runs very fast."}, {"id": "g22q8", "type": "fill-blank", "text": "They worked ___ (hard) all day.", "correctAnswer": ["hard"]}, {"id": "g22q9", "type": "multiple-choice", "text": "She sings ___.", "options": ["beautiful", "beautifully", "beauty"], "correctAnswer": "beautifully"}, {"id": "g22q10", "type": "fill-blank", "text": "He passed the exam ___ (easy).", "correctAnswer": ["easily"]}]'::jsonb
),
(
  23,
  'Comparative Adjectives (bigger, more interesting)',
  'We use comparative adjectives to compare two things.

Short adjectives (one syllable) add -er: tall -> taller, big -> bigger (double the consonant).

Adjectives ending in -y change y to i and add -er: happy -> happier.

Longer adjectives (two or more syllables) use ''more'' + adjective: more interesting, more beautiful.

We use ''than'' to compare two things: She is taller than her brother.

Some adjectives are irregular: good -> better, bad -> worse, far -> farther/further.',
  '[{"sentence": "My brother is taller than me.", "note": "tall -> taller"}, {"sentence": "This book is more interesting than that one.", "note": "long adjective + more"}, {"sentence": "Today is hotter than yesterday.", "note": "hot -> hotter (double letter)"}, {"sentence": "She is happier than before.", "note": "happy -> happier"}, {"sentence": "This test was worse than the last one.", "note": "bad -> worse (irregular)"}]'::jsonb,
  '[{"id": "g23q1", "type": "fill-blank", "text": "This box is ___ (big) than that one.", "correctAnswer": ["bigger"]}, {"id": "g23q2", "type": "fill-blank", "text": "She is ___ (tall) than her sister.", "correctAnswer": ["taller"]}, {"id": "g23q3", "type": "fill-blank", "text": "This movie is ___ (interesting) than the last one.", "correctAnswer": ["more interesting"]}, {"id": "g23q4", "type": "multiple-choice", "text": "What is the comparative of ''good''?", "options": ["gooder", "better", "more good"], "correctAnswer": "better"}, {"id": "g23q5", "type": "multiple-choice", "text": "What is the comparative of ''happy''?", "options": ["happyer", "happier", "more happy"], "correctAnswer": "happier"}, {"id": "g23q6", "type": "fill-blank", "text": "Today is ___ (cold) than yesterday.", "correctAnswer": ["colder"]}, {"id": "g23q7", "type": "fill-blank", "text": "This phone is ___ (expensive) than mine.", "correctAnswer": ["more expensive"]}, {"id": "g23q8", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["He is more tall than me.", "He is taller than me.", "He is more taller than me."], "correctAnswer": "He is taller than me."}, {"id": "g23q9", "type": "fill-blank", "text": "My old car was ___ (bad) than my new one.", "correctAnswer": ["worse"]}, {"id": "g23q10", "type": "fill-blank", "text": "This city is ___ (big) than my hometown.", "correctAnswer": ["bigger"]}]'::jsonb
),
(
  24,
  'Superlative Adjectives (the biggest, the most interesting)',
  'We use superlative adjectives to compare three or more things, to say one is the extreme example.

Short adjectives add -est: tall -> the tallest, big -> the biggest (double consonant).

Adjectives ending in -y change y to i and add -est: happy -> the happiest.

Longer adjectives use ''the most'' + adjective: the most interesting, the most beautiful.

We always use ''the'' before a superlative.

Irregular forms: good -> the best, bad -> the worst, far -> the farthest/furthest.',
  '[{"sentence": "She is the tallest student in the class.", "note": "tall -> the tallest"}, {"sentence": "This is the most beautiful place I''ve seen.", "note": "long adjective + the most"}, {"sentence": "Today is the hottest day of the year.", "note": "hot -> the hottest"}, {"sentence": "He is the best player on the team.", "note": "good -> the best (irregular)"}, {"sentence": "That was the worst movie I''ve ever watched.", "note": "bad -> the worst (irregular)"}]'::jsonb,
  '[{"id": "g24q1", "type": "fill-blank", "text": "She is the ___ (tall) girl in the class.", "correctAnswer": ["tallest"]}, {"id": "g24q2", "type": "fill-blank", "text": "This is the ___ (interesting) book I''ve read.", "correctAnswer": ["most interesting"]}, {"id": "g24q3", "type": "multiple-choice", "text": "What is the superlative of ''good''?", "options": ["the goodest", "the best", "the most good"], "correctAnswer": "the best"}, {"id": "g24q4", "type": "fill-blank", "text": "Everest is the ___ (high) mountain in the world.", "correctAnswer": ["highest"]}, {"id": "g24q5", "type": "multiple-choice", "text": "What is the superlative of ''bad''?", "options": ["the baddest", "the worst", "the most bad"], "correctAnswer": "the worst"}, {"id": "g24q6", "type": "fill-blank", "text": "This is the ___ (expensive) restaurant in the city.", "correctAnswer": ["most expensive"]}, {"id": "g24q7", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["He is the most tall in his family.", "He is the tallest in his family.", "He is most tallest in his family."], "correctAnswer": "He is the tallest in his family."}, {"id": "g24q8", "type": "fill-blank", "text": "January is the ___ (cold) month of the year here.", "correctAnswer": ["coldest"]}, {"id": "g24q9", "type": "fill-blank", "text": "She is the ___ (happy) person I know.", "correctAnswer": ["happiest"]}, {"id": "g24q10", "type": "multiple-choice", "text": "This was the ___ exam of the year.", "options": ["difficultest", "most difficult", "more difficult"], "correctAnswer": "most difficult"}]'::jsonb
),
(
  25,
  'Future: going to',
  'We use ''going to'' to talk about plans and intentions for the future - things we have already decided to do.

Form: am/is/are + going to + base verb. I am going to study tonight. She is going to visit her parents.

We also use ''going to'' to make predictions based on what we can see now: Look at those clouds! It''s going to rain.

Negative: am/is/are + not + going to. Question: Am/Is/Are + subject + going to...?',
  '[{"sentence": "I am going to start a new job next month.", "note": "plan/intention"}, {"sentence": "She is going to study medicine.", "note": "plan/intention"}, {"sentence": "Look at the sky! It''s going to rain.", "note": "prediction based on evidence"}, {"sentence": "We are not going to travel this summer.", "note": "negative"}, {"sentence": "Are you going to come to the party?", "note": "question"}]'::jsonb,
  '[{"id": "g25q1", "type": "fill-blank", "text": "I ___ (going to / study) tonight.", "correctAnswer": ["am going to study"]}, {"id": "g25q2", "type": "fill-blank", "text": "She ___ (going to / visit) her grandmother tomorrow.", "correctAnswer": ["is going to visit"]}, {"id": "g25q3", "type": "multiple-choice", "text": "Look at those dark clouds! It ___ rain.", "options": ["is going to", "are going to", "go to"], "correctAnswer": "is going to"}, {"id": "g25q4", "type": "fill-blank", "text": "We ___ (going to / travel) to Samarkand next week.", "correctAnswer": ["are going to travel"]}, {"id": "g25q5", "type": "multiple-choice", "text": "___ you going to attend the meeting?", "options": ["Is", "Are", "Do"], "correctAnswer": "Are"}, {"id": "g25q6", "type": "fill-blank", "text": "He ___ (not / going to / come) to the party.", "correctAnswer": ["is not going to come", "isn''t going to come"]}, {"id": "g25q7", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["I going to study.", "I am going to study.", "I am go to study."], "correctAnswer": "I am going to study."}, {"id": "g25q8", "type": "fill-blank", "text": "They ___ (going to / build) a new house.", "correctAnswer": ["are going to build"]}, {"id": "g25q9", "type": "multiple-choice", "text": "What ___ you going to do this weekend?", "options": ["is", "are", "do"], "correctAnswer": "are"}, {"id": "g25q10", "type": "fill-blank", "text": "She ___ (going to / be) a doctor in the future.", "correctAnswer": ["is going to be"]}]'::jsonb
),
(
  26,
  'Future: will',
  'We use ''will'' for predictions, promises, offers, and decisions made at the moment of speaking.

Form: will + base verb (the same for all subjects). I will help you. She will call later.

Negative: will not (won''t). I won''t be late.

Question: Will + subject + verb? Will you come to the meeting?

We often use ''will'' with words like: probably, I think, I''m sure, tomorrow, next year.',
  '[{"sentence": "I think it will rain tomorrow.", "note": "prediction"}, {"sentence": "I will help you with your homework.", "note": "offer/promise"}, {"sentence": "She won''t be at the meeting today.", "note": "negative"}, {"sentence": "Will you call me later?", "note": "question"}, {"sentence": "I''m sure they will enjoy the trip.", "note": "prediction with I''m sure"}]'::jsonb,
  '[{"id": "g26q1", "type": "fill-blank", "text": "I think she ___ (will) like this gift.", "correctAnswer": ["will"]}, {"id": "g26q2", "type": "fill-blank", "text": "He ___ (will, negative) be at school tomorrow.", "correctAnswer": ["won''t", "will not"]}, {"id": "g26q3", "type": "multiple-choice", "text": "___ you help me with this bag?", "options": ["Will", "Are", "Do"], "correctAnswer": "Will"}, {"id": "g26q4", "type": "fill-blank", "text": "We ___ (will) probably arrive late.", "correctAnswer": ["will"]}, {"id": "g26q5", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["She wills come tomorrow.", "She will comes tomorrow.", "She will come tomorrow."], "correctAnswer": "She will come tomorrow."}, {"id": "g26q6", "type": "fill-blank", "text": "I''m sure they ___ (will) win the match.", "correctAnswer": ["will"]}, {"id": "g26q7", "type": "multiple-choice", "text": "___ it be sunny tomorrow?", "options": ["Will", "Is", "Does"], "correctAnswer": "Will"}, {"id": "g26q8", "type": "fill-blank", "text": "Don''t worry, I ___ (will) be there on time.", "correctAnswer": ["will"]}, {"id": "g26q9", "type": "multiple-choice", "text": "Choose the correct negative form.", "options": ["I willn''t go.", "I won''t go.", "I will not goes."], "correctAnswer": "I won''t go."}, {"id": "g26q10", "type": "fill-blank", "text": "They ___ (will) probably move to a new city next year.", "correctAnswer": ["will"]}]'::jsonb
),
(
  27,
  'Modals: must / should',
  '''Must'' expresses strong obligation or necessity - something is required: You must wear a seatbelt.

''Mustn''t'' (must not) expresses prohibition - something is not allowed: You mustn''t smoke here.

''Should'' expresses advice or recommendation - something is a good idea, but not required: You should drink more water.

''Shouldn''t'' (should not) expresses that something is not a good idea.

Both must and should are followed by the base form of the verb, without ''to''.',
  '[{"sentence": "You must wear a seatbelt in the car.", "note": "strong obligation"}, {"sentence": "You mustn''t smoke in the hospital.", "note": "prohibition"}, {"sentence": "You should study more for the exam.", "note": "advice"}, {"sentence": "She shouldn''t eat so much sugar.", "note": "advice against"}, {"sentence": "Students must arrive on time.", "note": "rule/obligation"}]'::jsonb,
  '[{"id": "g27q1", "type": "multiple-choice", "text": "You ___ wear a helmet when riding a motorcycle. (rule)", "options": ["must", "should", "can"], "correctAnswer": "must"}, {"id": "g27q2", "type": "multiple-choice", "text": "You ___ see a doctor if you feel sick. (advice)", "options": ["must", "should", "mustn''t"], "correctAnswer": "should"}, {"id": "g27q3", "type": "fill-blank", "text": "You ___ (mustn''t) park here. It''s forbidden.", "correctAnswer": ["mustn''t", "must not"]}, {"id": "g27q4", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["You must to go now.", "You must goes now.", "You must go now."], "correctAnswer": "You must go now."}, {"id": "g27q5", "type": "fill-blank", "text": "We ___ (should) eat more vegetables.", "correctAnswer": ["should"]}, {"id": "g27q6", "type": "multiple-choice", "text": "Students ___ bring their ID card to the exam. (rule)", "options": ["must", "should", "could"], "correctAnswer": "must"}, {"id": "g27q7", "type": "fill-blank", "text": "You ___ (shouldn''t) stay up so late.", "correctAnswer": ["shouldn''t", "should not"]}, {"id": "g27q8", "type": "multiple-choice", "text": "Choose the sentence with strong prohibition.", "options": ["You shouldn''t run here.", "You mustn''t run here.", "You can''t run here, maybe."], "correctAnswer": "You mustn''t run here."}, {"id": "g27q9", "type": "fill-blank", "text": "I think you ___ (should) apologize to her.", "correctAnswer": ["should"]}, {"id": "g27q10", "type": "multiple-choice", "text": "All passengers ___ fasten their seatbelt. (rule)", "options": ["must", "should", "would"], "correctAnswer": "must"}]'::jsonb
),
(
  28,
  'Object Pronouns (me, you, him, her, it, us, them)',
  'Object pronouns replace a noun that receives the action of the verb (the object of the sentence).

Subject -> Object: I -> me, you -> you, he -> him, she -> her, it -> it, we -> us, they -> them.

Object pronouns come after the verb, or after a preposition.

Compare: ''He loves her'' (her = object, receives the action) with ''She loves him'' (she = subject, him = object).',
  '[{"sentence": "She called me yesterday.", "note": "me = object of called"}, {"sentence": "I saw him at the market.", "note": "him = object of saw"}, {"sentence": "Can you help us, please?", "note": "us = object of help"}, {"sentence": "I gave the book to her.", "note": "her = object after preposition ''to''"}, {"sentence": "We invited them to the party.", "note": "them = object of invited"}]'::jsonb,
  '[{"id": "g28q1", "type": "multiple-choice", "text": "Can you help ___? (me)", "options": ["I", "me", "my"], "correctAnswer": "me"}, {"id": "g28q2", "type": "multiple-choice", "text": "I saw ___ at the cinema. (he)", "options": ["he", "him", "his"], "correctAnswer": "him"}, {"id": "g28q3", "type": "fill-blank", "text": "She gave the keys to ___. (I)", "correctAnswer": ["me"]}, {"id": "g28q4", "type": "multiple-choice", "text": "We invited ___ to dinner. (they)", "options": ["they", "them", "their"], "correctAnswer": "them"}, {"id": "g28q5", "type": "fill-blank", "text": "Please call ___ tonight. (we)", "correctAnswer": ["us"]}, {"id": "g28q6", "type": "multiple-choice", "text": "I bought a gift for ___. (she)", "options": ["she", "her", "hers"], "correctAnswer": "her"}, {"id": "g28q7", "type": "fill-blank", "text": "Can you give this letter to ___? (he)", "correctAnswer": ["him"]}, {"id": "g28q8", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["He loves she.", "He loves her.", "He loves hers."], "correctAnswer": "He loves her."}, {"id": "g28q9", "type": "fill-blank", "text": "The teacher helped ___ with the homework. (they)", "correctAnswer": ["them"]}, {"id": "g28q10", "type": "multiple-choice", "text": "Look at that cat. Do you see ___?", "options": ["it", "its", "they"], "correctAnswer": "it"}]'::jsonb
),
(
  29,
  'Conjunctions: and, but, because, so',
  'Conjunctions connect words, phrases, or sentences.

''And'' adds information: I like tea and coffee.

''But'' shows contrast: I like tea, but I don''t like coffee.

''Because'' gives a reason: I stayed home because I was sick.

''So'' shows a result: I was tired, so I went to bed early.

Note the difference between ''because'' (gives the reason) and ''so'' (gives the result): I was sick, so I stayed home = I stayed home because I was sick.',
  '[{"sentence": "She likes apples and oranges.", "note": "and = adds information"}, {"sentence": "He is tired, but he wants to finish the work.", "note": "but = contrast"}, {"sentence": "I didn''t go out because it was raining.", "note": "because = reason"}, {"sentence": "It was raining, so I didn''t go out.", "note": "so = result"}, {"sentence": "She studied hard, so she passed the exam.", "note": "so = result"}]'::jsonb,
  '[{"id": "g29q1", "type": "multiple-choice", "text": "I like rice ___ noodles.", "options": ["and", "but", "because"], "correctAnswer": "and"}, {"id": "g29q2", "type": "multiple-choice", "text": "She is rich, ___ she isn''t happy.", "options": ["and", "but", "so"], "correctAnswer": "but"}, {"id": "g29q3", "type": "multiple-choice", "text": "I was late ___ the bus didn''t come.", "options": ["and", "but", "because"], "correctAnswer": "because"}, {"id": "g29q4", "type": "fill-blank", "text": "It was cold, ___ I wore a jacket. (result)", "correctAnswer": ["so"]}, {"id": "g29q5", "type": "multiple-choice", "text": "He failed the exam ___ he didn''t study.", "options": ["so", "because", "and"], "correctAnswer": "because"}, {"id": "g29q6", "type": "fill-blank", "text": "She was hungry, ___ she ate a sandwich. (result)", "correctAnswer": ["so"]}, {"id": "g29q7", "type": "multiple-choice", "text": "I want to go, ___ I don''t have time.", "options": ["and", "but", "because"], "correctAnswer": "but"}, {"id": "g29q8", "type": "fill-blank", "text": "He likes football ___ basketball.", "correctAnswer": ["and"]}, {"id": "g29q9", "type": "multiple-choice", "text": "We stayed inside ___ it was raining heavily.", "options": ["so", "because", "but"], "correctAnswer": "because"}, {"id": "g29q10", "type": "fill-blank", "text": "I was tired, ___ I went to bed early.", "correctAnswer": ["so"]}]'::jsonb
),
(
  30,
  'Quantifiers: some, any, much, many',
  'We use ''some'' in affirmative sentences and offers/requests: I have some money. Would you like some tea?

We use ''any'' in negative sentences and questions: I don''t have any money. Do you have any questions?

We use ''much'' with uncountable nouns (singular): How much time do we have? There isn''t much sugar left.

We use ''many'' with countable nouns (plural): How many books do you have? There aren''t many people here.',
  '[{"sentence": "I have some friends in London.", "note": "some + affirmative"}, {"sentence": "I don''t have any brothers.", "note": "any + negative"}, {"sentence": "Do you have any free time today?", "note": "any + question"}, {"sentence": "There isn''t much water in the bottle.", "note": "much + uncountable"}, {"sentence": "How many languages do you speak?", "note": "many + countable"}]'::jsonb,
  '[{"id": "g30q1", "type": "multiple-choice", "text": "I have ___ apples in my bag.", "options": ["some", "any", "much"], "correctAnswer": "some"}, {"id": "g30q2", "type": "multiple-choice", "text": "I don''t have ___ money right now.", "options": ["some", "any", "many"], "correctAnswer": "any"}, {"id": "g30q3", "type": "multiple-choice", "text": "How ___ sugar do you want in your tea?", "options": ["much", "many", "some"], "correctAnswer": "much"}, {"id": "g30q4", "type": "multiple-choice", "text": "How ___ books did you read this year?", "options": ["much", "many", "any"], "correctAnswer": "many"}, {"id": "g30q5", "type": "fill-blank", "text": "Would you like ___ coffee? (offer)", "correctAnswer": ["some"]}, {"id": "g30q6", "type": "fill-blank", "text": "Do you have ___ questions? (question)", "correctAnswer": ["any"]}, {"id": "g30q7", "type": "fill-blank", "text": "There aren''t ___ (many) chairs in the room.", "correctAnswer": ["many"]}, {"id": "g30q8", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["I don''t have some time.", "I don''t have any time.", "I don''t have many time."], "correctAnswer": "I don''t have any time."}, {"id": "g30q9", "type": "fill-blank", "text": "There isn''t ___ (much) milk in the fridge.", "correctAnswer": ["much"]}, {"id": "g30q10", "type": "multiple-choice", "text": "She bought ___ new clothes for the trip.", "options": ["some", "any", "much"], "correctAnswer": "some"}]'::jsonb
);
