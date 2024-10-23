"use client";

import React from "react";

import Nav from "@/components/home/Nav";
import Quiz from "@/app/blind-test/quiz";

function page() {
  return (
    <div className=" min-h-screen flex gap-12 flex-col">
      <div className="flex items-center justify-center p-4 md:p-0">
        <div className="shadow-lg bg-white rounded-md md:w-2/5 mb-12 m-auto">
          <Quiz selected={false} />
        </div>
      </div>
    </div>
  );
}

export default page;
