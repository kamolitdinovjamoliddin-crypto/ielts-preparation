import { ReadingTest } from "@/lib/types";

export const readingTests: ReadingTest[] = [
  {
    id: "reading-test-1",
    title: "Reading Practice Test 1",
    durationMinutes: 60,
    passages: [
      {
        id: "passage-1",
        title: "The History of Tea",
        paragraphs: [
          "Tea is one of the most widely consumed beverages in the world, second only to water. Its origins trace back nearly 5,000 years to ancient China, where legend credits Emperor Shen Nung with its discovery in 2737 BCE when tea leaves accidentally blew into a pot of boiling water. While this story is likely more myth than history, archaeological evidence confirms that tea drinking was well established in China by the Han Dynasty.",
          "For centuries, tea remained a primarily Chinese phenomenon, closely tied to Buddhist monastic life and used both as a stimulant during long meditation sessions and as a medicinal tonic. It was not until the Tang Dynasty (618-907 CE) that tea cultivation and consumption spread widely throughout Chinese society, becoming an integral part of daily life and culture.",
          "Tea's journey to the West began in the early 17th century when Portuguese and Dutch traders brought it to Europe. The beverage was initially extremely expensive and was consumed almost exclusively by the aristocracy. Britain's relationship with tea, which would eventually become iconic, started relatively late but grew with remarkable speed. By the mid-18th century, tea had become so popular in Britain that it was no longer a luxury reserved for the wealthy.",
          "The British East India Company played a central role in this transformation, importing vast quantities of tea from China and later establishing tea plantations in India and Ceylon (now Sri Lanka) to reduce dependence on Chinese supply. This shift had profound economic and social consequences, including the growth of large-scale tea plantations that relied heavily on cheap labour.",
          "Today, tea is cultivated in more than 35 countries, with China and India remaining the largest producers. Despite the proliferation of new beverages, tea's cultural significance endures, from the elaborate Japanese tea ceremony to the British custom of afternoon tea, demonstrating how a single plant has shaped social rituals across vastly different cultures.",
        ],
        questions: [
          {
            id: "p1-q1",
            type: "true-false-not-given",
            text: "Emperor Shen Nung's discovery of tea is historically well documented.",
            correctAnswer: "False",
          },
          {
            id: "p1-q2",
            type: "true-false-not-given",
            text: "Tea was used by Buddhist monks to help them stay alert during meditation.",
            correctAnswer: "True",
          },
          {
            id: "p1-q3",
            type: "true-false-not-given",
            text: "Tea became widespread in Chinese society during the Han Dynasty.",
            correctAnswer: "Not Given",
          },
          {
            id: "p1-q4",
            type: "multiple-choice",
            text: "According to the passage, who first brought tea to Europe?",
            options: [
              "British merchants",
              "Portuguese and Dutch traders",
              "Chinese diplomats",
              "Indian plantation owners",
            ],
            correctAnswer: "Portuguese and Dutch traders",
          },
          {
            id: "p1-q5",
            type: "multiple-choice",
            text: "Why did the British East India Company establish plantations in India and Ceylon?",
            options: [
              "To improve tea quality",
              "To reduce dependence on Chinese supply",
              "To create new tea ceremonies",
              "To lower import taxes",
            ],
            correctAnswer: "To reduce dependence on Chinese supply",
          },
          {
            id: "p1-q6",
            type: "fill-blank",
            text: "By the mid-18th century, tea was no longer considered a ______ in Britain.",
            correctAnswer: ["luxury"],
            wordLimit: "ONE WORD ONLY",
          },
          {
            id: "p1-q7",
            type: "fill-blank",
            text: "Tea is now grown in more than ______ countries.",
            correctAnswer: ["35"],
            wordLimit: "ONE WORD ONLY",
          },
        ],
      },
      {
        id: "passage-2",
        title: "Urban Bee Populations and City Ecosystems",
        paragraphs: [
          "In recent years, researchers have observed a surprising trend: many bee species are thriving better in urban environments than in surrounding rural areas. This finding challenges the conventional assumption that cities, with their concrete and pollution, are inherently hostile to wildlife. Studies conducted in cities such as London, New York, and Berlin have found higher bee diversity in urban parks and gardens compared to nearby agricultural land.",
          "One explanation lies in the way modern agriculture is practised. Large-scale monoculture farming, which involves planting vast areas with a single crop, drastically reduces the variety of flowering plants available to pollinators throughout the year. In contrast, urban gardens, parks, and even roadside verges often contain a much more diverse mix of flowering plants, providing bees with a continuous supply of nectar and pollen across different seasons.",
          "Pesticide use is another critical factor. Agricultural land is frequently treated with chemicals designed to kill insects, including those that are harmless or beneficial to crops. While cities are not pesticide-free, the scale and frequency of chemical application tend to be considerably lower in domestic gardens and public green spaces than on commercial farmland.",
          "However, researchers caution against viewing cities as a perfect solution to pollinator decline. Urban environments still pose risks, including habitat fragmentation, where green spaces are isolated from one another by roads and buildings, making it difficult for bee populations to move and interbreed. Light pollution and the urban heat island effect can also disrupt natural bee behaviours, such as foraging patterns and seasonal timing.",
          "Urban planners and city governments have begun to respond to these findings by incorporating pollinator-friendly initiatives into city design. Green roofs, wildflower verges, and reduced pesticide policies in public spaces are increasingly common in cities seeking to support biodiversity. Some experts argue that with thoughtful planning, cities could serve as crucial refuges for pollinators as agricultural intensification continues to threaten rural habitats.",
        ],
        questions: [
          {
            id: "p2-q1",
            type: "true-false-not-given",
            text: "Bee diversity has been found to be lower in cities than in rural areas.",
            correctAnswer: "False",
          },
          {
            id: "p2-q2",
            type: "true-false-not-given",
            text: "Monoculture farming reduces the range of flowers available to bees.",
            correctAnswer: "True",
          },
          {
            id: "p2-q3",
            type: "true-false-not-given",
            text: "Cities use more pesticides overall than farms.",
            correctAnswer: "False",
          },
          {
            id: "p2-q4",
            type: "true-false-not-given",
            text: "Light pollution can affect the way bees behave.",
            correctAnswer: "True",
          },
          {
            id: "p2-q5",
            type: "multiple-choice",
            text: "What does the passage identify as a risk specific to urban environments?",
            options: [
              "Lack of flowering plants",
              "Habitat fragmentation",
              "Excessive pesticide use",
              "Lack of public interest",
            ],
            correctAnswer: "Habitat fragmentation",
          },
          {
            id: "p2-q6",
            type: "short-answer",
            text: "Name one urban design initiative mentioned that supports pollinators.",
            correctAnswer: ["green roofs", "wildflower verges", "reduced pesticide policies"],
            wordLimit: "NO MORE THAN TWO WORDS",
          },
        ],
      },
      {
        id: "passage-3",
        title: "The Psychology of Procrastination",
        paragraphs: [
          "Procrastination, the act of delaying or postponing tasks despite knowing that doing so may have negative consequences, is a behaviour nearly everyone engages in at some point. For decades, it was commonly dismissed as a simple failure of time management or willpower. However, contemporary psychological research suggests that procrastination is a far more complex phenomenon, rooted in emotional regulation rather than scheduling deficiencies.",
          "According to this emotional regulation model, people procrastinate not because they cannot manage their time, but because they are attempting to avoid the negative emotions associated with a task, such as anxiety, boredom, frustration, or self-doubt. The task itself becomes secondary to the immediate goal of feeling better in the present moment. This explains why procrastination often occurs even when individuals are fully aware that delaying will likely increase stress later.",
          "Perfectionism is frequently cited as a contributing factor, though its relationship with procrastination is nuanced. Maladaptive perfectionists, who set excessively high standards and fear failure, often procrastinate because starting a task raises the possibility of falling short of their own expectations. Paradoxically, avoiding the task entirely feels psychologically safer than attempting it and potentially failing.",
          "Researchers have also identified a cyclical pattern often referred to as the 'procrastination cycle'. This begins with delaying a task to avoid discomfort, followed by temporary relief, which is then replaced by guilt or anxiety as deadlines approach. This mounting pressure can paradoxically reinforce future procrastination, as the individual associates the task with negative emotional states even more strongly than before.",
          "Interventions that focus solely on time-management techniques, such as scheduling apps or to-do lists, often show limited long-term success because they fail to address the underlying emotional drivers. More effective approaches tend to incorporate self-compassion training, helping individuals reduce the harsh self-criticism that often accompanies procrastination, alongside strategies for breaking tasks into smaller, less emotionally daunting components.",
        ],
        questions: [
          {
            id: "p3-q1",
            type: "true-false-not-given",
            text: "Procrastination was traditionally viewed as a problem of poor time management.",
            correctAnswer: "True",
          },
          {
            id: "p3-q2",
            type: "true-false-not-given",
            text: "Modern research suggests procrastination is mainly about avoiding negative emotions.",
            correctAnswer: "True",
          },
          {
            id: "p3-q3",
            type: "true-false-not-given",
            text: "All perfectionists are more likely to procrastinate than non-perfectionists.",
            correctAnswer: "Not Given",
          },
          {
            id: "p3-q4",
            type: "multiple-choice",
            text: "What happens after the temporary relief stage in the 'procrastination cycle'?",
            options: [
              "The task is completed early",
              "Guilt or anxiety increases as deadlines approach",
              "The individual loses interest in all tasks",
              "Time-management skills improve",
            ],
            correctAnswer: "Guilt or anxiety increases as deadlines approach",
          },
          {
            id: "p3-q5",
            type: "multiple-choice",
            text: "Why do purely time-management based interventions often fail, according to the passage?",
            options: [
              "They are too difficult to use",
              "They do not address the emotional causes of procrastination",
              "They require expensive software",
              "They are only useful for perfectionists",
            ],
            correctAnswer: "They do not address the emotional causes of procrastination",
          },
          {
            id: "p3-q6",
            type: "fill-blank",
            text: "More effective approaches include ______ training to reduce harsh self-criticism.",
            correctAnswer: ["self-compassion"],
            wordLimit: "ONE WORD ONLY",
          },
        ],
      },
    ],
  },
];
