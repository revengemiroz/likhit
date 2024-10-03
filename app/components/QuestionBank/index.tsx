"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

import List from "@/app/components/List"; // Ensure you have the List component in place
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Language } from "@/app/types";

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
  const [isAnswered, setIsAnswered] = useState(false);

  // Reset the answered state when a new question is loaded
  useEffect(() => {
    setIsAnswered(false);
  }, [questionList]);

  // Callback function to handle the answer selection
  const handleAnswerSelect = () => {
    setIsAnswered(true);
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
          {questionList?.question?.[language]}
        </p>

        <div className="flex-1 mt-4">
          {/* Render the List component */}
          <List
            options={questionList?.options}
            language={language as Language}
            correctAnswerId={questionList?.correctAnswerId}
            onAnswerSelect={handleAnswerSelect} // Pass the callback to the list
          />
        </div>

        <div className="flex justify-end mt-4">
          <Button
            onClick={handleNextQuestion}
            disabled={!isAnswered || disabled} // Disable until answered
            variant="outline"
            className="transition-all border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500"
          >
            Next question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionBank;
