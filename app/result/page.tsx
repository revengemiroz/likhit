"use client";
import React from "react";
import Nav from "@/components/home/Nav";
import useQuestionStore from "../store";
import ProgressBar from "./progressbar";
import Card from "./Card";
import Image from "next/image";

function Page() {
  const correctCount = useQuestionStore((state) => state.count.correct);
  const incorrectCount = useQuestionStore((state) => state.count.incorrect);
  const totalCount = correctCount + incorrectCount;
  const percentage = totalCount
    ? Math.round((correctCount / totalCount) * 100)
    : 0;
  const message = percentage >= 70 ? "Congratulations!" : "Keep trying!";

  if (totalCount === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const imageUrl =
    percentage >= 70
      ? "https://cdn.leonardo.ai/users/5fe926f4-90b2-46c7-a414-78b20998b2eb/generations/065cb241-5c2e-463b-9682-69a731bcb397/AlbedoBase_XL_highquality_image_of_a_chubby_proud_looking_traf_1.jpg"
      : "https://cdn.leonardo.ai/users/5fe926f4-90b2-46c7-a414-78b20998b2eb/generations/cc2408de-59ae-4036-948f-86a5ee6e07ab/AlbedoBase_XL_highquality_image_of_a_chubby_angry_looking_tra_1.jpg";

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 py-12 flex items-center justify-center px-4">
        <div className="w-full lg:w-3/5 text-center m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-4">
            <div className="flex items-center justify-center">
              <Image
                src={imageUrl}
                width={300}
                height={100}
                className="object-contain rounded-md"
                alt="result"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 bg-white p-4 md:p-8 rounded-md shadow-md">
                <p className="text-2xl md:text-3xl font-bold mb-4">{message}</p>
                <ProgressBar
                  score={percentage}
                  needed={((totalCount + 4) * 10) / 2}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card
                  title="Restart this test"
                  description="Want to revisit the same questions you just did? Take this test once again."
                  onClick={() => {}}
                  buttonText="Restart"
                />
                <Card
                  title="Review your answers"
                  description="See which answers you chose and what the correct answers are."
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

export default Page;
