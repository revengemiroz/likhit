"use client";

import React from "react";

import Nav from "@/components/home/Nav";
import Quiz from "@/app/blind-test/quiz";

function page() {
  return (
    <div className=" min-h-screen  flex gap-5 sm:gap-12  flex-col">
      <Nav />

      <div className="flex items-center justify-center p-4 md:p-0 ">
        <Quiz selected={false} />
      </div>
    </div>
  );
}

export default page;
