import React from "react";
import { Button } from "@/components/ui/button";

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

  return (
    <Button
      className={`w-[28px] h-[28px]  sm:w-[32px] sm:h-[32px] text-[12px] sm:text-[14px] flex items-center justify-center font-medium rounded-lg  ${variantStyles[variant]}`}
    >
      {children}
    </Button>
  );
}
