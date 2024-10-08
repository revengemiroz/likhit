"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, RotateCcw } from "lucide-react";
import React from "react";

import AnswerButton from "@/components/home/AnswerButton";
import useQuestionStore from "../../app/store"; // Import the Zustand store

function ScoreBoard() {
  // Access shuffledQuestions and currentQuestionIndex from Zustand
  const shuffledQuestions = useQuestionStore(
    (state) => state.shuffledQuestions
  );
  const currentQuestionIndex = useQuestionStore(
    (state) => state.currentQuestionIndex
  );
  const correctCount = useQuestionStore((state) => state.count.correct);
  const incorrectCount = useQuestionStore((state) => state.count.incorrect);
  const resetAll = useQuestionStore((state) => state.resetAll);

  // Helper function to determine the variant of the AnswerButton
  const getVariant = (question: any, index: any) => {
    if (index === currentQuestionIndex && question.user_answer == null) {
      return "selected";
    } else if (question.user_answer !== null) {
      return question.user_answer === question.correctAnswerId
        ? "right"
        : "wrong";
    } else {
      return "neutral";
    }
  };

  return (
    <div className="flex flex-col w-full lg:max-w-[370px] h-fit ">
      <div className="flex flex-row gap-4 w-full mb-4">
        <Button
          className="w-full hover:bg-white flex items-center py-5 justify-center gap-2 group"
          variant="outline"
        >
          <span className="group-hover:text-blue-500">
            <ChevronLeft className="w-4 h-4" />
          </span>
          <span className="group-hover:text-blue-500">All Test</span>
        </Button>

        <Button
          onClick={resetAll}
          className="w-full hover:bg-white flex items-center py-5 justify-center gap-2 group"
          variant="outline"
        >
          <span className="group-hover:text-blue-500">
            <RotateCcw className="w-4 h-4" />
          </span>
          <span className="group-hover:text-blue-500">Restart</span>
        </Button>
      </div>
      <div className="flex flex-col border justify-center items-center shadow-sm bg-white rounded-xl py-4 px-6">
        <p className="text-xl font-semibold mb-4">Your Progress</p>
        <div className="grid grid-cols-7 gap-2  ">
          {/* Render answer buttons dynamically based on the number of shuffled questions */}
          {shuffledQuestions.map((question, index) => (
            <AnswerButton
              key={question.id}
              variant={getVariant(question, index)}
            >
              {index + 1}
            </AnswerButton>
          ))}
        </div>

        <div className="flex gap-2 mt-4 ">
          <div className="flex gap-2 items-center justify-center">
            <span className="text-green w-[6px] h-[6px] rounded-full bg-green-300" />
            <span className="font-semibold text-sm">
              {correctCount} Correct
            </span>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <span className="text-green w-[6px] h-[6px] rounded-full bg-red-300" />
            <span className="font-semibold text-sm">
              {incorrectCount} Incorrect
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
