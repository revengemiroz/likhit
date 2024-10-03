export type Language = "english" | "nepali";

export interface ListProps {
  options: Option[];
  correctAnswerId: number;
  language: Language;
  onAnswerSelect: () => void;
}

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
