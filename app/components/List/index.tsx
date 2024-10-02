import { Check, X } from "lucide-react";
import React, { useState } from "react";

type Variant = "neutral" | "right" | "wrong" | "disabled";
type Language = "english" | "nepali"; // Expandable for more languages

interface Option {
  id: number;
  english: string;
  other: string;
}

interface RadioButtonProps {
  variant: Variant;
  label: string;
  language: Language;
  onClick: () => void;
  isDisabled: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  variant,
  label,
  language,
  onClick,
  isDisabled,
}) => {
  const handleClick = () => {
    if (!isDisabled) {
      onClick();
    }
  };

  const getVariantStyles = (variant: Variant) => {
    switch (variant) {
      case "neutral":
        return "font-medium text-sm hover:bg-[#F2F2F7] text-black p-4 rounded-lg";
      case "right":
        return "bg-green-100 rounded-lg p-4";
      case "wrong":
        return "bg-red-100 p-4 rounded-lg";
      case "disabled":
        return "p-4 rounded-lg opacity-50 cursor-not-allowed";
      default:
        return "";
    }
  };

  const getRadioStyles = (variant: Variant) => {
    switch (variant) {
      case "neutral":
        return "accent-pink-500";
      case "right":
        return "accent-green-500";
      case "wrong":
        return "accent-pink-500";
      case "disabled":
        return "accent-black opacity-100 cursor-not-allowed";
      default:
        return "";
    }
  };

  const renderIcon = (variant: Variant) => {
    switch (variant) {
      case "right":
        return (
          <div className="w-5 h-5 mr-5 bg-green-500 rounded-md flex items-center justify-center rotate-45">
            <Check className="w-4 h-4 text-white rotate-[-45deg]" />
          </div>
        );
      case "wrong":
        return (
          <div className="w-5 h-5 mr-5 bg-red-500 rounded-md flex items-center justify-center rotate-45">
            <X className="w-4 h-4 text-white rotate-[-45deg]" />
          </div>
        );
      default:
        return (
          <input
            type="radio"
            disabled={isDisabled}
            className={`transition-all mr-4 w-5 h-5 border-4 rounded-full ${getRadioStyles(
              variant
            )}`}
          />
        );
    }
  };

  return (
    <div
      className={`flex items-center cursor-pointer ${getVariantStyles(
        variant
      )}`}
      onClick={handleClick}
    >
      {renderIcon(variant)}
      <span
        className={`${
          language === "english" ? "font-normal" : "font-medium"
        } text-sm text-black`}
      >
        {label}
      </span>
    </div>
  );
};

interface ListProps {
  options: Option[];
  correctAnswerId: number;
  language: Language;
  onAnswerSelect: () => void;
}

const List: React.FC<ListProps> = ({
  options,
  correctAnswerId,
  language,
  onAnswerSelect,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (optionId: number) => {
    setSelectedOptionId(optionId);
    setShowResult(true);
    onAnswerSelect(); // Notify the parent component that an answer has been selected
  };

  return (
    <div className="flex flex-col transition-all gap-2">
      {options.map((option) => {
        let variant: Variant = "neutral";

        if (showResult) {
          if (option.id === correctAnswerId) {
            variant = "right"; // Show correct answer
          } else if (option.id === selectedOptionId) {
            variant = "wrong"; // Show wrong answer if selected
          } else {
            variant = "disabled"; // Disable all other options
          }
        }

        return (
          <RadioButton
            key={option.id}
            variant={variant}
            label={option[language]}
            language={language}
            onClick={() => handleOptionClick(option.id)}
            isDisabled={showResult} // Disable all options once one is selected
          />
        );
      })}
    </div>
  );
};

export default List;
