import { create } from "zustand";
import { persist } from "zustand/middleware";

// import { questions } from "../data/en";
import { questions } from "../data/np/two_wheeler_pic_qsn";
import { QuestionStoreType } from "../types";

// Add `user_answer` property to each question during initialization
const initializeQuestions = questions.map((question) => ({
  ...question,
  user_answer: null, // initially, user_answer is set to null
}));

const useQuestionStore = create(
  persist<QuestionStoreType>(
    (set, get) => ({
      questions: [...initializeQuestions], // fetches all the questions to be displayed
      shuffledQuestions: [...initializeQuestions].sort(
        () => Math.random() - 0.5
      ), // shuffles the questions initially
      started: false, // sets to true once a question is clicked, can be reset with resetAll
      count: {
        correct: 0,
        incorrect: 0,
      },
      currentQuestionIndex: 0,
      confirmAnswerState: null,
      finish: false,
      isReviewMode: false,
      setIsReviewMode: (value: boolean) => set({ isReviewMode: value }),

      // Function to reset all state
      resetAll: () => {
        set({
          questions: [...initializeQuestions],
          shuffledQuestions: [...initializeQuestions].sort(
            () => Math.random() - 0.5
          ),
          started: false,
          count: {
            correct: 0,
            incorrect: 0,
          },
          currentQuestionIndex: 0,
        });
      },

      // Function to increase the count of correct answers
      increaseCorrect: () => {
        set((state) => ({
          count: {
            ...state.count,
            correct: state.count.correct + 1,
          },
        }));
      },

      // Function to increase the count of incorrect answers
      increaseIncorrect: () => {
        set((state) => ({
          count: {
            ...state.count,
            incorrect: state.count.incorrect + 1,
          },
        }));
      },

      // Function to mark the quiz as started
      start: (value: boolean) => {
        set({ started: value });
      },

      setFinish: (value: boolean) => set({ finish: value }),

      setConfirmAnswerState: (value: number | null) =>
        set({ confirmAnswerState: value }),
      // Function to move to the next question
      nextQuestion: () => {
        set((state) => ({
          currentQuestionIndex: state.currentQuestionIndex + 1,
        }));
      },
      backQuestion: () => {
        set((state) => ({
          currentQuestionIndex: state.currentQuestionIndex - 1,
        }));
      },
      // Function to get a specific question by index
      getSpecificQuestion: () => {
        return get().shuffledQuestions[get().currentQuestionIndex];
      },

      // get score
      getScore: () => {
        return get().count;
      },
      // Function to save the user's answer to the current question
      saveUserAnswer: (questionId: number, userAnswer: number) => {
        set((state) => ({
          shuffledQuestions: state.shuffledQuestions.map((question) =>
            question.id === questionId
              ? { ...question, user_answer: userAnswer }
              : question
          ),
          questions: state.questions.map((question) =>
            question.id === questionId
              ? { ...question, user_answer: userAnswer }
              : question
          ),
        }));
      },
    }),
    {
      name: "question-store", // name of the item in localStorage
      partialize: (state) => ({
        ...state,
        shuffledQuestions: state.shuffledQuestions,
        questions: state.questions,
        count: state.count,
        started: state.started,
        currentQuestionIndex: state.currentQuestionIndex,
      }),
    }
  )
);

export default useQuestionStore;
