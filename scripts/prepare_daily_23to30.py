import json

days = []

# ===================== KUN 23: Crime and Law =====================
days.append({
    "day_number": 23,
    "title": "Kun 23: Crime and Law",
    "writing_prompt": "Some people believe that prisons should focus on punishment, while others believe rehabilitation is more important. Discuss both views and give your opinion.",
    "writing_min_words": 80,
    "reading_title": "Does CCTV Reduce Crime?",
    "reading_text": "Closed-circuit television cameras have become a common feature in cities around the world, with proponents arguing that their presence deters criminal activity and assists police in identifying suspects after a crime has occurred. Research on the effectiveness of CCTV, however, has produced mixed results. Some studies show a measurable reduction in property crimes, such as car theft, in areas with extensive camera coverage, particularly in car parks and public transport stations. Other research suggests that cameras have little to no effect on more impulsive crimes, such as violent assaults, since these offenses are rarely planned in advance with consideration of surveillance.",
    "reading_questions": [
        {"id": "d23r1", "type": "true-false-not-given", "text": "Research on CCTV effectiveness has produced mixed results.", "correctAnswer": "True"},
        {"id": "d23r2", "type": "multiple-choice", "text": "Where has CCTV been most effective at reducing crime?", "options": ["Schools", "Car parks and transport stations", "Private homes", "Forests"], "correctAnswer": "Car parks and transport stations"},
        {"id": "d23r3", "type": "true-false-not-given", "text": "CCTV is highly effective at preventing impulsive violent crimes.", "correctAnswer": "False"},
    ],
    "podcast_title": "Daily Podcast: Cybersecurity Basics",
    "podcast_transcript": "Host: As more of daily life moves online, basic cybersecurity habits have become essential for everyone, not just technology professionals. Experts recommend using a unique, complex password for each online account, since reusing the same password across multiple sites means a single data breach could compromise all of them at once. Enabling two-factor authentication, which requires a second form of verification beyond just a password, adds an additional layer of protection that can prevent unauthorized access even if a password is somehow discovered.",
    "podcast_questions": [
        {"id": "d23l1", "type": "fill-blank", "text": "Experts recommend a unique, complex ______ for each account.", "correctAnswer": ["password"]},
        {"id": "d23l2", "type": "multiple-choice", "text": "What does two-factor authentication add?", "options": ["A faster login", "An additional layer of protection", "A backup password", "A new email address"], "correctAnswer": "An additional layer of protection"},
    ],
    "dictation_text": "Experts recommend using a unique, complex password for each online account.",
})

# ===================== KUN 24: Family and Parenting =====================
days.append({
    "day_number": 24,
    "title": "Kun 24: Family and Parenting",
    "writing_prompt": "Do you think children today have an easier or harder childhood than previous generations? Explain your view.",
    "writing_min_words": 80,
    "reading_title": "The Debate Over Screen Time",
    "reading_text": "Pediatricians and child development experts have engaged in ongoing debate regarding appropriate levels of screen time for children, as digital devices have become increasingly integrated into daily life from a very young age. Some research links excessive screen use to reduced attention spans and disrupted sleep patterns, particularly when devices are used shortly before bedtime. However, other researchers emphasize that the type of content matters far more than the total amount of time spent on a screen, noting that educational programs and interactive learning apps can offer genuine developmental benefits that passive entertainment does not provide.",
    "reading_questions": [
        {"id": "d24r1", "type": "true-false-not-given", "text": "All experts agree on the exact amount of screen time children should have.", "correctAnswer": "Not Given"},
        {"id": "d24r2", "type": "multiple-choice", "text": "What does excessive screen use before bed link to?", "options": ["Better grades", "Disrupted sleep patterns", "Improved attention", "Faster reading"], "correctAnswer": "Disrupted sleep patterns"},
        {"id": "d24r3", "type": "true-false-not-given", "text": "Some researchers say content type matters more than total screen time.", "correctAnswer": "True"},
    ],
    "podcast_title": "Daily Podcast: Multigenerational Households",
    "podcast_transcript": "Host: In many parts of the world, it remains common for grandparents, parents, and children to live together under one roof, a tradition that has been declining in some Western countries but is now seeing a modest revival due to rising housing costs. Family researchers note several advantages to this arrangement, including shared childcare responsibilities and stronger intergenerational bonds. At the same time, experts acknowledge that multigenerational living requires careful communication to manage differences in daily routines, parenting styles, and personal space between family members.",
    "podcast_questions": [
        {"id": "d24l1", "type": "multiple-choice", "text": "Why is multigenerational living seeing a revival in some countries?", "options": ["New laws require it", "Rising housing costs", "It is more fashionable", "Grandparents prefer it"], "correctAnswer": "Rising housing costs"},
        {"id": "d24l2", "type": "fill-blank", "text": "This arrangement requires careful ______ between family members.", "correctAnswer": ["communication"]},
    ],
    "dictation_text": "Multigenerational living requires careful communication between family members.",
})

