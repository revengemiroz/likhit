import React from "react";

const ProgressBar = ({ score, needed }: { score: number; needed: number }) => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Progress bar container */}
      <div className="w-4/5 h-4 bg-gray-200 rounded-full overflow-hidden mb-4 relative">
        {/* Filled portion of the progress bar */}
        <div
          className="h-full bg-green-400 rounded-full"
          style={{ width: `${score}%` }}
        ></div>
      </div>

      {/* Labels */}
      <div className="flex justify-between w-4/5 text-sm">
        {/* Your score */}
        <div className="text-center">
          <span className="text-green-400 font-bold">{score}%</span>
          <br />
          <span className="text-gray-600">Your score</span>
        </div>

        {/* Needed to pass */}
        <div className="text-center">
          <span className="text-red-400 font-bold">{needed}%</span>
          <br />
          <span className="text-gray-600">Needed to pass</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
