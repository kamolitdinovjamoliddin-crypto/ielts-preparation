-- daily_tasks: Kunlar 9-15
DELETE FROM daily_tasks WHERE day_number BETWEEN 9 AND 15;

INSERT INTO daily_tasks (
  day_number, title,
  writing_prompt, writing_min_words,
  reading_title, reading_text, reading_questions,
  podcast_title, podcast_transcript, podcast_questions,
  dictation_text, words_content
) VALUES
(
  9,
  'Kun 9: Travel',
  'Describe a memorable trip you have taken. Where did you go, who did you go with, and what made it memorable?',
  80,
  'The Rise of Slow Travel',
  'In recent years, a growing number of travelers have been rejecting the idea of rushing between famous landmarks in favor of a movement known as slow travel. Rather than visiting as many cities as possible in a short period, slow travelers choose to stay longer in fewer places, immersing themselves in local culture, food, and daily life. Proponents argue that this approach allows for deeper connections with the people and places visited, as well as a smaller environmental impact due to less frequent transportation. Critics, however, point out that slow travel requires more vacation time than many workers are able to take, making it less accessible for people with limited holiday allowances.',
  '[{"id": "d9r1", "type": "true-false-not-given", "text": "Slow travelers usually visit many cities in a short time.", "correctAnswer": "False"}, {"id": "d9r2", "type": "multiple-choice", "text": "What do critics say about slow travel?", "options": ["It harms the environment", "It requires more vacation time", "It is too expensive", "It is unsafe"], "correctAnswer": "It requires more vacation time"}, {"id": "d9r3", "type": "true-false-not-given", "text": "Slow travel always costs more than traditional travel.", "correctAnswer": "Not Given"}]'::jsonb,
  'Daily Podcast: Packing Light',
  'Host: Today we''re talking about packing light for trips. Experienced travelers often recommend bringing only what fits in a single carry-on bag, even for longer trips. This approach saves time at airports and reduces the stress of managing heavy luggage. One popular tip is to choose clothing that can be mixed and matched, rather than packing a separate outfit for every day. Another common suggestion is to roll clothes instead of folding them, which can save a surprising amount of space in a suitcase.',
  '[{"id": "d9l1", "type": "fill-blank", "text": "Many travelers recommend fitting everything in a single ______ bag.", "correctAnswer": ["carry-on"], "wordLimit": "ONE WORD ONLY"}, {"id": "d9l2", "type": "multiple-choice", "text": "What does rolling clothes help save?", "options": ["Time", "Money", "Space", "Weight"], "correctAnswer": "Space"}]'::jsonb,
  'Experienced travelers often recommend bringing only what fits in a single carry-on bag.',
  '[]'::jsonb
),
(
  10,
  'Kun 10: Money and Shopping',
  'Do you prefer shopping online or in physical stores? Explain your preference with reasons and examples.',
  80,
  'The Psychology of Discounts',
  'Retailers have long understood that the way a price is presented can influence a customer''s decision to buy, often more than the actual amount saved. Studies in consumer psychology show that shoppers tend to perceive a discount of fifty percent as more appealing than an equivalent discount expressed in a fixed amount, even when the savings are identical. Similarly, prices ending in the number nine, such as 19.99 instead of 20, are processed by the brain as significantly cheaper than they actually are, a phenomenon researchers call the left-digit effect. While some consumers have become more aware of these tactics over time, marketing experts continue to find new ways to make prices appear more attractive.',
  '[{"id": "d10r1", "type": "multiple-choice", "text": "What is the ''left-digit effect''?", "options": ["A pricing strategy using percentages", "Prices ending in nine seeming cheaper", "A type of online discount", "A method of comparing two stores"], "correctAnswer": "Prices ending in nine seeming cheaper"}, {"id": "d10r2", "type": "true-false-not-given", "text": "Percentage discounts and fixed-amount discounts always feel the same to shoppers.", "correctAnswer": "False"}, {"id": "d10r3", "type": "true-false-not-given", "text": "All consumers are now fully aware of pricing tactics.", "correctAnswer": "Not Given"}]'::jsonb,
  'Daily Podcast: Budgeting Basics',
  'Host: Managing money well starts with a simple habit: tracking where it goes. Financial advisors often recommend the fifty-thirty-twenty rule, where fifty percent of income covers essential needs, thirty percent goes to wants, and twenty percent is saved or used to pay off debt. While this rule works as a general guideline, advisors note that it should be adjusted based on a person''s specific circumstances, such as living costs in their city or any existing financial obligations.',
  '[{"id": "d10l1", "type": "fill-blank", "text": "In the rule, ______ percent of income covers essential needs.", "correctAnswer": ["50", "fifty"], "wordLimit": "ONE WORD ONLY"}, {"id": "d10l2", "type": "multiple-choice", "text": "What should the rule be adjusted based on?", "options": ["Age", "A person''s specific circumstances", "Job title", "Bank type"], "correctAnswer": "A person''s specific circumstances"}]'::jsonb,
  'Financial advisors often recommend tracking where your money goes.',
  '[]'::jsonb
),
(
  11,
  'Kun 11: Friendship and Relationships',
  'What qualities do you think make someone a good friend? Use examples to support your answer.',
  80,
  'Friendship in the Digital Age',
  'Social media platforms have fundamentally changed how people form and maintain friendships. While these tools make it easier than ever to stay in touch with a large number of people, researchers have raised concerns about whether the quality of these connections has decreased as their quantity has increased. Some studies suggest that frequent but shallow online interactions, such as liking a photo, may give a false sense of closeness without providing the emotional support that comes from deeper, face-to-face conversations. On the other hand, other researchers point out that social media has been particularly valuable for maintaining long-distance friendships that might otherwise have faded over time.',
  '[{"id": "d11r1", "type": "true-false-not-given", "text": "All researchers agree that social media has harmed friendships.", "correctAnswer": "False"}, {"id": "d11r2", "type": "multiple-choice", "text": "What concern do some researchers raise about online interactions?", "options": ["They cost too much money", "They may feel close without real emotional support", "They are too time-consuming", "They are always negative"], "correctAnswer": "They may feel close without real emotional support"}, {"id": "d11r3", "type": "true-false-not-given", "text": "Social media has helped some long-distance friendships survive.", "correctAnswer": "True"}]'::jsonb,
  'Daily Podcast: Making New Friends as an Adult',
  'Host: Making new friends becomes noticeably harder after we leave school or university, when the natural opportunities for meeting people decrease. Experts suggest that joining clubs or groups based on shared interests, such as sports teams or hobby classes, can recreate some of that natural social environment. Consistency also matters: seeing the same group of people on a regular basis, even briefly, tends to build familiarity and trust over time, which are the foundations of any strong friendship.',
  '[{"id": "d11l1", "type": "multiple-choice", "text": "Why does making friends get harder after school?", "options": ["People become less friendly", "Natural opportunities to meet people decrease", "People move to new cities", "Friendships become less important"], "correctAnswer": "Natural opportunities to meet people decrease"}, {"id": "d11l2", "type": "fill-blank", "text": "______ and trust are the foundations of friendship.", "correctAnswer": ["Familiarity"], "wordLimit": "ONE WORD ONLY"}]'::jsonb,
  'Seeing the same group of people on a regular basis tends to build trust over time.',
  '[]'::jsonb
),
(
  12,
  'Kun 12: Cities and Living Spaces',
  'Some people prefer to live in a big city, while others prefer a small town. Which do you prefer and why?',
  80,
  'The Growth of Co-living Spaces',
  'As housing costs continue to rise in many major cities, an increasing number of young professionals are turning to co-living arrangements, where private bedrooms are combined with shared kitchens, living rooms, and other communal spaces. These arrangements are often marketed as a solution to both the high cost of urban housing and the social isolation that can come with living alone in a large city. Co-living companies typically offer flexible, short-term leases and organize regular social events for residents, which can be particularly appealing to people who have recently moved to a new city and do not yet have an established social network there.',
  '[{"id": "d12r1", "type": "multiple-choice", "text": "What two problems does co-living aim to solve?", "options": ["Pollution and noise", "High cost and social isolation", "Crime and traffic", "Unemployment and stress"], "correctAnswer": "High cost and social isolation"}, {"id": "d12r2", "type": "true-false-not-given", "text": "Co-living leases are usually long-term, lasting many years.", "correctAnswer": "False"}, {"id": "d12r3", "type": "true-false-not-given", "text": "Co-living is most appealing to people new to a city.", "correctAnswer": "True"}]'::jsonb,
  'Daily Podcast: Urban Green Roofs',
  'Host: As cities become more crowded, architects are increasingly looking upward, transforming unused rooftops into green spaces. These rooftop gardens can lower indoor temperatures during hot months, reducing the need for air conditioning, and they also help absorb rainwater, which can ease pressure on city drainage systems during heavy storms. Some cities have begun offering financial incentives to building owners who install green roofs, recognizing the wider environmental benefits they bring to the entire neighborhood, not just the building itself.',
  '[{"id": "d12l1", "type": "multiple-choice", "text": "What can green roofs help reduce the need for?", "options": ["Heating", "Air conditioning", "Lighting", "Parking"], "correctAnswer": "Air conditioning"}, {"id": "d12l2", "type": "fill-blank", "text": "Some cities offer financial ______ for green roofs.", "correctAnswer": ["incentives"], "wordLimit": "ONE WORD ONLY"}]'::jsonb,
  'Rooftop gardens can lower indoor temperatures and help absorb rainwater.',
  '[]'::jsonb
),
(
  13,
  'Kun 13: Food and Cooking',
  'Describe your favorite meal to cook. What ingredients does it need, and why do you enjoy making it?',
  80,
  'Why We Crave Comfort Food',
  'Comfort food, often associated with childhood memories and warm, simple dishes, tends to become especially appealing during times of stress or sadness. Researchers studying the psychology of eating have found that this preference is not purely about taste; familiar foods can trigger positive memories and feelings of safety, which may explain why people often turn to the same dishes their parents or grandparents used to prepare. Interestingly, the specific foods considered comforting vary significantly between cultures, suggesting that the emotional connection, rather than the food itself, is the key factor behind the phenomenon.',
  '[{"id": "d13r1", "type": "true-false-not-given", "text": "Comfort food preference is based purely on taste.", "correctAnswer": "False"}, {"id": "d13r2", "type": "multiple-choice", "text": "What does comfort food often trigger?", "options": ["Hunger", "Positive memories", "Weight gain", "Allergies"], "correctAnswer": "Positive memories"}, {"id": "d13r3", "type": "true-false-not-given", "text": "Comfort foods are the same in every culture.", "correctAnswer": "False"}]'::jsonb,
  'Daily Podcast: Meal Prep Tips',
  'Host: Preparing meals in advance has become a popular way to save time and eat healthier during busy weeks. A common approach is to set aside a few hours on the weekend to cook several meals at once, then store them in the refrigerator or freezer for later. Nutrition experts suggest including a balance of protein, vegetables, and whole grains in each prepared meal, since this combination tends to keep people feeling full and satisfied for longer compared to meals high in processed carbohydrates.',
  '[{"id": "d13l1", "type": "multiple-choice", "text": "What is a common meal prep approach?", "options": ["Cooking one meal per day", "Cooking several meals at once on the weekend", "Eating only raw food", "Ordering food every day"], "correctAnswer": "Cooking several meals at once on the weekend"}, {"id": "d13l2", "type": "fill-blank", "text": "Experts suggest a balance of protein, vegetables, and whole ______.", "correctAnswer": ["grains"], "wordLimit": "ONE WORD ONLY"}]'::jsonb,
  'Nutrition experts suggest including a balance of protein and vegetables in each meal.',
  '[]'::jsonb
),
(
  14,
  'Kun 14: Sports and Fitness',
  'Discuss the advantages and disadvantages of team sports compared to individual sports.',
  80,
  'The Science of Stretching',
  'For decades, athletes were taught to stretch their muscles before any form of exercise as a way to prevent injury. However, more recent research has challenged this long-held belief, suggesting that static stretching, where a muscle is held in an extended position for a period of time, may actually reduce muscle strength and power if performed immediately before intense activity. Many sports scientists now recommend a dynamic warm-up instead, involving movement-based exercises like leg swings or light jogging, which gradually raise the body''s temperature and prepare the muscles for activity without the negative effects associated with static stretching beforehand.',
  '[{"id": "d14r1", "type": "true-false-not-given", "text": "Static stretching before exercise was traditionally recommended.", "correctAnswer": "True"}, {"id": "d14r2", "type": "multiple-choice", "text": "What might static stretching reduce before intense activity?", "options": ["Flexibility", "Muscle strength and power", "Heart rate", "Body temperature"], "correctAnswer": "Muscle strength and power"}, {"id": "d14r3", "type": "true-false-not-given", "text": "Sports scientists now recommend dynamic warm-ups instead of static stretching.", "correctAnswer": "True"}]'::jsonb,
  'Daily Podcast: The Benefits of Team Sports',
  'Host: Beyond the obvious physical benefits, team sports offer something that individual training often cannot: a strong sense of social connection. Being part of a team requires regular communication and cooperation, skills that can transfer well into other areas of life, including the workplace. Coaches also note that team sports can teach young people how to handle both victory and defeat gracefully, since results are shared with the whole group rather than experienced alone, which can make both winning and losing feel less personal.',
  '[{"id": "d14l1", "type": "multiple-choice", "text": "What social benefit do team sports offer?", "options": ["Higher income", "A strong sense of social connection", "Better grades", "More free time"], "correctAnswer": "A strong sense of social connection"}, {"id": "d14l2", "type": "fill-blank", "text": "Team sports can teach how to handle victory and ______ gracefully.", "correctAnswer": ["defeat"], "wordLimit": "ONE WORD ONLY"}]'::jsonb,
  'Being part of a team requires regular communication and cooperation.',
  '[]'::jsonb
),
(
  15,
  'Kun 15: Work and Careers',
  'What factors do you think are most important when choosing a career? Explain your reasons.',
  80,
  'The Four-Day Work Week',
  'A growing number of companies around the world have begun experimenting with a four-day work week, typically reducing total working hours while maintaining the same level of pay. Early trials in several countries have reported encouraging results, including improved employee well-being, reduced burnout, and, in some cases, no significant drop in overall productivity. Proponents argue that employees often become more focused and efficient when given less time to complete the same workload. Critics, however, caution that this model may not be suitable for every industry, particularly those involving customer service or healthcare, where continuous coverage is essential.',
  '[{"id": "d15r1", "type": "true-false-not-given", "text": "All companies that tried a four-day week saw a drop in productivity.", "correctAnswer": "False"}, {"id": "d15r2", "type": "multiple-choice", "text": "Why might employees become more efficient with a four-day week?", "options": ["They are paid more", "They have less time to complete the same workload", "They work from home", "They have fewer meetings"], "correctAnswer": "They have less time to complete the same workload"}, {"id": "d15r3", "type": "true-false-not-given", "text": "Critics believe the four-day week suits every industry equally well.", "correctAnswer": "False"}]'::jsonb,
  'Daily Podcast: Choosing a Career Path',
  'Host: Career counselors often emphasize that job satisfaction depends on more than just salary. Factors such as work-life balance, opportunities for growth, and alignment with personal values tend to have a strong long-term effect on how fulfilled someone feels in their job. Many young professionals, counselors note, make career choices based primarily on starting salary, only to find a few years later that other factors matter more to their overall happiness than they initially expected.',
  '[{"id": "d15l1", "type": "multiple-choice", "text": "What do career counselors say job satisfaction depends on?", "options": ["Salary only", "More than just salary", "Job title", "Office location"], "correctAnswer": "More than just salary"}, {"id": "d15l2", "type": "fill-blank", "text": "Work-life balance and opportunities for ______ matter long-term.", "correctAnswer": ["growth"], "wordLimit": "ONE WORD ONLY"}]'::jsonb,
  'Job satisfaction depends on more than just salary.',
  '[]'::jsonb
);