# ===================== KUN 25: Climate Change and Environment =====================
days.append({
    "day_number": 25,
    "title": "Kun 25: Climate Change and Environment",
    "writing_prompt": "What can individuals do to help reduce climate change? Discuss with specific examples.",
    "writing_min_words": 80,
    "reading_title": "Carbon Capture Technology",
    "reading_text": "As global efforts to reduce greenhouse gas emissions continue, scientists and engineers have also been developing carbon capture technology, which aims to remove carbon dioxide directly from the atmosphere or from industrial emission sources before it is released. Once captured, the carbon dioxide can either be stored deep underground in geological formations or converted into useful materials, such as building products or synthetic fuels. While early carbon capture facilities have demonstrated that the technology is technically feasible, critics point out that current methods remain expensive and energy-intensive, raising concerns that widespread reliance on this technology could distract from more immediate efforts to simply reduce emissions at their source.",
    "reading_questions": [
        {"id": "d25r1", "type": "true-false-not-given", "text": "Carbon capture removes carbon dioxide from the atmosphere or industrial sources.", "correctAnswer": "True"},
        {"id": "d25r2", "type": "multiple-choice", "text": "What can captured carbon dioxide be converted into?", "options": ["Drinking water", "Building products or synthetic fuels", "Electricity directly", "Plastic only"], "correctAnswer": "Building products or synthetic fuels"},
        {"id": "d25r3", "type": "true-false-not-given", "text": "Critics worry carbon capture could distract from reducing emissions at the source.", "correctAnswer": "True"},
    ],
    "podcast_title": "Daily Podcast: Renewable Energy Growth",
    "podcast_transcript": "Host: The cost of generating electricity from solar and wind power has fallen dramatically over the past decade, making these renewable sources increasingly competitive with traditional fossil fuels in many regions. This price drop has been driven largely by improvements in manufacturing efficiency and economies of scale as production has expanded globally. Energy analysts note that one remaining challenge is storage, since solar and wind power generation depends heavily on weather conditions, making reliable battery storage essential for providing consistent electricity when the sun is not shining or the wind is not blowing.",
    "podcast_questions": [
        {"id": "d25l1", "type": "multiple-choice", "text": "What has driven the price drop in renewable energy?", "options": ["Government bans on fossil fuels", "Improvements in manufacturing efficiency", "Higher taxes on oil", "Lower demand for electricity"], "correctAnswer": "Improvements in manufacturing efficiency"},
        {"id": "d25l2", "type": "fill-blank", "text": "Reliable battery ______ is essential for renewable energy.", "correctAnswer": ["storage"]},
    ],
    "dictation_text": "The cost of generating electricity from solar and wind power has fallen dramatically.",
})

