"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

import List from "@/app/components/List"; // Ensure you have the List component in place
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Language } from "@/app/types";
import useQuestionStore from "@/app/store";

interface QuestionBankProps {
  questionList: any;
  handleNextQuestion: () => void;
  disabled: boolean;
  language: string;
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
    saveUserAnswer(currentQuestion?.id, answerId); // Save the user's answer to the store
  };

  return (
    <div className="bg-white  border shadow-sm w-full overflow-hidden flex flex-col rounded-xl">
      <Dialog>
        <DialogTrigger>
          <div className="flex justify-center">
            <img
              src={
                "https://s.g1.ca/wp-content/uploads/autotest/202001302249003541.jpg"
              }
              alt="question image"
              className="w-full h-64 object-cover"
            />
          </div>
        </DialogTrigger>

        <DialogContent className="md:w-[400px] bg-transparent border-0 rounded-lg overflow-hidden xl:min-w-[700px] p-0">
          <div className="flex justify-between overflow-hidden">
            <img
              src={questionList?.image}
              alt="question image"
              className="w-full h-64 object-cover"
            />
          </div>
        </DialogContent>
      </Dialog>
      <div className="p-6">
        <p className="text-2xl font-bold">
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
        {console.log({ currentQuestion })}
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
