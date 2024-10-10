"use client";
import React from "react";

import Nav from "@/components/home/Nav";
import useQuestionStore from "../store";

import ProgressBar from "./progressbar";

import Card from "./Card";
import Image from "next/image";

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
        <div className="text-3xl  w-3/5 text-center m-auto">
          <div className="grid grid-cols-[300px_1fr] gap-4">
            <div className="shadow-sm bg-white flex items-center justify-center rounded-sm">
              <Image
                src="https://cdn.leonardo.ai/users/5fe926f4-90b2-46c7-a414-78b20998b2eb/generations/cc2408de-59ae-4036-948f-86a5ee6e07ab/AlbedoBase_XL_highquality_image_of_a_chubby_angry_looking_tra_1.jpg"
                width={300}
                height={100}
                className="object-contain shadow-md max-h-[400px] w-full rounded-md"
                alt="logo"
              />
            </div>
            <div className=" flex flex-col gap-6">
              <div className="flex flex-col gap-2 bg-white p-8 rounded-md shadow-md">
                <p className="text-3xl font-bold mb-4">{message}</p>
                <ProgressBar score={27} needed={70} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card
                  title="Restart this test"
                  description={
                    "Want to revisit the same questions you just did? Take this test once again."
                  }
                  onClick={() => {}}
                  buttonText="Restart"
                />

                <Card
                  title="Review your answers"
                  description={
                    "See which answers you chose and what the correct answers are."
                  }
                  onClick={() => {}}
                  buttonText="Review"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