# ===================== KUN 26: Media and News =====================
days.append({
    "day_number": 26,
    "title": "Kun 26: Media and News",
    "writing_prompt": "How has social media changed the way people get their news? Discuss the advantages and disadvantages.",
    "writing_min_words": 80,
    "reading_title": "The Challenge of Misinformation Online",
    "reading_text": "The rapid spread of information through social media platforms has made it easier than ever for false or misleading content to reach large audiences within minutes of being posted. Researchers studying this phenomenon have found that emotionally charged or surprising claims tend to spread significantly faster than accurate, carefully verified information, partly because such content triggers stronger reactions that encourage sharing. In response, several technology companies have introduced fact-checking partnerships and labeling systems designed to flag potentially false content, though critics argue these measures are often implemented too slowly to prevent significant damage before misinformation has already reached millions of users.",
    "reading_questions": [
        {"id": "d26r1", "type": "true-false-not-given", "text": "Accurate information always spreads faster than false claims.", "correctAnswer": "False"},
        {"id": "d26r2", "type": "multiple-choice", "text": "Why do emotionally charged claims spread faster?", "options": ["They are shorter", "They trigger stronger reactions that encourage sharing", "They are posted by celebrities", "They contain more images"], "correctAnswer": "They trigger stronger reactions that encourage sharing"},
        {"id": "d26r3", "type": "true-false-not-given", "text": "Critics believe fact-checking measures are always fast enough.", "correctAnswer": "False"},
    ],
    "podcast_title": "Daily Podcast: The Decline of Print Newspapers",
    "podcast_transcript": "Host: Print newspaper circulation has declined steadily over the past two decades as readers increasingly turn to digital sources for news. Many traditional newspapers have responded by shifting to online subscription models, hoping to replace lost advertising revenue with direct payments from readers. Media analysts note that this transition has been particularly difficult for smaller, local newspapers, which often lack the resources of larger national outlets to build effective digital platforms, raising concerns about reduced coverage of local community news and events.",
    "podcast_questions": [
        {"id": "d26l1", "type": "multiple-choice", "text": "How have newspapers responded to declining circulation?", "options": ["Closing entirely", "Shifting to online subscription models", "Increasing print runs", "Lowering print prices"], "correctAnswer": "Shifting to online subscription models"},
        {"id": "d26l2", "type": "fill-blank", "text": "Smaller, ______ newspapers have struggled the most.", "correctAnswer": ["local"]},
    ],
    "dictation_text": "Print newspaper circulation has declined steadily over the past two decades.",
})

# ===================== KUN 27: Science and Innovation =====================
days.append({
    "day_number": 27,
    "title": "Kun 27: Science and Innovation",
    "writing_prompt": "Discuss the positive and negative effects of artificial intelligence on society.",
    "writing_min_words": 80,
    "reading_title": "The Rise of 3D Printing",
    "reading_text": "Three-dimensional printing technology, once primarily used for creating simple prototypes, has expanded dramatically in recent years to include applications across medicine, construction, and manufacturing. In the medical field, researchers have successfully used 3D printing to create custom prosthetics and even early-stage tissue structures, tailored precisely to an individual patient's measurements. In construction, some companies have begun 3D printing entire small buildings using specialized concrete mixtures, a process that can significantly reduce both construction time and material waste compared to traditional building methods. As the technology continues to improve, experts predict that the range of practical applications will only continue to expand.",
    "reading_questions": [
        {"id": "d27r1", "type": "true-false-not-given", "text": "3D printing was originally used mainly for simple prototypes.", "correctAnswer": "True"},
        {"id": "d27r2", "type": "multiple-choice", "text": "What can 3D printing reduce in construction?", "options": ["Worker salaries", "Construction time and material waste", "Building height", "Land costs"], "correctAnswer": "Construction time and material waste"},
        {"id": "d27r3", "type": "true-false-not-given", "text": "3D printing has been used to create custom prosthetics.", "correctAnswer": "True"},
    ],
    "podcast_title": "Daily Podcast: How Vaccines Are Developed",
    "podcast_transcript": "Host: Developing a new vaccine typically involves several distinct stages, beginning with laboratory research to identify a suitable target, followed by testing in animal models before any human trials can begin. Human trials themselves are conducted in multiple phases, each involving progressively larger groups of volunteers, to carefully evaluate both safety and effectiveness before a vaccine can be approved for widespread public use. This entire process traditionally took many years to complete, though recent advances in research technology and funding have allowed some vaccines to be developed considerably faster without skipping any essential safety steps.",
    "podcast_questions": [
        {"id": "d27l1", "type": "multiple-choice", "text": "What happens before any human trials begin?", "options": ["Public approval votes", "Testing in animal models", "Mass production", "Marketing campaigns"], "correctAnswer": "Testing in animal models"},
        {"id": "d27l2", "type": "fill-blank", "text": "Human trials are conducted in multiple ______.", "correctAnswer": ["phases"]},
    ],
    "dictation_text": "Developing a new vaccine typically involves several distinct stages.",
})

