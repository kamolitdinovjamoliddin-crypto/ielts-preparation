-- Grammar Lessons - Kunlar 11-20
-- Avval 06_create_grammar_tables.sql ishga tushirilgan bo'lishi kerak

DELETE FROM grammar_lessons WHERE day_number BETWEEN 11 AND 20;

INSERT INTO grammar_lessons (day_number, title, explanation, examples, questions) VALUES
(
  11,
  'Present Continuous (am/is/are + -ing)',
  'We use the Present Continuous for actions happening right now, or around the present time.

Form: am/is/are + verb-ing. I am working, she is reading, they are playing.

Most verbs simply add -ing: play -> playing, read -> reading.
Verbs ending in -e usually drop the e: make -> making, write -> writing.
Short verbs ending in one vowel + one consonant double the last letter: run -> running, sit -> sitting.

We also use the Present Continuous for future arrangements: I am meeting her tomorrow.',
  '[{"sentence": "I am studying English now.", "note": "study -> studying"}, {"sentence": "She is writing an email.", "note": "write -> writing (drop e)"}, {"sentence": "They are running in the park.", "note": "run -> running (double letter)"}, {"sentence": "He is not sleeping right now.", "note": "negative form"}, {"sentence": "Are you listening to me?", "note": "question form"}]'::jsonb,
  '[{"id": "g11q1", "type": "fill-blank", "text": "I ___ (write) a letter right now.", "correctAnswer": ["am writing"]}, {"id": "g11q2", "type": "fill-blank", "text": "She ___ (read) a book at the moment.", "correctAnswer": ["is reading"]}, {"id": "g11q3", "type": "fill-blank", "text": "They ___ (play) football now.", "correctAnswer": ["are playing"]}, {"id": "g11q4", "type": "multiple-choice", "text": "What is the -ing form of ''run''?", "options": ["runing", "running", "runeing"], "correctAnswer": "running"}, {"id": "g11q5", "type": "multiple-choice", "text": "What is the -ing form of ''make''?", "options": ["makeing", "making", "makking"], "correctAnswer": "making"}, {"id": "g11q6", "type": "fill-blank", "text": "He ___ (not work) today.", "correctAnswer": ["is not working", "isn''t working"]}, {"id": "g11q7", "type": "multiple-choice", "text": "___ you listening to me?", "options": ["Do", "Are", "Is"], "correctAnswer": "Are"}, {"id": "g11q8", "type": "fill-blank", "text": "We ___ (have) lunch right now.", "correctAnswer": ["are having"]}, {"id": "g11q9", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["She is sit on the chair.", "She is sitting on the chair.", "She sitting on the chair."], "correctAnswer": "She is sitting on the chair."}, {"id": "g11q10", "type": "fill-blank", "text": "I ___ (meet) my friend tomorrow evening.", "correctAnswer": ["am meeting"]}]'::jsonb
),
(
  12,
  'Present Simple vs Present Continuous',
  'Present Simple is for habits, routines, facts, and permanent situations: I work in a bank. Water boils at 100 degrees.

Present Continuous is for actions happening right now, or temporary situations: I am working right now. She is staying with friends this week.

Some words signal which tense to use: words like ''always, usually, every day'' often go with Present Simple, while ''now, right now, at the moment'' go with Present Continuous.

Some verbs (like, want, know, believe) are not normally used in the continuous form: we say ''I like it'', not ''I am liking it''.',
  '[{"sentence": "I usually walk to school.", "note": "habit -> Present Simple"}, {"sentence": "I am walking to school right now.", "note": "happening now -> Present Continuous"}, {"sentence": "She works at a hospital.", "note": "permanent situation -> Present Simple"}, {"sentence": "She is working late this week.", "note": "temporary -> Present Continuous"}, {"sentence": "I know the answer.", "note": "''know'' is not used in continuous form"}]'::jsonb,
  '[{"id": "g12q1", "type": "multiple-choice", "text": "I ___ (study) English every day.", "options": ["study", "am studying", "studies"], "correctAnswer": "study"}, {"id": "g12q2", "type": "multiple-choice", "text": "Look! It ___ (rain) outside.", "options": ["rains", "is raining", "rain"], "correctAnswer": "is raining"}, {"id": "g12q3", "type": "multiple-choice", "text": "She ___ (not like) loud music. (general fact)", "options": ["doesn''t like", "isn''t liking", "don''t like"], "correctAnswer": "doesn''t like"}, {"id": "g12q4", "type": "multiple-choice", "text": "Right now, they ___ (have) dinner.", "options": ["have", "are having", "has"], "correctAnswer": "are having"}, {"id": "g12q5", "type": "fill-blank", "text": "He ___ (work) in a bank. (permanent job)", "correctAnswer": ["works"]}, {"id": "g12q6", "type": "fill-blank", "text": "Be quiet, the baby ___ (sleep).", "correctAnswer": ["is sleeping"]}, {"id": "g12q7", "type": "multiple-choice", "text": "Which sentence is correct?", "options": ["I am knowing the answer.", "I know the answer.", "I knows the answer."], "correctAnswer": "I know the answer."}, {"id": "g12q8", "type": "fill-blank", "text": "We ___ (usually / have) breakfast at 7.", "correctAnswer": ["usually have"]}, {"id": "g12q9", "type": "multiple-choice", "text": "At the moment, she ___ (study) for her exam.", "options": ["studies", "is studying", "study"], "correctAnswer": "is studying"}, {"id": "g12q10", "type": "fill-blank", "text": "The sun ___ (rise) in the east. (general fact)", "correctAnswer": ["rises"]}]'::jsonb
),
(
  13,
  'There is / There are',
  'We use ''There is'' with singular and uncountable nouns, and ''There are'' with plural nouns, to say that something exists or is present in a place.

There is a book on the table. There are three books on the table.

Negative: There isn''t / There aren''t. Question: Is there...? Are there...?

We often use ''There is/are'' with words like ''a'', ''some'', ''any'', and numbers.',
  '[{"sentence": "There is a cat in the garden.", "note": "singular noun"}, {"sentence": "There are five chairs in the room.", "note": "plural noun"}, {"sentence": "There isn''t any milk in the fridge.", "note": "negative, uncountable"}, {"sentence": "Is there a bank near here?", "note": "question, singular"}, {"sentence": "Are there any students in the classroom?", "note": "question, plural"}]'::jsonb,
  '[{"id": "g13q1", "type": "multiple-choice", "text": "___ a pen on the desk.", "options": ["There is", "There are", "There be"], "correctAnswer": "There is"}, {"id": "g13q2", "type": "multiple-choice", "text": "___ many books in the library.", "options": ["There is", "There are", "It is"], "correctAnswer": "There are"}, {"id": "g13q3", "type": "fill-blank", "text": "___ a problem with my computer.", "correctAnswer": ["There is"]}, {"id": "g13q4", "type": "fill-blank", "text": "___ many people at the party.", "correctAnswer": ["There were", "There are"]}, {"id": "g13q5", "type": "multiple-choice", "text": "___ any tomatoes in the kitchen?", "options": ["Is there", "Are there", "Does there"], "correctAnswer": "Are there"}, {"id": "g13q6", "type": "multiple-choice", "text": "___ a good restaurant near your house?", "options": ["Is there", "Are there", "Do there"], "correctAnswer": "Is there"}, {"id": "g13q7", "type": "fill-blank", "text": "There ___ (not) any sugar left.", "correctAnswer": ["isn''t", "is not"]}, {"id": "g13q8", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["There is two windows.", "There are two windows.", "There two windows."], "correctAnswer": "There are two windows."}, {"id": "g13q9", "type": "fill-blank", "text": "___ a lot of traffic this morning.", "correctAnswer": ["There was", "There is"]}, {"id": "g13q10", "type": "multiple-choice", "text": "How many chairs ___ in the room?", "options": ["is there", "are there", "there are"], "correctAnswer": "are there"}]'::jsonb
),
(
  14,
  'Prepositions of Place (in, on, at, under, behind, next to)',
  'Prepositions of place show where something or someone is.

''In'' is for enclosed spaces: in a box, in a room, in a city.
''On'' is for surfaces: on the table, on the wall, on the floor.
''At'' is for specific points or places: at the door, at the bus stop, at school.

Other useful prepositions: under (below something), behind (at the back of something), in front of (at the front of something), next to / beside (close to something), between (in the middle of two things).',
  '[{"sentence": "The keys are in my bag.", "note": "in + enclosed space"}, {"sentence": "The book is on the table.", "note": "on + surface"}, {"sentence": "She is waiting at the bus stop.", "note": "at + specific point"}, {"sentence": "The cat is under the bed.", "note": "under + below"}, {"sentence": "The school is between the bank and the park.", "note": "between + two things"}]'::jsonb,
  '[{"id": "g14q1", "type": "multiple-choice", "text": "The pen is ___ the table.", "options": ["in", "on", "at"], "correctAnswer": "on"}, {"id": "g14q2", "type": "multiple-choice", "text": "I live ___ Tashkent.", "options": ["in", "on", "at"], "correctAnswer": "in"}, {"id": "g14q3", "type": "multiple-choice", "text": "She is waiting ___ the door.", "options": ["in", "on", "at"], "correctAnswer": "at"}, {"id": "g14q4", "type": "fill-blank", "text": "The cat is hiding ___ the sofa. (below)", "correctAnswer": ["under"]}, {"id": "g14q5", "type": "fill-blank", "text": "The car is parked ___ the house. (close to)", "correctAnswer": ["next to", "beside"]}, {"id": "g14q6", "type": "multiple-choice", "text": "There is a picture ___ the wall.", "options": ["in", "on", "at"], "correctAnswer": "on"}, {"id": "g14q7", "type": "fill-blank", "text": "The garden is ___ the house. (at the back)", "correctAnswer": ["behind"]}, {"id": "g14q8", "type": "multiple-choice", "text": "We are ___ school until 3 pm.", "options": ["in", "on", "at"], "correctAnswer": "at"}, {"id": "g14q9", "type": "fill-blank", "text": "The bank is ___ the supermarket and the pharmacy.", "correctAnswer": ["between"]}, {"id": "g14q10", "type": "multiple-choice", "text": "My phone is ___ my pocket.", "options": ["in", "on", "at"], "correctAnswer": "in"}]'::jsonb
),
(
  15,
  'Can / Can''t (Ability)',
  'We use ''can'' to talk about ability - things we are able to do.

Can is a modal verb: it doesn''t change form, and we don''t add -s for he/she/it. She can swim. NOT: She cans swim.

Negative: cannot or can''t. I can''t drive.

Question: Can + subject + verb? Can you speak English?

After can/can''t, we always use the base form of the verb, without ''to''.',
  '[{"sentence": "I can swim very well.", "note": "ability"}, {"sentence": "She can speak three languages.", "note": "can + base verb, no -s"}, {"sentence": "He can''t drive a car.", "note": "negative ability"}, {"sentence": "Can you ride a bicycle?", "note": "question"}, {"sentence": "They can play the piano.", "note": "ability"}]'::jsonb,
  '[{"id": "g15q1", "type": "fill-blank", "text": "She ___ (can) speak French.", "correctAnswer": ["can"]}, {"id": "g15q2", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["He cans swim.", "He can swims.", "He can swim."], "correctAnswer": "He can swim."}, {"id": "g15q3", "type": "fill-blank", "text": "I ___ (cannot) play the guitar.", "correctAnswer": ["can''t", "cannot"]}, {"id": "g15q4", "type": "multiple-choice", "text": "___ you cook Italian food?", "options": ["Can", "Do", "Are"], "correctAnswer": "Can"}, {"id": "g15q5", "type": "fill-blank", "text": "My brother ___ (can) ride a horse.", "correctAnswer": ["can"]}, {"id": "g15q6", "type": "multiple-choice", "text": "Choose the correct question.", "options": ["Can she to dance?", "Can she dances?", "Can she dance?"], "correctAnswer": "Can she dance?"}, {"id": "g15q7", "type": "fill-blank", "text": "They ___ (can, negative) come to the party.", "correctAnswer": ["can''t", "cannot"]}, {"id": "g15q8", "type": "multiple-choice", "text": "Birds ___ fly, but they can''t talk.", "options": ["can", "cans", "is can"], "correctAnswer": "can"}, {"id": "g15q9", "type": "fill-blank", "text": "___ you understand this sentence?", "correctAnswer": ["Can"]}, {"id": "g15q10", "type": "multiple-choice", "text": "We ___ see the mountains from here.", "options": ["can", "cans", "can to"], "correctAnswer": "can"}]'::jsonb
),
(
  16,
  'Past Simple: to be (was / were)',
  'The past form of ''to be'' has two forms: was and were.

Use ''was'' with I, he, she, it: I was tired. She was happy.
Use ''were'' with you, we, they: You were late. They were at home.

Negative: was not (wasn''t), were not (weren''t).

Question: Was + subject...? Were + subject...? Was she ready? Were they at school?',
  '[{"sentence": "I was at home yesterday.", "note": "I + was"}, {"sentence": "She was a teacher last year.", "note": "she + was"}, {"sentence": "We were on holiday last week.", "note": "we + were"}, {"sentence": "They weren''t at the party.", "note": "negative"}, {"sentence": "Were you busy yesterday?", "note": "question"}]'::jsonb,
  '[{"id": "g16q1", "type": "multiple-choice", "text": "I ___ at school yesterday.", "options": ["was", "were", "am"], "correctAnswer": "was"}, {"id": "g16q2", "type": "multiple-choice", "text": "They ___ very happy about the news.", "options": ["was", "were", "is"], "correctAnswer": "were"}, {"id": "g16q3", "type": "multiple-choice", "text": "She ___ not at home last night.", "options": ["was", "were", "is"], "correctAnswer": "was"}, {"id": "g16q4", "type": "fill-blank", "text": "We ___ (be) tired after the trip.", "correctAnswer": ["were"]}, {"id": "g16q5", "type": "fill-blank", "text": "___ you at the meeting yesterday?", "correctAnswer": ["Were"]}, {"id": "g16q6", "type": "multiple-choice", "text": "He ___ ill last week.", "options": ["was", "were", "be"], "correctAnswer": "was"}, {"id": "g16q7", "type": "fill-blank", "text": "It ___ (be, negative) a good day.", "correctAnswer": ["wasn''t", "was not"]}, {"id": "g16q8", "type": "multiple-choice", "text": "Choose the correct question.", "options": ["Was they at home?", "Were they at home?", "Did they was at home?"], "correctAnswer": "Were they at home?"}, {"id": "g16q9", "type": "fill-blank", "text": "The weather ___ (be) terrible yesterday.", "correctAnswer": ["was"]}, {"id": "g16q10", "type": "multiple-choice", "text": "My parents ___ proud of me.", "options": ["was", "were", "is"], "correctAnswer": "were"}]'::jsonb
),
(
  17,
  'Past Simple: Regular Verbs',
  'Regular verbs form the past simple by adding -ed to the base form: work -> worked, play -> played.

If the verb ends in -e, just add -d: live -> lived, like -> liked.

If the verb ends in consonant + y, change y to i and add -ed: study -> studied.

Short verbs ending in one vowel + one consonant double the last letter: stop -> stopped.

The Past Simple form is the same for all subjects: I worked, you worked, he worked, they worked.',
  '[{"sentence": "I worked late yesterday.", "note": "work -> worked"}, {"sentence": "She lived in London for two years.", "note": "live -> lived"}, {"sentence": "He studied hard for the exam.", "note": "study -> studied"}, {"sentence": "They stopped at the red light.", "note": "stop -> stopped (double letter)"}, {"sentence": "We played football last Sunday.", "note": "play -> played"}]'::jsonb,
  '[{"id": "g17q1", "type": "fill-blank", "text": "I ___ (watch) a movie last night.", "correctAnswer": ["watched"]}, {"id": "g17q2", "type": "fill-blank", "text": "She ___ (study) for three hours yesterday.", "correctAnswer": ["studied"]}, {"id": "g17q3", "type": "fill-blank", "text": "They ___ (play) tennis last weekend.", "correctAnswer": ["played"]}, {"id": "g17q4", "type": "multiple-choice", "text": "What is the past form of ''stop''?", "options": ["stoped", "stopped", "stopd"], "correctAnswer": "stopped"}, {"id": "g17q5", "type": "multiple-choice", "text": "What is the past form of ''live''?", "options": ["lived", "liveed", "livd"], "correctAnswer": "lived"}, {"id": "g17q6", "type": "fill-blank", "text": "We ___ (visit) our grandparents last month.", "correctAnswer": ["visited"]}, {"id": "g17q7", "type": "fill-blank", "text": "He ___ (clean) his room yesterday.", "correctAnswer": ["cleaned"]}, {"id": "g17q8", "type": "multiple-choice", "text": "What is the past form of ''carry''?", "options": ["carryed", "carried", "carrys"], "correctAnswer": "carried"}, {"id": "g17q9", "type": "fill-blank", "text": "She ___ (open) the window because it was hot.", "correctAnswer": ["opened"]}, {"id": "g17q10", "type": "fill-blank", "text": "I ___ (finish) my homework before dinner.", "correctAnswer": ["finished"]}]'::jsonb
),
(
  18,
  'Past Simple: Irregular Verbs',
  'Many common English verbs don''t follow the -ed rule. These are called irregular verbs, and their past forms must be memorized.

Some common examples: go -> went, have -> had, do -> did, see -> saw, eat -> ate, make -> made, take -> took, come -> came, write -> wrote, read -> read (same spelling, different pronunciation).

Like regular verbs, the irregular past form is the same for all subjects: I went, she went, they went.',
  '[{"sentence": "I went to the market yesterday.", "note": "go -> went"}, {"sentence": "She had a great time at the party.", "note": "have -> had"}, {"sentence": "We saw a beautiful sunset.", "note": "see -> saw"}, {"sentence": "He made a delicious cake.", "note": "make -> made"}, {"sentence": "They came home late last night.", "note": "come -> came"}]'::jsonb,
  '[{"id": "g18q1", "type": "fill-blank", "text": "I ___ (go) to the cinema yesterday.", "correctAnswer": ["went"]}, {"id": "g18q2", "type": "fill-blank", "text": "She ___ (eat) breakfast at seven.", "correctAnswer": ["ate"]}, {"id": "g18q3", "type": "fill-blank", "text": "We ___ (have) a meeting this morning.", "correctAnswer": ["had"]}, {"id": "g18q4", "type": "multiple-choice", "text": "What is the past form of ''see''?", "options": ["seed", "saw", "seen"], "correctAnswer": "saw"}, {"id": "g18q5", "type": "multiple-choice", "text": "What is the past form of ''write''?", "options": ["writed", "wrote", "writen"], "correctAnswer": "wrote"}, {"id": "g18q6", "type": "fill-blank", "text": "He ___ (take) the bus to school.", "correctAnswer": ["took"]}, {"id": "g18q7", "type": "fill-blank", "text": "They ___ (do) their homework together.", "correctAnswer": ["did"]}, {"id": "g18q8", "type": "multiple-choice", "text": "What is the past form of ''make''?", "options": ["maked", "made", "maded"], "correctAnswer": "made"}, {"id": "g18q9", "type": "fill-blank", "text": "I ___ (come) home at six yesterday.", "correctAnswer": ["came"]}, {"id": "g18q10", "type": "multiple-choice", "text": "What is the past form of ''go''?", "options": ["goed", "went", "gone"], "correctAnswer": "went"}]'::jsonb
),
(
  19,
  'Past Simple: Negative and Questions',
  'To make a negative sentence in the Past Simple, we use ''did not'' (didn''t) before the base form of the verb - for both regular and irregular verbs.

I didn''t go. She didn''t work. They didn''t see it.

To make a question, we put ''Did'' at the beginning: Did you go? Did she work?

Important: after didn''t and Did, the verb is always in its base form - never the past form. We say ''Did you go?'', NOT ''Did you went?''.',
  '[{"sentence": "I didn''t go to the party.", "note": "didn''t + base form"}, {"sentence": "She didn''t finish her homework.", "note": "didn''t + base form"}, {"sentence": "Did you see that movie?", "note": "Did + base form"}, {"sentence": "Did they come to the meeting?", "note": "Did + base form"}, {"sentence": "We didn''t have time yesterday.", "note": "didn''t + base form"}]'::jsonb,
  '[{"id": "g19q1", "type": "fill-blank", "text": "I ___ (not go) to school yesterday.", "correctAnswer": ["didn''t go", "did not go"]}, {"id": "g19q2", "type": "multiple-choice", "text": "___ you see Maria yesterday?", "options": ["Do", "Did", "Were"], "correctAnswer": "Did"}, {"id": "g19q3", "type": "multiple-choice", "text": "Choose the correct question.", "options": ["Did she went home?", "Did she go home?", "Did she goes home?"], "correctAnswer": "Did she go home?"}, {"id": "g19q4", "type": "fill-blank", "text": "He ___ (not eat) breakfast this morning.", "correctAnswer": ["didn''t eat", "did not eat"]}, {"id": "g19q5", "type": "fill-blank", "text": "They ___ (not come) to the party last night.", "correctAnswer": ["didn''t come", "did not come"]}, {"id": "g19q6", "type": "multiple-choice", "text": "___ they finish the project on time?", "options": ["Do", "Did", "Does"], "correctAnswer": "Did"}, {"id": "g19q7", "type": "fill-blank", "text": "We ___ (not have) enough money.", "correctAnswer": ["didn''t have", "did not have"]}, {"id": "g19q8", "type": "multiple-choice", "text": "Choose the correct negative sentence.", "options": ["She didn''t went there.", "She didn''t go there.", "She not went there."], "correctAnswer": "She didn''t go there."}, {"id": "g19q9", "type": "fill-blank", "text": "___ you study for the test? (question)", "correctAnswer": ["Did"]}, {"id": "g19q10", "type": "fill-blank", "text": "I ___ (not understand) the lesson yesterday.", "correctAnswer": ["didn''t understand", "did not understand"]}]'::jsonb
),
(
  20,
  'Past Continuous (was/were + -ing)',
  'We use the Past Continuous for actions that were in progress at a specific time in the past.

Form: was/were + verb-ing. I was working, they were sleeping.

We often use the Past Continuous with the Past Simple to show that one action interrupted another: I was watching TV when the phone rang.

We also use it to describe the background or scene of a story: It was raining, and people were walking quickly.',
  '[{"sentence": "I was sleeping when you called.", "note": "background action + interruption"}, {"sentence": "She was cooking dinner at 7 pm.", "note": "action in progress at a specific time"}, {"sentence": "They were watching a movie last night.", "note": "ongoing past action"}, {"sentence": "It was raining when we left the house.", "note": "scene description"}, {"sentence": "What were you doing yesterday at noon?", "note": "question"}]'::jsonb,
  '[{"id": "g20q1", "type": "fill-blank", "text": "I ___ (sleep) when the phone rang.", "correctAnswer": ["was sleeping"]}, {"id": "g20q2", "type": "fill-blank", "text": "They ___ (play) football when it started to rain.", "correctAnswer": ["were playing"]}, {"id": "g20q3", "type": "multiple-choice", "text": "She ___ (cook) dinner at 6 pm yesterday.", "options": ["cooked", "was cooking", "cooks"], "correctAnswer": "was cooking"}, {"id": "g20q4", "type": "fill-blank", "text": "We ___ (watch) TV when you arrived.", "correctAnswer": ["were watching"]}, {"id": "g20q5", "type": "multiple-choice", "text": "What ___ you doing at 9 pm last night?", "options": ["was", "were", "did"], "correctAnswer": "were"}, {"id": "g20q6", "type": "fill-blank", "text": "He ___ (not listen) when I explained the rule.", "correctAnswer": ["wasn''t listening", "was not listening"]}, {"id": "g20q7", "type": "multiple-choice", "text": "Choose the correct sentence.", "options": ["It was raining when we left.", "It rained when we were leaving.", "It was rain when we left."], "correctAnswer": "It was raining when we left."}, {"id": "g20q8", "type": "fill-blank", "text": "I ___ (read) a book when the lights went out.", "correctAnswer": ["was reading"]}, {"id": "g20q9", "type": "multiple-choice", "text": "___ they sleeping when you called?", "options": ["Was", "Were", "Did"], "correctAnswer": "Were"}, {"id": "g20q10", "type": "fill-blank", "text": "She ___ (walk) home when she saw an old friend.", "correctAnswer": ["was walking"]}]'::jsonb
);
