"use client";
import React from "react";

import Nav from "@/components/home/Nav";
import useQuestionStore from "../store";

import ProgressBar from "./progressbar";

function page() {
  const correctCount = useQuestionStore((state) => state.count.correct);
  const incorrectCount = useQuestionStore((state) => state.count.incorrect);
  const totalCount = correctCount + incorrectCount;

  const percentage = Math.round((correctCount / totalCount) * 100);
  const message = percentage >= 70 ? "Congratulations!" : "Keep trying!";

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <div className="flex-1 flex items-center justify-center ">
        <div className="text-3xl bg-white rounded-md shadow-md font-bold w-3/5 text-center m-auto">
          <div className="grid grid-cols-[300px_1fr] border-green">
            <div className="border-green">a</div>
            <div className="border-green">
              <p>{message}</p>
              <ProgressBar score={27} needed={70} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