# ===================== KUN 28: Tourism and Heritage =====================
days.append({
    "day_number": 28,
    "title": "Kun 28: Tourism and Heritage",
    "writing_prompt": "Some people believe tourism damages historical sites, while others think it helps preserve them through funding. Discuss both views and give your opinion.",
    "writing_min_words": 80,
    "reading_title": "Managing Overtourism",
    "reading_text": "Many of the world's most famous destinations have struggled in recent years with the effects of overtourism, a situation in which the sheer volume of visitors begins to damage the very attractions and local communities that drew them there in the first place. Some cities have responded by introducing visitor caps, limiting the number of tourists allowed to enter popular sites on any given day, while others have implemented tourist taxes specifically designed to fund conservation and infrastructure projects. Critics of these measures argue that they can make popular destinations less accessible to budget travelers, while supporters maintain that without intervention, the long-term damage to fragile historical and natural sites could become irreversible.",
    "reading_questions": [
        {"id": "d28r1", "type": "true-false-not-given", "text": "Overtourism can damage local communities as well as attractions.", "correctAnswer": "True"},
        {"id": "d28r2", "type": "multiple-choice", "text": "What is one measure cities have introduced against overtourism?", "options": ["Banning all tourists", "Visitor caps", "Closing all hotels", "Removing public transport"], "correctAnswer": "Visitor caps"},
        {"id": "d28r3", "type": "true-false-not-given", "text": "All critics agree that visitor caps are the best solution.", "correctAnswer": "Not Given"},
    ],
    "podcast_title": "Daily Podcast: Preserving Historical Buildings",
    "podcast_transcript": "Host: Restoring and maintaining historical buildings presents unique challenges compared to modern construction, since preservation specialists must often use traditional materials and techniques to maintain a structure's original character. This work tends to be significantly more expensive and time-consuming than standard renovation, requiring craftspeople with specialized skills that have become increasingly rare in many countries. Despite the high cost, heritage organizations argue that preserving these buildings provides important cultural and educational value that would be permanently lost if such structures were simply demolished and replaced.",
    "podcast_questions": [
        {"id": "d28l1", "type": "multiple-choice", "text": "Why is historical building restoration often more expensive?", "options": ["It requires traditional materials and rare skills", "Government taxes are higher", "Materials are imported only", "Insurance costs more"], "correctAnswer": "It requires traditional materials and rare skills"},
        {"id": "d28l2", "type": "fill-blank", "text": "Heritage organizations argue preservation has cultural and educational ______.", "correctAnswer": ["value"]},
    ],
    "dictation_text": "Preservation specialists must often use traditional materials and techniques.",
})

# ===================== KUN 29: Technology and Daily Life =====================
days.append({
    "day_number": 29,
    "title": "Kun 29: Technology and Daily Life",
    "writing_prompt": "Do you think smartphones have had a more positive or negative impact on daily life? Explain your opinion with examples.",
    "writing_min_words": 80,
    "reading_title": "The Concept of Digital Detox",
    "reading_text": "As concerns about excessive smartphone and social media use have grown, the concept of a digital detox, a deliberate period of reduced or eliminated technology use, has gained popularity among people seeking to reset their relationship with their devices. Some people choose to disconnect entirely for a weekend or longer vacation period, while others adopt smaller daily practices, such as avoiding screens for the first hour after waking up. Psychologists studying digital detox practices note that the benefits often extend beyond simply reducing screen time, with many participants reporting improved sleep quality, increased face-to-face social interaction, and a greater sense of presence during everyday activities.",
    "reading_questions": [
        {"id": "d29r1", "type": "true-false-not-given", "text": "A digital detox always requires disconnecting for an entire month.", "correctAnswer": "False"},
        {"id": "d29r2", "type": "multiple-choice", "text": "What is one reported benefit of digital detox?", "options": ["Higher income", "Improved sleep quality", "Faster typing skills", "More social media followers"], "correctAnswer": "Improved sleep quality"},
        {"id": "d29r3", "type": "true-false-not-given", "text": "Some people practice small daily digital detox habits.", "correctAnswer": "True"},
    ],
    "podcast_title": "Daily Podcast: Voice Assistants at Home",
    "podcast_transcript": "Host: Voice-activated assistants have become a common feature in many households, allowing users to control smart devices, set reminders, and answer questions simply by speaking aloud. While many users appreciate the convenience these devices offer, privacy researchers have raised concerns about how much personal data is collected during everyday interactions, and how that data might be stored or used by technology companies. Manufacturers generally respond by stating that user privacy is a top priority, though experts recommend that users review their device settings carefully to understand exactly what information is being recorded.",
    "podcast_questions": [
        {"id": "d29l1", "type": "multiple-choice", "text": "What concern do privacy researchers raise about voice assistants?", "options": ["They are too expensive", "How much personal data is collected", "They break too often", "They are difficult to set up"], "correctAnswer": "How much personal data is collected"},
        {"id": "d29l2", "type": "fill-blank", "text": "Experts recommend reviewing device ______ carefully.", "correctAnswer": ["settings"]},
    ],
    "dictation_text": "Voice-activated assistants have become a common feature in many households.",
})

