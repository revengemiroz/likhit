import { Language, ListProps, RadioButtonProps, Variant } from "@/types";
import { Check, X } from "lucide-react";
import React, { useState, useEffect } from "react";

// Expandable for more languages

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
  19;

  const getVariantStyles = (variant: Variant) => {
    switch (variant) {
      case "neutral":
        return "cursor-pointer font-medium text-sm hover:bg-[#F2F2F7] text-black   rounded-lg";
      case "right":
        return "cursor-default bg-green-100 rounded-lg  ";
      case "wrong":
        return "cursor-default bg-red-100   rounded-lg";
      case "disabled":
        return "  rounded-lg opacity-50 cursor-not-allowed";
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
          <div className="w-4 h-4  sm:w-5 sm:h-5 mr-5 bg-green-500 rounded-md flex items-center justify-center rotate-45">
            <Check className="w-4 h-4 text-white rotate-[-45deg]" />
          </div>
        );
      case "wrong":
        return (
          <div className="w-4 h-4  sm:w-5 sm:h-5 mr-5 bg-red-500 rounded-md flex items-center justify-center rotate-45">
            <X className="w-4 h-4 text-white rotate-[-45deg]" />
          </div>
        );
      default:
        return (
          <div className="flex items-center">
            <label title="normal" htmlFor="normal"></label>
            <input
              id="normal"
              type="radio"
              disabled={isDisabled}
              className={`transition-all  mr-4 w-5 h-5 border-4 rounded-full ${getRadioStyles(
                variant
              )}`}
            />
          </div>
        );
    }
  };

  return (
    <div
      className={`grid grid-cols-16 items-center  ${getVariantStyles(
        variant
      )}  p-4 py-1 sm:py-4 gap-5`}
      onClick={handleClick}
    >
      <span className="mx-auto w-fit col-span-2">{renderIcon(variant)}</span>
      <span
        className={`${
          language === "english" ? "font-normal" : "font-medium"
        }   text-[13px] sm:text-sm text-black col-span-12 `}
      >
        {label}
      </span>
    </div>
  );
};

const List: React.FC<ListProps> = ({
  options,
  correctAnswerId,
  language,
  handleAnswerSelect,
  userAnswer,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (userAnswer !== null) {
      setSelectedOptionId(userAnswer);
      setShowResult(true);
    } else {
      setSelectedOptionId(null);
      setShowResult(false);
    }
  }, [userAnswer]);

  const handleOptionClick = (optionId: number) => {
    setSelectedOptionId(optionId);
    setShowResult(true);

    handleAnswerSelect(optionId); // Notify the parent component that an answer has been selected
  };

  return (
    <div className="flex flex-col transition-all  md:gap-2 gap-1">
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
