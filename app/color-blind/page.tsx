"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

// Mock questions data
const questions = [
  {
    id: 1,
    question: "What number do you see in the image?",
    imageUrl: "/placeholder.svg?height=200&width=200",
    options: ["12", "8", "3", "15"],
    correctAnswer: "8",
  },
  {
    id: 2,
    question: "Which direction is the arrow pointing?",
    imageUrl: "/placeholder.svg?height=200&width=200",
    options: ["Up", "Down", "Left", "Right"],
    correctAnswer: "Left",
  },
  {
    id: 3,
    question: "How many dots can you see?",
    imageUrl: "/placeholder.svg?height=200&width=200",
    options: ["5", "7", "9", "11"],
    correctAnswer: "9",
  },
  // Add more questions as needed
];

export default function ColorBlindnessTest() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    new Array(questions.length).fill("")
  );

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (value: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = value;
    setSelectedAnswers(newAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Color Blindness Test
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Question {currentQuestionIndex + 1}
            </h2>
            <p className="text-gray-600 mb-4">{currentQuestion.question}</p>
            <img
              src={currentQuestion.imageUrl}
              alt={`Test image for question ${currentQuestionIndex + 1}`}
              className="w-full max-w-sm mx-auto mb-4 rounded-lg shadow-md"
            />
            <RadioGroup
              value={selectedAnswers[currentQuestionIndex]}
              onValueChange={handleAnswerSelect}
              className="grid grid-cols-2 gap-4"
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Progress value={progress} className="w-full" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
              <span>
                {questions.length - (currentQuestionIndex + 1)} remaining
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
            variant="outline"
          >
            Previous
          </Button>
          <Button
            onClick={goToNextQuestion}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
