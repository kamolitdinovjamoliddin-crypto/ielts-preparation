import json

days = []

# ===================== KUN 16: Education Systems =====================
days.append({
    "day_number": 16,
    "title": "Kun 16: Education Systems",
    "writing_prompt": "Some people believe exams are the best way to assess a student's ability, while others disagree. Discuss both views and give your opinion.",
    "writing_min_words": 80,
    "reading_title": "Project-Based Learning",
    "reading_text": "Traditional education has long relied heavily on lectures and standardized testing to measure student understanding, but an increasing number of schools are now adopting project-based learning as an alternative approach. In this model, students work on extended, real-world projects over several weeks, applying knowledge from multiple subjects to solve a single problem, such as designing a sustainable garden or researching a local environmental issue. Supporters argue that this method better prepares students for the collaborative, problem-solving nature of most modern workplaces. However, some educators express concern that project-based learning can be more difficult to assess fairly and may not adequately prepare students for traditional standardized exams that many universities still require.",
    "reading_questions": [
        {"id": "d16r1", "type": "true-false-not-given", "text": "Project-based learning usually involves a single short task.", "correctAnswer": "False"},
        {"id": "d16r2", "type": "multiple-choice", "text": "What concern do some educators have about project-based learning?", "options": ["It is too expensive", "It can be hard to assess fairly", "Students dislike it", "It takes too little time"], "correctAnswer": "It can be hard to assess fairly"},
        {"id": "d16r3", "type": "true-false-not-given", "text": "All universities have stopped requiring standardized exams.", "correctAnswer": "False"},
    ],
    "podcast_title": "Daily Podcast: Learning a Second Language",
    "podcast_transcript": "Host: Researchers studying language acquisition have found that consistent, daily practice tends to produce better long-term results than occasional, longer study sessions. Even just fifteen to twenty minutes of focused practice each day can lead to significant progress over several months. Experts also recommend combining different types of practice, such as listening, speaking, and writing, rather than focusing on just one skill, since this approach helps reinforce vocabulary and grammar from multiple angles at once.",
    "podcast_questions": [
        {"id": "d16l1", "type": "fill-blank", "text": "Just ______ to twenty minutes of daily practice can help.", "correctAnswer": ["fifteen", "15"], "wordLimit": "ONE WORD ONLY"},
        {"id": "d16l2", "type": "multiple-choice", "text": "What do experts recommend combining?", "options": ["Different textbooks", "Different types of practice", "Different teachers", "Different apps"], "correctAnswer": "Different types of practice"},
    ],
    "dictation_text": "Consistent, daily practice tends to produce better long-term results.",
})

# ===================== KUN 17: Animals and Wildlife =====================
days.append({
    "day_number": 17,
    "title": "Kun 17: Animals and Wildlife",
    "writing_prompt": "Should zoos exist in the modern world? Discuss the advantages and disadvantages.",
    "writing_min_words": 80,
    "reading_title": "How Animals Navigate Long Migrations",
    "reading_text": "Every year, countless species of birds, fish, and mammals travel thousands of kilometers across oceans and continents with remarkable accuracy, returning to the same nesting or breeding grounds year after year. Scientists have proposed several explanations for this extraordinary navigational ability, including the use of the Earth's magnetic field, the position of the sun and stars, and even the detection of specific smells associated with their home territory. Recent studies suggest that many migratory species likely combine several of these methods simultaneously, creating a kind of internal map that allows them to correct their course even when one source of information, such as visibility of the stars, becomes temporarily unavailable.",
    "reading_questions": [
        {"id": "d17r1", "type": "true-false-not-given", "text": "Migratory animals return to the same breeding grounds every year.", "correctAnswer": "True"},
        {"id": "d17r2", "type": "multiple-choice", "text": "Which of these is NOT mentioned as a navigation method?", "options": ["The Earth's magnetic field", "The position of the sun and stars", "Specific smells", "Radio signals"], "correctAnswer": "Radio signals"},
        {"id": "d17r3", "type": "true-false-not-given", "text": "Most species likely rely on only one navigation method.", "correctAnswer": "False"},
    ],
    "podcast_title": "Daily Podcast: Endangered Species Recovery",
    "podcast_transcript": "Host: Conservation programs around the world have achieved some notable successes in recent decades, helping certain endangered species recover from the brink of extinction. One commonly used strategy involves captive breeding, where animals are bred in controlled environments before being gradually reintroduced into protected areas of their natural habitat. While these programs require significant long-term funding and careful planning, conservationists note that public support, often driven by awareness campaigns, plays an equally important role in ensuring these efforts ultimately succeed.",
    "podcast_questions": [
        {"id": "d17l1", "type": "multiple-choice", "text": "What strategy is mentioned for helping endangered species?", "options": ["Captive breeding", "Hunting bans only", "Zoo closures", "Habitat destruction"], "correctAnswer": "Captive breeding"},
        {"id": "d17l2", "type": "fill-blank", "text": "Public ______ plays an important role in conservation success.", "correctAnswer": ["support"], "wordLimit": "ONE WORD ONLY"},
    ],
    "dictation_text": "Conservation programs require significant long-term funding and careful planning.",
})

