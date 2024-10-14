"use client";

import React from "react";

import Nav from "@/components/home/Nav";
import Quiz from "@/app/blind-test/quiz";

function page() {
  return (
    <div className=" min-h-screen sm:py-20 py-10 flex gap-5 sm:gap-12  flex-col">
      <div className="flex items-center  justify-center p-4  md:p-0 ">
        <Quiz selected={false} />
      </div>
    </div>
  );
}

export default page;
