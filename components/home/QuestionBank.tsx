"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from "react";

import List from "@/components/home/ListComponent"; // Ensure you have the List component in place
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Language } from "@/types";
import useQuestionStore from "@/app/store";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const isReviewMode = useRef<boolean>(pathname.includes("review"));
  const saveUserAnswer = useQuestionStore((state) => state.saveUserAnswer);
  const setFinish = useQuestionStore((state) => state.setFinish);
  const nextQuestion = useQuestionStore((state) => state.nextQuestion);
  const backQuestion = useQuestionStore((state) => state.backQuestion);
  const confirmAnswerState = useQuestionStore(
    (state) => state.confirmAnswerState
  );
  const setConfirmAnswerState = useQuestionStore(
    (state) => state.setConfirmAnswerState
  );
  const currentQuestionIndex = useQuestionStore(
    (state) => state.currentQuestionIndex
  );

  const setCurrentQuestionIndex = useQuestionStore(
    (state) => state.setCurrentQuestionIndex
  );
  const currentQuestion =
    shuffledQuestions.length > 0
      ? shuffledQuestions[currentQuestionIndex]
      : null;

  if (!currentQuestion) return <div> No question to display </div>;
  // console.log({ currentQuestion });

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
        {currentQuestion.image && (
          <DialogTrigger>
            <div className="flex justify-center relative w-full bg-slate-200 p-4 min-h-[200px]">
              <Image
                src={currentQuestion.image}
                alt="question image"
                className="flex justify-center items-center"
                width={150}
                height={150}
              />
            </div>
          </DialogTrigger>
        )}

        <DialogContent className="md:w-full shadow-md  bg-slate-200 border-0 min-h-[200px] flex justify-center items-center overflow-hidden  p-4 max-sm:w-[90%]  ">
          <div className="flex justify-between items-center relative overflow-hidden">
            <Image
              src={currentQuestion.image}
              alt="question image"
              width={200}
              height={200}
              className="flex justify-center items-center"
            />
          </div>
        </DialogContent>
      </Dialog>
      <div className="">
        <p className=" px-6 pt-6 text-lg md:text-2xl sm:text-xl font-bold">
          {currentQuestion?.question?.[language]}
        </p>

        <div className="flex-1 mt-4 px-6 md:px-6 pb-6">
          {/* Render the List component */}
          {currentQuestion && (
            <List
              options={currentQuestion.options}
              language={language as Language}
              correctAnswerId={currentQuestion.correctAnswerId}
              handleAnswerSelect={handleAnswerSelect}
              //@ts-ignore
              userAnswer={currentQuestion.user_answer} // Pass the callback to the list
            />
          )}
        </div>

        {confirmAnswerState != null && (
          <div className="flex justify-end pb-6 pr-6">
            <Button
              variant="outline"
              className="transition-all border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500"
              onClick={() => {
                handleAnswerSelect(confirmAnswerState);
                setConfirmAnswerState(null);
              }}
            >
              Confirm Answer
            </Button>
          </div>
        )}

        <div className="flex justify-between px-10 ">
          {isReviewMode.current &&
            shuffledQuestions[currentQuestionIndex - 1] && (
              <div className="flex justify-start w-full pb-6 pr-6">
                <Button
                  onClick={backQuestion}
                  // Disable until answered
                  variant="outline"
                  className="transition-all border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500"
                >
                  Previous
                </Button>
              </div>
            )}
          {currentQuestion?.user_answer &&
            !confirmAnswerState &&
            shuffledQuestions[currentQuestionIndex + 1] && (
              <div className="flex justify-end w-full pb-6 pr-6">
                <Button
                  onClick={nextQuestion}
                  // Disable until answered
                  variant="outline"
                  className="transition-all border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500"
                >
                  Next
                </Button>
              </div>
            )}
          {shuffledQuestions.length - 1 === currentQuestionIndex && (
            <div className="flex justify-end pb-6 pr-6">
              <Link href="/result">
                <Button
                  onClick={() => {
                    setCurrentQuestionIndex(0);
                    setFinish(true);
                  }}
                  // disabled={currentQuestion?.user_answer == null} // Disable until answered
                  variant="outline"
                  className="transition-all border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 text-[12px] sm:text-sm"
                >
                  Finish {isReviewMode ? "review" : "quiz"}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionBank;
