import { WritingTest } from "@/lib/types";

export const writingTests: WritingTest[] = [
  {
    id: "writing-test-1",
    title: "Writing Practice Test 1",
    tasks: [
      {
        id: "task-1",
        taskNumber: 1,
        prompt:
          "The chart below shows the percentage of households with internet access in four countries (UK, USA, Brazil, and Nigeria) between 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        imageDescription:
          "Line graph showing internet access percentage (0-100%) on the Y-axis and years (2000, 2005, 2010, 2015, 2020) on the X-axis for four countries:\n" +
          "- UK: 2000: 25%, 2005: 55%, 2010: 78%, 2015: 90%, 2020: 96%\n" +
          "- USA: 2000: 30%, 2005: 60%, 2010: 75%, 2015: 87%, 2020: 92%\n" +
          "- Brazil: 2000: 5%, 2005: 18%, 2010: 38%, 2015: 58%, 2020: 75%\n" +
          "- Nigeria: 2000: 1%, 2005: 4%, 2010: 14%, 2015: 30%, 2020: 51%",
        minWords: 150,
        durationMinutes: 20,
      },
      {
        id: "task-2",
        taskNumber: 2,
        prompt:
          "Some people believe that the best way to increase road safety is to enforce stricter penalties for traffic offences. Others believe that road safety education is more effective. Discuss both views and give your own opinion.",
        minWords: 250,
        durationMinutes: 40,
      },
    ],
  },
  {
    id: "writing-test-2",
    title: "Writing Practice Test 2",
    tasks: [
      {
        id: "task-1-b",
        taskNumber: 1,
        prompt:
          "The diagram below shows the process of recycling plastic bottles. Summarise the information by describing the main stages of the process.",
        imageDescription:
          "Process diagram with 5 stages connected by arrows:\n" +
          "1. Collection - plastic bottles collected from household recycling bins and public bins\n" +
          "2. Sorting - bottles sorted by colour and plastic type at a recycling facility\n" +
          "3. Cleaning - bottles washed to remove labels, caps, and contaminants\n" +
          "4. Shredding - clean bottles shredded into small plastic flakes\n" +
          "5. Melting and Pelletising - flakes melted and formed into pellets, which are sold to manufacturers to create new plastic products",
        minWords: 150,
        durationMinutes: 20,
      },
      {
        id: "task-2-b",
        taskNumber: 2,
        prompt:
          "In many countries, more and more people are choosing to work from home rather than in a traditional office. Do you think the advantages of this trend outweigh the disadvantages?",
        minWords: 250,
        durationMinutes: 40,
      },
    ],
  },
];