# ===================== KUN 30: Review and Final Reflection =====================
days.append({
    "day_number": 30,
    "title": "Kun 30: Review and Final Reflection",
    "writing_prompt": "Reflect on your 30-day learning journey. What was the most useful thing you learned, and how do you plan to continue improving your English?",
    "writing_min_words": 80,
    "reading_title": "The Science of Habit Formation",
    "reading_text": "Researchers studying behavior change have found that forming a new habit typically takes much longer than the commonly cited figure of twenty-one days, with studies suggesting it can take anywhere from eighteen to over two hundred days depending on the complexity of the behavior and individual differences between people. One consistent finding across multiple studies is that missing a single day of practice does not significantly harm habit formation, as long as the person returns to the behavior soon afterward. This suggests that consistency over the long term matters far more than achieving a perfect, unbroken streak, which can offer reassurance to anyone who has ever felt discouraged after missing a day of practice.",
    "reading_questions": [
        {"id": "d30r1", "type": "true-false-not-given", "text": "Forming a habit always takes exactly twenty-one days.", "correctAnswer": "False"},
        {"id": "d30r2", "type": "multiple-choice", "text": "What happens if someone misses a single day of practice?", "options": ["The habit is completely lost", "It does not significantly harm habit formation", "They must start over from day one", "It has no effect at all on motivation"], "correctAnswer": "It does not significantly harm habit formation"},
        {"id": "d30r3", "type": "true-false-not-given", "text": "Long-term consistency matters more than a perfect unbroken streak.", "correctAnswer": "True"},
    ],
    "podcast_title": "Daily Podcast: Setting Goals That Last",
    "podcast_transcript": "Host: Psychologists who study motivation often distinguish between outcome goals, such as reaching a specific score, and process goals, which focus on the daily actions that lead to that outcome, such as studying for a set amount of time each day. Research suggests that focusing primarily on process goals tends to produce more consistent long-term progress, since these goals are entirely within a person's control, unlike outcomes, which can be affected by many external factors. As you continue your language learning journey beyond these thirty days, experts recommend celebrating small, consistent actions rather than waiting only for major milestones to feel a sense of accomplishment.",
    "podcast_questions": [
        {"id": "d30l1", "type": "multiple-choice", "text": "What is a 'process goal'?", "options": ["A specific final score", "Daily actions that lead to an outcome", "A type of exam", "A reward system"], "correctAnswer": "Daily actions that lead to an outcome"},
        {"id": "d30l2", "type": "fill-blank", "text": "Process goals are entirely within a person's ______.", "correctAnswer": ["control"]},
    ],
    "dictation_text": "Focusing primarily on process goals tends to produce more consistent long-term progress.",
})

with open('/home/claude/ielts-mock/scripts/daily_23to30.json', 'w', encoding='utf-8') as f:
    json.dump(days, f, ensure_ascii=False, indent=2)

print(f"Saqlandi: {len(days)} kun")
for d in days:
    print(f"Kun {d['day_number']}: {d['title']}")
