"use client";
import { Language, ListProps, RadioButtonProps, Variant } from "@/types";
import { Check, X } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import useQuestionStore from "@/app/store";
import { CircleHelp } from "lucide-react";
import { usePathname } from "next/navigation";
// Expandable for more languages

const RadioButton: React.FC<RadioButtonProps> = ({
  variant,
  label,
  language,
  onClick,
  isDisabled,
  isAnimating,
}) => {
  const handleClick = () => {
    if (!isDisabled) {
      onClick();
    }
  };

  const getVariantStyles = (variant: Variant) => {
    switch (variant) {
      case "neutral":
        return "cursor-pointer font-medium text-sm hover:bg-[#F2F2F7] text-black rounded-lg";
      case "right":
        return "cursor-default bg-green-100 rounded-lg transition-all duration-500 ease-in-out";
      case "wrong":
        return "cursor-default bg-red-100 rounded-lg transition-all duration-500 ease-in-out";
      case "disabled":
        return "rounded-lg opacity-50 cursor-not-allowed transition-all duration-500 ease-in-out";
      case "selected":
        return "cursor-default bg-blue-100 rounded-lg transition-all duration-500 ease-in-out";
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
      case "selected":
        return "accent-black opacity-100 cursor-not-allowed";
      default:
        return "";
    }
  };

  const renderIcon = (variant: Variant) => {
    switch (variant) {
      case "right":
        return (
          <div className="w-4 h-4 sm:w-5 sm:h-5 mr-5 bg-green-500 rounded-md flex items-center justify-center rotate-45">
            <Check className="w-4 h-4 text-white rotate-[-45deg]" />
          </div>
        );
      case "selected":
        return (
          <div className="w-4 h-4 sm:w-5 sm:h-5 mr-5 bg-blue-500 rounded-md flex items-center justify-center rotate-45">
            <CircleHelp className="w-4 h-4 text-white rotate-[-45deg]" />
          </div>
        );
      case "wrong":
        return (
          <div className="w-4 h-4 sm:w-5 sm:h-5 mr-5 bg-red-500 rounded-md flex items-center justify-center rotate-45">
            <X className="w-4 h-4 text-white rotate-[-45deg]" />
          </div>
        );
      default:
        return (
          <div className="flex items-center">
            <div
              className={`w-5 h-5 mr-4 rounded-full border-[2px] border-gray-300 flex items-center justify-center
            transition-all duration-200 ease-in-out
            ${variant === "neutral" ? "group-hover:border-[6px] group-hover:border-gray-400" : ""}`}
            ></div>
          </div>
        );
    }
  };

  return (
    <div
      className={`grid grid-cols-[auto_1fr] items-center group ${getVariantStyles(
        variant
      )} p-4 py-3 sm:py-4 gap-2 ${isAnimating ? "animate-bounce" : ""}`}
      onClick={handleClick}
    >
      <span className="mx-auto w-fit col-span-1">{renderIcon(variant)}</span>
      <span
        className={`${
          language === "english" ? "font-normal" : "font-medium"
        } md:text-[15px] text-sm text-black col-span-1`}
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
  const pathname = usePathname();
  const isReviewMode = useRef<boolean>(pathname.includes("review"));
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [animatingOptionId, setAnimatingOptionId] = useState<number | null>(
    null
  );
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const confirmAnswerState = useQuestionStore(
    (state) => state.confirmAnswerState
  );
  const setConfirmAnswerState = useQuestionStore(
    (state) => state.setConfirmAnswerState
  );
  useEffect(() => {
    if (userAnswer !== null) {
      setSelectedOptionId(userAnswer);
      setShowResult(true);
      setAnimatingOptionId(userAnswer);

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set a new timeout to stop the animation after 500ms
      timeoutRef.current = setTimeout(() => {
        setAnimatingOptionId(null);
      }, 500);
    } else {
      setSelectedOptionId(null);
      setShowResult(false);
      setAnimatingOptionId(null);
    }

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [userAnswer]);

  const handleOptionClick = (optionId: number) => {
    if (confirmAnswerState == optionId) {
      setConfirmAnswerState(null);
      setSelectedOptionId(null);
    } else {
      setConfirmAnswerState(optionId);
      setSelectedOptionId(optionId);
    }
  };

  return (
    <div className="flex flex-col transition-all md:gap-1 gap-1">
      {options.map((option) => {
        let variant: Variant = "neutral";
        if (confirmAnswerState && confirmAnswerState == option.id) {
          variant = "selected";
        } else if (showResult || isReviewMode) {
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
            isDisabled={showResult || isReviewMode.current} // Disable all options once one is selected
            isAnimating={option.id === animatingOptionId}
          />
        );
      })}
    </div>
  );
};

export default List;
