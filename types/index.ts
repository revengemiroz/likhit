export type Language = "english" | "nepali";

export interface ListProps {
  options: Option[];
  correctAnswerId: number;
  language: Language;
  handleAnswerSelect: (answerId: number) => void;
  userAnswer: number | null;
}

export type QuestionStoreType = {
  nextQuestion: any;
  start: any;
  saveUserAnswer: (questionId: number, userAnswer: number) => void;
  questions: QuestionType[];
  shuffledQuestions: QuestionType[];
  started: boolean;
  count: { correct: number; incorrect: number };
  resetAll: () => void;
  currentQuestionIndex: number;
  getSpecificQuestion: () => QuestionType;
  increaseCorrect: () => void;
  increaseIncorrect: () => void;
};

export interface QuestionType {
  id: number;
  question: {
    english: string;
    nepali: string;
  };
  options: {
    id: number;
    english: string;
    nepali: string;
  }[];
  correctAnswerId: number;
  image: string;
}
export type Variant = "neutral" | "right" | "wrong" | "disabled";

export interface Option {
  id: number;
  english: string;
  nepali: string;
}

export interface RadioButtonProps {
  variant: Variant;
  label: string;
  language: Language;
  onClick: () => void;
  isDisabled: boolean;
}
