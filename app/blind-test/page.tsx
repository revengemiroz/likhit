import React from "react";

import Nav from "@/components/home/Nav";
import Quiz from "@/app/blind-test/quiz";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blind Test",
  description:
    "Participate in our exciting blind test quiz and challenge your knowledge!",
  keywords:
    "Blind Test, Quiz, Knowledge Challenge, Fun Quiz, Trivia, Test Your Knowledge",
  openGraph: {
    images:
      "https://utfs.io/f/Ug3TBysra1dXA9sImtE41SFw0mNZDItClxTshGraHEp72j4e", // Using the same image URL
  },
};
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