# ===================== KUN 18: Space and Astronomy =====================
days.append({
    "day_number": 18,
    "title": "Kun 18: Space and Astronomy",
    "writing_prompt": "Do you think humans should invest more money in space exploration, or focus on solving problems on Earth first? Give your opinion.",
    "writing_min_words": 80,
    "reading_title": "The Search for Exoplanets",
    "reading_text": "Since the first confirmed discovery of a planet orbiting a star outside our solar system in 1995, astronomers have identified thousands of these so-called exoplanets, using increasingly sophisticated detection methods. One of the most common techniques, known as the transit method, involves measuring the tiny dip in a star's brightness that occurs when a planet passes directly in front of it from our point of view. While most confirmed exoplanets are far too large or too close to their star to support life as we understand it, scientists remain particularly interested in identifying planets located within the so-called habitable zone, where conditions might theoretically allow liquid water to exist on the surface.",
    "reading_questions": [
        {"id": "d18r1", "type": "fill-blank", "text": "The ______ method measures dips in a star's brightness.", "correctAnswer": ["transit"]},
        {"id": "d18r2", "type": "true-false-not-given", "text": "Most confirmed exoplanets are considered likely to support life.", "correctAnswer": "False"},
        {"id": "d18r3", "type": "true-false-not-given", "text": "The habitable zone is where liquid water might exist on a planet's surface.", "correctAnswer": "True"},
    ],
    "podcast_title": "Daily Podcast: Life on Mars?",
    "podcast_transcript": "Host: Mars has long fascinated scientists as the most likely candidate for past or present microbial life within our solar system. Evidence gathered by recent rover missions suggests that the planet once had rivers, lakes, and possibly even an ocean billions of years ago, before its atmosphere thinned dramatically. While no direct evidence of life has been found so far, researchers continue to search for biosignatures, chemical traces that could indicate biological activity, in soil and rock samples collected from various regions of the planet's surface.",
    "podcast_questions": [
        {"id": "d18l1", "type": "multiple-choice", "text": "What did Mars likely have billions of years ago?", "options": ["Cities", "Rivers, lakes, and possibly an ocean", "A thick layer of ice only", "No atmosphere at all"], "correctAnswer": "Rivers, lakes, and possibly an ocean"},
        {"id": "d18l2", "type": "fill-blank", "text": "Researchers search for chemical traces called ______.", "correctAnswer": ["biosignatures"]},
    ],
    "dictation_text": "Mars once had rivers, lakes, and possibly even an ocean.",
})

# ===================== KUN 19: Art and Music =====================
days.append({
    "day_number": 19,
    "title": "Kun 19: Art and Music",
    "writing_prompt": "Some people think art and music classes are just as important as math and science in schools. Do you agree or disagree?",
    "writing_min_words": 80,
    "reading_title": "The Effects of Music Training on the Brain",
    "reading_text": "Decades of research into the effects of musical training have revealed measurable differences in brain structure and function between musicians and non-musicians. Studies using brain imaging technology have shown that areas of the brain responsible for motor skills, hearing, and memory tend to be more developed in people who began musical training at a young age. Some researchers have also found a correlation between early music education and improved performance in unrelated academic areas, such as mathematics, though the exact reasons for this connection remain a subject of ongoing debate among scientists.",
    "reading_questions": [
        {"id": "d19r1", "type": "true-false-not-given", "text": "Brain imaging has shown differences between musicians and non-musicians.", "correctAnswer": "True"},
        {"id": "d19r2", "type": "multiple-choice", "text": "Which brain functions are mentioned as more developed in musicians?", "options": ["Vision and balance", "Motor skills, hearing, and memory", "Speech only", "Smell and taste"], "correctAnswer": "Motor skills, hearing, and memory"},
        {"id": "d19r3", "type": "true-false-not-given", "text": "Scientists fully agree on why music training improves math performance.", "correctAnswer": "False"},
    ],
    "podcast_title": "Daily Podcast: Street Art and Public Spaces",
    "podcast_transcript": "Host: Street art, once widely viewed as vandalism, has gained increasing recognition as a legitimate art form in many cities around the world. Some local governments now commission murals for public spaces, hoping to revitalize neglected neighborhoods and discourage illegal graffiti by providing legal outlets for artistic expression. Critics, however, argue that commissioning street art can sometimes remove its original spirit of rebellion and social commentary, transforming it into just another form of city-approved decoration.",
    "podcast_questions": [
        {"id": "d19l1", "type": "multiple-choice", "text": "Why do some governments commission murals?", "options": ["To increase tourism only", "To revitalize neighborhoods and discourage illegal graffiti", "To replace traditional art museums", "To save money on paint"], "correctAnswer": "To revitalize neighborhoods and discourage illegal graffiti"},
        {"id": "d19l2", "type": "fill-blank", "text": "Critics say commissioned art can lose its spirit of ______.", "correctAnswer": ["rebellion"]},
    ],
    "dictation_text": "Street art has gained increasing recognition as a legitimate art form.",
})

