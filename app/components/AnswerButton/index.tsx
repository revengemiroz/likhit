import React from "react";
import { Button } from "@/components/ui/button";

export default function Index({
  variant = "neutral",
  children,
}: {
  variant: "right" | "wrong" | "neutral";
  children?: React.ReactNode;
}) {
  const variantStyles = {
    right: "bg-green-400 text-white hover:bg-green-300",
    wrong: "bg-red-400 text-white hover:bg-red-300",
    neutral: "bg-[#f2f3f7] text-[#7c7c91] hover:bg-slate-300",
  };

  return (
    <Button
      className={`w-[32px] h-[32px] text-[14px] flex items-center justify-center font-medium rounded-md  ${variantStyles[variant]}`}
    >
      {children}
    </Button>
  );
}
