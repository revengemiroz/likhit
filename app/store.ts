import { create } from "zustand";

type QuestionStore = {};

import { questions } from "../data/en";

const useQuestionStore = create<QuestionStore>((set, get) => ({
  questions: [...questions], // fetches all the questions to be displayed
  shuffledQuestions: [...questions].sort(() => Math.random() - 0.5), // shuffles the questions only if the started is false
  started: false, // sets it true once one question is clicked, can be reseted with reset
  answers: [], // to store answer option ids; the index of this array corrosponds to index of shuffledQuestions
  count: {
    correct: 0,
    incorrect: 0,
  },
}));

export default useQuestionStore;
