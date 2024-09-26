"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, RotateCcw } from "lucide-react";
import React from "react";

import AnswerButton from "@/app/components/AnswerButton";
import { answers } from "./license";

function ScoreBoard() {
  return (
    <div className="flex flex-col max-w-[370px] h-fit ">
      <div className="flex flex-row gap-4 w-full mb-4">
        <Button
          className="w-full hover:bg-white flex items-center py-5 justify-center gap-2 group"
          variant="outline"
        >
          <span className="group-hover:text-blue-500">
            {/* Change text color on button hover */}
            <ChevronLeft className="w-4 h-4" />
          </span>
          <span className="group-hover:text-blue-500">
            {" "}
            {/* Change text color on button hover */}
            All Test
          </span>
        </Button>

        <Button
          className="w-full hover:bg-white flex items-center py-5 justify-center gap-2 group"
          variant="outline"
        >
          <span className="group-hover:text-blue-500">
            {/* Change text color on button hover */}
            <RotateCcw className="w-4 h-4" />
          </span>
          <span className="group-hover:text-blue-500">
            {" "}
            {/* Change text color on button hover */}
            Restart
          </span>
        </Button>
      </div>
      <div className="flex flex-col border shadow-sm bg-white rounded-xl py-4 px-6">
        <p className="text-xl font-semibold mb-4">Your Progress</p>
        <div className="flex gap-2 flex-wrap ">
          <AnswerButton variant="wrong">1</AnswerButton>
          <AnswerButton variant="right">2</AnswerButton>
          <AnswerButton variant="wrong">3</AnswerButton>
          <AnswerButton variant="neutral">4</AnswerButton>
          <AnswerButton variant="neutral">5</AnswerButton>
          <AnswerButton variant="neutral">6</AnswerButton>
          <AnswerButton variant="neutral">7</AnswerButton>
          <AnswerButton variant="neutral">8</AnswerButton>
          <AnswerButton variant="neutral">9</AnswerButton>
          <AnswerButton variant="neutral">10</AnswerButton>
          <AnswerButton variant="neutral">11</AnswerButton>
          <AnswerButton variant="wrong">12</AnswerButton>
          {answers.map((answer) => (
            <AnswerButton
              key={answer.id}
              variant={!answer.correct ? "right" : "wrong"}
            >
              13
            </AnswerButton>
          ))}
        </div>

        <div className="flex gap-2 mt-4 ">
          <div className="flex gap-2 items-center justify-center">
            <span className="text-green w-[6px] h-[6px] rounded-full bg-green-300" />
            <span className="font-semibold text-sm">0 Correct</span>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <span className="text-green w-[6px] h-[6px] rounded-full bg-red-300" />
            <span className="font-semibold text-sm">4 Incorrect</span>
          </div>

          {/* <div></div> */}
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
