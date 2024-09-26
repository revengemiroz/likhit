import { Button } from "@/components/ui/button";
import React from "react";
import List from "@/app/components/List";

import { answers } from "../ScoreBoard/license";

function QuestionBank() {
  return (
    <div className="bg-white border shadow-sm w-full flex flex-col rounded-md p-6">
      <p className="text-2xl font-bold">
        While driving, a Class G1 learner must be supervised by an accompanying
        driver. The blood-alcohol level of the accompanying driver must be less
        than
      </p>

      <div className="flex-1 mt-4">
        {/* question list */}
        <List />
      </div>

      <div className="flex justify-end mt-4">
        <Button
          variant="outline"
          className="hover:bg-white hover:text-blue-500 hover:border-blue-500"
        >
          Next question
        </Button>
      </div>
    </div>
  );
}

export default QuestionBank;
