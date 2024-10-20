"use client";

import { useState, useEffect } from "react";

import { Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import TimesUp from "./times-up";

export default function Component() {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    // show the toast if time left is less than 10 minutes only once
    if (timeLeft <= 10 * 60 && timeLeft > 0) {
      toast({
        title: "Time is running out!",
        description: "You have less than 10 minutes left.",
      });
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft]);

  // if time left is 0, show the times up component
  if (timeLeft === 0) {
    return <TimesUp />;
  }

  // start timer when the component mounts
  useEffect(() => {
    setIsRunning(true);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center gap-2 ">
      <Clock className="w-4 h-4 text-gray-700" />
      <div
        className={`text-md font-semibold tabular-nums ${
          timeLeft < 600 ? "text-red-600" : "text-gray-700"
        }`}
      >
        {formatTime(timeLeft)}
      </div>
    </div>
  );
}
