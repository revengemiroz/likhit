import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import useQuestionStore from "@/app/store";
import { usePathname } from "next/navigation";
export default function Index({
  variant = "neutral",
  children,
}: {
  variant: "right" | "wrong" | "neutral" | "selected";
  children?: React.ReactNode;
}) {
  const variantStyles = {
    right: "bg-green-400 text-white hover:bg-green-300",
    wrong: "bg-red-400 text-white hover:bg-red-300",
    neutral: "bg-[#f2f3f7] text-[#7c7c91] hover:bg-slate-300",
    selected:
      "bg-white text-[black] font-semibold hover:bg-white-300 border-2 border-blue-500",
  };

  const setCurrentQuestionIndex = useQuestionStore(
    (state) => state.setCurrentQuestionIndex
  );
  const confirmAnswerState = useQuestionStore(
    (state) => state.confirmAnswerState
  );
  const pathname = usePathname();
  const isReviewMode = useRef<boolean>(pathname.includes("review"));
  return (
    <Button
      className={`w-[28px] h-[28px]  sm:w-[32px] sm:h-[32px] text-[12px] sm:text-[14px] flex items-center justify-center font-medium rounded-lg  ${variantStyles[variant]}`}
      disabled={confirmAnswerState ? true : false}
      onClick={() => {
        if (isReviewMode) {
          setCurrentQuestionIndex(Number(children) - 1);
        }
      }}
    >
      {children}
    </Button>
  );
}