# ===================== KUN 20: Transportation =====================
days.append({
    "day_number": 20,
    "title": "Kun 20: Transportation",
    "writing_prompt": "Discuss the advantages and disadvantages of public transportation compared to private cars.",
    "writing_min_words": 80,
    "reading_title": "The Future of Electric Vehicles",
    "reading_text": "Sales of electric vehicles have grown rapidly over the past decade, driven by improvements in battery technology, falling production costs, and increasing government support through subsidies and tax incentives. Despite this growth, several challenges remain before electric vehicles can fully replace traditional combustion-engine cars. Charging infrastructure, while expanding, is still significantly less widespread than fuel stations in many regions, particularly in rural areas. Additionally, the environmental benefits of electric vehicles depend heavily on how the electricity used to charge them is generated, meaning their overall impact varies considerably between countries with different energy sources.",
    "reading_questions": [
        {"id": "d20r1", "type": "true-false-not-given", "text": "Electric vehicle sales have grown rapidly in the past decade.", "correctAnswer": "True"},
        {"id": "d20r2", "type": "multiple-choice", "text": "What challenge is mentioned regarding charging?", "options": ["It is too fast", "Infrastructure is less widespread than fuel stations", "It is illegal in some countries", "Batteries cannot be charged at home"], "correctAnswer": "Infrastructure is less widespread than fuel stations"},
        {"id": "d20r3", "type": "true-false-not-given", "text": "The environmental benefit of electric vehicles is the same in every country.", "correctAnswer": "False"},
    ],
    "podcast_title": "Daily Podcast: The Rise of Bike-Sharing",
    "podcast_transcript": "Host: Bike-sharing programs have expanded significantly in cities across the world, offering residents an affordable and flexible alternative for short trips. Users can typically rent a bike through a mobile app, ride it to their destination, and leave it at any designated station, without needing to worry about ownership, maintenance, or storage. City planners often support these programs because they can reduce traffic congestion and lower carbon emissions, particularly when they replace short car trips that would otherwise contribute to local air pollution.",
    "podcast_questions": [
        {"id": "d20l1", "type": "multiple-choice", "text": "How do users typically rent a bike?", "options": ["Through a mobile app", "By calling a hotline", "By visiting an office", "By using cash only"], "correctAnswer": "Through a mobile app"},
        {"id": "d20l2", "type": "fill-blank", "text": "Bike-sharing can reduce traffic ______.", "correctAnswer": ["congestion"]},
    ],
    "dictation_text": "Bike-sharing programs offer residents an affordable and flexible alternative.",
})

