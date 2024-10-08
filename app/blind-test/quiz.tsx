import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

import { ishiharaTestPlate } from "@/data/en/color-blind";
import Result from "./result";

function Quiz({ selected = false }: { selected: boolean }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0); // Tracks how many correct answers
  const [quizCompleted, setQuizCompleted] = useState(false); // To check if quiz is finished

  // Randomize the first question when the component mounts
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * ishiharaTestPlate.length);
    setCurrentQuestionIndex(randomIndex);
  }, []);

  const handleAnswer = (selectedAnswer: string) => {
    const correctAnswer =
      ishiharaTestPlate[currentQuestionIndex].correctAnswerId;

    // Check if the user's selected answer is correct
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    // Proceed to the next question or finish quiz
    if (currentQuestionIndex < ishiharaTestPlate.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz is completed
      setQuizCompleted(true);
    }
  };

  if (quizCompleted) {
    // Determine if the user may have color blindness based on their score
    const colorBlindnessResult =
      score < ishiharaTestPlate.length * 0.8
        ? "Your test results indicate that you have Protanopia, a type of red-green color blindness. This means you have difficulty distinguishing between red, orange, and green colors"
        : "You have passed the color blindness test with flying colors. Your vision is perfectly normal, and you can see the full spectrum of colors.";
    const lowScore = score < ishiharaTestPlate.length * 0.8;

    return (
      <div className="rounded-md border">
        <Result answer={colorBlindnessResult} lowScore={lowScore} />
        <div className="flex justify-center mb-8">
          <Button onClick={() => window.location.reload()}>Restart Quiz</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-center h-[326px] overflow-hidden">
        <img
          className="w-full h-full object-contain"
          src={ishiharaTestPlate[currentQuestionIndex].imageUrl}
          alt="Ishihara test plate"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {ishiharaTestPlate[currentQuestionIndex].options.map((option) => (
          <Button
            key={option.id} // Use a unique key for the mapped options
            onClick={() => handleAnswer(option.answer)}
            variant={"outline"}
            className={`text-sm py-[20px] font-medium ${
              selected && "bg-blue-500 text-white"
            }`}
          >
            {option.answer}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
