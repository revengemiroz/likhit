import { create } from "zustand";

import { questions } from "../data/en";

const useStore = create((set) => ({
  initialState: {
    questions: { ...questions, answered: false },
    answeredQuestions: [], // to store answered questions id
  },
}));

export default useStore;
