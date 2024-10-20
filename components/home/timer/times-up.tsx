import { Button } from "@/components/ui/button";
import React from "react";

import { Bike } from "lucide-react";

function TimesUp() {
  return (
    // absolute center with overlay and dont allow scrolling and clicking outside
    <div className="fixed inset-0 z-[9999] bg-black/50 ">
      <div className="absolute z-[9999] flex flex-col rounded-lg shadow-lg p-12  w-2/5 h-auto bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  items-center justify-center">
        <div className="flex items-center justify-center">
          <Bike className="w-24 h-24" />
        </div>
        <p className="text-2xl font-bold mt-6 mb-4">Times Up !</p>
        <p className="text-center leading-2 text-base text-gray-500 mb-4">
          "Congratulations, quiz warrior! Hit the button below to catapult your
          answers into the great unknown!"
        </p>
        <Button className="w-fit p-4">Submit Quiz</Button>
      </div>
    </div>
  );
}

export default TimesUp;
