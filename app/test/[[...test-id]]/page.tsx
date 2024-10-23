"use client";
import Image from "next/image";

import { RotateCcw, ChevronLeft, Flag } from "lucide-react";
import ScoreBoard from "@/components/home/ScoreBoard";
import QuestionBank from "@/components/home/QuestionBank";

import { Button } from "@/components/ui/button";
import Nav from "@/components/home/Nav";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState, useEffect } from "react";
import { questions } from "@/data/en";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
// import { cookies } from "next/headers";
import TimerComponent from "@/components/home/timer/timer-component";
import { Language, QuestionType } from "@/types";

export default function Home({ params }: { params: { "test-id": string } }) {
  // const tasks = useQuery(api.tasks.getTasks);
  const ENGLISH = "english";
  const NEPALI = "nepali";

  console.log({ params });

  // console.log({ tasks });

  const [open, setOpen] = useState(false);
  // Track the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState<QuestionType[]>(
    []
  );
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(ENGLISH);

  const shuffleArray = (array: QuestionType[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleLanguageChange = (lang: Language) => {
    setSelectedLanguage(lang); // Change language
  };

  useEffect(() => {
    setShuffledQuestions(shuffleArray([...questions])); // Shuffle a copy of the questions array
  }, []);

  const handleNextQuestion = () => {
    // Check if we are not at the last question
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full  min-h-screen flex flex-col lg:mx-auto">
      <main className=" flex-1 flex items-center justify-center py-12">
        <div className="flex items-center  flex-col flex-1 justify-center ">
          <div className="w-[90%] md:w-5/6 xl:w-4/6 flex items-center  justify-between  my-4 px-4 gap-2">
            <span className="text-xl font-semibold text-gray-700">
              {/* {params["test-id"]} */}
              Bike Test: {params["test-id"]}
            </span>
            {/* <span className="group w-8 h-8 flex justify-center items-center rounded-full cursor-pointer transition-all hover:bg-gray-200">
              <Flag
                className="w-4 h-4 text-gray-500 group-hover:fill-blue-500 group-hover:stroke-blue-500"
                color="gray"
                fill="gray"
              />
            </span>

            {selectedLanguage === ENGLISH ? (
              <span
                className="font-medium mr-8 text-md text-muted-foreground/90 cursor-pointer hover:text-blue-500 transition-all"
                onClick={() => handleLanguageChange(NEPALI)}
              >
                Np
              </span>
            ) : (
              <span
                className="font-medium mr-8 text-md text-muted-foreground/90 cursor-pointer hover:text-blue-500 transition-all"
                onClick={() => handleLanguageChange(ENGLISH)}
              >
                En
              </span>
            )} */}

            <TimerComponent />
          </div>
          <div className="w-[90%] md:w-5/6 xl:w-4/6 flex flex-col lg:flex-row gap-4 ">
            <ScoreBoard />

            {shuffledQuestions.length > 0 ? (
              <QuestionBank
                handleNextQuestion={handleNextQuestion}
                questionList={shuffledQuestions[currentQuestionIndex]}
                disabled={currentQuestionIndex >= shuffledQuestions.length - 1}
                language={selectedLanguage}
              />
            ) : (
              <div className="border shadow-sm w-full overflow-hidden flex flex-col rounded-xl bg-white">
                <div className="animate-pulse flex flex-col ">
                  <div className="w-full h-52 bg-gray-200 rounded-md mb-4"></div>
                  <div className="w-full px-6">
                    <div className="w-2/3 h-6  bg-gray-200 rounded-md mb-2"></div>
                    <div className="w-1/2 h-6 bg-gray-200 rounded-md mb-4"></div>
                  </div>

                  <div className="space-y-2 px-6">
                    <div className="w-full h-10 bg-gray-200 rounded-md"></div>
                    <div className="w-full h-10 bg-gray-200 rounded-md"></div>
                    <div className="w-full h-10 bg-gray-200 rounded-md"></div>
                    <div className="w-full h-10 bg-gray-200 rounded-md"></div>
                  </div>

                  <div className="flex justify-end p-6">
                    <div className="w-32 h-10 bg-gray-200 rounded-md"></div>
                  </div>
                </div>
              </div>
            )}

            {/* add spinner */}
          </div>
        </div>

        <Dialog
          open={open}
          onOpenChange={() => {
            setOpen(false);
          }}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Choose Language for Driving Exam</DialogTitle>
              <DialogDescription>
                Select the language you would like to use for your driving exam.
              </DialogDescription>
            </DialogHeader>
            <div className=" flex justify-between">
              <div
                // onClick={() => cookieStore.set("lang", "en")}
                className="group hover:bg-blue-600 transition-all cursor-pointer w-56 h-32 border border-blue-400 shadow-sm  rounded-md items-center justify-center flex flex-col gap-1"
              >
                <span className="group-hover:text-blue-600 group-hover:bg-white group-hover:font-medium group-hover:border-blue-600 group-hover:border text-sm w-8 h-8 rounded-md bg-blue-600 text-white flex justify-center items-center">
                  En
                </span>
                <span className="group-hover:text-white text-md font-semibold">
                  English
                </span>
              </div>
              <div
                // onClick={() => cookieStore.set("lang", "np")}
                className="group hover:bg-red-600 transition-all cursor-pointer w-56 h-32 border rounded-md items-center justify-center   flex flex-col gap-1"
              >
                <span className="group-hover:text-red-600 group-hover:bg-white group-hover:font-medium group-hover:border-red-600 group-hover:border text-sm w-8 h-8 rounded-md bg-red-600 text-white flex justify-center items-center">
                  Np
                </span>
                <span className="group-hover:text-white text-md font-semibold">
                  Nepali
                </span>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}
