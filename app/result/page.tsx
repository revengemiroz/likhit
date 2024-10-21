"use client";
import React from "react";
import useQuestionStore from "../store";
import ProgressBar from "./progressbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ResultPage() {
  const correctCount = useQuestionStore((state) => state.count.correct);
  const incorrectCount = useQuestionStore((state) => state.count.incorrect);
  const totalCount = correctCount + incorrectCount;

  const percentage = Math.round((correctCount / totalCount) * 100);
  const message = percentage >= 70 ? "Congratulations!" : "Keep practicing!";

  // ... existing loading state ...

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex justify-center my-20 p-4">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-6">{message}</h1>

          <div className="mb-8">
            <ProgressBar score={percentage} needed={70} />
            <p className="text-center mt-2 text-lg">
              You scored <span className="font-semibold">{percentage}%</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle>Correct Answers</CardTitle>
                <CardDescription>
                  You got {correctCount} out of {totalCount} questions right.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button onClick={() => {}}>View Details</Button>
              </CardFooter>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle>Incorrect Answers</CardTitle>
                <CardDescription>
                  You got {incorrectCount} out of {totalCount} questions wrong.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button onClick={() => {}}>Review Mistakes</Button>
              </CardFooter>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle>Restart Test</CardTitle>
                <CardDescription>
                  Want to try again? Take the test once more to improve your
                  score.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button onClick={() => {}}>Restart</Button>
              </CardFooter>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle>Review All Answers</CardTitle>
                <CardDescription>
                  See a detailed breakdown of all your answers and explanations.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button onClick={() => {}}>Review All</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