# ===================== KUN 21: Health and Medicine =====================
days.append({
    "day_number": 21,
    "title": "Kun 21: Health and Medicine",
    "writing_prompt": "Some people believe traditional medicine is just as effective as modern medicine. Discuss both views and give your opinion.",
    "writing_min_words": 80,
    "reading_title": "The Placebo Effect Explained",
    "reading_text": "One of the most studied phenomena in medical research is the placebo effect, in which patients experience real improvements in their symptoms after receiving a treatment with no active medical ingredients, simply because they believe they are receiving genuine medication. Researchers believe this effect is closely linked to the brain's release of natural pain-relieving chemicals when a patient expects to feel better, demonstrating a powerful connection between psychological expectation and physical response. While the placebo effect cannot cure underlying diseases, it has proven particularly effective at reducing the perception of pain, which is why placebo control groups remain a standard part of clinical drug trials today.",
    "reading_questions": [
        {"id": "d21r1", "type": "true-false-not-given", "text": "The placebo effect involves patients receiving genuine active medication.", "correctAnswer": "False"},
        {"id": "d21r2", "type": "multiple-choice", "text": "What does the brain release when a patient expects to feel better?", "options": ["Adrenaline", "Natural pain-relieving chemicals", "Insulin", "Caffeine"], "correctAnswer": "Natural pain-relieving chemicals"},
        {"id": "d21r3", "type": "true-false-not-given", "text": "The placebo effect can cure underlying diseases.", "correctAnswer": "False"},
    ],
    "podcast_title": "Daily Podcast: The Importance of Sleep Quality",
    "podcast_transcript": "Host: While most people focus on the total number of hours they sleep, sleep researchers emphasize that the quality of that sleep matters just as much, if not more. Deep, uninterrupted sleep cycles allow the brain to perform essential maintenance tasks, including memory consolidation and the removal of waste products that build up during waking hours. Simple changes, such as keeping a consistent sleep schedule and reducing screen exposure before bed, have been shown to significantly improve sleep quality, even without increasing the total number of hours slept.",
    "podcast_questions": [
        {"id": "d21l1", "type": "multiple-choice", "text": "What do sleep researchers emphasize besides total hours?", "options": ["The temperature of the room", "The quality of sleep", "The type of mattress", "The time of waking up"], "correctAnswer": "The quality of sleep"},
        {"id": "d21l2", "type": "fill-blank", "text": "Deep sleep allows ______ consolidation in the brain.", "correctAnswer": ["memory"]},
    ],
    "dictation_text": "The quality of sleep matters just as much as the total number of hours.",
})

# ===================== KUN 22: Globalization and Culture =====================
days.append({
    "day_number": 22,
    "title": "Kun 22: Globalization and Culture",
    "writing_prompt": "What are some positive and negative effects of globalization on local cultures? Discuss with examples.",
    "writing_min_words": 80,
    "reading_title": "The Spread of Global Cuisine",
    "reading_text": "Globalization has dramatically transformed the way people around the world eat, making it possible to find sushi in small towns far from Japan or tacos in cities thousands of kilometers from Mexico. This widespread exchange of culinary traditions has been driven by factors such as international migration, global media, and the rise of food delivery platforms that connect consumers with a wider variety of cuisines than ever before. While many view this as a positive development that fosters cultural appreciation and understanding, some food historians express concern that mass-market adaptations of traditional dishes, designed to appeal to broader audiences, can gradually distance these foods from their original cultural significance and authentic preparation methods.",
    "reading_questions": [
        {"id": "d22r1", "type": "true-false-not-given", "text": "Global cuisine has become more accessible due to globalization.", "correctAnswer": "True"},
        {"id": "d22r2", "type": "multiple-choice", "text": "What concern do some food historians raise?", "options": ["Food has become too expensive", "Mass-market adaptations may lose authenticity", "There is too much variety", "Traditional food is disappearing entirely"], "correctAnswer": "Mass-market adaptations may lose authenticity"},
        {"id": "d22r3", "type": "true-false-not-given", "text": "Everyone agrees that globalized food is a negative development.", "correctAnswer": "False"},
    ],
    "podcast_title": "Daily Podcast: English as a Global Language",
    "podcast_transcript": "Host: English has become the most widely used second language in the world, serving as a common bridge for international business, science, and travel. Linguists note that this widespread use has led to the emergence of many distinct varieties of English around the globe, each shaped by local languages and cultures. While this global spread offers clear practical advantages for communication, some linguists worry about its long-term effect on linguistic diversity, as smaller languages sometimes lose speakers to more dominant global languages over successive generations.",
    "podcast_questions": [
        {"id": "d22l1", "type": "multiple-choice", "text": "What role does English serve internationally?", "options": ["A common bridge for business and science", "The only language used in schools", "A replacement for all local languages", "A purely historical language"], "correctAnswer": "A common bridge for business and science"},
        {"id": "d22l2", "type": "fill-blank", "text": "Some linguists worry about a decline in linguistic ______.", "correctAnswer": ["diversity"]},
    ],
    "dictation_text": "English has become the most widely used second language in the world.",
})

with open('/home/claude/ielts-mock/scripts/daily_16to22.json', 'w', encoding='utf-8') as f:
    json.dump(days, f, ensure_ascii=False, indent=2)

print(f"Saqlandi: {len(days)} kun")
for d in days:
    print(f"Kun {d['day_number']}: {d['title']}")
