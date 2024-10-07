"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

import List from "@/components/home/ListComponent"; // Ensure you have the List component in place
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Language } from "@/types";
import useQuestionStore from "@/app/store";
import Image from "next/image";

interface QuestionBankProps {
  questionList: any;
  handleNextQuestion: () => void;
  disabled: boolean;
  language: Language;
}

const QuestionBank: React.FC<QuestionBankProps> = ({
  questionList,
  handleNextQuestion,
  disabled,
  language,
}) => {
  const shuffledQuestions = useQuestionStore(
    (state) => state.shuffledQuestions
  );
  const saveUserAnswer = useQuestionStore((state) => state.saveUserAnswer);
  const nextQuestion = useQuestionStore((state) => state.nextQuestion);
  const currentQuestionIndex = useQuestionStore(
    (state) => state.currentQuestionIndex
  );

  const currentQuestion =
    shuffledQuestions.length > 0
      ? shuffledQuestions[currentQuestionIndex]
      : null;

  if (!currentQuestion) return <div> No question to display </div>;
  console.log({ currentQuestion });

  const handleAnswerSelect = (answerId: number) => {
    // increase correct answer count
    if (answerId === currentQuestion?.correctAnswerId) {
      useQuestionStore.getState().increaseCorrect();
    }

    // increase incorrect answer count
    if (answerId !== currentQuestion?.correctAnswerId) {
      useQuestionStore.getState().increaseIncorrect();
    }

    // Save the user's answer to the store
    saveUserAnswer(currentQuestion?.id as number, answerId); // Save the user's answer to the store
  };

  return (
    <div className="bg-white  border shadow-sm w-full overflow-hidden flex flex-col rounded-xl">
      <Dialog>
        <DialogTrigger>
          <div className="flex justify-center relative w-full h-64 md:h-80 lg:h-64">
            <Image
              src={
                "https://s.g1.ca/wp-content/uploads/autotest/202001302249003541.jpg"
              }
              alt="question image"
              className="object-cover"
              fill
            />
          </div>
        </DialogTrigger>

        <DialogContent className="md:w-full bg-transparent border-0 rounded-lg overflow-hidden xl:min-w-[700px] p-0 max-sm:w-[90%]  ">
          <div className="flex justify-between relative h-64 md:h-80 lg:h-64 overflow-hidden">
            <Image
              src={
                "https://s.g1.ca/wp-content/uploads/autotest/202001302249003541.jpg"
              }
              alt="question image"
              className=" object-contain"
              fill
            />
          </div>
        </DialogContent>
      </Dialog>
      <div className="p-6">
        <p className="text-lg md:text-2xl sm:text-xl font-bold">
          {currentQuestion?.question?.[language]}
        </p>

        <div className="flex-1 mt-4">
          {/* Render the List component */}
          {currentQuestion && (
            <List
              options={currentQuestion.options}
              language={language as Language}
              correctAnswerId={currentQuestion.correctAnswerId}
              handleAnswerSelect={handleAnswerSelect}
              userAnswer={currentQuestion.user_answer} // Pass the callback to the list
            />
          )}
        </div>

        {currentQuestion?.user_answer &&
          shuffledQuestions[currentQuestionIndex + 1] && (
            <div className="flex justify-end mt-4">
              <Button
                onClick={nextQuestion}
                disabled={currentQuestion?.user_answer == null} // Disable until answered
                variant="outline"
                className="transition-all border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500"
              >
                Next question
              </Button>
            </div>
          )}
      </div>
    </div>
  );
};

export default QuestionBank;
