"use client";
import Image from "next/image";

import { RotateCcw, ChevronLeft } from "lucide-react";
import ScoreBoard from "@/app/components/ScoreBoard";
import QuestionBank from "@/app/components/QuestionBank";

import { Button } from "@/components/ui/button";
import Nav from "./components/Nav";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Nav />
      <div className="flex items-center flex-1 justify-center ">
        <div className="w-4/6 flex flex-row gap-4">
          <ScoreBoard />

          <QuestionBank />
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
            <div className="group hover:bg-blue-600 transition-all cursor-pointer w-56 h-32 border border-blue-400 shadow-sm  rounded-md items-center justify-center flex flex-col gap-1">
              <span className="group-hover:text-blue-600 group-hover:bg-white group-hover:font-medium group-hover:border-blue-600 group-hover:border text-sm w-8 h-8 rounded-md bg-blue-600 text-white flex justify-center items-center">
                En
              </span>
              <span className="group-hover:text-white text-md font-semibold">
                English
              </span>
            </div>
            <div className="group hover:bg-red-600 transition-all cursor-pointer w-56 h-32 border rounded-md items-center justify-center   flex flex-col gap-1">
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
    </div>
  );
}
