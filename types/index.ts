export type Language = "english" | "nepali";

export interface ListProps {
  options: Option[];
  correctAnswerId: number;
  language: Language;
  handleAnswerSelect: (answerId: number) => void;
  userAnswer: number | null;
}

export type QuestionStoreType = {
  finish: boolean;
  nextQuestion: () => void;
  backQuestion: () => void;
  setCurrentQuestionIndex: (value: number) => void;
  start: any;
  confirmAnswerState: number | null;
  setConfirmAnswerState: (value: number | null) => void;
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
  setFinish: (value: boolean) => void;
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
  user_answer?: number | null;
}
export type Variant = "neutral" | "right" | "wrong" | "disabled" | "selected";

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
  isAnimating: boolean;
}
