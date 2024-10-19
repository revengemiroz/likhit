"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
import { PlayIcon, PauseIcon, RotateCcwIcon, Clock } from "lucide-react";

export default function Component() {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft]);

  const toggleTimer = () => {
    setIsRunning((prevState) => !prevState);
  };

  // start timer when the component mounts
  useEffect(() => {
    setIsRunning(true);
  }, []);

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(30 * 60);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  //   const progress = ((30 * 60 - timeLeft) / (30 * 60)) * 100;

  return (
    <div className="flex items-center gap-2 ">
      <Clock className="w-4 h-4" />
      <div
        className={`text-md font-semibold tabular-nums ${
          timeLeft < 600 ? "text-red-600" : "text-green-600"
        }`}
      >
        {formatTime(timeLeft)}
      </div>
    </div>
  );
}
