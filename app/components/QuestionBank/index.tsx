import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import List from "@/app/components/List"; // Ensure you have the List component in place
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
    <div className="bg-white border shadow-sm w-full overflow-hidden flex flex-col rounded-xl">
      <Dialog>
        <DialogTrigger>
          <div className="flex justify-center">
            <img
              src={
                "https://scontent-fra3-1.cdninstagram.com/v/t51.29350-15/412831027_920044783062893_3171879095891739096_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-fra3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=Csoe8RBJF-MQ7kNvgH5t2qj&_nc_gid=16fe24f921474e30987d1c8132d673c2&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AYADnvETwQXUQnxz59a13gB5N94uDaPnO9AW04hQiPm8Ww&oe=670264C8&_nc_sid=2999b8"
              }
              alt="question image"
              className="w-full h-64 object-cover"
            />
          </div>
        </DialogTrigger>
        <div className="p-6">
          <p className="text-2xl font-bold">
            {questionList?.question?.[language]}
          </p>

          <div className="flex-1 mt-4">
            {/* Render the List component */}
            <List
              options={questionList?.options}
              language={language}
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
    </div>
  );
};

export default QuestionBank;
